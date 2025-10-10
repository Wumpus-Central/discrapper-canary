n.d(t, {
    Z: () => I,
    a: () => a,
});
var r,
    l,
    i = n(442837),
    s = n(570140);
let a = {},
    o = {},
    u = {},
    c = !1,
    E = !1,
    d = !1;
function _(e) {
    let { guild: t } = e.invite;
    return (null == t ? void 0 : t.welcome_screen) != null && ((o[t.id] = t.welcome_screen), !0);
}
function A(e) {
    let { welcomeScreen: t, guildId: n } = e;
    o[n] = null != t ? t : a;
}
class T extends (l = i.ZP.Store) {
    get(e) {
        if (null != e) return o[e];
    }
    isFetching() {
        return E;
    }
    hasError() {
        return d;
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? c : u[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = o[e];
        return null == t || 0 === t.welcome_channels.length;
    }
}
(r = "displayName") in T
    ? Object.defineProperty(T, r, {
          value: "WelcomeScreenStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (T[r] = "WelcomeScreenStore");
let I = new T(s.Z, {
    INVITE_RESOLVE_SUCCESS: _,
    INVITE_ACCEPT_SUCCESS: _,
    WELCOME_SCREEN_SUBMIT_SUCCESS: A,
    WELCOME_SCREEN_UPDATE: A,
    WELCOME_SCREEN_VIEW: function (e) {
        let { guildId: t, isLurking: n } = e;
        (u[t] = !0), n && (c = !0);
    },
    GUILD_STOP_LURKING: function () {
        c = !1;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        u[t] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        (E = !0), (d = !1);
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
        (E = !1), (d = !1);
        let { welcomeScreen: t, guildId: n } = e;
        o[n] = null != t ? t : a;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        (E = !1), (d = !0);
    },
});
