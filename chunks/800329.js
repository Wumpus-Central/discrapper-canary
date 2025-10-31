n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(218867),
    s = n(581857);
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
    let { className: n, children: l, keyExtractor: p, paddingTop: f = 0, paddingBottom: h = 0 } = e,
        [m, g] = i.useState({
            width: 0,
            height: 0,
        }),
        { width: b, height: _ } = m,
        y = null != (t = null == l ? void 0 : l.length) ? t : 0,
        C = b - 16,
        v = _ - (f + h),
        {
            tileStyle: O,
            tileWidth: x,
            rows: E,
            columns: j,
        } = i.useMemo(
            () =>
                (function (e, t, n) {
                    let {
                        rows: r,
                        columns: i,
                        tileWidth: l,
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
                            a = Math.ceil(e / l);
                        return {
                            tileWidth: r,
                            columns: Math.max(1, l),
                            rows: a,
                        };
                    })(e, t, n);
                    return {
                        tileStyle: { width: l },
                        tileWidth: l,
                        rows: r,
                        columns: i,
                    };
                })(y, C, v),
            [y, C, v],
        ),
        S = j + 1,
        P = S * x + (S - 1) * 8 <= b,
        I = Math.floor(x / c) + 8,
        Z = Math.max(0, v - I * E) / 2;
    return (0, r.jsx)(o.Z, {
        fade: !0,
        className: n,
        listPadding: [f + Z, 0, h + Z - 8, 8],
        renderRow: function (e) {
            var t;
            let n = e * j;
            return (0, r.jsx)(
                "div",
                {
                    className: s.row,
                    children:
                        null == l || null == (t = l.slice(n, n + j))
                            ? void 0
                            : t.map((e, t) => {
                                  var i;
                                  let l = n + t;
                                  return (0, r.jsx)(
                                      "div",
                                      {
                                          style: O,
                                          className: a()(s.tile, {
                                              [s.padColumn]: P,
                                              [s.noVerticalMargin]: l >= (E - 1) * j,
                                              [s.noHorizontalMargin]: (l + 1) % j == 0 || l === y - 1,
                                          }),
                                          children: (0, r.jsx)("div", {
                                              className: s.tileSizer,
                                              children: e(x),
                                          }),
                                      },
                                      null != (i = null == p ? void 0 : p(l)) ? i : l,
                                  );
                              }),
                },
                e,
            );
        },
        rowCount: E,
        rowCountBySection: [E],
        rowHeight: I,
        onResize: g,
    });
}
