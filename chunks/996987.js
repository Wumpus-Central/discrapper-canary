n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(600164),
    r = n(313201),
    s = n(63063),
    o = n(453628),
    d = n(388032),
    c = n(483938);
function u(e) {
    let { value: t, onChange: n, children: u, note: m, helpdeskArticleId: h, style: x, disabled: g = !1, hideBorder: p = !1, className: b = c.marginBottom20 } = e,
        _ = (0, r.Dt)();
    return (0, i.jsxs)(a.Z, {
        style: x,
        className: b,
        direction: a.Z.Direction.VERTICAL,
        children: [
            (0, i.jsxs)(a.Z, {
                children: [
                    (0, i.jsx)(a.Z.Child, {
                        children: (0, i.jsx)(l.vwX, {
                            id: _,
                            className: c.marginReset,
                            tag: l.RB0.H3,
                            disabled: g,
                            children: u
                        })
                    }),
                    (0, i.jsx)(a.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(o.Z, {
                            value: t,
                            onChange: n,
                            disabled: g,
                            labelledBy: _
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
                        disabled: g,
                        type: l.geA.DESCRIPTION,
                        children: (0, i.jsx)(l.eee, {
                            href: s.Z.getArticleURL(h),
                            children: d.intl.string(d.t.hvVgAQ)
                        })
                    })
                }),
            !p &&
                (0, i.jsx)(a.Z.Child, {
                    className: c.marginTop20,
                    children: (0, i.jsx)(l.$i$, {})
                })
        ]
    });
}
o.Z.Types, (u.Types = o.Z.Types);
