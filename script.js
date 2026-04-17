// ==========================================
// 1. 数据配置区 (相当于你的本地数据库)
// ==========================================
const siteData = {
    personal: {
        name: "Tingchao Fu (付廷超)",
        initials: "TF",
        avatar: "paper_image/ftc.png",
        title: "Academic Website Concept",
        tags: ["Knowledge Editing", "Adversarial Example", "Trustworthy AI"],
        university: "Yunnan University",
        location: "Kunming, China",
        email: "futingchao@stu.ynu.edu.cn",
        scholarUrl: "https://scholar.google.com/citations?user=F1ES5loAAAAJ&hl=zh-CN",
        githubUrl: "https://github.com/TingchaoFu"
    },
    navItems: ["About", "Research", "Publications", "Projects", "CV", "Contact"],
    about: {
        heading: "👋Welcome to Tingchao's Homepage!",
        description: `I am currently pursuing my Ph.D. at <a href="https://www.ynu.edu.cn/" target="_blank" style="color:#2563eb;">Yunnan University</a>, supervised by <a href="http://www.ymi.ynu.edu.cn/info/1033/1152.htm" target="_blank" style="color:#2563eb;">Prof. Wei Zhou</a>. Carried out collaborative research in the field of trustworthy artificial intelligence with <a href="https://ryliu68.github.io/" target="_blank" style="color:#2563eb;">Ph.D Renyang Liu</a> and <a href="https://fanxiao15.github.io/" target="_blank" style="color:#2563eb;">Ph.D Fanxiao Li</a>.`
    },
    researchAreas: {
        heading: "🔬Research Interests",
        description: `My research focuses on <strong>Trustworthy Artificial Intelligence</strong>, with particular interests in <strong>Knowledge Editing</strong> and <strong>Adversarial Examples</strong>. I am interested in developing reliable, robust, and secure AI systems, with an emphasis on understanding, updating, and safeguarding model behavior in complex environments. My work particularly explores how knowledge can be effectively edited in <strong>large language models</strong> and how adversarial examples expose vulnerabilities that challenge the <strong>trustworthiness of modern AI systems</strong>.`
    },
    publications: [
        { title: "Say What I Want! Prompt-Agnostic Adversarial Attacks on Large Vision Language Models", venue: "IEEE TMM (revision stage)", year: "2025", tag: "Adversarial Attack", status: "Under Revision", paperUrl: "#", codeUrl: "#" },
        { title: "Multimodal Knowledge Editing for Reliable Cross-Modal Generalization", venue: "Representative work slot", year: "2026", tag: "Knowledge Editing", status: "In Preparation", paperUrl: "#", codeUrl: "#" }
    ],
    publications: [
        {
            title: "Correct When Paired, Wrong When Split: Decoupling and Editing Modality-Specific Neurons in MLLMs",
            authors: `

    <u>Tingchao Fu</u>, Wenkai Wang, Fanxiao Li, Huadong Zhang, Jinhong Zhang, Dayang Li, Yunyun Dong, Renyang Liu, Wei Zhou*
            `,
            venue: "ACL",
            ccf: "CCF-A",
            year: "2026",
            tag: "Knowledge Editing",
            status: "#",
            image: "paper_image/decode.png",
            imageTag: "ACL",
            paperUrl: "#",
            codeUrl: "https://github.com/TingchaoFu/DECODE"
        },
        {
            title: "What's Left Unsaid? Detecting and Correcting Misleading Omissions in Multimodal News Previews",
            authors: `

    Fanxiao Li, Jiaying Wu, <u>Tingchao Fu</u>, Dayang Li, Herun Wan, Wei Zhou*, Min-Yen Kan
            `,
            venue: "ACL",
            ccf: "CCF-A",
            year: "2026",
            tag: "Misinformation Detection",
            status: "#",
            image: "paper_image/lfx_acl_2026.png",
            imageTag: "ACL",
            paperUrl: "https://arxiv.org/abs/2601.05563",
            codeUrl: "#"
        },
        {
            title: "Say What I Want! Prompt-Agnostic Adversarial Attacks on Large Vision Language Models",
            authors: `

    <u>Tingchao Fu</u>, Renyang Liu, Ziyao Liu, Peiyuan Si, Fanxiao Li, Jinhong Zhang, Wei Zhou*
            `,
            venue: "IEEE Transactions on Multimedia",
            ccf: "CCF-A",
            year: "2026",
            tag: "Adversarial Attack",
            status: "Under Revision",
            image: "paper_image/tmm.png",
            imageTag: "Preprint",
            paperUrl: "#",
            codeUrl: "#"
        },
        {
            title: "Drifting Away from Truth: GenAI-Driven News Diversity Challenges LVLM-Based Misinformation Detection",
            authors: `

    Fanxiao Li, Jiaying Wu*, <u>Tingchao Fu</u>,, Yunyun Dong, Bingbing Song, Wei Zhou*
            `,
            venue: "AAAI",
            ccf: "CCF-A",
            year: "2026",
            tag: "Misinformation Detection",
            status: "#",
            image: "paper_image/lfx_aaai_2026.png",
            imageTag: "AAAI",
            paperUrl: "https://arxiv.org/abs/2508.12711",
            codeUrl: "https://github.com/fanxiao15/DriftBench"
        },
        {
            title: "Imperceptible text steganography based on group chat",
            authors: `

    Fanxiao Li, Ping Wei*, <u>Tingchao Fu</u>, Yu Lin, Wei Zhou*
            `,
            venue: "ICME",
            ccf: "CCF-B",
            year: "2025",
            tag: "Misinformation Detection",
            status: "#",
            image: "paper_image/icme.png",
            imageTag: "ICME",
            paperUrl: "https://ieeexplore.ieee.org/abstract/document/10687958",
            codeUrl: "#"
        },
        {
            title: "Multimodal alignment augmentation transferable attack on vision-language pre-training models",
            authors: `

    <u>Tingchao Fu</u>, Jinhong Zhang, Fanxiao Li, Ping Wei, Xianglong Zeng, Wei Zhou*
            `,
            venue: "Pattern Recognition Letters",
            ccf: "CCF-C",
            year: "2025",
            tag: "Adversarial Attack",
            status: "#",
            image: "paper_image/ma.png",
            imageTag: "PRL",
            paperUrl: "https://www.sciencedirect.com/science/article/pii/S0167865525000911",
            codeUrl: "#"
        },
        {
            title: "TIA: Token Importance Transferable Attack on Vision Transformers",
            authors: `

    <u>Tingchao Fu</u>, Fanxiao Li, Jinhong Zhang, Liang Zhu, Yuanyu Wang*, Wei Zhou*
            `,
            venue: "Inscrypt",
            ccf: "CCF-C",
            year: "2024",
            tag: "Adversarial Attack",
            status: "#",
            image: "paper_image/tia.png",
            imageTag: "Inscrypt",
            paperUrl: "https://link.springer.com/chapter/10.1007/978-981-97-0945-8_6",
            codeUrl: "#"
        },
    ],
    awards: {
        heading: "🏆Honors and Awards",
        items: [
            "2025.06, Outstanding Graduate of Yunnan University",
            "2024.06, CVPR Workshop challenge: Robustness of Foundation ModelsBlack-box Adversarial Attacks on Vision Foundation Models, 8th place",
            "2023.10, Huawei Ascend AI Innovation Competition, Gold Award,",
        ]
    },
    academic_service: {
        heading: "🎓Academic Service",
        items: [
            "AAAI 2026 Reviewer",
            "IEEE TIFS Reviewer",
        ]
    },
    education: {
        heading: "🏫Education",
        items: [
            "2025.09 - Present, Ph.D. in Computer Science and Technology, Yunnan University",
            "2022.09 - 2025.06, M.E. in Software Engineering, Yunnan University",
            "2018.09 - 2022.06, B.E. in Network Engineering, Yunnan University"
        ]
    },
};

