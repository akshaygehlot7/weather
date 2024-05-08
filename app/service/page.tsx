import React from 'react'

const Service = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20 h-full mb-40">
      <h1 className="text-3xl font-bold mb-8">Our Weather App Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Real-time Weather Updates</h2>
          <p className="text-lg mb-6">Stay informed with current weather conditions in your area with our real-time updates.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">7-Day Weather Forecast</h2>
          <p className="text-lg mb-6">Plan ahead with our detailed 5-day weather forecast, including temperature, humidity, wind speed, and more.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Location-based Weather Search</h2>
          <p className="text-lg mb-6">Get weather information for any location worldwide by simply entering the city name or ZIP code.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Responsive Design</h2>
          <p className="text-lg mb-6">Access our weather app seamlessly on any device, whether its a smartphone, tablet, or desktop computer.</p>
        </div>
      </div>
    </div>
  )
}

export default Service
