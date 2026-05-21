n.d(t, { A: () => R, Y: () => S }), n(321073);
var i,
    l = n(17928),
    s = n(713402),
    r = n(228366),
    a = n(174768),
    o = n(95701),
    u = n(734057),
    d = n(222823),
    c = n(994500),
    h = n(567761),
    g = n(935208),
    f = n(914853),
    A = n(956753),
    E = n(648427),
    I = n(315240),
    m = n(652215),
    S = (((i = {}).ACTIVE_NOW = "ACTIVE_NOW"), (i.DMS = "DMS"), (i.RECENT_TEXT = "RECENT_TEXT"), i);
let p = new s.J(
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
        let l = I.A.hasActiveNowChannelId({ kind: I.u.Text, channelId: e }),
            s = i && (a.A.getChannelHistory().includes(e) || E.A.getTextChannelHistory().includes(e)),
            r = d.Ay.hasUnread(e) || d.Ay.getMentionCount(e) > 0,
            h = null != t.lastMessageId ? g.default.extractTimestamp(t.lastMessageId) : 0,
            f = (() => {
                var t;
                if (n) return `DM\0${N(h)}\0${e}`;
                if (l) {
                    let n;
                    return (
                        (t = I.A.getScoreForChannelId(e) ?? 0),
                        (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t)))),
                        `AN\0${String(0x2540be3ff - n).padStart(10, "0")}\0${e}`
                    );
                }
                return `GT\0${r ? "0" : "1"}\0${N(h)}\0${e}`;
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: l,
            isInDmsList: n,
            isInRecentTextList: s,
            hasUnread: r,
            lastActivityAtMs: h,
            sortKey: f,
        };
    })(e);
    return null == t ? p.delete(e) : p.set(e, t);
}
function v() {
    let e = I.A.getActiveNowChannelIds({ kind: I.u.Text }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = T(t) || n;
    for (let e of [...p.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = T(e.channelId) || n);
    return (_ = t), n;
}
function M() {
    p.clear(), (_ = new Set());
    let e = !1;
    for (let t of h.default.getPrivateChannelIds()) e = T(t) || e;
    for (let t of a.A.getChannelHistory()) e = T(t) || e;
    for (let t of E.A.getTextChannelHistory()) e = T(t) || e;
    let t = I.A.getActiveNowChannelIds({ kind: I.u.Text });
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
        this.waitFor(u.A, I.A, a.A, d.Ay, c.A, h.default, E.A), M();
    }
    getRows(e) {
        return [p.values(e), p.version];
    }
    getChannel(e) {
        return p.get(e);
    }
}
let x = (e) => (0, A.v$)(e, "FriendsWidgetMessagesStore"),
    R = new D(
        r.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: x(function (e) {
                      return e.tab === f.x.MESSAGES && T(e.targetId);
                  }),
                  CHANNEL_SELECT: x(function (e) {
                      let t = e.channelId ?? null,
                          n = C;
                      C = t;
                      let i = !1;
                      null != n && (i = T(n) || i), null != t && (i = T(t) || i);
                      let l = v();
                      return i || l;
                  }),
                  MESSAGE_CREATE: x(function (e) {
                      if (e.optimistic) return !1;
                      let t = T(e.channelId),
                          n = v();
                      return t || n;
                  }),
                  MESSAGE_ACK: x(function (e) {
                      return T(e.channelId);
                  }),
                  TYPING_START: x(function (e) {
                      var t = e.channelId;
                      let n = new Set(I.A.getActiveNowChannelIds({ kind: I.u.Text })),
                          i = !1;
                      for (let e of ((i = T(t) || i), n)) _.has(e) || (i = T(e) || i);
                      for (let e of _) n.has(e) || (i = T(e) || i);
                      return (_ = n), i;
                  }),
                  RTC_CONNECTION_STATE: x(function () {
                      return v();
                  }),
                  VOICE_CHANNEL_SELECT: x(function () {
                      return v();
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: x(v),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: x(v),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: x(v),
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
                      for (let e of h.default.getPrivateChannelIds()) {
                          let n = u.A.getChannel(e);
                          null != n && n.isDM() && (t = T(e) || t);
                      }
                      return t;
                  }),
                  OVERLAY_INITIALIZE: x(M),
                  POST_CONNECTION_OPEN: x(M),
                  CACHE_LOADED: x(M),
                  CACHE_LOADED_LAZY: x(M),
                  FRIENDS_LIST_POPOUT_MOUNTED: x(M),
                  LOGOUT: x(function () {
                      let e = p.size() > 0;
                      return p.clear(), (C = null), (_ = new Set()), e;
                  }),
              },
    );
