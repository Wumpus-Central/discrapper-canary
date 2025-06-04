var r = n(815329),
    i = n(706165),
    o = n(699367);
e.exports = function (e) {
    if (void 0 === e) return !1;
    if (!o(e)) throw new r('Assertion failed: `Desc` must be a Property Descriptor');
    return !!i(e, '[[Value]]') || !!i(e, '[[Writable]]');
};
