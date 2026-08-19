"use strict";
n.d(t, { A: () => A }), n(938796);
var i = n(665260),
    r = n(17928),
    a = n(228366),
    s = n(734057),
    l = n(320095),
    o = n(652215);
let d = [],
    c = new Map();
function u(e, t) {
    0 === t.size && c.delete(e);
}
function _() {
    if (0 === c.size) return !1;
    c.clear();
}
class E extends r.Ay.Store {
    static displayName = "EphemeralMessageStore";
    initialize() {
        this.waitFor(s.A);
    }
    getMessages(e) {
        let t = c.get(e);
        return null == t || 0 === t.size ? d : Array.from(t.values());
    }
}
let A = new E(a.h, {
    MESSAGE_CREATE: function (e) {
        let t,
            { channelId: n, message: r } = e;
        if (!(0, i.Lt)(r.flags ?? 0, o.pr7.EPHEMERAL)) return !1;
        let a = (null == (t = c.get(n)) && ((t = new Map()), c.set(n, t)), t);
        for (a.set(r.id, (0, l.rh)(r)); a.size > 50; ) {
            let e = a.keys().next();
            if (!0 === e.done) break;
            a.delete(e.value);
        }
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.channel_id,
            i = t.id;
        if (null == n || null == i) return !1;
        let r = c.get(n);
        if (null == r) return !1;
        let a = r.get(i);
        if (null == a) return !1;
        r.set(i, (0, l.IU)(a, t));
    },
    MESSAGE_DELETE: function (e) {
        let { channelId: t, id: n } = e,
            i = c.get(t);
        if (null == i || !i.delete(n)) return !1;
        u(t, i);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { channelId: t, ids: n } = e,
            i = c.get(t);
        if (null == i) return !1;
        let r = !1;
        for (let e of n) i.delete(e) && (r = !0);
        if (!r) return !1;
        u(t, i);
    },
    CLEAR_MESSAGES: function (e) {
        let { channelId: t } = e;
        if (!c.has(t)) return !1;
        c.delete(t);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (!c.delete(t.id)) return !1;
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        if (!c.delete(t.id)) return !1;
    },
    GUILD_DELETE: function () {
        if (0 === c.size) return !1;
        let e = !1;
        for (let t of c.keys()) null == s.A.getChannel(t) && (c.delete(t), (e = !0));
        if (!e) return !1;
    },
    CACHE_LOADED: _,
    CONNECTION_OPEN: _,
    OVERLAY_INITIALIZE: _,
    LOGOUT: _,
});
