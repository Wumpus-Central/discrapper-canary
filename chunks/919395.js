"use strict";
n.d(t, {
    Ac: () => m,
    B0: () => c,
    CP: () => A,
    N2: () => _,
    Tu: () => I,
    WU: () => g,
    Xf: () => E,
    a4: () => u,
    lw: () => f,
    nZ: () => h,
    rv: () => d,
    us: () => p,
    z5: () => T,
}),
    n(321073),
    n(64700);
var i = n(17928),
    r = n(765178),
    a = n(836602),
    s = n(321191),
    l = n(696451),
    o = n(375708);
function d(e, t) {
    let n = (0, i.bG)([l.Ay], () => (void 0 === t ? null : l.Ay.getMember(t, e.id))),
        { pendingNameplate: r, pendingErrors: s } = (0, i.cf)([a.A], () => ({
            pendingNameplate: a.A.getPendingChanges(t).pendingNameplate,
            pendingErrors: a.A.getErrors(t).nameplate,
        }));
    return {
        userNameplate: e.nameplate,
        guildNameplate: n?.collectibles?.nameplate,
        pendingNameplate: r,
        pendingErrors: s,
    };
}
function c(e, t) {
    let n = (0, i.bG)([l.Ay], () => (void 0 === t || null == e ? null : l.Ay.getMember(t, e.id))),
        {
            pendingDisplayNameStyles: r,
            tryItOutDisplayNameStyles: s,
            pendingErrors: o,
        } = (0, i.cf)([a.A], () => ({
            pendingDisplayNameStyles: a.A.getPendingChanges(t).pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: a.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingErrors: a.A.getErrors(t).displayNameStyles,
        }));
    return {
        userDisplayNameStyles: e?.displayNameStyles,
        guildDisplayNameStyles: n?.displayNameStyles,
        pendingDisplayNameStyles: r,
        tryItOutDisplayNameStyles: s,
        pendingErrors: o,
    };
}
function u(e) {
    let { user: t, guildId: n } = e,
        r = (0, i.bG)([l.Ay], () => (null != n ? l.Ay.getMember(n, t.id) : null));
    return null != n ? r?.avatarDecoration : t.avatarDecoration;
}
function _(e) {
    let { user: t, guildId: n } = e;
    return (0, i.bG)([s.A], () =>
        null == n ? s.A.getUserProfile(t.id)?.profileEffect : s.A.getGuildMemberProfile(t.id, n)?.profileEffect,
    );
}
function E(e) {
    let { user: t, guildId: n } = e;
    return (0, i.bG)([s.A], () =>
        null == n ? s.A.getUserProfile(t.id)?.profileFrame : s.A.getGuildMemberProfile(t.id, n)?.profileFrame,
    );
}
function A(e) {
    return (0, i.cf)([a.A], () => ({
        pendingAvatarDecoration: a.A.getPendingChanges(e).pendingAvatarDecoration,
        errors: a.A.getErrors(e).avatarDecoration,
    }));
}
function h(e) {
    return (0, i.cf)([a.A], () => ({
        pendingProfileEffect: a.A.getPendingChanges(e).pendingProfileEffect,
        errors: a.A.getErrors(e).profileEffect,
    }));
}
function I(e) {
    return (0, i.cf)([a.A], () => ({
        pendingProfileFrame: a.A.getPendingChanges(e).pendingProfileFrame,
        errors: a.A.getErrors(e).profileFrame,
    }));
}
function f(e) {
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
function p(e) {
    let { pendingValue: t, userValue: n, guildValue: i, guildId: r } = e;
    if (void 0 !== t) return f({ userValue: n, guildValue: i, pendingValue: t, guildId: r }) ?? null;
}
function T(e, t) {
    return void 0 === e ? null != t : null != e;
}
function m(e, t) {
    return void 0 === e ? null != t : null != e;
}
function g(e) {
    "set" === e
        ? r.O.announce(o.intl.string(o.t.dyU5c5))
        : "remove" === e
          ? r.O.announce(o.intl.string(o.t["f1+oNk"]))
          : r.O.announce(o.intl.string(o.t["/b5nqj"]));
}
