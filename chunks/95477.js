var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(612324),
    o = n(646514),
    d = n(765178),
    c = n(219869),
    u = n(939249),
    _ = n(559106),
    E = n(452027),
    A = n(15626),
    f = n(668639),
    h = n(285796),
    I = n(952270),
    p = n(39623),
    m = n(862301),
    g = n(116711),
    T = n(431527),
    S = n(834730),
    N = n(866665),
    C = n(710778),
    O = n(205086),
    R = n(281595),
    L = n(358983);
function y(e, t) {
    let n = r.useContext(f.cK);
    return (
        r.useEffect(() => {
            (n.setHasValue?.((null != t && "" !== t) || (null != e && "" !== e)), n.setIsFocused?.(!1));
        }, []),
        r.useEffect(() => {
            null != e && "" !== e && n.setHasValue?.(!0);
        }, [n, e]),
        n
    );
}
function D(e) {
    let { accessory: t, inputSize: n, disabled: r } = e;
    if ("string" == typeof t)
        return (0, i.jsx)(S.E, {
            variant: "sm" === n ? "body-sm/normal" : "body-md/normal",
            color: "input-placeholder-text-default",
            className: L.leadingText,
            children: t,
        });
    if ("icon" in t) {
        let { tooltip: e, ...a } = t,
            s = (0, i.jsx)(c.T, { ...a, size: "md" === n ? "sm" : "xs", variant: "input-accessory" });
        return null != e ? (0, i.jsx)(N.m, { asContainer: !0, text: e, shouldShow: !r, children: s }) : s;
    }
    if ("button" in t) return (0, i.jsx)("div", { className: L.icon, children: t.button });
    if ("type" in t)
        switch (t.type) {
            case "tags": {
                let { type: e, ...n } = t;
                return (0, i.jsx)(T.C, { ...n, layout: "inline" });
            }
            case "image":
                return (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: L.image });
            default:
                return null;
        }
    return (0, i.jsx)("div", {
        className: L.icon,
        children: (0, i.jsx)(t, { size: "md" === n ? "xs" : "xxs", color: o.A.colors.INPUT_ICON_DEFAULT }),
    });
}
function b(e) {
    let { inputSize: t, onClick: n, disabled: r } = e,
        { i18n: a } = (0, g.G9)();
    return (0, i.jsx)(u.D, {
        className: L.clearButton,
        onClick: r ? void 0 : n,
        "aria-label": a.TEXT_INPUT_CLEAR,
        "aria-disabled": r,
        tabIndex: r ? -1 : 0,
        children: (0, i.jsx)(h.CircleXIcon, {
            size: "md" === t ? "xs" : "xxs",
            color: "currentColor",
            "aria-hidden": !0,
        }),
    });
}
function v(e) {
    let { accessory: t, disabled: n } = e;
    return (0, i.jsx)(u.D, {
        className: L.pressableLeadingText,
        onClick: n ? void 0 : t.onClick,
        "aria-label": t["aria-label"],
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, i.jsx)(S.E, { variant: "body-md/normal", color: "input-text-default", children: t.text }),
    });
}
function P(e) {
    let { inputSize: t, isRevealed: n, disabled: r, onClick: a } = e,
        { i18n: s } = (0, g.G9)();
    return (0, i.jsx)(D, {
        accessory: {
            icon: n ? I.EyeSlashIcon : p.EyeIcon,
            "aria-label": n ? s.TEXT_INPUT_HIDE_PASSWORD : s.TEXT_INPUT_VIEW_PASSWORD,
            disabled: r,
            onClick: function () {
                (a(), d.O.announce(n ? s.TEXT_INPUT_PASSWORD_HIDDEN : s.TEXT_INPUT_PASSWORD_VISIBLE, "polite"));
            },
        },
        inputSize: t,
        disabled: r,
    });
}
function M(e) {
    let {
            value: t,
            defaultValue: n,
            "aria-labelledby": a,
            "aria-describedby": s,
            "aria-errormessage": l,
            "aria-invalid": o,
            ...d
        } = e,
        c = y(t, n),
        u = r.useContext(A._),
        _ = l ?? u?.errorMessageId ?? c.errorId,
        E = (0, C.iO)((0, C.iO)(s, u?.describedById), _);
    return (0, i.jsx)("input", {
        ...d,
        value: t,
        defaultValue: n,
        id: u?.controlId,
        "aria-labelledby": a ?? c.titleId,
        "aria-describedby": "" !== E ? E : void 0,
        "aria-errormessage": _,
        "aria-invalid": o ?? (null != _ || null != c.error),
    });
}
n.d(
    t,
    {},
    {
        k: function (e) {
            let {
                    disabled: t = !1,
                    editable: n,
                    inputRef: a,
                    focusProps: o,
                    name: d = "",
                    type: c = "text",
                    placeholder: u = "",
                    maxLength: A,
                    value: f,
                    defaultValue: h,
                    minLength: I,
                    error: p,
                    defaultDirty: g = !1,
                    leading: T,
                    trailing: S,
                    validateOn: N = "change",
                    size: C = "md",
                    fullWidth: U = !1,
                    clearable: w = !1,
                    revealable: G = !1,
                    showCharacterCount: x = !1,
                    ...k
                } = e,
                { fieldProps: F, props: B } = (0, E.n)(k),
                V = (0, R.Y)({
                    validateOn: N,
                    error: p,
                    value: f,
                    minLength: I,
                    maxLength: A,
                    min: null != k.min ? Number(k.min) : void 0,
                    max: null != k.max ? Number(k.max) : void 0,
                    defaultDirty: g,
                }),
                { setShouldValidate: H } = V,
                j = y(f, h),
                W = "object" == typeof T && "type" in T && "tags" === T.type,
                Y = r.useRef(null),
                K = (0, l.A)(Y, a),
                $ = r.useRef(null),
                X = k.readOnly;
            null == X && !1 === n && (X = !0);
            let [z, q] = r.useState(!1),
                Q = "password" === c;
            z && (t || !G || !Q) && q(!1);
            let J = G && Q,
                Z = J && z ? "text" : c,
                ee = null,
                et = !X && ("boolean" == typeof w ? w && null != f && "" !== f : w.show);
            J
                ? (ee = (0, i.jsx)(P, { inputSize: C, isRevealed: z, disabled: t, onClick: () => q((e) => !e) }))
                : et
                  ? (ee = (0, i.jsx)(b, {
                        inputSize: C,
                        onClick: function (e) {
                            (null != k.onClear ? k.onClear(e) : k.onChange?.("", d),
                                requestAnimationFrame(() => {
                                    Y.current?.focus();
                                }));
                        },
                        disabled: t,
                    }))
                  : null != S && (ee = (0, i.jsx)(D, { accessory: S, inputSize: C }));
            let en = "object" == typeof T && "text" in T,
                ei = null;
            en
                ? (ei = (0, i.jsx)(v, { accessory: T, disabled: t }))
                : null != T && (ei = (0, i.jsx)(D, { accessory: T, inputSize: C }));
            let er = x ? (0, i.jsx)(O.n, { value: f, maxLength: A }) : null;
            return (0, i.jsx)(E.D, {
                ...F,
                errorMessage: V.hasError ? (V.errorMessage ?? void 0) : void 0,
                trailingAuxiliaryContent: er,
                children: (0, i.jsxs)(m.F, {
                    ref: $,
                    disabled: t,
                    validation: V,
                    fullWidth: U,
                    readOnly: X,
                    className: s()(L.container, L[C], {
                        [L.hasLeading]: null != ei,
                        [L.hasLeadingText]: "string" == typeof T,
                        [L.hasPressableLeadingText]: en,
                        [L.hasTrailing]: null != ee,
                        [L.hasTags]: W,
                    }),
                    children: [
                        ei,
                        (0, i.jsx)(_.vN, {
                            ringTarget: $,
                            ...o,
                            children: (0, i.jsx)(M, {
                                name: d,
                                className: L.input,
                                disabled: t,
                                readOnly: X,
                                required: F.required,
                                "aria-required": F.required,
                                type: Z,
                                placeholder: u,
                                maxLength: A,
                                minLength: I,
                                value: f,
                                defaultValue: h,
                                "data-mana-component": "text-input",
                                ...B,
                                spellCheck: !Q && B.spellCheck,
                                autoCorrect: B.autoCorrect ?? (Q ? "off" : void 0),
                                autoCapitalize: B.autoCapitalize ?? (Q ? "off" : void 0),
                                onChange: function (e) {
                                    let t = e.currentTarget.value;
                                    (k.onChange?.(t, d), H(!0), j.setHasValue?.("" !== t));
                                },
                                onBlur: (e) => {
                                    (k.onBlur?.(e), j.setIsFocused?.(!1));
                                },
                                onFocus: (e) => {
                                    (k.onFocus?.(e), j.setIsFocused?.(!0));
                                },
                                ref: K,
                            }),
                        }),
                        ee,
                    ],
                }),
            });
        },
        p: M,
    },
);
