n.d(t, {
    FD: () => g,
    I5: () => S,
    Mn: () => y,
    P6: () => D,
    Re: () => I,
    S2: () => b,
    UZ: () => T,
    V3: () => O,
    W3: () => P,
    Zy: () => E,
    b9: () => C,
    cV: () => N,
    si: () => R,
    ss: () => v,
    xn: () => A
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
    p = n(792101),
    _ = n(388032);
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
function m(e) {
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
function g() {
    a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_INIT' });
}
function E() {
    a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_CLOSE' });
}
function v(e, t) {
    let n = t ? _.NW.string(_.t['8lQ2ra']) : _.NW.string(_.t.jf5GGR),
        i = t ? f.ANM.DELETE_ACCOUNT : f.ANM.DISABLE_ACCOUNT,
        o = (t) =>
            r.tn.post({
                url: i,
                body: m({ password: e }, t),
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
    let { username: t, discriminator: n, email: r, emailToken: o, password: s, avatar: d, avatarDescription: h, avatarId: g, avatarDecoration: E, newPassword: v, globalName: y } = e;
    return (
        a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT' }),
        (0, u.Z)(
            (e) => {
                let a = m(
                    {
                        username: t,
                        email: r,
                        email_token: o,
                        password: s,
                        avatar: d,
                        avatar_description: h,
                        avatar_id: g,
                        discriminator: n,
                        global_name: y,
                        new_password: v
                    },
                    e
                );
                null === E && (a.avatar_decoration_id = null), null != E && ((a.avatar_decoration_id = E.id), (a.avatar_decoration_sku_id = E.skuId));
                let l = i.K.get(f.JkL),
                    c = (0, p.xJ)();
                null != c && null != l && ((a.push_provider = c), (a.push_token = l));
                let u = i.K.get(f.scU);
                return null != p.mv && null != u && ((a.push_voip_provider = p.mv), (a.push_voip_token = u)), b(a);
            },
            {
                checkEnabled: !1,
                modalProps: { title: _.NW.string(_.t.clQc1d) },
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
                return l.default.track(f.rMx.USER_AVATAR_UPDATED, { animated: (0, c.xR)(t.avatar) }), a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS' }), e;
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
        null == e ? o.uv.announce(_.NW.string(_.t['f1+oNj'])) : o.uv.announce(_.NW.string(_.t.NstziY));
}
function I(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_V2',
        avatar: e
    }),
        null == e ? o.uv.announce(_.NW.string(_.t['f1+oNj'])) : o.uv.announce(_.NW.string(_.t.NstziY));
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
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
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
function D() {
    a.Z.dispatch({ type: 'USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM' });
}
