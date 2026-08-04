/**
 * XERA — DOM Manipulation Helpers
 *
 * Small reusable utilities for safely
 * selecting and interacting with DOM elements.
 */

/**
 * Select a single DOM element.
 *
 * @param {string} selector
 * @param {ParentNode} scope
 * @returns {Element|null}
 */
export function select(selector, scope = document) {
    return scope.querySelector(selector);
}


/**
 * Select multiple DOM elements.
 *
 * @param {string} selector
 * @param {ParentNode} scope
 * @returns {Element[]}
 */
export function selectAll(selector, scope = document) {
    return Array.from(scope.querySelectorAll(selector));
}


/**
 * Add an event listener safely.
 *
 * Returns a cleanup function that removes
 * the event listener when no longer needed.
 *
 * @param {EventTarget|null} element
 * @param {string} event
 * @param {Function} handler
 * @param {Object} options
 * @returns {Function}
 */
export function listen(
    element,
    event,
    handler,
    options = {}
) {
    if (!element) {
        return () => {};
    }

    element.addEventListener(
        event,
        handler,
        options
    );

    return () => {
        element.removeEventListener(
            event,
            handler,
            options
        );
    };
}
