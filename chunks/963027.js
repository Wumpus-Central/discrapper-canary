n.d(t, { Ay: () => d, r2: () => m }), n(321073);
var i = n(95701),
    l = n(994500),
    r = n(287809),
    o = n(427262),
    a = n(47167),
    s = n(652215),
    u = n(985018);
function c(e) {
    let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
    if (t)
        if (n) return u.intl.string(u.t["oj+HOs"]);
        else return u.intl.string(u.t.xI3TQQ);
}
function d(e) {
    let t,
        {
            channel: n,
            unread: o = !1,
            mentionCount: d = 0,
            userCount: m,
            embeddedActivitiesCount: f,
            isSubscriptionGated: g,
            needSubscriptionToAccess: p,
        } = e,
        A = (0, a.m1)(n, r.default, l.A);
    switch (n.type) {
        case s.rbe.DM:
            t = o ? u.t.F2MZsu : u.t.fYqXVY;
            break;
        case s.rbe.GROUP_DM:
            t = o ? u.t["fxxUo/"] : u.t.lts3Ld;
            break;
        case s.rbe.GUILD_STORE:
            t = u.t.Bo4msg;
            break;
        case s.rbe.GUILD_DIRECTORY:
            t = u.t["92EAF2"];
            break;
        case s.rbe.GUILD_ANNOUNCEMENT:
            t = d > 0 ? u.t.sDKIpm : o ? u.t.VM7z8f : u.t.WJ3MPt;
            break;
        case s.rbe.GUILD_VOICE:
            let _ = [u.intl.formatToPlainString(u.t.bkpadO, { channelName: A })];
            if (
                (d > 0 && _.push(u.intl.formatToPlainString(u.t["3l1GOx"], { mentionCount: d })),
                o && _.push(u.intl.string(u.t.x5zAGZ)),
                null != m)
            ) {
                let e = n.userLimit;
                null != e && e > 0
                    ? _.push(u.intl.formatToPlainString(u.t["6qgTOF"], { userCount: m, limit: e }))
                    : _.push(u.intl.formatToPlainString(u.t.GNIiAA, { userCount: m }));
            }
            null != f && f > 0 && _.push(u.intl.formatToPlainString(u.t.O6PLYd, { activitiesCount: f }));
            let v = c({ isSubscriptionGated: g, needSubscriptionToAccess: p });
            return null != v && _.push(v), _.join(", ");
        case s.rbe.GUILD_STAGE_VOICE:
            t = u.t.TPPk2T;
            break;
        default:
            t = i.Le.has(n.type)
                ? d > 0
                    ? u.t["ZL7+I6"]
                    : o
                      ? u.t.YlVvmc
                      : u.t["0nZpiF"]
                : d > 0
                  ? u.t.g8ONM0
                  : o
                    ? u.t.smf1CZ
                    : u.t.s0JADj;
    }
    let S = [u.intl.formatToPlainString(t, { channelName: A, mentionCount: d })],
        E = c({ isSubscriptionGated: g, needSubscriptionToAccess: p });
    return null != E && S.push(E), S.join(", ");
}
function m(e) {
    let { channel: t, muted: n, userStatus: i } = e;
    if (!0 === n) return u.intl.string(u.t.C4zCMb);
    let l = [];
    return (
        t.type === s.rbe.DM &&
            null != i &&
            l.push(
                (function (e) {
                    switch (e) {
                        case s.clD.ONLINE:
                            return (0, o.MU)(s.clD.ONLINE);
                        case s.clD.IDLE:
                            return (0, o.MU)(s.clD.IDLE);
                        case s.clD.DND:
                            return (0, o.MU)(s.clD.DND);
                        case s.clD.INVISIBLE:
                            return (0, o.MU)(s.clD.INVISIBLE);
                        default:
                            return "";
                    }
                })(i),
            ),
        l.length > 0 ? l.join(", ") : void 0
    );
}
