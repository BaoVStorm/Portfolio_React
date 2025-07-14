export const scrollPositionById = (id) => {
    const section = document.getElementById(id);
    const rect = section.getBoundingClientRect();

    window.scrollTo({
        top: rect.top + window.scrollY,
        behavior: 'smooth',
    });
};