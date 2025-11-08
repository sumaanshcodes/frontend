// Company data for the New Courses section
const companies = [
    {
        name: "TCS",
        type: "IT Services & Consulting",
        logo: "TCS",
        logoUrl: "https://logo.clearbit.com/tcs.com",
        color: "#0066CC",
        skills: ["Java", "Python", "SQL", "Spring Boot", "Microservices", "DevOps", "Agile"],
        syllabus: [
            "Core Java Programming",
            "Spring Framework & Spring Boot",
            "Database Design & SQL",
            "Microservices Architecture",
            "DevOps & CI/CD",
            "Agile Methodologies",
            "System Design",
            "Data Structures & Algorithms"
        ],
        roadmap: [
            "Master core programming languages (Java/Python)",
            "Learn database management and SQL",
            "Understand software development lifecycle",
            "Practice coding problems on platforms like LeetCode",
            "Build projects showcasing your skills",
            "Prepare for technical interviews",
            "Develop soft skills and communication",
            "Apply through campus placements or direct applications"
        ]
    },
    {
        name: "Wipro",
        type: "IT Services & Digital Solutions",
        logo: "W",
        logoUrl: "https://logo.clearbit.com/wipro.com",
        color: "#FF6900",
        skills: ["Java", "C#", "Angular", "React", "Azure", "AWS", "Docker"],
        syllabus: [
            "Object-Oriented Programming",
            "Web Development (Frontend & Backend)",
            "Cloud Computing (AWS/Azure)",
            "Database Management",
            "Software Testing",
            "Project Management",
            "Communication Skills",
            "Problem Solving"
        ],
        roadmap: [
            "Build strong foundation in programming",
            "Learn web development technologies",
            "Get familiar with cloud platforms",
            "Practice system design concepts",
            "Develop testing skills",
            "Improve communication abilities",
            "Create a strong portfolio",
            "Network and apply strategically"
        ]
    },
    {
        name: "Capgemini",
        type: "Digital Transformation & Consulting",
        logo: "C",
        logoUrl: "https://logo.clearbit.com/capgemini.com",
        color: "#0070AD",
        skills: ["Java", "Python", "SAP", "Salesforce", "Data Analytics", "AI/ML"],
        syllabus: [
            "Enterprise Application Development",
            "SAP & ERP Systems",
            "Data Analytics & Visualization",
            "Artificial Intelligence & Machine Learning",
            "Cloud Technologies",
            "Business Process Management",
            "Digital Transformation",
            "Consulting Skills"
        ],
        roadmap: [
            "Understand enterprise software development",
            "Learn SAP or Salesforce platforms",
            "Develop data analysis skills",
            "Explore AI/ML technologies",
            "Build business acumen",
            "Practice case studies",
            "Develop consulting mindset",
            "Apply for graduate programs"
        ]
    },
    {
        name: "Google",
        type: "Technology & Innovation",
        logo: "G",
        logoUrl: "https://logo.clearbit.com/google.com",
        color: "#4285F4",
        skills: ["Python", "C++", "Go", "Machine Learning", "Distributed Systems", "Algorithms"],
        syllabus: [
            "Advanced Algorithms & Data Structures",
            "Machine Learning & AI",
            "Distributed Systems Design",
            "System Programming",
            "Research & Innovation",
            "Product Development",
            "Technical Leadership",
            "Open Source Contributions"
        ],
        roadmap: [
            "Excel in competitive programming",
            "Master advanced algorithms",
            "Build ML/AI expertise",
            "Contribute to open source projects",
            "Develop system design skills",
            "Pursue research opportunities",
            "Build impressive projects",
            "Apply through Google's hiring process"
        ]
    },
    {
        name: "Accenture",
        type: "Digital & Technology Consulting",
        logo: "A",
        logoUrl: "https://logo.clearbit.com/accenture.com",
        color: "#A100FF",
        skills: ["Java", "Python", "React", "Node.js", "Cloud", "Agile", "DevOps"],
        syllabus: [
            "Full-Stack Development",
            "Cloud Computing & DevOps",
            "Agile & Scrum Methodologies",
            "Digital Transformation",
            "Business Analysis",
            "Project Management",
            "Client Communication",
            "Innovation & Design Thinking"
        ],
        roadmap: [
            "Develop full-stack capabilities",
            "Learn cloud and DevOps practices",
            "Master agile methodologies",
            "Build business analysis skills",
            "Develop client-facing abilities",
            "Practice design thinking",
            "Create digital solutions",
            "Apply for consulting roles"
        ]
    },
    {
        name: "Microsoft",
        type: "Software & Cloud Services",
        logo: "M",
        logoUrl: "https://logo.clearbit.com/microsoft.com",
        color: "#00BCF2",
        skills: ["C#", "Azure", "Power Platform", "AI", "Machine Learning", "DevOps"],
        syllabus: [
            "C# & .NET Development",
            "Microsoft Azure Cloud",
            "Power Platform & Low-Code",
            "Artificial Intelligence",
            "Machine Learning with Azure",
            "DevOps & CI/CD",
            "Software Architecture",
            "Product Development"
        ],
        roadmap: [
            "Master Microsoft technologies",
            "Learn Azure cloud services",
            "Develop AI/ML expertise",
            "Build with Power Platform",
            "Practice system architecture",
            "Contribute to Microsoft ecosystem",
            "Develop product thinking",
            "Apply for Microsoft programs"
        ]
    },
    {
        name: "Oracle",
        type: "Database & Cloud Infrastructure",
        logo: "O",
        logoUrl: "https://logo.clearbit.com/oracle.com",
        color: "#FF0000",
        skills: ["Java", "SQL", "Oracle Cloud", "Database Design", "PL/SQL", "WebLogic"],
        syllabus: [
            "Oracle Database Administration",
            "PL/SQL Programming",
            "Oracle Cloud Infrastructure",
            "Java Enterprise Development",
            "WebLogic & Middleware",
            "Database Design & Optimization",
            "Cloud Migration",
            "Enterprise Architecture"
        ],
        roadmap: [
            "Master Oracle database technologies",
            "Learn PL/SQL programming",
            "Understand Oracle Cloud services",
            "Develop Java enterprise skills",
            "Practice database optimization",
            "Learn cloud migration strategies",
            "Build enterprise solutions",
            "Apply for Oracle positions"
        ]
    },
    {
        name: "Infosys",
        type: "IT Services & Digital Solutions",
        logo: "I",
        logoUrl: "https://logo.clearbit.com/infosys.com",
        color: "#0066CC",
        skills: ["Java", "Python", "React", "Angular", "Spring", "Microservices"],
        syllabus: [
            "Core Programming Languages",
            "Web Development Frameworks",
            "Microservices Architecture",
            "Database Technologies",
            "Testing & Quality Assurance",
            "Agile Development",
            "Digital Technologies",
            "Business Domain Knowledge"
        ],
        roadmap: [
            "Build strong programming foundation",
            "Learn modern web frameworks",
            "Understand microservices design",
            "Master database technologies",
            "Develop testing expertise",
            "Practice agile methodologies",
            "Build domain knowledge",
            "Apply through campus or lateral hiring"
        ]
    },
    {
        name: "IBM",
        type: "Technology & Consulting",
        logo: "IBM",
        logoUrl: "https://logo.clearbit.com/ibm.com",
        color: "#006699",
        skills: ["Java", "Python", "Watson AI", "Cloud", "Blockchain", "Quantum Computing"],
        syllabus: [
            "Enterprise Java Development",
            "IBM Cloud & Watson AI",
            "Blockchain Technologies",
            "Quantum Computing Basics",
            "Data Science & Analytics",
            "Enterprise Architecture",
            "Consulting & Strategy",
            "Innovation & Research"
        ],
        roadmap: [
            "Develop enterprise programming skills",
            "Learn IBM Cloud and AI services",
            "Explore emerging technologies",
            "Build data science capabilities",
            "Develop consulting skills",
            "Practice innovation thinking",
            "Contribute to IBM ecosystem",
            "Apply for IBM programs"
        ]
    },
    {
        name: "Amazon",
        type: "E-commerce & Cloud Services",
        logo: "A",
        logoUrl: "https://logo.clearbit.com/amazon.com",
        color: "#FF9900",
        skills: ["Java", "Python", "AWS", "Machine Learning", "Distributed Systems", "Algorithms"],
        syllabus: [
            "Advanced Programming",
            "AWS Cloud Services",
            "Machine Learning & AI",
            "Distributed Systems",
            "Data Structures & Algorithms",
            "System Design",
            "Leadership Principles",
            "Customer Obsession"
        ],
        roadmap: [
            "Excel in competitive programming",
            "Master AWS cloud services",
            "Build ML/AI expertise",
            "Develop system design skills",
            "Practice Amazon's leadership principles",
            "Build customer-focused solutions",
            "Contribute to open source",
            "Apply through Amazon's hiring process"
        ]
    },
    {
        name: "Cognizant",
        type: "Digital Business & Technology",
        logo: "C",
        logoUrl: "https://logo.clearbit.com/cognizant.com",
        color: "#0033A0",
        skills: ["Java", "Python", "React", "Angular", "Cloud", "DevOps", "Testing"],
        syllabus: [
            "Full-Stack Development",
            "Cloud Computing",
            "DevOps & Automation",
            "Quality Assurance & Testing",
            "Digital Transformation",
            "Business Process Management",
            "Client Engagement",
            "Innovation & Design"
        ],
        roadmap: [
            "Develop full-stack capabilities",
            "Learn cloud and DevOps",
            "Master testing methodologies",
            "Build business process skills",
            "Develop client engagement abilities",
            "Practice design thinking",
            "Create digital solutions",
            "Apply for Cognizant programs"
        ]
    },
    {
        name: "HCL",
        type: "IT Services & Engineering",
        logo: "HCL",
        logoUrl: "https://logo.clearbit.com/hcltech.com",
        color: "#FF6600",
        skills: ["Java", "Python", "SAP", "Cloud", "DevOps", "Testing", "Mainframe"],
        syllabus: [
            "Enterprise Application Development",
            "SAP & ERP Systems",
            "Cloud Technologies",
            "DevOps & Automation",
            "Mainframe Technologies",
            "Testing & Quality Assurance",
            "Project Management",
            "Engineering Excellence"
        ],
        roadmap: [
            "Build enterprise development skills",
            "Learn SAP or mainframe technologies",
            "Master cloud and DevOps",
            "Develop testing expertise",
            "Build project management skills",
            "Practice engineering best practices",
            "Create enterprise solutions",
            "Apply for HCL positions"
        ]
    }
];

