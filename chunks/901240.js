"use strict";
r.d(t, { Sc: () => A, $Q: () => P });
var n = r(349797),
    o = r(760029),
    i = r(955548),
    a = r(171784),
    s = r(772856),
    l = r(208223);
let u = new WeakMap();
var c = r(201092),
    f = r(192734),
    p = r(553444),
    d = r(492273),
    h = r(582128),
    m = r(248725),
    v = r(199901),
    y = r(404903),
    g = r(568864);
function b(e, t, r) {
    let n = (0, m.KZ)({ ...e, value: t.isSelected }),
        { isInvalid: o, validationErrors: i, validationDetails: a } = n.displayValidation,
        {
            labelProps: s,
            inputProps: l,
            isSelected: u,
            isPressed: c,
            isDisabled: p,
            isReadOnly: d,
        } = (0, g.e)({ ...e, isInvalid: o }, t, r);
    (0, v.X)(e, n, r);
    let { isIndeterminate: b, isRequired: w, validationBehavior: _ = "aria" } = e;
    (0, h.useEffect)(() => {
        r.current && (r.current.indeterminate = !!b);
    });
    let { pressProps: S } = (0, y.d)({
        isDisabled: p || d,
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
        isDisabled: p,
        isReadOnly: d,
        isInvalid: o,
        validationErrors: i,
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
        [e, t] = (0, o.JT)(e, t, T);
        let { validationBehavior: v } = (0, o.CC)(a.c) || {},
            y = null != (n = null != (r = e.validationBehavior) ? r : v) ? n : "native",
            g = (function (e = {}) {
                var t, r;
                let [n, o] = (0, E.P)(e.value, e.defaultValue || [], e.onChange),
                    [i] = (0, h.useState)(n),
                    a = !!e.isRequired && 0 === n.length,
                    s = (0, h.useRef)(new Map()),
                    l = (0, m.KZ)({ ...e, value: n }),
                    u = l.displayValidation.isInvalid;
                return {
                    ...l,
                    value: n,
                    defaultValue: null != (t = e.defaultValue) ? t : i,
                    setValue(t) {
                        e.isReadOnly || e.isDisabled || o(t);
                    },
                    isDisabled: e.isDisabled || !1,
                    isReadOnly: e.isReadOnly || !1,
                    isSelected: (e) => n.includes(e),
                    addValue(t) {
                        e.isReadOnly || e.isDisabled || n.includes(t) || o((n = n.concat(t)));
                    },
                    removeValue(t) {
                        e.isReadOnly || e.isDisabled || (n.includes(t) && o(n.filter((e) => e !== t)));
                    },
                    toggleValue(t) {
                        e.isReadOnly || e.isDisabled || (n.includes(t) ? o(n.filter((e) => e !== t)) : o(n.concat(t)));
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
            [b, w] = (0, o._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: _,
                labelProps: S,
                descriptionProps: x,
                errorMessageProps: k,
                ...C
            } = (function (e, t) {
                let { isDisabled: r, name: n, form: o, validationBehavior: i = "aria" } = e,
                    { isInvalid: a, validationErrors: s, validationDetails: l } = t.displayValidation,
                    {
                        labelProps: h,
                        fieldProps: m,
                        descriptionProps: v,
                        errorMessageProps: y,
                    } = (0, p.M)({ ...e, labelElementType: "span", isInvalid: a, errorMessage: e.errorMessage || s });
                u.set(t, { name: n, form: o, descriptionId: v.id, errorMessageId: y.id, validationBehavior: i });
                let g = (0, c.$)(e, { labelable: !0 }),
                    { focusWithinProps: b } = (0, d.R)({
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
            P = (0, o.Sl)({
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
                o.Kq,
                {
                    values: [
                        [M, g],
                        [s.I, { ...S, ref: b, elementType: "span" }],
                        [l.h, { slots: { description: x, errorMessage: k } }],
                        [i.C, C],
                    ],
                },
                P.children,
            ),
        );
    }),
    A = (0, h.forwardRef)(function (e, t) {
        var r, i;
        let { inputRef: s = null, ...l } = e;
        [e, t] = (0, o.JT)(l, t, n.BP);
        let { validationBehavior: p } = (0, o.CC)(a.c) || {},
            d = null != (i = null != (r = e.validationBehavior) ? r : p) ? i : "native",
            v = (0, h.useContext)(M),
            y = (0, k.U)((0, h.useMemo)(() => (0, C.P)(s, void 0 !== e.inputRef ? e.inputRef : null), [s, e.inputRef])),
            {
                labelProps: g,
                inputProps: E,
                isSelected: T,
                isDisabled: P,
                isReadOnly: A,
                isPressed: O,
                isInvalid: I,
            } = v
                ? (function (e, t, r) {
                      var n, o;
                      let i = (0, w.H)({
                              isReadOnly: e.isReadOnly || t.isReadOnly,
                              isSelected: t.isSelected(e.value),
                              defaultSelected: t.defaultValue.includes(e.value),
                              onChange(r) {
                                  r ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(r);
                              },
                          }),
                          { name: a, form: s, descriptionId: l, errorMessageId: c, validationBehavior: f } = u.get(t);
                      f = null != (n = e.validationBehavior) ? n : f;
                      let { realtimeValidation: p } = (0, m.KZ)({
                              ...e,
                              value: i.isSelected,
                              name: void 0,
                              validationBehavior: "aria",
                          }),
                          d = (0, h.useRef)(m.YD),
                          v = () => {
                              t.setInvalid(e.value, p.isInvalid ? p : d.current);
                          };
                      (0, h.useEffect)(v);
                      let y = t.realtimeValidation.isInvalid ? t.realtimeValidation : p,
                          g = "native" === f ? t.displayValidation : y,
                          _ = b(
                              {
                                  ...e,
                                  isReadOnly: e.isReadOnly || t.isReadOnly,
                                  isDisabled: e.isDisabled || t.isDisabled,
                                  name: e.name || a,
                                  form: e.form || s,
                                  isRequired: null != (o = e.isRequired) ? o : t.isRequired,
                                  validationBehavior: f,
                                  [m.Lf]: {
                                      realtimeValidation: y,
                                      displayValidation: g,
                                      resetValidation: t.resetValidation,
                                      commitValidation: t.commitValidation,
                                      updateValidation(e) {
                                          (d.current = e), v();
                                      },
                                  },
                              },
                              i,
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
                  })({ ...(0, o.SK)(e), value: e.value, children: "function" == typeof e.children || e.children }, v, y)
                : b(
                      {
                          ...(0, o.SK)(e),
                          children: "function" == typeof e.children || e.children,
                          validationBehavior: d,
                      },
                      (0, w.H)(e),
                      y,
                  ),
            { isFocused: D, isFocusVisible: L, focusProps: R } = (0, _.o)(),
            F = P || A,
            { hoverProps: N, isHovered: j } = (0, S.M)({ ...e, isDisabled: F }),
            B = (0, o.Sl)({
                ...e,
                defaultClassName: "react-aria-Checkbox",
                values: {
                    isSelected: T,
                    isIndeterminate: e.isIndeterminate || !1,
                    isPressed: O,
                    isHovered: j,
                    isFocused: D,
                    isFocusVisible: L,
                    isDisabled: P,
                    isReadOnly: A,
                    isInvalid: I,
                    isRequired: e.isRequired || !1,
                },
            }),
            $ = (0, c.$)(e, { global: !0 });
        return (
            delete $.id,
            delete $.onClick,
            h.createElement(
                "label",
                {
                    ...(0, f.v)($, g, N, B),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-selected": T || void 0,
                    "data-indeterminate": e.isIndeterminate || void 0,
                    "data-pressed": O || void 0,
                    "data-hovered": j || void 0,
                    "data-focused": D || void 0,
                    "data-focus-visible": L || void 0,
                    "data-disabled": P || void 0,
                    "data-readonly": A || void 0,
                    "data-invalid": I || void 0,
                    "data-required": e.isRequired || void 0,
                },
                h.createElement(x.s, { elementType: "span" }, h.createElement("input", { ...(0, f.v)(E, R), ref: y })),
                B.children,
            )
        );
    });
