(n(321073), n(582128));
var i = n(855986),
    r = n(765178),
    a = n(836602),
    s = n(851767),
    l = n(696451),
    o = n(792996);
function d(e) {
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
n.d(
    t,
    {},
    {
        Ac: function (e, t) {
            return void 0 === e ? null != t : null != e;
        },
        B0: function (e, t) {
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
        },
        CP: function (e) {
            return (0, i.cf)([a.A], () => ({
                pendingAvatarDecoration: a.A.getPendingChanges(e).pendingAvatarDecoration,
                errors: a.A.getErrors(e).avatarDecoration,
            }));
        },
        N2: function (e) {
            let { user: t, guildId: n } = e;
            return (0, i.bG)([s.A], () =>
                null == n ? s.A.getUserProfile(t.id)?.profileEffect : s.A.getGuildMemberProfile(t.id, n)?.profileEffect,
            );
        },
        Tu: function (e) {
            return (0, i.cf)([a.A], () => ({
                pendingProfileFrame: a.A.getPendingChanges(e).pendingProfileFrame,
                errors: a.A.getErrors(e).profileFrame,
            }));
        },
        WU: function (e) {
            "set" === e
                ? r.O.announce(o.intl.string(o.t.dyU5c5))
                : "remove" === e
                  ? r.O.announce(o.intl.string(o.t["f1+oNk"]))
                  : r.O.announce(o.intl.string(o.t["/b5nqj"]));
        },
        Xf: function (e) {
            let { user: t, guildId: n } = e;
            return (0, i.bG)([s.A], () =>
                null == n ? s.A.getUserProfile(t.id)?.profileFrame : s.A.getGuildMemberProfile(t.id, n)?.profileFrame,
            );
        },
        a4: function (e) {
            let { user: t, guildId: n } = e,
                r = (0, i.bG)([l.Ay], () => (null != n ? l.Ay.getMember(n, t.id) : null));
            return null != n ? r?.avatarDecoration : t.avatarDecoration;
        },
        lw: d,
        nZ: function (e) {
            return (0, i.cf)([a.A], () => ({
                pendingProfileEffect: a.A.getPendingChanges(e).pendingProfileEffect,
                errors: a.A.getErrors(e).profileEffect,
            }));
        },
        rv: function (e, t) {
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
        },
        us: function (e) {
            let { pendingValue: t, userValue: n, guildValue: i, guildId: r } = e;
            if (void 0 !== t) return d({ userValue: n, guildValue: i, pendingValue: t, guildId: r }) ?? null;
        },
        z5: function (e, t) {
            return void 0 === e ? null != t : null != e;
        },
    },
);
