_.d(e, {
    GJ: () => c,
    ME: () => A,
    aB: () => N,
    dr: () => R,
});
var a = _(263449),
    r = _(202811),
    n = _(573736),
    o = _(394798),
    E = _(928541),
    i = _(370336);
function c(t, e) {
    let _ = l(t, e),
        a = {
            type: e && e.name,
            value: (function (t) {
                let e = t && t.message;
                return e ? (e.error && "string" == typeof e.error.message ? e.error.message : e) : "No error message";
            })(e),
        };
    return (
        _.length && (a.stacktrace = { frames: _ }),
        void 0 === a.type && "" === a.value && (a.value = "Unrecoverable error caught"),
        a
    );
}
function s(t, e) {
    return { exception: { values: [c(t, e)] } };
}
function l(t, e) {
    var _, a;
    let r = e.stacktrace || e.stack || "",
        n = (_ = e) && I.test(_.message) ? 1 : 0,
        o = "number" == typeof (a = e).framesToPop ? a.framesToPop : 0;
    try {
        return t(r, n, o);
    } catch (t) {}
    return [];
}
let I = /Minified React error #\d+;/i;
function R(t, e, _, a) {
    let r = A(t, e, (_ && _.syntheticException) || void 0, a);
    return (0, o.EG)(r), (r.level = "error"), _ && _.event_id && (r.event_id = _.event_id), (0, E.WD)(r);
}
function N(t, e, _ = "info", a, r) {
    let n = u(t, e, (a && a.syntheticException) || void 0, r);
    return (n.level = _), a && a.event_id && (n.event_id = a.event_id), (0, E.WD)(n);
}
function A(t, e, _, E, I) {
    let R;
    if ((0, n.VW)(e) && e.error) return s(t, e.error);
    if ((0, n.TX)(e) || (0, n.fm)(e)) {
        if ("stack" in e) R = s(t, e);
        else {
            let a = e.name || ((0, n.TX)(e) ? "DOMError" : "DOMException"),
                r = e.message ? `${a}: ${e.message}` : a;
            (R = u(t, r, _, E)), (0, o.Db)(R, r);
        }
        return (
            "code" in e &&
                (R.tags = {
                    ...R.tags,
                    "DOMException.code": `${e.code}`,
                }),
            R
        );
    }
    return (0, n.VZ)(e)
        ? s(t, e)
        : ((0, n.PO)(e) || (0, n.cO)(e)
              ? (R = (function (t, e, _, o) {
                    let E = (0, a.s3)(),
                        s = E && E.getOptions().normalizeDepth,
                        I = (function (t) {
                            for (let e in t)
                                if (Object.prototype.hasOwnProperty.call(t, e)) {
                                    let _ = t[e];
                                    if (_ instanceof Error) return _;
                                }
                        })(e),
                        R = { __serialized__: (0, r.Qy)(e, s) };
                    if (I)
                        return {
                            exception: { values: [c(t, I)] },
                            extra: R,
                        };
                    let N = {
                        exception: {
                            values: [
                                {
                                    type: (0, n.cO)(e) ? e.constructor.name : o ? "UnhandledRejection" : "Error",
                                    value: (function (t, { isUnhandledRejection: e }) {
                                        let _ = (0, i.zf)(t),
                                            a = e ? "promise rejection" : "exception";
                                        if ((0, n.VW)(t))
                                            return `Event \`ErrorEvent\` captured as ${a} with message \`${t.message}\``;
                                        if ((0, n.cO)(t)) {
                                            let e = (function (t) {
                                                try {
                                                    let e = Object.getPrototypeOf(t);
                                                    return e ? e.constructor.name : void 0;
                                                } catch (t) {}
                                            })(t);
                                            return `Event \`${e}\` (type=${t.type}) captured as ${a}`;
                                        }
                                        return `Object captured as ${a} with keys: ${_}`;
                                    })(e, { isUnhandledRejection: o }),
                                },
                            ],
                        },
                        extra: R,
                    };
                    if (_) {
                        let e = l(t, _);
                        e.length && (N.exception.values[0].stacktrace = { frames: e });
                    }
                    return N;
                })(t, e, _, I))
              : ((R = u(t, e, _, E)), (0, o.Db)(R, `${e}`, void 0)),
          (0, o.EG)(R, { synthetic: !0 }),
          R);
}
function u(t, e, _, a) {
    let r = {};
    if (a && _) {
        let a = l(t, _);
        a.length &&
            (r.exception = {
                values: [
                    {
                        value: e,
                        stacktrace: { frames: a },
                    },
                ],
            });
    }
    if ((0, n.Le)(e)) {
        let { __sentry_template_string__: t, __sentry_template_values__: _ } = e;
        return (
            (r.logentry = {
                message: t,
                params: _,
            }),
            r
        );
    }
    return (r.message = e), r;
}
