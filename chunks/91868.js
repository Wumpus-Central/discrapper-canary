n.d(t, {
    A: () => x,
    Y: () => A,
}),
    n(321073),
    n(896048);
var l,
    r,
    i,
    s = n(311907),
    a = n(713402),
    o = n(73153),
    u = n(174768),
    c = n(95701),
    d = n(734057),
    h = n(222823),
    g = n(645959),
    f = n(661191),
    p = n(914853),
    I = n(956753),
    m = n(648427),
    E = n(316541),
    A = (((r = {}).ACTIVE_NOW = "ACTIVE_NOW"), (r.DMS = "DMS"), (r.RECENT_TEXT = "RECENT_TEXT"), r);
let y = new a.J(
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
    v = new Set();

function O(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0");
}

function b(e) {
    let t = (function (e) {
        let t = d.A.getChannel(e);
        if (null == t) return null;
        let n = t.isPrivate(),
            l = !n && (0, c.ke)(t.type);
        if (!n && !l) return null;
        let r = E.A.hasActiveNowChannelId({
                kind: E.u.Text,
                channelId: e,
            }),
            i = l && (u.A.getChannelHistory().includes(e) || m.A.getTextChannelHistory().includes(e)),
            s = h.Ay.hasUnread(e) || h.Ay.getMentionCount(e) > 0,
            a = null != t.lastMessageId ? f.default.extractTimestamp(t.lastMessageId) : 0,
            o = (() => {
                var t, l;
                if (n) return "DM\0".concat(O(a), "\0").concat(e);
                if (r) {
                    let n;
                    return (
                        (l = null != (t = E.A.getScoreForChannelId(e)) ? t : 0),
                        (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * l)))),
                        "AN\0".concat(String(0x2540be3ff - n).padStart(10, "0"), "\0").concat(e)
                    );
                }
                return "GT\0"
                    .concat(s ? "0" : "1", "\0")
                    .concat(O(a), "\0")
                    .concat(e);
            })();
        return {
            id: e,
            channelId: e,
            isInActiveNow: r,
            isInDmsList: n,
            isInRecentTextList: i,
            hasUnread: s,
            lastActivityAtMs: a,
            sortKey: o,
        };
    })(e);
    return null == t ? y.delete(e) : y.set(e, t);
}

function N() {
    let e = E.A.getActiveNowChannelIds({
            kind: E.u.Text,
        }),
        t = new Set(e),
        n = !1;
    for (let t of e) n = b(t) || n;
    for (let e of [...y.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = b(e.channelId) || n);
    return (v = t), n;
}

function T() {
    y.clear(), (v = new Set());
    let e = !1;
    for (let t of g.A.getPrivateChannelIds()) e = b(t) || e;
    for (let t of u.A.getChannelHistory()) e = b(t) || e;
    for (let t of m.A.getTextChannelHistory()) e = b(t) || e;
    let t = E.A.getActiveNowChannelIds({
        kind: E.u.Text,
    });
    for (let n of ((v = new Set(t)), t)) e = b(n) || e;
    return e;
}
class _ extends (l = s.Ay.Store) {
    initialize() {
        this.waitFor(d.A, E.A, u.A, h.Ay, g.A, m.A), T();
    }
    getRows(e) {
        return [y.values(e), y.version];
    }
    getChannel(e) {
        return y.get(e);
    }
}
(i = "displayName") in _
    ? Object.defineProperty(_, i, {
          value: "FriendsWidgetMessagesStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (_[i] = "FriendsWidgetMessagesStore");
let C = (e) => (0, I.v$)(e, "FriendsWidgetMessagesStore"),
    x = new _(
        o.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: C(function (e) {
                      return e.tab === p.x.MESSAGES && b(e.targetId);
                  }),
                  CHANNEL_SELECT: C(function (e) {
                      var t;
                      let n = null != (t = e.channelId) ? t : null,
                          l = S;
                      S = n;
                      let r = !1;
                      null != l && (r = b(l) || r), null != n && (r = b(n) || r);
                      let i = N();
                      return r || i;
                  }),
                  MESSAGE_CREATE: C(function (e) {
                      if (e.optimistic) return !1;
                      let t = b(e.channelId),
                          n = N();
                      return t || n;
                  }),
                  MESSAGE_ACK: C(function (e) {
                      return b(e.channelId);
                  }),
                  TYPING_START: C(function (e) {
                      var t = e.channelId;
                      let n = new Set(
                              E.A.getActiveNowChannelIds({
                                  kind: E.u.Text,
                              }),
                          ),
                          l = !1;
                      for (let e of ((l = b(t) || l), n)) v.has(e) || (l = b(e) || l);
                      for (let e of v) n.has(e) || (l = b(e) || l);
                      return (v = n), l;
                  }),
                  RTC_CONNECTION_STATE: C(function () {
                      return N();
                  }),
                  VOICE_CHANNEL_SELECT: C(function () {
                      return N();
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: C(N),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: C(N),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: C(N),
                  OVERLAY_INITIALIZE: C(T),
                  POST_CONNECTION_OPEN: C(T),
                  CACHE_LOADED: C(T),
                  CACHE_LOADED_LAZY: C(T),
                  FRIENDS_LIST_POPOUT_MOUNTED: C(T),
                  LOGOUT: C(function () {
                      let e = y.size() > 0;
                      return y.clear(), (S = null), (v = new Set()), e;
                  }),
              },
    );
