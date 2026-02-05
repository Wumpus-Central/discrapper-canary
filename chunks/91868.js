n.d(t, { A: () => v, Y: () => f }), n(321073);
var l,
    i = n(311907),
    s = n(713402),
    r = n(73153),
    a = n(174768),
    u = n(95701),
    o = n(734057),
    d = n(222823),
    c = n(645959),
    h = n(661191),
    g = n(914853),
    I = n(956753),
    E = n(648427),
    A = n(316541),
    f = (((l = {}).ACTIVE_NOW = "ACTIVE_NOW"), (l.DMS = "DMS"), (l.RECENT_TEXT = "RECENT_TEXT"), l);
let m = new s.J(
        function (e) {
            let t = [];
            return (
                e.isInActiveNow && t.push("ACTIVE_NOW"),
                e.isInDmsList && t.push("DMS"),
                e.isInRecentTextList && t.push("RECENT_TEXT"),
                t
            );
        },
        function (e) {
            return e.sortKey;
        },
    ),
    S = null,
    p = new Set();
function N(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0");
}
function T(e) {
    let t = (function (e) {
        let t = o.A.getChannel(e);
        if (null == t) return null;
        let n = t.isPrivate(),
            l = !n && (0, u.ke)(t.type);
        if (!n && !l) return null;
        let i = A.A.hasActiveNowChannelId({ kind: A.u.Text, channelId: e }),
            s = l && (a.A.getChannelHistory().includes(e) || E.A.getTextChannelHistory().includes(e)),
            r = d.Ay.hasUnread(e) || d.Ay.getMentionCount(e) > 0,
            c = null != t.lastMessageId ? h.default.extractTimestamp(t.lastMessageId) : 0,
            g = (() => {
                var t;
                if (n) return `DM\0${N(c)}\0${e}`;
                if (i) {
                    let n;
                    return (
                        (t = A.A.getScoreForChannelId(e) ?? 0),
                        (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t)))),
                        `AN\0${String(0x2540be3ff - n).padStart(10, "0")}\0${e}`
                    );
                }
                return `GT\0${r ? "0" : "1"}\0${N(c)}\0${e}`;
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: i,
            isInDmsList: n,
            isInRecentTextList: s,
            hasUnread: r,
            lastActivityAtMs: c,
            sortKey: g,
        };
    })(e);
    return null == t ? m.delete(e) : m.set(e, t);
}
function _() {
    let e = A.A.getActiveNowChannelIds({ kind: A.u.Text }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = T(t) || n;
    for (let e of [...m.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = T(e.channelId) || n);
    return (p = t), n;
}
function y() {
    m.clear(), (p = new Set());
    let e = !1;
    for (let t of c.A.getPrivateChannelIds()) e = T(t) || e;
    for (let t of a.A.getChannelHistory()) e = T(t) || e;
    for (let t of E.A.getTextChannelHistory()) e = T(t) || e;
    let t = A.A.getActiveNowChannelIds({ kind: A.u.Text });
    for (let n of ((p = new Set(t)), t)) e = T(n) || e;
    return e;
}
class C extends i.Ay.Store {
    static displayName = "FriendsWidgetMessagesStore";
    initialize() {
        this.waitFor(o.A, A.A, a.A, d.Ay, c.A, E.A), y();
    }
    getRows(e) {
        return [m.values(e), m.version];
    }
    getChannel(e) {
        return m.get(e);
    }
}
let x = (e) => (0, I.v$)(e, "FriendsWidgetMessagesStore"),
    v = new C(
        r.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: x(function (e) {
                      return e.tab === g.x.MESSAGES && T(e.targetId);
                  }),
                  CHANNEL_SELECT: x(function (e) {
                      let t = e.channelId ?? null,
                          n = S;
                      S = t;
                      let l = !1;
                      null != n && (l = T(n) || l), null != t && (l = T(t) || l);
                      let i = _();
                      return l || i;
                  }),
                  MESSAGE_CREATE: x(function (e) {
                      if (e.optimistic) return !1;
                      let t = T(e.channelId),
                          n = _();
                      return t || n;
                  }),
                  MESSAGE_ACK: x(function (e) {
                      return T(e.channelId);
                  }),
                  TYPING_START: x(function (e) {
                      var t = e.channelId;
                      let n = new Set(A.A.getActiveNowChannelIds({ kind: A.u.Text })),
                          l = !1;
                      for (let e of ((l = T(t) || l), n)) p.has(e) || (l = T(e) || l);
                      for (let e of p) n.has(e) || (l = T(e) || l);
                      return (p = n), l;
                  }),
                  RTC_CONNECTION_STATE: x(function () {
                      return _();
                  }),
                  VOICE_CHANNEL_SELECT: x(function () {
                      return _();
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: x(_),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: x(_),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: x(_),
                  OVERLAY_INITIALIZE: x(y),
                  POST_CONNECTION_OPEN: x(y),
                  CACHE_LOADED: x(y),
                  CACHE_LOADED_LAZY: x(y),
                  FRIENDS_LIST_POPOUT_MOUNTED: x(y),
                  LOGOUT: x(function () {
                      let e = m.size() > 0;
                      return m.clear(), (S = null), (p = new Set()), e;
                  }),
              },
    );
