"use strict";
n.d(t, { Ay: () => _, r2: () => h }), n(321073);
var i = n(583846),
    r = n(95701),
    s = n(994500),
    a = n(287809),
    o = n(427262),
    l = n(148719),
    u = n(47167),
    d = n(652215),
    c = n(375708);
function _(e) {
    let t,
        n,
        {
            channel: _,
            unread: h = !1,
            mentionCount: f = 0,
            voiceStates: E,
            embeddedActivitiesCount: p,
            activityNames: m,
            isSubscriptionGated: g,
            needSubscriptionToAccess: A,
            isIncomingCall: I = !1,
            isOngoingCall: T = !1,
            voiceChannelStartTime: S,
        } = e,
        N = (0, u.m1)(_, a.default, s.A),
        C = (function (e) {
            if (e) return c.intl.string(c.t["4qvAtn"]);
        })((0, l.A)(_));
    switch (_.type) {
        case d.rbe.DM:
            t = f > 0 ? c.t.TO8LYt : h ? c.t.F2MZsu : c.t.fYqXVY;
            break;
        case d.rbe.GROUP_DM: {
            let e;
            (e = f > 0 ? c.t.Lo0dCa : h ? c.t["fxxUo/"] : c.t.lts3Ld),
                (n = [
                    c.intl.formatToPlainString(e, { channelName: N, mentionCount: f }),
                    c.intl.formatToPlainString(c.t.CxSA5N, { members: _.recipients.length + 1 }),
                ].join(", "));
            break;
        }
        case d.rbe.GUILD_STORE:
            t = c.t.Bo4msg;
            break;
        case d.rbe.GUILD_DIRECTORY:
            t = c.t["92EAF2"];
            break;
        case d.rbe.GUILD_ANNOUNCEMENT:
            t = f > 0 ? c.t.sDKIpm : h ? c.t.VM7z8f : c.t.WJ3MPt;
            break;
        case d.rbe.GUILD_VOICE:
            let y = [c.intl.formatToPlainString(c.t.bkpadO, { channelName: N })];
            f > 0 && y.push(c.intl.formatToPlainString(c.t["3l1GOx"], { mentionCount: f })),
                h && y.push(c.intl.string(c.t.x5zAGZ));
            let v = _.userLimit,
                R = null != v && v > 0;
            if (null != E && E.length > 0) {
                let e = E.length - 3,
                    t = E.slice(0, 3)
                        .map((e) => {
                            let { nick: t, user: n } = e;
                            return t ?? (0, o.mG)(n);
                        })
                        .join(", ");
                y.push(t),
                    e > 0 && y.push(c.intl.formatToPlainString(c.t.sfgpgr, { overflow: e })),
                    R && y.push(c.intl.formatToPlainString(c.t["6qgTOF"], { userCount: E.length, limit: v }));
            }
            null != S &&
                y.push(c.intl.formatToPlainString(c.t.JQtsGh, { duration: (0, i.U3)({ start: S }, Date.now()) })),
                null != m &&
                    m.length > 0 &&
                    y.push(c.intl.formatToPlainString(c.t.LmYuHT, { activeActivities: m.join(", ") })),
                (n = y.join(", "));
            break;
        case d.rbe.GUILD_STAGE_VOICE:
            t = c.t.TPPk2T;
            break;
        default:
            t = r.Le.has(_.type)
                ? f > 0
                    ? c.t["ZL7+I6"]
                    : h
                      ? c.t.YlVvmc
                      : c.t["0nZpiF"]
                : f > 0
                  ? c.t.g8ONM0
                  : h
                    ? c.t.smf1CZ
                    : c.t.s0JADj;
    }
    let O = null != n ? [n] : null != t ? [c.intl.formatToPlainString(t, { channelName: N, mentionCount: f })] : [];
    I ? O.push(c.intl.string(c.t["fk1/bX"])) : T && O.push(c.intl.string(c.t["NGg/fm"])),
        null != p && p > 0 && O.push(c.intl.formatToPlainString(c.t.O6PLYd, { activitiesCount: p }));
    let b = (function (e) {
        let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
        if (t)
            if (n) return c.intl.string(c.t["oj+HOs"]);
            else return c.intl.string(c.t.xI3TQQ);
    })({ isSubscriptionGated: g, needSubscriptionToAccess: A });
    return null != b && O.push(b), null != C && O.push(C), O.join(", ");
}
function h(e) {
    let { channel: t, muted: n, userStatus: i, isFavorite: r } = e,
        s = [];
    return (r && s.push(c.intl.string(c.t.cCPjSK)), !0 === n)
        ? (s.push(c.intl.string(c.t.C4zCMb)), s.join(", "))
        : (t.type === d.rbe.DM &&
              null != i &&
              s.push(
                  (function (e) {
                      switch (e) {
                          case d.clD.ONLINE:
                              return (0, o.MU)(d.clD.ONLINE);
                          case d.clD.IDLE:
                              return (0, o.MU)(d.clD.IDLE);
                          case d.clD.DND:
                              return (0, o.MU)(d.clD.DND);
                          case d.clD.INVISIBLE:
                              return (0, o.MU)(d.clD.INVISIBLE);
                          default:
                              return "";
                      }
                  })(i),
              ),
          s.length > 0 ? s.join(", ") : void 0);
}
