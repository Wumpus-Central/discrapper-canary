t.d(e, {
    Z: () => d,
    a: () => a,
});
var n,
    r,
    l = t(442837),
    i = t(570140);
let a = {},
    s = {},
    o = {},
    g = !1,
    c = !1,
    f = !1;
function v(A) {
    let { guild: e } = A.invite;
    return (null == e ? void 0 : e.welcome_screen) != null && ((s[e.id] = e.welcome_screen), !0);
}
function u(A) {
    let { welcomeScreen: e, guildId: t } = A;
    s[t] = null != e ? e : a;
}
class h extends (r = l.ZP.Store) {
    get(A) {
        if (null != A) return s[A];
    }
    isFetching() {
        return c;
    }
    hasError() {
        return f;
    }
    hasSeen(A) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != A && (e ? g : o[A] || !1);
    }
    isEmpty(A) {
        if (null == A) return !0;
        let e = s[A];
        return null == e || 0 === e.welcome_channels.length;
    }
}
(n = "displayName") in h
    ? Object.defineProperty(h, n, {
          value: "WelcomeScreenStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[n] = "WelcomeScreenStore");
let d = new h(i.Z, {
    INVITE_RESOLVE_SUCCESS: v,
    INVITE_ACCEPT_SUCCESS: v,
    WELCOME_SCREEN_SUBMIT_SUCCESS: u,
    WELCOME_SCREEN_UPDATE: u,
    WELCOME_SCREEN_VIEW: function (A) {
        let { guildId: e, isLurking: t } = A;
        (o[e] = !0), t && (g = !0);
    },
    GUILD_STOP_LURKING: function () {
        g = !1;
    },
    GUILD_DELETE: function (A) {
        let {
            guild: { id: e },
        } = A;
        o[e] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        (c = !0), (f = !1);
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (A) {
        (c = !1), (f = !1);
        let { welcomeScreen: e, guildId: t } = A;
        s[t] = null != e ? e : a;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        (c = !1), (f = !0);
    },
});
