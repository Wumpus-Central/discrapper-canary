n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
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
    f = n(83701);
function C() {
    var e;
    let { editStateId: t } = (0, u.N)(),
        [n, l] = m.TT(t),
        [C, v] = m.F2(t),
        N = (0, c.oC)(t),
        { options: _ } = (0, g.Z)(null !== (e = null == N ? void 0 : N.active_trial) && void 0 !== e ? e : null),
        I = (0, h.Z)(),
        T = null != n,
        j = r.useCallback(
            (e) => {
                let t = _.find((e) => e.isDefault);
                s()(null != t, 'Missing default trial duartion option'), l(e ? t.value : null);
            },
            [l, _]
        ),
        b = (0, d.mY)(),
        E = (0, o.Dt)(),
        S = (0, o.Dt)();
    return (0, i.jsxs)(x.Z, {
        title: p.intl.string(p.t['6antoq']),
        description: p.intl.string(p.t.urVijY),
        children: [
            (0, i.jsx)(a.FormSwitch, {
                onChange: (e, t) => j(e),
                value: T,
                disabled: b,
                hideBorder: !0,
                children: p.intl.string(p.t['+hTmdX'])
            }),
            (0, i.jsxs)(a.FormSection, {
                title: p.intl.string(p.t.m1KuWV),
                titleId: E,
                disabled: !T || b,
                children: [
                    (0, i.jsx)(a.FormText, {
                        type: a.FormText.Types.DESCRIPTION,
                        className: f.formDescription,
                        disabled: !T || b,
                        children: p.intl.string(p.t.NB9NLC)
                    }),
                    (0, i.jsx)(a.Spacer, { size: 8 }),
                    (0, i.jsx)(a.SingleSelect, {
                        'aria-labelledby': E,
                        options: _,
                        className: f.formInput,
                        placeholder: p.intl.string(p.t.WZG1BQ),
                        value: n,
                        onChange: l,
                        maxVisibleItems: 5,
                        isDisabled: !T || b,
                        look: a.SelectLooks.CUSTOM
                    })
                ]
            }),
            (0, i.jsx)(a.Spacer, { size: 24 }),
            (0, i.jsxs)(a.FormSection, {
                title: p.intl.string(p.t['/JD9oa']),
                titleId: S,
                disabled: !T || b,
                children: [
                    (0, i.jsx)(a.FormText, {
                        type: a.FormText.Types.DESCRIPTION,
                        className: f.formDescription,
                        disabled: !T || b,
                        children: p.intl.string(p.t.Cg5eBg)
                    }),
                    (0, i.jsx)(a.SingleSelect, {
                        'aria-labelledby': S,
                        options: I,
                        className: f.formInput,
                        value: C,
                        onChange: v,
                        maxVisibleItems: 5,
                        isDisabled: !T || b,
                        look: a.SelectLooks.CUSTOM
                    })
                ]
            })
        ]
    });
}
