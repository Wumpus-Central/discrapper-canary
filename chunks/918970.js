var e = r(840475),
    o = r(46015),
    i = r(896471),
    u = r(335024),
    c = e.aTypedArray,
    a = e.getTypedArrayConstructor,
    f = e.exportTypedArrayMethod,
    s = o(e.TypedArrayPrototype.sort);
f('toSorted', function (t) {
    void 0 !== t && i(t);
    var n = c(this);
    return s(u(a(n), n), t);
});
