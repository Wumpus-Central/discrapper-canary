n.d(t, {
    Ac: () => w,
    B0: () => E,
    CP: () => O,
    Dx: () => I,
    EI: () => m,
    N2: () => y,
    Ru: () => v,
    a4: () => b,
    lw: () => N,
    mZ: () => T,
    nZ: () => A,
    pX: () => C,
    ru: () => S,
    rv: () => g,
    z5: () => R,
}),
    n(321073);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(575593),
    o = n(311907),
    l = n(631670),
    c = n(159001),
    u = n(833336),
    d = n(207803),
    f = n(622543),
    p = n(696451),
    _ = n(752319),
    h = n(287809);

function m(e) {
    return r.useMemo(() => {
        let t = p.Ay.getMutableAllGuildsAndMembers(),
            n = {};
        for (let i in t) {
            var r;
            let a = null == (r = t[i][e]) ? void 0 : r.avatar;
            null != a && (null == n[a] && (n[a] = []), n[a].push(i));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}

function g(e, t) {
    var n;
    let r = (0, o.bG)([p.Ay], () => (void 0 === t ? null : p.Ay.getMember(t, e.id))),
        i = e.nameplate,
        { pendingUserNameplate: a, userErrors: s } = (0, o.cf)([_.A], () => ({
            pendingUserNameplate: _.A.getPendingNameplate(),
            userErrors: _.A.getErrors().nameplate,
        })),
        { pendingGuildNameplate: l, guildErrors: c } = (0, o.cf)([u.A], () => ({
            pendingGuildNameplate: u.A.getPendingNameplate(),
            guildErrors: u.A.getErrors().nameplate,
        }));
    return {
        userNameplate: i,
        guildNameplate: null == r || null == (n = r.collectibles) ? void 0 : n.nameplate,
        pendingNameplate: null != t ? l : a,
        pendingErrors: null != t ? c : s,
    };
}

function E(e, t) {
    let n = (0, o.bG)([p.Ay], () => (void 0 === t || null == e ? null : p.Ay.getMember(t, e.id))),
        { pendingUserDisplayNameStyles: r, userErrors: i } = (0, o.cf)([_.A], () => ({
            pendingUserDisplayNameStyles: _.A.getPendingDisplayNameStyles(),
            userErrors: _.A.getErrors().displayNameStyles,
        })),
        { pendingGuildDisplayNameStyles: a, guildErrors: s } = (0, o.cf)([u.A], () => ({
            pendingGuildDisplayNameStyles: u.A.getPendingDisplayNameStyles(),
            guildErrors: u.A.getErrors().displayNameStyles,
        })),
        l = (0, o.bG)([_.A], () => _.A.getTryItOutDisplayNameStyles());
    return {
        userDisplayNameStyles: null == e ? void 0 : e.displayNameStyles,
        guildDisplayNameStyles: null == n ? void 0 : n.displayNameStyles,
        pendingDisplayNameStyles: null != t ? a : r,
        tryItOutDisplayNameStyles: l,
        pendingErrors: null != t ? s : i,
    };
}

function b(e) {
    let { user: t, guildId: n } = e,
        r = (0, o.bG)([p.Ay], () => (null != n ? p.Ay.getMember(n, t.id) : null));
    return null != n ? (null == r ? void 0 : r.avatarDecoration) : t.avatarDecoration;
}

function y(e) {
    let { user: t, guildId: n } = e;
    return (0, o.bG)([f.A], () => {
        var e, r;
        return null == n
            ? null == (e = f.A.getUserProfile(t.id))
                ? void 0
                : e.profileEffect
            : null == (r = f.A.getGuildMemberProfile(t.id, n))
              ? void 0
              : r.profileEffect;
    });
}

function O(e) {
    let t = (0, o.cf)([_.A], () => ({
            pendingAvatarDecoration: _.A.getPendingAvatarDecoration(),
            errors: _.A.getErrors().avatarDecoration,
        })),
        n = (0, o.cf)([u.A], () => ({
            pendingAvatarDecoration: u.A.getPendingAvatarDecoration(),
            errors: u.A.getErrors().avatarDecoration,
        }));
    return null != e ? n : t;
}

function A(e) {
    let t = (0, o.cf)([_.A], () => ({
            pendingProfileEffect: _.A.getPendingProfileEffect(),
            errors: _.A.getErrors().profileEffect,
        })),
        n = (0, o.cf)([u.A], () => ({
            pendingProfileEffect: u.A.getPendingProfileEffect(),
            errors: u.A.getErrors().profileEffect,
        }));
    return null != e ? n : t;
}

function v(e, t) {
    (0, d.Er)(e === t ? void 0 : e);
}

function S(e, t) {
    (0, l.zq)((null == e ? void 0 : e.imageUri) === t ? void 0 : e);
}

function I(e, t) {
    let n = h.default.getCurrentUser();
    if ((a()(null != n, "user cannot be null"), null == t)) {
        let t = n.avatarDecoration;
        (0, l.WR)({
            type: s.R.AVATAR_DECORATION,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        var r;
        let i = null == (r = p.Ay.getMember(t, n.id)) ? void 0 : r.avatarDecoration;
        (0, c.WR)({
            type: s.R.AVATAR_DECORATION,
            value: (null == e ? void 0 : e.skuId) === (null == i ? void 0 : i.skuId) ? void 0 : e,
        });
    }
}

function T(e, t) {
    var n, r;
    let i = h.default.getCurrentUser();
    if ((a()(null != i, "user cannot be null"), null == t)) {
        let t = null == (n = f.A.getUserProfile(i.id)) ? void 0 : n.profileEffect;
        (0, l.WR)({
            type: s.R.PROFILE_EFFECT,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        let n = null == (r = f.A.getGuildMemberProfile(i.id, t)) ? void 0 : r.profileEffect;
        (0, c.WR)({
            type: s.R.PROFILE_EFFECT,
            value: (null == e ? void 0 : e.skuId) === (null == n ? void 0 : n.skuId) ? void 0 : e,
        });
    }
}

function C(e, t) {
    var n, r, i;
    let o = h.default.getCurrentUser();
    if ((a()(null != o, "user cannot be null"), null == t)) {
        let t = null == (n = o.collectibles) ? void 0 : n.nameplate;
        (0, l.WR)({
            type: s.R.NAMEPLATE,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        let n = null == (i = p.Ay.getMember(t, o.id)) || null == (r = i.collectibles) ? void 0 : r.nameplate;
        (0, c.WR)({
            type: s.R.NAMEPLATE,
            value: (null == e ? void 0 : e.skuId) === (null == n ? void 0 : n.skuId) ? void 0 : e,
        });
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

function w(e, t) {
    return void 0 === e ? null != t : null != e;
}
