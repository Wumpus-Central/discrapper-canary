n.d(t, {
    FD: () => h,
    Fu: () => A,
    I5: () => O,
    Mn: () => b,
    NI: () => N,
    OU: () => L,
    P6: () => D,
    Rx: () => S,
    S2: () => E,
    V3: () => y,
    W0: () => v,
    W3: () => w,
    Zy: () => m,
    b9: () => R,
    cV: () => T,
    e1: () => I,
    iR: () => x,
    s4: () => C,
    si: () => P,
    ss: () => g,
});
var r = n(544891),
    i = n(433517),
    a = n(780384),
    o = n(570140),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h() {
    o.Z.dispatch({ type: "USER_SETTINGS_ACCOUNT_INIT" });
}
function m() {
    o.Z.dispatch({ type: "USER_SETTINGS_ACCOUNT_CLOSE" });
}
function g(e, t) {
    let n = t ? f.intl.string(f.t["8lQ2rR"]) : f.intl.string(f.t.jf5GGb),
        i = t ? u.ANM.DELETE_ACCOUNT : u.ANM.DISABLE_ACCOUNT,
        a = (t) =>
            r.tn.post({
                url: i,
                body: p({ password: e }, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            });
    return (0, l.Z)(a, {
        modalProps: { title: n },
        checkEnabled: !1,
    }).then(() => {
        c.Z.logoutInternal(), (0, s.uL)(u.Z5c.DEFAULT_LOGGED_OUT);
    });
}
async function E(e) {
    let t = await r.tn.patch({
            url: u.ANM.ME,
            oldFormErrors: !0,
            body: e,
            rejectWithError: !1,
        }),
        n = t.body;
    if (n.token) {
        let t = n.token;
        delete n.token,
            o.Z.dispatch({
                type: "UPDATE_TOKEN",
                token: t,
                userId: n.id,
            }),
            (null == e ? void 0 : e.password) != null &&
                (null == e ? void 0 : e.new_password) != null &&
                o.Z.dispatch({
                    type: "PASSWORD_UPDATED",
                    userId: n.id,
                });
    }
    return (
        o.Z.dispatch({
            type: "CURRENT_USER_UPDATE",
            user: n,
        }),
        t
    );
}
function b(e) {
    let {
        username: t,
        discriminator: n,
        email: r,
        emailToken: a,
        password: s,
        avatar: c,
        avatarDescription: _,
        avatarId: h,
        avatarDecoration: m,
        newPassword: g,
        globalName: b,
        legacyUsername: y,
        nameplate: O,
        primaryGuildId: v,
        displayNameStyles: I,
    } = e;
    return (
        o.Z.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT" }),
        (0, l.Z)(
            (e) => {
                var o, l;
                let f = p(
                    {
                        username: t,
                        email: r,
                        email_token: a,
                        password: s,
                        avatar: c,
                        avatar_description: _,
                        avatar_id: h,
                        discriminator: n,
                        global_name: b,
                        legacy_username: y,
                        new_password: g,
                    },
                    e,
                );
                void 0 !== m && (f.avatar_decoration_sku_id = null != (o = null == m ? void 0 : m.skuId) ? o : null),
                    void 0 !== O && (f.nameplate_sku_id = null != (l = null == O ? void 0 : O.skuId) ? l : null),
                    void 0 !== v && (f.primary_guild_id = v),
                    null != I
                        ? ((f.display_name_font_id = I.fontId),
                          (f.display_name_effect_id = I.effectId),
                          (f.display_name_colors = I.colors))
                        : null === I &&
                          ((f.display_name_font_id = null),
                          (f.display_name_effect_id = null),
                          (f.display_name_colors = null));
                let T = i.K.get(u.JkL),
                    S = (0, d.xJ)();
                null != S && null != T && ((f.push_provider = S), (f.push_token = T));
                let A = i.K.get(u.scU);
                return null != d.mv && null != A && ((f.push_voip_provider = d.mv), (f.push_voip_token = A)), E(f);
            },
            {
                checkEnabled: !1,
                modalProps: { title: f.intl.string(f.t.clQc1f) },
                hooks: {
                    onEarlyClose: () =>
                        o.Z.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {},
                        }),
                },
            },
        ).then(
            (e) => (
                o.Z.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS" }),
                (null != c || null != h) && o.Z.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                e
            ),
            (e) => (
                o.Z.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body,
                }),
                e
            ),
        )
    );
}
function y(e) {
    return r.tn.post({
        url: u.ANM.USER_HARVEST,
        body: { backends: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
function O(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
        avatar: e,
    }),
        null == e ? a.uv.announce(f.intl.string(f.t["f1+oNk"])) : a.uv.announce(f.intl.string(f.t.NstziV));
}
function v(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
        globalName: e,
    });
}
function I(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED",
        legacyUsernameDisabled: e,
    });
}
function T(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
        avatarDecoration: e,
    });
}
function S(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_NAMEPLATE",
        nameplate: e,
    });
}
function A(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT",
        profileEffect: e,
    });
}
function C(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID",
        primaryGuildId: e,
    });
}
function N(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES",
        displayNameStyles: e,
    });
}
function R() {
    o.Z.dispatch({ type: "USER_SETTINGS_CLEAR_ERRORS" });
}
function P() {
    o.Z.dispatch({ type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function w() {
    o.Z.dispatch({ type: "USER_SETTINGS_RESET_ALL_PENDING" });
}
function D() {
    o.Z.dispatch({ type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM" });
}
function x() {
    o.Z.dispatch({ type: "USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function L() {
    o.Z.dispatch({ type: "USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
