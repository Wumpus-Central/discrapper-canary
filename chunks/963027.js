n.d(t, { Ay: () => m, r2: () => f }), n(321073);
var i = n(95701),
    l = n(994500),
    r = n(287809),
    o = n(427262),
    a = n(148719),
    s = n(47167),
    u = n(652215),
    c = n(985018);
function d(e) {
    let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
    if (t)
        if (n) return c.intl.string(c.t["oj+HOs"]);
        else return c.intl.string(c.t.xI3TQQ);
}
function m(e) {
    let t,
        {
            channel: n,
            unread: o = !1,
            mentionCount: m = 0,
            userCount: f,
            embeddedActivitiesCount: g,
            isSubscriptionGated: p,
            needSubscriptionToAccess: A,
        } = e,
        _ = (0, s.m1)(n, r.default, l.A),
        v = (function (e) {
            if (e) return c.intl.string(c.t["4qvAtn"]);
        })((0, a.A)(n));
    switch (n.type) {
        case u.rbe.DM:
            t = o ? c.t.F2MZsu : c.t.fYqXVY;
            break;
        case u.rbe.GROUP_DM:
            t = o ? c.t["fxxUo/"] : c.t.lts3Ld;
            break;
        case u.rbe.GUILD_STORE:
            t = c.t.Bo4msg;
            break;
        case u.rbe.GUILD_DIRECTORY:
            t = c.t["92EAF2"];
            break;
        case u.rbe.GUILD_ANNOUNCEMENT:
            t = m > 0 ? c.t.sDKIpm : o ? c.t.VM7z8f : c.t.WJ3MPt;
            break;
        case u.rbe.GUILD_VOICE:
            let S = [c.intl.formatToPlainString(c.t.bkpadO, { channelName: _ })];
            if (
                (m > 0 && S.push(c.intl.formatToPlainString(c.t["3l1GOx"], { mentionCount: m })),
                o && S.push(c.intl.string(c.t.x5zAGZ)),
                null != f)
            ) {
                let e = n.userLimit;
                null != e && e > 0
                    ? S.push(c.intl.formatToPlainString(c.t["6qgTOF"], { userCount: f, limit: e }))
                    : S.push(c.intl.formatToPlainString(c.t.GNIiAA, { userCount: f }));
            }
            null != g && g > 0 && S.push(c.intl.formatToPlainString(c.t.O6PLYd, { activitiesCount: g }));
            let E = d({ isSubscriptionGated: p, needSubscriptionToAccess: A });
            return null != E && S.push(E), null != v && S.push(v), S.join(", ");
        case u.rbe.GUILD_STAGE_VOICE:
            t = c.t.TPPk2T;
            break;
        default:
            t = i.Le.has(n.type)
                ? m > 0
                    ? c.t["ZL7+I6"]
                    : o
                      ? c.t.YlVvmc
                      : c.t["0nZpiF"]
                : m > 0
                  ? c.t.g8ONM0
                  : o
                    ? c.t.smf1CZ
                    : c.t.s0JADj;
    }
    let b = [c.intl.formatToPlainString(t, { channelName: _, mentionCount: m })],
        h = d({ isSubscriptionGated: p, needSubscriptionToAccess: A });
    return null != h && b.push(h), null != v && b.push(v), b.join(", ");
}
function f(e) {
    let { channel: t, muted: n, userStatus: i } = e;
    if (!0 === n) return c.intl.string(c.t.C4zCMb);
    let l = [];
    return (
        t.type === u.rbe.DM &&
            null != i &&
            l.push(
                (function (e) {
                    switch (e) {
                        case u.clD.ONLINE:
                            return (0, o.MU)(u.clD.ONLINE);
                        case u.clD.IDLE:
                            return (0, o.MU)(u.clD.IDLE);
                        case u.clD.DND:
                            return (0, o.MU)(u.clD.DND);
                        case u.clD.INVISIBLE:
                            return (0, o.MU)(u.clD.INVISIBLE);
                        default:
                            return "";
                    }
                })(i),
            ),
        l.length > 0 ? l.join(", ") : void 0
    );
}
