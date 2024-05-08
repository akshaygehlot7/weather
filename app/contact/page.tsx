

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20 mb-20">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">Have a question or feedback about our weather app? Feel free to reach out to us using the form below.</p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
              <textarea id="message" name="message" className="h-20 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <p className="text-lg mb-4">Yashashree, Sukhsagar Nagar, Kondhwa Budruk</p>
          <p className="text-lg mb-4">Pune, Maharashtra</p>
          <p className="text-lg mb-4">411046</p>
        </div>
      </div>
    </div>
  )
} 

export default Contact
