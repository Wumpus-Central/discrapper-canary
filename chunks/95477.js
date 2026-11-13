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
function P(e) {
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
                    fullWidth: M = !1,
                    clearable: U = !1,
                    revealable: w = !1,
                    showCharacterCount: G = !1,
                    ...x
                } = e,
                { fieldProps: k, props: F } = (0, E.n)(x),
                B = (0, R.Y)({
                    validateOn: N,
                    error: p,
                    value: f,
                    minLength: I,
                    maxLength: A,
                    min: null != x.min ? Number(x.min) : void 0,
                    max: null != x.max ? Number(x.max) : void 0,
                    defaultDirty: g,
                }),
                { setShouldValidate: V } = B,
                H = y(f, h),
                j = "object" == typeof T && "type" in T && "tags" === T.type,
                W = r.useRef(null),
                Y = (0, l.A)(W, a),
                K = r.useRef(null),
                $ = x.readOnly;
            null == $ && !1 === n && ($ = !0);
            let [X, z] = r.useState(!1),
                q = "password" === c;
            X && (t || !w || !q) && z(!1);
            let Q = w && q,
                J = Q && X ? "text" : c,
                Z = null,
                ee = !$ && ("boolean" == typeof U ? U && null != f && "" !== f : U.show);
            Q
                ? (Z = (0, i.jsx)(v, { inputSize: C, isRevealed: X, disabled: t, onClick: () => z((e) => !e) }))
                : ee
                  ? (Z = (0, i.jsx)(b, {
                        inputSize: C,
                        onClick: function (e) {
                            (null != x.onClear ? x.onClear(e) : x.onChange?.("", d),
                                requestAnimationFrame(() => {
                                    W.current?.focus();
                                }));
                        },
                        disabled: t,
                    }))
                  : null != S && (Z = (0, i.jsx)(D, { accessory: S, inputSize: C }));
            let et = null;
            null != T && (et = (0, i.jsx)(D, { accessory: T, inputSize: C }));
            let en = G ? (0, i.jsx)(O.n, { value: f, maxLength: A }) : null;
            return (0, i.jsx)(E.D, {
                ...k,
                errorMessage: B.hasError ? (B.errorMessage ?? void 0) : void 0,
                trailingAuxiliaryContent: en,
                children: (0, i.jsxs)(m.F, {
                    ref: K,
                    disabled: t,
                    validation: B,
                    fullWidth: M,
                    readOnly: $,
                    className: s()(L.container, L[C], {
                        [L.hasLeading]: null != et,
                        [L.hasLeadingText]: "string" == typeof T,
                        [L.hasTrailing]: null != Z,
                        [L.hasTags]: j,
                    }),
                    children: [
                        et,
                        (0, i.jsx)(_.vN, {
                            ringTarget: K,
                            ...o,
                            children: (0, i.jsx)(P, {
                                name: d,
                                className: L.input,
                                disabled: t,
                                readOnly: $,
                                required: k.required,
                                "aria-required": k.required,
                                type: J,
                                placeholder: u,
                                maxLength: A,
                                minLength: I,
                                value: f,
                                defaultValue: h,
                                "data-mana-component": "text-input",
                                ...F,
                                spellCheck: !q && F.spellCheck,
                                autoCorrect: F.autoCorrect ?? (q ? "off" : void 0),
                                autoCapitalize: F.autoCapitalize ?? (q ? "off" : void 0),
                                onChange: function (e) {
                                    let t = e.currentTarget.value;
                                    (x.onChange?.(t, d), V(!0), H.setHasValue?.("" !== t));
                                },
                                onBlur: (e) => {
                                    (x.onBlur?.(e), H.setIsFocused?.(!1));
                                },
                                onFocus: (e) => {
                                    (x.onFocus?.(e), H.setIsFocused?.(!0));
                                },
                                ref: Y,
                            }),
                        }),
                        Z,
                    ],
                }),
            });
        },
        p: P,
    },
);
