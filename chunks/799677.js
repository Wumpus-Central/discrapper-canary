i.d(e, { default: () => o });
var a = i(255367);
i(73800);
var n = i(481060),
    l = i(626135),
    s = i(39604),
    r = i(981631),
    d = i(388032),
    c = i(931009);
function o(t) {
    let { transitionState: e, onClose: i, onBeforeDelete: o, onAfterDelete: h, clip: m } = t;
    return (0, a.jsxs)(n.Y0X, {
        size: n.CgR.SMALL,
        transitionState: e,
        className: c.__invalid_modal,
        parentComponent: 'ClipsDeleteModal',
        children: [
            (0, a.jsxs)(n.hzk, {
                className: c.modalContent,
                children: [
                    (0, a.jsxs)('div', {
                        className: c.header,
                        children: [
                            (0, a.jsx)(n.X6q, {
                                className: c.__invalid_title,
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: d.intl.string(d.t.Lzhui4)
                            }),
                            (0, a.jsx)(n.olH, { onClick: i })
                        ]
                    }),
                    (0, a.jsx)(n.Text, {
                        variant: 'text-md/medium',
                        color: 'text-default',
                        className: c.__invalid_body,
                        children: d.intl.string(d.t.yxCBqq)
                    })
                ]
            }),
            (0, a.jsx)(n.mzw, {
                children: (0, a.jsx)(n.zxk, {
                    variant: 'critical-primary',
                    text: d.intl.string(d.t.VRWPDg),
                    onClick: function () {
                        (null == o || o(), s.sS(m.filepath), h(), l.default.track(r.rMx.CLIP_DELETED));
                    }
                })
            })
        ]
    });
}
