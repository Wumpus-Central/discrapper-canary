n.d(t, {
    FD: () => h,
    I5: () => O,
    KP: () => T,
    Mn: () => b,
    OU: () => L,
    P6: () => w,
    S2: () => E,
    V3: () => y,
    W0: () => v,
    W3: () => P,
    Zy: () => m,
    b9: () => C,
    cV: () => S,
    e1: () => I,
    iR: () => D,
    s4: () => N,
    si: () => R,
    ss: () => g,
    xn: () => A
});
var r = n(544891),
    i = n(433517),
    o = n(780384),
    a = n(570140),
    s = n(703656),
    l = n(546796),
    c = n(893776),
    u = n(981631),
    d = n(792101),
    f = n(388032);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h() {
    a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_INIT' });
}
function m() {
    a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_CLOSE' });
}
function g(e, t) {
    let n = t ? f.intl.string(f.t['8lQ2ra']) : f.intl.string(f.t.jf5GGR),
        i = t ? u.ANM.DELETE_ACCOUNT : u.ANM.DISABLE_ACCOUNT,
        o = (t) =>
            r.tn.post({
                url: i,
                body: p({ password: e }, t),
                oldFormErrors: !0,
                rejectWithError: !1
            });
    return (0, l.Z)(o, {
        modalProps: { title: n },
        checkEnabled: !1
    }).then(() => {
        c.Z.logoutInternal(), (0, s.uL)(u.Z5c.DEFAULT_LOGGED_OUT);
    });
}
async function E(e) {
    let t = await r.tn.patch({
            url: u.ANM.ME,
            oldFormErrors: !0,
            body: e,
            rejectWithError: !1
        }),
        n = t.body;
    if (n.token) {
        let t = n.token;
        delete n.token,
            a.Z.dispatch({
                type: 'UPDATE_TOKEN',
                token: t,
                userId: n.id
            }),
            (null == e ? void 0 : e.password) != null &&
                (null == e ? void 0 : e.new_password) != null &&
                a.Z.dispatch({
                    type: 'PASSWORD_UPDATED',
                    userId: n.id
                });
    }
    return (
        a.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: n
        }),
        t
    );
}
function b(e) {
    let { username: t, discriminator: n, email: r, emailToken: o, password: s, avatar: c, avatarDescription: _, avatarId: h, avatarDecoration: m, newPassword: g, globalName: b, legacyUsername: y, nameplate: O, primaryGuildId: v } = e;
    return (
        a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT' }),
        (0, l.Z)(
            (e) => {
                let a = p(
                    {
                        username: t,
                        email: r,
                        email_token: o,
                        password: s,
                        avatar: c,
                        avatar_description: _,
                        avatar_id: h,
                        discriminator: n,
                        global_name: b,
                        legacy_username: y,
                        new_password: g
                    },
                    e
                );
                null === m && (a.avatar_decoration_id = null), null != m && ((a.avatar_decoration_id = m.id), (a.avatar_decoration_sku_id = m.skuId)), null === O && (a.nameplate_id = null), null != O && ((a.nameplate_id = O.id), (a.nameplate_sku_id = O.skuId)), void 0 !== v && (a.primary_guild_id = v);
                let l = i.K.get(u.JkL),
                    f = (0, d.xJ)();
                null != f && null != l && ((a.push_provider = f), (a.push_token = l));
                let I = i.K.get(u.scU);
                return null != d.mv && null != I && ((a.push_voip_provider = d.mv), (a.push_voip_token = I)), E(a);
            },
            {
                checkEnabled: !1,
                modalProps: { title: f.intl.string(f.t.clQc1d) },
                hooks: {
                    onEarlyClose: () =>
                        a.Z.dispatch({
                            type: 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE',
                            errors: {}
                        })
                }
            }
        ).then(
            (e) => (a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS' }), (null != c || null != h) && a.Z.dispatch({ type: 'RECENT_AVATARS_UPDATE' }), e),
            (e) => (
                a.Z.dispatch({
                    type: 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE',
                    errors: e.body
                }),
                e
            )
        )
    );
}
function y(e) {
    return r.tn.post({
        url: u.ANM.USER_HARVEST,
        body: { backends: e },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function O(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR',
        avatar: e
    }),
        null == e ? o.uv.announce(f.intl.string(f.t['f1+oNj'])) : o.uv.announce(f.intl.string(f.t.NstziY));
}
function v(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME',
        globalName: e
    });
}
function I(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED',
        legacyUsernameDisabled: e
    });
}
function S(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function T(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE',
        nameplate: e
    });
}
function A(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function N(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID',
        primaryGuildId: e
    });
}
function C() {
    a.Z.dispatch({ type: 'USER_SETTINGS_CLEAR_ERRORS' });
}
function R() {
    a.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES' });
}
function P() {
    a.Z.dispatch({ type: 'USER_SETTINGS_RESET_ALL_PENDING' });
}
function w() {
    a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM' });
}
function D() {
    a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED' });
}
function L() {
    a.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES' });
}
