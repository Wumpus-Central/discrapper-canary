a.d(e, {
    GJ: () => s,
    ME: () => d,
    aB: () => R,
    dr: () => I
});
var r = a(263449),
    n = a(202811),
    _ = a(573736),
    o = a(394798),
    i = a(928541),
    c = a(370336);
function s(t, e) {
    let a = l(t, e),
        r = {
            type: e && e.name,
            value: (function (t) {
                let e = t && t.message;
                return e ? (e.error && 'string' == typeof e.error.message ? e.error.message : e) : 'No error message';
            })(e)
        };
    return a.length && (r.stacktrace = { frames: a }), void 0 === r.type && '' === r.value && (r.value = 'Unrecoverable error caught'), r;
}
function E(t, e) {
    return { exception: { values: [s(t, e)] } };
}
function l(t, e) {
    var a, r;
    let n = e.stacktrace || e.stack || '',
        _ = (a = e) && u.test(a.message) ? 1 : 0,
        o = 'number' == typeof (r = e).framesToPop ? r.framesToPop : 0;
    try {
        return t(n, _, o);
    } catch (t) {}
    return [];
}
let u = /Minified React error #\d+;/i;
function I(t, e, a, r) {
    let n = d(t, e, (a && a.syntheticException) || void 0, r);
    return (0, o.EG)(n), (n.level = 'error'), a && a.event_id && (n.event_id = a.event_id), (0, i.WD)(n);
}
function R(t, e, a = 'info', r, n) {
    let _ = A(t, e, (r && r.syntheticException) || void 0, n);
    return (_.level = a), r && r.event_id && (_.event_id = r.event_id), (0, i.WD)(_);
}
function d(t, e, a, i, u) {
    let I;
    if ((0, _.VW)(e) && e.error) return E(t, e.error);
    if ((0, _.TX)(e) || (0, _.fm)(e)) {
        if ('stack' in e) I = E(t, e);
        else {
            let r = e.name || ((0, _.TX)(e) ? 'DOMError' : 'DOMException'),
                n = e.message ? `${r}: ${e.message}` : r;
            (I = A(t, n, a, i)), (0, o.Db)(I, n);
        }
        return (
            'code' in e &&
                (I.tags = {
                    ...I.tags,
                    'DOMException.code': `${e.code}`
                }),
            I
        );
    }
    return (0, _.VZ)(e)
        ? E(t, e)
        : ((0, _.PO)(e) || (0, _.cO)(e)
              ? (I = (function (t, e, a, o) {
                    let i = (0, r.s3)(),
                        E = i && i.getOptions().normalizeDepth,
                        u = (function (t) {
                            for (let e in t)
                                if (Object.prototype.hasOwnProperty.call(t, e)) {
                                    let a = t[e];
                                    if (a instanceof Error) return a;
                                }
                        })(e),
                        I = { __serialized__: (0, n.Qy)(e, E) };
                    if (u)
                        return {
                            exception: { values: [s(t, u)] },
                            extra: I
                        };
                    let R = {
                        exception: {
                            values: [
                                {
                                    type: (0, _.cO)(e) ? e.constructor.name : o ? 'UnhandledRejection' : 'Error',
                                    value: (function (t, { isUnhandledRejection: e }) {
                                        let a = (0, c.zf)(t),
                                            r = e ? 'promise rejection' : 'exception';
                                        if ((0, _.VW)(t)) return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
                                        if ((0, _.cO)(t)) {
                                            let e = (function (t) {
                                                try {
                                                    let e = Object.getPrototypeOf(t);
                                                    return e ? e.constructor.name : void 0;
                                                } catch (t) {}
                                            })(t);
                                            return `Event \`${e}\` (type=${t.type}) captured as ${r}`;
                                        }
                                        return `Object captured as ${r} with keys: ${a}`;
                                    })(e, { isUnhandledRejection: o })
                                }
                            ]
                        },
                        extra: I
                    };
                    if (a) {
                        let e = l(t, a);
                        e.length && (R.exception.values[0].stacktrace = { frames: e });
                    }
                    return R;
                })(t, e, a, u))
              : ((I = A(t, e, a, i)), (0, o.Db)(I, `${e}`, void 0)),
          (0, o.EG)(I, { synthetic: !0 }),
          I);
}
function A(t, e, a, r) {
    let n = {};
    if (r && a) {
        let r = l(t, a);
        r.length &&
            (n.exception = {
                values: [
                    {
                        value: e,
                        stacktrace: { frames: r }
                    }
                ]
            });
    }
    if ((0, _.Le)(e)) {
        let { __sentry_template_string__: t, __sentry_template_values__: a } = e;
        return (
            (n.logentry = {
                message: t,
                params: a
            }),
            n
        );
    }
    return (n.message = e), n;
}
