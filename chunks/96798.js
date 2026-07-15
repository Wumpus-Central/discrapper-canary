d.d(t, { t: () => Z });
var i = d(287822),
    e = d(898369),
    c = d(606742),
    a = d(748158),
    s = d(430671),
    n = (0, i.a)((l, t) => {
        let { class: d, type: c = "text", ...a } = l;
        return (0, i.v)("input", { ...a, ref: t, type: c, class: (0, e.n)("IncodeInput", d) });
    }),
    Z = (0, i.a)(
        (
            {
                id: l,
                label: t,
                labelHint: d,
                "aria-label": Z,
                "aria-describedby": b,
                type: m,
                error: o,
                showErrorIcon: u,
                helper: h,
                showHelperIcon: W,
                closeButton: G,
                rightIcon: p,
                required: N,
                suppressMessages: M = !1,
                class: X,
                value: r,
                ...y
            },
            Y,
        ) => {
            let T = `${l}-helper`,
                V = `${l}-error`,
                L = [!M && h ? T : null, !M && o ? V : null, b].filter(Boolean).join(" ") || void 0;
            return (0, i.v)("div", {
                class: (0, e.n)("IncodeInputComposed", X),
                children: [
                    t &&
                        (0, i.v)("label", {
                            class: "IncodeInputComposedLabel",
                            htmlFor: l,
                            "data-testid": `${l}-label`,
                            children: [
                                t,
                                d &&
                                    (0, i.v)("span", {
                                        class: "IncodeInputComposedLabelHint",
                                        "data-testid": `${l}-label-hint`,
                                        children: d,
                                    }),
                            ],
                        }),
                    (0, i.v)("div", {
                        class: "IncodeInputComposedWrapper",
                        children: [
                            (0, i.v)(n, {
                                id: l,
                                type: m,
                                ...y,
                                ref: Y,
                                required: N,
                                "data-has-value": !!(r && String(r).length > 0),
                                ...(!t && Z ? { "aria-label": Z } : {}),
                                "aria-describedby": L,
                                "aria-required": N ? "true" : void 0,
                                "aria-invalid": o ? "true" : void 0,
                                value: r,
                            }),
                            p,
                            G?.show &&
                                (0, i.v)("button", {
                                    type: "button",
                                    "aria-label": "Clear",
                                    class: "IncodeInputComposedClearButton",
                                    onClick: G.onClose,
                                    "data-testid": `${l}-clear`,
                                    children: (0, i.v)(a.o, {
                                        width: 24,
                                        height: 24,
                                        fillColor: "var(--icon-neutral-500)",
                                    }),
                                }),
                        ],
                    }),
                    !M &&
                        o &&
                        (0, i.v)("div", {
                            class: "IncodeInputComposedErrorWrapper",
                            role: "alert",
                            "data-testid": `${l}-error-wrapper`,
                            children: [
                                u &&
                                    (0, i.v)("div", {
                                        class: "IncodeInputComposedIconWrapper",
                                        children: (0, i.v)(c.t, { size: 17 }),
                                    }),
                                (0, i.v)("p", { id: V, class: "IncodeInputComposedError", children: o }),
                            ],
                        }),
                    !M &&
                        h &&
                        !o &&
                        (0, i.v)("div", {
                            class: "IncodeInputComposedHelperWrapper",
                            "data-testid": `${l}-helper-wrapper`,
                            children: [
                                W &&
                                    (0, i.v)("div", {
                                        class: "IncodeInputComposedIconWrapper",
                                        children: (0, i.v)(s.t, { size: 17 }),
                                    }),
                                (0, i.v)("p", { id: T, class: "IncodeInputComposedHelper", children: h }),
                            ],
                        }),
                ],
            });
        },
    );
