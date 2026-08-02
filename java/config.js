const CONFIG = {

    /* default settings, read by script.js on first load (before any
       localStorage value exists) */
    defaults: {
        theme: "dark",   // "dark" | "light"
        lang: "id"        // "id" | "en"
    },

    personal: {
        name: "Habib Alfino Febrianto",
        role: { id: "Web Developer", en: "Web Developer" },
        tagline: {
            id: "Membangun antarmuka yang cepat dan rapi, dengan sedikit gaya web-slinger.",
            en: "Building fast, clean interfaces with a bit of web-slinging attitude."
        },
        bio: {
            id: "Halo Semuanya perkenalkan nama saya habib, Saya berumur 16 tahun, Saya murid dari dismks brantas karangkates, Saya tinggal di desa boro kecamatan selorejo kabupaten blitar, Pada waktu luang, saya mengembangkan berbagai proyek pribadi, seperti membuat model 3D yang kemudian saya unggah ke kanal YouTube Federic Parkerr. Selain itu, saya juga mengembangkan website sebagai sarana belajar dan bereksperimen, serta memiliki pengalaman melakukan deployment website menggunakan layanan hosting Vercel versi gratis.",
            en: "Hello everyone, my name is Habib. I am 16 years old and a student at SMKS Brantas Karangkates. I live in Boro Village, Selorejo District, Blitar Regency. In my spare time, I work on various personal projects, such as creating 3D models that I upload to my YouTube channel, Federic Parkerr. Additionally, I develop websites as a way to learn and experiment, and I have experience deploying websites using Vercel's free hosting service."
        },
        avatar: "img/18. HABIB ALFINO FEBRIANTO.jpg",
        email: "finofebriantohabibal@gmail.com"
    },

    socials: {
        github: "https://github.com/Fino905",
        instagram: "https://www.instagram.com/finofebriantohabibal/",
        discord: "https://discord.gg/FXydVBX4t"
    },

    /* EmailJS — powers the contact form so submissions land in your inbox.
       Get/rotate these from your EmailJS dashboard: emailjs.com */
    emailjs: {
        publicKey: "QywZ7Ja_fPt2PvUKK",
        serviceId: "service_5o5x1d7",
        templateId: "template_c6q1wif"
    },

    skillsCategories: [
        {
            title: { id: "Frontend", en: "Frontend" },
            items: [
                { name: "HTML5", icon: "html5", color: "E34F26" },
                { name: "CSS", icon: "css", color: "1572B6" },
                { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
            ]
        },
        {
            title: { id: "Backend", en: "Backend" },
            items: [
                { name: "PHP", icon: "php", color: "777BB4" },
            ]
        },
        {
            title: { id: "Database", en: "Database" },
            items: [
                { name: "MySQL", icon: "mysql", color: "4479A1" },
            ]
        },
        {
            title: { id: "Pemrograman", en: "Programming" },
            items: [
                { name: "Python", icon: "python", color: "3776AB" },
                { name: "C++", icon: "cplusplus", color: "00599C" },
            ]
        },
        {
            title: { id: "Tools", en: "Tools" },
            items: [
                { name: "Git", icon: "git", color: "F05032" },
                { name: "GitHub", icon: "github", color: "FFFFFF" },
                { name: "VS Code", icon: "visualstudiocode", color: "007ACC" },
                { name: "Figma", icon: "figma", color: "F24E1E" },
            ]
        },
        {
            title: { id: "Cloud", en: "Cloud" },
            items: [
                { name: "Vercel", icon: "vercel", color: "FFFFFF" },
            ]
        },
        {
            title: { id: "AI", en: "AI" },
            items: [
                { name: "ChatGPT", icon: "openai", color: "FFFFFF" },
                { name: "Claude", icon: "claude", color: "D97757" },
                { name: "Gemini", icon: "googlegemini", color: "8E75B2" }
            ]
        }
    ],

    projects: [
        {
            title: { id: "Website Portofolio", en: "Portfolio Website" },
            description: {
                id: "Website portofolio yang menampilkan proyek dan keahlian saya, dengan tema kota dan spiderman.",
                en: "A portfolio website that showcases my projects and skills, with a city and spiderman theme."
            },
            image: "img/pj/project1.png",
            link: "https://habib-portofolio-project.vercel.app/"
        },
        {
            title: { id: "Website Kelas XI RPL 2", en: "Class XI RPL 2 Website" },
            description: {
                id: "Website kelas XI RPL 2 SMKS Brantas Karangkates, dengan tema gelap dan glassmorphic.",
                en: "Class XI RPL 2 SMKS Brantas Karangkates website, with a dark and glassmorphic theme."
            },
            image: "img/pj/project2.png",
            link: "https://habib-portofolio-project.vercel.app/?id=1"
        },
        {
            title: { id: "Website Studio Minecraft", en: "Studio Minecraft Website" },
            description: {
                id: "Website untuk studio game Minecraft, dengan tema gelap dan glassmorphic.",
                en: "A website for a Minecraft game studio, with a dark and glassmorphic theme."
            },
            image: "img/pj/project3.png",
            link: "https://habib-portofolio-project.vercel.app/?id=2"
        },
        {
            title: { id: "Design Figma Website", en: "Figma Website Design" },
            description: {
                id: "Design website komik anime dengan Figma",
                en: "A Figma design for an anime comic website."
            },
            image: "img/pj/project4.png",
            link: "https://habib-portofolio-project.vercel.app/?id=3"
        },
        {
            title: { id: "3D Modeling Armor Minecraft", en: "Minecraft Armor 3D Modeling" },
            description: {
                id: "3D Modeling armor Minecraft untuk proyek pribadi, dengan tema robotik dan futuristik.",
                en: "3D modeling of Minecraft armor for a personal project, with a robotic and futuristic theme."
            },
            image: "img/pj/project5.png",
            link: "https://habib-portofolio-project.vercel.app/?id=4"
        },
        {
            title: { id: "Website Penjualan", en: "Sales Website" },
            description: {
                id: "Website penjualan untuk toko online, dengan meniru lay out dan fitur dari website e-commerce populer.",
                en: "A sales website for an online store, mimicking the layout and features of popular e-commerce websites."
            },
            image: "img/pj/project6.png",
            link: "https://habib-portofolio-project.vercel.app/?id=5"
        },
    ],

    hero: {
        image: "img/hero5.png",
        cityBg: "img/city1.jpg",
        typingWords: {
            id: ["Pengembang Frontend", "Pengembang Web", "Penggemar UI"],
            en: ["Frontend Developer", "Web Developer", "UI Enthusiast"]
        }
    },

    /* ---------------- pure UI strings ---------------- */
    translations: {
        id: {
            navHome: "Beranda",
            navAbout: "Tentang",
            navProjects: "Proyek",
            navContact: "Kontak",
            navSkills: "Keahlian",

            loadingLine1: "Memuat...",
            loadingLine2: "Menyiapkan portofolio saya...",

            heroEyebrow: "Portofolio // City Watch",
            heroHi: "Hai, saya",
            heroBtnProjects: "Lihat Proyek",
            heroBtnContact: "Kontak",
            scrollCue: "GULIR",

            aboutEyebrow: "Kisah Asal",
            aboutTitle: "Tentang Saya",

            skillsEyebrow: "Perlengkapan Web-Slinger",
            skillsTitle: "Keahlian",
            skillsSubtitle: "Teknologi yang saya gunakan untuk membangun sesuatu di kota.",

            projectsEyebrow: "Misi Lapangan",
            projectsTitle: "Proyek",
            projectsSubtitle: "Beberapa karya yang layak disinggahi.",
            projectViewCode: "Lihat Project",

            contactEyebrow: "Hubungi Daily Bugle",
            contactTitle: "Kontak",
            contactHeading: "Ayo bangun sesuatu.",
            contactDesc: "Punya proyek dalam pikiran, atau sekadar ingin menyapa? Kirim pesan.",
            contactNamePlaceholder: "Nama",
            contactEmailPlaceholder: "Email",
            contactMessagePlaceholder: "Pesan",
            contactSendBtn: "Kirim Pesan",

            formErrorName: "Masukkan nama Anda (minimal 2 karakter).",
            formErrorEmail: "Masukkan alamat email yang valid.",
            formErrorMessage: "Pesan minimal 10 karakter.",
            formStatusFail: "Mohon perbaiki kolom yang ditandai.",
            formStatusSending: "Mengirim pesan...",
            formStatusSuccess: "Pesan terkirim! Saya akan segera membalas.",
            formStatusError: "Gagal mengirim pesan. Coba lagi sebentar lagi ya.",

            footerRights: "Seluruh hak cipta dilindungi.",
            themeToggleAria: "Ganti tema",
            langToggleAria: "Ganti bahasa"
        },
        en: {
            navHome: "Home",
            navAbout: "About",
            navProjects: "Projects",
            navContact: "Contact",
            navSkills: "Skills",

            loadingLine1: "Loading...",
            loadingLine2: "Preparing my portfolio...",

            heroEyebrow: "Portfolio // City Watch",
            heroHi: "Hi, I'm",
            heroBtnProjects: "View Projects",
            heroBtnContact: "Contact",
            scrollCue: "SCROLL",

            aboutEyebrow: "Origin Story",
            aboutTitle: "About Me",

            skillsEyebrow: "Web-Slinger Gear",
            skillsTitle: "Skills",
            skillsSubtitle: "The tech I reach for to build things around the city.",

            projectsEyebrow: "Field Missions",
            projectsTitle: "Projects",
            projectsSubtitle: "A few builds worth swinging by.",
            projectViewCode: "View Project",

            contactEyebrow: "Signal The Bugle",
            contactTitle: "Contact",
            contactHeading: "Let's build something.",
            contactDesc: "Have a project in mind, or just want to say hi? Send a message.",
            contactNamePlaceholder: "Name",
            contactEmailPlaceholder: "Email",
            contactMessagePlaceholder: "Message",
            contactSendBtn: "Send Message",

            formErrorName: "Please enter your name (min 2 characters).",
            formErrorEmail: "Please enter a valid email address.",
            formErrorMessage: "Message should be at least 10 characters.",
            formStatusFail: "Please fix the highlighted fields.",
            formStatusSending: "Sending message...",
            formStatusSuccess: "Message sent! I'll get back to you soon.",
            formStatusError: "Couldn't send the message. Please try again in a bit.",

            footerRights: "All rights reserved.",
            themeToggleAria: "Toggle theme",
            langToggleAria: "Switch language"
        }
    }
};
