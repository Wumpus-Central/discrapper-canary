(n.d(t, { A: () => R, Y: () => E }), n(321073));
var i,
    l = n(17928),
    r = n(713402),
    s = n(73153),
    a = n(174768),
    o = n(95701),
    u = n(734057),
    d = n(573163),
    c = n(994500),
    h = n(645959),
    f = n(935208),
    g = n(914853),
    C = n(956753),
    A = n(648427),
    p = n(315240),
    m = n(652215),
    E = (((i = {}).ACTIVE_NOW = "ACTIVE_NOW"), (i.DMS = "DMS"), (i.RECENT_TEXT = "RECENT_TEXT"), i);
let I = new r.J(
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
        let l = p.A.hasActiveNowChannelId({ kind: p.u.Text, channelId: e }),
            r = i && (a.A.getChannelHistory().includes(e) || A.A.getTextChannelHistory().includes(e)),
            s = d.Ay.hasUnread(e) || d.Ay.getMentionCount(e) > 0,
            h = null != t.lastMessageId ? f.default.extractTimestamp(t.lastMessageId) : 0,
            g = (() => {
                var t;
                if (n) return `DM\0${N(h)}\0${e}`;
                if (l) {
                    let n;
                    return (
                        (t = p.A.getScoreForChannelId(e) ?? 0),
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
            sortKey: g,
        };
    })(e);
    return null == t ? I.delete(e) : I.set(e, t);
}
function M() {
    let e = p.A.getActiveNowChannelIds({ kind: p.u.Text }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = T(t) || n;
    for (let e of [...I.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = T(e.channelId) || n);
    return ((_ = t), n);
}
function v() {
    (I.clear(), (_ = new Set()));
    let e = !1;
    for (let t of h.A.getPrivateChannelIds()) e = T(t) || e;
    for (let t of a.A.getChannelHistory()) e = T(t) || e;
    for (let t of A.A.getTextChannelHistory()) e = T(t) || e;
    let t = p.A.getActiveNowChannelIds({ kind: p.u.Text });
    for (let n of ((_ = new Set(t)), t)) e = T(n) || e;
    return e;
}
function y(e) {
    let t = u.A.getDMFromUserId(e);
    return null != t && T(t);
}
class L extends l.Ay.Store {
    static displayName = "FriendsWidgetMessagesStore";
    initialize() {
        (this.waitFor(u.A, p.A, a.A, d.Ay, c.A, h.A, A.A), v());
    }
    getRows(e) {
        return [I.values(e), I.version];
    }
    getChannel(e) {
        return I.get(e);
    }
}
function x(e) {
    return (0, C.v$)(e, "FriendsWidgetMessagesStore");
}
let R = new L(
    s.h,
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
                  let i = !1;
                  (null != n && (i = T(n) || i), null != t && (i = T(t) || i));
                  let l = M();
                  return i || l;
              }),
              MESSAGE_CREATE: x(function (e) {
                  if (e.optimistic) return !1;
                  let t = T(e.channelId),
                      n = M();
                  return t || n;
              }),
              MESSAGE_ACK: x(function (e) {
                  return T(e.channelId);
              }),
              TYPING_START: x(function (e) {
                  var t = e.channelId;
                  let n = new Set(p.A.getActiveNowChannelIds({ kind: p.u.Text })),
                      i = !1;
                  for (let e of ((i = T(t) || i), n)) _.has(e) || (i = T(e) || i);
                  for (let e of _) n.has(e) || (i = T(e) || i);
                  return ((_ = n), i);
              }),
              RTC_CONNECTION_STATE: x(function () {
                  return M();
              }),
              VOICE_CHANNEL_SELECT: x(function () {
                  return M();
              }),
              USER_GUILD_SETTINGS_CHANNEL_UPDATE: x(M),
              USER_GUILD_SETTINGS_GUILD_UPDATE: x(M),
              USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: x(M),
              RELATIONSHIP_ADD: x(function (e) {
                  return y(e.relationship.id);
              }),
              RELATIONSHIP_REMOVE: x(function (e) {
                  return y(e.relationship.id);
              }),
              RELATIONSHIP_UPDATE: x(function (e) {
                  return y(e.relationship.id);
              }),
              RELATIONSHIP_PENDING_INCOMING_REMOVED: x(function (e) {
                  let t = !1;
                  for (let e of h.A.getPrivateChannelIds()) {
                      let n = u.A.getChannel(e);
                      null != n && n.isDM() && (t = T(e) || t);
                  }
                  return t;
              }),
              OVERLAY_INITIALIZE: x(v),
              POST_CONNECTION_OPEN: x(v),
              CACHE_LOADED: x(v),
              CACHE_LOADED_LAZY: x(v),
              FRIENDS_LIST_POPOUT_MOUNTED: x(v),
              LOGOUT: x(function () {
                  let e = I.size() > 0;
                  return (I.clear(), (S = null), (_ = new Set()), e);
              }),
          },
);
