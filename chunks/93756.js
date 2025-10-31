e.d(n, { default: () => o });
var i = e(951288);
e(647438);
var a = e(481060),
    r = e(174767),
    s = e(388032),
    l = e(33108);
function o(t) {
    let { transitionState: n, onClose: e, onDelete: o } = t;
    async function d() {
        await (0, r.TG)(), o();
    }
    return (0, i.jsxs)(a.Y0X, {
        size: a.CgR.SMALL,
        transitionState: n,
        className: l.__invalid_modal,
        parentComponent: "GameInvitesDeleteModal",
        children: [
            (0, i.jsxs)(a.hzk, {
                className: l.modalContent,
                children: [
                    (0, i.jsxs)("div", {
                        className: l.header,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                className: l.__invalid_title,
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                children: s.intl.string(s.t.P8nDIN),
                            }),
                            (0, i.jsx)(a.olH, { onClick: e }),
                        ],
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: l.__invalid_body,
                        children: s.intl.string(s.t.fwFcj5),
                    }),
                ],
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsxs)(a.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, i.jsx)(a.Button, {
                            variant: "critical-primary",
                            text: s.intl.string(s.t["5I4fSm"]),
                            onClick: d,
                        }),
                        (0, i.jsx)(a.Button, {
                            variant: "secondary",
                            text: s.intl.string(s.t["ETE/oC"]),
                            onClick: e,
                        }),
                    ],
                }),
            }),
        ],
    });
}
