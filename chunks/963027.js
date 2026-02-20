"use strict";
n.d(t, { Ay: () => f, r2: () => h }), n(321073);
var r = n(95701),
    i = n(994500),
    s = n(287809),
    a = n(427262),
    o = n(148719),
    l = n(47167),
    u = n(652215),
    c = n(985018);
function d(e) {
    let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
    if (t)
        if (n) return c.intl.string(c.t["oj+HOs"]);
        else return c.intl.string(c.t.xI3TQQ);
}
function _(e) {
    if (e) return c.intl.string(c.t["4qvAtn"]);
}
function f(e) {
    let t,
        {
            channel: n,
            unread: a = !1,
            mentionCount: f = 0,
            userCount: p,
            embeddedActivitiesCount: h,
            isSubscriptionGated: m,
            needSubscriptionToAccess: E,
        } = e,
        g = (0, l.m1)(n, s.default, i.A),
        A = _((0, o.A)(n));
    switch (n.type) {
        case u.rbe.DM:
            t = a ? c.t.F2MZsu : c.t.fYqXVY;
            break;
        case u.rbe.GROUP_DM:
            t = a ? c.t["fxxUo/"] : c.t.lts3Ld;
            break;
        case u.rbe.GUILD_STORE:
            t = c.t.Bo4msg;
            break;
        case u.rbe.GUILD_DIRECTORY:
            t = c.t["92EAF2"];
            break;
        case u.rbe.GUILD_ANNOUNCEMENT:
            t = f > 0 ? c.t.sDKIpm : a ? c.t.VM7z8f : c.t.WJ3MPt;
            break;
        case u.rbe.GUILD_VOICE:
            let I = [c.intl.formatToPlainString(c.t.bkpadO, { channelName: g })];
            if (
                (f > 0 && I.push(c.intl.formatToPlainString(c.t["3l1GOx"], { mentionCount: f })),
                a && I.push(c.intl.string(c.t.x5zAGZ)),
                null != p)
            ) {
                let e = n.userLimit;
                null != e && e > 0
                    ? I.push(c.intl.formatToPlainString(c.t["6qgTOF"], { userCount: p, limit: e }))
                    : I.push(c.intl.formatToPlainString(c.t.GNIiAA, { userCount: p }));
            }
            null != h && h > 0 && I.push(c.intl.formatToPlainString(c.t.O6PLYd, { activitiesCount: h }));
            let T = d({ isSubscriptionGated: m, needSubscriptionToAccess: E });
            return null != T && I.push(T), null != A && I.push(A), I.join(", ");
        case u.rbe.GUILD_STAGE_VOICE:
            t = c.t.TPPk2T;
            break;
        default:
            t = r.Le.has(n.type)
                ? f > 0
                    ? c.t["ZL7+I6"]
                    : a
                      ? c.t.YlVvmc
                      : c.t["0nZpiF"]
                : f > 0
                  ? c.t.g8ONM0
                  : a
                    ? c.t.smf1CZ
                    : c.t.s0JADj;
    }
    let S = [c.intl.formatToPlainString(t, { channelName: g, mentionCount: f })],
        y = d({ isSubscriptionGated: m, needSubscriptionToAccess: E });
    return null != y && S.push(y), null != A && S.push(A), S.join(", ");
}
function p(e) {
    switch (e) {
        case u.clD.ONLINE:
            return (0, a.MU)(u.clD.ONLINE);
        case u.clD.IDLE:
            return (0, a.MU)(u.clD.IDLE);
        case u.clD.DND:
            return (0, a.MU)(u.clD.DND);
        case u.clD.INVISIBLE:
            return (0, a.MU)(u.clD.INVISIBLE);
        default:
            return "";
    }
}
function h(e) {
    let { channel: t, muted: n, userStatus: r } = e;
    if (!0 === n) return c.intl.string(c.t.C4zCMb);
    let i = [];
    return t.type === u.rbe.DM && null != r && i.push(p(r)), i.length > 0 ? i.join(", ") : void 0;
}
