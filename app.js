// Video portfolio data
const videos = [
    {
      id: "1",
      title: "Product Showcase",
      description: "A short-form video showcasing a product with clean transitions and professional visual style.",
      category: "short-form",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "2",
      title: "Gaming Highlights",
      description: "Action-packed gaming video showcasing epic moments and skillful gameplay.",
      category: "gaming",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "3",
      title: "Urban Stories",
      description: "Documentary-style video capturing the essence of urban life and cultural narratives.",
      category: "documentary",
      thumbnail: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "4",
      title: "Match Highlights",
      description: "Football match highlights with dynamic transitions and high-energy editing.",
      category: "football",
      thumbnail: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "5",
      title: "Fashion Collection",
      description: "E-commerce fashion showcase with elegant transitions and product-focused shots.",
      category: "ecommerce",
      thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "6",
      title: "Brand Story",
      description: "Long-form video telling a brand's story with cinematic visuals and compelling narrative.",
      category: "long-form",
      thumbnail: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJhbmQlMjBzdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "7",
      title: "Cinematic Look",
      description: "Color grading showcase demonstrating the power of professional color treatment.",
      category: "color-grading",
      thumbnail: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "8",
      title: "Anime Compilation",
      description: "Creative anime edit combining scenes with synchronized music and effects.",
      category: "anime",
      thumbnail: "https://images.unsplash.com/photo-1637847953832-c181bd31e7a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "9",
      title: "Social Media Ad",
      description: "Engaging short-form content designed specifically for social media platforms.",
      category: "short-form",
      thumbnail: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "10",
      title: "Sports Tournament",
      description: "Football tournament highlight reel with dynamic cuts and emotional moments.",
      category: "football",
      thumbnail: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "11",
      title: "Product Explainer",
      description: "E-commerce explainer video showcasing product features and benefits.",
      category: "ecommerce",
      thumbnail: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "12",
      title: "Game Trailer",
      description: "Epic game trailer with advanced visual effects and high-energy editing.",
      category: "gaming",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      id: "1",
      name: "Rohit Sharma",
      title: "E-Commerce Business Owner",
      text: "EditKaro transformed our product videos completely. The quality of editing and attention to detail was outstanding, and the team was incredibly responsive to feedback.",
      rating: 5
    },
    {
      id: "2",
      name: "Priya Patel",
      title: "Content Creator",
      text: "The team at EditKaro has been instrumental in growing our YouTube channel. Their editing skills and creative input have helped our content stand out in a crowded space.",
      rating: 5
    },
    {
      id: "3",
      name: "Vikram Singh",
      title: "Marketing Director",
      text: "We hired EditKaro for our corporate documentaries, and the results exceeded our expectations. Their professional approach and quick turnaround time made the process smooth.",
      rating: 4.5
    }
  ];
  
  // DOM Elements
  const header = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const scrollTopBtn = document.getElementById('scroll-to-top');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const viewButtons = document.querySelectorAll('.view-btn');
  const portfolioContainer = document.getElementById('portfolio-container');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const modal = document.getElementById('video-modal');
  const closeModal = document.querySelector('.close-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalCategory = document.getElementById('modal-category');
  const videoFrame = document.getElementById('video-frame');
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const sendAnother = document.getElementById('send-another');
  const currentYearSpan = document.getElementById('current-year');
  const testimonialContainer = document.getElementById('testimonials-container');
  const sliderDots = document.getElementById('slider-dots');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  
  // Initialize variables
  let currentCategory = 'all';
  let currentView = 'grid';
  let visibleCount = 6;
  let currentTestimonial = 0;
  
  // Initialize on DOM content loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    currentYearSpan.textContent = new Date().getFullYear();
    
    // Initialize portfolio
    renderPortfolio();
    
    // Initialize testimonials
    renderTestimonials();
    setupTestimonialSlider();
    
    // Setup smooth scrolling for anchor links
    setupSmoothScroll();
    
    // Initialize form validation
    if (contactForm) {
      setupFormValidation();
    }

    // Ensure sections are visible
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '1';
      section.style.visibility = 'visible';
    });
  });
  
  // Scroll event listener
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Sticky header
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Show/hide scroll to top button
    if (scrollY > 500) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });
  
  // Scroll to top functionality
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Mobile menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Smooth scrolling for anchor links
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Ensure target section is visible
          targetElement.style.opacity = '1';
          targetElement.style.visibility = 'visible';
        }
      });
    });
  }
  
  // Portfolio filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      currentCategory = filter;
      visibleCount = 6;
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Re-render portfolio with animation
      portfolioContainer.classList.add('fade-out');
      setTimeout(() => {
        renderPortfolio();
        portfolioContainer.classList.remove('fade-out');
      }, 300);
    });
  });
  
  // Portfolio view toggle functionality
  viewButtons.forEach(button => {
    button.addEventListener('click', () => {
      const view = button.dataset.view;
      currentView = view;
      
      // Update active button
      viewButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update view
      if (view === 'grid') {
        portfolioContainer.classList.remove('list-view');
        portfolioContainer.classList.add('portfolio-grid');
      } else {
        portfolioContainer.classList.add('list-view');
        portfolioContainer.classList.remove('portfolio-grid');
      }
    });
  });
  
  // Load more functionality
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount += 3;
      renderPortfolio();
    });
  }
  
  // Render portfolio items
  function renderPortfolio() {
    if (!portfolioContainer) return;
    
    // Filter videos
    const filteredVideos = currentCategory === 'all' 
      ? videos 
      : videos.filter(video => video.category === currentCategory);
    
    // Create portfolio items HTML
    let html = '';
    
    filteredVideos.slice(0, visibleCount).forEach(video => {
      html += `
        <div class="portfolio-item" data-id="${video.id}">
          <div class="portfolio-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="portfolio-overlay">
              <div class="play-button">
                <i class="fas fa-play"></i>
              </div>
            </div>
          </div>
          <div class="portfolio-info">
            <h3>${video.title}</h3>
            <p>${video.description.substring(0, 80)}${video.description.length > 80 ? '...' : ''}</p>
            <span class="category-tag">${video.category}</span>
          </div>
        </div>
      `;
    });
    
    // Update HTML
    portfolioContainer.innerHTML = html;
    
    // Show/hide load more button
    if (filteredVideos.length <= visibleCount) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'inline-block';
    }
    
    // Add click event to portfolio items
    document.querySelectorAll('.portfolio-item').forEach(item => {
      item.addEventListener('click', () => {
        const videoId = item.dataset.id;
        openVideoModal(videoId);
      });
    });
    
    // Add animation to items
    document.querySelectorAll('.portfolio-item').forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }
  
  // Video modal functionality
  function openVideoModal(videoId) {
    const video = videos.find(v => v.id === videoId);
    if (!video) return;
    
    modalTitle.textContent = video.title;
    modalDescription.textContent = video.description;
    modalCategory.textContent = video.category;
    videoFrame.src = video.videoUrl;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  
  // Close modal functionality
  if (closeModal) {
    closeModal.addEventListener('click', closeVideoModal);
  }
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeVideoModal();
    }
  });
  
  function closeVideoModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    videoFrame.src = '';
  }
  
  // Render testimonials
  function renderTestimonials() {
    if (!testimonialContainer) return;
    
    testimonials.forEach((testimonial, index) => {
      // Create testimonial HTML
      const slide = document.createElement('div');
      slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
      if (index === testimonials.length - 1) slide.classList.add('prev');
      if (index === 1) slide.classList.add('next');
      
      // Create stars
      let starsHtml = '';
      for (let i = 0; i < 5; i++) {
        if (i < Math.floor(testimonial.rating)) {
          starsHtml += '<i class="fas fa-star"></i>';
        } else if (i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0) {
          starsHtml += '<i class="fas fa-star-half-alt"></i>';
        } else {
          starsHtml += '<i class="far fa-star"></i>';
        }
      }
      
      slide.innerHTML = `
        <div class="testimonial-stars">
          ${starsHtml}
        </div>
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-author">
          <div class="author-image">
            <i class="fas fa-user"></i>
          </div>
          <div class="author-info">
            <h4>${testimonial.name}</h4>
            <p>${testimonial.title}</p>
          </div>
        </div>
      `;
      
      testimonialContainer.appendChild(slide);
      
      // Create dots
      const dot = document.createElement('div');
      dot.className = `dot ${index === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        changeTestimonial(index);
      });
      sliderDots.appendChild(dot);
    });
  }
  
  // Testimonial slider functionality
  function setupTestimonialSlider() {
    if (!prevBtn || !nextBtn) return;
    
    prevBtn.addEventListener('click', () => {
      changeTestimonial(currentTestimonial - 1);
    });
    
    nextBtn.addEventListener('click', () => {
      changeTestimonial(currentTestimonial + 1);
    });
    
    // Auto cycle testimonials
    setInterval(() => {
      changeTestimonial(currentTestimonial + 1);
    }, 8000);
  }
  
  function changeTestimonial(index) {
    if (!testimonialContainer) return;
    
    const slides = testimonialContainer.querySelectorAll('.testimonial-slide');
    const dots = sliderDots.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Handle looping
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    // Remove active class from all slides
    slides.forEach(slide => {
      slide.classList.remove('active', 'prev', 'next');
    });
    
    // Add appropriate classes for current, prev and next slides
    slides[index].classList.add('active');
    slides[index === 0 ? slides.length - 1 : index - 1].classList.add('prev');
    slides[index === slides.length - 1 ? 0 : index + 1].classList.add('next');
    
    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    // Update current index
    currentTestimonial = index;
  }
  
  // Form validation
  function setupFormValidation() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      
      // Validate name
      if (nameInput.value.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        isValid = false;
      } else {
        nameError.textContent = '';
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
      } else {
        emailError.textContent = '';
      }
      
      // Validate subject
      if (subjectInput.value.trim().length < 5) {
        subjectError.textContent = 'Subject must be at least 5 characters';
        isValid = false;
      } else {
        subjectError.textContent = '';
      }
      
      // Validate message
      if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        isValid = false;
      } else {
        messageError.textContent = '';
      }
      
      // Submit form if valid
      if (isValid) {
        // For demo purposes, just show success message
        // In a real application, you would send the form data to a server
        contactForm.style.display = 'none';
        formSuccess.classList.add('show');
      }
    });
  }
  
  // Reset contact form
  if (sendAnother) {
    sendAnother.addEventListener('click', () => {
      formSuccess.classList.remove('show');
      contactForm.style.display = 'block';
      contactForm.reset();
    });
  }
  
  // Intersection Observer for reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.visibility = 'visible';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements to animate on scroll
  document.querySelectorAll('.section-header, .service-card, .about-text, .about-image, .info-item, .social-links, section').forEach(el => {
    el.style.opacity = '1';
    el.style.visibility = 'visible';
    el.style.transform = 'translateY(0)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, visibility 0.5s ease';
    observer.observe(el);
  });
  
  // Email Subscription Form Handling
  const subscriptionForm = document.getElementById('subscriptionForm');
  const subscriberEmail = document.getElementById('subscriberEmail');
  const formMessage = document.querySelector('.form-message');

  subscriptionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Reset message
    formMessage.textContent = '';
    formMessage.className = 'form-message';
    
    // Validate email
    if (!isValidEmail(subscriberEmail.value)) {
      showMessage('Please enter a valid email address', 'error');
      return;
    }
    
    try {
      // Show loading state
      const submitButton = subscriptionForm.querySelector('button');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Subscribing...';
      submitButton.disabled = true;
      
      // Send data to Google Apps Script
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: subscriberEmail.value
        })
      });
      
      const data = await response.json();
      
      if (data.status === 'success') {
        showMessage('Thank you for subscribing!', 'success');
        subscriberEmail.value = '';
      } else {
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (error) {
      showMessage('Sorry, there was an error. Please try again later.', 'error');
      console.error('Subscription error:', error);
    } finally {
      // Reset button state
      const submitButton = subscriptionForm.querySelector('button');
      submitButton.textContent = 'Subscribe';
      submitButton.disabled = false;
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
  }