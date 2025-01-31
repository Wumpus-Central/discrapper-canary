s.d(e, { default: () => d });
var i = s(200651);
s(192379);
var n = s(481060),
    a = s(118012),
    l = s(313201),
    c = s(388032),
    o = s(235661),
    r = s(462991);
function d(t) {
    let { onClose: e, transitionState: s, kind: d } = t,
        u = (0, l.Dt)();
    return (0, i.jsxs)(n.Y0X, {
        transitionState: s,
        'aria-labelledby': u,
        size: n.CgR.SMALL,
        children: [
            (0, i.jsxs)(n.hzk, {
                className: o.content,
                children: [
                    (0, i.jsx)(n.olH, {
                        className: o.closeButton,
                        onClick: e
                    }),
                    (0, i.jsx)('img', {
                        className: o.image,
                        src: r,
                        alt: ''
                    }),
                    (0, i.jsx)(a.Z, {
                        className: o.title,
                        id: u,
                        size: a.Z.Sizes.SIZE_24,
                        color: a.Z.Colors.HEADER_PRIMARY,
                        children: c.intl.string(c.t.r0DLNj)
                    }),
                    (0, i.jsx)(n.Text, {
                        className: o.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: 'user' === d ? c.intl.string(c.t.Fqqbho) : c.intl.string(c.t['6Y0JlJ'])
                    })
                ]
            }),
            (0, i.jsx)(n.mzw, {
                children: (0, i.jsx)(n.zxk, {
                    className: o.button,
                    color: n.zxk.Colors.BRAND,
                    onClick: e,
                    size: n.zxk.Sizes.LARGE,
                    children: c.intl.string(c.t.BddRzc)
                })
            })
        ]
    });
}