// AI Chatbot Knowledge Base
const chatbotKnowledge = {
    programming: {
        "html": "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of web pages using elements like headings, paragraphs, links, images, and more.",
        "css": "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the appearance of HTML elements including colors, fonts, spacing, and responsive design.",
        "javascript": "JavaScript is a programming language that enables interactive web pages. It's used for frontend development, backend development (Node.js), and can create dynamic content.",
        "python": "Python is a versatile programming language known for its simplicity and readability. It's used for web development, data science, AI/ML, automation, and more.",
        "java": "Java is a popular object-oriented programming language used for enterprise applications, Android development, web applications, and large-scale systems.",
        "react": "React is a JavaScript library for building user interfaces, particularly single-page applications. It uses components and a virtual DOM for efficient rendering.",
        "nodejs": "Node.js is a JavaScript runtime that allows you to run JavaScript on the server-side, enabling full-stack JavaScript development.",
        "sql": "SQL (Structured Query Language) is used to manage and manipulate relational databases. It's essential for data storage, retrieval, and management."
    },
    courses: {
        "frontend": "Frontend development focuses on the user interface and user experience. Key technologies include HTML, CSS, JavaScript, React, Angular, and Vue.js.",
        "backend": "Backend development handles server-side logic, databases, and APIs. Technologies include Node.js, Python, Java, PHP, databases like MySQL, MongoDB, and cloud services.",
        "fullstack": "Full-stack development combines both frontend and backend skills, allowing developers to work on complete web applications from database to user interface."
    },
    placement: {
        "preparation": "To prepare for placements: 1) Master programming fundamentals, 2) Practice data structures and algorithms, 3) Build projects, 4) Prepare for technical interviews, 5) Develop soft skills, 6) Create a strong resume and portfolio.",
        "interview": "Technical interviews typically include: coding problems, system design questions, behavioral questions, and domain-specific technical discussions. Practice on platforms like LeetCode, HackerRank, and CodeChef."
    }
};

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const navLinks = document.querySelectorAll('.nav-link');
const frontendSubmenu = document.getElementById('frontendSubmenu');
const backendSubmenu = document.getElementById('backendSubmenu');
const contentSections = document.querySelectorAll('.content-section');
const bannerScroll = document.getElementById('bannerScroll');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const companyGrid = document.getElementById('companyGrid');
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbot = document.getElementById('closeChatbot');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const chatbotMessages = document.getElementById('chatbotMessages');

