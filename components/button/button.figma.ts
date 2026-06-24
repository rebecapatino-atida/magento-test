import figma, { html } from '@figma/code-connect';

/**
 * Button component - Atida Hyva Theme
  * Source: web/tailwind/components/2-mw-elements/button.css
   *
    * CSS classes available:
     *   Base:      .btn
      *   Primary:   .btn-primary   (bg-optimo, white text)
       *   Secondary: .btn-secondary (transparent, border-black)
        *   Accent:    .btn-accent    (bg-black-2)
         *   Disabled:  .disabled or [disabled]
          *   Sizes:     .btn-sm, .btn-lg
           */

           figma.connect(
             // TODO: Replace with your Figma component node URL
               // e.g. 'https://www.figma.com/file/XXXX?node-id=0%3A1'
                 'FIGMA_COMPONENT_URL_BUTTON',
                   {
                       props: {
                             variant: figma.enum('Variant', {
                                     Primary:   'btn-primary',
                                             Secondary: 'btn-secondary',
                                                     Accent:    'btn-accent',
                                                           }),
                                                                 size: figma.enum('Size', {
                                                                         Small:  'btn-sm',
                                                                                 Medium: '',
                                                                                         Large:  'btn-lg',
                                                                                               }),
                                                                                                     disabled: figma.boolean('Disabled'),
                                                                                                           label:    figma.string('Label'),
                                                                                                                 hasIcon:  figma.boolean('Has Icon'),
                                                                                                                     },
                                                                                                                         example: ({ variant, size, disabled, label, hasIcon }) => html`
                                                                                                                               <button
                                                                                                                                       class="btn ${variant}${size ? ' ' + size : ''}${disabled ? ' disabled' : ''}"
                                                                                                                                               ${disabled ? 'disabled' : ''}
                                                                                                                                                     >
                                                                                                                                                             ${hasIcon ? '<svg class="inline-flex w-5 h-5 mr-2" aria-hidden="true"></svg>' : ''}
                                                                                                                                                                     ${label}
                                                                                                                                                                           </button>
                                                                                                                                                                               `,
                                                                                                                                                                                 }
                                                                                                                                                                                 );
