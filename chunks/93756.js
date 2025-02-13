t.d(i, { default: () => r });
var l = t(200651);
t(192379);
var s = t(481060),
    a = t(174767),
    o = t(388032),
    e = t(819274);
function r(n) {
    let { transitionState: i, onClose: t, onDelete: r } = n;
    async function d() {
        await (0, a.TG)(), r();
    }
    return (0, l.jsxs)(s.Y0X, {
        size: s.CgR.SMALL,
        transitionState: i,
        className: e.__invalid_modal,
        children: [
            (0, l.jsxs)(s.hzk, {
                className: e.modalContent,
                children: [
                    (0, l.jsxs)('div', {
                        className: e.header,
                        children: [
                            (0, l.jsx)(s.X6q, {
                                className: e.__invalid_title,
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                children: o.intl.string(o.t.P8nDIC)
                            }),
                            (0, l.jsx)(s.olH, { onClick: t })
                        ]
                    }),
                    (0, l.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'text-normal',
                        className: e.__invalid_body,
                        children: o.intl.string(o.t.fwFcj4)
                    })
                ]
            }),
            (0, l.jsxs)(s.mzw, {
                children: [
                    (0, l.jsx)(s.zxk, {
                        color: s.zxk.Colors.RED,
                        onClick: d,
                        children: o.intl.string(o.t['5I4fSk'])
                    }),
                    (0, l.jsx)(s.zxk, {
                        look: s.zxk.Looks.LINK,
                        color: s.zxk.Colors.PRIMARY,
                        onClick: t,
                        children: o.intl.string(o.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
