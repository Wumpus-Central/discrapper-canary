d.d(a, { t: () => l });
var c = d(248702),
    i = d(517e3),
    r = d(288552),
    l = (0, c.a)(
        (
            {
                id: e,
                label: a,
                labelHint: d,
                size: l = "m",
                checked: o,
                defaultChecked: n,
                disabled: s = !1,
                required: h = !1,
                name: b,
                value: t,
                onChange: v,
                error: p,
                helper: k,
                showErrorIcon: x = !0,
                class: C,
                "aria-label": I,
                "aria-labelledby": u,
                "aria-describedby": g,
                "aria-invalid": f,
                ...y
            },
            T,
        ) => {
            let [m, w] = (0, c.p)(!!n),
                $ = void 0 !== o,
                V = $ ? !!o : m,
                q = !!s,
                z = k ? `${e}-helper` : void 0,
                D = p ? `${e}-error` : void 0,
                E = [g, D, z].filter(Boolean).join(" ") || void 0;
            return (0, c.v)("div", {
                class: (0, i.n)("IncodeCheckbox", "string" == typeof C ? C : void 0),
                children: [
                    (0, c.v)("label", {
                        class: (0, i.n)("IncodeCheckboxLabel", { IncodeCheckboxLabelDisabled: q }),
                        htmlFor: e,
                        children: [
                            (0, c.v)("div", {
                                class: "relative inline-flex",
                                children: [
                                    (0, c.v)("input", {
                                        ref: T,
                                        type: "checkbox",
                                        class: "IncodeCheckboxInput",
                                        id: e,
                                        name: b,
                                        value: t,
                                        ...($ ? { checked: o } : { defaultChecked: n }),
                                        disabled: s,
                                        required: h,
                                        onChange: (e) => {
                                            $ || w(e.target.checked), v?.(e);
                                        },
                                        "aria-label": I,
                                        "aria-labelledby": u,
                                        "aria-describedby": E,
                                        "aria-invalid": f || !!p,
                                        "aria-required": !!h,
                                        ...y,
                                    }),
                                    (0, c.v)("div", {
                                        class: (0, i.n)("IncodeCheckboxVisual", {
                                            IncodeCheckboxVisualChecked: V,
                                            IncodeCheckboxVisualDisabled: q,
                                            IncodeCheckboxVisualError: !!p,
                                        }),
                                        children: V && (0, c.v)(r.d, { size: 28 }),
                                    }),
                                ],
                            }),
                            a &&
                                (0, c.v)("span", {
                                    class: (0, i.n)("IncodeCheckboxText", {
                                        IncodeCheckboxTextS: "s" === l,
                                        IncodeCheckboxTextM: "m" === l,
                                        IncodeCheckboxTextDisabled: q,
                                    }),
                                    "aria-hidden": u ? "true" : void 0,
                                    children: [
                                        a,
                                        d &&
                                            (0, c.v)("span", {
                                                class: "IncodeCheckboxLabelHint",
                                                "data-testid": `${e}-label-hint`,
                                                children: d,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    p &&
                        (0, c.v)("div", {
                            class: "IncodeCheckboxMessageWrapper",
                            "data-testid": `${e}-error-wrapper`,
                            children: [
                                x &&
                                    (0, c.v)("div", {
                                        class: "IncodeCheckboxIconWrapper",
                                        children: (0, c.v)(r.g, { size: 17 }),
                                    }),
                                (0, c.v)("p", { id: D, class: "IncodeCheckboxErrorText", children: p }),
                            ],
                        }),
                    k &&
                        !p &&
                        (0, c.v)("div", {
                            class: "IncodeCheckboxMessageWrapper",
                            "data-testid": `${e}-helper-wrapper`,
                            children: (0, c.v)("p", { id: z, class: "IncodeCheckboxHelperText", children: k }),
                        }),
                ],
            });
        },
    );
