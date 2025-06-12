a.d(e, { E: () => s });
var r = a(573736),
    _ = a(202811),
    n = a(370336),
    o = a(886115),
    i = a(622916),
    c = a(151122),
    E = a(255768);
let s = (0, c._I)((t = {}) => {
    let { depth: e = 3, captureErrorCause: a = !0 } = t;
    return {
        name: 'ExtraErrorData',
        processEvent(t, c, s) {
            let { maxValueLength: l = 250 } = s.getOptions();
            return (function (t, e = {}, a, c, s) {
                if (!e.originalException || !(0, r.VZ)(e.originalException)) return t;
                let l = e.originalException.name || e.originalException.constructor.name,
                    I = (function (t, e, a) {
                        try {
                            let _ = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber', 'toJSON'],
                                n = {};
                            for (let e of Object.keys(t)) {
                                if (-1 !== _.indexOf(e)) continue;
                                let i = t[e];
                                n[e] = (0, r.VZ)(i) || 'string' == typeof i ? (0, o.$G)(`${i}`, a) : i;
                            }
                            if ((e && void 0 !== t.cause && (n.cause = (0, r.VZ)(t.cause) ? t.cause.toString() : t.cause), 'function' == typeof t.toJSON)) {
                                let e = t.toJSON();
                                for (let t of Object.keys(e)) {
                                    let a = e[t];
                                    n[t] = (0, r.VZ)(a) ? a.toString() : a;
                                }
                            }
                            return n;
                        } catch (t) {
                            E.X && i.kg.error('Unable to extract extra data from the Error object:', t);
                        }
                        return null;
                    })(e.originalException, c, s);
                if (I) {
                    let e = { ...t.contexts },
                        o = (0, _.Fv)(I, a);
                    return (
                        (0, r.PO)(o) && ((0, n.xp)(o, '__sentry_skip_normalization__', !0), (e[l] = o)),
                        {
                            ...t,
                            contexts: e
                        }
                    );
                }
                return t;
            })(t, c, e, a, l);
        }
    };
});
