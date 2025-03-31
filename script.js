
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
      }
    ];
  
    // Populate skills
    const skillsContainer = document.querySelector('.skills-container');
    
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
  
    // Populate projects
    const projectsList = document.querySelector('.projects-list');
    
    projects.forEach(project => {
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
      
      projectsList.appendChild(projectItem);
    });
  
    // Handle avatar image error
    const avatarImage = document.querySelector('.avatar-image');
    const avatarFallback = document.querySelector('.avatar-fallback');
    
    avatarImage.addEventListener('error', function() {
      avatarImage.style.display = 'none';
      avatarFallback.style.display = 'flex';
    });
  
    // Animate skill bars after they're visible
    function animateSkillBars() {
      const skillBars = document.querySelectorAll('.skill-bar-fill');
      skillBars.forEach((bar, index) => {
        setTimeout(() => {
          const level = bar.parentNode.previousSibling.lastChild.textContent.replace('%', '');
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
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
  });