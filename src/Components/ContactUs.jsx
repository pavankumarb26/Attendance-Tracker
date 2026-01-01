import React, { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleBack = () => {
    window.history.back()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields')
      return
    }
    const mailtoLink = `mailto:tarunsaiyendava@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <section className='bg-black min-h-screen text-slate-200 p-6 font-semibold text-xs'>
      <div className='max-w-4xl mx-auto'>
        <button 
          onClick={handleBack}
          className='mb-6 text-emerald-500 hover:text-emerald-400 font-semibold'
        >
          ← Back
        </button>

        <div className='space-y-8'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-emerald-500 mb-2'>Contact Us</h1>
            <p className='text-slate-400'>We'd love to hear from you</p>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            {/* Contact Form */}
            <div className='border border-[#222528] rounded-lg p-6'>
              <h2 className='text-2xl font-bold text-white mb-4'>Send us a message</h2>
              <div className='space-y-4'>
                <div>
                  <label htmlFor='name' className='block text-sm font-semibold text-slate-300 mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full bg-black border border-[#222528] rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-0 focus:border-emerald-500'
                    placeholder='Your name'
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-semibold text-slate-300 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full bg-black border border-[#222528] rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-0 focus:border-emerald-500'
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label htmlFor='subject' className='block text-sm font-semibold text-slate-300 mb-2'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full bg-black border border-[#222528] rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-0 focus:border-emerald-500'
                    placeholder='What is this about?'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-semibold text-slate-300 mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows='5'
                    className='w-full bg-black border border-[#222528] rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-0 focus:border-emerald-500 resize-none'
                    placeholder='Tell us what you think...'
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className='w-full bg-emerald-500 text-black font-bold py-3 rounded-lg hover:bg-emerald-400 transition-colors'
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className='space-y-6'>
              <div className='border border-[#222528] rounded-lg p-6 bg-gradient-to-br from-emerald-950/20 to-black'>
                <h2 className='text-2xl font-bold text-white mb-4'>Get in Touch</h2>
                <p className='text-slate-300 leading-relaxed mb-4'>
                  Have questions, suggestions, or found a bug? We're here to help! Feel free to reach out 
                  through any of the channels below.
                </p>
                
                <div className='space-y-4'>
                  <div>
                    <h3 className='font-semibold text-emerald-400 mb-1'>Email</h3>
                    <a 
                      href='mailto:tarunsaiyendava@gmail.com'
                      className='text-slate-300 hover:text-emerald-400 transition-colors'
                    >
                      tarunsaiyendava@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className='font-semibold text-emerald-400 mb-1'>Developer</h3>
                    <p className='text-slate-300'>Y Tarun Sai Krishna</p>
                    <p className='text-slate-400 text-sm'>CSE, Batch 2022-2026</p>
                  </div>
                </div>
              </div>

              <div className='border border-[#222528] rounded-lg p-6'>
                <h3 className='text-xl font-bold text-white mb-3'>What can you contact us for?</h3>
                <ul className='space-y-2 text-slate-300 text-sm'>
                  <li className='flex items-start gap-2'>
                    <span className='text-emerald-500 mt-1'>•</span>
                    <span>Report bugs or technical issues</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-emerald-500 mt-1'>•</span>
                    <span>Suggest new features or improvements</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-emerald-500 mt-1'>•</span>
                    <span>Ask questions about how to use the app</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-emerald-500 mt-1'>•</span>
                    <span>Share feedback about your experience</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-emerald-500 mt-1'>•</span>
                    <span>Report data discrepancies</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-emerald-500 mt-1'>•</span>
                    <span>Collaborate or contribute to the project</span>
                  </li>
                </ul>
              </div>

              <div className='border border-emerald-700/30 bg-emerald-950/10 rounded-lg p-6'>
                <h3 className='text-lg font-bold text-emerald-400 mb-2'>Quick Response</h3>
                <p className='text-slate-300 text-sm leading-relaxed'>
                  We typically respond within 24-48 hours. For urgent issues, please mention "URGENT" 
                  in your subject line.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className='border border-[#222528] rounded-lg p-6'>
            <h2 className='text-2xl font-bold text-white mb-4'>Frequently Asked Questions</h2>
            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold text-emerald-400 mb-2'>Why is my attendance not updating?</h3>
                <p className='text-slate-300 text-sm'>
                  Make sure you click the "Fetch Attendance" button to get the latest data from your institution's portal. 
                  If the issue persists, check your credentials or contact us.
                </p>
              </div>
              <div>
                <h3 className='font-semibold text-emerald-400 mb-2'>Is my data secure?</h3>
                <p className='text-slate-300 text-sm'>
                  Yes! Your credentials are stored locally on your device. We don't permanently store your password 
                  on our servers. Read our Privacy Policy for more details.
                </p>
              </div>
              <div>
                <h3 className='font-semibold text-emerald-400 mb-2'>Can I use this for multiple institutions?</h3>
                <p className='text-slate-300 text-sm'>
                  Currently, we support VIIT and VIEW institutions. If you'd like support for other institutions, 
                  please contact us with the details.
                </p>
              </div>
              <div>
                <h3 className='font-semibold text-emerald-400 mb-2'>How accurate are the predictions?</h3>
                <p className='text-slate-300 text-sm'>
                  The predictions are based on your current attendance and the dates you mark as leaves/holidays. 
                  They're estimates and should be verified with official sources for important decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs