e.d(i, { default: () => c });
var n = e(200651);
e(192379);
var a = e(481060),
    l = e(626135),
    s = e(39604),
    r = e(981631),
    d = e(388032),
    o = e(233850);
function c(t) {
    let { transitionState: i, onClose: e, onBeforeDelete: c, onAfterDelete: h, clip: m } = t;
    return (0, n.jsxs)(a.Y0X, {
        size: a.CgR.SMALL,
        transitionState: i,
        className: o.__invalid_modal,
        children: [
            (0, n.jsxs)(a.hzk, {
                className: o.modalContent,
                children: [
                    (0, n.jsxs)('div', {
                        className: o.header,
                        children: [
                            (0, n.jsx)(a.X6q, {
                                className: o.__invalid_title,
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: d.intl.string(d.t.Lzhui4)
                            }),
                            (0, n.jsx)(a.olH, { onClick: e })
                        ]
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        color: 'text-normal',
                        className: o.__invalid_body,
                        children: d.intl.string(d.t.yxCBqq)
                    })
                ]
            }),
            (0, n.jsx)(a.mzw, {
                children: (0, n.jsx)(a.zxk, {
                    color: a.zxk.Colors.RED,
                    onClick: function () {
                        null == c || c(), s.sS(m.filepath), h(), l.default.track(r.rMx.CLIP_DELETED);
                    },
                    children: d.intl.string(d.t.VRWPDg)
                })
            })
        ]
    });
}
