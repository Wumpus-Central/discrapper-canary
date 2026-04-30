n.d(t, {
    Ac: () => p,
    B0: () => E,
    CP: () => T,
    EI: () => c,
    N2: () => A,
    Tu: () => S,
    WU: () => m,
    Xf: () => I,
    a4: () => u,
    lw: () => N,
    nZ: () => h,
    rv: () => _,
    z5: () => f,
}),
    n(321073);
var i = n(64700),
    a = n(17928),
    r = n(765178),
    s = n(836602),
    l = n(841595),
    o = n(696451),
    d = n(985018);
function c(e) {
    return i.useMemo(() => {
        let t = o.Ay.getMutableAllGuildsAndMembers(),
            n = {};
        for (let i in t) {
            let a = t[i],
                r = a[e]?.avatar;
            null != r && (null == n[r] && (n[r] = []), n[r].push(i));
        }
        return null != n ? Object.entries(n).map((e) => e[1][0]) : [];
    }, [e]);
}
function _(e, t) {
    let n = (0, a.bG)([o.Ay], () => (void 0 === t ? null : o.Ay.getMember(t, e.id))),
        { pendingNameplate: i, pendingErrors: r } = (0, a.cf)([s.A], () => ({
            pendingNameplate: s.A.getPendingChanges(t).pendingNameplate,
            pendingErrors: s.A.getErrors(t).nameplate,
        }));
    return {
        userNameplate: e.nameplate,
        guildNameplate: n?.collectibles?.nameplate,
        pendingNameplate: i,
        pendingErrors: r,
    };
}
function E(e, t) {
    let n = (0, a.bG)([o.Ay], () => (void 0 === t || null == e ? null : o.Ay.getMember(t, e.id))),
        {
            pendingDisplayNameStyles: i,
            tryItOutDisplayNameStyles: r,
            pendingErrors: l,
        } = (0, a.cf)([s.A], () => ({
            pendingDisplayNameStyles: s.A.getPendingChanges(t).pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: s.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingErrors: s.A.getErrors(t).displayNameStyles,
        }));
    return {
        userDisplayNameStyles: e?.displayNameStyles,
        guildDisplayNameStyles: n?.displayNameStyles,
        pendingDisplayNameStyles: i,
        tryItOutDisplayNameStyles: r,
        pendingErrors: l,
    };
}
function u(e) {
    let { user: t, guildId: n } = e,
        i = (0, a.bG)([o.Ay], () => (null != n ? o.Ay.getMember(n, t.id) : null));
    return null != n ? i?.avatarDecoration : t.avatarDecoration;
}
function A(e) {
    let { user: t, guildId: n } = e;
    return (0, a.bG)([l.A], () =>
        null == n ? l.A.getUserProfile(t.id)?.profileEffect : l.A.getGuildMemberProfile(t.id, n)?.profileEffect,
    );
}
function I(e) {
    let { user: t, guildId: n } = e;
    return (0, a.bG)([l.A], () =>
        null == n ? l.A.getUserProfile(t.id)?.profileFrame : l.A.getGuildMemberProfile(t.id, n)?.profileFrame,
    );
}
function T(e) {
    return (0, a.cf)([s.A], () => ({
        pendingAvatarDecoration: s.A.getPendingChanges(e).pendingAvatarDecoration,
        errors: s.A.getErrors(e).avatarDecoration,
    }));
}
function h(e) {
    return (0, a.cf)([s.A], () => ({
        pendingProfileEffect: s.A.getPendingChanges(e).pendingProfileEffect,
        errors: s.A.getErrors(e).profileEffect,
    }));
}
function S(e) {
    return (0, a.cf)([s.A], () => ({
        pendingProfileFrame: s.A.getPendingChanges(e).pendingProfileFrame,
        errors: s.A.getErrors(e).profileFrame,
    }));
}
function N(e) {
    let { userValue: t, guildValue: n, pendingValue: i, guildId: a } = e;
    return "" === i || null === i
        ? null != a
            ? t
            : null
        : "" !== i && null != i
          ? i
          : null != a && "" !== n && null != n
            ? n
            : t;
}
function f(e, t) {
    return void 0 === e ? null != t : null != e;
}
function p(e, t) {
    return void 0 === e ? null != t : null != e;
}
function m(e) {
    "set" === e
        ? r.O.announce(d.intl.string(d.t.NstziV))
        : "remove" === e
          ? r.O.announce(d.intl.string(d.t["f1+oNk"]))
          : r.O.announce(d.intl.string(d.t["/b5nqj"]));
}
