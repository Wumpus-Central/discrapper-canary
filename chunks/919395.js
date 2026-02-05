"use strict";
n.d(t, {
    Ac: () => O,
    B0: () => g,
    CP: () => I,
    Dx: () => v,
    EI: () => h,
    N2: () => A,
    Ru: () => y,
    a4: () => E,
    lw: () => N,
    mZ: () => C,
    nZ: () => T,
    pX: () => b,
    ru: () => S,
    rv: () => m,
    z5: () => R,
}),
    n(321073);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(575593),
    o = n(311907),
    l = n(631670),
    u = n(159001),
    c = n(207803),
    d = n(836602),
    _ = n(622543),
    f = n(696451),
    p = n(287809);
function h(e) {
    return r.useMemo(() => {
        let t = f.Ay.getMutableAllGuildsAndMembers(),
            n = {};
        for (let r in t) {
            let i = t[r],
                a = i[e]?.avatar;
            null != a && (null == n[a] && (n[a] = []), n[a].push(r));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
function m(e, t) {
    let n = (0, o.bG)([f.Ay], () => (void 0 === t ? null : f.Ay.getMember(t, e.id))),
        { pendingNameplate: r, pendingErrors: i } = (0, o.cf)([d.A], () => ({
            pendingNameplate: d.A.getPendingChanges(t).pendingNameplate,
            pendingErrors: d.A.getErrors(t).nameplate,
        }));
    return {
        userNameplate: e.nameplate,
        guildNameplate: n?.collectibles?.nameplate,
        pendingNameplate: r,
        pendingErrors: i,
    };
}
function g(e, t) {
    let n = (0, o.bG)([f.Ay], () => (void 0 === t || null == e ? null : f.Ay.getMember(t, e.id))),
        {
            pendingDisplayNameStyles: r,
            tryItOutDisplayNameStyles: i,
            pendingErrors: a,
        } = (0, o.cf)([d.A], () => ({
            pendingDisplayNameStyles: d.A.getPendingChanges(t).pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: d.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingErrors: d.A.getErrors(t).displayNameStyles,
        }));
    return {
        userDisplayNameStyles: e?.displayNameStyles,
        guildDisplayNameStyles: n?.displayNameStyles,
        pendingDisplayNameStyles: r,
        tryItOutDisplayNameStyles: i,
        pendingErrors: a,
    };
}
function E(e) {
    let { user: t, guildId: n } = e,
        r = (0, o.bG)([f.Ay], () => (null != n ? f.Ay.getMember(n, t.id) : null));
    return null != n ? r?.avatarDecoration : t.avatarDecoration;
}
function A(e) {
    let { user: t, guildId: n } = e;
    return (0, o.bG)([_.A], () =>
        null == n ? _.A.getUserProfile(t.id)?.profileEffect : _.A.getGuildMemberProfile(t.id, n)?.profileEffect,
    );
}
function I(e) {
    return (0, o.cf)([d.A], () => ({
        pendingAvatarDecoration: d.A.getPendingChanges(e).pendingAvatarDecoration,
        errors: d.A.getErrors(e).avatarDecoration,
    }));
}
function T(e) {
    return (0, o.cf)([d.A], () => ({
        pendingProfileEffect: d.A.getPendingChanges(e).pendingProfileEffect,
        errors: d.A.getErrors(e).profileEffect,
    }));
}
function y(e, t) {
    (0, c.Er)(e === t ? void 0 : e);
}
function S(e, t) {
    (0, l.zq)(e?.imageUri === t ? void 0 : e);
}
function v(e, t) {
    let n = p.default.getCurrentUser();
    if ((a()(null != n, "user cannot be null"), null == t)) {
        let t = n.avatarDecoration;
        (0, l.WR)({ type: s.R.AVATAR_DECORATION, value: e?.skuId === t?.skuId ? void 0 : e });
    } else {
        let r = f.Ay.getMember(t, n.id)?.avatarDecoration;
        (0, u.WR)({ type: s.R.AVATAR_DECORATION, value: e?.skuId === r?.skuId ? void 0 : e });
    }
}
function C(e, t) {
    let n = p.default.getCurrentUser();
    if ((a()(null != n, "user cannot be null"), null == t)) {
        let t = _.A.getUserProfile(n.id)?.profileEffect;
        (0, l.WR)({ type: s.R.PROFILE_EFFECT, value: e?.skuId === t?.skuId ? void 0 : e });
    } else {
        let r = _.A.getGuildMemberProfile(n.id, t)?.profileEffect;
        (0, u.WR)({ type: s.R.PROFILE_EFFECT, value: e?.skuId === r?.skuId ? void 0 : e });
    }
}
function b(e, t) {
    let n = p.default.getCurrentUser();
    if ((a()(null != n, "user cannot be null"), null == t)) {
        let t = n.collectibles?.nameplate;
        (0, l.WR)({ type: s.R.NAMEPLATE, value: e?.skuId === t?.skuId ? void 0 : e });
    } else {
        let r = f.Ay.getMember(t, n.id)?.collectibles?.nameplate;
        (0, u.WR)({ type: s.R.NAMEPLATE, value: e?.skuId === r?.skuId ? void 0 : e });
    }
}
function N(e) {
    let { userValue: t, guildValue: n, pendingValue: r, guildId: i } = e,
        a = "" === r || null === r,
        s = "" !== r && null != r,
        o = "" !== n && null != n;
    return a ? (null != i ? t : null) : s ? r : null != i && o ? n : t;
}
function R(e, t) {
    return void 0 === e ? null != t : null != e;
}
function O(e, t) {
    return void 0 === e ? null != t : null != e;
}
