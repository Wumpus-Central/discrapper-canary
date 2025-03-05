n.d(t, {
    FD: () => m,
    I5: () => S,
    KP: () => A,
    Mn: () => y,
    P6: () => w,
    Re: () => I,
    S2: () => b,
    UZ: () => T,
    V3: () => O,
    W3: () => D,
    Zy: () => E,
    b9: () => R,
    cV: () => N,
    si: () => P,
    ss: () => v,
    xn: () => C
});
var r = n(544891),
    i = n(433517),
    o = n(780384),
    a = n(570140),
    s = n(703656),
    l = n(626135),
    c = n(768581),
    u = n(546796),
    d = n(893776),
    f = n(981631),
    _ = n(792101),
    p = n(388032);
function h(e, t, n) {
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
function g(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function m() {
    a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_INIT' });
}
function E() {
    a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_CLOSE' });
}
function v(e, t) {
    let n = t ? p.NW.string(p.t['8lQ2ra']) : p.NW.string(p.t.jf5GGR),
        i = t ? f.ANM.DELETE_ACCOUNT : f.ANM.DISABLE_ACCOUNT,
        o = (t) =>
            r.tn.post({
                url: i,
                body: g({ password: e }, t),
                oldFormErrors: !0,
                rejectWithError: !1
            });
    return (0, u.Z)(o, {
        modalProps: { title: n },
        checkEnabled: !1
    }).then(() => {
        d.Z.logoutInternal(), (0, s.uL)(f.Z5c.DEFAULT_LOGGED_OUT);
    });
}
async function b(e) {
    let t = await r.tn.patch({
            url: f.ANM.ME,
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
function y(e) {
    let { username: t, discriminator: n, email: r, emailToken: o, password: s, avatar: d, avatarDescription: h, avatarId: m, avatarDecoration: E, newPassword: v, globalName: y, nameplate: O } = e;
    return (
        a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT' }),
        (0, u.Z)(
            (e) => {
                let a = g(
                    {
                        username: t,
                        email: r,
                        email_token: o,
                        password: s,
                        avatar: d,
                        avatar_description: h,
                        avatar_id: m,
                        discriminator: n,
                        global_name: y,
                        new_password: v
                    },
                    e
                );
                null === E && (a.avatar_decoration_id = null), null != E && ((a.avatar_decoration_id = E.id), (a.avatar_decoration_sku_id = E.skuId)), null === O && (a.nameplate_id = null), null != O && ((a.nameplate_id = O.id), (a.nameplate_sku_id = O.skuId));
                let l = i.K.get(f.JkL),
                    c = (0, _.xJ)();
                null != c && null != l && ((a.push_provider = c), (a.push_token = l));
                let u = i.K.get(f.scU);
                return null != _.mv && null != u && ((a.push_voip_provider = _.mv), (a.push_voip_token = u)), b(a);
            },
            {
                checkEnabled: !1,
                modalProps: { title: p.NW.string(p.t.clQc1d) },
                hooks: {
                    onEarlyClose: () =>
                        a.Z.dispatch({
                            type: 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE',
                            errors: {}
                        })
                }
            }
        ).then(
            (e) => {
                let t = e.body;
                return (
                    l.default.track(f.rMx.USER_AVATAR_UPDATED, {
                        animated: (0, c.xR)(t.avatar),
                        is_guild_profile: !1,
                        recent_avatar_id: null != m ? Number(m) : void 0,
                        is_edited_recent_avatar: null != d && null != m
                    }),
                    a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS' }),
                    (null != d || null != m) && a.Z.dispatch({ type: 'RECENT_AVATARS_UPDATE' }),
                    e
                );
            },
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
function O(e) {
    return r.tn.post({
        url: f.ANM.USER_HARVEST,
        body: { backends: e },
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function S(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR',
        avatar: e
    }),
        null == e ? o.uv.announce(p.NW.string(p.t['f1+oNj'])) : o.uv.announce(p.NW.string(p.t.NstziY));
}
function I(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_V2',
        avatar: e
    }),
        null == e ? o.uv.announce(p.NW.string(p.t['f1+oNj'])) : o.uv.announce(p.NW.string(p.t.NstziY));
}
function T(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME',
        globalName: e
    });
}
function N(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function A(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE',
        nameplate: e
    });
}
function C(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function R() {
    a.Z.dispatch({ type: 'USER_SETTINGS_CLEAR_ERRORS' });
}
function P() {
    a.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES' });
}
function D() {
    a.Z.dispatch({ type: 'USER_SETTINGS_RESET_ALL_PENDING' });
}
function w() {
    a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM' });
}
