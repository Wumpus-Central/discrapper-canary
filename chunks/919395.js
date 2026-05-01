"use strict";
n.d(t, {
    Ac: () => T,
    B0: () => _,
    CP: () => E,
    EI: () => c,
    N2: () => h,
    Tu: () => g,
    WU: () => S,
    Xf: () => p,
    a4: () => f,
    lw: () => A,
    nZ: () => m,
    rv: () => d,
    z5: () => I,
}),
    n(321073);
var i = n(64700),
    r = n(17928),
    s = n(765178),
    a = n(836602),
    o = n(841595),
    l = n(696451),
    u = n(375708);
function c(e) {
    return i.useMemo(() => {
        let t = l.Ay.getMutableAllGuildsAndMembers(),
            n = {};
        for (let i in t) {
            let r = t[i],
                s = r[e]?.avatar;
            null != s && (null == n[s] && (n[s] = []), n[s].push(i));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
function d(e, t) {
    let n = (0, r.bG)([l.Ay], () => (void 0 === t ? null : l.Ay.getMember(t, e.id))),
        { pendingNameplate: i, pendingErrors: s } = (0, r.cf)([a.A], () => ({
            pendingNameplate: a.A.getPendingChanges(t).pendingNameplate,
            pendingErrors: a.A.getErrors(t).nameplate,
        }));
    return {
        userNameplate: e.nameplate,
        guildNameplate: n?.collectibles?.nameplate,
        pendingNameplate: i,
        pendingErrors: s,
    };
}
function _(e, t) {
    let n = (0, r.bG)([l.Ay], () => (void 0 === t || null == e ? null : l.Ay.getMember(t, e.id))),
        {
            pendingDisplayNameStyles: i,
            tryItOutDisplayNameStyles: s,
            pendingErrors: o,
        } = (0, r.cf)([a.A], () => ({
            pendingDisplayNameStyles: a.A.getPendingChanges(t).pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: a.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingErrors: a.A.getErrors(t).displayNameStyles,
        }));
    return {
        userDisplayNameStyles: e?.displayNameStyles,
        guildDisplayNameStyles: n?.displayNameStyles,
        pendingDisplayNameStyles: i,
        tryItOutDisplayNameStyles: s,
        pendingErrors: o,
    };
}
function f(e) {
    let { user: t, guildId: n } = e,
        i = (0, r.bG)([l.Ay], () => (null != n ? l.Ay.getMember(n, t.id) : null));
    return null != n ? i?.avatarDecoration : t.avatarDecoration;
}
function h(e) {
    let { user: t, guildId: n } = e;
    return (0, r.bG)([o.A], () =>
        null == n ? o.A.getUserProfile(t.id)?.profileEffect : o.A.getGuildMemberProfile(t.id, n)?.profileEffect,
    );
}
function p(e) {
    let { user: t, guildId: n } = e;
    return (0, r.bG)([o.A], () =>
        null == n ? o.A.getUserProfile(t.id)?.profileFrame : o.A.getGuildMemberProfile(t.id, n)?.profileFrame,
    );
}
function E(e) {
    return (0, r.cf)([a.A], () => ({
        pendingAvatarDecoration: a.A.getPendingChanges(e).pendingAvatarDecoration,
        errors: a.A.getErrors(e).avatarDecoration,
    }));
}
function m(e) {
    return (0, r.cf)([a.A], () => ({
        pendingProfileEffect: a.A.getPendingChanges(e).pendingProfileEffect,
        errors: a.A.getErrors(e).profileEffect,
    }));
}
function g(e) {
    return (0, r.cf)([a.A], () => ({
        pendingProfileFrame: a.A.getPendingChanges(e).pendingProfileFrame,
        errors: a.A.getErrors(e).profileFrame,
    }));
}
function A(e) {
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
function I(e, t) {
    return void 0 === e ? null != t : null != e;
}
function T(e, t) {
    return void 0 === e ? null != t : null != e;
}
function S(e) {
    "set" === e
        ? s.O.announce(u.intl.string(u.t.NstziV))
        : "remove" === e
          ? s.O.announce(u.intl.string(u.t["f1+oNk"]))
          : s.O.announce(u.intl.string(u.t["/b5nqj"]));
}
