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
    h = n(935208),
    f = n(914853),
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
function y(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0");
}
function N(e) {
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
            _ = null != t.lastMessageId ? h.default.extractTimestamp(t.lastMessageId) : 0,
            f = (() => {
                var t;
                if (n) return `DM\0${y(_)}\0${e}`;
                if (r) {
                    let n;
                    return (
                        (t = m.A.getScoreForChannelId(e) ?? 0),
                        (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t)))),
                        `AN\0${String(0x2540be3ff - n).padStart(10, "0")}\0${e}`
                    );
                }
                return `GT\0${a ? "0" : "1"}\0${y(_)}\0${e}`;
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: r,
            isInDmsList: n,
            isInRecentTextList: s,
            hasUnread: a,
            lastActivityAtMs: _,
            sortKey: f,
        };
    })(e);
    return null == t ? I.delete(e) : I.set(e, t);
}
function v() {
    let e = m.A.getActiveNowChannelIds({ kind: m.u.Text }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = N(t) || n;
    for (let e of [...I.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = N(e.channelId) || n);
    return (S = t), n;
}
function C() {
    I.clear(), (S = new Set());
    let e = !1;
    for (let t of _.default.getPrivateChannelIds()) e = N(t) || e;
    for (let t of o.A.getChannelHistory()) e = N(t) || e;
    for (let t of E.A.getTextChannelHistory()) e = N(t) || e;
    let t = m.A.getActiveNowChannelIds({ kind: m.u.Text });
    for (let n of ((S = new Set(t)), t)) e = N(n) || e;
    return e;
}
function R(e) {
    let t = u.A.getDMFromUserId(e);
    return null != t && N(t);
}
class O extends r.Ay.Store {
    static displayName = "FriendsWidgetMessagesStore";
    initialize() {
        this.waitFor(u.A, m.A, o.A, c.Ay, d.A, _.default, E.A), C();
    }
    getRows(e) {
        return [I.values(e), I.version];
    }
    getChannel(e) {
        return I.get(e);
    }
}
let b = (e) => (0, p.v$)(e, "FriendsWidgetMessagesStore"),
    D = new O(
        a.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: b(function (e) {
                      return e.tab === f.x.MESSAGES && N(e.targetId);
                  }),
                  CHANNEL_SELECT: b(function (e) {
                      let t = e.channelId ?? null,
                          n = T;
                      T = t;
                      let i = !1;
                      null != n && (i = N(n) || i), null != t && (i = N(t) || i);
                      let r = v();
                      return i || r;
                  }),
                  MESSAGE_CREATE: b(function (e) {
                      if (e.optimistic) return !1;
                      let t = N(e.channelId),
                          n = v();
                      return t || n;
                  }),
                  MESSAGE_ACK: b(function (e) {
                      return N(e.channelId);
                  }),
                  TYPING_START: b(function (e) {
                      var t = e.channelId;
                      let n = new Set(m.A.getActiveNowChannelIds({ kind: m.u.Text })),
                          i = !1;
                      for (let e of ((i = N(t) || i), n)) S.has(e) || (i = N(e) || i);
                      for (let e of S) n.has(e) || (i = N(e) || i);
                      return (S = n), i;
                  }),
                  RTC_CONNECTION_STATE: b(function () {
                      return v();
                  }),
                  VOICE_CHANNEL_SELECT: b(function () {
                      return v();
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: b(v),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: b(v),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: b(v),
                  RELATIONSHIP_ADD: b(function (e) {
                      return R(e.relationship.id);
                  }),
                  RELATIONSHIP_REMOVE: b(function (e) {
                      return R(e.relationship.id);
                  }),
                  RELATIONSHIP_UPDATE: b(function (e) {
                      return R(e.relationship.id);
                  }),
                  RELATIONSHIP_PENDING_INCOMING_REMOVED: b(function (e) {
                      let t = !1;
                      for (let e of _.default.getPrivateChannelIds()) {
                          let n = u.A.getChannel(e);
                          null != n && n.isDM() && (t = N(e) || t);
                      }
                      return t;
                  }),
                  OVERLAY_INITIALIZE: b(C),
                  POST_CONNECTION_OPEN: b(C),
                  CACHE_LOADED: b(C),
                  CACHE_LOADED_LAZY: b(C),
                  FRIENDS_LIST_POPOUT_MOUNTED: b(C),
                  LOGOUT: b(function () {
                      let e = I.size() > 0;
                      return I.clear(), (T = null), (S = new Set()), e;
                  }),
              },
    );
