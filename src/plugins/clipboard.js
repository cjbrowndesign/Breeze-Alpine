/**
 * Clipboard
 * 
 * Custom magic function to allow copying data to the clipboard 
 */

export default function clipboard(Alpine) {
    Alpine.magic('clipboard', () => {
        return subject => navigator.clipboard.writeText(subject)
    });
}
