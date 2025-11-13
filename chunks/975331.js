n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(481060),
    o = n(313201),
    c = n(584825),
    d = n(723047),
    u = n(727843),
    g = n(290348),
    m = n(518470),
    p = n(22902),
    f = n(783454),
    h = n(388032);
function b() {
    var e;
    let { editStateId: t } = (0, u.N)(),
        [n, l] = g.TT(t),
        [b, x] = g.F2(t),
        j = (0, c.oC)(t),
        { options: _ } = (0, p.Z)(null != (e = null == j ? void 0 : j.active_trial) ? e : null),
        v = (0, m.Z)(),
        O = null != n,
        C = i.useCallback(
            (e) => {
                let t = _.find((e) => e.isDefault);
                a()(null != t, "Missing default trial duartion option"), l(e ? t.value : null);
            },
            [l, _],
        ),
        y = (0, d.mY)(),
        N = (0, o.Dt)(),
        E = (0, o.Dt)();
    return (0, r.jsxs)(f.Z, {
        title: h.intl.string(h.t["6anton"]),
        description: h.intl.string(h.t.urVijS),
        children: [
            (0, r.jsx)(s.rsf, {
                label: h.intl.string(h.t["+hTmdb"]),
                checked: O,
                onChange: (e) => C(e),
                disabled: y,
            }),
            (0, r.jsx)(s.q4e, {
                label: h.intl.string(h.t.m1KuWd),
                description: h.intl.string(h.t.NB9NLF),
                "aria-labelledby": N,
                options: _,
                placeholder: h.intl.string(h.t.WZG1BU),
                value: n,
                onChange: l,
                maxVisibleItems: 5,
                isDisabled: !O || y,
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsx)(s.q4e, {
                label: h.intl.string(h.t["/JD9oe"]),
                description: h.intl.string(h.t.Cg5eBm),
                "aria-labelledby": E,
                options: v,
                value: b,
                onChange: x,
                maxVisibleItems: 5,
                isDisabled: !O || y,
            }),
        ],
    });
}
