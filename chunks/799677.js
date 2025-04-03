a.d(e, { default: () => c });
var i = a(200651);
a(192379);
var n = a(481060),
    s = a(626135),
    l = a(39604),
    r = a(981631),
    d = a(388032),
    o = a(931009);
function c(t) {
    let { transitionState: e, onClose: a, onBeforeDelete: c, onAfterDelete: h, clip: m } = t;
    return (0, i.jsxs)(n.Y0X, {
        size: n.CgR.SMALL,
        transitionState: e,
        className: o.__invalid_modal,
        children: [
            (0, i.jsxs)(n.hzk, {
                className: o.modalContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: o.header,
                        children: [
                            (0, i.jsx)(n.X6q, {
                                className: o.__invalid_title,
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: d.NW.string(d.t.Lzhui4)
                            }),
                            (0, i.jsx)(n.olH, { onClick: a })
                        ]
                    }),
                    (0, i.jsx)(n.Text, {
                        variant: 'text-md/medium',
                        color: 'text-normal',
                        className: o.__invalid_body,
                        children: d.NW.string(d.t.yxCBqq)
                    })
                ]
            }),
            (0, i.jsx)(n.mzw, {
                children: (0, i.jsx)(n.zxk, {
                    color: n.zxk.Colors.RED,
                    onClick: function () {
                        null == c || c(), l.sS(m.filepath), h(), s.default.track(r.rMx.CLIP_DELETED);
                    },
                    children: d.NW.string(d.t.VRWPDg)
                })
            })
        ]
    });
}
