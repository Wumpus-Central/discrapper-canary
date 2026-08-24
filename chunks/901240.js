"use strict";
r.d(t, { Sc: () => A, $Q: () => P });
var n = r(349797),
    i = r(760029),
    o = r(955548),
    a = r(171784),
    s = r(772856),
    l = r(208223);
let u = new WeakMap();
var c = r(201092),
    f = r(192734),
    d = r(553444),
    p = r(492273),
    h = r(582128),
    m = r(248725),
    v = r(199901),
    y = r(404903),
    g = r(568864);
function b(e, t, r) {
    let n = (0, m.KZ)({ ...e, value: t.isSelected }),
        { isInvalid: i, validationErrors: o, validationDetails: a } = n.displayValidation,
        {
            labelProps: s,
            inputProps: l,
            isSelected: u,
            isPressed: c,
            isDisabled: d,
            isReadOnly: p,
        } = (0, g.e)({ ...e, isInvalid: i }, t, r);
    (0, v.X)(e, n, r);
    let { isIndeterminate: b, isRequired: w, validationBehavior: _ = "aria" } = e;
    (0, h.useEffect)(() => {
        r.current && (r.current.indeterminate = !!b);
    });
    let { pressProps: S } = (0, y.d)({
        isDisabled: d || p,
        onPress() {
            let { [m.Lf]: t } = e,
                { commitValidation: r } = t || n;
            r();
        },
    });
    return {
        labelProps: (0, f.v)(
            s,
            S,
            (0, h.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), []),
        ),
        inputProps: { ...l, checked: u, "aria-required": (w && "aria" === _) || void 0, required: w && "native" === _ },
        isSelected: u,
        isPressed: c,
        isDisabled: d,
        isReadOnly: p,
        isInvalid: i,
        validationErrors: o,
        validationDetails: a,
    };
}
var w = r(60339),
    _ = r(1730),
    S = r(400274),
    x = r(64659),
    E = r(992533),
    k = r(334887),
    C = r(909630);
