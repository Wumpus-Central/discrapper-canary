n.d(t, { Z: () => b }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    l = n.n(s),
    a = n(481060),
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
        [n, s] = m.TT(t),
        [b, j] = m.F2(t),
        N = (0, c.oC)(t),
        { options: _ } = (0, p.Z)(null != (e = null == N ? void 0 : N.active_trial) ? e : null),
        v = (0, g.Z)(),
        O = null != n,
        C = i.useCallback(
            (e) => {
                let t = _.find((e) => e.isDefault);
                l()(null != t, 'Missing default trial duartion option'), s(e ? t.value : null);
            },
            [s, _]
        ),
        y = (0, d.mY)(),
        I = (0, o.Dt)(),
        E = (0, o.Dt)();
    return (0, r.jsxs)(h.Z, {
        title: f.NW.string(f.t['6antoq']),
        description: f.NW.string(f.t.urVijY),
        children: [
            (0, r.jsx)(a.j7V, {
                onChange: (e, t) => C(e),
                value: O,
                disabled: y,
                hideBorder: !0,
                children: f.NW.string(f.t['+hTmdX'])
            }),
            (0, r.jsxs)(a.hjN, {
                title: f.NW.string(f.t.m1KuWV),
                titleId: I,
                disabled: !O || y,
                children: [
                    (0, r.jsx)(a.R94, {
                        type: a.R94.Types.DESCRIPTION,
                        className: x.formDescription,
                        disabled: !O || y,
                        children: f.NW.string(f.t.NB9NLC)
                    }),
                    (0, r.jsx)(a.LZC, { size: 8 }),
                    (0, r.jsx)(a.q4e, {
                        'aria-labelledby': I,
                        options: _,
                        className: x.formInput,
                        placeholder: f.NW.string(f.t.WZG1BQ),
                        value: n,
                        onChange: s,
                        maxVisibleItems: 5,
                        isDisabled: !O || y,
                        look: a.qQH.CUSTOM
                    })
                ]
            }),
            (0, r.jsx)(a.LZC, { size: 24 }),
            (0, r.jsxs)(a.hjN, {
                title: f.NW.string(f.t['/JD9oa']),
                titleId: E,
                disabled: !O || y,
                children: [
                    (0, r.jsx)(a.R94, {
                        type: a.R94.Types.DESCRIPTION,
                        className: x.formDescription,
                        disabled: !O || y,
                        children: f.NW.string(f.t.Cg5eBg)
                    }),
                    (0, r.jsx)(a.q4e, {
                        'aria-labelledby': E,
                        options: v,
                        className: x.formInput,
                        value: b,
                        onChange: j,
                        maxVisibleItems: 5,
                        isDisabled: !O || y,
                        look: a.qQH.CUSTOM
                    })
                ]
            })
        ]
    });
}
