import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ComparisonPoint {
  problem: string;
  solution: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
}