// ==========================================
// 2. 渲染引擎 (将数据转化为 HTML)
// ==========================================

// 渲染 Header
// document.getElementById('nav-name').innerText = siteData.personal.name;
// document.getElementById('nav-title').innerText = siteData.personal.title;
// const navMenu = document.getElementById('nav-menu');
// siteData.navItems.forEach(item => {
//     navMenu.innerHTML += `<a href="#${item.toLowerCase()}">${item}</a>`;
// });

// 渲染 Sidebar
document.getElementById('sidebar').innerHTML = `
    <div class="card">
        <div class="avatar-wrap">
            <img src="${siteData.personal.avatar}" alt="${siteData.personal.name}" class="avatar">
        </div>
        <h1 style="text-align:center; font-size:1.5rem; font-weight:600;">${siteData.personal.name}</h1>
        <div class="profile-tags">
            ${siteData.personal.tags.map(tag => `<span class="badge badge-gray">${tag}</span>`).join('')}
        </div>
        <div class="profile-info">
            <div class="info-row"><i data-lucide="graduation-cap"></i> ${siteData.personal.university}</div>
            <div class="info-row"><i data-lucide="map-pin"></i> ${siteData.personal.location}</div>
            <div class="info-row"><i data-lucide="mail"></i> ${siteData.personal.email}</div>
        </div>
        <div class="sidebar-btns">
            <a href="${siteData.personal.scholarUrl}" target="_blank" class="btn btn-secondary scholar-btn">
                <img src="paper_image/scholar.png" alt="Google Scholar" class="scholar-icon">
                Scholar
            </a>
            <a href="${siteData.personal.githubUrl}" target="_blank" class="btn btn-secondary scholar-btn">
                <img src="paper_image/github.png" alt="GitHub" class="scholar-icon">
                GitHub
            </a>
        </div>
    </div>
`;

