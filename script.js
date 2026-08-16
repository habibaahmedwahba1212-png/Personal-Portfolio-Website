// 1. قاموس الترجمة الشامل لجميع صفحات الموقع
const translations = {
    en: {
        // Navigation
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",

        // Home Page
        "hero-badge": "🎓 Computer & Programming Engineer",
        "hero-hi": "Hi, I'm",
        "hero-title": "Frontend Developer & Data Analyst",
        "hero-desc-1": "Computer & Programming Engineering Graduate from Misr University for Science & Technology (MUST).",
        "hero-desc-2": "Passionate about building modern web applications, data analytics, and intelligent systems.",
        "btn-projects": "View Projects",
        "btn-contact": "Contact Me",
        "services-title": "What I Do",
        "services-sub": "Bridging the gap between clean code and data insights",
        "s1-title": "Frontend Development",
        "s1-desc": "Designing responsive, accessible, and user-friendly web interfaces using modern CSS and JavaScript frameworks.",
        "s2-title": "Data Analytics & BI",
        "s2-desc": "Analyzing relational databases, creating structured SQL queries, and designing interactive Power BI dashboards.",
        "s3-title": "Intelligent Systems",
        "s3-desc": "Integrating data models and web systems to deliver functional, real-world engineering solutions.",

        // About Page
        "about-title": "About Me",
        "about-sub": "Education, Background & Training Certificates",
        "edu-title": "🎓 Education",
        "degree-title": "B.Sc. in Computer & Programming Engineering",
        "university-name": "Misr University for Science & Technology (MUST)",
        "grad-label": "Graduation Year:",
        "spec-title": "💡 Core Specialization",
        "spec-desc": "Focused on Frontend Development, Web Technologies, Database Management, and Business Intelligence / Data Analytics.",
        "cert-section-title": "📜 Practical Training & Certifications",
        "c1-title": "Big Data Analytics",
        "c1-issuer": "🏢 Telecom Egypt (WE)",
        "c1-desc": "Hands-on training covering Big Data concepts, data processing, and analytical frameworks.",
        "c2-title": "Computer Vision & IoT",
        "c2-issuer": "🏛️ AOI Academy (Arab Organization for Industrialization)",
        "c2-desc": "Practical application of Computer Vision techniques and Internet of Things architectures.",
        "c3-title": "Data Communication Network",
        "c3-issuer": "🏛️ AOI Academy (Arab Organization for Industrialization)",
        "c3-desc": "Fundamentals of data communication protocols, network topologies, and data transfer systems.",

        // Skills Page
        "skills-title": "Technical Expertise & Skills",
        "skills-sub": "A comprehensive breakdown of my technical stack, tools, and engineering knowledge.",
        "cat1-title": "🌐 Frontend Web Development",
        "sk-html-intro": "Building semantic and accessible web structures.",
        "sk-html-1": "Semantic Tags & Web Accessibility (A11y)",
        "sk-html-2": "SEO-friendly Page Architecture",
        "sk-html-3": "Forms, Input Validation & Native Elements",
        "sk-css-intro": "Crafting responsive and modern layouts.",
        "sk-css-1": "Flexbox & CSS Grid Layouts",
        "sk-css-2": "Responsive Design & Media Queries",
        "sk-css-3": "Transitions, Animations & Custom Properties",
        "sk-js-intro": "Adding dynamic behavior and logical interactions.",
        "sk-js-1": "DOM Manipulation & Event Handling",
        "sk-js-2": "ES6+ Features (Arrow Functions, Promises, Async/Await)",
        "sk-js-3": "Fetch API & JSON Integration",

        "cat2-title": "📊 Data Analytics & Business Intelligence",
        "sk-sql-intro": "Querying, structuring, and managing data.",
        "sk-sql-1": "Complex Queries, Joins & Subqueries",
        "sk-sql-2": "Database Design & Data Normalization",
        "sk-sql-3": "Data Filtering, Aggregation & Grouping",
        "sk-pbi-intro": "Transforming raw data into interactive dashboards.",
        "sk-pbi-1": "Data Cleaning & Power Query Transformations",
        "sk-pbi-2": "Interactive Dashboard Design & KPI Reports",
        "sk-pbi-3": "DAX Fundamentals & Calculated Columns",
        "sk-stat-intro": "Understanding statistical models and metrics.",
        "sk-stat-1": "Correlation Coefficients & Trend Analysis",
        "sk-stat-2": "Regression Equations & Data Relationships",
        "sk-stat-3": "Descriptive Statistics (Mean, Median, Variance)",

        "cat3-title": "🛠️ Engineering Concepts & Workflow Tools",
        "sk-git-intro": "Version control and collaboration.",
        "sk-git-1": "Repository Management & Branching Workflow",
        "sk-git-2": "Commit History, Merging & Pull Requests",
        "sk-git-3": "GitHub Pages Deployment",
        "sk-tools-intro": "Tools and code editors optimization.",
        "sk-tools-1": "Visual Studio Code Configuration & Extensions",
        "sk-tools-2": "Chrome DevTools & Debugging Techniques",
        "sk-tools-3": "Command Line / Terminal Operations",
        "sk-erp-intro": "Engineering systems and data architecture.",
        "sk-erp-1": "Multi-table Data Architecture & Flow",
        "sk-erp-2": "Enterprise Resource Planning (ERP) Principles",
        "sk-erp-3": "System Design & Logic Integration",

        "cat4-title": "🧠 Professional & Engineering Mindset",
        "st-1": "💡 Problem Solving",
        "st-2": "🔍 Analytical Thinking",
        "st-3": "📄 Technical Documentation",
        "st-4": "🎯 Attention to Detail",
        "st-5": "🤝 Team Collaboration",
        "st-6": "⏱️ Time Management",

        // Projects Page
        "proj-header-title": "Featured Projects",
        "proj-header-sub": "Practical projects and interactive solutions built with modern web technologies and data analytics.",
        "p1-type": "Frontend Development",
        "p1-title": "Personal Portfolio Website",
        "p1-desc": "A modern, fully responsive multi-page portfolio built from scratch to showcase engineering background, technical skills, and data projects with English/Arabic language toggling support.",
        "tag-responsive": "Responsive Design",
        "btn-demo": "Live Demo",
        "btn-github": "GitHub Code",

        "p2-type": "Data Analytics & BI",
        "p2-title": "HR Employee Attrition Dashboard",
        "p2-desc": "An interactive Power BI analytics dashboard analyzing employee turnover (1,470 total workforce, 16.12% attrition rate) across departments, age groups, job roles, overtime, and satisfaction metrics.",
        "tag-hr": "HR Analytics",
        "tag-attrition": "Attrition Analysis",
        "tag-kpi": "KPI Dashboards",
        "btn-view-overview": "Overview Page",
        "btn-view-drilldown": "Drill Down Page",

        // Contact Page
        "contact-title": "Get In Touch",
        "contact-sub": "Feel free to reach out for opportunities, collaborations, or questions!",
        "card-email": "Email",
        "card-phone": "Phone / WhatsApp",
        "link-linkedin": "Connect on LinkedIn",
        "link-github": "View GitHub Profile",
        "cv-title": "Resume / CV",
        "cv-btn": "Download CV",
        "form-title": "Send Me a Message",
        "form-btn": "Send Message",
        "ph-name": "Your Name",
        "ph-email": "Your Email",
        "ph-message": "Your Message...",

        // Footer & Shared
        "footer-rights": "All rights reserved.",
        "lang-btn": "عربي"
    },
    ar: {
        // Navigation
        "nav-home": "الرئيسية",
        "nav-about": "عنّي",
        "nav-skills": "المهارات",
        "nav-projects": "المشاريع",
        "nav-contact": "تواصل معي",

        // Home Page
        "hero-badge": "🎓 مهندسة حاسبات وبرمجيات",
        "hero-hi": "أهلاً، أنا",
        "hero-title": "مطوّرة واجهات مستخدم ومحللة بيانات",
        "hero-desc-1": "خريجة هندسة الحاسبات والبرمجيات من جامعة مصر للعلوم والتكنولوجيا (MUST).",
        "hero-desc-2": "شغوفة ببناء تطبيقات الويب الحديثة، تحليل البيانات، والنظم الذكية.",
        "btn-projects": "عرض المشاريع",
        "btn-contact": "تواصل معي",
        "services-title": "ما أقدمه",
        "services-sub": "الربط بين الكود المتقن ورؤى واستنتاجات البيانات",
        "s1-title": "تطوير واجهات المستخدم (Frontend)",
        "s1-desc": "تصميم واجهات ويب متجاوبة، سهلة الاستخدام، وسريعة باستخدام أحدث تقنيات CSS وJavaScript.",
        "s2-title": "تحليل البيانات وذكاء الأعمال (BI)",
        "s2-desc": "تحليل قواعد البيانات المترابطة، كتابة استعلامات SQL المنظمة، وتصميم لوحات تحكم تفاعلية عبر Power BI.",
        "s3-title": "الأنظمة الذكية",
        "s3-desc": "دمج نماذج البيانات مع أنظمة الويب لتقديم حلول هندسية عملية وفعالة.",

        // About Page
        "about-title": "عنّي",
        "about-sub": "التعليم، الخلفية الأكاديمية والشهادات التدريبية",
        "edu-title": "🎓 التعليم الأكاديمي",
        "degree-title": "بكالوريوس هندسة الحاسبات والبرمجيات",
        "university-name": "جامعة مصر للعلوم والتكنولوجيا (MUST)",
        "grad-label": "سنة التخرج:",
        "spec-title": "💡 التخصص الأساسي",
        "spec-desc": "تركيز متقدم في تطوير واجهات الويب (Frontend)، تقنيات الويب، إدارة قواعد البيانات، وذكاء الأعمال / تحليل البيانات.",
        "cert-section-title": "📜 التدريبات العملية والشهادات",
        "c1-title": "تحليل البيانات الضخمة (Big Data Analytics)",
        "c1-issuer": "🏢 المصرية للاتصالات (WE)",
        "c1-desc": "تدريب عملي يغطي مفاهيم البيانات الضخمة، معالجة البيانات، وأطر العمل التحليلية.",
        "c2-title": "الرؤية الحاسوبية وإنترنت الأشياء (Computer Vision & IoT)",
        "c2-issuer": "🏛️ أكاديمية الهيئة العربية للتصنيع (AOI)",
        "c2-desc": "تطبيق عملي لتقنيات الرؤية الحاسوبية ومعماريات إنترنت الأشياء.",
        "c3-title": "شبكات نقل البيانات (Data Communication Network)",
        "c3-issuer": "🏛️ أكاديمية الهيئة العربية للتصنيع (AOI)",
        "c3-desc": "أساسيات بروتوكولات الاتصال، مخططات الشبكات، وأنظمة نقل البيانات.",

        // Skills Page
        "skills-title": "الخبرات المهارية والتقنية",
        "skills-sub": "استعراض شامل للأدوات والتكنولوجيات والمفاهيم الهندسية التي أتقنها.",
        "cat1-title": "🌐 تطوير واجهات الويب (Frontend)",
        "sk-html-intro": "بناء هيكلية ويب دلالية وسهلة الوصول.",
        "sk-html-1": "الوسوم الدلالية وسهولة الوصول للويب (A11y)",
        "sk-html-2": "بناء صفحات محسنة لمحركات البحث (SEO)",
        "sk-html-3": "النماذج، التحقق من البيانات والعناصر الأساسية",
        "sk-css-intro": "تصميم واجهات حديثة ومتجاوبة.",
        "sk-css-1": "تنسيقات Flexbox وCSS Grid",
        "sk-css-2": "التصميم المتجاوب واستعلامات الوسائط (Media Queries)",
        "sk-css-3": "الحركات، الانتقالات والخصائص المخصصة",
        "sk-js-intro": "إضافة التفاعلية والمنطق التطبيقي.",
        "sk-js-1": "التحكم في الـ DOM وإدارة الأحداث",
        "sk-js-2": "ميزات JavaScript الحديثة (Promises, Async/Await)",
        "sk-js-3": "الربط مع البرمجيات عبر Fetch API وJSON",

        "cat2-title": "📊 تحليل البيانات وذكاء الأعمال (BI)",
        "sk-sql-intro": "استعلام، هيكلة وإدارة البيانات.",
        "sk-sql-1": "الاستعلامات المعقدة، الربط (Joins) والاستعلامات الفرعية",
        "sk-sql-2": "تصميم قواعد البيانات وتنظيمها (Normalization)",
        "sk-sql-3": "فلترة البيانات، التجميع والدوال الإحصائية",
        "sk-pbi-intro": "تحويل البيانات الخام إلى لوحات تفاعلية.",
        "sk-pbi-1": "تنظيف البيانات والتحويلات عبر Power Query",
        "sk-pbi-2": "تصميم التقارير ولوحات المتابعة التفاعلية (KPIs)",
        "sk-pbi-3": "أساسيات صِيَغ DAX والأعمدة المحسوبة",
        "sk-stat-intro": "فهم النماذج والمقاييس الإحصائية.",
        "sk-stat-1": "معاملات الارتباط وتحليل الاتجاهات",
        "sk-stat-2": "معادلات الانحدار وعلاقات البيانات",
        "sk-stat-3": "الإحصاء الوصفي (المتوسط، الوسيط، التباين)",

        "cat3-title": "🛠️ المفاهيم الهندسية وأدوات العمل",
        "sk-git-intro": "إدارة النسخ والتعاون البرمجي.",
        "sk-git-1": "إدارة المستودعات والتعامل مع الفروع (Branches)",
        "sk-git-2": "تتبع التعديلات، الدمج وطلبات السحب (Pull Requests)",
        "sk-git-3": "رفع المواقع عبر GitHub Pages",
        "sk-tools-intro": "تحسين بيئات وأدوات التطوير.",
        "sk-tools-1": "إعداد بيئة VS Code والملحقات المتقدمة",
        "sk-tools-2": "أدوات الفحص والتصحيح Chrome DevTools",
        "sk-tools-3": "التعامل مع موجه الأوامر (Terminal)",
        "sk-erp-intro": "الهندسة المعمارية للنظم والبيانات.",
        "sk-erp-1": "تدفق وهيكلة البيانات متعددة الجداول",
        "sk-erp-2": "مبادئ تخطيط موارد المؤسسات (ERP)",
        "sk-erp-3": "تصميم الأنظمة وربط المنطق البرمجي",

        "cat4-title": "🧠 المهارات الشخصية والهندسية",
        "st-1": "💡 حل المشكلات",
        "st-2": "🔍 التفكير التحليلي",
        "st-3": "📄 التوثيق التقني",
        "st-4": "🎯 الدقة والاهتمام بالتفاصيل",
        "st-5": "🤝 العمل الجماعي",
        "st-6": "⏱️ إدارة الوقت",

        // Projects Page
        "proj-header-title": "المشاريع البارزة",
        "proj-header-sub": "مشاريع عملية وحلول تفاعلية مبنية بأحدث تقنيات الويب وتحليل البيانات.",
        "p1-type": "تطوير واجهات المستخدم",
        "p1-title": "موقع معرض الأعمال الشخصي",
        "p1-desc": "موقع متعدد الصفحات متجاوب بالكامل تم بناؤه من الصفر لاستعراض الخلفية الهندسية، المهارات التقنية، ومشاريع البيانات مع دعم التبديل بين اللغتين العربية والإنجليزية.",
        "tag-responsive": "تصميم متجاوب",
        "btn-demo": "معاينة مباشرة",
        "btn-github": "كود GitHub",

        "p2-type": "تحليل البيانات وذكاء الأعمال",
        "p2-title": "لوحة تحليل تسرب الموظفين (HR Attrition)",
        "p2-desc": "لوحة تحكم تفاعلية عبر Power BI لتحليل معدلات دوران الموظفين (1,470 موظف، بنسبة تسرب 16.12%) عبر الأقسام، الفئات العمرية، المسميات الوظيفية، الساعات الإضافية ومعدلات الرضا.",
        "tag-hr": "تحليل الموارد البشرية",
        "tag-attrition": "تحليل تسرب العمل",
        "tag-kpi": "لوحات مؤشرات الأداء (KPIs)",
        "btn-view-overview": "صفحة Overview",
        "btn-view-drilldown": "صفحة Drill Down",

        // Contact Page
        "contact-title": "تواصل معي",
        "contact-sub": "لا تتردد في التواصل معي للفرص الوظيفية، التعاون، أو الأسئلة!",
        "card-email": "البريد الإلكتروني",
        "card-phone": "الهاتف / واتساب",
        "link-linkedin": "تواصل عبر LinkedIn",
        "link-github": "عرض ملف GitHub",
        "cv-title": "السيرة الذاتية",
        "cv-btn": "تحميل الـ CV",
        "form-title": "أرسل لي رسالة",
        "form-btn": "إرسال الرسالة",
        "ph-name": "الاسم الكامل",
        "ph-email": "بريدك الإلكتروني",
        "ph-message": "نص الرسالة...",

        // Footer & Shared
        "footer-rights": "جميع الحقوق محفوظة.",
        "lang-btn": "English"
    }
};

// 2. العناصر واللغة الحالية
const langBtn = document.getElementById('lang-btn');
let currentLang = localStorage.getItem('site_lang') || 'en';

// 3. دالة تطبيق الترجمة والاتجاه
function applyLanguage(lang) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // تغيير النصوص لجميع العناصر الحاملة لـ data-key
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // ترجمة حقول إدخال النموذج (Placeholders)
    const inputName = document.getElementById('input-name');
    const inputEmail = document.getElementById('input-email');
    const inputMessage = document.getElementById('input-message');

    if (inputName) inputName.placeholder = translations[lang]["ph-name"];
    if (inputEmail) inputEmail.placeholder = translations[lang]["ph-email"];
    if (inputMessage) inputMessage.placeholder = translations[lang]["ph-message"];

    // تغيير اسم زرار التبديل
    if (langBtn && translations[lang]["lang-btn"]) {
        langBtn.textContent = translations[lang]["lang-btn"];
    }

    // حفظ اللغة المحددة في المتصفح
    localStorage.setItem('site_lang', lang);
}

// 4. تشغيل الترجمة فور تحمييل الصفحة
applyLanguage(currentLang);

// 5. التبديل بين اللغتين عند الضغط على الزر
if (langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        applyLanguage(currentLang);
    });
}