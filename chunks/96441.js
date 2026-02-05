"use strict";
n.d(t, { X: () => o });
var r = n(885714),
    i = n(64700),
    a = n(3388),
    s = n(959462);
function o(e, t, n) {
    let { validationBehavior: o, focus: l } = e;
    (0, a.N)(() => {
        if ("native" === o && (null == n ? void 0 : n.current) && !n.current.disabled) {
            let e = t.realtimeValidation.isInvalid
                ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value."
                : "";
            n.current.setCustomValidity(e),
                n.current.hasAttribute("title") || (n.current.title = ""),
                t.realtimeValidation.isInvalid || t.updateValidation(u(n.current));
        }
    });
    let d = (0, i.useRef)(!1),
        _ = (0, s.J)(() => {
            d.current || t.resetValidation();
        }),
        f = (0, s.J)((e) => {
            var i, a;
            t.displayValidation.isInvalid || t.commitValidation();
            let s = null == n || null == (i = n.current) ? void 0 : i.form;
            !e.defaultPrevented &&
                n &&
                s &&
                c(s) === n.current &&
                (l ? l() : null == (a = n.current) || a.focus(), (0, r.Cl)("keyboard")),
                e.preventDefault();
        }),
        p = (0, s.J)(() => {
            t.commitValidation();
        });
    (0, i.useEffect)(() => {
        let e = null == n ? void 0 : n.current;
        if (!e) return;
        let t = e.form,
            r = null == t ? void 0 : t.reset;
        return (
            t &&
                (t.reset = () => {
                    (d.current =
                        !window.event ||
                        ("message" === window.event.type && window.event.target instanceof MessagePort)),
                        null == r || r.call(t),
                        (d.current = !1);
                }),
            e.addEventListener("invalid", f),
            e.addEventListener("change", p),
            null == t || t.addEventListener("reset", _),
            () => {
                e.removeEventListener("invalid", f),
                    e.removeEventListener("change", p),
                    null == t || t.removeEventListener("reset", _),
                    t && (t.reset = r);
            }
        );
    }, [n, f, p, _, o]);
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
function u(e) {
    return {
        isInvalid: !e.validity.valid,
        validationDetails: l(e),
        validationErrors: e.validationMessage ? [e.validationMessage] : [],
    };
}
function c(e) {
    for (let t = 0; t < e.elements.length; t++) {
        let n = e.elements[t];
        if (!n.validity.valid) return n;
    }
    return null;
}
