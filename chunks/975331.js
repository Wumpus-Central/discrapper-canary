n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    s = n(199849),
    o = n(481060),
    c = n(313201),
    d = n(584825),
    u = n(723047),
    g = n(727843),
    f = n(290348),
    m = n(518470),
    b = n(22902),
    p = n(783454),
    h = n(388032);
function x() {
    var e;
    let { editStateId: t } = (0, g.N)(),
        [n, l] = f.TT(t),
        [x, j] = f.F2(t),
        v = (0, d.oC)(t),
        { options: O } = (0, b.Z)(null != (e = null == v ? void 0 : v.active_trial) ? e : null),
        C = (0, m.Z)(),
        y = null != n,
        N = i.useCallback(
            (e) => {
                let t = O.find((e) => e.isDefault);
                a()(null != t, "Missing default trial duartion option"), l(e ? t.value : null);
            },
            [l, O],
        ),
        E = (0, u.mY)(),
        I = (0, c.Dt)(),
        S = (0, c.Dt)();
    return (0, r.jsxs)(p.Z, {
        title: h.intl.string(h.t["6anton"]),
        description: h.intl.string(h.t.urVijS),
        children: [
            (0, r.jsx)(o.rsf, {
                label: h.intl.string(h.t["+hTmdb"]),
                checked: y,
                onChange: (e) => N(e),
                disabled: E,
            }),
            (0, r.jsx)(s.y6, {
                label: h.intl.string(h.t.m1KuWd),
                description: h.intl.string(h.t.NB9NLF),
                "aria-labelledby": I,
                options: O,
                placeholder: h.intl.string(h.t.WZG1BU),
                value: n,
                onChange: l,
                maxVisibleItems: 5,
                isDisabled: !y || E,
            }),
            (0, r.jsx)(o.LZC, { size: 24 }),
            (0, r.jsx)(s.y6, {
                label: h.intl.string(h.t["/JD9oe"]),
                description: h.intl.string(h.t.Cg5eBm),
                "aria-labelledby": S,
                options: C,
                value: x,
                onChange: j,
                maxVisibleItems: 5,
                isDisabled: !y || E,
            }),
        ],
    });
}
