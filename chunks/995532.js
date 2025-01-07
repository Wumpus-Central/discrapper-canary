n.d(t, {
    a: function () {
        return E;
    }
});
var r,
    l,
    i,
    s,
    a = n(442837),
    o = n(570140);
let E = {},
    u = {},
    c = {},
    d = !1,
    _ = !1,
    A = !1;
function T(e) {
    let { guild: t } = e.invite;
    return (null == t ? void 0 : t.welcome_screen) != null && ((u[t.id] = t.welcome_screen), !0);
}
function I(e) {
    let { welcomeScreen: t, guildId: n } = e;
    u[n] = null != t ? t : E;
}
class g extends (s = a.ZP.Store) {
    get(e) {
        if (null != e) return u[e];
    }
    isFetching() {
        return _;
    }
    hasError() {
        return A;
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? d : c[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = u[e];
        return null == t || 0 === t.welcome_channels.length;
    }
}
(i = 'WelcomeScreenStore'),
    (l = 'displayName') in (r = g)
        ? Object.defineProperty(r, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = i),
    (t.Z = new g(o.Z, {
        INVITE_RESOLVE_SUCCESS: T,
        INVITE_ACCEPT_SUCCESS: T,
        WELCOME_SCREEN_SUBMIT_SUCCESS: I,
        WELCOME_SCREEN_UPDATE: I,
        WELCOME_SCREEN_VIEW: function (e) {
            let { guildId: t, isLurking: n } = e;
            (c[t] = !0), n && (d = !0);
        },
        GUILD_STOP_LURKING: function () {
            d = !1;
        },
        GUILD_DELETE: function (e) {
            let {
                guild: { id: t }
            } = e;
            c[t] = !1;
        },
        WELCOME_SCREEN_FETCH_START: function () {
            (_ = !0), (A = !1);
        },
        WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
            (_ = !1), (A = !1);
            let { welcomeScreen: t, guildId: n } = e;
            u[n] = null != t ? t : E;
        },
        WELCOME_SCREEN_FETCH_FAIL: function () {
            (_ = !1), (A = !0);
        }
    }));
