n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(481060),
    o = n(313201),
    c = n(584825),
    d = n(723047),
    u = n(727843),
    m = n(290348),
    h = n(518470),
    g = n(22902),
    x = n(783454),
    p = n(388032),
    _ = n(83701);
function C() {
    var e;
    let { editStateId: t } = (0, u.N)(),
        [n, l] = m.TT(t),
        [C, f] = m.F2(t),
        v = (0, c.oC)(t),
        { options: N } = (0, g.Z)(null !== (e = null == v ? void 0 : v.active_trial) && void 0 !== e ? e : null),
        j = (0, h.Z)(),
        I = null != n,
        E = r.useCallback(
            (e) => {
                let t = N.find((e) => e.isDefault);
                s()(null != t, 'Missing default trial duartion option'), l(e ? t.value : null);
            },
            [l, N]
        ),
        b = (0, d.mY)(),
        T = (0, o.Dt)(),
        S = (0, o.Dt)();
    return (0, i.jsxs)(x.Z, {
        title: p.intl.string(p.t['6antoq']),
        description: p.intl.string(p.t.urVijY),
        children: [
            (0, i.jsx)(a.j7V, {
                onChange: (e, t) => E(e),
                value: I,
                disabled: b,
                hideBorder: !0,
                children: p.intl.string(p.t['+hTmdX'])
            }),
            (0, i.jsxs)(a.hjN, {
                title: p.intl.string(p.t.m1KuWV),
                titleId: T,
                disabled: !I || b,
                children: [
                    (0, i.jsx)(a.R94, {
                        type: a.R94.Types.DESCRIPTION,
                        className: _.formDescription,
                        disabled: !I || b,
                        children: p.intl.string(p.t.NB9NLC)
                    }),
                    (0, i.jsx)(a.LZC, { size: 8 }),
                    (0, i.jsx)(a.q4e, {
                        'aria-labelledby': T,
                        options: N,
                        className: _.formInput,
                        placeholder: p.intl.string(p.t.WZG1BQ),
                        value: n,
                        onChange: l,
                        maxVisibleItems: 5,
                        isDisabled: !I || b,
                        look: a.qQH.CUSTOM
                    })
                ]
            }),
            (0, i.jsx)(a.LZC, { size: 24 }),
            (0, i.jsxs)(a.hjN, {
                title: p.intl.string(p.t['/JD9oa']),
                titleId: S,
                disabled: !I || b,
                children: [
                    (0, i.jsx)(a.R94, {
                        type: a.R94.Types.DESCRIPTION,
                        className: _.formDescription,
                        disabled: !I || b,
                        children: p.intl.string(p.t.Cg5eBg)
                    }),
                    (0, i.jsx)(a.q4e, {
                        'aria-labelledby': S,
                        options: j,
                        className: _.formInput,
                        value: C,
                        onChange: f,
                        maxVisibleItems: 5,
                        isDisabled: !I || b,
                        look: a.qQH.CUSTOM
                    })
                ]
            })
        ]
    });
}
