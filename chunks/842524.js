n.d(t, { A: () => p });
var i = n(17928),
    r = n(73153),
    a = n(994500),
    s = n(977997),
    l = n(734057),
    o = n(763827),
    d = n(549022),
    c = n(227724);
let u = {},
    _ = {},
    E = new Set();
function A() {
    ((u = {}), (_ = {}));
}
function h(e) {
    let { relationship: t } = e,
        n = s.A.getVoiceStateForUser(t.id);
    return null != n && null != n.channelId && f(n.channelId, t.id);
}
function f(e, t) {
    let n,
        i = !1,
        r = !1,
        s = new Set(u[e]),
        E = a.A.isBlocked(t);
    (E && !s.has(t) ? (s.add(t), (r = !0), (i = !0)) : E || (i = s.delete(t)),
        0 === s.size && i ? delete u[e] : i && (u[e] = s));
    let A = new Set(_[e]),
        h = a.A.isIgnored(t);
    return (
        h && !A.has(t) ? (A.add(t), (r = !0), (i = !0)) : h || (i = A.delete(t)),
        0 === A.size && i ? delete _[e] : i && (_[e] = A),
        r && (e !== (n = o.A.getChannelId()) || (null != l.A.getChannel(e) && ((0, d.a0)(t) || (0, c.k)(n, t)))),
        i
    );
}
class I extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A, s.A);
    }
    getBlockedUsersForVoiceChannel(e) {
        return u[e] ?? E;
    }
    getIgnoredUsersForVoiceChannel(e) {
        return _[e] ?? E;
    }
}
let p = new I(r.h, {
    CONNECTION_OPEN: A,
    LOGOUT: A,
    OVERLAY_INITIALIZE: function () {
        A();
        let e = s.A.getAllVoiceStates(),
            t = !1;
        for (let n of Object.values(e))
            for (let e of Object.values(n)) null != e.channelId && (t = f(e.channelId, e.userId) || t);
        return t;
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = !1;
        return (
            t.forEach((e) => {
                (null != e.oldChannelId &&
                    (null != u[e.oldChannelId] && (u[e.oldChannelId]?.delete(e.userId), (n = !0)),
                    null != _[e.oldChannelId] && (_[e.oldChannelId]?.delete(e.userId), (n = !0))),
                    null != e.channelId && (n = f(e.channelId, e.userId) || n));
            }),
            n
        );
    },
    RELATIONSHIP_ADD: h,
    RELATIONSHIP_REMOVE: h,
    RELATIONSHIP_UPDATE: h,
});
