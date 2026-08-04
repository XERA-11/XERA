/**
 * XERA — Navigation Component
 *
 * Renders the primary navigation
 * into the #main-header mount point.
 */

import { select } from './dom.js';


/**
 * Navigation Items
 *
 * These are the initial public sections
 * of the XERA platform.
 *
 * The navigation system will evolve
 * as the full XERA experience is built.
 */

const NAV_ITEMS = [
    {
        label: 'Flow',
        href: 'pages/app.html#flow'
    },
    {
        label: 'Explore',
        href: 'pages/app.html#explore'
    },
    {
        label: 'Create',
        href: 'pages/app.html#create'
    },
    {
        label: 'VYRA',
        href: 'pages/app.html#vyra'
    },
    {
        label: 'Space',
        href: 'pages/app.html#space'
    }
];


/**
 * Render XERA Navigation
 */
export function renderNavigation() {

    const headerElement =
        select('#main-header');

    // Stop safely if the header
    // does not exist on the current page.
    if (!headerElement) {
        return;
    }


    const navHTML = `
        <div class="nav-brand">
            <span class="nav-brand-text">
                XERA
            </span>
        </div>

        <nav
            class="nav-links"
            aria-label="Main Navigation"
        >

            ${NAV_ITEMS.map(item => `
                <a
                    href="${item.href}"
                    class="nav-link"
                >
                    ${item.label}
                </a>
            `).join('')}

        </nav>
    `;


    headerElement.innerHTML = navHTML;
}
