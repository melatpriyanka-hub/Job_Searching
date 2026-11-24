// ==========================================
// JobNest - Job Portal
// ==========================================

// Job Data
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechNova Solutions",
        location: "Pune, India",
        category: "Development",
        type: "Full Time",
        mode: "Hybrid",
        salary: "₹4 – 6 LPA",
        icon: "fa-code",
        posted: "2 days ago",
        skills: ["HTML", "CSS", "JavaScript"],
        description: "We are looking for a creative Frontend Developer to build responsive and user-friendly web applications. Candidates should have a strong understanding of frontend technologies and modern UI design."
    },
    {
        id: 2,
        title: "Java Developer",
        company: "CodeCraft Technologies",
        location: "Mumbai, India",
        category: "Development",
        type: "Full Time",
        mode: "On-site",
        salary: "₹5 – 8 LPA",
        icon: "fa-laptop-code",
        posted: "1 day ago",
        skills: ["Java", "Spring Boot", "MySQL"],
        description: "Join our development team to build scalable Java applications. You will work with backend systems, databases and software development tools."
    },
    {
        id: 3,
        title: "Web Development Intern",
        company: "PixelSoft Labs",
        location: "Remote",
        category: "Development",
        type: "Internship",
        mode: "Remote",
        salary: "₹8,000 – ₹12,000/month",
        icon: "fa-globe",
        posted: "3 days ago",
        skills: ["HTML", "CSS", "JavaScript"],
        description: "An exciting internship opportunity for students interested in web development. Work on practical projects, develop responsive websites and improve your technical skills."
    },
    {
        id: 4,
        title: "UI/UX Designer",
        company: "CreativeEdge Studio",
        location: "Bengaluru, India",
        category: "Design",
        type: "Full Time",
        mode: "Hybrid",
        salary: "₹4 – 7 LPA",
        icon: "fa-palette",
        posted: "4 days ago",
        skills: ["Figma", "UI Design", "Prototyping"],
        description: "Design engaging digital experiences and user interfaces. Collaborate with product and development teams to create visually appealing and easy-to-use products."
    },
    {
        id: 5,
        title: "Data Analyst",
        company: "Insight Analytics",
        location: "Hyderabad, India",
        category: "Data",
        type: "Full Time",
        mode: "On-site",
        salary: "₹4 – 6 LPA",
        icon: "fa-chart-line",
        posted: "2 days ago",
        skills: ["Python", "SQL", "Excel"],
        description: "Analyze datasets, create reports and help organizations make informed decisions using data. Candidates should have analytical skills and knowledge of data tools."
    },
    {
        id: 6,
        title: "Digital Marketing Intern",
        company: "GrowthWave Media",
        location: "Remote",
        category: "Marketing",
        type: "Internship",
        mode: "Remote",
        salary: "₹5,000 – ₹8,000/month",
        icon: "fa-bullhorn",
        posted: "5 days ago",
        skills: ["SEO", "Content", "Social Media"],
        description: "Assist in digital marketing campaigns, social media management and content creation. Learn practical marketing strategies in a collaborative environment."
    },
    {
        id: 7,
        title: "Python Developer",
        company: "ByteBridge Systems",
        location: "Chennai, India",
        category: "Development",
        type: "Full Time",
        mode: "Hybrid",
        salary: "₹5 – 9 LPA",
        icon: "fa-terminal",
        posted: "1 day ago",
        skills: ["Python", "Flask", "SQL"],
        description: "Develop backend applications and APIs using Python. Work on application development, database integration and software solutions."
    },
    {
        id: 8,
        title: "Business Analyst",
        company: "NextGen Consulting",
        location: "Delhi, India",
        category: "Management",
        type: "Full Time",
        mode: "On-site",
        salary: "₹5 – 8 LPA",
        icon: "fa-briefcase",
        posted: "3 days ago",
        skills: ["Analysis", "Excel", "Communication"],
        description: "Collaborate with teams to identify business requirements, analyze data and support project planning and business improvement strategies."
    },
    {
        id: 9,
        title: "Software Development Intern",
        company: "InnovateX",
        location: "Remote",
        category: "Development",
        type: "Internship",
        mode: "Remote",
        salary: "₹10,000/month",
        icon: "fa-code-branch",
        posted: "Today",
        skills: ["Java", "Python", "Git"],
        description: "Gain hands-on experience in software development, debugging, testing and collaborative development while working on real-world projects."
    },
    {
        id: 10,
        title: "Graphic Designer",
        company: "DesignHive",
        location: "Mumbai, India",
        category: "Design",
        type: "Part Time",
        mode: "Hybrid",
        salary: "₹15,000 – ₹20,000/month",
        icon: "fa-pen-nib",
        posted: "6 days ago",
        skills: ["Photoshop", "Illustrator", "Design"],
        description: "Create creative visual assets, marketing materials and digital graphics. Work with the creative team to deliver high-quality design solutions."
    }
];


