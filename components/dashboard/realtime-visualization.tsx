'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface DataPoint {
  id: number;
  value: number;
  timestamp: number;
}

export function RealtimeVisualization() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const idCounter = useRef(0);

  // Generate new data point
  const generateDataPoint = () => {
    const newValue = Math.floor(Math.random() * 100);
    const newPoint: DataPoint = {
      id: idCounter.current++,
      value: newValue,
      timestamp: Date.now(),
    };
    
    setData(prev => {
      const newData = [...prev, newPoint];
      // Keep only the last 30 data points
      return newData.length > 30 ? newData.slice(1) : newData;
    });
  };

  // Start/stop the data generation
  const togglePlayback = () => {
    if (isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setIsPlaying(false);
    } else {
      intervalRef.current = setInterval(generateDataPoint, 300);
      setIsPlaying(true);
    }
  };

  // Initialize and clean up
  useEffect(() => {
    intervalRef.current = setInterval(generateDataPoint, 300);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Find min and max values for scaling
  const values = data.map(d => d.value);
  const minValue = values.length > 0 ? Math.min(...values) : 0;
  const maxValue = values.length > 0 ? Math.max(...values) : 100;
  const range = maxValue - minValue || 1;

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Real-time Data Stream</CardTitle>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlayback}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            isPlaying 
              ? 'bg-destructive text-destructive-foreground' 
              : 'bg-primary text-primary-foreground'
          }`}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </motion.button>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-end justify-center gap-1 w-full">
          {data.map((point, index) => {
            // Calculate height based on value (0-100% of container height)
            const heightPercentage = ((point.value - minValue) / range) * 80 + 10;
            
            return (
              <motion.div
                key={point.id}
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: `${heightPercentage}%`, 
                  opacity: 1,
                  backgroundColor: [
                    '#8884d8', 
                    '#82ca9d', 
                    '#ffc658',
                    '#ff8042',
                    '#0088fe'
                  ][Math.floor(point.value / 20)]
                }}
                transition={{ duration: 0.3 }}
                className="w-4 rounded-t-sm min-h-1"
                style={{
                  boxShadow: '0 0 4px rgba(0,0,0,0.2)'
                }}
              />
            );
          })}
          
          {data.length === 0 && (
            <div className="flex items-center justify-center h-full w-full text-muted-foreground">
              Waiting for data...
            </div>
          )}
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            {isPlaying 
              ? `Streaming live data... (${data.length} points)` 
              : 'Stream paused'}
          </p>
          <div className="mt-2 flex justify-center gap-2">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#8884d8] mr-1"></div>
              <span className="text-xs">Low</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#82ca9d] mr-1"></div>
              <span className="text-xs">Medium</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#ffc658] mr-1"></div>
              <span className="text-xs">High</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#ff8042] mr-1"></div>
              <span className="text-xs">Very High</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
