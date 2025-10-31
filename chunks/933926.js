n.d(t, {
    IZ: () => b,
    KX: () => g,
    Lh: () => m,
});
var r = n(616868),
    i = n(669231),
    a = n(750528),
    o = n(682308),
    s = n(43341),
    l = n(166435),
    c = n(735437),
    u = n(647438),
    d = n(923108),
    f = n(576173),
    _ = n(51386),
    p = n(970185);
function h(e) {
    return e && e.__esModule ? e.default : e;
}
let m = new WeakMap(),
    g = "__role_" + Date.now(),
    E = "__focusManager_" + Date.now();
function b(e, t, n) {
    var b;
    let y,
        { isInvalid: O, validationErrors: v, validationDetails: I } = t.displayValidation,
        {
            labelProps: T,
            fieldProps: S,
            descriptionProps: A,
            errorMessageProps: C,
        } = (0, d.U)({
            ...e,
            labelElementType: "span",
            isInvalid: O,
            errorMessage: e.errorMessage || v,
        }),
        N = (0, u.useRef)(null),
        { focusWithinProps: R } = (0, f.L)({
            ...e,
            onFocusWithin(n) {
                var r;
                (N.current = t.value), null == (r = e.onFocus) || r.call(e, n);
            },
            onBlurWithin: (n) => {
                var r;
                t.confirmPlaceholder(),
                    t.value !== N.current && t.commitValidation(),
                    null == (r = e.onBlur) || r.call(e, n);
            },
            onFocusWithinChange: e.onFocusChange,
        }),
        P = (0, p.q)(h(r.Z), "@react-aria/datepicker"),
        w = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
        D = "hour" === t.maxGranularity ? "time" : "date",
        x = t.value ? P.format(w, { [D]: t.formatValue({ month: "long" }) }) : "",
        L = (0, o.P)(x),
        M =
            "presentation" === e[g]
                ? S["aria-describedby"]
                : [L["aria-describedby"], S["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        j = e[E],
        k = (0, u.useMemo)(() => j || (0, a.E7)(n), [j, n]),
        U = (0, i.H)(t, n, "presentation" === e[g]);
    m.set(t, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: [T.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
        ariaDescribedBy: M,
        focusManager: k,
    });
    let G = (0, u.useRef)(e.autoFocus);
    (y =
        "presentation" === e[g]
            ? { role: "presentation" }
            : (0, s.d)(S, {
                  role: "group",
                  "aria-disabled": e.isDisabled || void 0,
                  "aria-describedby": M,
              })),
        (0, u.useEffect)(() => {
            G.current && k.focusFirst(), (G.current = !1);
        }, [k]),
        (0, l.y)(e.inputRef, t.defaultValue, t.setValue),
        (0, _.Q)(
            {
                ...e,
                focus() {
                    k.focusFirst();
                },
            },
            t,
            e.inputRef,
        );
    let B = {
        type: "hidden",
        name: e.name,
        form: e.form,
        value: (null == (b = t.value) ? void 0 : b.toString()) || "",
        disabled: e.isDisabled,
    };
    "native" === e.validationBehavior &&
        ((B.type = "text"), (B.hidden = !0), (B.required = e.isRequired), (B.onChange = () => {}));
    let Z = (0, c.z)(e);
    return {
        labelProps: {
            ...T,
            onClick: () => {
                k.focusFirst();
            },
        },
        fieldProps: (0, s.d)(Z, y, U, R, {
            onKeyDown(t) {
                e.onKeyDown && e.onKeyDown(t);
            },
            onKeyUp(t) {
                e.onKeyUp && e.onKeyUp(t);
            },
            style: { unicodeBidi: "isolate" },
        }),
        inputProps: B,
        descriptionProps: A,
        errorMessageProps: C,
        isInvalid: O,
        validationErrors: v,
        validationDetails: I,
    };
}
