/**
 * XERA — Ambient Visual Subsystem
 *
 * Responsible for initializing the visual background layer.
 *
 * Current version:
 * Uses CSS-based ambient visuals.
 *
 * Future possibilities:
 * - WebGL
 * - Canvas effects
 * - Interactive lighting
 * - Device-aware visual intensity
 */

export function initAmbientBackground() {

    const ambientCanvas =
        document.querySelector('#ambient-canvas');

    if (!ambientCanvas) {
        console.warn(
            '[XERA Engine] Ambient background container not found.'
        );

        return;
    }

    // Mark the visual subsystem as initialized.
    ambientCanvas.dataset.initialized = 'true';

    console.log(
        '[XERA Engine] Ambient visual background active.'
    );
}
