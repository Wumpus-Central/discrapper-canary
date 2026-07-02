"use strict";
n.d(t, {
    Ac: () => I,
    B0: () => c,
    CP: () => f,
    N2: () => _,
    Tu: () => E,
    WU: () => T,
    Xf: () => h,
    a4: () => d,
    lw: () => m,
    nZ: () => p,
    rv: () => u,
    us: () => g,
    z5: () => A,
}),
    n(321073),
    n(64700);
var i = n(17928),
    r = n(765178),
    s = n(836602),
    a = n(321191),
    o = n(696451),
    l = n(375708);
function u(e, t) {
    let n = (0, i.bG)([o.Ay], () => (void 0 === t ? null : o.Ay.getMember(t, e.id))),
        { pendingNameplate: r, pendingErrors: a } = (0, i.cf)([s.A], () => ({
            pendingNameplate: s.A.getPendingChanges(t).pendingNameplate,
            pendingErrors: s.A.getErrors(t).nameplate,
        }));
    return {
        userNameplate: e.nameplate,
        guildNameplate: n?.collectibles?.nameplate,
        pendingNameplate: r,
        pendingErrors: a,
    };
}
function c(e, t) {
    let n = (0, i.bG)([o.Ay], () => (void 0 === t || null == e ? null : o.Ay.getMember(t, e.id))),
        {
            pendingDisplayNameStyles: r,
            tryItOutDisplayNameStyles: a,
            pendingErrors: l,
        } = (0, i.cf)([s.A], () => ({
            pendingDisplayNameStyles: s.A.getPendingChanges(t).pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: s.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingErrors: s.A.getErrors(t).displayNameStyles,
        }));
    return {
        userDisplayNameStyles: e?.displayNameStyles,
        guildDisplayNameStyles: n?.displayNameStyles,
        pendingDisplayNameStyles: r,
        tryItOutDisplayNameStyles: a,
        pendingErrors: l,
    };
}
function d(e) {
    let { user: t, guildId: n } = e,
        r = (0, i.bG)([o.Ay], () => (null != n ? o.Ay.getMember(n, t.id) : null));
    return null != n ? r?.avatarDecoration : t.avatarDecoration;
}
function _(e) {
    let { user: t, guildId: n } = e;
    return (0, i.bG)([a.A], () =>
        null == n ? a.A.getUserProfile(t.id)?.profileEffect : a.A.getGuildMemberProfile(t.id, n)?.profileEffect,
    );
}
function h(e) {
    let { user: t, guildId: n } = e;
    return (0, i.bG)([a.A], () =>
        null == n ? a.A.getUserProfile(t.id)?.profileFrame : a.A.getGuildMemberProfile(t.id, n)?.profileFrame,
    );
}
function f(e) {
    return (0, i.cf)([s.A], () => ({
        pendingAvatarDecoration: s.A.getPendingChanges(e).pendingAvatarDecoration,
        errors: s.A.getErrors(e).avatarDecoration,
    }));
}
function p(e) {
    return (0, i.cf)([s.A], () => ({
        pendingProfileEffect: s.A.getPendingChanges(e).pendingProfileEffect,
        errors: s.A.getErrors(e).profileEffect,
    }));
}
function E(e) {
    return (0, i.cf)([s.A], () => ({
        pendingProfileFrame: s.A.getPendingChanges(e).pendingProfileFrame,
        errors: s.A.getErrors(e).profileFrame,
    }));
}
function m(e) {
    let { userValue: t, guildValue: n, pendingValue: i, guildId: r } = e;
    return "" === i || null === i
        ? null != r
            ? t
            : null
        : "" !== i && null != i
          ? i
          : null != r && "" !== n && null != n
            ? n
            : t;
}
function g(e) {
    let { pendingValue: t, userValue: n, guildValue: i, guildId: r } = e;
    if (void 0 !== t) return m({ userValue: n, guildValue: i, pendingValue: t, guildId: r }) ?? null;
}
function A(e, t) {
    return void 0 === e ? null != t : null != e;
}
function I(e, t) {
    return void 0 === e ? null != t : null != e;
}
function T(e) {
    "set" === e
        ? r.O.announce(l.intl.string(l.t.dyU5c5))
        : "remove" === e
          ? r.O.announce(l.intl.string(l.t["f1+oNk"]))
          : r.O.announce(l.intl.string(l.t["/b5nqj"]));
}
