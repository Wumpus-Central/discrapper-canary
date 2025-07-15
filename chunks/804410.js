a.d(e, { k: () => R });
var r = a(151122),
    _ = a(263449),
    n = a(233517),
    o = a(824851),
    i = a(753642),
    c = a(573736),
    s = a(467510),
    E = a(688838),
    l = a(622916),
    u = a(454463),
    I = a(878719),
    d = a(163162);
let R = (0, r._I)((t = {}) => {
    let e = {
        onerror: !0,
        onunhandledrejection: !0,
        ...t
    };
    return {
        name: 'GlobalHandlers',
        setupOnce() {
            Error.stackTraceLimit = 50;
        },
        setup(t) {
            var a, r;
            (e.onerror &&
                ((a = t),
                (0, o.V)((t) => {
                    let { stackParser: e, attachStacktrace: r } = f();
                    if ((0, _.s3)() !== a || (0, d.Wz)()) return;
                    let { msg: o, url: i, line: l, column: u, error: R } = t,
                        N = (function (t, e, a, r) {
                            let _ = (t.exception = t.exception || {}),
                                n = (_.values = _.values || []),
                                o = (n[0] = n[0] || {}),
                                i = (o.stacktrace = o.stacktrace || {}),
                                l = (i.frames = i.frames || []),
                                u = isNaN(parseInt(r, 10)) ? void 0 : r,
                                I = isNaN(parseInt(a, 10)) ? void 0 : a,
                                d = (0, c.HD)(e) && e.length > 0 ? e : (0, s.l4)();
                            return (
                                0 === l.length &&
                                    l.push({
                                        colno: u,
                                        filename: d,
                                        function: E.Fi,
                                        in_app: !0,
                                        lineno: I
                                    }),
                                t
                            );
                        })((0, I.ME)(e, R || o, void 0, r, !1), i, l, u);
                    ((N.level = 'error'),
                        (0, n.eN)(N, {
                            originalException: R,
                            mechanism: {
                                handled: !1,
                                type: 'onerror'
                            }
                        }));
                }),
                N('onerror')),
                e.onunhandledrejection &&
                    ((r = t),
                    (0, i.h)((t) => {
                        var e;
                        let { stackParser: a, attachStacktrace: o } = f();
                        if ((0, _.s3)() !== r || (0, d.Wz)()) return;
                        let i = (function (t) {
                                if ((0, c.pt)(t)) return t;
                                try {
                                    if ('reason' in t) return t.reason;
                                    if ('detail' in t && 'reason' in t.detail) return t.detail.reason;
                                } catch (t) {}
                                return t;
                            })(t),
                            s = (0, c.pt)(i)
                                ? ((e = i),
                                  {
                                      exception: {
                                          values: [
                                              {
                                                  type: 'UnhandledRejection',
                                                  value: `Non-Error promise rejection captured with value: ${String(e)}`
                                              }
                                          ]
                                      }
                                  })
                                : (0, I.ME)(a, i, void 0, o, !0);
                        ((s.level = 'error'),
                            (0, n.eN)(s, {
                                originalException: i,
                                mechanism: {
                                    handled: !1,
                                    type: 'onunhandledrejection'
                                }
                            }));
                    }),
                    N('onunhandledrejection')));
        }
    };
});
function N(t) {
    u.X && l.kg.log(`Global Handler attached: ${t}`);
}
function f() {
    let t = (0, _.s3)();
    return (
        (t && t.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1
        }
    );
}
