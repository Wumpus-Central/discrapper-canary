n.d(t, { u: () => l });
var r = n(84854),
    i = n(880016),
    a = n(158821),
    o = n(426902),
    s = n(921448);
function l(e, t) {
    let { isDisabled: n, name: l, form: c, validationBehavior: u = "aria" } = e,
        { isInvalid: d, validationErrors: f, validationDetails: p } = t.displayValidation,
        {
            labelProps: _,
            fieldProps: m,
            descriptionProps: h,
            errorMessageProps: g,
        } = (0, o.U)({
            ...e,
            labelElementType: "span",
            isInvalid: d,
            errorMessage: e.errorMessage || f,
        });
    r.k.set(t, {
        name: l,
        form: c,
        descriptionId: h.id,
        errorMessageId: g.id,
        validationBehavior: u,
    });
    let E = (0, i.z)(e, { labelable: !0 }),
        { focusWithinProps: b } = (0, s.L)({
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange,
        });
    return {
        groupProps: (0, a.d)(E, {
            role: "group",
            "aria-disabled": n || void 0,
            ...m,
            ...b,
        }),
        labelProps: _,
        descriptionProps: h,
        errorMessageProps: g,
        isInvalid: d,
        validationErrors: f,
        validationDetails: p,
    };
}
