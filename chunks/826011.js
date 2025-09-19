s.d(t, { default: () => p });
var a = s(951288),
    r = s(647438),
    n = s(304789),
    i = s(481060),
    c = s(572004),
    o = s(998964),
    l = s(401561),
    d = s(388032),
    m = s(927607);
function p(e) {
    let { instance: t, onClose: s, transitionState: p } = e,
        x = (0, o.Z)(t),
        h = r.useCallback(() => {
            (0, c.JG)(x), (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["+5kSoa"]), i.ToastType.SUCCESS));
        }, [x]);
    return (0, a.jsxs)(i.Y0X, {
        className: m.modal,
        size: i.CgR.MEDIUM,
        transitionState: p,
        parentComponent: "PortkeyInstructionsModal",
        children: [
            (0, a.jsx)(i.olH, {
                onClick: s,
                className: m.closeButton,
            }),
            (0, a.jsx)(n.$, {
                children: (0, a.jsxs)(i.hzk, {
                    className: m.content,
                    children: [
                        (0, a.jsx)("img", {
                            src: "",
                            alt: "",
                            className: m.gameImage,
                        }),
                        (0, a.jsxs)("div", {
                            className: m.header,
                            children: [
                                (0, a.jsx)(i.X6q, {
                                    variant: "heading-xl/semibold",
                                    color: "header-primary",
                                    children: t.name,
                                }),
                                (0, a.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: t.planName,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: m.stepsContainer,
                            children: t.instructions.map((e, t) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: m.step,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: m.stepNumber,
                                                children: (0, a.jsx)(i.Text, {
                                                    variant: "text-sm/semibold",
                                                    color: "text-secondary",
                                                    children: d.intl.formatToPlainString(l.default.e0RxEB, {
                                                        step: t + 1,
                                                    }),
                                                }),
                                            }),
                                            (0, a.jsx)(i.Text, {
                                                variant: "text-md/normal",
                                                color: "header-primary",
                                                children: e,
                                            }),
                                        ],
                                    },
                                    t,
                                ),
                            ),
                        }),
                        (0, a.jsxs)("div", {
                            className: m.serverIpContainer,
                            children: [
                                (0, a.jsx)("div", {
                                    className: m.serverIpInput,
                                    children: (0, a.jsx)(i.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        children: x,
                                    }),
                                }),
                                (0, a.jsx)(i.zxk, {
                                    variant: "primary",
                                    text: d.intl.string(d.t.OpuAlJ),
                                    onClick: h,
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