document.getElementById('about').innerHTML = `
    <h2 class="about-title">${siteData.about.heading}</h2>
    <p class="about-desc">${siteData.about.description}</p>
`;
document.getElementById('research').innerHTML = `
    <div style="margin-top:40px;">
        <h2 class="about-title">${siteData.researchAreas.heading}</h2>
        <p class="about-desc">${siteData.researchAreas.description}</p>
    </div>
`;

// 渲染 Publications
document.getElementById('publications').innerHTML = `
    <h2 class="about-title">💻 Publications & Code</h2>
    <div class="pub-list">
        ${siteData.publications.map(pub => {
            const hasPaper = pub.paperUrl !== "#";
            const hasCode = pub.codeUrl !== "#";
            return `
            <div class="card card-hover pub-card">
                <div class="pub-cover-wrap">
                    <img src="${pub.image}" alt="${pub.title}" class="pub-cover-img">
                    <div class="pub-cover-badge">${pub.imageTag || "Preprint"}</div>
                </div>

                <div class="pub-content">
                    <h4 class="pub-title">${pub.title}</h4>
                    <p class="pub-authors">${pub.authors}</p>
                    <p class="pub-venue">
                        <em>${pub.venue} ${pub.year}.</em>
                        <span class="pub-ccf">${pub.ccf}</span>
                    </p>

                    <div class="pub-actions">
                        <a href="${pub.paperUrl}" class="btn btn-secondary" ${hasPaper ? 'target="_blank"' : 'style="opacity:0.5; pointer-events:none;"'}>
                            <i data-lucide="link" class="icon-mr"></i> Paper ${!hasPaper ? 'TBD' : ''}
                        </a>
                        ${hasCode ? `
                        <a href="${pub.codeUrl}" class="btn btn-secondary" target="_blank">
                            <img src="paper_image/github.png" alt="GitHub" class="icon-mr github-mini-icon"> Code
                        </a>
                        ` : ""}
                        <span class="badge badge-gray">${pub.tag}</span>
                        ${pub.status !== "#" ? `<span class="badge badge-blue">${pub.status}</span>` : ""}
                    </div>
                </div>
            </div>
        `}).join('')}
    </div>
`;

document.getElementById('academic_service').innerHTML = `
    <div style="margin-top:40px;">
        <h2 class="about-title">${siteData.academic_service.heading}</h2>
        <ul class="service-list">
            ${siteData.academic_service.items.map(item => `
                <li>${item}</li>
            `).join('')}
        </ul>
    </div>
`;

document.getElementById('awards').innerHTML = `
    <div style="margin-top:40px;">
        <h2 class="about-title">${siteData.awards.heading}</h2>
        <ul class="service-list">
            ${siteData.awards.items.map(item => `
                <li>${item}</li>
            `).join('')}
        </ul>
    </div>
`;


document.getElementById('education').innerHTML = `
    <div style="margin-top:40px;">
        <h2 class="about-title">${siteData.education.heading}</h2>
        <ul class="service-list">
            ${siteData.education.items.map(item => `
                <li>${item}</li>
            `).join('')}
        </ul>
    </div>
`;

lucide.createIcons();
