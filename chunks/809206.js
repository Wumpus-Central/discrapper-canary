n.d(t, {
    FD: () => f,
    I5: () => E,
    Mn: () => m,
    NI: () => I,
    OU: () => R,
    P6: () => C,
    S2: () => h,
    V3: () => g,
    W0: () => b,
    W3: () => A,
    ZB: () => O,
    Zy: () => _,
    b9: () => T,
    e1: () => y,
    iR: () => N,
    s4: () => v,
    si: () => S,
    ss: () => p,
});
var r = n(544891),
    i = n(433517),
    a = n(780384),
    o = n(570140),
    s = n(703656),
    l = n(893776),
    c = n(981631),
    u = n(792101),
    d = n(388032);
function f() {
    o.Z.dispatch({ type: "USER_SETTINGS_ACCOUNT_INIT" });
}
function _() {
    o.Z.dispatch({ type: "USER_SETTINGS_ACCOUNT_CLOSE" });
}
function p(e, t) {
    let n = t ? c.ANM.DELETE_ACCOUNT : c.ANM.DISABLE_ACCOUNT;
    return r.tn
        .post({
            url: n,
            body: { password: e },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
        .then(() => {
            l.Z.logoutInternal(), (0, s.uL)(c.Z5c.DEFAULT_LOGGED_OUT);
        });
}
async function h(e) {
    let t = await r.tn.patch({
            url: c.ANM.ME,
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
function m(e) {
    var t, n;
    let {
        username: r,
        discriminator: a,
        email: s,
        emailToken: l,
        password: d,
        avatar: f,
        avatarDescription: _,
        avatarId: p,
        avatarDecoration: m,
        newPassword: g,
        globalName: E,
        legacyUsername: b,
        nameplate: y,
        primaryGuildId: O,
        displayNameStyles: v,
    } = e;
    o.Z.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT" });
    let I = {
        username: r,
        email: s,
        email_token: l,
        password: d,
        avatar: f,
        avatar_description: _,
        avatar_id: p,
        discriminator: a,
        global_name: E,
        legacy_username: b,
        new_password: g,
    };
    void 0 !== m && (I.avatar_decoration_sku_id = null != (t = null == m ? void 0 : m.skuId) ? t : null),
        void 0 !== y && (I.nameplate_sku_id = null != (n = null == y ? void 0 : y.skuId) ? n : null),
        void 0 !== O && (I.primary_guild_id = O),
        null != v
            ? ((I.display_name_font_id = v.fontId),
              (I.display_name_effect_id = v.effectId),
              (I.display_name_colors = v.colors))
            : null === v &&
              ((I.display_name_font_id = null), (I.display_name_effect_id = null), (I.display_name_colors = null));
    let T = i.K.get(c.JkL),
        S = (0, u.xJ)();
    null != S && null != T && ((I.push_provider = S), (I.push_token = T));
    let A = i.K.get(c.scU);
    return (
        null != u.mv && null != A && ((I.push_voip_provider = u.mv), (I.push_voip_token = A)),
        h(I).then(
            (e) => (
                o.Z.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS" }),
                (null != f || null != p) && o.Z.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
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
function g(e) {
    return r.tn.post({
        url: c.ANM.USER_HARVEST,
        body: { backends: e },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
function E(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
        avatar: e,
    }),
        null == e ? a.uv.announce(d.intl.string(d.t["f1+oNk"])) : a.uv.announce(d.intl.string(d.t.NstziV));
}
function b(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
        globalName: e,
    });
}
function y(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED",
        legacyUsernameDisabled: e,
    });
}
function O(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM",
        item: e,
    });
}
function v(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID",
        primaryGuildId: e,
    });
}
function I(e) {
    o.Z.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES",
        displayNameStyles: e,
    });
}
function T() {
    o.Z.dispatch({ type: "USER_SETTINGS_CLEAR_ERRORS" });
}
function S() {
    o.Z.dispatch({ type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function A() {
    o.Z.dispatch({ type: "USER_SETTINGS_RESET_ALL_PENDING" });
}
function C() {
    o.Z.dispatch({ type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM" });
}
function N() {
    o.Z.dispatch({ type: "USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function R() {
    o.Z.dispatch({ type: "USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
