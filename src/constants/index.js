export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const aboutDetail = [
    {
        id: 1,
        img: '/assets/panda.png',
        headtext: 'Hi, I’m Poomrapee',
        subtext: 'I’m a recent graduate with a strong passion for coding, specializing in backend development while also having experience with frontend work. In my free time, I enjoy playing games and exploring new technologies that spark my interest. While I consider myself a bit lazy at times, my curiosity and passion for learning drive me to continually grow and improve my skills.',
    },
    {
        id: 2,
        img: '/assets/techstack.png',
        headtext: 'Tech Stack',
        subtext: 'I specialize in Java Spring Boot with a focus on event-driven architectures using Kafka/Redpanda. I also work with tools GitLab and Jenkins for CI/CD pipelines and deployment, as well as Prometheus and Grafana for monitoring. Beyond backend development, I’m also exploring other technologies, , including frontend development with React and data analysis with Python.',
    },
    {
        id: 3,
        headtext: 'Location (🌍 !Let’s play with model)',
        subtext: 'I’m based in Bangkok, Thailand. I’m currently seeking full-time opportunities in the tech industry. If you have any questions or would like to connect, please don’t hesitate to reach out.',
    },
    {
        id: 4,
        img: '/assets/grid3.png',
        headtext: 'My Passion for Coding',
        subtext: 'My journey into coding began with my love for gaming. At around 5-6 years old, I started with cartridge games and later expanded to PlayStation, PC, and mobile gaming. This early connection with technology sparked my curiosity. In high school, I discovered a YouTube channel by a Thai university student, KhongPangKhongKwan, which inspired me to explore coding. This newfound passion led me to pursue a degree in Computer Science. During university, I developed a strong interest in Java and object-oriented programming, which laid the foundation for my transition to Spring Boot. My internship further broadened my skill set, exposing me to industry trends like fintech and modern technologies. Although I can be a bit lazy at times, I’m always eager to learn new technologies that excite me, while ensuring I continue to build skills that contribute to my career growth.'
    },
    {
        id: 5,
        img: '/assets/grid4.png',
        headtext: 'poomrapeewon@gmail.com',
        subtext: 'Contact me',
    },
];

export const myProjects = [
    {
        title: 'E-book Marketplace System',
        description: ' Developed a web application utilizing PHP and SQL, enabling users to seamlessly buy and sell e-books.\n\n' +
            'Created user interface components to enhance user experience using HTML/CSS, JavaScript, and Bootstrap.\n\n' +
            'Implemented queries including book search, recommendations for best-selling books, new arrivals, and promotions',
        href: 'https://github.com/prppoomw/E-book-Marketplace-System',
        texture: '/textures/project/ebook.mp4',
        logo: '/assets/ebook-logo.svg',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'PHP',
                path: '/assets/php.svg',
            },
            {
                id: 2,
                name: 'MySQL',
                path: 'assets/mysql.svg',
            },
        ],
    },
    {
        title: 'Android Snake Game',
        description: 'Developed an Android application using Java within Android Studio, creating a classic snake game.\n\n' +
            'Implemented core game logic handling movement, consumption, food generation, collision detection, and scoring using persistent data storage with SQLite.\n\n' +
            'Managed game activity such as sound, pause, and screen transitions to synchronize with Graphics and View operations.',
        href: 'https://github.com/prppoomw/snake-game-android',
        texture: '/textures/project/snakegame.mp4',
        logo: '/assets/snake-logo.jpg',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Android Studio',
                path: '/assets/android-studio.svg',
            },
            {
                id: 2,
                name: 'Java',
                path: '/assets/java.svg',
            },
            {
                id: 3,
                name: 'SQLite',
                path: '/assets/sqlite.svg',
            },
        ],
    },
    {
        title: 'Rock Paper Scissors Game',
        description: 'Developed a web application for the Rock Paper Scissors game utilizing Java Spring Boot.\n\n' +
            'Implemented services for game outcome determination, scoring, recording game history, and game reset functionalities.\n\n' +
            'Interfaced with a MySQL database through Kafka producer and consumer for data transmission and caching game history using Redis.',
        href: 'https://github.com/prppoomw/rock-paper-scissors-Game',
        texture: '',
        logo: '/assets/rpc.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Spring Boot',
                path: '/assets/spring.svg',
            },
            {
                id: 2,
                name: 'MySQL',
                path: 'assets/mysql.svg',
            },
            {
                id: 3,
                name: 'Kafka',
                path: '/assets/kafka.svg',
            },
            {
                id: 4,
                name: 'Redis',
                path: '/assets/redis.svg',
            },
        ],
    },
    {
        title: 'Prppoomw Portfolio',
        description: '',
        texture: '',
        logo: '/assets/portfolio.svg',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Tailwind',
                path: 'assets/tailwind.svg',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.svg',
            },
        ],
    }
];

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        roomScale: isSmall || isMobile ? 2.5 : 4.0,
        roomPosition: isSmall || isMobile ? [1.1, 1.0, 0.1] : isTablet ? [1.1, -0.1, 0.1] : [1.1, -2.1, 0.1],
        reactLogoPosition: isSmall || isMobile ? [5, 6, 0] : isTablet ? [8, 7, 0] : [16, 3, 0],
        targetPosition: isSmall || isMobile ? [-6, -9, -7] : isTablet ? [-11, -16, -8] : [-22, -15, -10],
        cubePosition: isSmall || isMobile ? [4.5, -6, 0] : isTablet ? [8, -12.33, 0] : [15, -10, 0],
        ringPosition: isSmall || isMobile ? [-9, 13, 0] : isTablet ? [-15, 15, 0] : [-24, 10, 0],
    };
};