a.d(e, { E: () => E });
var r = a(573736),
    n = a(202811),
    o = a(370336),
    _ = a(886115),
    i = a(622916),
    c = a(151122),
    s = a(255768);
let E = (0, c._I)((t = {}) => {
    let { depth: e = 3, captureErrorCause: a = !0 } = t;
    return {
        name: 'ExtraErrorData',
        processEvent(t, c, E) {
            let { maxValueLength: l = 250 } = E.getOptions();
            return (function (t, e = {}, a, c, E) {
                if (!e.originalException || !(0, r.VZ)(e.originalException)) return t;
                let l = e.originalException.name || e.originalException.constructor.name,
                    u = (function (t, e, a) {
                        try {
                            let n = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber', 'toJSON'],
                                o = {};
                            for (let e of Object.keys(t)) {
                                if (-1 !== n.indexOf(e)) continue;
                                let i = t[e];
                                o[e] = (0, r.VZ)(i) || 'string' == typeof i ? (0, _.$G)(`${i}`, a) : i;
                            }
                            if ((e && void 0 !== t.cause && (o.cause = (0, r.VZ)(t.cause) ? t.cause.toString() : t.cause), 'function' == typeof t.toJSON)) {
                                let e = t.toJSON();
                                for (let t of Object.keys(e)) {
                                    let a = e[t];
                                    o[t] = (0, r.VZ)(a) ? a.toString() : a;
                                }
                            }
                            return o;
                        } catch (t) {
                            s.X && i.kg.error('Unable to extract extra data from the Error object:', t);
                        }
                        return null;
                    })(e.originalException, c, E);
                if (u) {
                    let e = { ...t.contexts },
                        _ = (0, n.Fv)(u, a);
                    return (
                        (0, r.PO)(_) && ((0, o.xp)(_, '__sentry_skip_normalization__', !0), (e[l] = _)),
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
