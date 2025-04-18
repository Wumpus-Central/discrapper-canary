s.d(e, { default: () => i });
var a = s(200651);
s(192379);
var n = s(481060),
    o = s(388032),
    r = s(146958);
function i(t) {
    let { transitionState: e, onClose: i } = t;
    return (0, a.jsxs)(n.Y0X, {
        className: r.modal,
        transitionState: e,
        size: n.CgR.SMALL,
        children: [
            (0, a.jsx)('img', {
                'aria-hidden': !0,
                alt: '',
                src: s(762528),
                className: r.image
            }),
            (0, a.jsxs)(n.hzk, {
                className: r.content,
                children: [
                    (0, a.jsx)(n.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: r.text,
                        children: o.NW.string(o.t.pAzfrq)
                    }),
                    (0, a.jsx)(n.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: r.text,
                        children: o.NW.string(o.t.oxowND)
                    }),
                    (0, a.jsx)(n.zxk, {
                        onClick: i,
                        color: n.zxk.Colors.BRAND,
                        look: n.zxk.Looks.FILLED,
                        children: o.NW.string(o.t.o3ZlOD)
                    })
                ]
            })
        ]
    });
}
