n.d(t, {
    Z: () => I,
    a: () => o
});
var r,
    l,
    a,
    s = n(442837),
    i = n(570140);
let o = {},
    E = {},
    c = {},
    u = !1,
    _ = !1,
    d = !1;
function A(e) {
    let { guild: t } = e.invite;
    return (null == t ? void 0 : t.welcome_screen) != null && ((E[t.id] = t.welcome_screen), !0);
}
function T(e) {
    let { welcomeScreen: t, guildId: n } = e;
    E[n] = null != t ? t : o;
}
class N extends (a = s.ZP.Store) {
    get(e) {
        if (null != e) return E[e];
    }
    isFetching() {
        return _;
    }
    hasError() {
        return d;
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? u : c[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = E[e];
        return null == t || 0 === t.welcome_channels.length;
    }
}
(l = 'WelcomeScreenStore'),
    (r = 'displayName') in N
        ? Object.defineProperty(N, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[r] = l);
let I = new N(i.Z, {
    INVITE_RESOLVE_SUCCESS: A,
    INVITE_ACCEPT_SUCCESS: A,
    WELCOME_SCREEN_SUBMIT_SUCCESS: T,
    WELCOME_SCREEN_UPDATE: T,
    WELCOME_SCREEN_VIEW: function (e) {
        let { guildId: t, isLurking: n } = e;
        (c[t] = !0), n && (u = !0);
    },
    GUILD_STOP_LURKING: function () {
        u = !1;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t }
        } = e;
        c[t] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        (_ = !0), (d = !1);
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
        (_ = !1), (d = !1);
        let { welcomeScreen: t, guildId: n } = e;
        E[n] = null != t ? t : o;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        (_ = !1), (d = !0);
    }
});
