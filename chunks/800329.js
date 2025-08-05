(n.d(t, { Z: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(218867),
    l = n(183155);
let c = 16 / 9,
    u = 25,
    d = 8,
    f = 16;
function _(e, t) {
    return Math.ceil(t / e);
}
function p(e, t) {
    return Math.max(1, Math.floor((t - e) / (d + e)) + 1);
}
function h(e, t) {
    let n = e / c;
    return Math.floor((t - n) / (d + n)) + 1;
}
function m(e, t) {
    let n = e / c;
    return Math.ceil((t - n) / (d + n)) + 1;
}
function g(e, t, n) {
    let r = t - e;
    for (; r > 0; ) {
        let t = e,
            i = Math.floor(r / 2);
        n((t += i)) ? ((e = t + 1), (r -= i + 1)) : (r = i);
    }
    return e;
}
function E(e, t, n) {
    let r,
        i = Math.floor(t / u),
        a = t;
    r = e > u ? g(i, a, (e) => p(e, t) * m(e, n) > u) : g(i, a, (r) => p(r, t) * h(r, n) >= e) - 1;
    let o = p(r, t),
        s = _(o, e);
    return {
        tileWidth: r,
        columns: Math.max(1, o),
        rows: s
    };
}
function b(e, t, n) {
    let { rows: r, columns: i, tileWidth: a } = E(e, t, n);
    return {
        tileStyle: { width: a },
        tileWidth: a,
        rows: r,
        columns: i
    };
}
function y(e) {
    var t;
    let { className: n, children: a, keyExtractor: u, paddingTop: _ = 0, paddingBottom: p = 0 } = e,
        [h, m] = i.useState({
            width: 0,
            height: 0
        }),
        { width: g, height: E } = h,
        y = null != (t = null == a ? void 0 : a.length) ? t : 0,
        O = g - f,
        v = E - (_ + p),
        { tileStyle: I, tileWidth: T, rows: S, columns: A } = i.useMemo(() => b(y, O, v), [y, O, v]),
        N = A + 1,
        C = N * T + (N - 1) * d <= g,
        w = Math.floor(T / c) + d,
        R = Math.max(0, v - w * S) / 2;
    function P(e) {
        var t;
        let n = e * A;
        return (0, r.jsx)(
            'div',
            {
                className: l.row,
                children:
                    null == a || null == (t = a.slice(n, n + A))
                        ? void 0
                        : t.map((e, t) => {
                              var i;
                              let a = n + t;
                              return (0, r.jsx)(
                                  'div',
                                  {
                                      style: I,
                                      className: o()(l.tile, {
                                          [l.padColumn]: C,
                                          [l.noVerticalMargin]: a >= (S - 1) * A,
                                          [l.noHorizontalMargin]: (a + 1) % A == 0 || a === y - 1
                                      }),
                                      children: (0, r.jsx)('div', {
                                          className: l.tileSizer,
                                          children: e(T)
                                      })
                                  },
                                  null != (i = null == u ? void 0 : u(a)) ? i : a
                              );
                          })
            },
            e
        );
    }
    return (0, r.jsx)(s.Z, {
        fade: !0,
        className: n,
        listPadding: [_ + R, 0, p + R - d, f / 2],
        renderRow: P,
        rowCount: S,
        rowCountBySection: [S],
        rowHeight: w,
        onResize: m
    });
}
