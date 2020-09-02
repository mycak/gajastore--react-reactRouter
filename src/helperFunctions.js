const goToAnchor = (e) => {

    const href = e.target.getAttribute("href");

    if (window.location.pathname !== '/shop') {

        e.preventDefault();
        document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
        });

    } else {

        e.preventDefault();
        window.history.pushState({}, '', '/');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        
        setTimeout(() => {
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
                });
        },500);
        
    }
};
export default goToAnchor;