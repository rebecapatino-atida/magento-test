import figma, { html } from '@figma/code-connect';

/**
 * Icons component - Atida Hyva Theme
  * Source: web/tailwind/components/2-mw-elements/icons.css
   *
    * Icons are rendered as <span> elements with background-image from ico-sprite.svg
     * All icons use the base class .icon plus a modifier class.
      *
       * Available icon classes:
        *   .icon-wishlist       - Wishlist / heart icon
         *   .icon-cart-add       - Add to cart icon
          *   .icon-plus           - Plus / add icon
           *   .icon-minus          - Minus / remove icon
            *   .icon-trash          - Trash / delete icon
             *   .icon-chevron-down   - Chevron arrow down
              *   .icon-check          - Checkmark icon
               *   .icon-loader         - Loading spinner
                *   .icon-loader-white   - Loading spinner (white variant)
                 *
                  * State modifiers:
                   *   .added-to-wishlist   - Wrapper class that switches wishlist icon to filled state
                    *
                     * Usage in Magento Hyva templates:
                      *   <span class="icon icon-wishlist w-6 h-6 inline-block"></span>
                       */

                       figma.connect(
                         // TODO: Replace with your Figma component node URL
                           'FIGMA_COMPONENT_URL_ICON',
                             {
                                 props: {
                                       name: figma.enum('Icon', {
                                               Wishlist:     'icon-wishlist',
                                                       CartAdd:      'icon-cart-add',
                                                               Plus:         'icon-plus',
                                                                       Minus:        'icon-minus',
                                                                               Trash:        'icon-trash',
                                                                                       ChevronDown:  'icon-chevron-down',
                                                                                               Check:        'icon-check',
                                                                                                       Loader:       'icon-loader',
                                                                                                             }),
                                                                                                                   size: figma.enum('Size', {
                                                                                                                           Small:   'w-4 h-4',
                                                                                                                                   Medium:  'w-6 h-6',
                                                                                                                                           Large:   'w-8 h-8',
                                                                                                                                                 }),
                                                                                                                                                       isWishlistActive: figma.boolean('Wishlist Active'),
                                                                                                                                                           },
                                                                                                                                                               example: ({ name, size, isWishlistActive }) => html`
                                                                                                                                                                     ${isWishlistActive
                                                                                                                                                                             ? `<div class="added-to-wishlist">
                                                                                                                                                                                     <span class="icon ${name} ${size} inline-block"></span>
                                                                                                                                                                                           </div>`
                                                                                                                                                                                                   : `<span class="icon ${name} ${size} inline-block"></span>`
                                                                                                                                                                                                         }
                                                                                                                                                                                                             `,
                                                                                                                                                                                                               }
                                                                                                                                                                                                               );
