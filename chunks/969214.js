e.d(a, { default: () => o });
var n = e(255367);
e(73800);
var s = e(481060),
    i = e(388032),
    r = e(146958);
function o(t) {
    let { transitionState: a, onClose: o } = t;
    return (0, n.jsxs)(s.Y0X, {
        className: r.modal,
        transitionState: a,
        size: s.CgR.SMALL,
        parentComponent: 'AutomodRaidFalseAlarmConfirmationModal',
        children: [
            (0, n.jsx)('img', {
                'aria-hidden': !0,
                alt: '',
                src: e(762528),
                className: r.image
            }),
            (0, n.jsxs)(s.hzk, {
                className: r.content,
                children: [
                    (0, n.jsx)(s.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: r.text,
                        children: i.intl.string(i.t.pAzfrq)
                    }),
                    (0, n.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: r.text,
                        children: i.intl.string(i.t.oxowND)
                    }),
                    (0, n.jsx)(s.zxk, {
                        variant: 'primary',
                        text: i.intl.string(i.t.o3ZlOD),
                        onClick: o
                    })
                ]
            })
        ]
    });
}
