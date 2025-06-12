a.d(e, {
    GJ: () => E,
    ME: () => A,
    aB: () => R,
    dr: () => u
});
var r = a(263449),
    _ = a(202811),
    n = a(573736),
    o = a(394798),
    i = a(928541),
    c = a(370336);
function E(t, e) {
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
function s(t, e) {
    return { exception: { values: [E(t, e)] } };
}
function l(t, e) {
    var a, r;
    let _ = e.stacktrace || e.stack || '',
        n = (a = e) && I.test(a.message) ? 1 : 0,
        o = 'number' == typeof (r = e).framesToPop ? r.framesToPop : 0;
    try {
        return t(_, n, o);
    } catch (t) {}
    return [];
}
let I = /Minified React error #\d+;/i;
function u(t, e, a, r) {
    let _ = A(t, e, (a && a.syntheticException) || void 0, r);
    return (0, o.EG)(_), (_.level = 'error'), a && a.event_id && (_.event_id = a.event_id), (0, i.WD)(_);
}
function R(t, e, a = 'info', r, _) {
    let n = T(t, e, (r && r.syntheticException) || void 0, _);
    return (n.level = a), r && r.event_id && (n.event_id = r.event_id), (0, i.WD)(n);
}
function A(t, e, a, i, I) {
    let u;
    if ((0, n.VW)(e) && e.error) return s(t, e.error);
    if ((0, n.TX)(e) || (0, n.fm)(e)) {
        if ('stack' in e) u = s(t, e);
        else {
            let r = e.name || ((0, n.TX)(e) ? 'DOMError' : 'DOMException'),
                _ = e.message ? `${r}: ${e.message}` : r;
            (u = T(t, _, a, i)), (0, o.Db)(u, _);
        }
        return (
            'code' in e &&
                (u.tags = {
                    ...u.tags,
                    'DOMException.code': `${e.code}`
                }),
            u
        );
    }
    return (0, n.VZ)(e)
        ? s(t, e)
        : ((0, n.PO)(e) || (0, n.cO)(e)
              ? (u = (function (t, e, a, o) {
                    let i = (0, r.s3)(),
                        s = i && i.getOptions().normalizeDepth,
                        I = (function (t) {
                            for (let e in t)
                                if (Object.prototype.hasOwnProperty.call(t, e)) {
                                    let a = t[e];
                                    if (a instanceof Error) return a;
                                }
                        })(e),
                        u = { __serialized__: (0, _.Qy)(e, s) };
                    if (I)
                        return {
                            exception: { values: [E(t, I)] },
                            extra: u
                        };
                    let R = {
                        exception: {
                            values: [
                                {
                                    type: (0, n.cO)(e) ? e.constructor.name : o ? 'UnhandledRejection' : 'Error',
                                    value: (function (t, { isUnhandledRejection: e }) {
                                        let a = (0, c.zf)(t),
                                            r = e ? 'promise rejection' : 'exception';
                                        if ((0, n.VW)(t)) return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
                                        if ((0, n.cO)(t)) {
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
                        extra: u
                    };
                    if (a) {
                        let e = l(t, a);
                        e.length && (R.exception.values[0].stacktrace = { frames: e });
                    }
                    return R;
                })(t, e, a, I))
              : ((u = T(t, e, a, i)), (0, o.Db)(u, `${e}`, void 0)),
          (0, o.EG)(u, { synthetic: !0 }),
          u);
}
function T(t, e, a, r) {
    let _ = {};
    if (r && a) {
        let r = l(t, a);
        r.length &&
            (_.exception = {
                values: [
                    {
                        value: e,
                        stacktrace: { frames: r }
                    }
                ]
            });
    }
    if ((0, n.Le)(e)) {
        let { __sentry_template_string__: t, __sentry_template_values__: a } = e;
        return (
            (_.logentry = {
                message: t,
                params: a
            }),
            _
        );
    }
    return (_.message = e), _;
}
