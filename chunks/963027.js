"use strict";
n.d(t, { Ay: () => _, r2: () => f }), n(321073);
var i = n(832384),
    r = n(95701),
    s = n(994500),
    a = n(287809),
    o = n(427262),
    l = n(148719),
    u = n(47167),
    c = n(652215),
    d = n(375708);
function _(e) {
    let t,
        n,
        {
            channel: _,
            unread: f = !1,
            mentionCount: h = 0,
            voiceStates: p,
            embeddedActivitiesCount: E,
            isSubscriptionGated: m,
            needSubscriptionToAccess: g,
            isIncomingCall: A = !1,
            isOngoingCall: I = !1,
            voiceChannelStartTime: T,
        } = e,
        S = (0, u.m1)(_, a.default, s.A),
        N = (function (e) {
            if (e) return d.intl.string(d.t["4qvAtn"]);
        })((0, l.A)(_));
    switch (_.type) {
        case c.rbe.DM:
            t = h > 0 ? d.t.TO8LYt : f ? d.t.F2MZsu : d.t.fYqXVY;
            break;
        case c.rbe.GROUP_DM: {
            let e;
            (e = h > 0 ? d.t.Lo0dCa : f ? d.t["fxxUo/"] : d.t.lts3Ld),
                (n = [
                    d.intl.formatToPlainString(e, { channelName: S, mentionCount: h }),
                    d.intl.formatToPlainString(d.t.CxSA5N, { members: _.recipients.length + 1 }),
                ].join(", "));
            break;
        }
        case c.rbe.GUILD_STORE:
            t = d.t.Bo4msg;
            break;
        case c.rbe.GUILD_DIRECTORY:
            t = d.t["92EAF2"];
            break;
        case c.rbe.GUILD_ANNOUNCEMENT:
            t = h > 0 ? d.t.sDKIpm : f ? d.t.VM7z8f : d.t.WJ3MPt;
            break;
        case c.rbe.GUILD_VOICE:
            let y = [d.intl.formatToPlainString(d.t.bkpadO, { channelName: S })];
            h > 0 && y.push(d.intl.formatToPlainString(d.t["3l1GOx"], { mentionCount: h })),
                f && y.push(d.intl.string(d.t.x5zAGZ));
            let C = _.userLimit,
                v = null != C && C > 0;
            if (null != p && p.length > 0) {
                let e = p.length - 3,
                    t = p
                        .slice(0, 3)
                        .map((e) => {
                            let { nick: t, user: n } = e;
                            return t ?? (0, o.mG)(n);
                        })
                        .join(", ");
                y.push(t),
                    e > 0 && y.push(d.intl.formatToPlainString(d.t.sfgpgr, { overflow: e })),
                    v && y.push(d.intl.formatToPlainString(d.t["6qgTOF"], { userCount: p.length, limit: C }));
            }
            null != T &&
                y.push(d.intl.formatToPlainString(d.t.JQtsGh, { duration: (0, i.U3)({ start: T }, Date.now()) })),
                (n = y.join(", "));
            break;
        case c.rbe.GUILD_STAGE_VOICE:
            t = d.t.TPPk2T;
            break;
        default:
            t = r.Le.has(_.type)
                ? h > 0
                    ? d.t["ZL7+I6"]
                    : f
                      ? d.t.YlVvmc
                      : d.t["0nZpiF"]
                : h > 0
                  ? d.t.g8ONM0
                  : f
                    ? d.t.smf1CZ
                    : d.t.s0JADj;
    }
    let O = null != n ? [n] : null != t ? [d.intl.formatToPlainString(t, { channelName: S, mentionCount: h })] : [];
    A ? O.push(d.intl.string(d.t["fk1/bX"])) : I && O.push(d.intl.string(d.t["NGg/fm"])),
        null != E && E > 0 && O.push(d.intl.formatToPlainString(d.t.O6PLYd, { activitiesCount: E }));
    let R = (function (e) {
        let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
        if (t)
            if (n) return d.intl.string(d.t["oj+HOs"]);
            else return d.intl.string(d.t.xI3TQQ);
    })({ isSubscriptionGated: m, needSubscriptionToAccess: g });
    return null != R && O.push(R), null != N && O.push(N), O.join(", ");
}
function f(e) {
    let { channel: t, muted: n, userStatus: i, isFavorite: r } = e,
        s = [];
    return (r && s.push(d.intl.string(d.t.cCPjSK)), !0 === n)
        ? (s.push(d.intl.string(d.t.C4zCMb)), s.join(", "))
        : (t.type === c.rbe.DM &&
              null != i &&
              s.push(
                  (function (e) {
                      switch (e) {
                          case c.clD.ONLINE:
                              return (0, o.MU)(c.clD.ONLINE);
                          case c.clD.IDLE:
                              return (0, o.MU)(c.clD.IDLE);
                          case c.clD.DND:
                              return (0, o.MU)(c.clD.DND);
                          case c.clD.INVISIBLE:
                              return (0, o.MU)(c.clD.INVISIBLE);
                          default:
                              return "";
                      }
                  })(i),
              ),
          s.length > 0 ? s.join(", ") : void 0);
}
