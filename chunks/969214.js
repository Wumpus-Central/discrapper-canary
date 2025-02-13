s.d(e, { default: () => r });
var a = s(200651);
s(192379);
var n = s(481060),
    i = s(388032),
    o = s(158523);
function r(t) {
    let { transitionState: e, onClose: r } = t;
    return (0, a.jsxs)(n.Y0X, {
        className: o.modal,
        transitionState: e,
        size: n.CgR.SMALL,
        children: [
            (0, a.jsx)('img', {
                'aria-hidden': !0,
                alt: '',
                src: s(762528),
                className: o.image
            }),
            (0, a.jsxs)(n.hzk, {
                className: o.content,
                children: [
                    (0, a.jsx)(n.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: o.text,
                        children: i.intl.string(i.t.pAzfrq)
                    }),
                    (0, a.jsx)(n.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: o.text,
                        children: i.intl.string(i.t.oxowND)
                    }),
                    (0, a.jsx)(n.zxk, {
                        onClick: r,
                        color: n.zxk.Colors.BRAND,
                        look: n.zxk.Looks.FILLED,
                        children: i.intl.string(i.t.o3ZlOD)
                    })
                ]
            })
        ]
    });
}
