(t.d(i, {
    Ac: () => b,
    B0: () => d,
    CP: () => p,
    N2: () => c,
    Tu: () => g,
    WU: () => y,
    Xf: () => _,
    a4: () => f,
    lw: () => h,
    nZ: () => m,
    rv: () => s,
    us: () => A,
    z5: () => P,
}),
    t(321073),
    t(582128));
var r = t(17928),
    n = t(765178),
    l = t(836602),
    o = t(321191),
    u = t(696451),
    a = t(660183);
function s(e, i) {
    let t = (0, r.bG)([u.Ay], () => (void 0 === i ? null : u.Ay.getMember(i, e.id))),
        { pendingNameplate: n, pendingErrors: o } = (0, r.cf)([l.A], () => ({
            pendingNameplate: l.A.getPendingChanges(i).pendingNameplate,
            pendingErrors: l.A.getErrors(i).nameplate,
        }));
    return {
        userNameplate: e.nameplate,
        guildNameplate: t?.collectibles?.nameplate,
        pendingNameplate: n,
        pendingErrors: o,
    };
}
function d(e, i) {
    let t = (0, r.bG)([u.Ay], () => (void 0 === i || null == e ? null : u.Ay.getMember(i, e.id))),
        {
            pendingDisplayNameStyles: n,
            tryItOutDisplayNameStyles: o,
            pendingErrors: a,
        } = (0, r.cf)([l.A], () => ({
            pendingDisplayNameStyles: l.A.getPendingChanges(i).pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: l.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingErrors: l.A.getErrors(i).displayNameStyles,
        }));
    return {
        userDisplayNameStyles: e?.displayNameStyles,
        guildDisplayNameStyles: t?.displayNameStyles,
        pendingDisplayNameStyles: n,
        tryItOutDisplayNameStyles: o,
        pendingErrors: a,
    };
}
function f(e) {
    let { user: i, guildId: t } = e,
        n = (0, r.bG)([u.Ay], () => (null != t ? u.Ay.getMember(t, i.id) : null));
    return null != t ? n?.avatarDecoration : i.avatarDecoration;
}
function c(e) {
    let { user: i, guildId: t } = e;
    return (0, r.bG)([o.A], () =>
        null == t ? o.A.getUserProfile(i.id)?.profileEffect : o.A.getGuildMemberProfile(i.id, t)?.profileEffect,
    );
}
function _(e) {
    let { user: i, guildId: t } = e;
    return (0, r.bG)([o.A], () =>
        null == t ? o.A.getUserProfile(i.id)?.profileFrame : o.A.getGuildMemberProfile(i.id, t)?.profileFrame,
    );
}
function p(e) {
    return (0, r.cf)([l.A], () => ({
        pendingAvatarDecoration: l.A.getPendingChanges(e).pendingAvatarDecoration,
        errors: l.A.getErrors(e).avatarDecoration,
    }));
}
function m(e) {
    return (0, r.cf)([l.A], () => ({
        pendingProfileEffect: l.A.getPendingChanges(e).pendingProfileEffect,
        errors: l.A.getErrors(e).profileEffect,
    }));
}
function g(e) {
    return (0, r.cf)([l.A], () => ({
        pendingProfileFrame: l.A.getPendingChanges(e).pendingProfileFrame,
        errors: l.A.getErrors(e).profileFrame,
    }));
}
function h(e) {
    let { userValue: i, guildValue: t, pendingValue: r, guildId: n } = e;
    return "" === r || null === r
        ? null != n
            ? i
            : null
        : "" !== r && null != r
          ? r
          : null != n && "" !== t && null != t
            ? t
            : i;
}
function A(e) {
    let { pendingValue: i, userValue: t, guildValue: r, guildId: n } = e;
    if (void 0 !== i) return h({ userValue: t, guildValue: r, pendingValue: i, guildId: n }) ?? null;
}
function P(e, i) {
    return void 0 === e ? null != i : null != e;
}
function b(e, i) {
    return void 0 === e ? null != i : null != e;
}
function y(e) {
    "set" === e
        ? n.O.announce(a.intl.string(a.t.dyU5c5))
        : "remove" === e
          ? n.O.announce(a.intl.string(a.t["f1+oNk"]))
          : n.O.announce(a.intl.string(a.t["/b5nqj"]));
}
