r.d(t, { E: () => E });
var n = r(661822),
    a = r(847572),
    i = r(886649),
    o = r(1693),
    _ = r(98076),
    s = r(688560),
    c = r(4757);
let E = (0, s._I)((e = {}) => {
    let { depth: t = 3, captureErrorCause: r = !0 } = e;
    return {
        name: "ExtraErrorData",
        processEvent(e, s, E) {
            let { maxValueLength: l = 250 } = E.getOptions();
            return (function (e, t = {}, r, s, E) {
                if (!t.originalException || !(0, n.VZ)(t.originalException)) return e;
                let l = t.originalException.name || t.originalException.constructor.name,
                    u = (function (e, t, r) {
                        try {
                            let a = [
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
                                i = {};
                            for (let t of Object.keys(e)) {
                                if (-1 !== a.indexOf(t)) continue;
                                let _ = e[t];
                                i[t] = (0, n.VZ)(_) || "string" == typeof _ ? (0, o.$G)(`${_}`, r) : _;
                            }
                            if (
                                (t &&
                                    void 0 !== e.cause &&
                                    (i.cause = (0, n.VZ)(e.cause) ? e.cause.toString() : e.cause),
                                "function" == typeof e.toJSON)
                            ) {
                                let t = e.toJSON();
                                for (let e of Object.keys(t)) {
                                    let r = t[e];
                                    i[e] = (0, n.VZ)(r) ? r.toString() : r;
                                }
                            }
                            return i;
                        } catch (e) {
                            c.X && _.kg.error("Unable to extract extra data from the Error object:", e);
                        }
                        return null;
                    })(t.originalException, s, E);
                if (u) {
                    let t = { ...e.contexts },
                        o = (0, a.Fv)(u, r);
                    return (
                        (0, n.PO)(o) && ((0, i.xp)(o, "__sentry_skip_normalization__", !0), (t[l] = o)),
                        {
                            ...e,
                            contexts: t,
                        }
                    );
                }
                return e;
            })(e, s, t, r, l);
        },
    };
});
