(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    s = n(481060),
    o = n(313201),
    c = n(584825),
    d = n(723047),
    u = n(727843),
    m = n(290348),
    g = n(518470),
    p = n(22902),
    h = n(783454),
    f = n(388032),
    x = n(301849);
function b() {
    var e;
    let { editStateId: t } = (0, u.N)(),
        [n, l] = m.TT(t),
        [b, j] = m.F2(t),
        v = (0, c.oC)(t),
        { options: _ } = (0, p.Z)(null != (e = null == v ? void 0 : v.active_trial) ? e : null),
        O = (0, g.Z)(),
        y = null != n,
        C = i.useCallback(
            (e) => {
                let t = _.find((e) => e.isDefault);
                (a()(null != t, 'Missing default trial duartion option'), l(e ? t.value : null));
            },
            [l, _]
        ),
        N = (0, d.mY)(),
        I = (0, o.Dt)(),
        E = (0, o.Dt)();
    return (0, r.jsxs)(h.Z, {
        title: f.intl.string(f.t['6antoq']),
        description: f.intl.string(f.t.urVijY),
        children: [
            (0, r.jsx)(s.j7V, {
                onChange: (e, t) => C(e),
                value: y,
                disabled: N,
                hideBorder: !0,
                children: f.intl.string(f.t['+hTmdX'])
            }),
            (0, r.jsxs)(s.hjN, {
                title: f.intl.string(f.t.m1KuWV),
                titleId: I,
                disabled: !y || N,
                children: [
                    (0, r.jsx)(s.R94, {
                        type: s.R94.Types.DESCRIPTION,
                        className: x.formDescription,
                        disabled: !y || N,
                        children: f.intl.string(f.t.NB9NLC)
                    }),
                    (0, r.jsx)(s.LZC, { size: 8 }),
                    (0, r.jsx)(s.q4e, {
                        'aria-labelledby': I,
                        options: _,
                        className: x.formInput,
                        placeholder: f.intl.string(f.t.WZG1BQ),
                        value: n,
                        onChange: l,
                        maxVisibleItems: 5,
                        isDisabled: !y || N,
                        look: s.qQH.CUSTOM
                    })
                ]
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsxs)(s.hjN, {
                title: f.intl.string(f.t['/JD9oa']),
                titleId: E,
                disabled: !y || N,
                children: [
                    (0, r.jsx)(s.R94, {
                        type: s.R94.Types.DESCRIPTION,
                        className: x.formDescription,
                        disabled: !y || N,
                        children: f.intl.string(f.t.Cg5eBg)
                    }),
                    (0, r.jsx)(s.q4e, {
                        'aria-labelledby': E,
                        options: O,
                        className: x.formInput,
                        value: b,
                        onChange: j,
                        maxVisibleItems: 5,
                        isDisabled: !y || N,
                        look: s.qQH.CUSTOM
                    })
                ]
            })
        ]
    });
}
