"use strict";
n.d(t, { Ay: () => d, r2: () => _ }), n(321073);
var i = n(95701),
    r = n(994500),
    s = n(287809),
    a = n(427262),
    o = n(148719),
    l = n(47167),
    u = n(652215),
    c = n(375708);
function d(e) {
    let t,
        n,
        {
            channel: d,
            unread: _ = !1,
            mentionCount: f = 0,
            voiceStates: h,
            embeddedActivitiesCount: p,
            isSubscriptionGated: E,
            needSubscriptionToAccess: m,
            isIncomingCall: g = !1,
            isOngoingCall: A = !1,
        } = e,
        I = (0, l.m1)(d, s.default, r.A),
        T = (function (e) {
            if (e) return c.intl.string(c.t["4qvAtn"]);
        })((0, o.A)(d));
    switch (d.type) {
        case u.rbe.DM:
            t = _ ? c.t.F2MZsu : c.t.fYqXVY;
            break;
        case u.rbe.GROUP_DM:
            n = [
                c.intl.formatToPlainString(_ ? c.t["fxxUo/"] : c.t.lts3Ld, { channelName: I }),
                c.intl.formatToPlainString(c.t.CxSA5N, { members: d.recipients.length + 1 }),
            ].join(", ");
            break;
        case u.rbe.GUILD_STORE:
            t = c.t.Bo4msg;
            break;
        case u.rbe.GUILD_DIRECTORY:
            t = c.t["92EAF2"];
            break;
        case u.rbe.GUILD_ANNOUNCEMENT:
            t = f > 0 ? c.t.sDKIpm : _ ? c.t.VM7z8f : c.t.WJ3MPt;
            break;
        case u.rbe.GUILD_VOICE:
            let S = [c.intl.formatToPlainString(c.t.bkpadO, { channelName: I })];
            f > 0 && S.push(c.intl.formatToPlainString(c.t["3l1GOx"], { mentionCount: f })),
                _ && S.push(c.intl.string(c.t.x5zAGZ));
            let N = d.userLimit,
                y = null != N && N > 0;
            if (null != h && h.length > 0) {
                let e = h.length - 3,
                    t = h
                        .slice(0, 3)
                        .map((e) => {
                            let { nick: t, user: n } = e;
                            return t ?? (0, a.mG)(n);
                        })
                        .join(", ");
                S.push(t),
                    e > 0 && S.push(c.intl.formatToPlainString(c.t.sfgpgr, { overflow: e })),
                    y && S.push(c.intl.formatToPlainString(c.t["6qgTOF"], { userCount: h.length, limit: N }));
            }
            n = S.join(", ");
            break;
        case u.rbe.GUILD_STAGE_VOICE:
            t = c.t.TPPk2T;
            break;
        default:
            t = i.Le.has(d.type)
                ? f > 0
                    ? c.t["ZL7+I6"]
                    : _
                      ? c.t.YlVvmc
                      : c.t["0nZpiF"]
                : f > 0
                  ? c.t.g8ONM0
                  : _
                    ? c.t.smf1CZ
                    : c.t.s0JADj;
    }
    let C = null != n ? [n] : null != t ? [c.intl.formatToPlainString(t, { channelName: I, mentionCount: f })] : [];
    g ? C.push(c.intl.string(c.t["fk1/bX"])) : A && C.push(c.intl.string(c.t["NGg/fm"])),
        null != p && p > 0 && C.push(c.intl.formatToPlainString(c.t.O6PLYd, { activitiesCount: p }));
    let v = (function (e) {
        let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
        if (t)
            if (n) return c.intl.string(c.t["oj+HOs"]);
            else return c.intl.string(c.t.xI3TQQ);
    })({ isSubscriptionGated: E, needSubscriptionToAccess: m });
    return null != v && C.push(v), null != T && C.push(T), C.join(", ");
}
function _(e) {
    let { channel: t, muted: n, userStatus: i, isFavorite: r } = e,
        s = [];
    return (r && s.push(c.intl.string(c.t.cCPjSK)), !0 === n)
        ? (s.push(c.intl.string(c.t.C4zCMb)), s.join(", "))
        : (t.type === u.rbe.DM &&
              null != i &&
              s.push(
                  (function (e) {
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
                  })(i),
              ),
          s.length > 0 ? s.join(", ") : void 0);
}
