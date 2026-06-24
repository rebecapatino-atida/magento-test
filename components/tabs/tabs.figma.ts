import figma, { html } from '@figma/code-connect';

/**
 * Tabs component - Atida Hyva Theme
  * Source: web/tailwind/components/2-mw-elements/tabs.css
   *
    * Structure:
     *   .tabs                        - Container
      *   .tabs__heading               - Tab header row (flex, overflow-x-auto)
       *   .tabs__heading .title        - Individual tab button
        *   .tabs__heading .counter      - Badge/counter inside tab label
         *   .tabs__content               - Tab content area
          *   .description                 - Content description area
           *   .more-less-text              - Expandable text area
            *   .more-less-button            - Show more/less toggle button
             *
              * Active tab state uses Tailwind: border-b-2 border-primary
               * Inactive tab state uses: border-b-2 border-transparent text-grey
                */

                figma.connect(
                  // TODO: Replace with your Figma component node URL
                    'FIGMA_COMPONENT_URL_TABS',
                      {
                          props: {
                                hasCounter:  figma.boolean('Has Counter'),
                                      hasShowMore: figma.boolean('Has Show More'),
                                            tabCount: figma.enum('Tab Count', {
                                                    Two:   2,
                                                            Three: 3,
                                                                  }),
                                                                      },
                                                                          example: ({ hasCounter, hasShowMore, tabCount }) => html`
                                                                                <div class="tabs">
                                                                                        <div class="tabs__heading flex overflow-x-auto">
                                                                                                  <button class="title font-semibold px-4 py-3 border-b-2 border-primary">
                                                                                                              Tab 1 ${hasCounter ? '<span class="counter">3</span>' : ''}
                                                                                                                        </button>
                                                                                                                                  <button class="title font-semibold px-4 py-3 border-b-2 border-transparent text-grey">
                                                                                                                                              Tab 2 ${hasCounter ? '<span class="counter">5</span>' : ''}
                                                                                                                                                        </button>
                                                                                                                                                                  ${tabCount >= 3 ? `<button class="title font-semibold px-4 py-3 border-b-2 border-transparent text-grey">Tab 3</button>` : ''}
                                                                                                                                                                          </div>
                                                                                                                                                                                  <div class="tabs__content">
                                                                                                                                                                                            <div class="description">
                                                                                                                                                                                                        <div class="more-less-text space-y-2">
                                                                                                                                                                                                                      <p>Tab content goes here.</p>
                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                              ${hasShowMore ? `<button class="more-less-button relative bg-neutral-100 ml-0">Show more</button>` : ''}
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                          `,
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                            );
