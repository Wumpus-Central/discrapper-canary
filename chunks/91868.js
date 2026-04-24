n.d(t, { A: () => R, Y: () => _ }), n(321073);
var i,
    s = n(17928),
    r = n(713402),
    l = n(228366),
    a = n(174768),
    u = n(95701),
    o = n(734057),
    d = n(222823),
    c = n(994500),
    h = n(567761),
    I = n(935208),
    g = n(914853),
    f = n(956753),
    A = n(648427),
    E = n(315240),
    S = n(652215),
    _ = (((i = {}).ACTIVE_NOW = "ACTIVE_NOW"), (i.DMS = "DMS"), (i.RECENT_TEXT = "RECENT_TEXT"), i);
let M = new r.J(
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
    p = null,
    N = new Set();
function T(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0");
}
function m(e) {
    let t = (function (e) {
        let t = o.A.getChannel(e);
        if (null == t) return null;
        let n = t.isPrivate(),
            i = !n && (0, u.ke)(t.type);
        if (!n && !i) return null;
        if (t.isDM()) {
            let e = t.getRecipientId?.();
            if (
                null != e &&
                c.A.getRelationshipType(e) === S.eA$.PENDING_INCOMING &&
                (c.A.isIgnored(e) || c.A.isSpam(e))
            )
                return null;
        }
        let s = E.A.hasActiveNowChannelId({ kind: E.u.Text, channelId: e }),
            r = i && (a.A.getChannelHistory().includes(e) || A.A.getTextChannelHistory().includes(e)),
            l = d.Ay.hasUnread(e) || d.Ay.getMentionCount(e) > 0,
            h = null != t.lastMessageId ? I.default.extractTimestamp(t.lastMessageId) : 0,
            g = (() => {
                var t;
                if (n) return `DM\0${T(h)}\0${e}`;
                if (s) {
                    let n;
                    return (
                        (t = E.A.getScoreForChannelId(e) ?? 0),
                        (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t)))),
                        `AN\0${String(0x2540be3ff - n).padStart(10, "0")}\0${e}`
                    );
                }
                return `GT\0${l ? "0" : "1"}\0${T(h)}\0${e}`;
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: s,
            isInDmsList: n,
            isInRecentTextList: r,
            hasUnread: l,
            lastActivityAtMs: h,
            sortKey: g,
        };
    })(e);
    return null == t ? M.delete(e) : M.set(e, t);
}
function C() {
    let e = E.A.getActiveNowChannelIds({ kind: E.u.Text }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = m(t) || n;
    for (let e of [...M.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = m(e.channelId) || n);
    return (N = t), n;
}
function y() {
    M.clear(), (N = new Set());
    let e = !1;
    for (let t of h.default.getPrivateChannelIds()) e = m(t) || e;
    for (let t of a.A.getChannelHistory()) e = m(t) || e;
    for (let t of A.A.getTextChannelHistory()) e = m(t) || e;
    let t = E.A.getActiveNowChannelIds({ kind: E.u.Text });
    for (let n of ((N = new Set(t)), t)) e = m(n) || e;
    return e;
}
function D(e) {
    let t = o.A.getDMFromUserId(e);
    return null != t && m(t);
}
class U extends s.Ay.Store {
    static displayName = "FriendsWidgetMessagesStore";
    initialize() {
        this.waitFor(o.A, E.A, a.A, d.Ay, c.A, h.default, A.A), y();
    }
    getRows(e) {
        return [M.values(e), M.version];
    }
    getChannel(e) {
        return M.get(e);
    }
}
let O = (e) => (0, f.v$)(e, "FriendsWidgetMessagesStore"),
    R = new U(
        l.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: O(function (e) {
                      return e.tab === g.x.MESSAGES && m(e.targetId);
                  }),
                  CHANNEL_SELECT: O(function (e) {
                      let t = e.channelId ?? null,
                          n = p;
                      p = t;
                      let i = !1;
                      null != n && (i = m(n) || i), null != t && (i = m(t) || i);
                      let s = C();
                      return i || s;
                  }),
                  MESSAGE_CREATE: O(function (e) {
                      if (e.optimistic) return !1;
                      let t = m(e.channelId),
                          n = C();
                      return t || n;
                  }),
                  MESSAGE_ACK: O(function (e) {
                      return m(e.channelId);
                  }),
                  TYPING_START: O(function (e) {
                      var t = e.channelId;
                      let n = new Set(E.A.getActiveNowChannelIds({ kind: E.u.Text })),
                          i = !1;
                      for (let e of ((i = m(t) || i), n)) N.has(e) || (i = m(e) || i);
                      for (let e of N) n.has(e) || (i = m(e) || i);
                      return (N = n), i;
                  }),
                  RTC_CONNECTION_STATE: O(function () {
                      return C();
                  }),
                  VOICE_CHANNEL_SELECT: O(function () {
                      return C();
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: O(C),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: O(C),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: O(C),
                  RELATIONSHIP_ADD: O(function (e) {
                      return D(e.relationship.id);
                  }),
                  RELATIONSHIP_REMOVE: O(function (e) {
                      return D(e.relationship.id);
                  }),
                  RELATIONSHIP_UPDATE: O(function (e) {
                      return D(e.relationship.id);
                  }),
                  RELATIONSHIP_PENDING_INCOMING_REMOVED: O(function (e) {
                      let t = !1;
                      for (let e of h.default.getPrivateChannelIds()) {
                          let n = o.A.getChannel(e);
                          null != n && n.isDM() && (t = m(e) || t);
                      }
                      return t;
                  }),
                  OVERLAY_INITIALIZE: O(y),
                  POST_CONNECTION_OPEN: O(y),
                  CACHE_LOADED: O(y),
                  CACHE_LOADED_LAZY: O(y),
                  FRIENDS_LIST_POPOUT_MOUNTED: O(y),
                  LOGOUT: O(function () {
                      let e = M.size() > 0;
                      return M.clear(), (p = null), (N = new Set()), e;
                  }),
              },
    );
