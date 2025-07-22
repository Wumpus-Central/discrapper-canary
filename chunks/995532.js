t.d(e, {
    Z: () => d,
    a: () => a
});
var n,
    r,
    l,
    i = t(442837),
    s = t(570140);
let a = {},
    o = {},
    g = {},
    v = !1,
    f = !1,
    c = !1;
function h(A) {
    let { guild: e } = A.invite;
    return (null == e ? void 0 : e.welcome_screen) != null && ((o[e.id] = e.welcome_screen), !0);
}
function u(A) {
    let { welcomeScreen: e, guildId: t } = A;
    o[t] = null != e ? e : a;
}
class E extends (l = i.ZP.Store) {
    get(A) {
        if (null != A) return o[A];
    }
    isFetching() {
        return f;
    }
    hasError() {
        return c;
    }
    hasSeen(A) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != A && (e ? v : g[A] || !1);
    }
    isEmpty(A) {
        if (null == A) return !0;
        let e = o[A];
        return null == e || 0 === e.welcome_channels.length;
    }
}
((r = 'WelcomeScreenStore'),
    (n = 'displayName') in E
        ? Object.defineProperty(E, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (E[n] = r));
let d = new E(s.Z, {
    INVITE_RESOLVE_SUCCESS: h,
    INVITE_ACCEPT_SUCCESS: h,
    WELCOME_SCREEN_SUBMIT_SUCCESS: u,
    WELCOME_SCREEN_UPDATE: u,
    WELCOME_SCREEN_VIEW: function (A) {
        let { guildId: e, isLurking: t } = A;
        ((g[e] = !0), t && (v = !0));
    },
    GUILD_STOP_LURKING: function () {
        v = !1;
    },
    GUILD_DELETE: function (A) {
        let {
            guild: { id: e }
        } = A;
        g[e] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        ((f = !0), (c = !1));
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (A) {
        ((f = !1), (c = !1));
        let { welcomeScreen: e, guildId: t } = A;
        o[t] = null != e ? e : a;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        ((f = !1), (c = !0));
    }
});
