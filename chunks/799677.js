n.d(e, { default: () => c });
var i = n(255367);
n(73800);
var a = n(481060),
    l = n(626135),
    s = n(39604),
    r = n(981631),
    d = n(388032),
    o = n(931009);
function c(t) {
    let { transitionState: e, onClose: n, onBeforeDelete: c, onAfterDelete: h, clip: m } = t;
    return (0, i.jsxs)(a.Y0X, {
        size: a.CgR.SMALL,
        transitionState: e,
        className: o.__invalid_modal,
        parentComponent: 'ClipsDeleteModal',
        children: [
            (0, i.jsxs)(a.hzk, {
                className: o.modalContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: o.header,
                        children: [
                            (0, i.jsx)(a.X6q, {
                                className: o.__invalid_title,
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: d.intl.string(d.t.Lzhui4)
                            }),
                            (0, i.jsx)(a.olH, { onClick: n })
                        ]
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        color: 'text-normal',
                        className: o.__invalid_body,
                        children: d.intl.string(d.t.yxCBqq)
                    })
                ]
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsx)(a.zxk, {
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
