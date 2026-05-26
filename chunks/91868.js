"use strict";
n.d(t, { A: () => D, Y: () => A }), n(321073);
var i,
    r = n(17928),
    s = n(713402),
    a = n(228366),
    o = n(174768),
    l = n(95701),
    u = n(734057),
    c = n(222823),
    d = n(994500),
    _ = n(567761),
    f = n(935208),
    h = n(914853),
    p = n(956753),
    E = n(648427),
    m = n(315240),
    g = n(652215),
    A = (((i = {}).ACTIVE_NOW = "ACTIVE_NOW"), (i.DMS = "DMS"), (i.RECENT_TEXT = "RECENT_TEXT"), i);
let I = new s.J(
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
    T = null,
    S = new Set();
function N(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0");
}
function y(e) {
    let t = (function (e) {
        let t = u.A.getChannel(e);
        if (null == t) return null;
        let n = t.isPrivate(),
            i = !n && (0, l.ke)(t.type);
        if (!n && !i) return null;
        if (t.isDM()) {
            let e = t.getRecipientId?.();
            if (
                null != e &&
                d.A.getRelationshipType(e) === g.eA$.PENDING_INCOMING &&
                (d.A.isIgnored(e) || d.A.isSpam(e))
            )
                return null;
        }
        let r = m.A.hasActiveNowChannelId({ kind: m.u.Text, channelId: e }),
            s = i && (o.A.getChannelHistory().includes(e) || E.A.getTextChannelHistory().includes(e)),
            a = c.Ay.hasUnread(e) || c.Ay.getMentionCount(e) > 0,
            _ = null != t.lastMessageId ? f.default.extractTimestamp(t.lastMessageId) : 0,
            h = (() => {
                var t;
                if (n) return `DM\0${N(_)}\0${e}`;
                if (r) {
                    let n;
                    return (
                        (t = m.A.getScoreForChannelId(e) ?? 0),
                        (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t)))),
                        `AN\0${String(0x2540be3ff - n).padStart(10, "0")}\0${e}`
                    );
                }
                return `GT\0${a ? "0" : "1"}\0${N(_)}\0${e}`;
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: r,
            isInDmsList: n,
            isInRecentTextList: s,
            hasUnread: a,
            lastActivityAtMs: _,
            sortKey: h,
        };
    })(e);
    return null == t ? I.delete(e) : I.set(e, t);
}
function C() {
    let e = m.A.getActiveNowChannelIds({ kind: m.u.Text }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = y(t) || n;
    for (let e of [...I.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = y(e.channelId) || n);
    return (S = t), n;
}
function v() {
    I.clear(), (S = new Set());
    let e = !1;
    for (let t of _.default.getPrivateChannelIds()) e = y(t) || e;
    for (let t of o.A.getChannelHistory()) e = y(t) || e;
    for (let t of E.A.getTextChannelHistory()) e = y(t) || e;
    let t = m.A.getActiveNowChannelIds({ kind: m.u.Text });
    for (let n of ((S = new Set(t)), t)) e = y(n) || e;
    return e;
}
function O(e) {
    let t = u.A.getDMFromUserId(e);
    return null != t && y(t);
}
class R extends r.Ay.Store {
    static displayName = "FriendsWidgetMessagesStore";
    initialize() {
        this.waitFor(u.A, m.A, o.A, c.Ay, d.A, _.default, E.A), v();
    }
    getRows(e) {
        return [I.values(e), I.version];
    }
    getChannel(e) {
        return I.get(e);
    }
}
let b = (e) => (0, p.v$)(e, "FriendsWidgetMessagesStore"),
    D = new R(
        a.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: b(function (e) {
                      return e.tab === h.x.MESSAGES && y(e.targetId);
                  }),
                  CHANNEL_SELECT: b(function (e) {
                      let t = e.channelId ?? null,
                          n = T;
                      T = t;
                      let i = !1;
                      null != n && (i = y(n) || i), null != t && (i = y(t) || i);
                      let r = C();
                      return i || r;
                  }),
                  MESSAGE_CREATE: b(function (e) {
                      if (e.optimistic) return !1;
                      let t = y(e.channelId),
                          n = C();
                      return t || n;
                  }),
                  MESSAGE_ACK: b(function (e) {
                      return y(e.channelId);
                  }),
                  TYPING_START: b(function (e) {
                      var t = e.channelId;
                      let n = new Set(m.A.getActiveNowChannelIds({ kind: m.u.Text })),
                          i = !1;
                      for (let e of ((i = y(t) || i), n)) S.has(e) || (i = y(e) || i);
                      for (let e of S) n.has(e) || (i = y(e) || i);
                      return (S = n), i;
                  }),
                  RTC_CONNECTION_STATE: b(function () {
                      return C();
                  }),
                  VOICE_CHANNEL_SELECT: b(function () {
                      return C();
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: b(C),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: b(C),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: b(C),
                  RELATIONSHIP_ADD: b(function (e) {
                      return O(e.relationship.id);
                  }),
                  RELATIONSHIP_REMOVE: b(function (e) {
                      return O(e.relationship.id);
                  }),
                  RELATIONSHIP_UPDATE: b(function (e) {
                      return O(e.relationship.id);
                  }),
                  RELATIONSHIP_PENDING_INCOMING_REMOVED: b(function (e) {
                      let t = !1;
                      for (let e of _.default.getPrivateChannelIds()) {
                          let n = u.A.getChannel(e);
                          null != n && n.isDM() && (t = y(e) || t);
                      }
                      return t;
                  }),
                  OVERLAY_INITIALIZE: b(v),
                  POST_CONNECTION_OPEN: b(v),
                  CACHE_LOADED: b(v),
                  CACHE_LOADED_LAZY: b(v),
                  FRIENDS_LIST_POPOUT_MOUNTED: b(v),
                  LOGOUT: b(function () {
                      let e = I.size() > 0;
                      return I.clear(), (T = null), (S = new Set()), e;
                  }),
              },
    );
