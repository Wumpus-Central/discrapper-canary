var r = n(192291),
    i = n(49693),
    o = n(959318),
    a = r.aTypedArray;
(0, r.exportTypedArrayMethod)('at', function (e) {
    var t = a(this),
        n = i(t),
        r = o(e),
        s = r >= 0 ? r : n + r;
    return s < 0 || s >= n ? void 0 : t[s];
});
