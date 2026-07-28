"use strict";
n.d(t, { Sc: () => M, $Q: () => A });
var r = n(349797),
    i = n(760029),
    a = n(955548),
    o = n(171784),
    s = n(772856),
    l = n(208223);
let u = new WeakMap();
var c = n(201092),
    d = n(192734),
    f = n(553444),
    p = n(492273),
    h = n(582128),
    m = n(248725),
    g = n(199901),
    v = n(404903),
    y = n(568864);
function b(e, t, n) {
    let r = (0, m.KZ)({ ...e, value: t.isSelected }),
        { isInvalid: i, validationErrors: a, validationDetails: o } = r.displayValidation,
        {
            labelProps: s,
            inputProps: l,
            isSelected: u,
            isPressed: c,
            isDisabled: f,
            isReadOnly: p,
        } = (0, y.e)({ ...e, isInvalid: i }, t, n);
    (0, g.X)(e, r, n);
    let { isIndeterminate: b, isRequired: _, validationBehavior: w = "aria" } = e;
    (0, h.useEffect)(() => {
        n.current && (n.current.indeterminate = !!b);
    });
    let { pressProps: x } = (0, v.d)({
        isDisabled: f || p,
        onPress() {
            let { [m.Lf]: t } = e,
                { commitValidation: n } = t || r;
            n();
        },
    });
    return {
        labelProps: (0, d.v)(
            s,
            x,
            (0, h.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), []),
        ),
        inputProps: { ...l, checked: u, "aria-required": (_ && "aria" === w) || void 0, required: _ && "native" === w },
        isSelected: u,
        isPressed: c,
        isDisabled: f,
        isReadOnly: p,
        isInvalid: i,
        validationErrors: a,
        validationDetails: o,
    };
}
var _ = n(60339),
    w = n(1730),
    x = n(400274),
    E = n(64659),
    S = n(992533),
    k = n(334887),
    T = n(909630);
