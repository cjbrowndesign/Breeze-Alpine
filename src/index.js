import clipboard from './plugins/clipboard';
import screenSize from './plugins/screenSize';
import scrollTo from './plugins/scrollTo';
import carousel from './plugins/carousel';

export default function BreezeAlpine(Alpine) {
    Alpine.plugin(clipboard);
    Alpine.plugin(screenSize);
    Alpine.plugin(scrollTo);
    Alpine.plugin(carousel);
};

export {
    clipboard,
    screenSize,
    scrollTo,
    carousel
};
