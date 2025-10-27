i.d(e, { default: () => c });
var a = i(951288);
i(647438);
var n = i(481060),
    l = i(626135),
    s = i(39604),
    r = i(981631),
    d = i(388032),
    o = i(827946);
function c(t) {
    let { transitionState: e, onClose: i, onBeforeDelete: c, onAfterDelete: m, clip: h } = t;
    return (0, a.jsxs)(n.Y0X, {
        size: n.CgR.SMALL,
        transitionState: e,
        className: o.__invalid_modal,
        parentComponent: "ClipsDeleteModal",
        children: [
            (0, a.jsxs)(n.hzk, {
                className: o.modalContent,
                children: [
                    (0, a.jsxs)("div", {
                        className: o.header,
                        children: [
                            (0, a.jsx)(n.Heading, {
                                className: o.__invalid_title,
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: d.intl.string(d.t.Lzhuiz),
                            }),
                            (0, a.jsx)(n.olH, { onClick: i }),
                        ],
                    }),
                    (0, a.jsx)(n.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: o.__invalid_body,
                        children: d.intl.string(d.t.yxCBqo),
                    }),
                ],
            }),
            (0, a.jsx)(n.mzw, {
                children: (0, a.jsx)(n.Button, {
                    variant: "critical-primary",
                    text: d.intl.string(d.t.VRWPDm),
                    onClick: function () {
                        null == c || c(), s.sS(h.filepath), m(), l.default.track(r.rMx.CLIP_DELETED);
                    },
                }),
            }),
        ],
    });
}
