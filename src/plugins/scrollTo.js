/**
 * scrollTo
 * 
 * Custom magic function to allow easy scrollTop function, or
 * direct to an ID
 */

 export default function scrollTo(Alpine) {
    Alpine.magic('scrollTo', () => {
        return () => {
            let scroll = Alpine.reactive({
                top() {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                },

                bottom() {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });
                },

                id(value) {
                    let element = document.getElementById(value);

                    if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });

            return scroll;
        }
    });
}