r.d(t, { Z: () => n });
let n = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
    return !1;
};
