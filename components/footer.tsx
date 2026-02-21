'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Twitter, Instagram, Linkedin, Mail, X, 
  FileText, HelpCircle, MessageSquare, Bug, Lightbulb, CreditCard, ShieldCheck,
  Gamepad2, Send, CheckCircle, Smile, Wind 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRef, useState, useEffect } from 'react'

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [showLinkedInMenu, setShowLinkedInMenu] = useState(false)
  const [showMailMenu, setShowMailMenu] = useState(false)
  const [activeModal, setActiveModal] = useState<string | null>(null)
  
  // Added state for FAQ form
  const [faqSubmitted, setFaqSubmitted] = useState(false)

  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = 'hidden'
      // Reset FAQ form when modal opens/closes
      if (activeModal !== 'faqs') setFaqSubmitted(false)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeModal])

  const closeModal = () => setActiveModal(null)

  // Added handler for FAQ submission
  const handleFaqSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFaqSubmitted(true)
  }

  return (
    <>
      <footer ref={ref} className="bg-gray-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Friendly Logo" width={40} height={40} />
                <span className="text-xl font-bold">Friendly</span>
              </div>

              <p className="text-gray-400 mb-4">
                Mental wellness redefined for everyday life.
              </p>

              <div className="flex gap-3">
                <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </motion.a>

                <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </motion.a>

                <div className="relative">
                  <motion.button whileHover={{ scale: 1.1, y: -2 }} onClick={() => { setShowLinkedInMenu(!showLinkedInMenu); setShowMailMenu(false); }} className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </motion.button>

                  {showLinkedInMenu && (
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-56 z-50">
                      <a href="https://www.linkedin.com/in/vinay-kumar0805/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">Vinay Kumar</a>
                      <a href="https://www.linkedin.com/in/bhavyaa-bansal-0b5170334" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">Bhavyaa Bansal</a>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <motion.button whileHover={{ scale: 1.1, y: -2 }} onClick={() => { setShowMailMenu(!showMailMenu); setShowLinkedInMenu(false); }} className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </motion.button>

                  {showMailMenu && (
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-64 z-50">
                      <a href="mailto:vk8964210@gmail.com" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                        Vinay Kumar <span className="block text-xs text-gray-400">vk8964210@gmail.com</span>
                      </a>
                      <a href="mailto:bhavyaabansal22@gmail.com" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                        Bhavyaa Bansal <span className="block text-xs text-gray-400">bhavyaabansal22@gmail.com</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Product Column */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/ai-friend" className="text-gray-400 hover:text-white transition-colors hover:underline">AI Friend</Link></li>
                <li><Link href="/micro-support" className="text-gray-400 hover:text-white transition-colors hover:underline">Micro-Support</Link></li>
                <li><button onClick={() => setActiveModal('funzone')} className="text-left text-gray-400 hover:text-white transition-colors hover:underline">Fun Zone</button></li>
                <li><button onClick={() => setActiveModal('pricing')} className="text-left text-gray-400 hover:text-white transition-colors hover:underline">Pricing</button></li>
              </ul>
            </motion.div>

            {/* Resources Column */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveModal('guide')} className="text-left text-gray-400 hover:text-white transition-colors hover:underline">Mental Health Guide</button></li>
                <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors hover:underline">Privacy Policy</Link></li>
                <li><button onClick={() => setActiveModal('terms')} className="text-left text-gray-400 hover:text-white transition-colors hover:underline">Terms of Service</button></li>
                <li><button onClick={() => setActiveModal('faqs')} className="text-left text-gray-400 hover:text-white transition-colors hover:underline">FAQs</button></li>
              </ul>
            </motion.div>

            {/* Support Column */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
              <h3 className="font-bold text-lg mb-4">Get Help</h3>
              <ul className="space-y-2 mb-4">
                <li><button onClick={() => setActiveModal('contact')} className="text-left text-gray-400 hover:text-white transition-colors hover:underline">Contact Us</button></li>
                <li><button onClick={() => setActiveModal('bug')} className="text-left text-gray-400 hover:text-white transition-colors hover:underline">Report Bug</button></li>
                <li><button onClick={() => setActiveModal('feature')} className="text-left text-gray-400 hover:text-white transition-colors hover:underline">Feature Requests</button></li>
              </ul>
              <div className="mt-4">
                <p className="text-sm mb-2">NEWSLETTER:</p>
                <div className="flex gap-2">
                  <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none text-white">SEND</Button>
                </div>
              </div>
            </motion.div>

          </div>

          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2026 Friendly. All rights reserved. | Made with 💜 for everyone | Making by CODEX - Vinay Kumar & Bhavyaa Bansal</p>
          </motion.div>
        </div>
      </footer>

      {/* --- DYNAMIC MODAL SYSTEM --- */}
      <AnimatePresence>
        {activeModal !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-900 border border-gray-700 text-gray-200 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl relative custom-scrollbar"
            >
              <button onClick={closeModal} className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors z-10">
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-10">
                
                {/* 1. MENTAL HEALTH GUIDE CONTENT */}
                {activeModal === 'guide' && (
                  <>
                    <div className="text-center mb-10">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Friendly Mental Health Guide 🌿</h2>
                      <p className="text-gray-400 text-lg">A safe, stigma-free space to understand your mind, manage daily pressure, and build healthy habits.</p>
                    </div>
                    <div className="space-y-8">
                      <p className="text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-xl border border-gray-800">
                        Modern life is demanding, and it is completely normal to feel overwhelmed. This guide is designed to help you recognize early signs of burnout and give you quick, actionable tools to reset. <strong>Remember: taking a break is productive.</strong>
                      </p>
                      <section>
                        <h3 className="text-2xl font-semibold text-white mb-4">1. Spotting the Early Signs</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3"><span className="text-blue-400">▹</span><p><strong>Daily Disengagement:</strong> Constantly procrastinating, dreading work or daily tasks, or losing motivation for things you usually enjoy.</p></li>
                          <li className="flex gap-3"><span className="text-blue-400">▹</span><p><strong>Screen Fatigue:</strong> Heavy eyes, frequent headaches, or doomscrolling without purpose.</p></li>
                          <li className="flex gap-3"><span className="text-blue-400">▹</span><p><strong>Emotional Shifts:</strong> Feeling easily irritated, isolating from friends, or feeling emotionally numb.</p></li>
                          <li className="flex gap-3"><span className="text-blue-400">▹</span><p><strong>Physical Exhaustion:</strong> Waking up tired even after a full night’s sleep, or experiencing irregular sleep.</p></li>
                        </ul>
                      </section>
                      <section>
                        <h3 className="text-2xl font-semibold text-white mb-4">2. The "Friendly" Toolkit</h3>
                        <ul className="space-y-4">
                          <li className="bg-gray-800 p-4 rounded-xl">
                            <strong className="text-green-400 block mb-1">The 20-20-20 Rule (For Screen Fatigue):</strong>
                            <p className="text-gray-300">Every 20 minutes, look at something 20 feet away for 20 seconds.</p>
                          </li>
                          <li className="bg-gray-800 p-4 rounded-xl">
                            <strong className="text-green-400 block mb-1">The Pomodoro Reset (For Task Overwhelm):</strong>
                            <p className="text-gray-300">Working for long stretches leads to high stress. Focus for 25 minutes, then step away for 5 minutes to physically stretch.</p>
                          </li>
                          <li className="bg-gray-800 p-4 rounded-xl">
                            <strong className="text-green-400 block mb-1">5-4-3-2-1 Grounding (For Racing Thoughts):</strong>
                            <p className="text-gray-300">To stop panic before a big meeting or deadline, find: 5 things you see, 4 you feel, 3 you hear, 2 you smell, and 1 you taste.</p>
                          </li>
                        </ul>
                      </section>
                      <section>
                        <h3 className="text-2xl font-semibold text-white mb-4">3. Our Ethical Promise</h3>
                        <ul className="space-y-3">
                          <li className="flex gap-3"><span className="text-indigo-400">✓</span><p><strong>No Diagnosis:</strong> We are an early-warning system, not a medical diagnosis.</p></li>
                          <li className="flex gap-3"><span className="text-indigo-400">✓</span><p><strong>100% Private:</strong> We never share data with your employer, institution, or family without consent.</p></li>
                          <li className="flex gap-3"><span className="text-indigo-400">✓</span><p><strong>Stigma-Free:</strong> You own your data. Delete your history at any time.</p></li>
                        </ul>
                      </section>
                      <section className="bg-indigo-900/30 border border-indigo-500/30 p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold text-indigo-300 mb-3">4. Free, Confidential Helplines (24/7 India)</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="bg-gray-900 p-3 rounded-lg text-center"><p className="text-sm text-gray-400">Tele MANAS</p><p className="font-bold text-indigo-400">14416</p></div>
                          <div className="bg-gray-900 p-3 rounded-lg text-center"><p className="text-sm text-gray-400">Kiran Helpline</p><p className="font-bold text-indigo-400">1800-599-0019</p></div>
                          <div className="bg-gray-900 p-3 rounded-lg text-center"><p className="text-sm text-gray-400">Vandrevala</p><p className="font-bold text-indigo-400">+91 9999 666 555</p></div>
                        </div>
                      </section>
                    </div>
                  </>
                )}

                {/* --- ADDED FUN ZONE CONTENT --- */}
                {activeModal === 'funzone' && (
                  <div className="text-center py-4">
                    <Gamepad2 className="w-16 h-16 text-pink-500 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fun Zone 🎮</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                      Sometimes the most productive thing you can do is relax. Take a quick break with our mini-activities designed to help you disconnect and recharge.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-2xl hover:border-pink-500/50 transition-colors cursor-pointer group">
                        <div className="bg-pink-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Smile className="text-pink-400 w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Bubble Pop</h3>
                        <p className="text-gray-400 text-sm">Endless, satisfying digital bubble wrap to help you zone out and relieve physical tension.</p>
                        <div className="mt-4 text-xs font-bold text-pink-500 uppercase tracking-wider">Coming Soon</div>
                      </div>

                      <div className="bg-gray-800 border border-gray-700 p-6 rounded-2xl hover:border-blue-500/50 transition-colors cursor-pointer group">
                        <div className="bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Wind className="text-blue-400 w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Zen Visualizer</h3>
                        <p className="text-gray-400 text-sm">Sync your breathing to our calming, interactive visual loops to lower your heart rate instantly.</p>
                        <div className="mt-4 text-xs font-bold text-blue-500 uppercase tracking-wider">Coming Soon</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. TERMS OF SERVICE */}
                {activeModal === 'terms' && (
                  <>
                    <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
                      <FileText className="w-8 h-8 text-blue-500" />
                      <h2 className="text-3xl font-bold text-white">Terms of Service</h2>
                    </div>
                    <p className="text-gray-400 mb-8 text-lg">Welcome to Friendly. By using our platform, you agree to these simple, user-first terms.</p>
                    <div className="space-y-6">
                      <div className="bg-gray-800/40 p-5 rounded-xl border border-gray-700">
                        <h4 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
                          <ShieldCheck className="w-5 h-5 text-green-400" /> Not Medical Advice
                        </h4>
                        <p className="text-gray-300">Friendly is an early-warning system designed to help you build self-awareness regarding everyday stress and burnout. It is not a substitute for professional medical advice, diagnosis, or psychiatric treatment.</p>
                      </div>
                      <div className="bg-gray-800/40 p-5 rounded-xl border border-gray-700">
                        <h4 className="text-xl font-semibold text-white mb-2">Privacy First</h4>
                        <p className="text-gray-300">We do not track your location or monitor your background activities. The only data we process is what you voluntarily provide during your daily check-ins.</p>
                      </div>
                      <div className="bg-gray-800/40 p-5 rounded-xl border border-gray-700">
                        <h4 className="text-xl font-semibold text-white mb-2">Your Data Ownership</h4>
                        <p className="text-gray-300">You own your check-in data. You can delete your account and all associated mood history at any time with a single click.</p>
                      </div>
                      <div className="bg-gray-800/40 p-5 rounded-xl border border-gray-700">
                        <h4 className="text-xl font-semibold text-white mb-2">Prototype Status</h4>
                        <p className="text-gray-300">Please note that this version of Friendly is currently a functional prototype developed for ideathon.</p>
                      </div>
                    </div>
                  </>
                )}

                {/* 3. FAQs & ASK QUESTION SECTION */}
                {activeModal === 'faqs' && (
                  <>
                    <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
                      <HelpCircle className="w-8 h-8 text-purple-500" />
                      <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                        <h4 className="text-lg font-bold text-white mb-2">Q: Is Friendly a medical or therapy app?</h4>
                        <p className="text-gray-400">A: No. Friendly focuses entirely on early detection and prevention. We help you spot the early signs of daily burnout and screen fatigue before they become serious, but we do not diagnose mental health conditions.</p>
                      </div>
                      <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                        <h4 className="text-lg font-bold text-white mb-2">Q: Will my employer, institution, or family see my stress levels?</h4>
                        <p className="text-gray-400">A: Absolutely not. Your data is 100% private. We believe in a stigma-free zone. Nobody sees your dashboard unless you choose to show it to them.</p>
                      </div>
                      <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                        <h4 className="text-lg font-bold text-white mb-2">Q: How does the AI risk indicator work?</h4>
                        <p className="text-gray-400">A: Our system ethically analyzes the non-intrusive signals you share (like sleep quality, screen time, and workload) to identify trends. If it notices a multi-day trend of high fatigue and low motivation, it gently suggests a break or grounding exercise.</p>
                      </div>
                      <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                        <h4 className="text-lg font-bold text-white mb-2">Q: Can I delete my data?</h4>
                        <p className="text-gray-400">A: Yes. You have complete control. You can wipe your entire check-in history from the settings page instantly.</p>
                      </div>
                    </div>

                    {/* --- ADDED FAQ SUBMISSION FORM --- */}
                    <div className="bg-gray-800/60 border border-purple-500/30 p-6 md:p-8 rounded-2xl relative overflow-hidden mt-8">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Didn't find your answer?</h3>
                      <p className="text-gray-400 mb-6 relative z-10">
                        Ask us anything! We'll send your question directly to the maker's mail and reply to your email. If it's an important question that helps others, we'll feature it right here on the website!
                      </p>

                      {!faqSubmitted ? (
                        <form onSubmit={handleFaqSubmit} className="space-y-4 relative z-10">
                          <Input 
                            required 
                            type="email" 
                            placeholder="Your email address" 
                            className="bg-gray-900 border-gray-700 text-white focus:border-purple-500"
                          />
                          <textarea 
                            required 
                            placeholder="Type your question here..." 
                            className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] custom-scrollbar"
                          ></textarea>
                          <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto">
                            <Send className="w-4 h-4 mr-2" /> Send to Makers
                          </Button>
                        </form>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          className="bg-green-900/30 border border-green-500/50 p-5 rounded-xl flex items-start gap-3 relative z-10"
                        >
                          <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-green-300 font-bold text-lg">Question sent successfully!</p>
                            <p className="text-green-400/80 mt-1">
                              Your question has been forwarded to the maker's inbox. Keep an eye on your email for our reply. If your question is helpful for the community, we'll feature it on our website!
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </>
                )}

                {/* 4. CONTACT US */}
                {activeModal === 'contact' && (
                  <div className="text-center py-8">
                    <MessageSquare className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                      We are here to listen! Whether you need technical help, want to share how Friendly has helped you manage daily pressure, or just want to say hello, we’d love to hear from you.
                    </p>
                    <div className="bg-gray-800 p-8 rounded-2xl inline-block text-left border border-gray-700">
                      <p className="text-gray-400 uppercase text-sm font-bold mb-4 tracking-wider">Email us directly at:</p>
                      <div className="space-y-4">
                        <div>
                          <p className="text-white font-semibold text-lg">Vinay Kumar</p>
                          <a href="mailto:vk8964210@gmail.com" className="text-indigo-400 hover:underline">vk8964210@gmail.com</a>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-lg">Bhavyaa Bansal</p>
                          <a href="mailto:bhavyaabansal22@gmail.com" className="text-indigo-400 hover:underline">bhavyaabansal22@gmail.com</a>
                        </div>
                      </div>
                      <div className="mt-8 pt-4 border-t border-gray-700 text-center">
                        <p className="text-sm text-gray-500 font-medium">Team CODEX</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. REPORT BUG */}
                {activeModal === 'bug' && (
                  <div className="text-center py-8">
                    <Bug className="w-16 h-16 text-red-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">Report a Bug</h2>
                    <h3 className="text-xl text-gray-300 mb-6">Oops, did you hit a roadblock?</h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                      We are constantly working to make Friendly a smooth, stress-free experience. If a button isn't working, an animation is glitching, or your dashboard isn't updating, please let us know!
                    </p>
                    <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-2xl inline-block">
                      <p className="text-red-200 mb-4">
                        Send us a quick description of the issue (and a screenshot if possible) to our team email. We will squash the bug as soon as possible so you can get back to your peaceful break.
                      </p>
                      <a href="mailto:vk8964210@gmail.com?subject=Bug Report - Friendly App" className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                        Email Bug Report
                      </a>
                    </div>
                  </div>
                )}

                {/* 6. FEATURE REQUESTS */}
                {activeModal === 'feature' && (
                  <div className="text-center py-8">
                    <Lightbulb className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">Feature Requests</h2>
                    <h3 className="text-xl text-gray-300 mb-6">Have an idea to make Friendly even better?</h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                      You are the reason we built this! If there is a specific breathing exercise, a new dashboard chart, or a helpful tool that would make your daily life easier, we want to build it.
                    </p>
                    <div className="bg-yellow-900/20 border border-yellow-500/30 p-6 rounded-2xl inline-block">
                      <p className="text-yellow-200 mb-4">
                        Drop us a message with the subject line <strong>"Feature Idea"</strong> and tell us what would help you manage your stress better. The best ideas will be added to our future development roadmap!
                      </p>
                      <a href="mailto:vk8964210@gmail.com?subject=Feature Idea - Friendly App" className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                        Submit an Idea
                      </a>
                    </div>
                  </div>
                )}

                {/* 7. PRICING */}
                {activeModal === 'pricing' && (
                  <>
                    <div className="text-center mb-10">
                      <CreditCard className="w-12 h-12 text-green-500 mx-auto mb-4" />
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing</h2>
                      <div className="inline-block bg-green-900/40 border border-green-500/50 text-green-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-4">
                        Currently 100% Free
                      </div>
                      <p className="text-gray-400 max-w-2xl mx-auto">
                         the entire Friendly platform is completely free to use. We want everyone to have access to early-warning stress detection without worrying about costs.
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold text-white text-center mb-8 border-t border-gray-800 pt-8">Our Future Plan (Coming Soon)</h3>
                    <p className="text-center text-gray-400 mb-8 max-w-xl mx-auto">To sustain the platform and introduce deeper AI-driven insights, we will be rolling out an accessible model:</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      <div className="bg-gray-800 border border-gray-700 rounded-3xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-gray-700 text-gray-300 text-xs font-bold px-3 py-1 rounded-bl-lg">Current</div>
                        <h4 className="text-2xl font-bold text-white mb-2">The Starter Plan</h4>
                        <div className="text-3xl font-bold text-white mb-6">₹0 <span className="text-lg text-gray-500 font-normal">/ forever</span></div>
                        <ul className="space-y-4 text-gray-300">
                          <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Includes 5 full AI check-in trials per month</li>
                          <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Basic mood tracking</li>
                          <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Access to the 20-20-20 screen fatigue tools</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-b from-indigo-900/50 to-gray-800 border border-indigo-500/50 rounded-3xl p-8 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">Coming Soon</div>
                        <h4 className="text-2xl font-bold text-white mb-2">Friendly Premium</h4>
                        <div className="text-3xl font-bold text-white mb-6">Paid <span className="text-lg text-indigo-300 font-normal">/ accessible tier</span></div>
                        <ul className="space-y-4 text-gray-300">
                          <li className="flex items-start gap-3"><span className="text-indigo-400 mt-1">✓</span> Unlock unlimited daily AI check-ins</li>
                          <li className="flex items-start gap-3"><span className="text-indigo-400 mt-1">✓</span> Advanced weekly/monthly burnout trend reports</li>
                          <li className="flex items-start gap-3"><span className="text-indigo-400 mt-1">✓</span> Completely personalized micro-support suggestions</li>
                          <li className="flex items-start gap-3"><span className="text-indigo-400 mt-1">✓</span> Direct integrations with professional counselor booking systems</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}