// ===================================
// Portfolio Website JavaScript
// Handles animations, interactions, and smooth scrolling
// ===================================

document.addEventListener('DOMContentLoaded', function () {

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');

            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Project Cards Animation
    const projectCards = document.querySelectorAll('.project-card');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const projectObserver = new IntersectionObserver(function (entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150); // Stagger animation
                projectObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        projectObserver.observe(card);
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinksAll.forEach(link => {
                    link.classList.remove('text-cyber-blue');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('text-cyber-blue');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Download Resume Button - Now handled by HTML download attribute
    // The button in index.html has href="Akshdeep-.pdf" and download attribute

    // View Projects Button Handler
    const viewProjectsBtn = document.getElementById('view-projects-btn');
    if (viewProjectsBtn) {
        viewProjectsBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const heroSection = document.getElementById('home');

        if (heroSection && scrolled < window.innerHeight) {
            const parallaxElements = heroSection.querySelectorAll('.absolute');
            parallaxElements.forEach((element, index) => {
                const speed = (index + 1) * 0.1;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }
    });

    // Add hover effect to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });

        tag.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Typing Effect for Hero Headline (Optional Enhancement)
    function createTypingEffect(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Cursor Trail Effect (Optional - Cyberpunk Enhancement)
    let cursorTrail = [];
    const maxTrailLength = 20;

    document.addEventListener('mousemove', function (e) {
        cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

        // Limit trail length
        if (cursorTrail.length > maxTrailLength) {
            cursorTrail.shift();
        }
    });

    // Animate skill categories on scroll
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });

    skillCategories.forEach(category => {
        skillObserver.observe(category);
    });

    // Add glitch effect on hover for main heading (Optional)
    const mainHeading = document.querySelector('h1');
    if (mainHeading) {
        mainHeading.addEventListener('mouseenter', function () {
            this.style.textShadow = '2px 2px #00d4ff, -2px -2px #b84dff';
        });

        mainHeading.addEventListener('mouseleave', function () {
            this.style.textShadow = 'none';
        });
    }

    // Console Easter Egg
    console.log('%c👨‍💻 Cloud-Native Backend Engineer', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
    console.log('%cBuilding Scalable Backends & Automating the Cloud', 'color: #b84dff; font-size: 14px;');
    console.log('%cInterested in collaboration? Reach out at akshd4114@gmail.com', 'color: #00d4ff; font-size: 12px;');

    // Performance optimization: Lazy load images if any are added later
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add fade-in animation to achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    const achievementObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });

    achievementCards.forEach(card => {
        achievementObserver.observe(card);
    });

    // Navbar background on scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });

});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add smooth reveal animation for sections
window.addEventListener('load', function () {
    document.body.style.opacity = '1';
});

// ===================================
// Interactive Terminal Functionality
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');

    if (!terminalInput || !terminalOutput) return;

    let commandHistory = [];
    let historyIndex = -1;

    // Terminal commands database
    const commands = {
        help: {
            description: 'Show available commands',
            execute: () => {
                return `
<span class="terminal-info">Available Commands:</span>
  <span class="terminal-command">help</span>        - Show this help message
  <span class="terminal-command">about</span>       - Learn more about Akshdeep
  <span class="terminal-command">skills</span>      - List technical skills
  <span class="terminal-command">projects</span>    - View featured projects
  <span class="terminal-command">contact</span>     - Get contact information
  <span class="terminal-command">education</span>   - Show education details
  <span class="terminal-command">certifications</span> - List certifications
  <span class="terminal-command">social</span>      - Show social media links
  <span class="terminal-command">clear</span>       - Clear terminal screen
  <span class="terminal-command">whoami</span>      - Display current user
  <span class="terminal-command">date</span>        - Show current date and time
  <span class="terminal-command">echo</span> [text] - Print text to terminal
`;
            }
        },
        about: {
            description: 'Learn more about Akshdeep',
            execute: () => {
                return `
<span class="terminal-info">About Akshdeep Singh</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<span class="terminal-success">Role:</span> Cloud-Native Backend Engineer
<span class="terminal-success">Education:</span> MCA at Chandigarh University
<span class="terminal-success">Focus:</span> Python, Backend Development, DevOps

I bridge the gap between complex backend logic and reliable 
cloud infrastructure. Passionate about building scalable 
systems and automating deployment pipelines.
`;
            }
        },
        skills: {
            description: 'List technical skills',
            execute: () => {
                return `
<span class="terminal-info">Technical Skills</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<span class="terminal-success">Languages:</span>
  • Python  • C++  • JavaScript

<span class="terminal-success">Backend:</span>
  • Flask  • SQL Server  • MySQL

<span class="terminal-success">Cloud & DevOps:</span>
  • AWS  • Azure  • Docker  • Kubernetes
  • Jenkins  • CI/CD

<span class="terminal-success">Tools:</span>
  • Git  • GitHub  • VS Code
`;
            }
        },
        projects: {
            description: 'View featured projects',
            execute: () => {
                return `
<span class="terminal-info">Featured Projects</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<span class="terminal-success">1. Real-time Translator</span>
   Tech: Python, Streamlit, Azure Kubernetes Service
   Desc: Real-time translation app with high availability

<span class="terminal-success">2. Cloud-Based Automated Backup</span>
   Tech: Python, Azure Blob Storage, Logic Apps
   Desc: Automated backup solution with disaster recovery

<span class="terminal-success">3. Real-Time Collaborative Code Editor</span>
   Tech: Node.js, Socket.IO, WebSockets
   Desc: Multi-user coding platform with low-latency sync

<span class="terminal-success">4. E-Learning Platform</span>
   Tech: MERN Stack, JWT Authentication
   Desc: Full-stack learning platform with course management
`;
            }
        },
        contact: {
            description: 'Get contact information',
            execute: () => {
                return `
<span class="terminal-info">Contact Information</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<span class="terminal-success">Email:</span> akshd4114@gmail.com
<span class="terminal-success">LinkedIn:</span> linkedin.com/in/akshdeep-singh-998017322
<span class="terminal-success">GitHub:</span> github.com/AKSHDEEPsingh0

Feel free to reach out for collaboration opportunities!
`;
            }
        },
        education: {
            description: 'Show education details',
            execute: () => {
                return `
<span class="terminal-info">Education</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<span class="terminal-success">Degree:</span> Master of Computer Applications (MCA)
<span class="terminal-success">University:</span> Chandigarh University
<span class="terminal-success">Focus Areas:</span>
  • Cloud Computing & Infrastructure
  • Backend Development & Architecture
  • DevOps & Automation
`;
            }
        },
        certifications: {
            description: 'List certifications',
            execute: () => {
                return `
<span class="terminal-info">Certifications & Achievements</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<span class="terminal-success">✓ AWS Certified Cloud Practitioner</span>
  Validated expertise in AWS Cloud fundamentals

<span class="terminal-success">✓ SAP Hackathon - University-level Finalist</span>
  Recognized for innovation and problem-solving
`;
            }
        },
        social: {
            description: 'Show social media links',
            execute: () => {
                return `
<span class="terminal-info">Social Media</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<span class="terminal-success">LinkedIn:</span> https://linkedin.com/in/akshdeep-singh-998017322
<span class="terminal-success">GitHub:</span> https://github.com/AKSHDEEPsingh0
<span class="terminal-success">Email:</span> akshd4114@gmail.com
`;
            }
        },
        clear: {
            description: 'Clear terminal screen',
            execute: () => {
                terminalOutput.innerHTML = '';
                return null;
            }
        },
        whoami: {
            description: 'Display current user',
            execute: () => {
                return '<span class="terminal-success">visitor</span>';
            }
        },
        date: {
            description: 'Show current date and time',
            execute: () => {
                const now = new Date();
                return `<span class="terminal-success">${now.toString()}</span>`;
            }
        },
        echo: {
            description: 'Print text to terminal',
            execute: (args) => {
                return args.join(' ') || '';
            }
        }
    };

    // Process command
    function processCommand(input) {
        const parts = input.trim().split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        if (!command) return null;

        if (commands[command]) {
            return commands[command].execute(args);
        } else {
            return `<span class="terminal-error">Command not found: ${command}</span>\nType <span class="terminal-command">help</span> to see available commands.`;
        }
    }

    // Add output to terminal
    function addOutput(text, command = '') {
        if (text === null) return; // For commands like 'clear'

        const outputLine = document.createElement('div');
        outputLine.className = 'terminal-output-line';

        if (command) {
            outputLine.innerHTML = `<span class="terminal-command">visitor@portfolio:~$ ${command}</span>`;
            terminalOutput.appendChild(outputLine);

            if (text) {
                const resultLine = document.createElement('div');
                resultLine.className = 'terminal-output-line';
                resultLine.innerHTML = text;
                terminalOutput.appendChild(resultLine);
            }
        } else {
            outputLine.innerHTML = text;
            terminalOutput.appendChild(outputLine);
        }

        // Scroll to bottom
        const terminalBody = document.querySelector('.terminal-body');
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    // Handle Enter key
    terminalInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const input = this.value.trim();

            if (input) {
                commandHistory.push(input);
                historyIndex = commandHistory.length;

                const output = processCommand(input);
                addOutput(output, input);
            }

            this.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                this.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                this.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                this.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const input = this.value.toLowerCase();
            const matches = Object.keys(commands).filter(cmd => cmd.startsWith(input));
            if (matches.length === 1) {
                this.value = matches[0];
            }
        }
    });

    // Keep focus on input
    document.querySelector('.terminal-body').addEventListener('click', function () {
        terminalInput.focus();
    });
});

