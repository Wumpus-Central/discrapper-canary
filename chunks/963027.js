i.d(n, { Ay: () => f, r2: () => g }), i(321073);
var l = i(832384),
    r = i(95701),
    e = i(994500),
    s = i(287809),
    u = i(427262),
    a = i(148719),
    o = i(47167),
    c = i(652215),
    p = i(375708);
function f(t) {
    let n,
        i,
        {
            channel: f,
            unread: g = !1,
            mentionCount: h = 0,
            voiceStates: D,
            embeddedActivitiesCount: m,
            isSubscriptionGated: b,
            needSubscriptionToAccess: I,
            isIncomingCall: L = !1,
            isOngoingCall: T = !1,
            voiceChannelStartTime: C,
        } = t,
        N = (0, o.m1)(f, s.default, e.A),
        O = (function (t) {
            if (t) return p.intl.string(p.t["4qvAtn"]);
        })((0, a.A)(f));
    switch (f.type) {
        case c.rbe.DM:
            n = h > 0 ? p.t.TO8LYt : g ? p.t.F2MZsu : p.t.fYqXVY;
            break;
        case c.rbe.GROUP_DM: {
            let t;
            (t = h > 0 ? p.t.Lo0dCa : g ? p.t["fxxUo/"] : p.t.lts3Ld),
                (i = [
                    p.intl.formatToPlainString(t, { channelName: N, mentionCount: h }),
                    p.intl.formatToPlainString(p.t.CxSA5N, { members: f.recipients.length + 1 }),
                ].join(", "));
            break;
        }
        case c.rbe.GUILD_STORE:
            n = p.t.Bo4msg;
            break;
        case c.rbe.GUILD_DIRECTORY:
            n = p.t["92EAF2"];
            break;
        case c.rbe.GUILD_ANNOUNCEMENT:
            n = h > 0 ? p.t.sDKIpm : g ? p.t.VM7z8f : p.t.WJ3MPt;
            break;
        case c.rbe.GUILD_VOICE:
            let P = [p.intl.formatToPlainString(p.t.bkpadO, { channelName: N })];
            h > 0 && P.push(p.intl.formatToPlainString(p.t["3l1GOx"], { mentionCount: h })),
                g && P.push(p.intl.string(p.t.x5zAGZ));
            let S = f.userLimit,
                d = null != S && S > 0;
            if (null != D && D.length > 0) {
                let t = D.length - 3,
                    n = D.slice(0, 3)
                        .map((t) => {
                            let { nick: n, user: i } = t;
                            return n ?? (0, u.mG)(i);
                        })
                        .join(", ");
                P.push(n),
                    t > 0 && P.push(p.intl.formatToPlainString(p.t.sfgpgr, { overflow: t })),
                    d && P.push(p.intl.formatToPlainString(p.t["6qgTOF"], { userCount: D.length, limit: S }));
            }
            null != C &&
                P.push(p.intl.formatToPlainString(p.t.JQtsGh, { duration: (0, l.U3)({ start: C }, Date.now()) })),
                (i = P.join(", "));
            break;
        case c.rbe.GUILD_STAGE_VOICE:
            n = p.t.TPPk2T;
            break;
        default:
            n = r.Le.has(f.type)
                ? h > 0
                    ? p.t["ZL7+I6"]
                    : g
                      ? p.t.YlVvmc
                      : p.t["0nZpiF"]
                : h > 0
                  ? p.t.g8ONM0
                  : g
                    ? p.t.smf1CZ
                    : p.t.s0JADj;
    }
    let k = null != i ? [i] : null != n ? [p.intl.formatToPlainString(n, { channelName: N, mentionCount: h })] : [];
    L ? k.push(p.intl.string(p.t["fk1/bX"])) : T && k.push(p.intl.string(p.t["NGg/fm"])),
        null != m && m > 0 && k.push(p.intl.formatToPlainString(p.t.O6PLYd, { activitiesCount: m }));
    let E = (function (t) {
        let { isSubscriptionGated: n, needSubscriptionToAccess: i } = t;
        if (n)
            if (i) return p.intl.string(p.t["oj+HOs"]);
            else return p.intl.string(p.t.xI3TQQ);
    })({ isSubscriptionGated: b, needSubscriptionToAccess: I });
    return null != E && k.push(E), null != O && k.push(O), k.join(", ");
}
function g(t) {
    let { channel: n, muted: i, userStatus: l, isFavorite: r } = t,
        e = [];
    return (r && e.push(p.intl.string(p.t.cCPjSK)), !0 === i)
        ? (e.push(p.intl.string(p.t.C4zCMb)), e.join(", "))
        : (n.type === c.rbe.DM &&
              null != l &&
              e.push(
                  (function (t) {
                      switch (t) {
                          case c.clD.ONLINE:
                              return (0, u.MU)(c.clD.ONLINE);
                          case c.clD.IDLE:
                              return (0, u.MU)(c.clD.IDLE);
                          case c.clD.DND:
                              return (0, u.MU)(c.clD.DND);
                          case c.clD.INVISIBLE:
                              return (0, u.MU)(c.clD.INVISIBLE);
                          default:
                              return "";
                      }
                  })(l),
              ),
          e.length > 0 ? e.join(", ") : void 0);
}
