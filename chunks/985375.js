n.d(t, {
    HI: () => u,
    gG: () => l,
    hb: () => c
});
var i = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(516373);
let o = {};
function l() {
    var e, t;
    return null !== (t = null === (e = (0, s.D)().favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : o;
}
function u(e) {
    let t = l();
    return i.useMemo(
        () =>
            a()(t)
                .map((t, n) => {
                    var i;
                    return {
                        ...t,
                        url: n,
                        src: null !== (i = null == e ? void 0 : e(t.src, n)) && void 0 !== i ? i : t.src
                    };
                })
                .sortBy('order')
                .reverse()
                .value(),
        [t, e]
    );
}
function c(e) {
    return null != l()[e];
}
