# Breeze Alpine

Plugins to extend AlpineJS

## Usage

Register all plugins:

```javascript
import BreezeAlpine from 'breeze-alpine';

Alpine.plugin(BreezeAlpine);
```

Or register them separately:

```javascript
import { screenSize } from 'breeze-alpine';

Alpine.plugin(screenSize);
```

## Plugins

### carousel

Allows the initialisation of a simple carousel

Available methods:

`carousel` : Array of items

`next`

`prev`

```html
<div x-data="carousel(['Slide One', 'Slide Two', 'Slide Three'])" class="br-carousel">
    <button @click="prev()">Prev</button>
    <button @click="next()">Next</button>
    <div class="br-carousel__container">
        <div class="br-carousel__track">
            <template x-for="(slide, index) in items" :key="index">
                <div :id="index" class="br-carousel__slide">
                    <span x-text="slide"></span>
                </div>
            </template>
        </div>
    </div>
</div>
```

### $screenSize

Allows you to query the current screen width/height via Alpine. The width/height is automatically recalculated on resize.

Available methods:

`widthIsGreaterThan`

`widthIsLessThan`

`widthIsEqualTo`

`heightIsGreaterThan`

`heightIsLessThan`

`heightIsEqualTo`

```html
<div x-data="$screenSize()">
    <p x-text="width"></p>
    <p x-text="height"></p>
    <p x-show="widthIsGreaterThan(740)">Width is GREATER than 740px</p>
    <p x-show="widthIsLessThan(740)">Width is LESS THAN than 740px</p>
</div>
```

### $clipboard

Copies specified data to your clipboard

```html
<div x-data>
    <span x-ref="title">
        {{ title }}
    </span>
    <button @click="$clipboard($refs.title.innerHTML)">Copy to clipboard</button>
</div>
```

### $scrollTo

Smooth scrolls to a section of the page

Alternatively, pass an id as the parameter to smooth scroll to a specific section.

Available methods:

`bottom`

`top`

`id`

```html
    <div x-data="$scrollTo">
        <div>
            <button @click="bottom()">Scroll to Bottom</button>
        </div>
        <div id="section">
            <button @click="id('section')">Scroll to Me</button>
        </div>
        <div>
            <button @click="top()">Scroll to Top</button>
        </div>
    </div>
```