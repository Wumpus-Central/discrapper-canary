"use strict";
n.d(t, { Ay: () => d, r2: () => f }), n(321073);
var r = n(95701),
    i = n(994500),
    a = n(287809),
    s = n(427262),
    o = n(47167),
    l = n(652215),
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
            unread: s = !1,
            mentionCount: d = 0,
            userCount: _,
            embeddedActivitiesCount: f,
            isSubscriptionGated: p,
            needSubscriptionToAccess: h,
        } = e,
        m = (0, o.m1)(n, a.default, i.A);
    switch (n.type) {
        case l.rbe.DM:
            t = s ? u.t.F2MZsu : u.t.fYqXVY;
            break;
        case l.rbe.GROUP_DM:
            t = s ? u.t["fxxUo/"] : u.t.lts3Ld;
            break;
        case l.rbe.GUILD_STORE:
            t = u.t.Bo4msg;
            break;
        case l.rbe.GUILD_DIRECTORY:
            t = u.t["92EAF2"];
            break;
        case l.rbe.GUILD_ANNOUNCEMENT:
            t = d > 0 ? u.t.sDKIpm : s ? u.t.VM7z8f : u.t.WJ3MPt;
            break;
        case l.rbe.GUILD_VOICE:
            let g = [u.intl.formatToPlainString(u.t.bkpadO, { channelName: m })];
            if (
                (d > 0 && g.push(u.intl.formatToPlainString(u.t["3l1GOx"], { mentionCount: d })),
                s && g.push(u.intl.string(u.t.x5zAGZ)),
                null != _)
            ) {
                let e = n.userLimit;
                null != e && e > 0
                    ? g.push(u.intl.formatToPlainString(u.t["6qgTOF"], { userCount: _, limit: e }))
                    : g.push(u.intl.formatToPlainString(u.t.GNIiAA, { userCount: _ }));
            }
            null != f && f > 0 && g.push(u.intl.formatToPlainString(u.t.O6PLYd, { activitiesCount: f }));
            let E = c({ isSubscriptionGated: p, needSubscriptionToAccess: h });
            return null != E && g.push(E), g.join(", ");
        case l.rbe.GUILD_STAGE_VOICE:
            t = u.t.TPPk2T;
            break;
        default:
            t = r.Le.has(n.type)
                ? d > 0
                    ? u.t["ZL7+I6"]
                    : s
                      ? u.t.YlVvmc
                      : u.t["0nZpiF"]
                : d > 0
                  ? u.t.g8ONM0
                  : s
                    ? u.t.smf1CZ
                    : u.t.s0JADj;
    }
    let A = [u.intl.formatToPlainString(t, { channelName: m, mentionCount: d })],
        I = c({ isSubscriptionGated: p, needSubscriptionToAccess: h });
    return null != I && A.push(I), A.join(", ");
}
function _(e) {
    switch (e) {
        case l.clD.ONLINE:
            return (0, s.MU)(l.clD.ONLINE);
        case l.clD.IDLE:
            return (0, s.MU)(l.clD.IDLE);
        case l.clD.DND:
            return (0, s.MU)(l.clD.DND);
        case l.clD.INVISIBLE:
            return (0, s.MU)(l.clD.INVISIBLE);
        default:
            return "";
    }
}
function f(e) {
    let { channel: t, muted: n, userStatus: r } = e;
    if (!0 === n) return u.intl.string(u.t.C4zCMb);
    let i = [];
    return t.type === l.rbe.DM && null != r && i.push(_(r)), i.length > 0 ? i.join(", ") : void 0;
}
