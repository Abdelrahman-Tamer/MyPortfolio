import { Component, input } from '@angular/core';

export type IconName =
  | 'arrow-up-right'
  | 'award'
  | 'bookmark'
  | 'briefcase'
  | 'check'
  | 'code'
  | 'database'
  | 'external-link'
  | 'file-text'
  | 'github'
  | 'globe'
  | 'graduation-cap'
  | 'heart-pulse'
  | 'home'
  | 'layers'
  | 'linkedin'
  | 'lock'
  | 'mail'
  | 'map-pin'
  | 'menu'
  | 'monitor'
  | 'moon'
  | 'palette'
  | 'phone'
  | 'receipt'
  | 'server'
  | 'shopping-cart'
  | 'smartphone'
  | 'sparkles'
  | 'sun'
  | 'terminal'
  | 'wrench'
  | 'x';

@Component({
  selector: 'app-icon',
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.9"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      @switch (name()) {
        @case ('arrow-up-right') {
          <path d="M7 17 17 7" />
          <path d="M9 7h8v8" />
        }
        @case ('award') {
          <path d="M15.5 8.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
          <path d="m8.8 12.1-1.2 7 4.4-2.4 4.4 2.4-1.2-7" />
        }
        @case ('bookmark') {
          <path d="M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-3.5L6 21Z" />
        }
        @case ('briefcase') {
          <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
          <path d="M5 7h14a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
          <path d="M3 12.5h18" />
          <path d="M10 12.5h4" />
        }
        @case ('check') {
          <path d="m5 12.5 4.2 4.2L19 6.8" />
        }
        @case ('code') {
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 5-4 14" />
        }
        @case ('database') {
          <ellipse cx="12" cy="5.5" rx="7" ry="3" />
          <path d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
          <path d="M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        }
        @case ('external-link') {
          <path d="M14 4h6v6" />
          <path d="m20 4-9 9" />
          <path d="M11 5H7a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-4" />
        }
        @case ('file-text') {
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6" />
          <path d="M9 17h4" />
        }
        @case ('github') {
          <path d="M15 21v-3.4c.1-1-.3-1.7-.9-2.1 3-.3 6.1-1.5 6.1-6.6a5.2 5.2 0 0 0-1.4-3.6c.1-.4.6-1.8-.2-3.5 0 0-1.2-.4-3.7 1.4a12.7 12.7 0 0 0-6.8 0C5.6 1.4 4.4 1.8 4.4 1.8c-.8 1.7-.3 3.1-.2 3.5a5.2 5.2 0 0 0-1.4 3.6c0 5.1 3.1 6.3 6.1 6.6-.4.3-.7.9-.8 1.7-.7.3-2.5.8-3.6-1a2.6 2.6 0 0 0-1.9-1.3" />
          <path d="M9 21v-3.4" />
        }
        @case ('globe') {
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21" />
          <path d="M12 3c-2.2 2.4-3.3 5.4-3.3 9s1.1 6.6 3.3 9" />
        }
        @case ('graduation-cap') {
          <path d="m3 8.5 9-4.5 9 4.5-9 4.5Z" />
          <path d="M7 11v4.2c0 1.4 2.2 2.8 5 2.8s5-1.4 5-2.8V11" />
          <path d="M21 8.5v5" />
        }
        @case ('heart-pulse') {
          <path d="M19.5 5.8a5 5 0 0 0-7.1 0L12 6.2l-.4-.4a5 5 0 0 0-7.1 7.1L12 20.4l3.1-3.1" />
          <path d="M14 14h2l1.2-2.4 1.6 4.8L20 14h2" />
        }
        @case ('home') {
          <path d="m3 11 9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
        }
        @case ('layers') {
          <path d="m12 3 9 5-9 5-9-5Z" />
          <path d="m3 13 9 5 9-5" />
          <path d="m3 17 9 5 9-5" />
        }
        @case ('linkedin') {
          <path d="M16 8a5 5 0 0 1 5 5v7h-4v-7a1 1 0 0 0-2 0v7h-4v-7a5 5 0 0 1 5-5Z" />
          <path d="M3 9h4v11H3Z" />
          <circle cx="5" cy="4.8" r="2" />
        }
        @case ('lock') {
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        }
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        }
        @case ('map-pin') {
          <path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        }
        @case ('menu') {
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        }
        @case ('monitor') {
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
        }
        @case ('moon') {
          <path d="M20.5 14.2A8.3 8.3 0 0 1 9.8 3.5 8.6 8.6 0 1 0 20.5 14.2Z" />
        }
        @case ('palette') {
          <path d="M12 3a9 9 0 0 0 0 18h1.4a1.8 1.8 0 0 0 1.1-3.2 1.7 1.7 0 0 1 1-3h1.2A4.3 4.3 0 0 0 21 10.5C21 6.4 17 3 12 3Z" />
          <circle cx="7.5" cy="10" r=".8" />
          <circle cx="10" cy="7.2" r=".8" />
          <circle cx="13.5" cy="7.2" r=".8" />
          <circle cx="16" cy="10" r=".8" />
        }
        @case ('phone') {
          <path d="M22 16.9v2.7a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3A19.2 19.2 0 0 1 5.4 12 19.5 19.5 0 0 1 2.4 3.5 2 2 0 0 1 4.4 1.3h2.7a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8L7.7 8.6a15.5 15.5 0 0 0 7.7 7.7l1.2-1.2a2 2 0 0 1 1.8-.6l2.6.4a2 2 0 0 1 1.7 2Z" />
        }
        @case ('receipt') {
          <path d="M5 3v18l2-1.2L9 21l2-1.2 2 1.2 2-1.2 2 1.2 2-1.2V3Z" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        }
        @case ('server') {
          <rect x="4" y="4" width="16" height="6" rx="2" />
          <rect x="4" y="14" width="16" height="6" rx="2" />
          <path d="M8 7h.01" />
          <path d="M8 17h.01" />
        }
        @case ('shopping-cart') {
          <path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5h7.6a2 2 0 0 0 2-1.5L20 8H6" />
          <circle cx="9" cy="20" r="1" />
          <circle cx="17" cy="20" r="1" />
        }
        @case ('smartphone') {
          <rect x="7" y="2.5" width="10" height="19" rx="2" />
          <path d="M11 18h2" />
        }
        @case ('sparkles') {
          <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5Z" />
          <path d="m5 14 .8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8Z" />
          <path d="m19 14 .6 1.6 1.4.4-1.4.6L19 18l-.6-1.4-1.4-.6 1.4-.4Z" />
        }
        @case ('sun') {
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.9 4.9 1.4 1.4" />
          <path d="m17.7 17.7 1.4 1.4" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m4.9 19.1 1.4-1.4" />
          <path d="m17.7 6.3 1.4-1.4" />
        }
        @case ('terminal') {
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="m7.2 9 3.2 3-3.2 3" />
          <path d="M12.6 15h4.2" />
        }
        @case ('wrench') {
          <path d="M14.7 6.3a4.5 4.5 0 0 0 5.6 5.6L11 21.2a2.2 2.2 0 0 1-3.1-3.1l9.3-9.3a4.5 4.5 0 0 1-2.5-2.5Z" />
        }
        @case ('x') {
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        }
      }
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      svg {
        display: block;
      }
    `,
  ],
  host: {
    '[attr.aria-hidden]': 'decorative() ? "true" : null',
  },
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input(18);
  readonly decorative = input(true);
}
