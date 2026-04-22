"use strict";
a.d(t, { Ay: () => u, r2: () => _ }), a(321073);
var r = a(95701),
    i = a(994500),
    n = a(287809),
    l = a(427262),
    s = a(148719),
    o = a(47167),
    c = a(652215),
    d = a(985018);
function u(e) {
    let t,
        a,
        {
            channel: u,
            unread: _ = !1,
            mentionCount: p = 0,
            voiceStates: f,
            embeddedActivitiesCount: h,
            isSubscriptionGated: m,
            needSubscriptionToAccess: g,
            isIncomingCall: b = !1,
            isOngoingCall: A = !1,
        } = e,
        E = (0, o.m1)(u, n.default, i.A),
        v = (function (e) {
            if (e) return d.intl.string(d.t["4qvAtn"]);
        })((0, s.A)(u));
    switch (u.type) {
        case c.rbe.DM:
            t = _ ? d.t.F2MZsu : d.t.fYqXVY;
            break;
        case c.rbe.GROUP_DM:
            t = _ ? d.t["fxxUo/"] : d.t.lts3Ld;
            break;
        case c.rbe.GUILD_STORE:
            t = d.t.Bo4msg;
            break;
        case c.rbe.GUILD_DIRECTORY:
            t = d.t["92EAF2"];
            break;
        case c.rbe.GUILD_ANNOUNCEMENT:
            t = p > 0 ? d.t.sDKIpm : _ ? d.t.VM7z8f : d.t.WJ3MPt;
            break;
        case c.rbe.GUILD_VOICE:
            let x = [d.intl.formatToPlainString(d.t.bkpadO, { channelName: E })];
            p > 0 && x.push(d.intl.formatToPlainString(d.t["3l1GOx"], { mentionCount: p })),
                _ && x.push(d.intl.string(d.t.x5zAGZ));
            let I = u.userLimit,
                C = null != I && I > 0;
            if (null != f && f.length > 0) {
                let e = f.length - 3,
                    t = f
                        .slice(0, 3)
                        .map((e) => {
                            let { nick: t, user: a } = e;
                            return t ?? (0, l.mG)(a);
                        })
                        .join(", ");
                x.push(t),
                    e > 0 && x.push(d.intl.formatToPlainString(d.t.sfgpgr, { overflow: e })),
                    C && x.push(d.intl.formatToPlainString(d.t["6qgTOF"], { userCount: f.length, limit: I }));
            }
            a = x.join(", ");
            break;
        case c.rbe.GUILD_STAGE_VOICE:
            t = d.t.TPPk2T;
            break;
        default:
            t = r.Le.has(u.type)
                ? p > 0
                    ? d.t["ZL7+I6"]
                    : _
                      ? d.t.YlVvmc
                      : d.t["0nZpiF"]
                : p > 0
                  ? d.t.g8ONM0
                  : _
                    ? d.t.smf1CZ
                    : d.t.s0JADj;
    }
    let T = null != a ? [a] : null != t ? [d.intl.formatToPlainString(t, { channelName: E, mentionCount: p })] : [];
    b ? T.push(d.intl.string(d.t["fk1/bX"])) : A && T.push(d.intl.string(d.t["NGg/fm"])),
        null != h && h > 0 && T.push(d.intl.formatToPlainString(d.t.O6PLYd, { activitiesCount: h }));
    let y = (function (e) {
        let { isSubscriptionGated: t, needSubscriptionToAccess: a } = e;
        if (t)
            if (a) return d.intl.string(d.t["oj+HOs"]);
            else return d.intl.string(d.t.xI3TQQ);
    })({ isSubscriptionGated: m, needSubscriptionToAccess: g });
    return null != y && T.push(y), null != v && T.push(v), T.join(", ");
}
function _(e) {
    let { channel: t, muted: a, userStatus: r, isFavorite: i } = e,
        n = [];
    return (i && n.push(d.intl.string(d.t.cCPjSK)), !0 === a)
        ? (n.push(d.intl.string(d.t.C4zCMb)), n.join(", "))
        : (t.type === c.rbe.DM &&
              null != r &&
              n.push(
                  (function (e) {
                      switch (e) {
                          case c.clD.ONLINE:
                              return (0, l.MU)(c.clD.ONLINE);
                          case c.clD.IDLE:
                              return (0, l.MU)(c.clD.IDLE);
                          case c.clD.DND:
                              return (0, l.MU)(c.clD.DND);
                          case c.clD.INVISIBLE:
                              return (0, l.MU)(c.clD.INVISIBLE);
                          default:
                              return "";
                      }
                  })(r),
              ),
          n.length > 0 ? n.join(", ") : void 0);
}
