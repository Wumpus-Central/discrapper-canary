var r = n(840475),
    i = n(46015),
    o = n(896471),
    a = n(335024),
    s = r.aTypedArray,
    l = r.getTypedArrayConstructor,
    c = r.exportTypedArrayMethod,
    u = i(r.TypedArrayPrototype.sort);
c('toSorted', function (e) {
    void 0 !== e && o(e);
    var t = s(this);
    return u(a(l(t), t), e);
});
