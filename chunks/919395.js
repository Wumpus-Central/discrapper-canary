n.d(t, {
    Ac: () => f,
    B0: () => c,
    CP: () => T,
    EI: () => E,
    N2: () => I,
    Tu: () => N,
    WU: () => C,
    Xf: () => A,
    a4: () => u,
    lw: () => O,
    nZ: () => S,
    rv: () => d,
    z5: () => R,
}),
    n(321073);
var i = n(64700),
    r = n(17928),
    a = n(765178),
    s = n(836602),
    _ = n(841595),
    l = n(696451),
    o = n(985018);
function E(e) {
    return i.useMemo(() => {
        let t = l.Ay.getMutableAllGuildsAndMembers(),
            n = {};
        for (let i in t) {
            let r = t[i],
                a = r[e]?.avatar;
            null != a && (null == n[a] && (n[a] = []), n[a].push(i));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
function d(e, t) {
    let n = (0, r.bG)([l.Ay], () => (void 0 === t ? null : l.Ay.getMember(t, e.id))),
        { pendingNameplate: i, pendingErrors: a } = (0, r.cf)([s.A], () => ({
            pendingNameplate: s.A.getPendingChanges(t).pendingNameplate,
            pendingErrors: s.A.getErrors(t).nameplate,
        }));
    return {
        userNameplate: e.nameplate,
        guildNameplate: n?.collectibles?.nameplate,
        pendingNameplate: i,
        pendingErrors: a,
    };
}
function c(e, t) {
    let n = (0, r.bG)([l.Ay], () => (void 0 === t || null == e ? null : l.Ay.getMember(t, e.id))),
        {
            pendingDisplayNameStyles: i,
            tryItOutDisplayNameStyles: a,
            pendingErrors: _,
        } = (0, r.cf)([s.A], () => ({
            pendingDisplayNameStyles: s.A.getPendingChanges(t).pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: s.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingErrors: s.A.getErrors(t).displayNameStyles,
        }));
    return {
        userDisplayNameStyles: e?.displayNameStyles,
        guildDisplayNameStyles: n?.displayNameStyles,
        pendingDisplayNameStyles: i,
        tryItOutDisplayNameStyles: a,
        pendingErrors: _,
    };
}
function u(e) {
    let { user: t, guildId: n } = e,
        i = (0, r.bG)([l.Ay], () => (null != n ? l.Ay.getMember(n, t.id) : null));
    return null != n ? i?.avatarDecoration : t.avatarDecoration;
}
function I(e) {
    let { user: t, guildId: n } = e;
    return (0, r.bG)([_.A], () =>
        null == n ? _.A.getUserProfile(t.id)?.profileEffect : _.A.getGuildMemberProfile(t.id, n)?.profileEffect,
    );
}
function A(e) {
    let { user: t, guildId: n } = e;
    return (0, r.bG)([_.A], () =>
        null == n ? _.A.getUserProfile(t.id)?.profileFrame : _.A.getGuildMemberProfile(t.id, n)?.profileFrame,
    );
}
function T(e) {
    return (0, r.cf)([s.A], () => ({
        pendingAvatarDecoration: s.A.getPendingChanges(e).pendingAvatarDecoration,
        errors: s.A.getErrors(e).avatarDecoration,
    }));
}
function S(e) {
    return (0, r.cf)([s.A], () => ({
        pendingProfileEffect: s.A.getPendingChanges(e).pendingProfileEffect,
        errors: s.A.getErrors(e).profileEffect,
    }));
}
function N(e) {
    return (0, r.cf)([s.A], () => ({
        pendingProfileFrame: s.A.getPendingChanges(e).pendingProfileFrame,
        errors: s.A.getErrors(e).profileFrame,
    }));
}
function O(e) {
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
function R(e, t) {
    return void 0 === e ? null != t : null != e;
}
function f(e, t) {
    return void 0 === e ? null != t : null != e;
}
function C(e) {
    "set" === e
        ? a.O.announce(o.intl.string(o.t.NstziV))
        : "remove" === e
          ? a.O.announce(o.intl.string(o.t["f1+oNk"]))
          : a.O.announce(o.intl.string(o.t["/b5nqj"]));
}
