e.d(t, { default: () => r });
var i = e(255367);
e(73800);
var a = e(481060),
    l = e(174767),
    s = e(388032),
    o = e(105195);
function r(n) {
    let { transitionState: t, onClose: e, onDelete: r } = n;
    async function d() {
        await (0, l.TG)(), r();
    }
    return (0, i.jsxs)(a.Y0X, {
        size: a.CgR.SMALL,
        transitionState: t,
        className: o.__invalid_modal,
        parentComponent: 'GameInvitesDeleteModal',
        children: [
            (0, i.jsxs)(a.hzk, {
                className: o.modalContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: o.header,
                        children: [
                            (0, i.jsx)(a.X6q, {
                                className: o.__invalid_title,
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                children: s.intl.string(s.t.P8nDIC)
                            }),
                            (0, i.jsx)(a.olH, { onClick: e })
                        ]
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'text-default',
                        className: o.__invalid_body,
                        children: s.intl.string(s.t.fwFcj4)
                    })
                ]
            }),
            (0, i.jsxs)(a.mzw, {
                children: [
                    (0, i.jsx)(a.zxk, {
                        color: a.zxk.Colors.RED,
                        onClick: d,
                        children: s.intl.string(s.t['5I4fSk'])
                    }),
                    (0, i.jsx)(a.zxk, {
                        look: a.zxk.Looks.LINK,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: e,
                        children: s.intl.string(s.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
