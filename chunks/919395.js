r.d(n, {
    Ac: () => P,
    B0: () => g,
    CP: () => c,
    N2: () => d,
    Tu: () => y,
    WU: () => v,
    Xf: () => p,
    a4: () => f,
    lw: () => m,
    nZ: () => A,
    rv: () => s,
    us: () => N,
    z5: () => b,
}),
    r(321073),
    r(582128);
var t = r(17928),
    l = r(765178),
    i = r(836602),
    a = r(321191),
    u = r(696451),
    o = r(375708);
function s(e, n) {
    let r = (0, t.bG)([u.Ay], () => (void 0 === n ? null : u.Ay.getMember(n, e.id))),
        { pendingNameplate: l, pendingErrors: a } = (0, t.cf)([i.A], () => ({
            pendingNameplate: i.A.getPendingChanges(n).pendingNameplate,
            pendingErrors: i.A.getErrors(n).nameplate,
        }));
    return {
        userNameplate: e.nameplate,
        guildNameplate: r?.collectibles?.nameplate,
        pendingNameplate: l,
        pendingErrors: a,
    };
}
function g(e, n) {
    let r = (0, t.bG)([u.Ay], () => (void 0 === n || null == e ? null : u.Ay.getMember(n, e.id))),
        {
            pendingDisplayNameStyles: l,
            tryItOutDisplayNameStyles: a,
            pendingErrors: o,
        } = (0, t.cf)([i.A], () => ({
            pendingDisplayNameStyles: i.A.getPendingChanges(n).pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: i.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingErrors: i.A.getErrors(n).displayNameStyles,
        }));
    return {
        userDisplayNameStyles: e?.displayNameStyles,
        guildDisplayNameStyles: r?.displayNameStyles,
        pendingDisplayNameStyles: l,
        tryItOutDisplayNameStyles: a,
        pendingErrors: o,
    };
}
function f(e) {
    let { user: n, guildId: r } = e,
        l = (0, t.bG)([u.Ay], () => (null != r ? u.Ay.getMember(r, n.id) : null));
    return null != r ? l?.avatarDecoration : n.avatarDecoration;
}
function d(e) {
    let { user: n, guildId: r } = e;
    return (0, t.bG)([a.A], () =>
        null == r ? a.A.getUserProfile(n.id)?.profileEffect : a.A.getGuildMemberProfile(n.id, r)?.profileEffect,
    );
}
function p(e) {
    let { user: n, guildId: r } = e;
    return (0, t.bG)([a.A], () =>
        null == r ? a.A.getUserProfile(n.id)?.profileFrame : a.A.getGuildMemberProfile(n.id, r)?.profileFrame,
    );
}
function c(e) {
    return (0, t.cf)([i.A], () => ({
        pendingAvatarDecoration: i.A.getPendingChanges(e).pendingAvatarDecoration,
        errors: i.A.getErrors(e).avatarDecoration,
    }));
}
function A(e) {
    return (0, t.cf)([i.A], () => ({
        pendingProfileEffect: i.A.getPendingChanges(e).pendingProfileEffect,
        errors: i.A.getErrors(e).profileEffect,
    }));
}
function y(e) {
    return (0, t.cf)([i.A], () => ({
        pendingProfileFrame: i.A.getPendingChanges(e).pendingProfileFrame,
        errors: i.A.getErrors(e).profileFrame,
    }));
}
function m(e) {
    let { userValue: n, guildValue: r, pendingValue: t, guildId: l } = e;
    return "" === t || null === t
        ? null != l
            ? n
            : null
        : "" !== t && null != t
          ? t
          : null != l && "" !== r && null != r
            ? r
            : n;
}
function N(e) {
    let { pendingValue: n, userValue: r, guildValue: t, guildId: l } = e;
    if (void 0 !== n) return m({ userValue: r, guildValue: t, pendingValue: n, guildId: l }) ?? null;
}
function b(e, n) {
    return void 0 === e ? null != n : null != e;
}
function P(e, n) {
    return void 0 === e ? null != n : null != e;
}
function v(e) {
    "set" === e
        ? l.O.announce(o.intl.string(o.t.dyU5c5))
        : "remove" === e
          ? l.O.announce(o.intl.string(o.t["f1+oNk"]))
          : l.O.announce(o.intl.string(o.t["/b5nqj"]));
}
