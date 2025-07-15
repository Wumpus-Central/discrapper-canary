n.d(t, {
    Z: () => g,
    a: () => o
});
var r,
    l,
    i,
    s = n(442837),
    a = n(570140);
let o = {},
    u = {},
    c = {},
    E = !1,
    d = !1,
    _ = !1;
function A(e) {
    let { guild: t } = e.invite;
    return (null == t ? void 0 : t.welcome_screen) != null && ((u[t.id] = t.welcome_screen), !0);
}
function T(e) {
    let { welcomeScreen: t, guildId: n } = e;
    u[n] = null != t ? t : o;
}
class I extends (i = s.ZP.Store) {
    get(e) {
        if (null != e) return u[e];
    }
    isFetching() {
        return d;
    }
    hasError() {
        return _;
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? E : c[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = u[e];
        return null == t || 0 === t.welcome_channels.length;
    }
}
((l = 'WelcomeScreenStore'),
    (r = 'displayName') in I
        ? Object.defineProperty(I, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[r] = l));
let g = new I(a.Z, {
    INVITE_RESOLVE_SUCCESS: A,
    INVITE_ACCEPT_SUCCESS: A,
    WELCOME_SCREEN_SUBMIT_SUCCESS: T,
    WELCOME_SCREEN_UPDATE: T,
    WELCOME_SCREEN_VIEW: function (e) {
        let { guildId: t, isLurking: n } = e;
        ((c[t] = !0), n && (E = !0));
    },
    GUILD_STOP_LURKING: function () {
        E = !1;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t }
        } = e;
        c[t] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        ((d = !0), (_ = !1));
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
        ((d = !1), (_ = !1));
        let { welcomeScreen: t, guildId: n } = e;
        u[n] = null != t ? t : o;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        ((d = !1), (_ = !0));
    }
});