// ==========================================
// SAVED JOBS STORAGE
// ==========================================

let savedJobs = [];

try {
    savedJobs = JSON.parse(
        localStorage.getItem("jobnestSavedJobs") || "[]"
    );

    savedJobs = savedJobs.map(Number);

} catch (error) {

    savedJobs = [];
}


// ==========================================
// DISPLAY JOBS
// ==========================================

function displayJobs(jobList, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    if (!jobList || jobList.length === 0) {

        container.innerHTML = `
            <div class="empty-message">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>No jobs found. Try changing your search or filters.</p>
            </div>
        `;

        return;
    }

    container.innerHTML = jobList.map(job => {

        const isSaved = savedJobs.includes(Number(job.id));

        return `
        <div class="job-card">

            <div class="job-top">

                <div class="company-logo">
                    <i class="fa-solid ${job.icon}"></i>
                </div>

                <button type="button"
                    class="save-btn ${isSaved ? 'saved' : ''}"
                    onclick="toggleSave(${job.id})"
                    title="${isSaved ? 'Unsave Job' : 'Save Job'}">

                    <i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i>

                </button>

            </div>

            <h3>${job.title}</h3>

            <p class="company-name">${job.company}</p>

            <p class="job-description">
                ${job.description.substring(0, 115)}...
            </p>

            <div class="job-tags">

                <span class="job-tag category-tag">
                    ${job.category}
                </span>

                <span class="job-tag">
                    ${job.type}
                </span>

                <span class="job-tag">
                    ${job.mode}
                </span>

            </div>

            <div class="job-bottom">

                <div class="job-meta">

                    <div>
                        <i class="fa-solid fa-location-dot"></i>
                        ${job.location}
                    </div>

                    <div>
                        <i class="fa-solid fa-wallet"></i>
                        ${job.salary}
                    </div>

                    <div>
                        <i class="fa-regular fa-clock"></i>
                        ${job.posted}
                    </div>

                </div>

                <button type="button"
                    class="details-btn"
                    onclick="showJobDetails(${job.id})">

                    View Details
                    <i class="fa-solid fa-arrow-right"></i>

                </button>

            </div>

        </div>
        `;

    }).join("");
}


// ==========================================
// INITIAL DISPLAY
// ==========================================

function renderAllJobs() {

    displayJobs(jobs, "jobContainer");

    renderSavedJobs();
}


// ==========================================
// SEARCH JOBS
// ==========================================

function searchJobs() {

    filterJobs();

    const jobsSection = document.getElementById("jobs");

    if (jobsSection) {

        jobsSection.scrollIntoView({
            behavior: "smooth"
        });

    }
}


// ==========================================
// FILTER JOBS
// ==========================================

