n.d(t, {
    Ac: () => R,
    B0: () => E,
    CP: () => O,
    Dx: () => S,
    EI: () => m,
    N2: () => b,
    Ru: () => A,
    a4: () => y,
    lw: () => N,
    mZ: () => T,
    nZ: () => v,
    pX: () => C,
    ru: () => I,
    rv: () => g,
    z5: () => w,
}),
    n(321073);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    o = n(575593),
    s = n(311907),
    l = n(631670),
    c = n(159001),
    u = n(833336),
    d = n(207803),
    f = n(836602),
    p = n(622543),
    _ = n(696451),
    h = n(287809);

function m(e) {
    return r.useMemo(() => {
        let t = _.Ay.getMutableAllGuildsAndMembers(),
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
    let r = (0, s.bG)([_.Ay], () => (void 0 === t ? null : _.Ay.getMember(t, e.id))),
        i = e.nameplate,
        { pendingUserNameplate: a, userErrors: o } = (0, s.cf)([f.A], () => ({
            pendingUserNameplate: f.A.getPendingChanges().pendingNameplate,
            userErrors: f.A.getErrors().nameplate,
        })),
        { pendingGuildNameplate: l, guildErrors: c } = (0, s.cf)([u.A], () => ({
            pendingGuildNameplate: u.A.getPendingNameplate(),
            guildErrors: u.A.getErrors().nameplate,
        }));
    return {
        userNameplate: i,
        guildNameplate: null == r || null == (n = r.collectibles) ? void 0 : n.nameplate,
        pendingNameplate: null != t ? l : a,
        pendingErrors: null != t ? c : o,
    };
}

function E(e, t) {
    let n = (0, s.bG)([_.Ay], () => (void 0 === t || null == e ? null : _.Ay.getMember(t, e.id))),
        {
            pendingUserDisplayNameStyles: r,
            tryItOutDisplayNameStyles: i,
            userErrors: a,
        } = (0, s.cf)([f.A], () => ({
            pendingUserDisplayNameStyles: f.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: f.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            userErrors: f.A.getErrors().displayNameStyles,
        })),
        { pendingGuildDisplayNameStyles: o, guildErrors: l } = (0, s.cf)([u.A], () => ({
            pendingGuildDisplayNameStyles: u.A.getPendingDisplayNameStyles(),
            guildErrors: u.A.getErrors().displayNameStyles,
        }));
    return {
        userDisplayNameStyles: null == e ? void 0 : e.displayNameStyles,
        guildDisplayNameStyles: null == n ? void 0 : n.displayNameStyles,
        pendingDisplayNameStyles: null != t ? o : r,
        tryItOutDisplayNameStyles: i,
        pendingErrors: null != t ? l : a,
    };
}

function y(e) {
    let { user: t, guildId: n } = e,
        r = (0, s.bG)([_.Ay], () => (null != n ? _.Ay.getMember(n, t.id) : null));
    return null != n ? (null == r ? void 0 : r.avatarDecoration) : t.avatarDecoration;
}

function b(e) {
    let { user: t, guildId: n } = e;
    return (0, s.bG)([p.A], () => {
        var e, r;
        return null == n
            ? null == (e = p.A.getUserProfile(t.id))
                ? void 0
                : e.profileEffect
            : null == (r = p.A.getGuildMemberProfile(t.id, n))
              ? void 0
              : r.profileEffect;
    });
}

function O(e) {
    let t = (0, s.cf)([f.A], () => ({
            pendingAvatarDecoration: f.A.getPendingChanges().pendingAvatarDecoration,
            errors: f.A.getErrors().avatarDecoration,
        })),
        n = (0, s.cf)([u.A], () => ({
            pendingAvatarDecoration: u.A.getPendingAvatarDecoration(),
            errors: u.A.getErrors().avatarDecoration,
        }));
    return null != e ? n : t;
}

function v(e) {
    let t = (0, s.cf)([f.A], () => ({
            pendingProfileEffect: f.A.getPendingChanges().pendingProfileEffect,
            errors: f.A.getErrors().profileEffect,
        })),
        n = (0, s.cf)([u.A], () => ({
            pendingProfileEffect: u.A.getPendingProfileEffect(),
            errors: u.A.getErrors().profileEffect,
        }));
    return null != e ? n : t;
}

function A(e, t) {
    (0, d.Er)(e === t ? void 0 : e);
}

function I(e, t) {
    (0, l.zq)((null == e ? void 0 : e.imageUri) === t ? void 0 : e);
}

function S(e, t) {
    let n = h.default.getCurrentUser();
    if ((a()(null != n, "user cannot be null"), null == t)) {
        let t = n.avatarDecoration;
        (0, l.WR)({
            type: o.R.AVATAR_DECORATION,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        var r;
        let i = null == (r = _.Ay.getMember(t, n.id)) ? void 0 : r.avatarDecoration;
        (0, c.WR)({
            type: o.R.AVATAR_DECORATION,
            value: (null == e ? void 0 : e.skuId) === (null == i ? void 0 : i.skuId) ? void 0 : e,
        });
    }
}

function T(e, t) {
    var n, r;
    let i = h.default.getCurrentUser();
    if ((a()(null != i, "user cannot be null"), null == t)) {
        let t = null == (n = p.A.getUserProfile(i.id)) ? void 0 : n.profileEffect;
        (0, l.WR)({
            type: o.R.PROFILE_EFFECT,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        let n = null == (r = p.A.getGuildMemberProfile(i.id, t)) ? void 0 : r.profileEffect;
        (0, c.WR)({
            type: o.R.PROFILE_EFFECT,
            value: (null == e ? void 0 : e.skuId) === (null == n ? void 0 : n.skuId) ? void 0 : e,
        });
    }
}

function C(e, t) {
    var n, r, i;
    let s = h.default.getCurrentUser();
    if ((a()(null != s, "user cannot be null"), null == t)) {
        let t = null == (n = s.collectibles) ? void 0 : n.nameplate;
        (0, l.WR)({
            type: o.R.NAMEPLATE,
            value: (null == e ? void 0 : e.skuId) === (null == t ? void 0 : t.skuId) ? void 0 : e,
        });
    } else {
        let n = null == (i = _.Ay.getMember(t, s.id)) || null == (r = i.collectibles) ? void 0 : r.nameplate;
        (0, c.WR)({
            type: o.R.NAMEPLATE,
            value: (null == e ? void 0 : e.skuId) === (null == n ? void 0 : n.skuId) ? void 0 : e,
        });
    }
}

function N(e) {
    let { userValue: t, guildValue: n, pendingValue: r, guildId: i } = e,
        a = "" === r || null === r,
        o = "" !== r && null != r,
        s = "" !== n && null != n;
    return a ? (null != i ? t : null) : o ? r : null != i && s ? n : t;
}

function w(e, t) {
    return void 0 === e ? null != t : null != e;
}

function R(e, t) {
    return void 0 === e ? null != t : null != e;
}
