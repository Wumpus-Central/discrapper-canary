r.d(t, { k: () => p });
var n = r(151122),
    a = r(263449),
    i = r(233517),
    o = r(824851),
    _ = r(753642),
    s = r(573736),
    c = r(467510),
    E = r(688838),
    l = r(622916),
    u = r(454463),
    d = r(878719),
    I = r(163162);
let p = (0, n._I)((e = {}) => {
    let t = {
        onerror: !0,
        onunhandledrejection: !0,
        ...e,
    };
    return {
        name: "GlobalHandlers",
        setupOnce() {
            Error.stackTraceLimit = 50;
        },
        setup(e) {
            var r, n;
            t.onerror &&
                ((r = e),
                (0, o.V)((e) => {
                    let { stackParser: t, attachStacktrace: n } = T();
                    if ((0, a.s3)() !== r || (0, I.Wz)()) return;
                    let { msg: o, url: _, line: l, column: u, error: p } = e,
                        R = (function (e, t, r, n) {
                            let a = (e.exception = e.exception || {}),
                                i = (a.values = a.values || []),
                                o = (i[0] = i[0] || {}),
                                _ = (o.stacktrace = o.stacktrace || {}),
                                l = (_.frames = _.frames || []),
                                u = isNaN(parseInt(n, 10)) ? void 0 : n,
                                d = isNaN(parseInt(r, 10)) ? void 0 : r,
                                I = (0, s.HD)(t) && t.length > 0 ? t : (0, c.l4)();
                            return (
                                0 === l.length &&
                                    l.push({
                                        colno: u,
                                        filename: I,
                                        function: E.Fi,
                                        in_app: !0,
                                        lineno: d,
                                    }),
                                e
                            );
                        })((0, d.ME)(t, p || o, void 0, n, !1), _, l, u);
                    (R.level = "error"),
                        (0, i.eN)(R, {
                            originalException: p,
                            mechanism: {
                                handled: !1,
                                type: "onerror",
                            },
                        });
                }),
                R("onerror")),
                t.onunhandledrejection &&
                    ((n = e),
                    (0, _.h)((e) => {
                        var t;
                        let { stackParser: r, attachStacktrace: o } = T();
                        if ((0, a.s3)() !== n || (0, I.Wz)()) return;
                        let _ = (function (e) {
                                if ((0, s.pt)(e)) return e;
                                try {
                                    if ("reason" in e) return e.reason;
                                    if ("detail" in e && "reason" in e.detail) return e.detail.reason;
                                } catch (e) {}
                                return e;
                            })(e),
                            c = (0, s.pt)(_)
                                ? ((t = _),
                                  {
                                      exception: {
                                          values: [
                                              {
                                                  type: "UnhandledRejection",
                                                  value: `Non-Error promise rejection captured with value: ${String(t)}`,
                                              },
                                          ],
                                      },
                                  })
                                : (0, d.ME)(r, _, void 0, o, !0);
                        (c.level = "error"),
                            (0, i.eN)(c, {
                                originalException: _,
                                mechanism: {
                                    handled: !1,
                                    type: "onunhandledrejection",
                                },
                            });
                    }),
                    R("onunhandledrejection"));
        },
    };
});
function R(e) {
    u.X && l.kg.log(`Global Handler attached: ${e}`);
}
function T() {
    let e = (0, a.s3)();
    return (
        (e && e.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1,
        }
    );
}
