t.d(a, { OX: () => y, cJ: () => f, pK: () => p });
var r = t(908909),
    n = t(185288),
    i = t(13163),
    o = t(807177),
    u = t(803082),
    l = t(702992),
    s = t(290424),
    d = t(64700),
    c = t(447432),
    m = t(744493),
    h = t(96441),
    D = t(47276);
let y = new WeakMap(),
    p = "__role_" + Date.now(),
    g = "__focusManager_" + Date.now();
function f(e, a, t) {
    var f, v;
    let b,
        { isInvalid: A, validationErrors: $, validationDetails: w } = a.displayValidation,
        {
            labelProps: R,
            fieldProps: P,
            descriptionProps: k,
            errorMessageProps: x,
        } = (0, c.M)({ ...e, labelElementType: "span", isInvalid: A, errorMessage: e.errorMessage || $ }),
        C = (0, d.useRef)(null),
        { focusWithinProps: E } = (0, m.R)({
            ...e,
            onFocusWithin(t) {
                var r;
                (C.current = a.value), null == (r = e.onFocus) || r.call(e, t);
            },
            onBlurWithin: (t) => {
                var r;
                a.confirmPlaceholder(),
                    a.value !== C.current && a.commitValidation(),
                    null == (r = e.onBlur) || r.call(e, t);
            },
            onFocusWithinChange: e.onFocusChange,
        }),
        S = (0, D.o)((v = r.A) && v.__esModule ? v.default : v, "@react-aria/datepicker"),
        F = "hour" === a.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
        B = "hour" === a.maxGranularity ? "time" : "date",
        V = a.value ? S.format(F, { [B]: a.formatValue({ month: "long" }) }) : "",
        M = (0, o.I)(V),
        I =
            "presentation" === e[p]
                ? P["aria-describedby"]
                : [M["aria-describedby"], P["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        T = e[g],
        O = (0, d.useMemo)(() => T || (0, i.C7)(t), [T, t]),
        N = (0, n.P)(a, t, "presentation" === e[p]);
    y.set(a, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: [R.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
        ariaDescribedBy: I,
        focusManager: O,
    });
    let z = (0, d.useRef)(e.autoFocus);
    (b =
        "presentation" === e[p]
            ? { role: "presentation" }
            : (0, u.v)(P, { role: "group", "aria-disabled": e.isDisabled || void 0, "aria-describedby": I })),
        (0, d.useEffect)(() => {
            z.current && O.focusFirst(), (z.current = !1);
        }, [O]),
        (0, l.F)(e.inputRef, a.defaultValue, a.setValue),
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
    let j = {
        type: "hidden",
        name: e.name,
        form: e.form,
        value: (null == (f = a.value) ? void 0 : f.toString()) || "",
        disabled: e.isDisabled,
    };
    "native" === e.validationBehavior &&
        ((j.type = "text"), (j.hidden = !0), (j.required = e.isRequired), (j.onChange = () => {}));
    let Z = (0, s.$)(e);
    return {
        labelProps: {
            ...R,
            onClick: () => {
                O.focusFirst();
            },
        },
        fieldProps: (0, u.v)(Z, b, N, E, {
            onKeyDown(a) {
                e.onKeyDown && e.onKeyDown(a);
            },
            onKeyUp(a) {
                e.onKeyUp && e.onKeyUp(a);
            },
            style: { unicodeBidi: "isolate" },
        }),
        inputProps: j,
        descriptionProps: k,
        errorMessageProps: x,
        isInvalid: A,
        validationErrors: $,
        validationDetails: w,
    };
}
