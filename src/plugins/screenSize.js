/**
 * screenSize
 * 
 * Custom magic function to allow inline query of
 * the screen width/height
 */

export default function screenSize(Alpine) {
    Alpine.magic('screenSize', () => {
        return () => {
            let store = Alpine.reactive({
                width: window.innerWidth,
                height: window.innerHeight,

                update() {
                    this.width = window.innerWidth;
                    this.height = window.innerHeight;
                },

                widthIsGreaterThan(value) {
                    return this.width > value;
                },
        
                widthIsLessThan(value) {
                    return this.width < value;
                },
        
                widthIsEqualTo(value) {
                    return this.width === value;
                },
        
                heightIsGreaterThan(value) {
                    return this.height > value;
                },
        
                heightIsLessThan(value) {
                    return this.height < value;
                },
        
                heightIsEqualTo(value) {
                    return this.height === value;
                },
            });

            window.addEventListener('resize', () => store.update());

            return store;
        }
    });
}