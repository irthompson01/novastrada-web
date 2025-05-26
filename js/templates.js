// NovaStrada LLC Template System
class NovaStradaTemplates {
    // With Blog and Projects Dropdowns
    // static navbar() {
    //     return `
    //         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    //             <div class="container px-5">
    //                 <a class="navbar-brand" href="index.html">
    //                     <img src="assets/logo_crop.PNG" alt="NovaStrada LLC" height="100" class="me-2">
    //                 </a>
    //                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    //                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //                     <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    //                         <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
    //                         <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
    //                         <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
    //                         <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
    //                         <li class="nav-item dropdown">
    //                             <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
    //                             <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
    //                                 <li><a class="dropdown-item" href="blog-home.html">Blog Home</a></li>
    //                                 <li><a class="dropdown-item" href="blog-post.html">Blog Post</a></li>
    //                             </ul>
    //                         </li>
    //                         <li class="nav-item dropdown">
    //                             <a class="nav-link dropdown-toggle" id="navbarDropdownProjects" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
    //                             <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownProjects">
    //                                 <li><a class="dropdown-item" href="projects.html">Projects Overview</a></li>
    //                                 <li><a class="dropdown-item" href="project-detail.html">Project Details</a></li>
    //                             </ul>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </nav>
    //     `;
    // }
    // Without Blog and Projects Dropdowns
    static navbar() {
        return `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/logo_crop.PNG" alt="NovaStrada LLC" height="100" class="me-2">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                            <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }

    static footer() {
        return `
            <footer class="bg-dark py-4 mt-auto">
                <div class="container px-5">
                    <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; NovaStrada LLC 2025</div></div>
                        <div class="col-auto">
                            <a class="link-light small" href="contact.html">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }

    static head(title, description = "", author = "NovaStrada LLC") {
        return `
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="${description}" />
            <meta name="author" content="${author}" />
            <title>${title}</title>
            <!-- Favicon-->
            <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
            <!-- Bootstrap icons-->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
            <!-- Core theme CSS (includes Bootstrap)-->
            <link href="css/styles.css" rel="stylesheet" />
            <!-- Custom CSS-->
            <link href="css/custom.css" rel="stylesheet" />
        `;
    }

    static scripts() {
        return `
            <!-- Bootstrap core JS-->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            <!-- Core theme JS-->
            <script src="js/scripts.js"></script>
        `;
    }

    // Call-to-action section template
    static callToAction(title = "Ready to get started?", subtitle = "Let's discuss how we can help bring your project to life.", buttonText = "Contact Us Today", buttonLink = "contact.html") {
        return `
            <section class="py-5">
                <div class="container px-5 my-5">
                    <div class="text-center">
                        <h2 class="display-4 fw-bolder mb-4">${title}</h2>
                        <p class="lead fw-normal text-muted mb-5">${subtitle}</p>
                        <a class="btn btn-primary btn-lg" href="${buttonLink}">${buttonText}</a>
                    </div>
                </div>
            </section>
        `;
    }

    // Newsletter signup template
    static newsletter(title = "Stay Updated", subtitle = "Sign up for our newsletter for the latest updates.") {
        return `
            <aside class="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
                <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                    <div class="mb-4 mb-xl-0">
                        <div class="fs-3 fw-bold text-white">${title}</div>
                        <div class="text-white-50">${subtitle}</div>
                    </div>
                    <div class="ms-xl-4">
                        <div class="input-group mb-2">
                            <input class="form-control" type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter" />
                            <button class="btn btn-outline-light" id="button-newsletter" type="button">Sign up</button>
                        </div>
                        <div class="small text-white-50">We care about privacy, and will never share your data.</div>
                    </div>
                </div>
            </aside>
        `;
    }

    // Feature card template
    static featureCard(icon, title, description) {
        return `
            <div class="col mb-5 h-100">
                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi ${icon}"></i></div>
                <h2 class="h5">${title}</h2>
                <p class="mb-0">${description}</p>
            </div>
        `;
    }

    // Initialize templates on page load
    static init() {
        document.addEventListener('DOMContentLoaded', function() {
            // Inject navbar
            const navbarContainer = document.getElementById('navbar-container');
            if (navbarContainer) {
                navbarContainer.innerHTML = NovaStradaTemplates.navbar();
            }

            // Inject footer
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.innerHTML = NovaStradaTemplates.footer();
            }

            // Highlight current page in navigation
            NovaStradaTemplates.highlightCurrentPage();
        });
    }

    // Highlight the current page in navigation
    static highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize templates
NovaStradaTemplates.init(); 