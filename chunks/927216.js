d.d(t, { i: () => n, r: () => Z, t: () => m });
var i = d(529058),
    e = d(287822),
    c = d(898369),
    a = d(606742);
d(748158);
var s = d(96798);
function n(l, t, d) {
    if (t)
        return l(
            t,
            (function (l, t) {
                if (t?.fieldName && "string" == typeof t.fieldName) {
                    let d = String(t.fieldName),
                        i = d.includes(".") ? l(d) : d;
                    return { ...t, fieldName: i };
                }
                return t;
            })(l, d),
        );
}
var Z = ({
        name: l,
        label: t,
        displayLabel: d,
        value: c = "",
        error: a,
        errorParams: Z,
        type: b = "text",
        placeholder: m,
        placeholderParams: o,
        required: u,
        readonly: h,
        maxLength: W,
        disabled: G,
        labelHint: p,
        onChange: N,
        onBlur: M,
    }) => {
        let { t: X } = (0, i.n)();
        return (0, e.v)("div", {
            className: "IncodeFormField",
            children: (0, e.v)(s.t, {
                id: l,
                label: d ?? X(t),
                labelHint: p,
                name: l,
                type: b,
                value: c,
                placeholder: m ? X(m, o) : void 0,
                readOnly: h,
                disabled: G,
                required: u,
                maxLength: W,
                error: n(X, a, Z),
                onInput: (t) => {
                    N(l, t.target.value);
                },
                onBlur: M ? () => M(l) : void 0,
                "data-testid": `form-field-${l}`,
            }),
        });
    },
    b = (0, e.a)(
        (
            {
                id: l,
                label: t,
                labelHint: d,
                checked: i,
                defaultChecked: s,
                disabled: n = !1,
                required: Z = !1,
                name: b,
                value: m,
                onChange: o,
                error: u,
                helper: h,
                showErrorIcon: W = !0,
                class: G,
                "aria-label": p,
                "aria-labelledby": N,
                "aria-describedby": M,
                "aria-invalid": X,
                ...r
            },
            y,
        ) => {
            let [Y, T] = (0, e.p)(!!s),
                V = void 0 !== i,
                L = V ? !!i : Y,
                I = !!n,
                z = h ? `${l}-helper` : void 0,
                w = u ? `${l}-error` : void 0,
                R = [M, w, z].filter(Boolean).join(" ") || void 0;
            return (0, e.v)("div", {
                class: (0, c.n)("IncodeRadioButton", "string" == typeof G ? G : void 0),
                children: [
                    (0, e.v)("label", {
                        class: (0, c.n)("IncodeRadioButtonLabel", { IncodeRadioButtonLabelDisabled: I }),
                        htmlFor: l,
                        children: [
                            (0, e.v)("div", {
                                class: "relative inline-flex",
                                children: [
                                    (0, e.v)("input", {
                                        ref: y,
                                        type: "radio",
                                        class: "IncodeRadioButtonInput",
                                        id: l,
                                        name: b,
                                        value: m,
                                        ...(V ? { checked: i } : { defaultChecked: s }),
                                        disabled: n,
                                        required: Z,
                                        onChange: (l) => {
                                            V || T(l.target.checked), o?.(l);
                                        },
                                        "aria-label": p,
                                        "aria-labelledby": N,
                                        "aria-describedby": R,
                                        "aria-invalid": X || !!u,
                                        "aria-required": !!Z,
                                        ...r,
                                    }),
                                    (0, e.v)("div", {
                                        class: (0, c.n)("IncodeRadioButtonVisual", {
                                            IncodeRadioButtonVisualChecked: L,
                                            IncodeRadioButtonVisualDisabled: I,
                                            IncodeRadioButtonVisualError: !!u,
                                        }),
                                        "aria-hidden": "true",
                                        children: (0, e.v)("span", {
                                            class: (0, c.n)("IncodeRadioButtonDot", { IncodeRadioButtonDotVisible: L }),
                                        }),
                                    }),
                                ],
                            }),
                            t &&
                                (0, e.v)("span", {
                                    class: (0, c.n)("IncodeRadioButtonText", { IncodeRadioButtonTextDisabled: I }),
                                    "aria-hidden": N ? "true" : void 0,
                                    children: [
                                        t,
                                        d &&
                                            (0, e.v)("span", {
                                                class: "IncodeRadioButtonLabelHint",
                                                "data-testid": `${l}-label-hint`,
                                                children: d,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    u &&
                        (0, e.v)("div", {
                            class: "IncodeRadioButtonMessageWrapper",
                            "data-testid": `${l}-error-wrapper`,
                            children: [
                                W &&
                                    (0, e.v)("div", {
                                        class: "IncodeRadioButtonIconWrapper",
                                        children: (0, e.v)(a.t, { size: 17 }),
                                    }),
                                (0, e.v)("p", { id: w, class: "IncodeRadioButtonErrorText", children: u }),
                            ],
                        }),
                    h &&
                        !u &&
                        (0, e.v)("div", {
                            class: "IncodeRadioButtonMessageWrapper",
                            "data-testid": `${l}-helper-wrapper`,
                            children: (0, e.v)("p", { id: z, class: "IncodeRadioButtonHelperText", children: h }),
                        }),
                ],
            });
        },
    ),
    m = (0, e.a)(
        (
            {
                id: l,
                label: t,
                labelHint: d,
                options: i,
                value: a,
                defaultValue: s,
                error: n,
                helper: Z,
                required: m = !1,
                disabled: o = !1,
                name: u,
                orientation: h = "row",
                onChange: W,
                onBlur: G,
                class: p,
                "data-testid": N,
            },
            M,
        ) => {
            let [X, r] = (0, e.p)(s ?? ""),
                y = void 0 !== a,
                Y = y ? a : X,
                T = `${l}-label`,
                V = n ? `${l}-error` : void 0,
                L = Z && !n ? `${l}-helper` : void 0,
                I = V ?? L,
                z = u ?? l;
            return (0, e.v)("div", {
                ref: M,
                class: (0, c.n)("IncodeRadioGroupComposed", p),
                "data-testid": N,
                children: [
                    (0, e.v)("span", {
                        id: T,
                        class: "IncodeRadioGroupComposedLabel",
                        children: [
                            t,
                            d &&
                                (0, e.v)("span", {
                                    class: "IncodeRadioGroupComposedLabelHint",
                                    "data-testid": `${l}-label-hint`,
                                    children: d,
                                }),
                        ],
                    }),
                    (0, e.v)("div", {
                        class: "IncodeRadioGroupComposedOptions",
                        role: "radiogroup",
                        "aria-labelledby": T,
                        "aria-required": m || void 0,
                        "aria-invalid": !!n || void 0,
                        "aria-describedby": I,
                        "data-orientation": h,
                        children: i.map((t) =>
                            (0, e.v)(
                                b,
                                {
                                    id: `${l}-${t.value}`,
                                    name: z,
                                    label: t.label,
                                    value: t.value,
                                    checked: Y === t.value,
                                    disabled: o || t.disabled,
                                    showErrorIcon: !1,
                                    "aria-invalid": !!n || void 0,
                                    "aria-describedby": I,
                                    onChange: (l) => {
                                        var d;
                                        return (d = t.value), void (!y && r(d), W?.(d, l));
                                    },
                                    onBlur: G,
                                },
                                t.value,
                            ),
                        ),
                    }),
                    n && (0, e.v)("p", { id: V, class: "IncodeRadioGroupComposedError", role: "alert", children: n }),
                    Z && !n && (0, e.v)("p", { id: L, class: "IncodeRadioGroupComposedHelper", children: Z }),
                ],
            });
        },
    );
