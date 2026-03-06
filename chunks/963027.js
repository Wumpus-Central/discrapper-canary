"use strict";
n.d(t, { Ay: () => p, r2: () => m }), n(321073);
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
let f = 3;
function p(e) {
    let t,
        {
            channel: n,
            unread: p = !1,
            mentionCount: h = 0,
            voiceStates: m,
            embeddedActivitiesCount: E,
            isSubscriptionGated: g,
            needSubscriptionToAccess: A,
        } = e,
        I = (0, l.m1)(n, s.default, i.A),
        T = _((0, o.A)(n));
    switch (n.type) {
        case u.rbe.DM:
            t = p ? c.t.F2MZsu : c.t.fYqXVY;
            break;
        case u.rbe.GROUP_DM:
            t = p ? c.t["fxxUo/"] : c.t.lts3Ld;
            break;
        case u.rbe.GUILD_STORE:
            t = c.t.Bo4msg;
            break;
        case u.rbe.GUILD_DIRECTORY:
            t = c.t["92EAF2"];
            break;
        case u.rbe.GUILD_ANNOUNCEMENT:
            t = h > 0 ? c.t.sDKIpm : p ? c.t.VM7z8f : c.t.WJ3MPt;
            break;
        case u.rbe.GUILD_VOICE:
            let S = [c.intl.formatToPlainString(c.t.bkpadO, { channelName: I })];
            h > 0 && S.push(c.intl.formatToPlainString(c.t["3l1GOx"], { mentionCount: h })),
                p && S.push(c.intl.string(c.t.x5zAGZ));
            let y = n.userLimit,
                v = null != y && y > 0;
            if (null != m && m.length > 0) {
                let e = m.length - f,
                    t = m
                        .slice(0, f)
                        .map((e) => {
                            let { nick: t, user: n } = e;
                            return t ?? (0, a.mG)(n);
                        })
                        .join(", ");
                S.push(t),
                    e > 0 && S.push(c.intl.formatToPlainString(c.t.sfgpgr, { overflow: e })),
                    v && S.push(c.intl.formatToPlainString(c.t["6qgTOF"], { userCount: m.length, limit: y }));
            }
            null != E && E > 0 && S.push(c.intl.formatToPlainString(c.t.O6PLYd, { activitiesCount: E }));
            let N = d({ isSubscriptionGated: g, needSubscriptionToAccess: A });
            return null != N && S.push(N), null != T && S.push(T), S.join(", ");
        case u.rbe.GUILD_STAGE_VOICE:
            t = c.t.TPPk2T;
            break;
        default:
            t = r.Le.has(n.type)
                ? h > 0
                    ? c.t["ZL7+I6"]
                    : p
                      ? c.t.YlVvmc
                      : c.t["0nZpiF"]
                : h > 0
                  ? c.t.g8ONM0
                  : p
                    ? c.t.smf1CZ
                    : c.t.s0JADj;
    }
    let C = [c.intl.formatToPlainString(t, { channelName: I, mentionCount: h })],
        R = d({ isSubscriptionGated: g, needSubscriptionToAccess: A });
    return null != R && C.push(R), null != T && C.push(T), C.join(", ");
}
function h(e) {
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
function m(e) {
    let { channel: t, muted: n, userStatus: r } = e;
    if (!0 === n) return c.intl.string(c.t.C4zCMb);
    let i = [];
    return t.type === u.rbe.DM && null != r && i.push(h(r)), i.length > 0 ? i.join(", ") : void 0;
}
