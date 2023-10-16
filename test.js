import test from 'node:test';
import assert from 'node:assert';
import changeUrl from './index.js';

test('changeUrl', (t) => {
    const url = 'https://www.google.com';
    const expected = 'https://www.checkout.com/';
    const actual = changeUrl(url);
    assert.equal(actual, expected, 'should return the url');
});

test('changeUrl with params', (t) => {
    const url = 'https://www.google.com?test=1';
    const expected = 'https://www.checkout.com/?test=1';
    const actual = changeUrl(url);
    assert.equal(actual, expected, 'should return the url');
});

test('changeUrl with discount params', (t) => {
    const url = 'https://www.google.com?test=1&discount=10';
    const expected = 'https://www.checkout.com/?test=1&discount=10&discountExists=true';
    const actual = changeUrl(url);
    assert.equal(actual, expected, 'should return the url');
});