function filterJobs() {

    const searchInput = document.getElementById("searchInput");
    const locationInput = document.getElementById("locationInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const typeFilter = document.getElementById("typeFilter");

    if (!searchInput || !locationInput ||
        !categoryFilter || !typeFilter) {

        return;
    }

    const search = searchInput.value.trim().toLowerCase();
    const location = locationInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    const type = typeFilter.value;

    const filteredJobs = jobs.filter(job => {

        const matchesSearch =
            !search ||
            job.title.toLowerCase().includes(search) ||
            job.company.toLowerCase().includes(search) ||
            job.skills.some(skill =>
                skill.toLowerCase().includes(search)
            ) ||
            job.category.toLowerCase().includes(search);

        const matchesLocation =
            !location ||
            job.location.toLowerCase().includes(location) ||
            job.mode.toLowerCase().includes(location);

        const matchesCategory =
            !category || job.category === category;

        const matchesType =
            !type ||
            job.type === type ||
            (type === "Remote" && job.mode === "Remote");

        return matchesSearch &&
               matchesLocation &&
               matchesCategory &&
               matchesType;

    });

    displayJobs(filteredJobs, "jobContainer");
}


// ==========================================
// CLEAR FILTERS
// ==========================================

function clearFilters() {

    const searchInput = document.getElementById("searchInput");
    const locationInput = document.getElementById("locationInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const typeFilter = document.getElementById("typeFilter");

    if (searchInput) searchInput.value = "";
    if (locationInput) locationInput.value = "";
    if (categoryFilter) categoryFilter.value = "";
    if (typeFilter) typeFilter.value = "";

    renderAllJobs();
}


// ==========================================
// SAVE / UNSAVE JOBS
// ==========================================

function toggleSave(id) {

    id = Number(id);

    if (savedJobs.includes(id)) {

        savedJobs = savedJobs.filter(jobId => jobId !== id);

    } else {

        savedJobs.push(id);

    }

    localStorage.setItem(
        "jobnestSavedJobs",
        JSON.stringify(savedJobs)
    );

    filterJobs();

    renderSavedJobs();
}


// ==========================================
// DISPLAY SAVED JOBS
// ==========================================

function renderSavedJobs() {

    const savedList = jobs.filter(job =>
        savedJobs.includes(Number(job.id))
    );

    displayJobs(savedList, "savedContainer");
}


// ==========================================
// VIEW JOB DETAILS - WORKING POPUP
// ==========================================

function showJobDetails(id) {

    // Ensure ID is a number
    id = Number(id);

    // Find selected job
    const job = jobs.find(item => Number(item.id) === id);

    if (!job) {

        alert("Job details not found!");

        return;
    }

    // Remove previous popup
    closeModal();

    // Create popup overlay
    const modal = document.createElement("div");

    modal.id = "jobModal";

    // Inline overlay styles
    modal.style.cssText = `
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        background: rgba(10, 20, 35, 0.75);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
    `;

    // Popup content
    modal.innerHTML = `

        <div id="jobModalContent" style="
            background: #ffffff;
            width: 100%;
            max-width: 650px;
            max-height: 90vh;
            overflow-y: auto;
            border-radius: 18px;
            padding: 30px;
            position: relative;
            color: #102A43;
            box-shadow: 0 15px 50px rgba(0,0,0,0.3);
            box-sizing: border-box;
        ">

            <button type="button"
                id="closeJobModal"
                aria-label="Close"
                style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    border: none;
                    background: #f1f5f9;
                    color: #102A43;
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    font-size: 22px;
                    cursor: pointer;
                ">

                &times;

            </button>

            <div style="
                width: 60px;
                height: 60px;
                border-radius: 15px;
                background: #e0f2f1;
                color: #0D9488;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 25px;
                margin-bottom: 20px;
            ">

                <i class="fa-solid ${job.icon}"></i>

            </div>

            <h2 style="
                margin: 0 45px 8px 0;
                font-size: 26px;
                color: #102A43;
            ">

                ${job.title}

            </h2>

            <p style="
                font-size: 17px;
                font-weight: 600;
                color: #0D9488;
                margin-bottom: 20px;
            ">

                ${job.company}

            </p>

            <div style="
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 20px;
            ">

                <span style="
                    background: #e0f2f1;
                    color: #0D9488;
                    padding: 8px 12px;
                    border-radius: 20px;
                    font-size: 14px;
                ">

                    ${job.category}

                </span>

                <span style="
                    background: #f1f5f9;
                    padding: 8px 12px;
                    border-radius: 20px;
                    font-size: 14px;
                ">

                    ${job.type}

                </span>

                <span style="
                    background: #f1f5f9;
                    padding: 8px 12px;
                    border-radius: 20px;
                    font-size: 14px;
                ">

                    ${job.mode}

                </span>

            </div>

            <div style="
                background: #f8fafc;
                padding: 18px;
                border-radius: 12px;
                margin-bottom: 25px;
            ">

                <p style="margin: 0 0 12px 0;">

                    <i class="fa-solid fa-location-dot"></i>

                    <strong> Location:</strong>

                    ${job.location}

                </p>

                <p style="margin: 0 0 12px 0;">

                    <i class="fa-solid fa-wallet"></i>

                    <strong> Salary:</strong>

                    ${job.salary}

                </p>

                <p style="margin: 0;">

                    <i class="fa-regular fa-clock"></i>

                    <strong> Posted:</strong>

                    ${job.posted}

                </p>

            </div>

            <h3 style="
                margin-bottom: 12px;
                color: #102A43;
            ">

                Job Description

            </h3>

            <p style="
                line-height: 1.7;
                margin-bottom: 25px;
                color: #475569;
            ">

                ${job.description}

            </p>

            <h3 style="
                margin-bottom: 15px;
                color: #102A43;
            ">

                Required Skills

            </h3>

            <div style="
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 30px;
            ">

                ${job.skills.map(skill => `

                    <span style="
                        background: #e0f2f1;
                        color: #0D9488;
                        padding: 9px 14px;
                        border-radius: 20px;
                        font-weight: 600;
                        font-size: 14px;
                    ">

                        ${skill}

                    </span>

                `).join("")}

            </div>

            <button type="button"
                id="applyJobBtn"
                style="
                    width: 100%;
                    background: #0D9488;
                    color: white;
                    border: none;
                    padding: 15px;
                    border-radius: 10px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                ">

                Apply Now
                <i class="fa-solid fa-arrow-right"></i>

            </button>

        </div>

    `;

    // Add popup to page
    document.body.appendChild(modal);

    // Close popup button
    const closeButton = document.getElementById("closeJobModal");

    if (closeButton) {

        closeButton.onclick = closeModal;

    }

    // Apply button
    const applyButton = document.getElementById("applyJobBtn");

    if (applyButton) {

        applyButton.onclick = function() {

            applyJob(job.title, job.company);

        };

    }

    // Close when clicking outside content
    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            closeModal();

        }

    });

    // Prevent content clicks from closing popup
    const modalContent = document.getElementById("jobModalContent");

    if (modalContent) {

        modalContent.addEventListener("click", function(event) {

            event.stopPropagation();

        });

    }

}


