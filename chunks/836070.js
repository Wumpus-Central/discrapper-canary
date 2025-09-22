n.d(t, { Q: () => s });
var r = n(998925),
    i = n(647438),
    a = n(436283),
    o = n(101741);
function s(e, t, n) {
    let { validationBehavior: s, focus: l } = e;
    (0, a.b)(() => {
        if ("native" === s && (null == n ? void 0 : n.current) && !n.current.disabled) {
            let e = t.realtimeValidation.isInvalid
                ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value."
                : "";
            n.current.setCustomValidity(e),
                n.current.hasAttribute("title") || (n.current.title = ""),
                t.realtimeValidation.isInvalid || t.updateValidation(c(n.current));
        }
    });
    let d = (0, o.i)(() => {
            t.resetValidation();
        }),
        f = (0, o.i)((e) => {
            var i, a;
            t.displayValidation.isInvalid || t.commitValidation();
            let o = null == n || null == (i = n.current) ? void 0 : i.form;
            !e.defaultPrevented &&
                n &&
                o &&
                u(o) === n.current &&
                (l ? l() : null == (a = n.current) || a.focus(), (0, r._w)("keyboard")),
                e.preventDefault();
        }),
        _ = (0, o.i)(() => {
            t.commitValidation();
        });
    (0, i.useEffect)(() => {
        let e = null == n ? void 0 : n.current;
        if (!e) return;
        let t = e.form;
        return (
            e.addEventListener("invalid", f),
            e.addEventListener("change", _),
            null == t || t.addEventListener("reset", d),
            () => {
                e.removeEventListener("invalid", f),
                    e.removeEventListener("change", _),
                    null == t || t.removeEventListener("reset", d);
            }
        );
    }, [n, f, _, d, s]);
}
function l(e) {
    let t = e.validity;
    return {
        badInput: t.badInput,
        customError: t.customError,
        patternMismatch: t.patternMismatch,
        rangeOverflow: t.rangeOverflow,
        rangeUnderflow: t.rangeUnderflow,
        stepMismatch: t.stepMismatch,
        tooLong: t.tooLong,
        tooShort: t.tooShort,
        typeMismatch: t.typeMismatch,
        valueMissing: t.valueMissing,
        valid: t.valid,
    };
}
function c(e) {
    return {
        isInvalid: !e.validity.valid,
        validationDetails: l(e),
        validationErrors: e.validationMessage ? [e.validationMessage] : [],
    };
}
function u(e) {
    for (let t = 0; t < e.elements.length; t++) {
        let n = e.elements[t];
        if (!n.validity.valid) return n;
    }
    return null;
}
