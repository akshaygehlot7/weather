import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20" style={{height: "30rem"}}>
    <h1 className="text-3xl font-bold mb-4">About Our Weather App</h1>
    <p className="text-lg mb-4">Welcome to our weather application! Our goal is to provide accurate and up-to-date weather information to users around the world.</p>
    <p className="text-lg mb-4">Features:</p>
    <ul className="list-disc pl-6 mb-4">
      <li>Real-time weather updates</li>
      <li>7-day weather forecast</li>
      <li>Search for weather by location</li>
      <li>Responsive design for mobile and desktop</li>
    </ul>
    <p className="text-lg">Thank you for using our app!</p>
  </div>
  )
}

export default About
