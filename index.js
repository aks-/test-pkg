/**
 * A function to change the URL that new checkout understands.
 *
 * @function
 * @param {string} url - The URL to change.
 * @returns {string} The new URL.
 */
import isUrl from 'is-url';

function changeURL(url) {
    if (!isUrl(url)) {
        throw new TypeError(`Expected a valid URL, provided ${url}`);
    }

    const originalURL = new URL(url);
    const newURL = new URL('https://www.checkout.com');

    newURL.pathname = originalURL.pathname;
    newURL.hash = originalURL.hash;
    originalURL.searchParams.forEach((value, key) => {
        newURL.searchParams.set(key, value);
    });

    if (newURL.searchParams.has('variant')) {
        newURL.searchParams.delete('variant');
    }

    if (newURL.searchParams.has('quantity')) {
        newURL.searchParams.delete('quantity');
    }

    if (newURL.searchParams.has('discount')) {
        newURL.searchParams.set('discountExists', 'true');
    }

    return newURL.toString();
}

export default changeURL;