let C = (0, h.createContext)(null),
    P = (0, h.createContext)(null),
    A = (0, h.forwardRef)(function (e, t) {
        var n, r;
        [e, t] = (0, i.JT)(e, t, C);
        let { validationBehavior: g } = (0, i.CC)(o.c) || {},
            v = null != (r = null != (n = e.validationBehavior) ? n : g) ? r : "native",
            y = (function (e = {}) {
                var t, n;
                let [r, i] = (0, S.P)(e.value, e.defaultValue || [], e.onChange),
                    [a] = (0, h.useState)(r),
                    o = !!e.isRequired && 0 === r.length,
                    s = (0, h.useRef)(new Map()),
                    l = (0, m.KZ)({ ...e, value: r }),
                    u = l.displayValidation.isInvalid;
                return {
                    ...l,
                    value: r,
                    defaultValue: null != (t = e.defaultValue) ? t : a,
                    setValue(t) {
                        e.isReadOnly || e.isDisabled || i(t);
                    },
                    isDisabled: e.isDisabled || !1,
                    isReadOnly: e.isReadOnly || !1,
                    isSelected: (e) => r.includes(e),
                    addValue(t) {
                        e.isReadOnly || e.isDisabled || r.includes(t) || i((r = r.concat(t)));
                    },
                    removeValue(t) {
                        e.isReadOnly || e.isDisabled || (r.includes(t) && i(r.filter((e) => e !== t)));
                    },
                    toggleValue(t) {
                        e.isReadOnly || e.isDisabled || (r.includes(t) ? i(r.filter((e) => e !== t)) : i(r.concat(t)));
                    },
                    setInvalid(e, t) {
                        let n = new Map(s.current);
                        t.isInvalid ? n.set(e, t) : n.delete(e),
                            (s.current = n),
                            l.updateValidation((0, m.cX)(...n.values()));
                    },
                    validationState: null != (n = e.validationState) ? n : u ? "invalid" : null,
                    isInvalid: u,
                    isRequired: o,
                };
            })({ ...e, validationBehavior: v }),
            [b, _] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: w,
                labelProps: x,
                descriptionProps: E,
                errorMessageProps: k,
                ...T
            } = (function (e, t) {
                let { isDisabled: n, name: r, form: i, validationBehavior: a = "aria" } = e,
                    { isInvalid: o, validationErrors: s, validationDetails: l } = t.displayValidation,
                    {
                        labelProps: h,
                        fieldProps: m,
                        descriptionProps: g,
                        errorMessageProps: v,
                    } = (0, f.M)({ ...e, labelElementType: "span", isInvalid: o, errorMessage: e.errorMessage || s });
                u.set(t, { name: r, form: i, descriptionId: g.id, errorMessageId: v.id, validationBehavior: a });
                let y = (0, c.$)(e, { labelable: !0 }),
                    { focusWithinProps: b } = (0, p.R)({
                        onBlurWithin: e.onBlur,
                        onFocusWithin: e.onFocus,
                        onFocusWithinChange: e.onFocusChange,
                    });
                return {
                    groupProps: (0, d.v)(y, { role: "group", "aria-disabled": n || void 0, ...m, ...b }),
                    labelProps: h,
                    descriptionProps: g,
                    errorMessageProps: v,
                    isInvalid: o,
                    validationErrors: s,
                    validationDetails: l,
                };
            })({ ...e, label: _, validationBehavior: v }, y),
            A = (0, i.Sl)({
                ...e,
                values: {
                    isDisabled: y.isDisabled,
                    isReadOnly: y.isReadOnly,
                    isRequired: e.isRequired || !1,
                    isInvalid: y.isInvalid,
                    state: y,
                },
                defaultClassName: "react-aria-CheckboxGroup",
            }),
            M = (0, c.$)(e, { global: !0 });
        return h.createElement(
            "div",
            {
                ...(0, d.v)(M, A, w),
                ref: t,
                slot: e.slot || void 0,
                "data-readonly": y.isReadOnly || void 0,
                "data-required": e.isRequired || void 0,
                "data-invalid": y.isInvalid || void 0,
                "data-disabled": e.isDisabled || void 0,
            },
            h.createElement(
                i.Kq,
                {
                    values: [
                        [P, y],
                        [s.I, { ...x, ref: b, elementType: "span" }],
                        [l.h, { slots: { description: E, errorMessage: k } }],
                        [a.C, T],
                    ],
                },
                A.children,
            ),
        );
    }),
    M = (0, h.forwardRef)(function (e, t) {
        var n, a;
        let { inputRef: s = null, ...l } = e;
        [e, t] = (0, i.JT)(l, t, r.BP);
        let { validationBehavior: f } = (0, i.CC)(o.c) || {},
            p = null != (a = null != (n = e.validationBehavior) ? n : f) ? a : "native",
            g = (0, h.useContext)(P),
            v = (0, k.U)((0, h.useMemo)(() => (0, T.P)(s, void 0 !== e.inputRef ? e.inputRef : null), [s, e.inputRef])),
            {
                labelProps: y,
                inputProps: S,
                isSelected: C,
                isDisabled: A,
                isReadOnly: M,
                isPressed: R,
                isInvalid: I,
            } = g
                ? (function (e, t, n) {
                      var r, i;
                      let a = (0, _.H)({
                              isReadOnly: e.isReadOnly || t.isReadOnly,
                              isSelected: t.isSelected(e.value),
                              defaultSelected: t.defaultValue.includes(e.value),
                              onChange(n) {
                                  n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n);
                              },
                          }),
                          { name: o, form: s, descriptionId: l, errorMessageId: c, validationBehavior: d } = u.get(t);
                      d = null != (r = e.validationBehavior) ? r : d;
                      let { realtimeValidation: f } = (0, m.KZ)({
                              ...e,
                              value: a.isSelected,
                              name: void 0,
                              validationBehavior: "aria",
                          }),
                          p = (0, h.useRef)(m.YD),
                          g = () => {
                              t.setInvalid(e.value, f.isInvalid ? f : p.current);
                          };
                      (0, h.useEffect)(g);
                      let v = t.realtimeValidation.isInvalid ? t.realtimeValidation : f,
                          y = "native" === d ? t.displayValidation : v,
                          w = b(
                              {
                                  ...e,
                                  isReadOnly: e.isReadOnly || t.isReadOnly,
                                  isDisabled: e.isDisabled || t.isDisabled,
                                  name: e.name || o,
                                  form: e.form || s,
                                  isRequired: null != (i = e.isRequired) ? i : t.isRequired,
                                  validationBehavior: d,
                                  [m.Lf]: {
                                      realtimeValidation: v,
                                      displayValidation: y,
                                      resetValidation: t.resetValidation,
                                      commitValidation: t.commitValidation,
                                      updateValidation(e) {
                                          (p.current = e), g();
                                      },
                                  },
                              },
                              a,
                              n,
                          );
                      return {
                          ...w,
                          inputProps: {
                              ...w.inputProps,
                              "aria-describedby":
                                  [e["aria-describedby"], t.isInvalid ? c : null, l].filter(Boolean).join(" ") ||
                                  void 0,
                          },
                      };
                  })({ ...(0, i.SK)(e), value: e.value, children: "function" == typeof e.children || e.children }, g, v)
                : b(
                      {
                          ...(0, i.SK)(e),
                          children: "function" == typeof e.children || e.children,
                          validationBehavior: p,
                      },
                      (0, _.H)(e),
                      v,
                  ),
            { isFocused: L, isFocusVisible: O, focusProps: D } = (0, w.o)(),
            F = A || M,
            { hoverProps: N, isHovered: V } = (0, x.M)({ ...e, isDisabled: F }),
            j = (0, i.Sl)({
                ...e,
                defaultClassName: "react-aria-Checkbox",
                values: {
                    isSelected: C,
                    isIndeterminate: e.isIndeterminate || !1,
                    isPressed: R,
                    isHovered: V,
                    isFocused: L,
                    isFocusVisible: O,
                    isDisabled: A,
                    isReadOnly: M,
                    isInvalid: I,
                    isRequired: e.isRequired || !1,
                },
            }),
            B = (0, c.$)(e, { global: !0 });
        return (
            delete B.id,
            delete B.onClick,
            h.createElement(
                "label",
                {
                    ...(0, d.v)(B, y, N, j),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-selected": C || void 0,
                    "data-indeterminate": e.isIndeterminate || void 0,
                    "data-pressed": R || void 0,
                    "data-hovered": V || void 0,
                    "data-focused": L || void 0,
                    "data-focus-visible": O || void 0,
                    "data-disabled": A || void 0,
                    "data-readonly": M || void 0,
                    "data-invalid": I || void 0,
                    "data-required": e.isRequired || void 0,
                },
                h.createElement(E.s, { elementType: "span" }, h.createElement("input", { ...(0, d.v)(S, D), ref: v })),
                j.children,
            )
        );
    });
