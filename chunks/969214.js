e.d(a, { default: () => r });
var n = e(255367);
e(73800);
var s = e(481060),
    o = e(388032),
    i = e(146958);
function r(t) {
    let { transitionState: a, onClose: r } = t;
    return (0, n.jsxs)(s.Y0X, {
        className: i.modal,
        transitionState: a,
        size: s.CgR.SMALL,
        parentComponent: 'AutomodRaidFalseAlarmConfirmationModal',
        children: [
            (0, n.jsx)('img', {
                'aria-hidden': !0,
                alt: '',
                src: e(762528),
                className: i.image
            }),
            (0, n.jsxs)(s.hzk, {
                className: i.content,
                children: [
                    (0, n.jsx)(s.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: i.text,
                        children: o.intl.string(o.t.pAzfrq)
                    }),
                    (0, n.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: i.text,
                        children: o.intl.string(o.t.oxowND)
                    }),
                    (0, n.jsx)(s.zxk, {
                        onClick: r,
                        color: s.zxk.Colors.BRAND,
                        look: s.zxk.Looks.FILLED,
                        children: o.intl.string(o.t.o3ZlOD)
                    })
                ]
            })
        ]
    });
}
