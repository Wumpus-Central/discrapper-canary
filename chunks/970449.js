t.d(l, { A: () => x });
var s = t(627968),
    n = t(64700),
    r = t(803805),
    a = t(827734),
    i = t(397927),
    c = t(25277),
    u = t(327143),
    o = t(247683),
    d = t(131955),
    g = t(652215),
    m = t(573436);
let h = d.xP.map(function (e) {
    return { type: g.dD.TRENDING_CATEGORY, name: e.name, src: e.previewUrl, format: r.TL.IMAGE };
});
function f(e) {
    let { name: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: m.FP }),
            (0, s.jsx)("div", { className: m.O1, children: (0, s.jsx)("span", { className: m.yb, children: l }) }),
        ],
    });
}
function x(e) {
    let { onSelectCategory: l } = e,
        { imagePool: t, videoPool: r } = (0, o.d5)(),
        d = n.useRef(null),
        [g, x] = n.useState(null),
        b = n.useCallback((e) => {
            let l = d.current;
            if (null == l) return;
            let t = l.getCoordsMap()[e];
            null != t && (l.scrollIntoViewRect({ start: t.top - 10, end: t.top + t.height + 10 }), x(e));
        }, []),
        C = n.useCallback(
            (e) => {
                let t = h.find((l) => l.name === e);
                null != t && l(t.name);
            },
            [l],
        ),
        _ = n.useCallback((e, l) => {
            if (e > 0) return null;
            let t = h[l];
            return null != t ? t.name : null;
        }, []),
        j = n.useCallback(() => 110, []),
        p = n.useCallback(
            (e, n, i, c) => {
                if (e > 0) return null;
                let u = h[n];
                return null == u
                    ? null
                    : (0, s.jsx)(
                          o.uG,
                          {
                              format: u.format,
                              color: a.A.colors.BACKGROUND_BASE_LOWEST.css,
                              src: u.src,
                              item: u,
                              index: n,
                              coords: i,
                              onClick: () => l(u.name),
                              renderExtras: f,
                              focused: u.name === g,
                              imagePool: t,
                              videoPool: r,
                          },
                          c,
                      );
            },
            [g, t, r, l],
        ),
        y = n.useCallback(
            (e) =>
                (0, s.jsx)(i.a0_, {
                    ref: d,
                    fade: !0,
                    className: m.jR,
                    itemGutter: 12,
                    getItemKey: _,
                    columns: e,
                    getItemHeight: j,
                    renderItem: p,
                    sections: [h.length],
                    chunkSize: 50,
                }),
            [j, _, p],
        ),
        k = n.useCallback(() => (null != d.current ? d.current.getItemGrid() : []), []),
        A = n.useCallback(() => (null != d.current ? d.current.getCoordsMap() : {}), []);
    return (0, s.jsx)(c.A, {
        getItemGrid: k,
        getCoordsMap: A,
        onFocus: b,
        onSelect: C,
        children: (0, s.jsx)(u.A, { desiredItemWidth: 200, maxColumns: 6, children: y }),
    });
}
