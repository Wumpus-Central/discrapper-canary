a.d(s, { default: () => r });
var i = a(200651);
a(192379);
var o = a(481060),
    t = a(174767),
    e = a(388032),
    l = a(105195);
function r(n) {
    let { transitionState: s, onClose: a, onDelete: r } = n;
    async function d() {
        await (0, t.TG)(), r();
    }
    return (0, i.jsxs)(o.Y0X, {
        size: o.CgR.SMALL,
        transitionState: s,
        className: l.__invalid_modal,
        children: [
            (0, i.jsxs)(o.hzk, {
                className: l.modalContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: l.header,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                className: l.__invalid_title,
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                children: e.NW.string(e.t.P8nDIC)
                            }),
                            (0, i.jsx)(o.olH, { onClick: a })
                        ]
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'text-normal',
                        className: l.__invalid_body,
                        children: e.NW.string(e.t.fwFcj4)
                    })
                ]
            }),
            (0, i.jsxs)(o.mzw, {
                children: [
                    (0, i.jsx)(o.zxk, {
                        color: o.zxk.Colors.RED,
                        onClick: d,
                        children: e.NW.string(e.t['5I4fSk'])
                    }),
                    (0, i.jsx)(o.zxk, {
                        look: o.zxk.Looks.LINK,
                        color: o.zxk.Colors.PRIMARY,
                        onClick: a,
                        children: e.NW.string(e.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
