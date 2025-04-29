n.d(t, { Z: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(512722),
    s = n.n(l),
    a = n(481060),
    o = n(313201),
    c = n(584825),
    u = n(723047),
    d = n(727843),
    m = n(290348),
    g = n(518470),
    p = n(22902),
    h = n(783454),
    f = n(388032),
    x = n(301849);
function b() {
    var e;
    let { editStateId: t } = (0, d.N)(),
        [n, l] = m.TT(t),
        [b, j] = m.F2(t),
        _ = (0, c.oC)(t),
        { options: v } = (0, p.Z)(null != (e = null == _ ? void 0 : _.active_trial) ? e : null),
        O = (0, g.Z)(),
        C = null != n,
        y = i.useCallback(
            (e) => {
                let t = v.find((e) => e.isDefault);
                s()(null != t, 'Missing default trial duartion option'), l(e ? t.value : null);
            },
            [l, v]
        ),
        N = (0, u.mY)(),
        I = (0, o.Dt)(),
        E = (0, o.Dt)();
    return (0, r.jsxs)(h.Z, {
        title: f.intl.string(f.t['6antoq']),
        description: f.intl.string(f.t.urVijY),
        children: [
            (0, r.jsx)(a.j7V, {
                onChange: (e, t) => y(e),
                value: C,
                disabled: N,
                hideBorder: !0,
                children: f.intl.string(f.t['+hTmdX'])
            }),
            (0, r.jsxs)(a.hjN, {
                title: f.intl.string(f.t.m1KuWV),
                titleId: I,
                disabled: !C || N,
                children: [
                    (0, r.jsx)(a.R94, {
                        type: a.R94.Types.DESCRIPTION,
                        className: x.formDescription,
                        disabled: !C || N,
                        children: f.intl.string(f.t.NB9NLC)
                    }),
                    (0, r.jsx)(a.LZC, { size: 8 }),
                    (0, r.jsx)(a.q4e, {
                        'aria-labelledby': I,
                        options: v,
                        className: x.formInput,
                        placeholder: f.intl.string(f.t.WZG1BQ),
                        value: n,
                        onChange: l,
                        maxVisibleItems: 5,
                        isDisabled: !C || N,
                        look: a.qQH.CUSTOM
                    })
                ]
            }),
            (0, r.jsx)(a.LZC, { size: 24 }),
            (0, r.jsxs)(a.hjN, {
                title: f.intl.string(f.t['/JD9oa']),
                titleId: E,
                disabled: !C || N,
                children: [
                    (0, r.jsx)(a.R94, {
                        type: a.R94.Types.DESCRIPTION,
                        className: x.formDescription,
                        disabled: !C || N,
                        children: f.intl.string(f.t.Cg5eBg)
                    }),
                    (0, r.jsx)(a.q4e, {
                        'aria-labelledby': E,
                        options: O,
                        className: x.formInput,
                        value: b,
                        onChange: j,
                        maxVisibleItems: 5,
                        isDisabled: !C || N,
                        look: a.qQH.CUSTOM
                    })
                ]
            })
        ]
    });
}
