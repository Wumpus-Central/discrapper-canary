n.d(t, { Z: () => p }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(218867),
    s = n(581857);
let c = 16 / 9;
function u(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1);
}
function d(e, t, n) {
    let i = t - e;
    for (; i > 0; ) {
        let t = e,
            r = Math.floor(i / 2);
        n((t += r)) ? ((e = t + 1), (i -= r + 1)) : (i = r);
    }
    return e;
}
function p(e) {
    var t;
    let { className: n, children: l, keyExtractor: p, paddingTop: h = 0, paddingBottom: f = 0 } = e,
        [m, g] = r.useState({
            width: 0,
            height: 0,
        }),
        { width: b, height: y } = m,
        C = null != (t = null == l ? void 0 : l.length) ? t : 0,
        v = b - 16,
        _ = y - (h + f),
        {
            tileStyle: x,
            tileWidth: j,
            rows: O,
            columns: E,
        } = r.useMemo(
            () =>
                (function (e, t, n) {
                    let {
                        rows: i,
                        columns: r,
                        tileWidth: l,
                    } = (function (e, t, n) {
                        let i,
                            r = Math.floor(t / 25);
                        i =
                            e > 25
                                ? d(r, t, (e) => {
                                      let i = u(e, t);
                                      return (
                                          i *
                                              (function (e, t) {
                                                  let n = e / c;
                                                  return Math.ceil((t - n) / (8 + n)) + 1;
                                              })(e, n) >
                                          25
                                      );
                                  })
                                : d(r, t, (i) => {
                                      let r = u(i, t);
                                      return (
                                          r *
                                              (function (e, t) {
                                                  let n = e / c;
                                                  return Math.floor((t - n) / (8 + n)) + 1;
                                              })(i, n) >=
                                          e
                                      );
                                  }) - 1;
                        let l = u(i, t),
                            a = Math.ceil(e / l);
                        return {
                            tileWidth: i,
                            columns: Math.max(1, l),
                            rows: a,
                        };
                    })(e, t, n);
                    return {
                        tileStyle: { width: l },
                        tileWidth: l,
                        rows: i,
                        columns: r,
                    };
                })(C, v, _),
            [C, v, _],
        ),
        S = E + 1,
        P = S * j + (S - 1) * 8 <= b,
        I = Math.floor(j / c) + 8,
        Z = Math.max(0, _ - I * O) / 2;
    return (0, i.jsx)(o.Z, {
        fade: !0,
        className: n,
        listPadding: [h + Z, 0, f + Z - 8, 8],
        renderRow: function (e) {
            var t;
            let n = e * E;
            return (0, i.jsx)(
                "div",
                {
                    className: s.row,
                    children:
                        null == l || null == (t = l.slice(n, n + E))
                            ? void 0
                            : t.map((e, t) => {
                                  var r;
                                  let l = n + t;
                                  return (0, i.jsx)(
                                      "div",
                                      {
                                          style: x,
                                          className: a()(s.tile, {
                                              [s.padColumn]: P,
                                              [s.noVerticalMargin]: l >= (O - 1) * E,
                                              [s.noHorizontalMargin]: (l + 1) % E == 0 || l === C - 1,
                                          }),
                                          children: (0, i.jsx)("div", {
                                              className: s.tileSizer,
                                              children: e(j),
                                          }),
                                      },
                                      null != (r = null == p ? void 0 : p(l)) ? r : l,
                                  );
                              }),
                },
                e,
            );
        },
        rowCount: O,
        rowCountBySection: [O],
        rowHeight: I,
        onResize: g,
    });
}
