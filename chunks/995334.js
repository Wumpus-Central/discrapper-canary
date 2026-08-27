t.d(a, { OX: () => D, cJ: () => f, pK: () => p, so: () => g });
var r = t(117530),
    n = t(961082),
    i = t(394714),
    o = t(184093),
    l = t(152469),
    u = t(383491),
    s = t(465878),
    d = t(761412),
    c = t(560754),
    m = t(721689),
    h = t(481238),
    y = t(582128);
let D = new WeakMap(),
    p = "__reactAriaDateFieldRole",
    g = "__reactAriaDateFieldFocusManager";
function f(e, a, t) {
    var f;
    let v,
        { isInvalid: b, validationErrors: $, validationDetails: R } = a.displayValidation,
        {
            labelProps: P,
            fieldProps: w,
            descriptionProps: C,
            errorMessageProps: x,
        } = (0, s.M)({ ...e, labelElementType: "span", isInvalid: b, errorMessage: e.errorMessage || $ }),
        k = (0, y.useRef)(null),
        { focusWithinProps: S } = (0, d.R)({
            ...e,
            onFocusWithin(t) {
                (k.current = a.value), e.onFocus?.(t);
            },
            onBlurWithin: (t) => {
                a.confirmPlaceholder(), a.value !== k.current && a.commitValidation(), e.onBlur?.(t);
            },
            onFocusWithinChange: e.onFocusChange,
        }),
        E = (0, h.o)((f = i.A) && f.__esModule ? f.default : f, "@react-aria/datepicker"),
        V = "hour" === a.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
        F = "hour" === a.maxGranularity ? "time" : "date",
        B = a.value ? E.format(V, { [F]: a.formatValue({ month: "long" }) }) : "",
        M = (0, u.I)(B),
        I =
            "presentation" === e[p]
                ? w["aria-describedby"]
                : [M["aria-describedby"], w["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        A = e[g],
        T = (0, y.useMemo)(() => A || (0, r.C7)(t), [A, t]),
        O = (0, l.P)(a, t, "presentation" === e[p]);
    D.set(a, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: [P.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
        ariaDescribedBy: I,
        focusManager: T,
    });
    let N = (0, y.useRef)(e.autoFocus);
    (v =
        "presentation" === e[p]
            ? { role: "presentation" }
            : (0, o.v)(w, { role: "group", "aria-disabled": e.isDisabled || void 0, "aria-describedby": I })),
        (0, y.useEffect)(() => {
            N.current && T.focusFirst(), (N.current = !1);
        }, [T]),
        (0, c.F)(e.inputRef, a.defaultValue, a.setValue),
        (0, m.X)(
            {
                ...e,
                focus() {
                    T.focusFirst();
                },
            },
            a,
            e.inputRef,
        );
    let Z = { type: "hidden", name: e.name, form: e.form, value: a.value?.toString() || "", disabled: e.isDisabled };
    "native" === e.validationBehavior &&
        ((Z.type = "text"), (Z.hidden = !0), (Z.required = e.isRequired), (Z.onChange = () => {}));
    let U = (0, n.$)(e);
    return {
        labelProps: {
            ...P,
            onClick: () => {
                T.focusFirst();
            },
        },
        fieldProps: (0, o.v)(U, v, O, S, {
            onKeyDown: e.onKeyDown,
            onKeyUp: e.onKeyUp,
            style: { unicodeBidi: "isolate" },
        }),
        inputProps: Z,
        descriptionProps: C,
        errorMessageProps: x,
        isInvalid: b,
        validationErrors: $,
        validationDetails: R,
    };
}
