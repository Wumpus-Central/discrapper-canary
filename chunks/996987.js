n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(600164),
    r = n(313201),
    s = n(63063),
    o = n(453628),
    d = n(388032),
    c = n(232186);
function u(e) {
    let { value: t, onChange: n, children: u, note: m, helpdeskArticleId: h, style: x, disabled: p = !1, hideBorder: g = !1, className: f = c.marginBottom20 } = e,
        b = (0, r.Dt)();
    return (0, i.jsxs)(a.Z, {
        style: x,
        className: f,
        direction: a.Z.Direction.VERTICAL,
        children: [
            (0, i.jsxs)(a.Z, {
                children: [
                    (0, i.jsx)(a.Z.Child, {
                        children: (0, i.jsx)(l.vwX, {
                            id: b,
                            className: c.marginReset,
                            tag: l.RB0.H3,
                            disabled: p,
                            children: u
                        })
                    }),
                    (0, i.jsx)(a.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(o.Z, {
                            value: t,
                            onChange: n,
                            disabled: p,
                            labelledBy: b
                        })
                    })
                ]
            }),
            null != m &&
                (0, i.jsx)(a.Z.Child, {
                    className: c.marginTop4,
                    children: (0, i.jsx)(l.R94, {
                        type: l.geA.DESCRIPTION,
                        children: m
                    })
                }),
            null != h &&
                (0, i.jsx)(a.Z.Child, {
                    className: c.marginTop4,
                    children: (0, i.jsx)(l.R94, {
                        disabled: p,
                        type: l.geA.DESCRIPTION,
                        children: (0, i.jsx)(l.eee, {
                            href: s.Z.getArticleURL(h),
                            children: d.intl.string(d.t.hvVgAQ)
                        })
                    })
                }),
            !g &&
                (0, i.jsx)(a.Z.Child, {
                    className: c.marginTop20,
                    children: (0, i.jsx)(l.$i$, {})
                })
        ]
    });
}
o.Z.Types, (u.Types = o.Z.Types);
