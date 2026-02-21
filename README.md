<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>💜 Friendly - Privacy-First Mental Wellness Companion</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #d946ef;
            --primary-light: #ec4899;
            --primary-dark: #9d174d;
            --accent: #06b6d4;
            --accent-light: #22d3ee;
            --dark-bg: #0f172a;
            --card-bg: #1e293b;
            --text-light: #e2e8f0;
            --text-muted: #94a3b8;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
            --cyan: #06b6d4;
            --purple: #a855f7;
            --blue: #3b82f6;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, var(--dark-bg) 0%, #1a1f3a 100%);
            color: var(--text-light);
            overflow-x: hidden;
            position: relative;
        }

        /* Animated background elements */
        body::before {
            content: '';
            position: fixed;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: 
                radial-gradient(circle at 20% 50%, rgba(217, 70, 239, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
            animation: float 15s ease-in-out infinite;
            pointer-events: none;
            z-index: -2;
        }

        body::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 70%);
            pointer-events: none;
            z-index: -1;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(30px, -30px); }
        }

        @keyframes glow-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(217, 70, 239, 0.3); }
            50% { box-shadow: 0 0 40px rgba(217, 70, 239, 0.6); }
        }

        @keyframes slide-up {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes scale-in {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        @keyframes bounce-icon {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(217, 70, 239, 0.2);
            z-index: 100;
            animation: slide-down 0.6s ease-out;
        }

        @keyframes slide-down {
            from {
                transform: translateY(-100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        nav .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 20px;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: glow-pulse 3s ease-in-out infinite;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: width 0.3s ease;
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding-top: 80px;
            overflow: hidden;
        }

        .hero-content {
            animation: slide-up 0.8s ease-out 0.1s both;
        }

        .hero-badge {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: rgba(217, 70, 239, 0.1);
            border: 1px solid rgba(217, 70, 239, 0.3);
            border-radius: 50px;
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(217, 70, 239, 0.3);
            }
            50% {
                transform: scale(1.05);
                box-shadow: 0 0 0 10px rgba(217, 70, 239, 0);
            }
        }

        .hero h1 {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2.5rem, 8vw, 5rem);
            font-weight: 900;
            margin-bottom: 1rem;
            line-height: 1.1;
            animation: slide-up 0.8s ease-out 0.2s both;
        }

        .gradient-text {
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 50%, var(--purple) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: 200% 200%;
            animation: gradient-shift 3s ease infinite;
        }

        .hero p {
            font-size: 1.3rem;
            color: var(--text-muted);
            max-width: 600px;
            margin: 1.5rem auto 2.5rem;
            line-height: 1.6;
            animation: slide-up 0.8s ease-out 0.3s both;
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            animation: slide-up 0.8s ease-out 0.4s both;
        }

        .btn {
            padding: 1rem 2.5rem;
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: white;
            position: relative;
            overflow: hidden;
        }

        .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: shimmer 2s infinite;
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(217, 70, 239, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: var(--accent);
            border: 2px solid var(--accent);
            position: relative;
            overflow: hidden;
        }

        .btn-secondary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--accent);
            z-index: -1;
            transition: left 0.3s ease;
        }

        .btn-secondary:hover {
            color: var(--dark-bg);
            left: 0;
            transform: translateY(-3px);
        }

        .btn-secondary:hover::before {
            left: 0;
        }

        /* Hero Graphic */
        .hero-graphic {
            width: 300px;
            height: 300px;
            margin: 3rem auto 0;
            position: relative;
            animation: float 4s ease-in-out infinite;
        }

        .heart-float {
            position: absolute;
            font-size: 3rem;
            animation: bounce-icon 2s ease-in-out infinite;
        }

        .heart1 { top: 0%; left: 10%; animation-delay: 0s; }
        .heart2 { top: 20%; right: 15%; animation-delay: 0.3s; }
        .heart3 { bottom: 20%; left: 20%; animation-delay: 0.6s; }
        .heart4 { bottom: 10%; right: 10%; animation-delay: 0.9s; }

        /* Stats Section */
        .stats {
            background: rgba(30, 41, 59, 0.6);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(217, 70, 239, 0.2);
            border-radius: 20px;
            padding: 3rem;
            margin: 4rem 0;
            animation: slide-up 0.8s ease-out 0.5s both;
        }

        .stats h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            margin-bottom: 2rem;
            text-align: center;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .stat-card {
            background: linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
            border: 1px solid rgba(217, 70, 239, 0.2);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .stat-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(217, 70, 239, 0.3) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-10px);
            border-color: rgba(217, 70, 239, 0.5);
            background: linear-gradient(135deg, rgba(217, 70, 239, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%);
        }

        .stat-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .stat-value {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }

        .stat-label {
            font-size: 0.95rem;
            color: var(--text-muted);
        }

        /* Features Section */
        .features-section {
            padding: 5rem 0;
        }

        .section-title {
            font-family: 'Playfair Display', serif;
            font-size: 3rem;
            margin-bottom: 3rem;
            text-align: center;
            animation: slide-up 0.8s ease-out both;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }

        .feature-card {
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(30, 41, 59, 0.4) 100%);
            border: 1px solid rgba(217, 70, 239, 0.2);
            border-radius: 20px;
            padding: 2.5rem;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            overflow: hidden;
            animation: scale-in 0.6s ease-out both;
        }

        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }
        .feature-card:nth-child(4) { animation-delay: 0.4s; }
        .feature-card:nth-child(5) { animation-delay: 0.5s; }
        .feature-card:nth-child(6) { animation-delay: 0.6s; }

        .feature-card::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%);
            opacity: 0;
            transition: all 0.4s ease;
        }

        .feature-card:hover {
            transform: translateY(-15px);
            border-color: rgba(217, 70, 239, 0.5);
            box-shadow: 0 20px 60px rgba(217, 70, 239, 0.2);
            background: linear-gradient(135deg, rgba(30, 41, 59, 1) 0%, rgba(30, 41, 59, 0.6) 100%);
        }

        .feature-card:hover::before {
            opacity: 1;
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            display: inline-block;
        }

        .feature-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-light);
        }

        .feature-desc {
            color: var(--text-muted);
            line-height: 1.6;
            font-size: 0.95rem;
        }

        /* Tools Grid */
        .tools-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-bottom: 4rem;
        }

        .tool-card {
            background: linear-gradient(135deg, rgba(217, 70, 239, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
            border: 2px solid transparent;
            border-radius: 15px;
            padding: 1.8rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .tool-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .tool-card:hover {
            border-color: var(--primary);
            transform: translateX(5px);
        }

        .tool-card:hover::before {
            opacity: 1;
        }

        .tool-icon {
            font-size: 2rem;
            margin-bottom: 0.8rem;
        }

        .tool-name {
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--text-light);
        }

        .tool-benefit {
            font-size: 0.9rem;
            color: var(--text-muted);
            margin-bottom: 0.5rem;
        }

        .tool-time {
            font-size: 0.85rem;
            color: var(--accent);
            font-weight: 600;
        }

        /* Fun Zone Section */
        .fun-zone {
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
            border: 2px solid rgba(217, 70, 239, 0.3);
            border-radius: 20px;
            padding: 3rem;
            margin-bottom: 4rem;
            animation: slide-up 0.8s ease-out both;
        }

        .fun-zone h3 {
            font-size: 1.8rem;
            margin-bottom: 2rem;
            color: var(--text-light);
        }

        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .feature-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
        }

        .feature-item-icon {
            font-size: 1.8rem;
            flex-shrink: 0;
        }

        .feature-item-text {
            color: var(--text-muted);
        }

        /* Promises Section */
        .promises {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
            animation: slide-up 0.8s ease-out both;
        }

        .promise-card {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
            border: 2px solid rgba(217, 70, 239, 0.2);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
        }

        .promise-card:hover {
            transform: scale(1.05);
            border-color: var(--primary);
            box-shadow: 0 15px 40px rgba(217, 70, 239, 0.2);
        }

        .promise-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .promise-text {
            font-weight: 600;
            color: var(--text-light);
        }

        /* CTA Section */
        .final-cta {
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            background-size: 200% 200%;
            animation: gradient-shift 3s ease infinite;
            border-radius: 20px;
            padding: 4rem 2rem;
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
            overflow: hidden;
        }

        .final-cta::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: float 10s ease-in-out infinite;
        }

        .final-cta-content {
            position: relative;
            z-index: 1;
        }

        .final-cta h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            color: white;
            margin-bottom: 1rem;
        }

        .final-cta p {
            font-size: 1.1rem;
            color: rgba(255,255,255,0.9);
            max-width: 600px;
            margin: 1rem auto;
        }

        /* Footer */
        footer {
            background: rgba(15, 23, 42, 0.8);
            border-top: 1px solid rgba(217, 70, 239, 0.2);
            padding: 3rem 0 2rem;
            text-align: center;
            color: var(--text-muted);
            animation: fade-in 0.8s ease-out 0.6s both;
        }

        .footer-content {
            margin-bottom: 2rem;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
            margin-bottom: 2rem;
        }

        .footer-links a {
            color: var(--text-muted);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: var(--primary);
        }

        /* Scroll animations */
        .scroll-reveal {
            opacity: 0;
            transform: translateY(30px);
            animation: slide-up 0.8s ease-out forwards;
        }

        @media (max-width: 768px) {
            .nav-links {
                gap: 1rem;
                font-size: 0.85rem;
            }

            .hero p {
                font-size: 1.1rem;
            }

            .section-title {
                font-size: 2rem;
            }

            .stats {
                padding: 2rem;
            }

            .cta-buttons {
                flex-direction: column;
            }

            .btn {
                width: 100%;
            }

            .hero-graphic {
                width: 200px;
                height: 200px;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class="container">
            <div class="logo">💜 Friendly</div>
            <ul class="nav-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#tools">Tools</a></li>
                <li><a href="#promises">Promises</a></li>
                <li><a href="#contact">Support</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <span class="hero-badge">✨ Your Mental Health Companion</span>
                <h1>
                    Detect Stress Early, Find Your <span class="gradient-text">Balance</span>
                </h1>
                <p>
                    Privacy-first AI support for students. 24/7 judgment-free conversations, wellness tools, 
                    and stress prevention. Built for you. Protected always.
                </p>
                <div class="cta-buttons">
                    <button class="btn btn-primary">🚀 Start Now</button>
                    <button class="btn btn-secondary">📚 Learn More</button>
                </div>
                <div class="hero-graphic">
                    <span class="heart-float heart1">💜</span>
                    <span class="heart-float heart2">✨</span>
                    <span class="heart-float heart3">🧠</span>
                    <span class="heart-float heart4">💭</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Stats -->
    <section class="container">
        <div class="stats">
            <h2>🎯 Quick Stats</h2>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">🧠</div>
                    <div class="stat-value">10K+</div>
                    <div class="stat-label">Students Supported</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">🔐</div>
                    <div class="stat-value">100%</div>
                    <div class="stat-label">Privacy Guarantee</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">🤖</div>
                    <div class="stat-value">500K+</div>
                    <div class="stat-label">AI Conversations</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">⚡</div>
                    <div class="stat-value">&lt;100ms</div>
                    <div class="stat-label">Response Time</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📶</div>
                    <div class="stat-value">99.9%</div>
                    <div class="stat-label">Uptime</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">💾</div>
                    <div class="stat-value">0</div>
                    <div class="stat-label">Data Shared</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Key Promises -->
    <section class="container">
        <div class="promises">
            <div class="promise-card">
                <div class="promise-icon">🔐</div>
                <div class="promise-text">100% Private</div>
            </div>
            <div class="promise-card">
                <div class="promise-icon">🤖</div>
                <div class="promise-text">Powered by Claude AI</div>
            </div>
            <div class="promise-card">
                <div class="promise-icon">⚡</div>
                <div class="promise-text">24/7 Support</div>
            </div>
            <div class="promise-card">
                <div class="promise-icon">✅</div>
                <div class="promise-text">Zero Data Sharing</div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features-section container">
        <h2 class="section-title" id="features">🌟 Feature Showcase</h2>
        
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🤖</div>
                <h3 class="feature-title">AI Companion</h3>
                <p class="feature-desc">Your judgment-free mental wellness companion available 24/7. Chat naturally about stress, anxiety, sleep struggles, or just need a friend.</p>
                <ul style="margin-top: 1rem; color: var(--text-muted); font-size: 0.9rem;">
                    <li>✓ Emotional intelligence</li>
                    <li>✓ Crisis detection</li>
                    <li>✓ Conversation memory</li>
                </ul>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🛠️</div>
                <h3 class="feature-title">Wellness Tools</h3>
                <p class="feature-desc">Complete toolkit for mental health management. From mood tracking to guided breathing, all designed for busy students.</p>
                <ul style="margin-top: 1rem; color: var(--text-muted); font-size: 0.9rem;">
                    <li>✓ Mood Tracker</li>
                    <li>✓ Guided Breathing</li>
                    <li>✓ Meditation Library</li>
                </ul>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🎮</div>
                <h3 class="feature-title">Fun Zone</h3>
                <p class="feature-desc">Relax and recharge with games, stories, music, and comedy. Sometimes the best medicine is having fun!</p>
                <ul style="margin-top: 1rem; color: var(--text-muted); font-size: 0.9rem;">
                    <li>✓ Interactive Games</li>
                    <li>✓ Stories & Adventures</li>
                    <li>✓ Comedy & Music</li>
                </ul>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🧘</div>
                <h3 class="feature-title">Guided Breathing</h3>
                <p class="feature-desc">Reduce anxiety instantly with scientifically-designed breathing exercises tailored to your needs.</p>
                <ul style="margin-top: 1rem; color: var(--text-muted); font-size: 0.9rem;">
                    <li>✓ 3-5 minute sessions</li>
                    <li>✓ Multiple techniques</li>
                    <li>✓ Progress tracking</li>
                </ul>
            </div>

            <div class="feature-card">
                <div class="feature-icon">📊</div>
                <h3 class="feature-title">Smart Analytics</h3>
                <p class="feature-desc">Visualize your emotional patterns over time. Get personalized insights to understand your wellness journey.</p>
                <ul style="margin-top: 1rem; color: var(--text-muted); font-size: 0.9rem;">
                    <li>✓ Mood Patterns</li>
                    <li>✓ Trend Analysis</li>
                    <li>✓ Custom Reports</li>
                </ul>
            </div>

            <div class="feature-card">
                <div class="feature-icon">💬</div>
                <h3 class="feature-title">24/7 Support</h3>
                <p class="feature-desc">Get support whenever you need it. Emergency resources available for crisis situations with expert guidance.</p>
                <ul style="margin-top: 1rem; color: var(--text-muted); font-size: 0.9rem;">
                    <li>✓ Instant responses</li>
                    <li>✓ Crisis detection</li>
                    <li>✓ Resource links</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Wellness Tools -->
    <section class="container" id="tools">
        <h2 class="section-title">🛠️ Wellness Tools - Take Care of You</h2>
        <div class="tools-container">
            <div class="tool-card">
                <div class="tool-icon">📊</div>
                <div class="tool-name">Mood Tracker</div>
                <div class="tool-benefit">Visualize your emotional patterns</div>
                <div class="tool-time">⏱️ 2 min</div>
            </div>
            <div class="tool-card">
                <div class="tool-icon">🧘</div>
                <div class="tool-name">Guided Breathing</div>
                <div class="tool-benefit">Reduce anxiety instantly</div>
                <div class="tool-time">⏱️ 3-5 min</div>
            </div>
            <div class="tool-card">
                <div class="tool-icon">🎵</div>
                <div class="tool-name">Meditation Library</div>
                <div class="tool-benefit">Curated sessions for sleep & focus</div>
                <div class="tool-time">⏱️ 5-30 min</div>
            </div>
            <div class="tool-card">
                <div class="tool-icon">✍️</div>
                <div class="tool-name">Gratitude Journaling</div>
                <div class="tool-benefit">Boost positivity daily</div>
                <div class="tool-time">⏱️ 5 min</div>
            </div>
            <div class="tool-card">
                <div class="tool-icon">😴</div>
                <div class="tool-name">Sleep Insights</div>
                <div class="tool-benefit">Personalized sleep recommendations</div>
                <div class="tool-time">⏱️ 3 min</div>
            </div>
            <div class="tool-card">
                <div class="tool-icon">🎯</div>
                <div class="tool-name">Goal Setting</div>
                <div class="tool-benefit">Track your wellness journey</div>
                <div class="tool-time">⏱️ 5 min</div>
            </div>
        </div>
    </section>

    <!-- Fun Zone -->
    <section class="container">
        <div class="fun-zone">
            <h3>🎮 Fun Zone - Relax & Recharge</h3>
            <div class="features-list">
                <div class="feature-item">
                    <div class="feature-item-icon">🎰</div>
                    <div class="feature-item-text"><strong>Quick Games</strong> - Mood Clicker, Puzzles, Brain Teasers</div>
                </div>
                <div class="feature-item">
                    <div class="feature-item-icon">📖</div>
                    <div class="feature-item-text"><strong>Stories</strong> - Choose-your-own-adventure interactive fiction</div>
                </div>
                <div class="feature-item">
                    <div class="feature-item-icon">😄</div>
                    <div class="feature-item-text"><strong>Comedy Corner</strong> - Curated jokes & stand-up clips</div>
                </div>
                <div class="feature-item">
                    <div class="feature-item-icon">🎵</div>
                    <div class="feature-item-text"><strong>Chill Music</strong> - Lo-fi beats, ambient sounds, playlists</div>
                </div>
                <div class="feature-item">
                    <div class="feature-item-icon">💖</div>
                    <div class="feature-item-text"><strong>Affirmations</strong> - Daily positive messages for motivation</div>
                </div>
                <div class="feature-item">
                    <div class="feature-item-icon">🎨</div>
                    <div class="feature-item-text"><strong>Creative Corner</strong> - AI-powered drawing & activities</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="container">
        <div class="final-cta">
            <div class="final-cta-content">
                <h2>💜 Made with Love for Mental Health</h2>
                <p>Join thousands of students already finding their balance with Friendly</p>
                <div class="cta-buttons" style="margin-top: 2rem;">
                    <button class="btn btn-primary">Get Started Today</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <h3 style="color: var(--text-light); margin-bottom: 1rem;">💜 Friendly</h3>
                <p style="margin-bottom: 1.5rem;">Your privacy-first mental wellness companion for students</p>
                <div class="footer-links">
                    <a href="#demo">🌐 Live Demo</a>
                    <a href="#docs">📚 Documentation</a>
                    <a href="#issues">🐛 Report Issues</a>
                    <a href="#support">💬 Get Support</a>
                </div>
                <p style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(217, 70, 239, 0.2); font-size: 0.9rem;">
                    Made with 💜 for mental health • Last updated: February 2026
                </p>
                <p style="margin-top: 1rem; font-size: 0.85rem;">
                    ⭐ Star us on GitHub if Friendly helped you feel better!
                </p>
            </div>
        </div>
    </footer>

    <script>
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Intersection Observer for scroll reveal animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slide-up 0.8s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observe all feature cards and other elements
        document.querySelectorAll('.feature-card, .stat-card, .tool-card').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });

        // Parallax effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const hearts = document.querySelectorAll('.heart-float');
            hearts.forEach((heart, index) => {
                const speed = 5 + index * 2;
                const x = (e.clientX / window.innerWidth) * speed;
                const y = (e.clientY / window.innerHeight) * speed;
                heart.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Cursor glow effect
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            document.documentElement.style.setProperty('--cursor-x', x + 'px');
            document.documentElement.style.setProperty('--cursor-y', y + 'px');
        });
    </script>
</body>
</html>
