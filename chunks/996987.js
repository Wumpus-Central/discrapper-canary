n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(600164),
    o = n(313201),
    a = n(63063),
    s = n(453628),
    c = n(388032),
    d = n(20493);
function u(e) {
    let { value: t, onChange: n, children: u, note: p, helpdeskArticleId: m, style: b, disabled: g = !1, hideBorder: f = !1, className: h = d.marginBottom20 } = e,
        x = (0, o.Dt)();
    return (0, r.jsxs)(l.Z, {
        style: b,
        className: h,
        direction: l.Z.Direction.VERTICAL,
        children: [
            (0, r.jsxs)(l.Z, {
                children: [
                    (0, r.jsx)(l.Z.Child, {
                        children: (0, r.jsx)(i.vwX, {
                            id: x,
                            className: d.marginReset,
                            tag: i.RB0.H3,
                            disabled: g,
                            children: u
                        })
                    }),
                    (0, r.jsx)(l.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, r.jsx)(s.Z, {
                            value: t,
                            onChange: n,
                            disabled: g,
                            labelledBy: x
                        })
                    })
                ]
            }),
            null != p &&
                (0, r.jsx)(l.Z.Child, {
                    className: d.marginTop4,
                    children: (0, r.jsx)(i.R94, {
                        type: i.geA.DESCRIPTION,
                        children: p
                    })
                }),
            null != m &&
                (0, r.jsx)(l.Z.Child, {
                    className: d.marginTop4,
                    children: (0, r.jsx)(i.R94, {
                        disabled: g,
                        type: i.geA.DESCRIPTION,
                        children: (0, r.jsx)(i.eee, {
                            href: a.Z.getArticleURL(m),
                            children: c.NW.string(c.t.hvVgAQ)
                        })
                    })
                }),
            !f &&
                (0, r.jsx)(l.Z.Child, {
                    className: d.marginTop20,
                    children: (0, r.jsx)(i.$i$, {})
                })
        ]
    });
}
s.Z.Types, (u.Types = s.Z.Types);
