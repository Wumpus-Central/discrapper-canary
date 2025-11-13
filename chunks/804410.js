a.d(e, { k: () => A });
var r = a(151122),
    _ = a(263449),
    n = a(233517),
    o = a(824851),
    i = a(753642),
    E = a(573736),
    c = a(467510),
    s = a(688838),
    l = a(622916),
    I = a(454463),
    R = a(878719),
    u = a(163162);
let A = (0, r._I)((t = {}) => {
    let e = {
        onerror: !0,
        onunhandledrejection: !0,
        ...t,
    };
    return {
        name: "GlobalHandlers",
        setupOnce() {
            Error.stackTraceLimit = 50;
        },
        setup(t) {
            var a, r;
            e.onerror &&
                ((a = t),
                (0, o.V)((t) => {
                    let { stackParser: e, attachStacktrace: r } = T();
                    if ((0, _.s3)() !== a || (0, u.Wz)()) return;
                    let { msg: o, url: i, line: l, column: I, error: A } = t,
                        N = (function (t, e, a, r) {
                            let _ = (t.exception = t.exception || {}),
                                n = (_.values = _.values || []),
                                o = (n[0] = n[0] || {}),
                                i = (o.stacktrace = o.stacktrace || {}),
                                l = (i.frames = i.frames || []),
                                I = isNaN(parseInt(r, 10)) ? void 0 : r,
                                R = isNaN(parseInt(a, 10)) ? void 0 : a,
                                u = (0, E.HD)(e) && e.length > 0 ? e : (0, c.l4)();
                            return (
                                0 === l.length &&
                                    l.push({
                                        colno: I,
                                        filename: u,
                                        function: s.Fi,
                                        in_app: !0,
                                        lineno: R,
                                    }),
                                t
                            );
                        })((0, R.ME)(e, A || o, void 0, r, !1), i, l, I);
                    (N.level = "error"),
                        (0, n.eN)(N, {
                            originalException: A,
                            mechanism: {
                                handled: !1,
                                type: "onerror",
                            },
                        });
                }),
                N("onerror")),
                e.onunhandledrejection &&
                    ((r = t),
                    (0, i.h)((t) => {
                        var e;
                        let { stackParser: a, attachStacktrace: o } = T();
                        if ((0, _.s3)() !== r || (0, u.Wz)()) return;
                        let i = (function (t) {
                                if ((0, E.pt)(t)) return t;
                                try {
                                    if ("reason" in t) return t.reason;
                                    if ("detail" in t && "reason" in t.detail) return t.detail.reason;
                                } catch (t) {}
                                return t;
                            })(t),
                            c = (0, E.pt)(i)
                                ? ((e = i),
                                  {
                                      exception: {
                                          values: [
                                              {
                                                  type: "UnhandledRejection",
                                                  value: `Non-Error promise rejection captured with value: ${String(e)}`,
                                              },
                                          ],
                                      },
                                  })
                                : (0, R.ME)(a, i, void 0, o, !0);
                        (c.level = "error"),
                            (0, n.eN)(c, {
                                originalException: i,
                                mechanism: {
                                    handled: !1,
                                    type: "onunhandledrejection",
                                },
                            });
                    }),
                    N("onunhandledrejection"));
        },
    };
});
function N(t) {
    I.X && l.kg.log(`Global Handler attached: ${t}`);
}
function T() {
    let t = (0, _.s3)();
    return (
        (t && t.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1,
        }
    );
}
