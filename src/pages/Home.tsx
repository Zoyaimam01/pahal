import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { motion } from 'framer-motion'
import { AlertCircle, MapPin, Camera } from 'lucide-react'

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-b from-blue-50 to-white py-20'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-6xl font-bold mb-6 text-gray-900'
          >
            Pahal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='text-2xl text-gray-600 mb-4'
          >
            AI-Powered Emergency Response System
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='text-lg text-gray-500 mb-8 max-w-2xl mx-auto'
          >
            Saving lives through faster response with real-time AI detection and community reporting
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='flex gap-4 justify-center'
          >
            <Link to='/report'>
              <Button size='lg'>Report Incident</Button>
            </Link>
            <Link to='/hotspots'>
              <Button size='lg' variant='outline'>View Hotspots</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12'>Key Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow'
            >
              <Camera className='w-16 h-16 mx-auto mb-4 text-blue-600' />
              <h3 className='text-xl font-semibold mb-2'>AI Detection</h3>
              <p className='text-gray-600'>Smart cameras automatically detect accidents in real-time</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow'
            >
              <AlertCircle className='w-16 h-16 mx-auto mb-4 text-blue-600' />
              <h3 className='text-xl font-semibold mb-2'>Community Reports</h3>
              <p className='text-gray-600'>Citizens can quickly report incidents with photos</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow'
            >
              <MapPin className='w-16 h-16 mx-auto mb-4 text-blue-600' />
              <h3 className='text-xl font-semibold mb-2'>Hotspot Mapping</h3>
              <p className='text-gray-600'>Visualize accident-prone areas for prevention</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
