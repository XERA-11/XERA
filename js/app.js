/**
 * XERA — Main Application Bootstrap
 *
 * This file initializes the core frontend systems
 * when the XERA application is ready.
 */

import { renderNavigation } from './navigation.js';
import { initAmbientBackground } from './background.js';


/**
 * Initialize XERA
 *
 * All core frontend systems should be
 * initialized from this function.
 */
function initializeXERA() {

    console.log(
        '[XERA] Foundation Engine Starting...'
    );


    // Initialize the primary navigation.
    renderNavigation();


    // Initialize ambient visual background.
    initAmbientBackground();


    console.log(
        '[XERA] Foundation Engine Initialized.'
    );
}


/**
 * Wait until the DOM is fully ready
 * before initializing the application.
 */
if (document.readyState === 'loading') {

    document.addEventListener(
        'DOMContentLoaded',
        initializeXERA
    );

} else {

    initializeXERA();

}
