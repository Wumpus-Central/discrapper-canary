n.d(t, {
    A: () => w,
    Y: () => y,
}),
    n(321073),
    n(896048);
var r,
    i,
    l,
    s = n(311907),
    a = n(713402),
    u = n(73153),
    o = n(174768),
    d = n(95701),
    c = n(734057),
    h = n(222823),
    f = n(645959),
    g = n(661191),
    I = n(914853),
    A = n(956753),
    S = n(648427),
    E = n(316541),
    p = n(672396),
    y = (((i = {}).ACTIVE_NOW = "ACTIVE_NOW"), (i.DMS = "DMS"), (i.RECENT_TEXT = "RECENT_TEXT"), i);
let v = new a.J(
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
    _ = null,
    O = new Set();

function m(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0");
}

function M(e) {
    let t = (function (e) {
        let t = c.A.getChannel(e);
        if (null == t) return null;
        let n = t.isPrivate(),
            r = !n && (0, d.ke)(t.type);
        if (!n && !r) return null;
        let i = E.A.hasActiveNowChannelId({
                kind: E.u.Text,
                channelId: e,
            }),
            l = r && (o.A.getChannelHistory().includes(e) || S.A.getTextChannelHistory().includes(e)),
            s = h.Ay.hasUnread(e) || h.Ay.getMentionCount(e) > 0,
            a = null != t.lastMessageId ? g.default.extractTimestamp(t.lastMessageId) : 0,
            u = (() => {
                var t, r;
                if (n) return "DM\0".concat(m(a), "\0").concat(e);
                if (i) {
                    let n;
                    return (
                        (r = null != (t = E.A.getScoreForChannelId(e)) ? t : 0),
                        (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * r)))),
                        "AN\0".concat(String(0x2540be3ff - n).padStart(10, "0"), "\0").concat(e)
                    );
                }
                return "GT\0"
                    .concat(s ? "0" : "1", "\0")
                    .concat(m(a), "\0")
                    .concat(e);
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: i,
            isInDmsList: n,
            isInRecentTextList: l,
            hasUnread: s,
            lastActivityAtMs: a,
            sortKey: u,
        };
    })(e);
    return null == t ? v.delete(e) : v.set(e, t);
}

function T() {
    let e = E.A.getActiveNowChannelIds({
            kind: E.u.Text,
        }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = M(t) || n;
    for (let e of [...v.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = M(e.channelId) || n);
    return (O = t), n;
}

function N() {
    v.clear(), (O = new Set());
    let e = !1;
    for (let t of f.A.getPrivateChannelIds()) e = M(t) || e;
    for (let t of o.A.getChannelHistory()) e = M(t) || e;
    for (let t of S.A.getTextChannelHistory()) e = M(t) || e;
    let t = E.A.getActiveNowChannelIds({
        kind: E.u.Text,
    });
    for (let n of ((O = new Set(t)), t)) e = M(n) || e;
    return e;
}
class C extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(c.A, E.A, o.A, h.Ay, f.A, S.A), N();
    }
    getRows(e) {
        return [v.values(e), v.version];
    }
    getChannel(e) {
        return v.get(e);
    }
}
(l = "displayName") in C
    ? Object.defineProperty(C, l, {
          value: "FriendsWidgetMessagesStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (C[l] = "FriendsWidgetMessagesStore");
let D = (e) => (0, A.R)(e, "FriendsWidgetMessagesStore"),
    w = new C(
        u.h,
        __OVERLAY__ || (!p.OX && !p.ed)
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: D(function (e) {
                      return e.tab === I.x.MESSAGES && M(e.targetId);
                  }),
                  CHANNEL_SELECT: D(function (e) {
                      var t;
                      let n = null != (t = e.channelId) ? t : null,
                          r = _;
                      _ = n;
                      let i = !1;
                      null != r && (i = M(r) || i), null != n && (i = M(n) || i);
                      let l = T();
                      return i || l;
                  }),
                  MESSAGE_CREATE: D(function (e) {
                      if (e.optimistic) return !1;
                      let t = M(e.channelId),
                          n = T();
                      return t || n;
                  }),
                  MESSAGE_ACK: D(function (e) {
                      return M(e.channelId);
                  }),
                  TYPING_START: D(function (e) {
                      var t = e.channelId;
                      let n = new Set(
                              E.A.getActiveNowChannelIds({
                                  kind: E.u.Text,
                              }),
                          ),
                          r = !1;
                      for (let e of ((r = M(t) || r), n)) O.has(e) || (r = M(e) || r);
                      for (let e of O) n.has(e) || (r = M(e) || r);
                      return (O = n), r;
                  }),
                  RTC_CONNECTION_STATE: D(function () {
                      return T();
                  }),
                  VOICE_CHANNEL_SELECT: D(function () {
                      return T();
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: D(T),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: D(T),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: D(T),
                  OVERLAY_INITIALIZE: D(N),
                  POST_CONNECTION_OPEN: D(N),
                  CACHE_LOADED: D(N),
                  CACHE_LOADED_LAZY: D(N),
                  LOGOUT: D(function () {
                      let e = v.size() > 0;
                      return v.clear(), (_ = null), (O = new Set()), e;
                  }),
              },
    );
