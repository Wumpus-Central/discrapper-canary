"use strict";
n.d(t, { OX: () => m, cJ: () => A, pK: () => g });
var r = n(908909),
    i = n(185288),
    a = n(13163),
    s = n(807177),
    o = n(803082),
    l = n(702992),
    u = n(290424),
    c = n(64700),
    d = n(447432),
    _ = n(744493),
    f = n(96441),
    p = n(47276);
function h(e) {
    return e && e.__esModule ? e.default : e;
}
let m = new WeakMap(),
    g = "__role_" + Date.now(),
    E = "__focusManager_" + Date.now();
function A(e, t, n) {
    var A;
    let I,
        { isInvalid: T, validationErrors: y, validationDetails: S } = t.displayValidation,
        {
            labelProps: v,
            fieldProps: C,
            descriptionProps: b,
            errorMessageProps: N,
        } = (0, d.M)({ ...e, labelElementType: "span", isInvalid: T, errorMessage: e.errorMessage || y }),
        R = (0, c.useRef)(null),
        { focusWithinProps: O } = (0, _.R)({
            ...e,
            onFocusWithin(n) {
                var r;
                (R.current = t.value), null == (r = e.onFocus) || r.call(e, n);
            },
            onBlurWithin: (n) => {
                var r;
                t.confirmPlaceholder(),
                    t.value !== R.current && t.commitValidation(),
                    null == (r = e.onBlur) || r.call(e, n);
            },
            onFocusWithinChange: e.onFocusChange,
        }),
        D = (0, p.o)(h(r.A), "@react-aria/datepicker"),
        L = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
        w = "hour" === t.maxGranularity ? "time" : "date",
        x = t.value ? D.format(L, { [w]: t.formatValue({ month: "long" }) }) : "",
        P = (0, s.I)(x),
        M =
            "presentation" === e[g]
                ? C["aria-describedby"]
                : [P["aria-describedby"], C["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        k = e[E],
        U = (0, c.useMemo)(() => k || (0, a.C7)(n), [k, n]),
        G = (0, i.P)(t, n, "presentation" === e[g]);
    m.set(t, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: [v.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
        ariaDescribedBy: M,
        focusManager: U,
    });
    let V = (0, c.useRef)(e.autoFocus);
    (I =
        "presentation" === e[g]
            ? { role: "presentation" }
            : (0, o.v)(C, { role: "group", "aria-disabled": e.isDisabled || void 0, "aria-describedby": M })),
        (0, c.useEffect)(() => {
            V.current && U.focusFirst(), (V.current = !1);
        }, [U]),
        (0, l.F)(e.inputRef, t.defaultValue, t.setValue),
        (0, f.X)(
            {
                ...e,
                focus() {
                    U.focusFirst();
                },
            },
            t,
            e.inputRef,
        );
    let F = {
        type: "hidden",
        name: e.name,
        form: e.form,
        value: (null == (A = t.value) ? void 0 : A.toString()) || "",
        disabled: e.isDisabled,
    };
    "native" === e.validationBehavior &&
        ((F.type = "text"), (F.hidden = !0), (F.required = e.isRequired), (F.onChange = () => {}));
    let B = (0, u.$)(e);
    return {
        labelProps: {
            ...v,
            onClick: () => {
                U.focusFirst();
            },
        },
        fieldProps: (0, o.v)(B, I, G, O, {
            onKeyDown(t) {
                e.onKeyDown && e.onKeyDown(t);
            },
            onKeyUp(t) {
                e.onKeyUp && e.onKeyUp(t);
            },
            style: { unicodeBidi: "isolate" },
        }),
        inputProps: F,
        descriptionProps: b,
        errorMessageProps: N,
        isInvalid: T,
        validationErrors: y,
        validationDetails: S,
    };
}
