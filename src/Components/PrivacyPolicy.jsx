import React from 'react'

const PrivacyPolicy = () => {
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
                        <h1 className='text-3xl font-bold text-emerald-500 mb-2'>Privacy Policy</h1>
                        <p className='text-sm text-slate-400'>Last updated: January 2, 2026</p>
                    </div>

                    <div className='space-y-6 border border-[#222528] rounded-lg p-6'>
                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>1. Introduction</h2>
                            <p className='text-slate-300 leading-relaxed'>
                                Welcome to Attendance Tracker. We respect your privacy and are committed to protecting your personal information.
                                This Privacy Policy explains how we collect, use, and safeguard your data when you use our application.
                            </p>
                        </section>
                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>6.5 Google AdSense and Cookies</h2>
                            <p className='text-slate-300 leading-relaxed'>
                                We use Google AdSense to serve ads when you visit our website. Google use cookies to serve ads based on your prior visits to our website or other websites.
                                Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet.
                                You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-emerald-500 underline">Ads Settings</a>.
                            </p>
                        </section>
                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>2. Information We Collect</h2>
                            <div className='space-y-3'>
                                <div>
                                    <h3 className='font-semibold text-emerald-400 mb-2'>2.1 Personal Information</h3>
                                    <p className='text-slate-300 leading-relaxed mb-2'>We collect the following information:</p>
                                    <ul className='list-disc list-inside text-slate-300 space-y-1 ml-4'>
                                        <li>Registration number (student ID)</li>
                                        <li>Password (for authentication with your institution's system)</li>
                                        <li>Attendance records retrieved from your institution</li>
                                        <li>Leave and holiday dates you mark in the app</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-semibold text-emerald-400 mb-2'>2.2 Usage Data</h3>
                                    <p className='text-slate-300 leading-relaxed'>
                                        We may collect basic usage logs to improve app performance and troubleshoot issues.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>3. How We Use Your Information</h2>
                            <p className='text-slate-300 leading-relaxed mb-2'>Your information is used to:</p>
                            <ul className='list-disc list-inside text-slate-300 space-y-1 ml-4'>
                                <li>Fetch and display your attendance data from your institution's portal</li>
                                <li>Calculate attendance percentages and provide predictions</li>
                                <li>Store your credentials locally on your device for convenience</li>
                                <li>Allow you to track friends' attendance (with their credentials)</li>
                                <li>Improve app functionality and user experience</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>4. Data Storage</h2>
                            <div className='space-y-3'>
                                <div>
                                    <h3 className='font-semibold text-emerald-400 mb-2'>4.1 Local Storage</h3>
                                    <p className='text-slate-300 leading-relaxed'>
                                        Your credentials and attendance data are primarily stored locally on your device using browser
                                        localStorage. This means your sensitive information remains on your device and is not transmitted
                                        to our servers.
                                    </p>
                                </div>
                                <div>
                                    <h3 className='font-semibold text-emerald-400 mb-2'>4.2 Server Communication</h3>
                                    <p className='text-slate-300 leading-relaxed'>
                                        When you fetch attendance data, your credentials are sent directly to your institution's API
                                        through our proxy server. We do not permanently store your credentials on our servers.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>5. Data Security</h2>
                            <p className='text-slate-300 leading-relaxed mb-2'>
                                We implement reasonable security measures to protect your information:
                            </p>
                            <ul className='list-disc list-inside text-slate-300 space-y-1 ml-4'>
                                <li>HTTPS encryption for all data transmission</li>
                                <li>No permanent storage of passwords on our servers</li>
                                <li>Local device storage for sensitive credentials</li>
                                <li>Secure API communication with your institution's portal</li>
                            </ul>
                            <p className='text-slate-300 leading-relaxed mt-3'>
                                However, no method of transmission over the internet is 100% secure. While we strive to protect
                                your information, we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>6. Third-Party Services</h2>
                            <p className='text-slate-300 leading-relaxed'>
                                Our app communicates with your institution's attendance portal to retrieve your data. We are not
                                responsible for the privacy practices of your institution's systems. Please review your institution's
                                privacy policy for information about how they handle your data.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>7. Your Rights</h2>
                            <p className='text-slate-300 leading-relaxed mb-2'>You have the right to:</p>
                            <ul className='list-disc list-inside text-slate-300 space-y-1 ml-4'>
                                <li>Access your stored data (available in your browser's localStorage)</li>
                                <li>Delete your data by clearing your browser's localStorage</li>
                                <li>Stop using the service at any time</li>
                                <li>Request information about data we may have collected</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>8. Data Retention</h2>
                            <p className='text-slate-300 leading-relaxed'>
                                Your data is stored locally on your device and will remain there until you clear your browser data
                                or uninstall the app. Any logs sent to our servers are retained for a limited period for
                                troubleshooting purposes only.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>9. Children's Privacy</h2>
                            <p className='text-slate-300 leading-relaxed'>
                                Our service is intended for college students. While we may have users under 18, we do not knowingly
                                collect or solicit personal information from children under 13 without parental consent.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>10. Changes to This Policy</h2>
                            <p className='text-slate-300 leading-relaxed'>
                                We may update this Privacy Policy from time to time. We will notify users of significant changes
                                by updating the "Last updated" date at the top of this policy. Continued use of the app after
                                changes constitutes acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>11. Disclaimer</h2>
                            <p className='text-slate-300 leading-relaxed'>
                                This app is an independent tool and is not officially affiliated with or endorsed by VIIT or VIEW
                                institutions. We are not responsible for any discrepancies between the data shown in this app and
                                the official institutional records.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold text-white mb-3'>12. Contact Us</h2>
                            <p className='text-slate-300 leading-relaxed'>
                                If you have questions or concerns about this Privacy Policy or our data practices, please contact us
                                through the feedback option in the app or by using the thumbs down button to provide feedback.
                            </p>
                        </section>
                    </div>

                    <div className='border-t border-[#222528] pt-6 text-center'>
                        <p className='text-slate-400 text-sm'>
                            By using Attendance Tracker, you acknowledge that you have read and understood this Privacy Policy
                            and agree to its terms.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy