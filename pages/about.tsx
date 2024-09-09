import React from 'react'
import Head from 'next/head'

const About = () => {
  return (
    <div>
      <Head>
        <title>QuestEd - Quest for Education and Development</title>
        <meta name="description" content="QuestEd is an innovative learning platform designed to empower students by offering personalized education through AI-driven tools." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center p-6">
          <h1 className="text-3xl font-bold">QuestEd</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Courses</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Community</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Sign In</a></li>
              <li><a href="#" className="hover:underline">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-cover bg-center h-screen text-white flex flex-col items-center justify-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <h2 className="text-4xl font-bold mb-4">Revolutionizing Education Through AI and Personalization</h2>
          <p className="text-xl mb-8">Empower Your Learning Journey with QuestEd - Personalized, Engaging, and Innovative.</p>
          <div>
            <button className="btn btn-primary mr-4">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </section>

        <section className="container mx-auto py-12">
          <h3 className="text-3xl font-bold text-center mb-8">Why Choose QuestEd?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">Personalized Learning Paths</h4>
                <p>Tailored to your needs for optimal growth.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">24/7 AI Assistant</h4>
                <p>Instant support and guidance anytime, anywhere.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">AI Summarizer</h4>
                <p>Quickly grasp key concepts with concise summaries.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">Interactive Note-Making</h4>
                <p>Organize and manage your study notes seamlessly.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">Curated YouTube Integration</h4>
                <p>Access top-rated educational videos, distraction-free.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">Gamified Community Engagement</h4>
                <p>Earn rewards and collaborate with like-minded learners.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">How QuestEd Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h4 className="card-title">Sign Up</h4>
                  <p>Create your free account and set up your profile.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h4 className="card-title">Explore Courses</h4>
                  <p>Browse our diverse range of courses and resources.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h4 className="card-title">Start Learning</h4>
                  <p>Engage with personalized content and interactive tools.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h4 className="card-title">Track Progress</h4>
                  <p>Monitor your achievements and milestones with ease.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-12">
          <h3 className="text-3xl font-bold text-center mb-8">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">User 1</h4>
                <p>QuestEd transformed my learning experience! The AI assistant is a game-changer.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">User 2</h4>
                <p>I love the personalized learning paths. They keep me motivated and on track.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">User 3</h4>
                <p>The community is fantastic. I’ve learned so much from my peers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">Tech Stack</h3>
            <div className="flex justify-center space-x-8">
              <img src="/logos/react.png" alt="React" className="h-12" />
              <img src="/logos/nextjs.png" alt="Next.js" className="h-12" />
              <img src="/logos/nodejs.png" alt="Node.js" className="h-12" />
              <img src="/logos/mongodb.png" alt="MongoDB" className="h-12" />
              <img src="/logos/gemini-api.png" alt="Gemini API" className="h-12" />
              <img src="/logos/typescript.png" alt="TypeScript" className="h-12" />
            </div>
          </div>
        </section>

        <section className="container mx-auto py-12">
          <h3 className="text-3xl font-bold text-center mb-8">Roadmap & Future Developments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">Phase 1</h4>
                <p>Launch MVP with core features.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">Phase 2</h4>
                <p>Introduce advanced AI tools and analytics.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">Phase 3</h4>
                <p>Expand course offerings and community features.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 QuestEd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default About
