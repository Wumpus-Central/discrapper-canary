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
        n,
        {
            channel: p,
            unread: h = !1,
            mentionCount: m = 0,
            voiceStates: E,
            embeddedActivitiesCount: g,
            isSubscriptionGated: A,
            needSubscriptionToAccess: I,
        } = e,
        T = (0, l.m1)(p, s.default, i.A),
        S = _((0, o.A)(p));
    switch (p.type) {
        case u.rbe.DM:
            t = h ? c.t.F2MZsu : c.t.fYqXVY;
            break;
        case u.rbe.GROUP_DM:
            t = h ? c.t["fxxUo/"] : c.t.lts3Ld;
            break;
        case u.rbe.GUILD_STORE:
            t = c.t.Bo4msg;
            break;
        case u.rbe.GUILD_DIRECTORY:
            t = c.t["92EAF2"];
            break;
        case u.rbe.GUILD_ANNOUNCEMENT:
            t = m > 0 ? c.t.sDKIpm : h ? c.t.VM7z8f : c.t.WJ3MPt;
            break;
        case u.rbe.GUILD_VOICE:
            let y = [c.intl.formatToPlainString(c.t.bkpadO, { channelName: T })];
            m > 0 && y.push(c.intl.formatToPlainString(c.t["3l1GOx"], { mentionCount: m })),
                h && y.push(c.intl.string(c.t.x5zAGZ));
            let v = p.userLimit,
                N = null != v && v > 0;
            if (null != E && E.length > 0) {
                let e = E.length - f,
                    t = E.slice(0, f)
                        .map((e) => {
                            let { nick: t, user: n } = e;
                            return t ?? (0, a.mG)(n);
                        })
                        .join(", ");
                y.push(t),
                    e > 0 && y.push(c.intl.formatToPlainString(c.t.sfgpgr, { overflow: e })),
                    N && y.push(c.intl.formatToPlainString(c.t["6qgTOF"], { userCount: E.length, limit: v }));
            }
            n = y.join(", ");
            break;
        case u.rbe.GUILD_STAGE_VOICE:
            t = c.t.TPPk2T;
            break;
        default:
            t = r.Le.has(p.type)
                ? m > 0
                    ? c.t["ZL7+I6"]
                    : h
                      ? c.t.YlVvmc
                      : c.t["0nZpiF"]
                : m > 0
                  ? c.t.g8ONM0
                  : h
                    ? c.t.smf1CZ
                    : c.t.s0JADj;
    }
    let C = null != n ? [n] : null != t ? [c.intl.formatToPlainString(t, { channelName: T, mentionCount: m })] : [];
    null != g && g > 0 && C.push(c.intl.formatToPlainString(c.t.O6PLYd, { activitiesCount: g }));
    let R = d({ isSubscriptionGated: A, needSubscriptionToAccess: I });
    return null != R && C.push(R), null != S && C.push(S), C.join(", ");
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
