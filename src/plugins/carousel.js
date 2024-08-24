/**
 * carusel
 * 
 * Custom carousel component
 * 
 * TODO: Perhaps worth considering next and prev to be custom directives and
 * pass through their indexes, instead of querying the element?
 * 
 */

export default function carousel(Alpine) {
    Alpine.data('carousel', (slides = []) => ({
        current: 0,
        last: null,
        items: slides,

        init() {
            this.last = this.items.length - 1;
        },

        next() {
            let nextIndex = this.current + 1;
            if (nextIndex >= this.items.length) {
                nextIndex = 0;
            }
            this.update(nextIndex);
            this.slide();
        },

        prev() {
            let prevIndex = this.current - 1;
            if (prevIndex < 0) {
                prevIndex = this.items.length - 1;
            }
            this.update(prevIndex);
            this.slide();
        },

        update(val) {
            this.last = this.current;
            this.current = val;
        },

        slide() {
            const element = document.getElementById(this.current);

            element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
        
    }));
}