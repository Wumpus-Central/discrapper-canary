s.d(e, { default: () => d });
var n = s(255367);
s(73800);
var a = s(755721),
    i = s(481060),
    l = s(313201),
    o = s(388032),
    c = s(701675),
    r = s(559325);
function d(t) {
    let { onClose: e, transitionState: s, kind: d } = t,
        u = (0, l.Dt)();
    return (0, n.jsxs)(i.Y0X, {
        transitionState: s,
        'aria-labelledby': u,
        size: i.CgR.SMALL,
        parentComponent: 'InaccessibleLinkModal',
        children: [
            (0, n.jsxs)(i.hzk, {
                className: c.content,
                children: [
                    (0, n.jsx)(i.olH, {
                        className: c.closeButton,
                        onClick: e
                    }),
                    (0, n.jsx)('img', {
                        className: c.image,
                        src: r,
                        alt: ''
                    }),
                    (0, n.jsx)(i.X6q, {
                        id: u,
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: o.intl.string(o.t.r0DLNj)
                    }),
                    (0, n.jsx)(i.Text, {
                        className: c.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: 'user' === d ? o.intl.string(o.t.Fqqbho) : o.intl.string(o.t['6Y0JlJ'])
                    })
                ]
            }),
            (0, n.jsx)(i.mzw, {
                children: (0, n.jsx)(a.zx, {
                    className: c.button,
                    color: a.zx.Colors.BRAND,
                    onClick: e,
                    size: a.zx.Sizes.LARGE,
                    children: o.intl.string(o.t.BddRzc)
                })
            })
        ]
    });
}
