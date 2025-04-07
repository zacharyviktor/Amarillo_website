
document.addEventListener('DOMContentLoaded', function() {
  // Skills data
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Python", level: 70 },
  ];

  // Projects data
  const projects = [
    {
      title: "Web Security Audit Tool",
      description: "An automated security auditing system for websites",
      tags: ["Security", "Automation"]
    },
    {
      title: "Cloud Management Dashboard",
      description: "Centralized control panel for cloud services",
      tags: ["Cloud", "Dashboard"]
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack online store with inventory management",
      tags: ["E-commerce", "Full-stack"]
    },
    {
      title: "Mobile Banking App",
      description: "Secure banking application for iOS and Android",
      tags: ["Mobile", "Security"]
    }
  ];

  // Populate skills
  const skillsContainer = document.querySelector('.skills-container:not(.professional-skills)');
  if (skillsContainer) {
    skills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item';
      
      const skillHeader = document.createElement('div');
      skillHeader.className = 'skill-header';
      
      const skillName = document.createElement('span');
      skillName.className = 'skill-name';
      skillName.textContent = skill.name;
      
      const skillPercent = document.createElement('span');
      skillPercent.className = 'skill-percent';
      skillPercent.textContent = skill.level + '%';
      
      skillHeader.appendChild(skillName);
      skillHeader.appendChild(skillPercent);
      
      const skillBarBg = document.createElement('div');
      skillBarBg.className = 'skill-bar-bg';
      
      const skillBarFill = document.createElement('div');
      skillBarFill.className = 'skill-bar-fill';
      
      skillBarBg.appendChild(skillBarFill);
      
      skillItem.appendChild(skillHeader);
      skillItem.appendChild(skillBarBg);
      
      skillsContainer.appendChild(skillItem);
    });
  }

  // Populate professional skills bars
  const professionalSkillBars = document.querySelectorAll('.professional-skills .skill-bar-fill');
  if (professionalSkillBars.length) {
    professionalSkillBars.forEach(bar => {
      const percent = bar.closest('.skill-item').querySelector('.skill-percent').textContent.replace('%', '');
      setTimeout(() => {
        bar.style.width = percent + '%';
      }, 500);
    });
  }

  // Populate featured projects
  const featuredProjectsList = document.querySelector('.featured-projects');
  if (featuredProjectsList) {
    projects.slice(0, 2).forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.className = 'project-item';
      
      const projectTitle = document.createElement('h3');
      projectTitle.className = 'project-title';
      projectTitle.textContent = project.title;
      
      const projectDescription = document.createElement('p');
      projectDescription.className = 'project-description';
      projectDescription.textContent = project.description;
      
      const projectTags = document.createElement('div');
      projectTags.className = 'project-tags';
      
      project.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'project-tag';
        tagSpan.textContent = tag;
        projectTags.appendChild(tagSpan);
      });
      
      projectItem.appendChild(projectTitle);
      projectItem.appendChild(projectDescription);
      projectItem.appendChild(projectTags);
      
      featuredProjectsList.appendChild(projectItem);
    });
  }

  // Populate recent projects
  const recentProjectsList = document.querySelector('.recent-projects');
  if (recentProjectsList) {
    projects.slice(2, 4).forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.className = 'project-item';
      
      const projectTitle = document.createElement('h3');
      projectTitle.className = 'project-title';
      projectTitle.textContent = project.title;
      
      const projectDescription = document.createElement('p');
      projectDescription.className = 'project-description';
      projectDescription.textContent = project.description;
      
      const projectTags = document.createElement('div');
      projectTags.className = 'project-tags';
      
      project.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'project-tag';
        tagSpan.textContent = tag;
        projectTags.appendChild(tagSpan);
      });
      
      projectItem.appendChild(projectTitle);
      projectItem.appendChild(projectDescription);
      projectItem.appendChild(projectTags);
      
      recentProjectsList.appendChild(projectItem);
    });
  }

  // Handle avatar image error
  const avatarImage = document.querySelector('.avatar-image');
  const avatarFallback = document.querySelector('.avatar-fallback');
  
  if (avatarImage && avatarFallback) {
    avatarImage.addEventListener('error', function() {
      avatarImage.style.display = 'none';
      avatarFallback.style.display = 'flex';
    });
  }

  // Animate skill bars after they're visible
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        const level = bar.closest('.skill-item').querySelector('.skill-percent').textContent.replace('%', '');
        bar.style.width = level + '%';
      }, index * 100);
    });
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // If skills card becomes visible, animate the skill bars
        if (entry.target.id === 'skills') {
          setTimeout(animateSkillBars, 300);
        }
        
        // Unobserve after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animate-on-scroll elements
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Send Message Button
  const messageButton = document.querySelector('.card-button');
  if (messageButton && messageButton.textContent === 'Send Message') {
    messageButton.addEventListener('click', function() {
      alert('Thank you for your interest! This form is currently under development. Please contact me directly at zachary.amarillo@example.com');
    });
  }
});