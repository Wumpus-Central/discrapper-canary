n.d(t, { k: () => L, p: () => y });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(612324),
    o = n(661531),
    d = n(219869),
    c = n(939249),
    u = n(559106),
    _ = n(452027),
    E = n(15626),
    A = n(668639),
    h = n(285796),
    f = n(862301),
    I = n(460890),
    p = n(872162),
    T = n(834730),
    m = n(866665),
    g = n(205086),
    S = n(281595),
    N = n(358983);
function C(e, t) {
    let n = r.useContext(A.cK);
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
function O(e) {
    let { accessory: t, inputSize: n, disabled: r } = e;
    if ("string" == typeof t)
        return (0, i.jsx)(T.E, {
            variant: "text-md/normal",
            color: "input-placeholder-text-default",
            className: N.leadingText,
            children: t,
        });
    if ("icon" in t) {
        let { tooltip: e, ...a } = t,
            s = (0, i.jsx)(d.T, { ...a, size: "md" === n ? "sm" : "xs", variant: "input-accessory" });
        return null != e ? (0, i.jsx)(m.m, { asContainer: !0, text: e, shouldShow: !r, children: s }) : s;
    }
    if ("button" in t) return (0, i.jsx)("div", { className: N.icon, children: t.button });
    if ("type" in t)
        switch (t.type) {
            case "tags": {
                let { type: e, ...n } = t;
                return (0, i.jsx)(p.C, { ...n, layout: "inline" });
            }
            case "image":
                return (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: N.image });
            default:
                return null;
        }
    return (0, i.jsx)("div", {
        className: N.icon,
        children: (0, i.jsx)(t, { size: "md" === n ? "xs" : "xxs", color: o.A.colors.ICON_STRONG }),
    });
}
function R(e) {
    let { inputSize: t, onClick: n } = e,
        { i18n: r } = (0, I.G9)();
    return (0, i.jsx)(c.D, {
        className: N.clearButton,
        onClick: n,
        "aria-label": r.TEXT_INPUT_CLEAR,
        children: (0, i.jsx)(h.a, { size: "md" === t ? "xs" : "xxs", color: "currentColor" }),
    });
}
function L(e) {
    let {
            disabled: t = !1,
            editable: n,
            inputRef: a,
            focusProps: o,
            name: d = "",
            type: c = "text",
            placeholder: E = "",
            maxLength: A,
            value: h,
            defaultValue: I,
            minLength: p,
            error: T,
            defaultDirty: m = !1,
            leading: L,
            trailing: D,
            validateOn: v = "change",
            size: b = "md",
            fullWidth: P = !1,
            clearable: M = !1,
            showCharacterCount: U = !1,
            ...w
        } = e,
        { fieldProps: G, props: x } = (0, _.n)(w),
        k = (0, S.Y)({
            validateOn: v,
            error: T,
            value: h,
            minLength: p,
            maxLength: A,
            min: null != w.min ? Number(w.min) : void 0,
            max: null != w.max ? Number(w.max) : void 0,
            defaultDirty: m,
        }),
        { setShouldValidate: F } = k,
        B = C(h, I),
        V = "object" == typeof L && "type" in L && "tags" === L.type,
        H = r.useRef(null),
        j = (0, l.A)(H, a),
        W = r.useRef(null),
        Y = w.readOnly;
    null == Y && !1 === n && (Y = !0);
    let K = null;
    ("boolean" == typeof M ? M && null != h && "" !== h && !Y : M.show)
        ? (K = (0, i.jsx)(R, {
              inputSize: b,
              onClick: function (e) {
                  (null != w.onClear ? w.onClear(e) : w.onChange?.("", d),
                      requestAnimationFrame(() => {
                          H.current?.focus();
                      }));
              },
          }))
        : null != D && (K = (0, i.jsx)(O, { accessory: D, inputSize: b }));
    let $ = null;
    null != L && ($ = (0, i.jsx)(O, { accessory: L, inputSize: b }));
    let z = U ? (0, i.jsx)(g.n, { value: h, maxLength: A }) : null;
    return (0, i.jsx)(_.D, {
        ...G,
        errorMessage: k.hasError ? (k.errorMessage ?? void 0) : void 0,
        trailingAuxiliaryContent: z,
        children: (0, i.jsxs)(f.F, {
            ref: W,
            disabled: t,
            validation: k,
            fullWidth: P,
            readOnly: Y,
            className: s()(N.container, N[b], {
                [N.hasLeading]: null != $,
                [N.hasTrailing]: null != K,
                [N.hasTags]: V,
            }),
            children: [
                $,
                (0, i.jsx)(u.vN, {
                    ringTarget: W,
                    ...o,
                    children: (0, i.jsx)(y, {
                        name: d,
                        className: N.input,
                        disabled: t,
                        readOnly: Y,
                        required: G.required,
                        "aria-required": G.required,
                        type: c,
                        placeholder: E,
                        maxLength: A,
                        minLength: p,
                        value: h,
                        defaultValue: I,
                        "data-mana-component": "text-input",
                        ...x,
                        onChange: function (e) {
                            let t = e.currentTarget.value;
                            (w.onChange?.(t, d), F(!0), B.setHasValue?.("" !== t));
                        },
                        onBlur: (e) => {
                            (w.onBlur?.(e), B.setIsFocused?.(!1));
                        },
                        onFocus: (e) => {
                            (w.onFocus?.(e), B.setIsFocused?.(!0));
                        },
                        ref: j,
                    }),
                }),
                K,
            ],
        }),
    });
}
function y(e) {
    let { value: t, defaultValue: n, "aria-labelledby": a, ...s } = e,
        l = C(t, n),
        o = r.useContext(E._);
    return (0, i.jsx)("input", {
        ...s,
        value: t,
        defaultValue: n,
        id: o?.controlId,
        "aria-labelledby": a ?? l.titleId,
        "aria-describedby": o?.describedById,
        "aria-errormessage": o?.errorMessageId,
        "aria-invalid": o?.errorMessageId != null,
    });
}
