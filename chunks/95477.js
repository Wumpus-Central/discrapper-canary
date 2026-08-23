"use strict";
n.d(t, { k: () => L, p: () => y });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(612324),
    o = n(661531),
    d = n(219869),
    c = n(939249),
    u = n(259678),
    _ = n(452027),
    E = n(15626),
    A = n(668639),
    h = n(285796),
    I = n(862301),
    f = n(460890),
    p = n(340351),
    T = n(834730),
    m = n(866665),
    g = n(205086),
    S = n(281595),
    N = n(358983);
function C(e, t) {
    let n = r.useContext(A.cK);
    return (
        r.useEffect(() => {
            n.setHasValue?.((null != t && "" !== t) || (null != e && "" !== e)), n.setIsFocused?.(!1);
        }, []),
        r.useEffect(() => {
            null != e && "" !== e && n.setHasValue?.(!0);
        }, [n, e]),
        n
    );
}
function R(e) {
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
function O(e) {
    let { inputSize: t, onClick: n } = e,
        { i18n: r } = (0, f.G9)();
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
            defaultValue: f,
            minLength: p,
            error: T,
            defaultDirty: m = !1,
            leading: L,
            trailing: D,
            validateOn: v = "change",
            size: b = "md",
            fullWidth: M = !1,
            clearable: P = !1,
            showCharacterCount: U = !1,
            ...w
        } = e,
        { fieldProps: G } = (0, _.n)(w),
        x = (0, S.Y)({
            validateOn: v,
            error: T,
            value: h,
            minLength: p,
            maxLength: A,
            min: null != w.min ? Number(w.min) : void 0,
            max: null != w.max ? Number(w.max) : void 0,
            defaultDirty: m,
        }),
        { setShouldValidate: k } = x,
        F = C(h, f),
        V = "object" == typeof L && "type" in L && "tags" === L.type,
        B = r.useRef(null),
        H = (0, l.A)(B, a),
        j = r.useRef(null),
        W = w.readOnly;
    null == W && !1 === n && (W = !0);
    let Y = null;
    ("boolean" == typeof P ? P && null != h && "" !== h && !W : P.show)
        ? (Y = (0, i.jsx)(O, {
              inputSize: b,
              onClick: function (e) {
                  null != w.onClear ? w.onClear(e) : w.onChange?.("", d),
                      requestAnimationFrame(() => {
                          B.current?.focus();
                      });
              },
          }))
        : null != D && (Y = (0, i.jsx)(R, { accessory: D, inputSize: b }));
    let K = null;
    null != L && (K = (0, i.jsx)(R, { accessory: L, inputSize: b }));
    let $ = U ? (0, i.jsx)(g.n, { value: h, maxLength: A }) : null;
    return (0, i.jsx)(_.D, {
        ...G,
        errorMessage: x.hasError ? (x.errorMessage ?? void 0) : void 0,
        trailingAuxiliaryContent: $,
        children: (0, i.jsxs)(I.F, {
            ref: j,
            disabled: t,
            validation: x,
            fullWidth: M,
            readOnly: W,
            className: s()(N.container, N[b], {
                [N.hasLeading]: null != K,
                [N.hasTrailing]: null != Y,
                [N.hasTags]: V,
            }),
            children: [
                K,
                (0, i.jsx)(u.vN, {
                    ringTarget: j,
                    ...o,
                    children: (0, i.jsx)(y, {
                        name: d,
                        className: N.input,
                        disabled: t,
                        readOnly: W,
                        "aria-required": G.required,
                        type: c,
                        placeholder: E,
                        maxLength: A,
                        minLength: p,
                        value: h,
                        defaultValue: f,
                        "data-mana-component": "text-input",
                        ...w,
                        onChange: function (e) {
                            let t = e.currentTarget.value;
                            w.onChange?.(t, d), k(!0), F.setHasValue?.("" !== t);
                        },
                        onBlur: (e) => {
                            w.onBlur?.(e), F.setIsFocused?.(!1);
                        },
                        onFocus: (e) => {
                            w.onFocus?.(e), F.setIsFocused?.(!0);
                        },
                        ref: H,
                    }),
                }),
                Y,
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
