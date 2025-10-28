t.d(a, {
    IZ: () => g,
    KX: () => y,
    Lh: () => f,
});
var u = t(616868),
    n = t(669231),
    r = t(750528),
    i = t(682308),
    o = t(43341),
    l = t(166435),
    s = t(735437),
    d = t(647438),
    c = t(923108),
    m = t(576173),
    D = t(51386),
    h = t(970185);
let f = new WeakMap(),
    y = "__role_" + Date.now(),
    p = "__focusManager_" + Date.now();
function g(e, a, t) {
    var g, v;
    let b,
        { isInvalid: C, validationErrors: x, validationDetails: B } = a.displayValidation,
        {
            labelProps: E,
            fieldProps: F,
            descriptionProps: w,
            errorMessageProps: $,
        } = (0, c.U)({
            ...e,
            labelElementType: "span",
            isInvalid: C,
            errorMessage: e.errorMessage || x,
        }),
        R = (0, d.useRef)(null),
        { focusWithinProps: Z } = (0, m.L)({
            ...e,
            onFocusWithin(t) {
                var u;
                (R.current = a.value), null == (u = e.onFocus) || u.call(e, t);
            },
            onBlurWithin: (t) => {
                var u;
                a.confirmPlaceholder(),
                    a.value !== R.current && a.commitValidation(),
                    null == (u = e.onBlur) || u.call(e, t);
            },
            onFocusWithinChange: e.onFocusChange,
        }),
        k = (0, h.q)((v = u.Z) && v.__esModule ? v.default : v, "@react-aria/datepicker"),
        A = "hour" === a.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
        P = "hour" === a.maxGranularity ? "time" : "date",
        S = a.value ? k.format(A, { [P]: a.formatValue({ month: "long" }) }) : "",
        M = (0, i.P)(S),
        V =
            "presentation" === e[y]
                ? F["aria-describedby"]
                : [M["aria-describedby"], F["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        I = e[p],
        z = (0, d.useMemo)(() => I || (0, r.E7)(t), [I, t]),
        O = (0, n.H)(a, t, "presentation" === e[y]);
    f.set(a, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: [E.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
        ariaDescribedBy: V,
        focusManager: z,
    });
    let j = (0, d.useRef)(e.autoFocus);
    (b =
        "presentation" === e[y]
            ? { role: "presentation" }
            : (0, o.d)(F, {
                  role: "group",
                  "aria-disabled": e.isDisabled || void 0,
                  "aria-describedby": V,
              })),
        (0, d.useEffect)(() => {
            j.current && z.focusFirst(), (j.current = !1);
        }, [z]),
        (0, l.y)(e.inputRef, a.defaultValue, a.setValue),
        (0, D.Q)(
            {
                ...e,
                focus() {
                    z.focusFirst();
                },
            },
            a,
            e.inputRef,
        );
    let T = {
        type: "hidden",
        name: e.name,
        form: e.form,
        value: (null == (g = a.value) ? void 0 : g.toString()) || "",
        disabled: e.isDisabled,
    };
    "native" === e.validationBehavior &&
        ((T.type = "text"), (T.hidden = !0), (T.required = e.isRequired), (T.onChange = () => {}));
    let N = (0, s.z)(e);
    return {
        labelProps: {
            ...E,
            onClick: () => {
                z.focusFirst();
            },
        },
        fieldProps: (0, o.d)(N, b, O, Z, {
            onKeyDown(a) {
                e.onKeyDown && e.onKeyDown(a);
            },
            onKeyUp(a) {
                e.onKeyUp && e.onKeyUp(a);
            },
            style: { unicodeBidi: "isolate" },
        }),
        inputProps: T,
        descriptionProps: w,
        errorMessageProps: $,
        isInvalid: C,
        validationErrors: x,
        validationDetails: B,
    };
}
