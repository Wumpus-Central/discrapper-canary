n.d(t, { c: () => A });
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(15285),
    o = n(227309),
    d = n(475380),
    u = n(610215),
    c = n(985018),
    g = n(402627),
    m = n(653307);
function _() {
    return (0, i.jsx)("div", {
        className: l()(m.tR, g.eS, g.Rw),
        children: (0, i.jsxs)("div", {
            className: l()(g.$K, m.Vd),
            children: [
                (0, i.jsx)("div", { className: g.mO, children: c.intl.string(c.t.H68X9x) }),
                (0, i.jsx)("div", { className: g.GN, children: c.intl.string(c.t.T5Ilmw) }),
            ],
        }),
    });
}
let A = () => {
    let { robloxSubgameHistory: e, overrideExePaths: t } = (0, u.a)(),
        n = (0, a.bG)([r.Ay], () => r.Ay.getVisibleGame());
    return null != n
        ? (0, i.jsx)(
              d.A,
              { rawGame: n, isOverride: t.has(n.exePath), nowPlaying: !0, subgames: n.id === o.a7 ? e : void 0 },
              (0, r.Es)(n),
          )
        : (0, i.jsx)(_, {});
};
