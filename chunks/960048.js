n.d(t, { Z: () => l }), n(47120), n(411104);
var i = n(464847),
    r = n(289182),
    a = n(358085),
    s = n(998502);
function o() {
    var e, t, n, i, r, o;
    let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    a.isPlatformEmbedded &&
        s.ZP.updateCrashReporter({
            user_id: null !== (e = l.id) && void 0 !== e ? e : '',
            username: null !== (t = l.username) && void 0 !== t ? t : '',
            email: null !== (n = l.email) && void 0 !== n ? n : '',
            sentry: {
                user: {
                    id: null !== (i = l.id) && void 0 !== i ? i : '',
                    username: null !== (r = l.username) && void 0 !== r ? r : '',
                    email: null !== (o = l.email) && void 0 !== o ? o : ''
                }
            }
        });
}
let l = {
    setUser(e, t, n, i) {
        var r;
        let a = {
            id: e,
            username: t,
            email: n,
            staff: i
        };
        null === (r = window.DiscordSentry) || void 0 === r || r.getCurrentScope().setUser(a), o(a);
    },
    clearUser() {
        var e;
        null === (e = window.DiscordSentry) || void 0 === e || e.getCurrentScope().setUser(null), o();
    },
    setTags(e) {
        var t;
        null === (t = window.DiscordSentry) || void 0 === t || t.getCurrentScope().setTags(e);
    },
    setExtra(e) {
        var t;
        null === (t = window.DiscordSentry) || void 0 === t || t.getCurrentScope().setExtras(e);
    },
    captureException(e, t) {
        var n;
        let i = (0, r.v)(t);
        null === (n = window.DiscordSentry) ||
            void 0 === n ||
            n.withScope((t) => {
                var n;
                null != i.tags && t.setTags(i.tags), t.setExtras(i.extra), null === (n = window.DiscordSentry) || void 0 === n || n.captureException(e);
            });
    },
    captureCrash(e, t) {
        var n;
        let i;
        let a = (0, r.v)(t);
        return (
            null === (n = window.DiscordSentry) ||
                void 0 === n ||
                n.withScope((t) => {
                    var n;
                    t.setExtras(a.extra),
                        t.setTag('crash', 'true'),
                        t.setLevel('fatal'),
                        t.addEventProcessor((e) => {
                            var t, n;
                            let i = null === (n = e.exception) || void 0 === n ? void 0 : null === (t = n.values) || void 0 === t ? void 0 : t[0];
                            return (
                                null != i &&
                                    (i.mechanism = {
                                        ...i.mechanism,
                                        handled: !1
                                    }),
                                e
                            );
                        }),
                        (i = null === (n = window.DiscordSentry) || void 0 === n ? void 0 : n.captureException(e));
                }),
            i
        );
    },
    captureMessage(e, t) {
        var n;
        let i = (0, r.v)(t);
        null === (n = window.DiscordSentry) ||
            void 0 === n ||
            n.withScope((t) => {
                var n;
                null != i.tags && t.setTags(i.tags), t.setExtras(i.extra), null === (n = window.DiscordSentry) || void 0 === n || n.captureMessage(e);
            });
    },
    addBreadcrumb(e) {
        (0, i.Z)(e);
    },
    profiledRootComponent: (e) => e,
    crash() {
        throw Error('crash');
    }
};
