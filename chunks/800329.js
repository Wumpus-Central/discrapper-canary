n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(218867),
    o = n(565433);
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
    let { className: n, children: a, keyExtractor: h, paddingTop: p = 0, paddingBottom: m = 0 } = e,
        [f, g] = l.useState({
            width: 0,
            height: 0
        }),
        { width: _, height: C } = f,
        x = null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0,
        v = _ - 16,
        E = C - (p + m),
        {
            tileStyle: I,
            tileWidth: b,
            rows: Z,
            columns: N
        } = l.useMemo(
            () =>
                (function (e, t, n) {
                    let {
                        rows: i,
                        columns: l,
                        tileWidth: a
                    } = (function (e, t, n) {
                        let i;
                        let l = Math.floor(t / 25);
                        i =
                            e > 25
                                ? u(l, t, (e) => {
                                      let i = d(e, t);
                                      return (
                                          i *
                                              (function (e, t) {
                                                  let n = e / c;
                                                  return Math.ceil((t - n) / (8 + n)) + 1;
                                              })(e, n) >
                                          25
                                      );
                                  })
                                : u(l, t, (i) => {
                                      let l = d(i, t);
                                      return (
                                          l *
                                              (function (e, t) {
                                                  let n = e / c;
                                                  return Math.floor((t - n) / (8 + n)) + 1;
                                              })(i, n) >=
                                          e
                                      );
                                  }) - 1;
                        let a = d(i, t),
                            r = Math.ceil(e / a);
                        return {
                            tileWidth: i,
                            columns: Math.max(1, a),
                            rows: r
                        };
                    })(e, t, n);
                    return {
                        tileStyle: { width: a },
                        tileWidth: a,
                        rows: i,
                        columns: l
                    };
                })(x, v, E),
            [x, v, E]
        ),
        T = N + 1,
        S = T * b + (T - 1) * 8 <= _,
        j = Math.floor(b / c) + 8,
        y = Math.max(0, E - j * Z) / 2;
    return (0, i.jsx)(s.Z, {
        fade: !0,
        className: n,
        listPadding: [p + y, 0, m + y - 8, 8],
        renderRow: function (e) {
            var t;
            let n = e * N;
            return (0, i.jsx)(
                'div',
                {
                    className: o.row,
                    children:
                        null == a
                            ? void 0
                            : null === (t = a.slice(n, n + N)) || void 0 === t
                              ? void 0
                              : t.map((e, t) => {
                                    var l;
                                    let a = n + t;
                                    return (0, i.jsx)(
                                        'div',
                                        {
                                            style: I,
                                            className: r()(o.tile, {
                                                [o.padColumn]: S,
                                                [o.noVerticalMargin]: a >= (Z - 1) * N,
                                                [o.noHorizontalMargin]: (a + 1) % N == 0 || a === x - 1
                                            }),
                                            children: (0, i.jsx)('div', {
                                                className: o.tileSizer,
                                                children: e(b)
                                            })
                                        },
                                        null !== (l = null == h ? void 0 : h(a)) && void 0 !== l ? l : a
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
