"use strict";
n.d(t, {
    Ac: () => T,
    B0: () => _,
    CP: () => m,
    EI: () => c,
    N2: () => p,
    Tu: () => g,
    WU: () => S,
    Xf: () => h,
    a4: () => f,
    lw: () => A,
    nZ: () => E,
    rv: () => d,
    z5: () => I,
}),
    n(321073);
var r = n(64700),
    i = n(311907),
    s = n(582754),
    a = n(836602),
    o = n(622543),
    l = n(696451),
    u = n(985018);
function c(e) {
    return r.useMemo(() => {
        let t = l.Ay.getMutableAllGuildsAndMembers(),
            n = {};
        for (let r in t) {
            let i = t[r],
                s = i[e]?.avatar;
            null != s && (null == n[s] && (n[s] = []), n[s].push(r));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
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
function _(e, t) {
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
function f(e) {
    let { user: t, guildId: n } = e,
        r = (0, i.bG)([l.Ay], () => (null != n ? l.Ay.getMember(n, t.id) : null));
    return null != n ? r?.avatarDecoration : t.avatarDecoration;
}
function p(e) {
    let { user: t, guildId: n } = e;
    return (0, i.bG)([o.A], () =>
        null == n ? o.A.getUserProfile(t.id)?.profileEffect : o.A.getGuildMemberProfile(t.id, n)?.profileEffect,
    );
}
function h(e) {
    let { user: t, guildId: n } = e;
    return (0, i.bG)([o.A], () =>
        null == n ? o.A.getUserProfile(t.id)?.profileFrame : o.A.getGuildMemberProfile(t.id, n)?.profileFrame,
    );
}
function m(e) {
    return (0, i.cf)([a.A], () => ({
        pendingAvatarDecoration: a.A.getPendingChanges(e).pendingAvatarDecoration,
        errors: a.A.getErrors(e).avatarDecoration,
    }));
}
function E(e) {
    return (0, i.cf)([a.A], () => ({
        pendingProfileEffect: a.A.getPendingChanges(e).pendingProfileEffect,
        errors: a.A.getErrors(e).profileEffect,
    }));
}
function g(e) {
    return (0, i.cf)([a.A], () => ({
        pendingProfileFrame: a.A.getPendingChanges(e).pendingProfileFrame,
        errors: a.A.getErrors(e).profileFrame,
    }));
}
function A(e) {
    let { userValue: t, guildValue: n, pendingValue: r, guildId: i } = e,
        s = "" === r || null === r,
        a = "" !== r && null != r,
        o = "" !== n && null != n;
    return s ? (null != i ? t : null) : a ? r : null != i && o ? n : t;
}
function I(e, t) {
    return void 0 === e ? null != t : null != e;
}
function T(e, t) {
    return void 0 === e ? null != t : null != e;
}
function S(e) {
    "set" === e
        ? s.OR.announce(u.intl.string(u.t.NstziV))
        : "remove" === e
          ? s.OR.announce(u.intl.string(u.t["f1+oNk"]))
          : s.OR.announce(u.intl.string(u.t["/b5nqj"]));
}
