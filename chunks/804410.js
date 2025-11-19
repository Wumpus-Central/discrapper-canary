_.d(e, { k: () => A });
var a = _(151122),
    r = _(263449),
    n = _(233517),
    o = _(824851),
    E = _(753642),
    i = _(573736),
    c = _(467510),
    s = _(688838),
    l = _(622916),
    I = _(454463),
    R = _(878719),
    N = _(163162);
let A = (0, a._I)((t = {}) => {
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
            var _, a;
            e.onerror &&
                ((_ = t),
                (0, o.V)((t) => {
                    let { stackParser: e, attachStacktrace: a } = T();
                    if ((0, r.s3)() !== _ || (0, N.Wz)()) return;
                    let { msg: o, url: E, line: l, column: I, error: A } = t,
                        u = (function (t, e, _, a) {
                            let r = (t.exception = t.exception || {}),
                                n = (r.values = r.values || []),
                                o = (n[0] = n[0] || {}),
                                E = (o.stacktrace = o.stacktrace || {}),
                                l = (E.frames = E.frames || []),
                                I = isNaN(parseInt(a, 10)) ? void 0 : a,
                                R = isNaN(parseInt(_, 10)) ? void 0 : _,
                                N = (0, i.HD)(e) && e.length > 0 ? e : (0, c.l4)();
                            return (
                                0 === l.length &&
                                    l.push({
                                        colno: I,
                                        filename: N,
                                        function: s.Fi,
                                        in_app: !0,
                                        lineno: R,
                                    }),
                                t
                            );
                        })((0, R.ME)(e, A || o, void 0, a, !1), E, l, I);
                    (u.level = "error"),
                        (0, n.eN)(u, {
                            originalException: A,
                            mechanism: {
                                handled: !1,
                                type: "onerror",
                            },
                        });
                }),
                u("onerror")),
                e.onunhandledrejection &&
                    ((a = t),
                    (0, E.h)((t) => {
                        var e;
                        let { stackParser: _, attachStacktrace: o } = T();
                        if ((0, r.s3)() !== a || (0, N.Wz)()) return;
                        let E = (function (t) {
                                if ((0, i.pt)(t)) return t;
                                try {
                                    if ("reason" in t) return t.reason;
                                    if ("detail" in t && "reason" in t.detail) return t.detail.reason;
                                } catch (t) {}
                                return t;
                            })(t),
                            c = (0, i.pt)(E)
                                ? ((e = E),
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
                                : (0, R.ME)(_, E, void 0, o, !0);
                        (c.level = "error"),
                            (0, n.eN)(c, {
                                originalException: E,
                                mechanism: {
                                    handled: !1,
                                    type: "onunhandledrejection",
                                },
                            });
                    }),
                    u("onunhandledrejection"));
        },
    };
});
function u(t) {
    I.X && l.kg.log(`Global Handler attached: ${t}`);
}
function T() {
    let t = (0, r.s3)();
    return (
        (t && t.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1,
        }
    );
}
