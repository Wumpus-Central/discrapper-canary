var r = n(840475),
    i = n(46015),
    a = n(896471),
    o = n(335024),
    s = r.aTypedArray,
    l = r.getTypedArrayConstructor,
    c = r.exportTypedArrayMethod,
    u = i(r.TypedArrayPrototype.sort);
c('toSorted', function (e) {
    void 0 !== e && a(e);
    var t = s(this);
    return u(o(l(t), t), e);
});