// Sidebar Toggle Functionality
let sidebarOpen = false;

menuToggle.addEventListener('click', () => {
    sidebarOpen = !sidebarOpen;
    sidebar.classList.toggle('active', sidebarOpen);
    mainContent.classList.toggle('sidebar-open', sidebarOpen);
});

// Navigation Functionality
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links and sections
        navLinks.forEach(l => l.classList.remove('active'));
        contentSections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Show corresponding section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            sidebarOpen = false;
            sidebar.classList.remove('active');
            mainContent.classList.remove('sidebar-open');
        }
    });
});

// Toggle submenus when clicking parent items
document.querySelectorAll('.nav-item.has-sub > .nav-link').forEach(parentLink => {
    parentLink.addEventListener('click', (e) => {
        const parentItem = parentLink.parentElement;
        parentItem.classList.toggle('open');
    });
});

// Banner Scroll Functionality
let currentBannerIndex = 0;
const bannerItems = document.querySelectorAll('.banner-item');
const totalBanners = bannerItems.length;

function updateBannerPosition() {
    const translateX = -currentBannerIndex * 320; // 300px width + 20px gap
    bannerScroll.style.transform = `translateX(${translateX}px)`;
}

prevBtn.addEventListener('click', () => {
    currentBannerIndex = (currentBannerIndex - 1 + totalBanners) % totalBanners;
    updateBannerPosition();
});

