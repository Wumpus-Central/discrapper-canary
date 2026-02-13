n.d(t, { A: () => R, Y: () => S }), n(321073);
var l,
    i = n(311907),
    r = n(713402),
    s = n(73153),
    a = n(174768),
    u = n(95701),
    o = n(734057),
    d = n(222823),
    c = n(994500),
    h = n(645959),
    g = n(661191),
    I = n(914853),
    f = n(956753),
    A = n(648427),
    E = n(316541),
    m = n(652215),
    S = (((l = {}).ACTIVE_NOW = "ACTIVE_NOW"), (l.DMS = "DMS"), (l.RECENT_TEXT = "RECENT_TEXT"), l);
let p = new r.J(
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
    N = null,
    T = new Set();
function _(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0");
}
function C(e) {
    let t = (function (e) {
        let t = o.A.getChannel(e);
        if (null == t) return null;
        let n = t.isPrivate(),
            l = !n && (0, u.ke)(t.type);
        if (!n && !l) return null;
        if (t.isDM()) {
            let e = t.getRecipientId?.();
            if (
                null != e &&
                c.A.getRelationshipType(e) === m.eA$.PENDING_INCOMING &&
                (c.A.isIgnored(e) || c.A.isSpam(e))
            )
                return null;
        }
        let i = E.A.hasActiveNowChannelId({ kind: E.u.Text, channelId: e }),
            r = l && (a.A.getChannelHistory().includes(e) || A.A.getTextChannelHistory().includes(e)),
            s = d.Ay.hasUnread(e) || d.Ay.getMentionCount(e) > 0,
            h = null != t.lastMessageId ? g.default.extractTimestamp(t.lastMessageId) : 0,
            I = (() => {
                var t;
                if (n) return `DM\0${_(h)}\0${e}`;
                if (i) {
                    let n;
                    return (
                        (t = E.A.getScoreForChannelId(e) ?? 0),
                        (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t)))),
                        `AN\0${String(0x2540be3ff - n).padStart(10, "0")}\0${e}`
                    );
                }
                return `GT\0${s ? "0" : "1"}\0${_(h)}\0${e}`;
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: i,
            isInDmsList: n,
            isInRecentTextList: r,
            hasUnread: s,
            lastActivityAtMs: h,
            sortKey: I,
        };
    })(e);
    return null == t ? p.delete(e) : p.set(e, t);
}
function y() {
    let e = E.A.getActiveNowChannelIds({ kind: E.u.Text }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = C(t) || n;
    for (let e of [...p.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = C(e.channelId) || n);
    return (T = t), n;
}
function x() {
    p.clear(), (T = new Set());
    let e = !1;
    for (let t of h.default.getPrivateChannelIds()) e = C(t) || e;
    for (let t of a.A.getChannelHistory()) e = C(t) || e;
    for (let t of A.A.getTextChannelHistory()) e = C(t) || e;
    let t = E.A.getActiveNowChannelIds({ kind: E.u.Text });
    for (let n of ((T = new Set(t)), t)) e = C(n) || e;
    return e;
}
function M(e) {
    let t = o.A.getDMFromUserId(e);
    return null != t && C(t);
}
class v extends i.Ay.Store {
    static displayName = "FriendsWidgetMessagesStore";
    initialize() {
        this.waitFor(o.A, E.A, a.A, d.Ay, c.A, h.default, A.A), x();
    }
    getRows(e) {
        return [p.values(e), p.version];
    }
    getChannel(e) {
        return p.get(e);
    }
}
let D = (e) => (0, f.v$)(e, "FriendsWidgetMessagesStore"),
    R = new v(
        s.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: D(function (e) {
                      return e.tab === I.x.MESSAGES && C(e.targetId);
                  }),
                  CHANNEL_SELECT: D(function (e) {
                      let t = e.channelId ?? null,
                          n = N;
                      N = t;
                      let l = !1;
                      null != n && (l = C(n) || l), null != t && (l = C(t) || l);
                      let i = y();
                      return l || i;
                  }),
                  MESSAGE_CREATE: D(function (e) {
                      if (e.optimistic) return !1;
                      let t = C(e.channelId),
                          n = y();
                      return t || n;
                  }),
                  MESSAGE_ACK: D(function (e) {
                      return C(e.channelId);
                  }),
                  TYPING_START: D(function (e) {
                      var t = e.channelId;
                      let n = new Set(E.A.getActiveNowChannelIds({ kind: E.u.Text })),
                          l = !1;
                      for (let e of ((l = C(t) || l), n)) T.has(e) || (l = C(e) || l);
                      for (let e of T) n.has(e) || (l = C(e) || l);
                      return (T = n), l;
                  }),
                  RTC_CONNECTION_STATE: D(function () {
                      return y();
                  }),
                  VOICE_CHANNEL_SELECT: D(function () {
                      return y();
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: D(y),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: D(y),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: D(y),
                  RELATIONSHIP_ADD: D(function (e) {
                      return M(e.relationship.id);
                  }),
                  RELATIONSHIP_REMOVE: D(function (e) {
                      return M(e.relationship.id);
                  }),
                  RELATIONSHIP_UPDATE: D(function (e) {
                      return M(e.relationship.id);
                  }),
                  RELATIONSHIP_PENDING_INCOMING_REMOVED: D(function (e) {
                      let t = !1;
                      for (let e of h.default.getPrivateChannelIds()) {
                          let n = o.A.getChannel(e);
                          null != n && n.isDM() && (t = C(e) || t);
                      }
                      return t;
                  }),
                  OVERLAY_INITIALIZE: D(x),
                  POST_CONNECTION_OPEN: D(x),
                  CACHE_LOADED: D(x),
                  CACHE_LOADED_LAZY: D(x),
                  FRIENDS_LIST_POPOUT_MOUNTED: D(x),
                  LOGOUT: D(function () {
                      let e = p.size() > 0;
                      return p.clear(), (N = null), (T = new Set()), e;
                  }),
              },
    );
