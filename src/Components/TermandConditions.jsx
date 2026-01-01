import React from 'react'

const TermsAndConditions = () => {
  const handleBack = () => {
    window.history.back()
  }

  return (
    <section className='bg-black min-h-screen text-slate-200 p-6 text-xs font-semibold'>
      <div className='max-w-4xl mx-auto'>
        <button 
          onClick={handleBack}
          className='mb-6 text-emerald-500 hover:text-emerald-400 font-semibold'
        >
          ← Back
        </button>

        <div className='space-y-8'>
          <div>
            <h1 className='text-3xl font-bold text-emerald-500 mb-2'>Terms and Conditions</h1>
            <p className='text-sm text-slate-400'>Last updated: January 2, 2026</p>
          </div>

          <div className='space-y-6 border border-[#222528] rounded-lg p-6'>
            <section>
              <h2 className='text-xl font-bold text-white mb-3'>1. Acceptance of Terms</h2>
              <p className='text-slate-300 leading-relaxed'>
                By accessing and using Attendance Tracker, you accept and agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use this application.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>2. Description of Service</h2>
              <p className='text-slate-300 leading-relaxed mb-2'>
                Attendance Tracker is a web application that helps students:
              </p>
              <ul className='list-disc list-inside text-slate-300 space-y-1 ml-4'>
                <li>Track their attendance records from their institution's portal</li>
                <li>Calculate attendance percentages and predictions</li>
                <li>Plan leaves and holidays</li>
                <li>View friends' attendance (with proper authorization)</li>
                <li>Receive insights about attendance requirements</li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>3. User Responsibilities</h2>
              <div className='space-y-3'>
                <div>
                  <h3 className='font-semibold text-emerald-400 mb-2'>3.1 Account Credentials</h3>
                  <p className='text-slate-300 leading-relaxed'>You agree to:</p>
                  <ul className='list-disc list-inside text-slate-300 space-y-1 ml-4'>
                    <li>Provide accurate registration number and password</li>
                    <li>Keep your credentials confidential and secure</li>
                    <li>Not share your login information with unauthorized parties</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                </div>
                <div>
                  <h3 className='font-semibold text-emerald-400 mb-2'>3.2 Acceptable Use</h3>
                  <p className='text-slate-300 leading-relaxed'>You agree NOT to:</p>
                  <ul className='list-disc list-inside text-slate-300 space-y-1 ml-4'>
                    <li>Use the app for any illegal or unauthorized purpose</li>
                    <li>Attempt to hack, disrupt, or compromise the app's security</li>
                    <li>Access others' accounts without their explicit permission</li>
                    <li>Use automated scripts or bots to access the service</li>
                    <li>Reverse engineer or copy any part of the application</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>4. Data Accuracy and Liability</h2>
              <div className='space-y-3'>
                <div>
                  <h3 className='font-semibold text-emerald-400 mb-2'>4.1 Data Accuracy</h3>
                  <p className='text-slate-300 leading-relaxed'>
                    We fetch attendance data directly from your institution's portal. While we strive for accuracy, 
                    we cannot guarantee that the data displayed is error-free or matches official records at all times. 
                    You should verify important attendance information with your institution directly.
                  </p>
                </div>
                <div>
                  <h3 className='font-semibold text-emerald-400 mb-2'>4.2 No Liability</h3>
                  <p className='text-slate-300 leading-relaxed'>
                    Attendance Tracker is provided "as is" without warranties of any kind. We are not liable for:
                  </p>
                  <ul className='list-disc list-inside text-slate-300 space-y-1 ml-4'>
                    <li>Any discrepancies between displayed data and official records</li>
                    <li>Academic consequences resulting from reliance on app predictions</li>
                    <li>Loss of data or service interruptions</li>
                    <li>Unauthorized access to your account due to credential mishandling</li>
                    <li>Any damages arising from use or inability to use the service</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>5. Third-Party Services</h2>
              <p className='text-slate-300 leading-relaxed'>
                This app interfaces with your institution's attendance portal (VIIT or VIEW). We are not affiliated 
                with these institutions and are not responsible for:
              </p>
              <ul className='list-disc list-inside text-slate-300 space-y-1 ml-4'>
                <li>Changes to their API or portal structure</li>
                <li>Their data handling practices</li>
                <li>Service outages on their end</li>
                <li>Any actions taken by the institution based on your use of this app</li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>6. Intellectual Property</h2>
              <p className='text-slate-300 leading-relaxed'>
                All content, features, and functionality of Attendance Tracker, including but not limited to design, 
                code, graphics, and logos, are owned by the app developer and are protected by intellectual property laws. 
                You may not copy, modify, distribute, or create derivative works without express permission.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>7. Service Availability</h2>
              <p className='text-slate-300 leading-relaxed'>
                We strive to maintain the service but do not guarantee:
              </p>
              <ul className='list-disc list-inside text-slate-300 space-y-1 ml-4'>
                <li>Uninterrupted or error-free operation</li>
                <li>24/7 availability</li>
                <li>Compatibility with all devices or browsers</li>
                <li>That the service will meet all your requirements</li>
              </ul>
              <p className='text-slate-300 leading-relaxed mt-3'>
                We reserve the right to modify, suspend, or discontinue the service at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>8. User-Generated Content</h2>
              <p className='text-slate-300 leading-relaxed'>
                When you mark leave dates, holidays, or select periods to skip, this data is stored locally on your 
                device. You are responsible for the accuracy of this information and how you use it to plan your attendance.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>9. Friend Tracking Feature</h2>
              <p className='text-slate-300 leading-relaxed mb-2'>
                The friend tracking feature allows you to view others' attendance by entering their credentials. You agree:
              </p>
              <ul className='list-disc list-inside text-slate-300 space-y-1 ml-4'>
                <li>To only access accounts with explicit permission from the account holder</li>
                <li>Not to misuse or share information obtained through this feature</li>
                <li>That unauthorized access may violate institutional policies and laws</li>
              </ul>
              <p className='text-slate-300 leading-relaxed mt-3'>
                We are not responsible for misuse of this feature by users.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>10. Termination</h2>
              <p className='text-slate-300 leading-relaxed'>
                We reserve the right to terminate or suspend your access to the service at our sole discretion, 
                without notice, for conduct that we believe violates these Terms or is harmful to other users, us, 
                or third parties, or for any other reason.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>11. Indemnification</h2>
              <p className='text-slate-300 leading-relaxed'>
                You agree to indemnify and hold harmless the app developer and its affiliates from any claims, 
                losses, damages, liabilities, and expenses (including legal fees) arising from your use of the 
                service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>12. Changes to Terms</h2>
              <p className='text-slate-300 leading-relaxed'>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon 
                posting. Your continued use of the service after changes constitutes acceptance of the modified Terms. 
                We encourage you to review these Terms periodically.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>13. Governing Law</h2>
              <p className='text-slate-300 leading-relaxed'>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes 
                arising from these Terms or your use of the service shall be subject to the exclusive jurisdiction 
                of the courts in Visakhapatnam, Andhra Pradesh, India.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>14. Educational Purpose Disclaimer</h2>
              <p className='text-slate-300 leading-relaxed'>
                This app is designed as a convenience tool for students to track their attendance. It should not be 
                used as the sole basis for making attendance decisions. Always verify with official sources and comply 
                with your institution's attendance policies.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>15. Contact Information</h2>
              <p className='text-slate-300 leading-relaxed'>
                If you have any questions about these Terms and Conditions, please provide feedback through the app 
                using the thumbs down button or contact us through available feedback channels.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-bold text-white mb-3'>16. Severability</h2>
              <p className='text-slate-300 leading-relaxed'>
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be 
                limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in 
                full force and effect.
              </p>
            </section>
          </div>

          <div className='border-t border-[#222528] pt-6 text-center'>
            <p className='text-slate-400 text-sm'>
              By clicking "Submit" on the login page or by using this service, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsAndConditions
