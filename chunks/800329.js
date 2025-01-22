n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(218867),
    o = n(82936);
let c = 16 / 9;
function d(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1);
}
function u(e, t, n) {
    let i = t - e;
    for (; i > 0; ) {
        let t = e,
            l = Math.floor(i / 2);
        n((t += l)) ? ((e = t + 1), (i -= l + 1)) : (i = l);
    }
    return e;
}
function h(e) {
    var t;
    let { className: n, children: r, keyExtractor: h, paddingTop: p = 0, paddingBottom: m = 0 } = e,
        [f, g] = l.useState({
            width: 0,
            height: 0
        }),
        { width: C, height: x } = f,
        v = null !== (t = null == r ? void 0 : r.length) && void 0 !== t ? t : 0,
        _ = C - 16,
        I = x - (p + m),
        {
            tileStyle: E,
            tileWidth: b,
            rows: Z,
            columns: N
        } = l.useMemo(
            () =>
                (function (e, t, n) {
                    let {
                        rows: i,
                        columns: l,
                        tileWidth: r
                    } = (function (e, t, n) {
                        let i;
                        let l = Math.floor(t / 25);
                        i =
                            e > 25
                                ? u(l, t, (e) => {
                                      let i = d(e, t),
                                          l = (function (e, t) {
                                              let n = e / c;
                                              return Math.ceil((t - n) / (8 + n)) + 1;
                                          })(e, n);
                                      return i * l > 25;
                                  })
                                : u(l, t, (i) => {
                                      let l = d(i, t),
                                          r = (function (e, t) {
                                              let n = e / c;
                                              return Math.floor((t - n) / (8 + n)) + 1;
                                          })(i, n);
                                      return l * r >= e;
                                  }) - 1;
                        let r = d(i, t),
                            a = Math.ceil(e / r);
                        return {
                            tileWidth: i,
                            columns: Math.max(1, r),
                            rows: a
                        };
                    })(e, t, n);
                    return {
                        tileStyle: { width: r },
                        tileWidth: r,
                        rows: i,
                        columns: l
                    };
                })(v, _, I),
            [v, _, I]
        ),
        S = N + 1,
        T = S * b + (S - 1) * 8 <= C,
        j = Math.floor(b / c) + 8,
        A = Math.max(0, I - j * Z) / 2;
    return (0, i.jsx)(s.Z, {
        fade: !0,
        className: n,
        listPadding: [p + A, 0, m + A - 8, 8],
        renderRow: function (e) {
            var t;
            let n = e * N;
            return (0, i.jsx)(
                'div',
                {
                    className: o.row,
                    children:
                        null == r
                            ? void 0
                            : null === (t = r.slice(n, n + N)) || void 0 === t
                              ? void 0
                              : t.map((e, t) => {
                                    var l;
                                    let r = n + t;
                                    return (0, i.jsx)(
                                        'div',
                                        {
                                            style: E,
                                            className: a()(o.tile, {
                                                [o.padColumn]: T,
                                                [o.noVerticalMargin]: r >= (Z - 1) * N,
                                                [o.noHorizontalMargin]: (r + 1) % N == 0 || r === v - 1
                                            }),
                                            children: (0, i.jsx)('div', {
                                                className: o.tileSizer,
                                                children: e(b)
                                            })
                                        },
                                        null !== (l = null == h ? void 0 : h(r)) && void 0 !== l ? l : r
                                    );
                                })
                },
                e
            );
        },
        rowCount: Z,
        rowCountBySection: [Z],
        rowHeight: j,
        onResize: g
    });
}
