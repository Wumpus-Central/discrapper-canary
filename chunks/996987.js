n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(600164),
    a = n(313201),
    o = n(63063),
    s = n(453628),
    d = n(388032),
    c = n(275477);
function u(e) {
    let { value: t, onChange: n, children: u, note: m, helpdeskArticleId: h, style: p, disabled: g = !1, hideBorder: x = !1, className: f = c.marginBottom20 } = e,
        b = (0, a.Dt)();
    return (0, i.jsxs)(r.Z, {
        style: p,
        className: f,
        direction: r.Z.Direction.VERTICAL,
        children: [
            (0, i.jsxs)(r.Z, {
                children: [
                    (0, i.jsx)(r.Z.Child, {
                        children: (0, i.jsx)(l.FormTitle, {
                            id: b,
                            className: c.marginReset,
                            tag: l.FormTitleTags.H3,
                            disabled: g,
                            children: u
                        })
                    }),
                    (0, i.jsx)(r.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(s.Z, {
                            value: t,
                            onChange: n,
                            disabled: g,
                            labelledBy: b
                        })
                    })
                ]
            }),
            null != m &&
                (0, i.jsx)(r.Z.Child, {
                    className: c.marginTop4,
                    children: (0, i.jsx)(l.FormText, {
                        type: l.FormTextTypes.DESCRIPTION,
                        children: m
                    })
                }),
            null != h &&
                (0, i.jsx)(r.Z.Child, {
                    className: c.marginTop4,
                    children: (0, i.jsx)(l.FormText, {
                        disabled: g,
                        type: l.FormTextTypes.DESCRIPTION,
                        children: (0, i.jsx)(l.Anchor, {
                            href: o.Z.getArticleURL(h),
                            children: d.intl.string(d.t.hvVgAQ)
                        })
                    })
                }),
            !x &&
                (0, i.jsx)(r.Z.Child, {
                    className: c.marginTop20,
                    children: (0, i.jsx)(l.FormDivider, {})
                })
        ]
    });
}
s.Z.Types, (u.Types = s.Z.Types);
