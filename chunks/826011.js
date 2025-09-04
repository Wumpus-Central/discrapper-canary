t.d(s, { default: () => m });
var r = t(951288),
    a = t(647438),
    n = t(304789),
    i = t(481060),
    c = t(572004),
    o = t(401561),
    l = t(388032),
    d = t(927607);
function m(e) {
    let { instance: s, onClose: t, transitionState: m } = e,
        p = a.useCallback(() => {
            (0, c.JG)(s.serverIP),
                (0, i.showToast)((0, i.createToast)(l.intl.string(l.t["+5kSoa"]), i.ToastType.SUCCESS));
        }, [s.serverIP]);
    return (0, r.jsxs)(i.Y0X, {
        className: d.modal,
        size: i.CgR.MEDIUM,
        transitionState: m,
        parentComponent: "PortkeyInstructionsModal",
        children: [
            (0, r.jsx)(i.olH, {
                onClick: t,
                className: d.closeButton,
            }),
            (0, r.jsx)(n.$, {
                children: (0, r.jsxs)(i.hzk, {
                    className: d.content,
                    children: [
                        (0, r.jsx)("img", {
                            src: "",
                            alt: "",
                            className: d.gameImage,
                        }),
                        (0, r.jsxs)("div", {
                            className: d.header,
                            children: [
                                (0, r.jsx)(i.X6q, {
                                    variant: "heading-xl/semibold",
                                    color: "header-primary",
                                    children: s.name,
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: s.plan.name,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: d.stepsContainer,
                            children: s.instructions.map((e, s) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        className: d.step,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: d.stepNumber,
                                                children: (0, r.jsx)(i.Text, {
                                                    variant: "text-sm/semibold",
                                                    color: "text-secondary",
                                                    children: l.intl.formatToPlainString(o.default.e0RxEB, {
                                                        step: s + 1,
                                                    }),
                                                }),
                                            }),
                                            (0, r.jsx)(i.Text, {
                                                variant: "text-md/normal",
                                                color: "header-primary",
                                                children: e,
                                            }),
                                        ],
                                    },
                                    s,
                                ),
                            ),
                        }),
                        (0, r.jsxs)("div", {
                            className: d.serverIpContainer,
                            children: [
                                (0, r.jsx)("div", {
                                    className: d.serverIpInput,
                                    children: (0, r.jsx)(i.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        children: s.serverIP,
                                    }),
                                }),
                                (0, r.jsx)(i.zxk, {
                                    variant: "primary",
                                    text: l.intl.string(l.t.OpuAlJ),
                                    onClick: p,
                                    icon: i.TIy,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
