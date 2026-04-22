"use strict";
n.d(t, { X: () => o });
var r = n(885714),
    i = n(64700),
    s = n(3388),
    a = n(959462);
function o(e, t, n) {
    let { validationBehavior: o, focus: l } = e;
    (0, s.N)(() => {
        if ("native" === o && (null == n ? void 0 : n.current) && !n.current.disabled) {
            var e;
            let r,
                i = t.realtimeValidation.isInvalid
                    ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value."
                    : "";
            n.current.setCustomValidity(i),
                n.current.hasAttribute("title") || (n.current.title = ""),
                t.realtimeValidation.isInvalid ||
                    t.updateValidation({
                        isInvalid: !(e = n.current).validity.valid,
                        validationDetails: {
                            badInput: (r = e.validity).badInput,
                            customError: r.customError,
                            patternMismatch: r.patternMismatch,
                            rangeOverflow: r.rangeOverflow,
                            rangeUnderflow: r.rangeUnderflow,
                            stepMismatch: r.stepMismatch,
                            tooLong: r.tooLong,
                            tooShort: r.tooShort,
                            typeMismatch: r.typeMismatch,
                            valueMissing: r.valueMissing,
                            valid: r.valid,
                        },
                        validationErrors: e.validationMessage ? [e.validationMessage] : [],
                    });
        }
    });
    let u = (0, i.useRef)(!1),
        d = (0, a.J)(() => {
            u.current || t.resetValidation();
        }),
        c = (0, a.J)((e) => {
            var i, s;
            t.displayValidation.isInvalid || t.commitValidation();
            let a = null == n || null == (i = n.current) ? void 0 : i.form;
            !e.defaultPrevented &&
                n &&
                a &&
                (function (e) {
                    for (let t = 0; t < e.elements.length; t++) {
                        let n = e.elements[t];
                        if (!n.validity.valid) return n;
                    }
                    return null;
                })(a) === n.current &&
                (l ? l() : null == (s = n.current) || s.focus(), (0, r.Cl)("keyboard")),
                e.preventDefault();
        }),
        _ = (0, a.J)(() => {
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
                    (u.current =
                        !window.event ||
                        ("message" === window.event.type && window.event.target instanceof MessagePort)),
                        null == r || r.call(t),
                        (u.current = !1);
                }),
            e.addEventListener("invalid", c),
            e.addEventListener("change", _),
            null == t || t.addEventListener("reset", d),
            () => {
                e.removeEventListener("invalid", c),
                    e.removeEventListener("change", _),
                    null == t || t.removeEventListener("reset", d),
                    t && (t.reset = r);
            }
        );
    }, [n, c, _, d, o]);
}