nextBtn.addEventListener('click', () => {
    currentBannerIndex = (currentBannerIndex + 1) % totalBanners;
    updateBannerPosition();
});

// Auto-scroll banner
setInterval(() => {
    currentBannerIndex = (currentBannerIndex + 1) % totalBanners;
    updateBannerPosition();
}, 5000);

// Generate Company Cards
function generateCompanyCards() {
    companyGrid.innerHTML = '';
    
    companies.forEach((company, index) => {
        const companyCard = document.createElement('div');
        companyCard.className = 'company-card';
        companyCard.style.animationDelay = `${index * 0.1}s`;
        
        companyCard.innerHTML = `
            <div class="company-header" style="background: linear-gradient(135deg, ${company.color} 0%, ${company.color}CC 100%)">
                <div class="company-logo" style="background: white; color: ${company.color}">
                    ${company.logoUrl ? `<img src="${company.logoUrl}" alt="${company.name} logo" onerror="this.style.display='none'; this.parentElement.textContent='${company.logo}';" />` : company.logo}
                </div>
                <div class="company-name">${company.name}</div>
                <div class="company-type">${company.type}</div>
            </div>
            <div class="company-content">
                <div class="section-title">Required Skills</div>
                <div class="skills-list">
                    ${company.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                
                <div class="section-title">Course Syllabus</div>
                <ul class="roadmap-steps">
                    ${company.syllabus.map(item => `<li>${item}</li>`).join('')}
                </ul>
                
                <div class="section-title">Placement Roadmap</div>
                <ol class="roadmap-steps">
                    ${company.roadmap.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        `;
        
        companyGrid.appendChild(companyCard);
    });
}

