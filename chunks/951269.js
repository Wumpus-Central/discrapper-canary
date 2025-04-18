s.d(e, { default: () => d });
var a = s(200651);
s(192379);
var i = s(481060),
    n = s(118012),
    c = s(313201),
    l = s(388032),
    o = s(701675),
    r = s(559325);
function d(t) {
    let { onClose: e, transitionState: s, kind: d } = t,
        u = (0, c.Dt)();
    return (0, a.jsxs)(i.Y0X, {
        transitionState: s,
        'aria-labelledby': u,
        size: i.CgR.SMALL,
        children: [
            (0, a.jsxs)(i.hzk, {
                className: o.content,
                children: [
                    (0, a.jsx)(i.olH, {
                        className: o.closeButton,
                        onClick: e
                    }),
                    (0, a.jsx)('img', {
                        className: o.image,
                        src: r,
                        alt: ''
                    }),
                    (0, a.jsx)(n.Z, {
                        className: o.title,
                        id: u,
                        size: n.Z.Sizes.SIZE_24,
                        color: n.Z.Colors.HEADER_PRIMARY,
                        children: l.NW.string(l.t.r0DLNj)
                    }),
                    (0, a.jsx)(i.Text, {
                        className: o.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: 'user' === d ? l.NW.string(l.t.Fqqbho) : l.NW.string(l.t['6Y0JlJ'])
                    })
                ]
            }),
            (0, a.jsx)(i.mzw, {
                children: (0, a.jsx)(i.zxk, {
                    className: o.button,
                    color: i.zxk.Colors.BRAND,
                    onClick: e,
                    size: i.zxk.Sizes.LARGE,
                    children: l.NW.string(l.t.BddRzc)
                })
            })
        ]
    });
}
