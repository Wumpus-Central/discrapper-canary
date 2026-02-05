"use strict";
n.d(t, {
    Ac: () => D,
    B0: () => E,
    CP: () => T,
    Dx: () => C,
    EI: () => m,
    N2: () => I,
    Ru: () => S,
    a4: () => A,
    lw: () => R,
    mZ: () => b,
    nZ: () => y,
    pX: () => N,
    ru: () => v,
    rv: () => g,
    z5: () => O,
}),
    n(321073);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(575593),
    o = n(311907),
    l = n(631670),
    u = n(159001),
    c = n(833336),
    d = n(207803),
    _ = n(836602),
    f = n(622543),
    p = n(696451),
    h = n(287809);
function m(e) {
    return r.useMemo(() => {
        let t = p.Ay.getMutableAllGuildsAndMembers(),
            n = {};
        for (let r in t) {
            let i = t[r],
                a = i[e]?.avatar;
            null != a && (null == n[a] && (n[a] = []), n[a].push(r));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
function g(e, t) {
    let n = (0, o.bG)([p.Ay], () => (void 0 === t ? null : p.Ay.getMember(t, e.id))),
        r = e.nameplate,
        { pendingUserNameplate: i, userErrors: a } = (0, o.cf)([_.A], () => ({
            pendingUserNameplate: _.A.getPendingChanges().pendingNameplate,
            userErrors: _.A.getErrors().nameplate,
        })),
        { pendingGuildNameplate: s, guildErrors: l } = (0, o.cf)([c.A], () => ({
            pendingGuildNameplate: c.A.getPendingNameplate(),
            guildErrors: c.A.getErrors().nameplate,
        }));
    return {
        userNameplate: r,
        guildNameplate: n?.collectibles?.nameplate,
        pendingNameplate: null != t ? s : i,
        pendingErrors: null != t ? l : a,
    };
}
function E(e, t) {
    let n = (0, o.bG)([p.Ay], () => (void 0 === t || null == e ? null : p.Ay.getMember(t, e.id))),
        {
            pendingUserDisplayNameStyles: r,
            tryItOutDisplayNameStyles: i,
            userErrors: a,
        } = (0, o.cf)([_.A], () => ({
            pendingUserDisplayNameStyles: _.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: _.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            userErrors: _.A.getErrors().displayNameStyles,
        })),
        { pendingGuildDisplayNameStyles: s, guildErrors: l } = (0, o.cf)([c.A], () => ({
            pendingGuildDisplayNameStyles: c.A.getPendingDisplayNameStyles(),
            guildErrors: c.A.getErrors().displayNameStyles,
        }));
    return {
        userDisplayNameStyles: e?.displayNameStyles,
        guildDisplayNameStyles: n?.displayNameStyles,
        pendingDisplayNameStyles: null != t ? s : r,
        tryItOutDisplayNameStyles: i,
        pendingErrors: null != t ? l : a,
    };
}
function A(e) {
    let { user: t, guildId: n } = e,
        r = (0, o.bG)([p.Ay], () => (null != n ? p.Ay.getMember(n, t.id) : null));
    return null != n ? r?.avatarDecoration : t.avatarDecoration;
}
function I(e) {
    let { user: t, guildId: n } = e;
    return (0, o.bG)([f.A], () =>
        null == n ? f.A.getUserProfile(t.id)?.profileEffect : f.A.getGuildMemberProfile(t.id, n)?.profileEffect,
    );
}
function T(e) {
    let t = (0, o.cf)([_.A], () => ({
            pendingAvatarDecoration: _.A.getPendingChanges().pendingAvatarDecoration,
            errors: _.A.getErrors().avatarDecoration,
        })),
        n = (0, o.cf)([c.A], () => ({
            pendingAvatarDecoration: c.A.getPendingAvatarDecoration(),
            errors: c.A.getErrors().avatarDecoration,
        }));
    return null != e ? n : t;
}
function y(e) {
    let t = (0, o.cf)([_.A], () => ({
            pendingProfileEffect: _.A.getPendingChanges().pendingProfileEffect,
            errors: _.A.getErrors().profileEffect,
        })),
        n = (0, o.cf)([c.A], () => ({
            pendingProfileEffect: c.A.getPendingProfileEffect(),
            errors: c.A.getErrors().profileEffect,
        }));
    return null != e ? n : t;
}
function S(e, t) {
    (0, d.Er)(e === t ? void 0 : e);
}
function v(e, t) {
    (0, l.zq)(e?.imageUri === t ? void 0 : e);
}
function C(e, t) {
    let n = h.default.getCurrentUser();
    if ((a()(null != n, "user cannot be null"), null == t)) {
        let t = n.avatarDecoration;
        (0, l.WR)({ type: s.R.AVATAR_DECORATION, value: e?.skuId === t?.skuId ? void 0 : e });
    } else {
        let r = p.Ay.getMember(t, n.id)?.avatarDecoration;
        (0, u.WR)({ type: s.R.AVATAR_DECORATION, value: e?.skuId === r?.skuId ? void 0 : e });
    }
}
function b(e, t) {
    let n = h.default.getCurrentUser();
    if ((a()(null != n, "user cannot be null"), null == t)) {
        let t = f.A.getUserProfile(n.id)?.profileEffect;
        (0, l.WR)({ type: s.R.PROFILE_EFFECT, value: e?.skuId === t?.skuId ? void 0 : e });
    } else {
        let r = f.A.getGuildMemberProfile(n.id, t)?.profileEffect;
        (0, u.WR)({ type: s.R.PROFILE_EFFECT, value: e?.skuId === r?.skuId ? void 0 : e });
    }
}
function N(e, t) {
    let n = h.default.getCurrentUser();
    if ((a()(null != n, "user cannot be null"), null == t)) {
        let t = n.collectibles?.nameplate;
        (0, l.WR)({ type: s.R.NAMEPLATE, value: e?.skuId === t?.skuId ? void 0 : e });
    } else {
        let r = p.Ay.getMember(t, n.id)?.collectibles?.nameplate;
        (0, u.WR)({ type: s.R.NAMEPLATE, value: e?.skuId === r?.skuId ? void 0 : e });
    }
}
function R(e) {
    let { userValue: t, guildValue: n, pendingValue: r, guildId: i } = e,
        a = "" === r || null === r,
        s = "" !== r && null != r,
        o = "" !== n && null != n;
    return a ? (null != i ? t : null) : s ? r : null != i && o ? n : t;
}
function O(e, t) {
    return void 0 === e ? null != t : null != e;
}
function D(e, t) {
    return void 0 === e ? null != t : null != e;
}
