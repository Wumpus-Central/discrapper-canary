t.d(a, { OX: () => D, cJ: () => v, pK: () => p, so: () => g });
var r = t(908909),
    n = t(185288),
    i = t(13163),
    l = t(807177),
    o = t(803082),
    u = t(702992),
    s = t(290424),
    d = t(64700),
    c = t(447432),
    m = t(744493),
    h = t(96441),
    y = t(47276);
let D = new WeakMap(),
    p = "__role_" + Date.now(),
    g = "__focusManager_" + Date.now();
function v(e, a, t) {
    var v, f;
    let b,
        { isInvalid: A, validationErrors: R, validationDetails: $ } = a.displayValidation,
        {
            labelProps: w,
            fieldProps: P,
            descriptionProps: C,
            errorMessageProps: k,
        } = (0, c.M)({ ...e, labelElementType: "span", isInvalid: A, errorMessage: e.errorMessage || R }),
        x = (0, d.useRef)(null),
        { focusWithinProps: E } = (0, m.R)({
            ...e,
            onFocusWithin(t) {
                var r;
                (x.current = a.value), null == (r = e.onFocus) || r.call(e, t);
            },
            onBlurWithin: (t) => {
                var r;
                a.confirmPlaceholder(),
                    a.value !== x.current && a.commitValidation(),
                    null == (r = e.onBlur) || r.call(e, t);
            },
            onFocusWithinChange: e.onFocusChange,
        }),
        S = (0, y.o)((f = r.A) && f.__esModule ? f.default : f, "@react-aria/datepicker"),
        V = "hour" === a.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
        F = "hour" === a.maxGranularity ? "time" : "date",
        B = a.value ? S.format(V, { [F]: a.formatValue({ month: "long" }) }) : "",
        M = (0, l.I)(B),
        I =
            "presentation" === e[p]
                ? P["aria-describedby"]
                : [M["aria-describedby"], P["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        T = e[g],
        O = (0, d.useMemo)(() => T || (0, i.C7)(t), [T, t]),
        N = (0, n.P)(a, t, "presentation" === e[p]);
    D.set(a, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: [w.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
        ariaDescribedBy: I,
        focusManager: O,
    });
    let Z = (0, d.useRef)(e.autoFocus);
    (b =
        "presentation" === e[p]
            ? { role: "presentation" }
            : (0, o.v)(P, { role: "group", "aria-disabled": e.isDisabled || void 0, "aria-describedby": I })),
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
        value: (null == (v = a.value) ? void 0 : v.toString()) || "",
        disabled: e.isDisabled,
    };
    "native" === e.validationBehavior &&
        ((z.type = "text"), (z.hidden = !0), (z.required = e.isRequired), (z.onChange = () => {}));
    let U = (0, s.$)(e);
    return {
        labelProps: {
            ...w,
            onClick: () => {
                O.focusFirst();
            },
        },
        fieldProps: (0, o.v)(U, b, N, E, {
            onKeyDown(a) {
                e.onKeyDown && e.onKeyDown(a);
            },
            onKeyUp(a) {
                e.onKeyUp && e.onKeyUp(a);
            },
            style: { unicodeBidi: "isolate" },
        }),
        inputProps: z,
        descriptionProps: C,
        errorMessageProps: k,
        isInvalid: A,
        validationErrors: R,
        validationDetails: $,
    };
}
