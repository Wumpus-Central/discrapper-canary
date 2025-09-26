s.d(t, { default: () => x });
var r = s(951288),
    n = s(647438),
    a = s(667202),
    i = s(481060),
    c = s(572004),
    o = s(943970),
    l = s(998964),
    p = s(440589),
    d = s(388032),
    m = s(999852);
function x(e) {
    let { instance: t, onClose: s, transitionState: x } = e,
        u = (0, l.Z)(t),
        h = n.useCallback(() => {
            (0, c.JG)(u), (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["+5kSoa"]), i.ToastType.SUCCESS));
        }, [u]),
        v = (0, o.Z)(t.gameId, "cover");
    return (0, r.jsx)(a.I, {
        graphic: {
            src: v,
            type: "image",
        },
        title: t.name,
        subtitle: t.planName,
        size: "md",
        transitionState: x,
        onClose: s,
        children: (0, r.jsxs)("div", {
            className: m.content,
            children: [
                (0, r.jsx)("div", {
                    className: m.stepsContainer,
                    children: t.instructions.map((e, t) =>
                        (0, r.jsxs)(
                            "div",
                            {
                                className: m.step,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: m.stepNumber,
                                        children: (0, r.jsx)(i.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-secondary",
                                            children: d.intl.formatToPlainString(p.default.e0RxEB, { step: t + 1 }),
                                        }),
                                    }),
                                    (0, r.jsx)(i.Text, {
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
                (0, r.jsxs)("div", {
                    className: m.serverIpContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: m.serverIpInput,
                            children: (0, r.jsx)(i.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: u,
                            }),
                        }),
                        (0, r.jsx)(i.zxk, {
                            variant: "primary",
                            text: d.intl.string(d.t.OpuAlJ),
                            onClick: h,
                            icon: i.TIy,
                        }),
                    ],
                }),
            ],
        }),
    });
}
