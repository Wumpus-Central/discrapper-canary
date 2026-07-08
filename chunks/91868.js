"use strict";
n.d(t, { A: () => v, Y: () => T }), n(321073);
var i,
    r = n(17928),
    a = n(713402),
    s = n(228366),
    l = n(174768),
    o = n(95701),
    d = n(734057),
    c = n(568548),
    u = n(994500),
    _ = n(645959),
    E = n(935208),
    A = n(914853),
    h = n(956753),
    I = n(648427),
    f = n(315240),
    p = n(652215),
    T = (((i = {}).ACTIVE_NOW = "ACTIVE_NOW"), (i.DMS = "DMS"), (i.RECENT_TEXT = "RECENT_TEXT"), i);
let m = new a.J(
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
    g = null,
    S = new Set();
function N(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0");
}
function C(e) {
    let t = (function (e) {
        let t = d.A.getChannel(e);
        if (null == t) return null;
        let n = t.isPrivate(),
            i = !n && (0, o.ke)(t.type);
        if (!n && !i) return null;
        if (t.isDM()) {
            let e = t.getRecipientId?.();
            if (
                null != e &&
                u.A.getRelationshipType(e) === p.eA$.PENDING_INCOMING &&
                (u.A.isIgnored(e) || u.A.isSpam(e))
            )
                return null;
        }
        let r = f.A.hasActiveNowChannelId({ kind: f.u.Text, channelId: e }),
            a = i && (l.A.getChannelHistory().includes(e) || I.A.getTextChannelHistory().includes(e)),
            s = c.Ay.hasUnread(e) || c.Ay.getMentionCount(e) > 0,
            _ = null != t.lastMessageId ? E.default.extractTimestamp(t.lastMessageId) : 0,
            A = (() => {
                var t;
                if (n) return `DM\0${N(_)}\0${e}`;
                if (r) {
                    let n;
                    return (
                        (t = f.A.getScoreForChannelId(e) ?? 0),
                        (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t)))),
                        `AN\0${String(0x2540be3ff - n).padStart(10, "0")}\0${e}`
                    );
                }
                return `GT\0${s ? "0" : "1"}\0${N(_)}\0${e}`;
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: r,
            isInDmsList: n,
            isInRecentTextList: a,
            hasUnread: s,
            lastActivityAtMs: _,
            sortKey: A,
        };
    })(e);
    return null == t ? m.delete(e) : m.set(e, t);
}
function R() {
    let e = f.A.getActiveNowChannelIds({ kind: f.u.Text }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = C(t) || n;
    for (let e of [...m.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = C(e.channelId) || n);
    return (S = t), n;
}
function O() {
    m.clear(), (S = new Set());
    let e = !1;
    for (let t of _.A.getPrivateChannelIds()) e = C(t) || e;
    for (let t of l.A.getChannelHistory()) e = C(t) || e;
    for (let t of I.A.getTextChannelHistory()) e = C(t) || e;
    let t = f.A.getActiveNowChannelIds({ kind: f.u.Text });
    for (let n of ((S = new Set(t)), t)) e = C(n) || e;
    return e;
}
function L(e) {
    let t = d.A.getDMFromUserId(e);
    return null != t && C(t);
}
class D extends r.Ay.Store {
    static displayName = "FriendsWidgetMessagesStore";
    initialize() {
        this.waitFor(d.A, f.A, l.A, c.Ay, u.A, _.A, I.A), O();
    }
    getRows(e) {
        return [m.values(e), m.version];
    }
    getChannel(e) {
        return m.get(e);
    }
}
function y(e) {
    return (0, h.v$)(e, "FriendsWidgetMessagesStore");
}
let v = new D(
    s.h,
    __OVERLAY__
        ? {}
        : {
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: y(function (e) {
                  return e.tab === A.x.MESSAGES && C(e.targetId);
              }),
              CHANNEL_SELECT: y(function (e) {
                  let t = e.channelId ?? null,
                      n = g;
                  g = t;
                  let i = !1;
                  null != n && (i = C(n) || i), null != t && (i = C(t) || i);
                  let r = R();
                  return i || r;
              }),
              MESSAGE_CREATE: y(function (e) {
                  if (e.optimistic) return !1;
                  let t = C(e.channelId),
                      n = R();
                  return t || n;
              }),
              MESSAGE_ACK: y(function (e) {
                  return C(e.channelId);
              }),
              TYPING_START: y(function (e) {
                  var t = e.channelId;
                  let n = new Set(f.A.getActiveNowChannelIds({ kind: f.u.Text })),
                      i = !1;
                  for (let e of ((i = C(t) || i), n)) S.has(e) || (i = C(e) || i);
                  for (let e of S) n.has(e) || (i = C(e) || i);
                  return (S = n), i;
              }),
              RTC_CONNECTION_STATE: y(function () {
                  return R();
              }),
              VOICE_CHANNEL_SELECT: y(function () {
                  return R();
              }),
              USER_GUILD_SETTINGS_CHANNEL_UPDATE: y(R),
              USER_GUILD_SETTINGS_GUILD_UPDATE: y(R),
              USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: y(R),
              RELATIONSHIP_ADD: y(function (e) {
                  return L(e.relationship.id);
              }),
              RELATIONSHIP_REMOVE: y(function (e) {
                  return L(e.relationship.id);
              }),
              RELATIONSHIP_UPDATE: y(function (e) {
                  return L(e.relationship.id);
              }),
              RELATIONSHIP_PENDING_INCOMING_REMOVED: y(function (e) {
                  let t = !1;
                  for (let e of _.A.getPrivateChannelIds()) {
                      let n = d.A.getChannel(e);
                      null != n && n.isDM() && (t = C(e) || t);
                  }
                  return t;
              }),
              OVERLAY_INITIALIZE: y(O),
              POST_CONNECTION_OPEN: y(O),
              CACHE_LOADED: y(O),
              CACHE_LOADED_LAZY: y(O),
              FRIENDS_LIST_POPOUT_MOUNTED: y(O),
              LOGOUT: y(function () {
                  let e = m.size() > 0;
                  return m.clear(), (g = null), (S = new Set()), e;
              }),
          },
);
