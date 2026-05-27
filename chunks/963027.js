"use strict";
n.d(t, { Ay: () => _, r2: () => h }), n(321073);
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
            unread: h = !1,
            mentionCount: f = 0,
            voiceStates: p,
            embeddedActivitiesCount: E,
            isSubscriptionGated: m,
            needSubscriptionToAccess: g,
            isIncomingCall: A = !1,
            isOngoingCall: I = !1,
            voiceChannelStartTime: T,
        } = e,
        S = (0, u.m1)(_, a.default, s.A),
        y = (function (e) {
            if (e) return d.intl.string(d.t["4qvAtn"]);
        })((0, l.A)(_));
    switch (_.type) {
        case c.rbe.DM:
            t = f > 0 ? d.t.TO8LYt : h ? d.t.F2MZsu : d.t.fYqXVY;
            break;
        case c.rbe.GROUP_DM: {
            let e;
            (e = f > 0 ? d.t.Lo0dCa : h ? d.t["fxxUo/"] : d.t.lts3Ld),
                (n = [
                    d.intl.formatToPlainString(e, { channelName: S, mentionCount: f }),
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
            t = f > 0 ? d.t.sDKIpm : h ? d.t.VM7z8f : d.t.WJ3MPt;
            break;
        case c.rbe.GUILD_VOICE:
            let N = [d.intl.formatToPlainString(d.t.bkpadO, { channelName: S })];
            f > 0 && N.push(d.intl.formatToPlainString(d.t["3l1GOx"], { mentionCount: f })),
                h && N.push(d.intl.string(d.t.x5zAGZ));
            let v = _.userLimit,
                C = null != v && v > 0;
            if (null != p && p.length > 0) {
                let e = p.length - 3,
                    t = p
                        .slice(0, 3)
                        .map((e) => {
                            let { nick: t, user: n } = e;
                            return t ?? (0, o.mG)(n);
                        })
                        .join(", ");
                N.push(t),
                    e > 0 && N.push(d.intl.formatToPlainString(d.t.sfgpgr, { overflow: e })),
                    C && N.push(d.intl.formatToPlainString(d.t["6qgTOF"], { userCount: p.length, limit: v }));
            }
            null != T &&
                N.push(d.intl.formatToPlainString(d.t.JQtsGh, { duration: (0, i.U3)({ start: T }, Date.now()) })),
                (n = N.join(", "));
            break;
        case c.rbe.GUILD_STAGE_VOICE:
            t = d.t.TPPk2T;
            break;
        default:
            t = r.Le.has(_.type)
                ? f > 0
                    ? d.t["ZL7+I6"]
                    : h
                      ? d.t.YlVvmc
                      : d.t["0nZpiF"]
                : f > 0
                  ? d.t.g8ONM0
                  : h
                    ? d.t.smf1CZ
                    : d.t.s0JADj;
    }
    let R = null != n ? [n] : null != t ? [d.intl.formatToPlainString(t, { channelName: S, mentionCount: f })] : [];
    A ? R.push(d.intl.string(d.t["fk1/bX"])) : I && R.push(d.intl.string(d.t["NGg/fm"])),
        null != E && E > 0 && R.push(d.intl.formatToPlainString(d.t.O6PLYd, { activitiesCount: E }));
    let O = (function (e) {
        let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
        if (t)
            if (n) return d.intl.string(d.t["oj+HOs"]);
            else return d.intl.string(d.t.xI3TQQ);
    })({ isSubscriptionGated: m, needSubscriptionToAccess: g });
    return null != O && R.push(O), null != y && R.push(y), R.join(", ");
}
function h(e) {
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
