"use strict";
n.d(t, { Ay: () => _, r2: () => E }), n(321073);
var i = n(583846),
    r = n(95701),
    a = n(994500),
    s = n(287809),
    l = n(427262),
    o = n(148719),
    d = n(47167),
    c = n(652215),
    u = n(375708);
function _(e) {
    let t,
        n,
        {
            channel: _,
            unread: E = !1,
            mentionCount: A = 0,
            voiceStates: h,
            embeddedActivitiesCount: I,
            activityNames: f,
            isSubscriptionGated: p,
            needSubscriptionToAccess: T,
            isIncomingCall: m = !1,
            isOngoingCall: g = !1,
            voiceChannelStartTime: S,
        } = e,
        N = (0, d.m1)(_, s.default, a.A),
        C = (function (e) {
            if (e) return u.intl.string(u.t["4qvAtn"]);
        })((0, o.A)(_));
    switch (_.type) {
        case c.rbe.DM:
            t = A > 0 ? u.t.TO8LYt : E ? u.t.F2MZsu : u.t.fYqXVY;
            break;
        case c.rbe.GROUP_DM: {
            let e;
            (e = A > 0 ? u.t.Lo0dCa : E ? u.t["fxxUo/"] : u.t.lts3Ld),
                (n = [
                    u.intl.formatToPlainString(e, { channelName: N, mentionCount: A }),
                    u.intl.formatToPlainString(u.t.CxSA5N, { members: _.recipients.length + 1 }),
                ].join(", "));
            break;
        }
        case c.rbe.GUILD_STORE:
            t = u.t.Bo4msg;
            break;
        case c.rbe.GUILD_DIRECTORY:
            t = u.t["92EAF2"];
            break;
        case c.rbe.GUILD_ANNOUNCEMENT:
            t = A > 0 ? u.t.sDKIpm : E ? u.t.VM7z8f : u.t.WJ3MPt;
            break;
        case c.rbe.GUILD_VOICE:
            let O = [u.intl.formatToPlainString(u.t.bkpadO, { channelName: N })];
            A > 0 && O.push(u.intl.formatToPlainString(u.t["3l1GOx"], { mentionCount: A })),
                E && O.push(u.intl.string(u.t.x5zAGZ));
            let R = _.userLimit,
                L = null != R && R > 0;
            if (null != h && h.length > 0) {
                let e = h.length - 3,
                    t = h
                        .slice(0, 3)
                        .map((e) => {
                            let { nick: t, user: n } = e;
                            return t ?? (0, l.mG)(n);
                        })
                        .join(", ");
                O.push(t),
                    e > 0 && O.push(u.intl.formatToPlainString(u.t.sfgpgr, { overflow: e })),
                    L && O.push(u.intl.formatToPlainString(u.t["6qgTOF"], { userCount: h.length, limit: R }));
            }
            null != S &&
                O.push(u.intl.formatToPlainString(u.t.JQtsGh, { duration: (0, i.U3)({ start: S }, Date.now()) })),
                null != f &&
                    f.length > 0 &&
                    O.push(u.intl.formatToPlainString(u.t.LmYuHT, { activeActivities: f.join(", ") })),
                (n = O.join(", "));
            break;
        case c.rbe.GUILD_STAGE_VOICE:
            t = u.t.TPPk2T;
            break;
        default:
            t = r.Le.has(_.type)
                ? A > 0
                    ? u.t["ZL7+I6"]
                    : E
                      ? u.t.YlVvmc
                      : u.t["0nZpiF"]
                : A > 0
                  ? u.t.g8ONM0
                  : E
                    ? u.t.smf1CZ
                    : u.t.s0JADj;
    }
    let D = null != n ? [n] : null != t ? [u.intl.formatToPlainString(t, { channelName: N, mentionCount: A })] : [];
    m ? D.push(u.intl.string(u.t["fk1/bX"])) : g && D.push(u.intl.string(u.t["NGg/fm"])),
        null != I && I > 0 && D.push(u.intl.formatToPlainString(u.t.O6PLYd, { activitiesCount: I }));
    let y = (function (e) {
        let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
        if (t)
            if (n) return u.intl.string(u.t["oj+HOs"]);
            else return u.intl.string(u.t.xI3TQQ);
    })({ isSubscriptionGated: p, needSubscriptionToAccess: T });
    return null != y && D.push(y), null != C && D.push(C), D.join(", ");
}
function E(e) {
    let { channel: t, muted: n, userStatus: i, isFavorite: r } = e,
        a = [];
    return (r && a.push(u.intl.string(u.t.cCPjSK)), !0 === n)
        ? (a.push(u.intl.string(u.t.C4zCMb)), a.join(", "))
        : (t.type === c.rbe.DM &&
              null != i &&
              a.push(
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
                  })(i),
              ),
          a.length > 0 ? a.join(", ") : void 0);
}