// Populate sidebar submenus with course links
function populateCourseSubmenus() {
    if (!frontendSubmenu || !backendSubmenu) return;
    const frontendCourses = [
        { id: 'fe-html-css', title: 'HTML & CSS Fundamentals', anchor: '#frontend' },
        { id: 'fe-js', title: 'JavaScript Mastery', anchor: '#frontend' },
        { id: 'fe-react', title: 'React.js Development', anchor: '#frontend' },
        { id: 'fe-angular', title: 'Angular Framework', anchor: '#frontend' },
        { id: 'fe-vue', title: 'Vue.js Development', anchor: '#frontend' },
        { id: 'fe-typescript', title: 'TypeScript for Frontend', anchor: '#frontend' },
        { id: 'fe-sass', title: 'SASS/SCSS Styling', anchor: '#frontend' },
        { id: 'fe-webpack', title: 'Webpack & Build Tools', anchor: '#frontend' },
        { id: 'fe-responsive', title: 'Responsive Web Design', anchor: '#frontend' },
        { id: 'fe-ui-ux', title: 'UI/UX Design Principles', anchor: '#frontend' },
    ];
    const backendCourses = [
        { id: 'be-node', title: 'Node.js & Express', anchor: '#backend' },
        { id: 'be-django', title: 'Python & Django', anchor: '#backend' },
        { id: 'be-db', title: 'Database Design', anchor: '#backend' },
        { id: 'be-spring', title: 'Java Spring Boot', anchor: '#backend' },
        { id: 'be-php', title: 'PHP & Laravel', anchor: '#backend' },
        { id: 'be-ruby', title: 'Ruby on Rails', anchor: '#backend' },
        { id: 'be-mongodb', title: 'MongoDB & NoSQL', anchor: '#backend' },
        { id: 'be-mysql', title: 'MySQL & SQL', anchor: '#backend' },
        { id: 'be-aws', title: 'AWS Cloud Services', anchor: '#backend' },
        { id: 'be-docker', title: 'Docker & DevOps', anchor: '#backend' },
        { id: 'be-api', title: 'RESTful API Development', anchor: '#backend' },
        { id: 'be-microservices', title: 'Microservices Architecture', anchor: '#backend' },
    ];
    frontendSubmenu.innerHTML = frontendCourses.map(c => `<li><a href="${c.anchor}">${c.title}</a></li>`).join('');
    backendSubmenu.innerHTML = backendCourses.map(c => `<li><a href="${c.anchor}">${c.title}</a></li>`).join('');
}

// Chatbot Functionality
let chatbotOpen = false;

chatbotToggle.addEventListener('click', () => {
    chatbotOpen = !chatbotOpen;
    chatbotWindow.classList.toggle('active', chatbotOpen);
});

closeChatbot.addEventListener('click', () => {
    chatbotOpen = false;
    chatbotWindow.classList.remove('active');
});

