var i = n(192291),
    r = n(49693),
    a = n(959318),
    s = i.aTypedArray;
(0, i.exportTypedArrayMethod)('at', function (e) {
    var t = s(this),
        n = r(t),
        i = a(e),
        o = i >= 0 ? i : n + i;
    return o < 0 || o >= n ? void 0 : t[o];
});
