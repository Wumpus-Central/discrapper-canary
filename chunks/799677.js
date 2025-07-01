i.d(e, { default: () => c });
var n = i(255367);
i(73800);
var a = i(481060),
    l = i(626135),
    s = i(39604),
    r = i(981631),
    d = i(388032),
    o = i(931009);
function c(t) {
    let { transitionState: e, onClose: i, onBeforeDelete: c, onAfterDelete: h, clip: m } = t;
    return (0, n.jsxs)(a.Y0X, {
        size: a.CgR.SMALL,
        transitionState: e,
        className: o.__invalid_modal,
        parentComponent: 'ClipsDeleteModal',
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
                            (0, n.jsx)(a.olH, { onClick: i })
                        ]
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        color: 'text-default',
                        className: o.__invalid_body,
                        children: d.intl.string(d.t.yxCBqq)
                    })
                ]
            }),
            (0, n.jsx)(a.mzw, {
                children: (0, n.jsx)(a.zxk, {
                    color: a.zxk.Colors.RED,
                    onClick: function () {
                        (null == c || c(), s.sS(m.filepath), h(), l.default.track(r.rMx.CLIP_DELETED));
                    },
                    children: d.intl.string(d.t.VRWPDg)
                })
            })
        ]
    });
}
