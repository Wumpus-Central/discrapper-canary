t.d(a, { OX: () => y, cJ: () => f, pK: () => p, so: () => g });
var n = t(938291),
    r = t(185288),
    i = t(693321),
    l = t(807177),
    o = t(318473),
    u = t(702992),
    s = t(290424),
    d = t(64700),
    c = t(986960),
    m = t(744493),
    h = t(96441),
    D = t(47276);
let y = new WeakMap(),
    p = "__role_" + Date.now(),
    g = "__focusManager_" + Date.now();
function f(e, a, t) {
    var f, v;
    let b,
        { isInvalid: R, validationErrors: $, validationDetails: w } = a.displayValidation,
        {
            labelProps: P,
            fieldProps: C,
            descriptionProps: k,
            errorMessageProps: x,
        } = (0, c.M)({ ...e, labelElementType: "span", isInvalid: R, errorMessage: e.errorMessage || $ }),
        E = (0, d.useRef)(null),
        { focusWithinProps: S } = (0, m.R)({
            ...e,
            onFocusWithin(t) {
                var n;
                (E.current = a.value), null == (n = e.onFocus) || n.call(e, t);
            },
            onBlurWithin: (t) => {
                var n;
                a.confirmPlaceholder(),
                    a.value !== E.current && a.commitValidation(),
                    null == (n = e.onBlur) || n.call(e, t);
            },
            onFocusWithinChange: e.onFocusChange,
        }),
        V = (0, D.o)((v = n.A) && v.__esModule ? v.default : v, "@react-aria/datepicker"),
        F = "hour" === a.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
        B = "hour" === a.maxGranularity ? "time" : "date",
        M = a.value ? V.format(F, { [B]: a.formatValue({ month: "long" }) }) : "",
        I = (0, l.I)(M),
        A =
            "presentation" === e[p]
                ? C["aria-describedby"]
                : [I["aria-describedby"], C["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        T = e[g],
        O = (0, d.useMemo)(() => T || (0, i.C7)(t), [T, t]),
        N = (0, r.P)(a, t, "presentation" === e[p]);
    y.set(a, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: [P.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
        ariaDescribedBy: A,
        focusManager: O,
    });
    let Z = (0, d.useRef)(e.autoFocus);
    (b =
        "presentation" === e[p]
            ? { role: "presentation" }
            : (0, o.v)(C, { role: "group", "aria-disabled": e.isDisabled || void 0, "aria-describedby": A })),
        (0, d.useEffect)(() => {
            Z.current && O.focusFirst(), (Z.current = !1);
        }, [O]),
        (0, u.F)(e.inputRef, a.defaultValue, a.setValue),
        (0, h.X)(
            {
                ...e,
                focus() {
                    O.focusFirst();
                },
            },
            a,
            e.inputRef,
        );
    let z = {
        type: "hidden",
        name: e.name,
        form: e.form,
        value: (null == (f = a.value) ? void 0 : f.toString()) || "",
        disabled: e.isDisabled,
    };
    "native" === e.validationBehavior &&
        ((z.type = "text"), (z.hidden = !0), (z.required = e.isRequired), (z.onChange = () => {}));
    let U = (0, s.$)(e);
    return {
        labelProps: {
            ...P,
            onClick: () => {
                O.focusFirst();
            },
        },
        fieldProps: (0, o.v)(U, b, N, S, {
            onKeyDown(a) {
                e.onKeyDown && e.onKeyDown(a);
            },
            onKeyUp(a) {
                e.onKeyUp && e.onKeyUp(a);
            },
            style: { unicodeBidi: "isolate" },
        }),
        inputProps: z,
        descriptionProps: k,
        errorMessageProps: x,
        isInvalid: R,
        validationErrors: $,
        validationDetails: w,
    };
}