function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.innerHTML = `<p>${content}</p>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check for programming language queries
    for (const [key, value] of Object.entries(chatbotKnowledge.programming)) {
        if (message.includes(key)) {
            return value;
        }
    }
    
    // Check for course-related queries
    for (const [key, value] of Object.entries(chatbotKnowledge.courses)) {
        if (message.includes(key)) {
            return value;
        }
    }
    
    // Check for placement queries
    for (const [key, value] of Object.entries(chatbotKnowledge.placement)) {
        if (message.includes(key)) {
            return value;
        }
    }
    
    // General responses
    if (message.includes('hello') || message.includes('hi')) {
        return "Hello! I'm your GLAU assistant. I can help you with programming questions, course information, and placement guidance. What would you like to know?";
    }
    
    if (message.includes('course') || message.includes('learn')) {
        return "We offer comprehensive courses in Frontend Development (HTML, CSS, JavaScript, React), Backend Development (Node.js, Python, Java), and specialized placement courses for top companies like TCS, Wipro, Google, and Microsoft. Which area interests you?";
    }
    
    if (message.includes('placement') || message.includes('job')) {
        return "Our placement courses are designed to help you get hired at top tech companies. We provide detailed roadmaps, required skills, and interview preparation for companies like TCS, Wipro, Capgemini, Google, Accenture, Microsoft, Oracle, and more. Would you like to know about a specific company?";
    }
    
    if (message.includes('help')) {
        return "I can help you with:\n• Programming language explanations (HTML, CSS, JavaScript, Python, Java, etc.)\n• Course information and recommendations\n• Placement guidance and company-specific roadmaps\n• Technical interview preparation tips\n\nWhat specific topic would you like to explore?";
    }
    
    // Default response
    return "I'm here to help you with programming questions, course information, and placement guidance. Could you please be more specific about what you'd like to know? For example, you can ask about programming languages, courses, or placement preparation.";
}

function sendChatMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message';
        typingDiv.innerHTML = '<p><span class="loading"></span> Thinking...</p>';
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Simulate thinking time and get response
        setTimeout(() => {
            typingDiv.remove();
            const response = getBotResponse(message);
            addMessage(response);
        }, 1000 + Math.random() * 1000);
    }
}

sendMessage.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

// Course Enrollment Functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-btn')) {
        e.preventDefault();
        const course = e.target.getAttribute('data-course') || 'Selected Course';
        const subject = encodeURIComponent(`Course Purchase Inquiry: ${course}`);
        const body = encodeURIComponent(`Hi GLAU Team,%0D%0A%0D%0AI want to buy: ${course}.%0D%0APlease contact me with next steps.%0D%0A%0D%0AThanks!`);
        window.location.href = `mailto:yadavsumansh@gmail.com?subject=${subject}&body=${body}`;
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Profile form submission using EmailJS if configured, else mailto fallback
function setupProfileForm() {
    const form = document.getElementById('profileForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());

        const emailjsAvailable = typeof emailjs !== 'undefined' && emailjs?.send;
        const serviceId = window.EMAILJS_SERVICE_ID;
        const templateId = window.EMAILJS_TEMPLATE_ID;
        const publicKey = window.EMAILJS_PUBLIC_KEY;

        try {
            if (emailjsAvailable && serviceId && templateId && publicKey) {
                emailjs.init(publicKey);
                await emailjs.send(serviceId, templateId, {
                    to_email: 'yadavsumansh@gmail.com',
                    full_name: data.fullName,
                    email: data.email,
                    phone: data.phone || '-',
                    interest: data.interest,
                    message: data.message || '-'
                });
                alert('Thanks! Your details were sent successfully.');
                form.reset();
                return;
            }
        } catch (err) {
            console.error('EmailJS error', err);
        }

        const subject = encodeURIComponent(`New Profile Submission from ${data.fullName}`);
        const body = encodeURIComponent(`Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone || '-'}\nInterest: ${data.interest}\nMessage: ${data.message || '-'}`);
        window.location.href = `mailto:yadavsumansh@gmail.com?subject=${subject}&body=${body}`;
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    generateCompanyCards();
    populateCourseSubmenus();
    
    // Add loading animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe course cards and company cards
    document.querySelectorAll('.course-card, .company-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add welcome message to chatbot
    setTimeout(() => {
        addMessage("Welcome to GLAU! I'm here to help you with programming questions, course information, and placement guidance. Feel free to ask me anything!");
    }, 1000);
    setupProfileForm();
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && sidebarOpen) {
        sidebarOpen = false;
        sidebar.classList.remove('active');
        mainContent.classList.remove('sidebar-open');
    }
});

// Add some interactive effects
document.querySelectorAll('.course-card, .company-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

