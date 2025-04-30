var r = n(815329),
    i = n(163567),
    o = n(614775),
    a = n(951575);
e.exports = function (e, t, n) {
    if (!a(e)) throw new r('Assertion failed: Type(O) is not Object');
    if (!i(t)) throw new r('Assertion failed: P is not a Property Key');
    return o(e, t, {
        '[[Configurable]]': !0,
        '[[Enumerable]]': !0,
        '[[Value]]': n,
        '[[Writable]]': !0
    });
};
