n.d(t, { E: () => E });
var r = n(661822),
    i = n(847572),
    a = n(886649),
    o = n(1693),
    _ = n(98076),
    s = n(688560),
    c = n(4757);
let E = (0, s._I)((e = {}) => {
    let { depth: t = 3, captureErrorCause: n = !0 } = e;
    return {
        name: "ExtraErrorData",
        processEvent(e, s, E) {
            let { maxValueLength: l = 250 } = E.getOptions();
            return (function (e, t = {}, n, s, E) {
                if (!t.originalException || !(0, r.VZ)(t.originalException)) return e;
                let l = t.originalException.name || t.originalException.constructor.name,
                    u = (function (e, t, n) {
                        try {
                            let i = [
                                    "name",
                                    "message",
                                    "stack",
                                    "line",
                                    "column",
                                    "fileName",
                                    "lineNumber",
                                    "columnNumber",
                                    "toJSON",
                                ],
                                a = {};
                            for (let t of Object.keys(e)) {
                                if (-1 !== i.indexOf(t)) continue;
                                let _ = e[t];
                                a[t] = (0, r.VZ)(_) || "string" == typeof _ ? (0, o.$G)(`${_}`, n) : _;
                            }
                            if (
                                (t &&
                                    void 0 !== e.cause &&
                                    (a.cause = (0, r.VZ)(e.cause) ? e.cause.toString() : e.cause),
                                "function" == typeof e.toJSON)
                            ) {
                                let t = e.toJSON();
                                for (let e of Object.keys(t)) {
                                    let n = t[e];
                                    a[e] = (0, r.VZ)(n) ? n.toString() : n;
                                }
                            }
                            return a;
                        } catch (e) {
                            c.X && _.kg.error("Unable to extract extra data from the Error object:", e);
                        }
                        return null;
                    })(t.originalException, s, E);
                if (u) {
                    let t = { ...e.contexts },
                        o = (0, i.Fv)(u, n);
                    return (
                        (0, r.PO)(o) && ((0, a.xp)(o, "__sentry_skip_normalization__", !0), (t[l] = o)),
                        {
                            ...e,
                            contexts: t,
                        }
                    );
                }
                return e;
            })(e, s, t, n, l);
        },
    };
});
