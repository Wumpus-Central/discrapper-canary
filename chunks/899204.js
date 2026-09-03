var n = r(741623),
    i = r(353841),
    o = r(14665);
e.exports = function (e) {
    if (void 0 === e) return !1;
    if (!o(e)) throw new n("Assertion failed: `Desc` must be a Property Descriptor");
    return !!i(e, "[[Get]]") || !!i(e, "[[Set]]");
};
