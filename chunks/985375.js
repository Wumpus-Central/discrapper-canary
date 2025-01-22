r.d(n, {
    HI: function () {
        return c;
    },
    gG: function () {
        return u;
    },
    hb: function () {
        return d;
    }
});
var i = r(192379),
    a = r(392711),
    o = r.n(a),
    s = r(516373);
let l = {};
function u() {
    var e, n;
    return null !== (n = null === (e = (0, s.D)().favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== n ? n : l;
}
function c(e) {
    let n = u();
    return i.useMemo(
        () =>
            o()(n)
                .map((n, r) => {
                    var i;
                    return {
                        ...n,
                        url: r,
                        src: null !== (i = null == e ? void 0 : e(n.src, r)) && void 0 !== i ? i : n.src
                    };
                })
                .sortBy('order')
                .reverse()
                .value(),
        [n, e]
    );
}
function d(e) {
    return null != u()[e];
}
