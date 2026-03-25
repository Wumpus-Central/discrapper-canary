n.d(t, { c: () => x });
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(15285),
    o = n(227309),
    d = n(475380),
    c = n(610215),
    u = n(985018),
    m = n(492254),
    _ = n(20976);
function g() {
    return (0, i.jsx)("div", {
        className: l()(_.tR, m.eS, m.Rw),
        children: (0, i.jsxs)("div", {
            className: l()(m.$K, _.Vd),
            children: [
                (0, i.jsx)("div", { className: m.mO, children: u.intl.string(u.t.H68X9x) }),
                (0, i.jsx)("div", { className: m.GN, children: u.intl.string(u.t.T5Ilmw) }),
            ],
        }),
    });
}
let x = () => {
    let { robloxSubgameHistory: e, overrideExePaths: t } = (0, c.a)(),
        n = (0, a.bG)([r.Ay], () => r.Ay.getVisibleGame());
    return null != n
        ? (0, i.jsx)(
              d.A,
              { rawGame: n, isOverride: t.has(n.exePath), nowPlaying: !0, subgames: n.id === o.a7 ? e : void 0 },
              (0, r.Es)(n),
          )
        : (0, i.jsx)(g, {});
};
