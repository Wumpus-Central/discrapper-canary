e.d(n, { default: () => d });
var i = e(255367);
e(73800);
var a = e(481060),
    s = e(174767),
    r = e(388032),
    l = e(105195);
function d(t) {
    let { transitionState: n, onClose: e, onDelete: d } = t;
    async function o() {
        (await (0, s.TG)(), d());
    }
    return (0, i.jsxs)(a.Y0X, {
        size: a.CgR.SMALL,
        transitionState: n,
        className: l.__invalid_modal,
        parentComponent: 'GameInvitesDeleteModal',
        children: [
            (0, i.jsxs)(a.hzk, {
                className: l.modalContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: l.header,
                        children: [
                            (0, i.jsx)(a.X6q, {
                                className: l.__invalid_title,
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                children: r.intl.string(r.t.P8nDIC)
                            }),
                            (0, i.jsx)(a.olH, { onClick: e })
                        ]
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'text-default',
                        className: l.__invalid_body,
                        children: r.intl.string(r.t.fwFcj4)
                    })
                ]
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsxs)(a.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, i.jsx)(a.zxk, {
                            variant: 'critical-primary',
                            text: r.intl.string(r.t['5I4fSk']),
                            onClick: o
                        }),
                        (0, i.jsx)(a.zxk, {
                            variant: 'secondary',
                            text: r.intl.string(r.t['ETE/oK']),
                            onClick: e
                        })
                    ]
                })
            })
        ]
    });
}