let T = (0, h.createContext)(null),
    M = (0, h.createContext)(null),
    P = (0, h.forwardRef)(function (e, t) {
        var r, n;
        [e, t] = (0, i.JT)(e, t, T);
        let { validationBehavior: v } = (0, i.CC)(a.c) || {},
            y = null != (n = null != (r = e.validationBehavior) ? r : v) ? n : "native",
            g = (function (e = {}) {
                var t, r;
                let [n, i] = (0, E.P)(e.value, e.defaultValue || [], e.onChange),
                    [o] = (0, h.useState)(n),
                    a = !!e.isRequired && 0 === n.length,
                    s = (0, h.useRef)(new Map()),
                    l = (0, m.KZ)({ ...e, value: n }),
                    u = l.displayValidation.isInvalid;
                return {
                    ...l,
                    value: n,
                    defaultValue: null != (t = e.defaultValue) ? t : o,
                    setValue(t) {
                        e.isReadOnly || e.isDisabled || i(t);
                    },
                    isDisabled: e.isDisabled || !1,
                    isReadOnly: e.isReadOnly || !1,
                    isSelected: (e) => n.includes(e),
                    addValue(t) {
                        e.isReadOnly || e.isDisabled || n.includes(t) || i((n = n.concat(t)));
                    },
                    removeValue(t) {
                        e.isReadOnly || e.isDisabled || (n.includes(t) && i(n.filter((e) => e !== t)));
                    },
                    toggleValue(t) {
                        e.isReadOnly || e.isDisabled || (n.includes(t) ? i(n.filter((e) => e !== t)) : i(n.concat(t)));
                    },
                    setInvalid(e, t) {
                        let r = new Map(s.current);
                        t.isInvalid ? r.set(e, t) : r.delete(e),
                            (s.current = r),
                            l.updateValidation((0, m.cX)(...r.values()));
                    },
                    validationState: null != (r = e.validationState) ? r : u ? "invalid" : null,
                    isInvalid: u,
                    isRequired: a,
                };
            })({ ...e, validationBehavior: y }),
            [b, w] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: _,
                labelProps: S,
                descriptionProps: x,
                errorMessageProps: k,
                ...C
            } = (function (e, t) {
                let { isDisabled: r, name: n, form: i, validationBehavior: o = "aria" } = e,
                    { isInvalid: a, validationErrors: s, validationDetails: l } = t.displayValidation,
                    {
                        labelProps: h,
                        fieldProps: m,
                        descriptionProps: v,
                        errorMessageProps: y,
                    } = (0, d.M)({ ...e, labelElementType: "span", isInvalid: a, errorMessage: e.errorMessage || s });
                u.set(t, { name: n, form: i, descriptionId: v.id, errorMessageId: y.id, validationBehavior: o });
                let g = (0, c.$)(e, { labelable: !0 }),
                    { focusWithinProps: b } = (0, p.R)({
                        onBlurWithin: e.onBlur,
                        onFocusWithin: e.onFocus,
                        onFocusWithinChange: e.onFocusChange,
                    });
                return {
                    groupProps: (0, f.v)(g, { role: "group", "aria-disabled": r || void 0, ...m, ...b }),
                    labelProps: h,
                    descriptionProps: v,
                    errorMessageProps: y,
                    isInvalid: a,
                    validationErrors: s,
                    validationDetails: l,
                };
            })({ ...e, label: w, validationBehavior: y }, g),
            P = (0, i.Sl)({
                ...e,
                values: {
                    isDisabled: g.isDisabled,
                    isReadOnly: g.isReadOnly,
                    isRequired: e.isRequired || !1,
                    isInvalid: g.isInvalid,
                    state: g,
                },
                defaultClassName: "react-aria-CheckboxGroup",
            }),
            A = (0, c.$)(e, { global: !0 });
        return h.createElement(
            "div",
            {
                ...(0, f.v)(A, P, _),
                ref: t,
                slot: e.slot || void 0,
                "data-readonly": g.isReadOnly || void 0,
                "data-required": e.isRequired || void 0,
                "data-invalid": g.isInvalid || void 0,
                "data-disabled": e.isDisabled || void 0,
            },
            h.createElement(
                i.Kq,
                {
                    values: [
                        [M, g],
                        [s.I, { ...S, ref: b, elementType: "span" }],
                        [l.h, { slots: { description: x, errorMessage: k } }],
                        [o.C, C],
                    ],
                },
                P.children,
            ),
        );
    }),
    A = (0, h.forwardRef)(function (e, t) {
        var r, o;
        let { inputRef: s = null, ...l } = e;
        [e, t] = (0, i.JT)(l, t, n.BP);
        let { validationBehavior: d } = (0, i.CC)(a.c) || {},
            p = null != (o = null != (r = e.validationBehavior) ? r : d) ? o : "native",
            v = (0, h.useContext)(M),
            y = (0, k.U)((0, h.useMemo)(() => (0, C.P)(s, void 0 !== e.inputRef ? e.inputRef : null), [s, e.inputRef])),
            {
                labelProps: g,
                inputProps: E,
                isSelected: T,
                isDisabled: P,
                isReadOnly: A,
                isPressed: I,
                isInvalid: O,
            } = v
                ? (function (e, t, r) {
                      var n, i;
                      let o = (0, w.H)({
                              isReadOnly: e.isReadOnly || t.isReadOnly,
                              isSelected: t.isSelected(e.value),
                              defaultSelected: t.defaultValue.includes(e.value),
                              onChange(r) {
                                  r ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(r);
                              },
                          }),
                          { name: a, form: s, descriptionId: l, errorMessageId: c, validationBehavior: f } = u.get(t);
                      f = null != (n = e.validationBehavior) ? n : f;
                      let { realtimeValidation: d } = (0, m.KZ)({
                              ...e,
                              value: o.isSelected,
                              name: void 0,
                              validationBehavior: "aria",
                          }),
                          p = (0, h.useRef)(m.YD),
                          v = () => {
                              t.setInvalid(e.value, d.isInvalid ? d : p.current);
                          };
                      (0, h.useEffect)(v);
                      let y = t.realtimeValidation.isInvalid ? t.realtimeValidation : d,
                          g = "native" === f ? t.displayValidation : y,
                          _ = b(
                              {
                                  ...e,
                                  isReadOnly: e.isReadOnly || t.isReadOnly,
                                  isDisabled: e.isDisabled || t.isDisabled,
                                  name: e.name || a,
                                  form: e.form || s,
                                  isRequired: null != (i = e.isRequired) ? i : t.isRequired,
                                  validationBehavior: f,
                                  [m.Lf]: {
                                      realtimeValidation: y,
                                      displayValidation: g,
                                      resetValidation: t.resetValidation,
                                      commitValidation: t.commitValidation,
                                      updateValidation(e) {
                                          (p.current = e), v();
                                      },
                                  },
                              },
                              o,
                              r,
                          );
                      return {
                          ..._,
                          inputProps: {
                              ..._.inputProps,
                              "aria-describedby":
                                  [e["aria-describedby"], t.isInvalid ? c : null, l].filter(Boolean).join(" ") ||
                                  void 0,
                          },
                      };
                  })({ ...(0, i.SK)(e), value: e.value, children: "function" == typeof e.children || e.children }, v, y)
                : b(
                      {
                          ...(0, i.SK)(e),
                          children: "function" == typeof e.children || e.children,
                          validationBehavior: p,
                      },
                      (0, w.H)(e),
                      y,
                  ),
            { isFocused: D, isFocusVisible: R, focusProps: L } = (0, _.o)(),
            F = P || A,
            { hoverProps: N, isHovered: j } = (0, S.M)({ ...e, isDisabled: F }),
            B = (0, i.Sl)({
                ...e,
                defaultClassName: "react-aria-Checkbox",
                values: {
                    isSelected: T,
                    isIndeterminate: e.isIndeterminate || !1,
                    isPressed: I,
                    isHovered: j,
                    isFocused: D,
                    isFocusVisible: R,
                    isDisabled: P,
                    isReadOnly: A,
                    isInvalid: O,
                    isRequired: e.isRequired || !1,
                },
            }),
            K = (0, c.$)(e, { global: !0 });
        return (
            delete K.id,
            delete K.onClick,
            h.createElement(
                "label",
                {
                    ...(0, f.v)(K, g, N, B),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-selected": T || void 0,
                    "data-indeterminate": e.isIndeterminate || void 0,
                    "data-pressed": I || void 0,
                    "data-hovered": j || void 0,
                    "data-focused": D || void 0,
                    "data-focus-visible": R || void 0,
                    "data-disabled": P || void 0,
                    "data-readonly": A || void 0,
                    "data-invalid": O || void 0,
                    "data-required": e.isRequired || void 0,
                },
                h.createElement(x.s, { elementType: "span" }, h.createElement("input", { ...(0, f.v)(E, L), ref: y })),
                B.children,
            )
        );
    });
