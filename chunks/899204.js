var r = n(741623),
    i = n(353841),
    a = n(14665);
e.exports = function (e) {
    if (void 0 === e) return !1;
    if (!a(e)) throw new r("Assertion failed: `Desc` must be a Property Descriptor");
    return !!i(e, "[[Get]]") || !!i(e, "[[Set]]");
};