// ==========================================
// CLOSE JOB DETAILS POPUP
// ==========================================

function closeModal() {

    const modal = document.getElementById("jobModal");

    if (modal) {

        modal.remove();

    }
}


// ==========================================
// APPLY BUTTON
// ==========================================

function applyJob(title, company) {

    alert(
        `Thank you for your interest in ${title} at ${company}!\n\n` +
        `This is a demo job portal. Applications are not submitted to the company.`
    );

    closeModal();
}


// ==========================================
// ABOUT BUTTON
// ==========================================

function showAbout() {

    alert(
        "Welcome to JobNest!\n\n" +
        "JobNest is a responsive job-search interface designed to help users explore career opportunities, search jobs, view job details and bookmark jobs for later.\n\n" +
        "Created using HTML, CSS and JavaScript."
    );
}


// ==========================================
// KEYBOARD SEARCH
// ==========================================

const searchInputElement = document.getElementById("searchInput");

if (searchInputElement) {

    searchInputElement.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            searchJobs();

        }

    });

}


const locationInputElement = document.getElementById("locationInput");

if (locationInputElement) {

    locationInputElement.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            searchJobs();

        }

    });

}


// ==========================================
// ESCAPE KEY TO CLOSE POPUP
// ==========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();

    }

});


// ==========================================
// START WEBSITE
// ==========================================

renderAllJobs();