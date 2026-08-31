n.d(t, { A: () => x, Y: () => I }), n(321073);
var i,
    l = n(17928),
    r = n(713402),
    s = n(228366),
    a = n(174768),
    o = n(95701),
    u = n(734057),
    d = n(573163),
    c = n(994500),
    h = n(645959),
    g = n(935208),
    f = n(914853),
    A = n(956753),
    p = n(648427),
    E = n(315240),
    m = n(652215),
    I = (((i = {}).ACTIVE_NOW = "ACTIVE_NOW"), (i.DMS = "DMS"), (i.RECENT_TEXT = "RECENT_TEXT"), i);
let S = new r.J(
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
    C = null,
    _ = new Set();
function N(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0");
}
function T(e) {
    let t = (function (e) {
        let t = u.A.getChannel(e);
        if (null == t) return null;
        let n = t.isPrivate(),
            i = !n && (0, o.ke)(t.type);
        if (!n && !i) return null;
        if (t.isDM()) {
            let e = t.getRecipientId?.();
            if (
                null != e &&
                c.A.getRelationshipType(e) === m.eA$.PENDING_INCOMING &&
                (c.A.isIgnored(e) || c.A.isSpam(e))
            )
                return null;
        }
        let l = E.A.hasActiveNowChannelId({ kind: E.u.Text, channelId: e }),
            r = i && (a.A.getChannelHistory().includes(e) || p.A.getTextChannelHistory().includes(e)),
            s = d.Ay.hasUnread(e) || d.Ay.getMentionCount(e) > 0,
            h = null != t.lastMessageId ? g.default.extractTimestamp(t.lastMessageId) : 0,
            f = (() => {
                var t;
                if (n) return `DM\0${N(h)}\0${e}`;
                if (l) {
                    let n;
                    return (
                        (t = E.A.getScoreForChannelId(e) ?? 0),
                        (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t)))),
                        `AN\0${String(0x2540be3ff - n).padStart(10, "0")}\0${e}`
                    );
                }
                return `GT\0${s ? "0" : "1"}\0${N(h)}\0${e}`;
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: l,
            isInDmsList: n,
            isInRecentTextList: r,
            hasUnread: s,
            lastActivityAtMs: h,
            sortKey: f,
        };
    })(e);
    return null == t ? S.delete(e) : S.set(e, t);
}
function v() {
    let e = E.A.getActiveNowChannelIds({ kind: E.u.Text }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = T(t) || n;
    for (let e of [...S.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = T(e.channelId) || n);
    return (_ = t), n;
}
function M() {
    S.clear(), (_ = new Set());
    let e = !1;
    for (let t of h.A.getPrivateChannelIds()) e = T(t) || e;
    for (let t of a.A.getChannelHistory()) e = T(t) || e;
    for (let t of p.A.getTextChannelHistory()) e = T(t) || e;
    let t = E.A.getActiveNowChannelIds({ kind: E.u.Text });
    for (let n of ((_ = new Set(t)), t)) e = T(n) || e;
    return e;
}
function y(e) {
    let t = u.A.getDMFromUserId(e);
    return null != t && T(t);
}
class D extends l.Ay.Store {
    static displayName = "FriendsWidgetMessagesStore";
    initialize() {
        this.waitFor(u.A, E.A, a.A, d.Ay, c.A, h.A, p.A), M();
    }
    getRows(e) {
        return [S.values(e), S.version];
    }
    getChannel(e) {
        return S.get(e);
    }
}
function R(e) {
    return (0, A.v$)(e, "FriendsWidgetMessagesStore");
}
let x = new D(
    s.h,
    __OVERLAY__
        ? {}
        : {
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: R(function (e) {
                  return e.tab === f.x.MESSAGES && T(e.targetId);
              }),
              CHANNEL_SELECT: R(function (e) {
                  let t = e.channelId ?? null,
                      n = C;
                  C = t;
                  let i = !1;
                  null != n && (i = T(n) || i), null != t && (i = T(t) || i);
                  let l = v();
                  return i || l;
              }),
              MESSAGE_CREATE: R(function (e) {
                  if (e.optimistic) return !1;
                  let t = T(e.channelId),
                      n = v();
                  return t || n;
              }),
              MESSAGE_ACK: R(function (e) {
                  return T(e.channelId);
              }),
              TYPING_START: R(function (e) {
                  var t = e.channelId;
                  let n = new Set(E.A.getActiveNowChannelIds({ kind: E.u.Text })),
                      i = !1;
                  for (let e of ((i = T(t) || i), n)) _.has(e) || (i = T(e) || i);
                  for (let e of _) n.has(e) || (i = T(e) || i);
                  return (_ = n), i;
              }),
              RTC_CONNECTION_STATE: R(function () {
                  return v();
              }),
              VOICE_CHANNEL_SELECT: R(function () {
                  return v();
              }),
              USER_GUILD_SETTINGS_CHANNEL_UPDATE: R(v),
              USER_GUILD_SETTINGS_GUILD_UPDATE: R(v),
              USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: R(v),
              RELATIONSHIP_ADD: R(function (e) {
                  return y(e.relationship.id);
              }),
              RELATIONSHIP_REMOVE: R(function (e) {
                  return y(e.relationship.id);
              }),
              RELATIONSHIP_UPDATE: R(function (e) {
                  return y(e.relationship.id);
              }),
              RELATIONSHIP_PENDING_INCOMING_REMOVED: R(function (e) {
                  let t = !1;
                  for (let e of h.A.getPrivateChannelIds()) {
                      let n = u.A.getChannel(e);
                      null != n && n.isDM() && (t = T(e) || t);
                  }
                  return t;
              }),
              OVERLAY_INITIALIZE: R(M),
              POST_CONNECTION_OPEN: R(M),
              CACHE_LOADED: R(M),
              CACHE_LOADED_LAZY: R(M),
              FRIENDS_LIST_POPOUT_MOUNTED: R(M),
              LOGOUT: R(function () {
                  let e = S.size() > 0;
                  return S.clear(), (C = null), (_ = new Set()), e;
              }),
          },
);
