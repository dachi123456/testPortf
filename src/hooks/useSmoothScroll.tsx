import { useCallback } from 'react';

const useSmoothScroll = () => {
    const smoothScrollToSection = useCallback((sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return smoothScrollToSection;
};

export default useSmoothScroll;