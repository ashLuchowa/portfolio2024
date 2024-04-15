const targets = document.querySelectorAll('.scroll');
const sections = document.querySelectorAll('.scroll-other');

function scrollParallax(target) {
    scrollPositionY = window.scrollY;
    let targetPositionY = target.getBoundingClientRect().top;
    let rate = (scrollPositionY - targetPositionY) * 0.15;
    
    target.style.transform = `translate3d(0px, ${-rate}px, 0px)`;
}

function scrollAppear(target) {
    let introPosition = target.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.05;

    if(introPosition < screenPosition) {
        target.classList.add('scroll-appear');
    } else {
        target.classList.remove('scroll-appear');
    }
}

function scrollAppearOther(section) {
    let introPosition = section.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(introPosition < screenPosition) {
        section.classList.add('scroll-appear-other');
    } else {
        section.classList.remove('scroll-appear-other');
    }
}

function setMargin() {
    targets.forEach((target, index) => {
        const marginTop = 400 + index * 300;
        target.style.marginTop = `${marginTop}px`;
    });
}

window.addEventListener('scroll', () => {
    targets.forEach(target => {
        scrollAppear(target);
        scrollParallax(target);
        setMargin();
    });
    sections.forEach(section => {
        scrollAppearOther(section);
    })
});


//BACK TO TOP SCROLL
const showOnPx = 100;
const topBtn = document.querySelector('.back-top');

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
    if (scrollContainer().scrollTop > showOnPx) {
        topBtn.style.opacity = '1';
    } else {
        topBtn.style.opacity = '0';
    }
});

//smooth scroll
const goToTop = () => {
    document.body.scrollIntoView({
        behavior: 'smooth',
    });
};

topBtn.addEventListener('click', goToTop);