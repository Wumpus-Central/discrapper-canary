var r = n(815329),
    i = n(163567),
    a = n(614775),
    o = n(951575);
e.exports = function (e, t, n) {
    if (!o(e)) throw new r('Assertion failed: Type(O) is not Object');
    if (!i(t)) throw new r('Assertion failed: P is not a Property Key');
    return a(e, t, {
        '[[Configurable]]': !0,
        '[[Enumerable]]': !0,
        '[[Value]]': n,
        '[[Writable]]': !0
    });
};
