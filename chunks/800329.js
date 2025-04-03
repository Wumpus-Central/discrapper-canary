n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(218867),
    s = n(183155);
let c = 16 / 9;
function u(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1);
}
function d(e, t, n) {
    let r = t - e;
    for (; r > 0; ) {
        let t = e,
            i = Math.floor(r / 2);
        n((t += i)) ? ((e = t + 1), (r -= i + 1)) : (r = i);
    }
    return e;
}
function p(e) {
    var t;
    let { className: n, children: l, keyExtractor: p, paddingTop: h = 0, paddingBottom: f = 0 } = e,
        [m, g] = i.useState({
            width: 0,
            height: 0
        }),
        { width: b, height: _ } = m,
        C = null != (t = null == l ? void 0 : l.length) ? t : 0,
        y = b - 16,
        x = _ - (h + f),
        {
            tileStyle: v,
            tileWidth: j,
            rows: O,
            columns: E
        } = i.useMemo(
            () =>
                (function (e, t, n) {
                    let {
                        rows: r,
                        columns: i,
                        tileWidth: l
                    } = (function (e, t, n) {
                        let r,
                            i = Math.floor(t / 25);
                        r =
                            e > 25
                                ? d(i, t, (e) => {
                                      let r = u(e, t);
                                      return (
                                          r *
                                              (function (e, t) {
                                                  let n = e / c;
                                                  return Math.ceil((t - n) / (8 + n)) + 1;
                                              })(e, n) >
                                          25
                                      );
                                  })
                                : d(i, t, (r) => {
                                      let i = u(r, t);
                                      return (
                                          i *
                                              (function (e, t) {
                                                  let n = e / c;
                                                  return Math.floor((t - n) / (8 + n)) + 1;
                                              })(r, n) >=
                                          e
                                      );
                                  }) - 1;
                        let l = u(r, t),
                            o = Math.ceil(e / l);
                        return {
                            tileWidth: r,
                            columns: Math.max(1, l),
                            rows: o
                        };
                    })(e, t, n);
                    return {
                        tileStyle: { width: l },
                        tileWidth: l,
                        rows: r,
                        columns: i
                    };
                })(C, y, x),
            [C, y, x]
        ),
        N = E + 1,
        I = N * j + (N - 1) * 8 <= b,
        P = Math.floor(j / c) + 8,
        S = Math.max(0, x - P * O) / 2;
    return (0, r.jsx)(a.Z, {
        fade: !0,
        className: n,
        listPadding: [h + S, 0, f + S - 8, 8],
        renderRow: function (e) {
            var t;
            let n = e * E;
            return (0, r.jsx)(
                'div',
                {
                    className: s.row,
                    children:
                        null == l || null == (t = l.slice(n, n + E))
                            ? void 0
                            : t.map((e, t) => {
                                  var i;
                                  let l = n + t;
                                  return (0, r.jsx)(
                                      'div',
                                      {
                                          style: v,
                                          className: o()(s.tile, {
                                              [s.padColumn]: I,
                                              [s.noVerticalMargin]: l >= (O - 1) * E,
                                              [s.noHorizontalMargin]: (l + 1) % E == 0 || l === C - 1
                                          }),
                                          children: (0, r.jsx)('div', {
                                              className: s.tileSizer,
                                              children: e(j)
                                          })
                                      },
                                      null != (i = null == p ? void 0 : p(l)) ? i : l
                                  );
                              })
                },
                e
            );
        },
        rowCount: O,
        rowCountBySection: [O],
        rowHeight: P,
        onResize: g
    });
}
