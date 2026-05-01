n.d(t, { A: () => O, Y: () => _ }), n(321073);
var i,
    l = n(17928),
    s = n(713402),
    r = n(228366),
    a = n(174768),
    u = n(95701),
    o = n(734057),
    d = n(222823),
    c = n(994500),
    h = n(567761),
    A = n(935208),
    f = n(914853),
    g = n(956753),
    E = n(648427),
    I = n(315240),
    S = n(652215),
    _ = (((i = {}).ACTIVE_NOW = "ACTIVE_NOW"), (i.DMS = "DMS"), (i.RECENT_TEXT = "RECENT_TEXT"), i);
let T = new s.J(
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
    m = new Set();
function p(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0");
}
function N(e) {
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
        let l = I.A.hasActiveNowChannelId({ kind: I.u.Text, channelId: e }),
            s = i && (a.A.getChannelHistory().includes(e) || E.A.getTextChannelHistory().includes(e)),
            r = d.Ay.hasUnread(e) || d.Ay.getMentionCount(e) > 0,
            h = null != t.lastMessageId ? A.default.extractTimestamp(t.lastMessageId) : 0,
            f = (() => {
                var t;
                if (n) return `DM\0${p(h)}\0${e}`;
                if (l) {
                    let n;
                    return (
                        (t = I.A.getScoreForChannelId(e) ?? 0),
                        (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t)))),
                        `AN\0${String(0x2540be3ff - n).padStart(10, "0")}\0${e}`
                    );
                }
                return `GT\0${r ? "0" : "1"}\0${p(h)}\0${e}`;
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
    return null == t ? T.delete(e) : T.set(e, t);
}
function M() {
    let e = I.A.getActiveNowChannelIds({ kind: I.u.Text }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = N(t) || n;
    for (let e of [...T.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = N(e.channelId) || n);
    return (m = t), n;
}
function D() {
    T.clear(), (m = new Set());
    let e = !1;
    for (let t of h.default.getPrivateChannelIds()) e = N(t) || e;
    for (let t of a.A.getChannelHistory()) e = N(t) || e;
    for (let t of E.A.getTextChannelHistory()) e = N(t) || e;
    let t = I.A.getActiveNowChannelIds({ kind: I.u.Text });
    for (let n of ((m = new Set(t)), t)) e = N(n) || e;
    return e;
}
function v(e) {
    let t = o.A.getDMFromUserId(e);
    return null != t && N(t);
}
class y extends l.Ay.Store {
    static displayName = "FriendsWidgetMessagesStore";
    initialize() {
        this.waitFor(o.A, I.A, a.A, d.Ay, c.A, h.default, E.A), D();
    }
    getRows(e) {
        return [T.values(e), T.version];
    }
    getChannel(e) {
        return T.get(e);
    }
}
let U = (e) => (0, g.v$)(e, "FriendsWidgetMessagesStore"),
    O = new y(
        r.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: U(function (e) {
                      return e.tab === f.x.MESSAGES && N(e.targetId);
                  }),
                  CHANNEL_SELECT: U(function (e) {
                      let t = e.channelId ?? null,
                          n = C;
                      C = t;
                      let i = !1;
                      null != n && (i = N(n) || i), null != t && (i = N(t) || i);
                      let l = M();
                      return i || l;
                  }),
                  MESSAGE_CREATE: U(function (e) {
                      if (e.optimistic) return !1;
                      let t = N(e.channelId),
                          n = M();
                      return t || n;
                  }),
                  MESSAGE_ACK: U(function (e) {
                      return N(e.channelId);
                  }),
                  TYPING_START: U(function (e) {
                      var t = e.channelId;
                      let n = new Set(I.A.getActiveNowChannelIds({ kind: I.u.Text })),
                          i = !1;
                      for (let e of ((i = N(t) || i), n)) m.has(e) || (i = N(e) || i);
                      for (let e of m) n.has(e) || (i = N(e) || i);
                      return (m = n), i;
                  }),
                  RTC_CONNECTION_STATE: U(function () {
                      return M();
                  }),
                  VOICE_CHANNEL_SELECT: U(function () {
                      return M();
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: U(M),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: U(M),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: U(M),
                  RELATIONSHIP_ADD: U(function (e) {
                      return v(e.relationship.id);
                  }),
                  RELATIONSHIP_REMOVE: U(function (e) {
                      return v(e.relationship.id);
                  }),
                  RELATIONSHIP_UPDATE: U(function (e) {
                      return v(e.relationship.id);
                  }),
                  RELATIONSHIP_PENDING_INCOMING_REMOVED: U(function (e) {
                      let t = !1;
                      for (let e of h.default.getPrivateChannelIds()) {
                          let n = o.A.getChannel(e);
                          null != n && n.isDM() && (t = N(e) || t);
                      }
                      return t;
                  }),
                  OVERLAY_INITIALIZE: U(D),
                  POST_CONNECTION_OPEN: U(D),
                  CACHE_LOADED: U(D),
                  CACHE_LOADED_LAZY: U(D),
                  FRIENDS_LIST_POPOUT_MOUNTED: U(D),
                  LOGOUT: U(function () {
                      let e = T.size() > 0;
                      return T.clear(), (C = null), (m = new Set()), e;
                  }),
              },
    );
