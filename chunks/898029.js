_.d(e, { E: () => s });
var a = _(573736),
    r = _(202811),
    n = _(370336),
    o = _(886115),
    E = _(622916),
    i = _(151122),
    c = _(255768);
let s = (0, i._I)((t = {}) => {
    let { depth: e = 3, captureErrorCause: _ = !0 } = t;
    return {
        name: "ExtraErrorData",
        processEvent(t, i, s) {
            let { maxValueLength: l = 250 } = s.getOptions();
            return (function (t, e = {}, _, i, s) {
                if (!e.originalException || !(0, a.VZ)(e.originalException)) return t;
                let l = e.originalException.name || e.originalException.constructor.name,
                    I = (function (t, e, _) {
                        try {
                            let r = [
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
                                n = {};
                            for (let e of Object.keys(t)) {
                                if (-1 !== r.indexOf(e)) continue;
                                let E = t[e];
                                n[e] = (0, a.VZ)(E) || "string" == typeof E ? (0, o.$G)(`${E}`, _) : E;
                            }
                            if (
                                (e &&
                                    void 0 !== t.cause &&
                                    (n.cause = (0, a.VZ)(t.cause) ? t.cause.toString() : t.cause),
                                "function" == typeof t.toJSON)
                            ) {
                                let e = t.toJSON();
                                for (let t of Object.keys(e)) {
                                    let _ = e[t];
                                    n[t] = (0, a.VZ)(_) ? _.toString() : _;
                                }
                            }
                            return n;
                        } catch (t) {
                            c.X && E.kg.error("Unable to extract extra data from the Error object:", t);
                        }
                        return null;
                    })(e.originalException, i, s);
                if (I) {
                    let e = { ...t.contexts },
                        o = (0, r.Fv)(I, _);
                    return (
                        (0, a.PO)(o) && ((0, n.xp)(o, "__sentry_skip_normalization__", !0), (e[l] = o)),
                        {
                            ...t,
                            contexts: e,
                        }
                    );
                }
                return t;
            })(t, i, e, _, l);
        },
    };
});
