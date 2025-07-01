s.d(e, { default: () => r });
var n = s(255367);
s(73800);
var a = s(481060),
    i = s(313201),
    l = s(388032),
    o = s(701675),
    c = s(559325);
function r(t) {
    let { onClose: e, transitionState: s, kind: r } = t,
        d = (0, i.Dt)();
    return (0, n.jsxs)(a.Y0X, {
        transitionState: s,
        'aria-labelledby': d,
        size: a.CgR.SMALL,
        parentComponent: 'InaccessibleLinkModal',
        children: [
            (0, n.jsxs)(a.hzk, {
                className: o.content,
                children: [
                    (0, n.jsx)(a.olH, {
                        className: o.closeButton,
                        onClick: e
                    }),
                    (0, n.jsx)('img', {
                        className: o.image,
                        src: c,
                        alt: ''
                    }),
                    (0, n.jsx)(a.X6q, {
                        id: d,
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: l.intl.string(l.t.r0DLNj)
                    }),
                    (0, n.jsx)(a.Text, {
                        className: o.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: 'user' === r ? l.intl.string(l.t.Fqqbho) : l.intl.string(l.t['6Y0JlJ'])
                    })
                ]
            }),
            (0, n.jsx)(a.mzw, {
                children: (0, n.jsx)(a.zxk, {
                    className: o.button,
                    color: a.zxk.Colors.BRAND,
                    onClick: e,
                    size: a.zxk.Sizes.LARGE,
                    children: l.intl.string(l.t.BddRzc)
                })
            })
        ]
    });
}
