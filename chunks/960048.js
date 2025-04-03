n.d(t, { Z: () => f }), n(47120), n(411104);
var r = n(464847),
    i = n(289182),
    o = n(358085),
    a = n(998502);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d() {
    var e, t, n, r, i, s;
    let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    o.isPlatformEmbedded &&
        a.ZP.updateCrashReporter({
            user_id: null != (e = l.id) ? e : '',
            username: null != (t = l.username) ? t : '',
            email: null != (n = l.email) ? n : '',
            sentry: {
                user: {
                    id: null != (r = l.id) ? r : '',
                    username: null != (i = l.username) ? i : '',
                    email: null != (s = l.email) ? s : ''
                }
            }
        });
}
let f = {
    setUser(e, t, n, r) {
        var i;
        let o = {
            id: e,
            username: t,
            email: n,
            staff: r
        };
        null == (i = window.DiscordSentry) || i.getCurrentScope().setUser(o), d(o);
    },
    clearUser() {
        var e;
        null == (e = window.DiscordSentry) || e.getCurrentScope().setUser(null), d();
    },
    setTags(e) {
        var t;
        null == (t = window.DiscordSentry) || t.getCurrentScope().setTags(e);
    },
    setExtra(e) {
        var t;
        null == (t = window.DiscordSentry) || t.getCurrentScope().setExtras(e);
    },
    captureException(e, t) {
        var n;
        let r = (0, i.v)(t);
        null == (n = window.DiscordSentry) ||
            n.withScope((t) => {
                var n;
                null != r.tags && t.setTags(r.tags), t.setExtras(r.extra), null == (n = window.DiscordSentry) || n.captureException(e);
            });
    },
    captureCrash(e, t) {
        var n;
        let r,
            o = (0, i.v)(t);
        return (
            null == (n = window.DiscordSentry) ||
                n.withScope((t) => {
                    var n;
                    t.setExtras(o.extra),
                        t.setTag('crash', 'true'),
                        t.setLevel('fatal'),
                        t.addEventProcessor((e) => {
                            var t, n;
                            let r = null == (n = e.exception) || null == (t = n.values) ? void 0 : t[0];
                            return null != r && (r.mechanism = u(l({}, r.mechanism), { handled: !1 })), e;
                        }),
                        (r = null == (n = window.DiscordSentry) ? void 0 : n.captureException(e));
                }),
            r
        );
    },
    captureMessage(e, t) {
        var n;
        let r = (0, i.v)(t);
        null == (n = window.DiscordSentry) ||
            n.withScope((t) => {
                var n;
                null != r.tags && t.setTags(r.tags), t.setExtras(r.extra), null == (n = window.DiscordSentry) || n.captureMessage(e);
            });
    },
    addBreadcrumb(e) {
        (0, r.Z)(e);
    },
    profiledRootComponent: (e) => e,
    crash() {
        throw Error('crash');
    }
};
