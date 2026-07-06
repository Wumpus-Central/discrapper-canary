i.d(n, { Ay: () => g, r2: () => h }), i(321073);
var l = i(583846),
    e = i(95701),
    r = i(994500),
    s = i(287809),
    u = i(427262),
    a = i(148719),
    o = i(47167),
    c = i(652215),
    p = i(375708);
function g(t) {
    let n,
        i,
        {
            channel: g,
            unread: h = !1,
            mentionCount: f = 0,
            voiceStates: D,
            embeddedActivitiesCount: m,
            activityNames: b,
            isSubscriptionGated: I,
            needSubscriptionToAccess: T,
            isIncomingCall: L = !1,
            isOngoingCall: P = !1,
            voiceChannelStartTime: S,
        } = t,
        C = (0, o.m1)(g, s.default, r.A),
        N = (function (t) {
            if (t) return p.intl.string(p.t["4qvAtn"]);
        })((0, a.A)(g));
    switch (g.type) {
        case c.rbe.DM:
            n = f > 0 ? p.t.TO8LYt : h ? p.t.F2MZsu : p.t.fYqXVY;
            break;
        case c.rbe.GROUP_DM: {
            let t;
            (t = f > 0 ? p.t.Lo0dCa : h ? p.t["fxxUo/"] : p.t.lts3Ld),
                (i = [
                    p.intl.formatToPlainString(t, { channelName: C, mentionCount: f }),
                    p.intl.formatToPlainString(p.t.CxSA5N, { members: g.recipients.length + 1 }),
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
            n = f > 0 ? p.t.sDKIpm : h ? p.t.VM7z8f : p.t.WJ3MPt;
            break;
        case c.rbe.GUILD_VOICE:
            let O = [p.intl.formatToPlainString(p.t.bkpadO, { channelName: C })];
            f > 0 && O.push(p.intl.formatToPlainString(p.t["3l1GOx"], { mentionCount: f })),
                h && O.push(p.intl.string(p.t.x5zAGZ));
            let d = g.userLimit,
                k = null != d && d > 0;
            if (null != D && D.length > 0) {
                let t = D.length - 3,
                    n = D.slice(0, 3)
                        .map((t) => {
                            let { nick: n, user: i } = t;
                            return n ?? (0, u.mG)(i);
                        })
                        .join(", ");
                O.push(n),
                    t > 0 && O.push(p.intl.formatToPlainString(p.t.sfgpgr, { overflow: t })),
                    k && O.push(p.intl.formatToPlainString(p.t["6qgTOF"], { userCount: D.length, limit: d }));
            }
            null != S &&
                O.push(p.intl.formatToPlainString(p.t.JQtsGh, { duration: (0, l.U3)({ start: S }, Date.now()) })),
                null != b &&
                    b.length > 0 &&
                    O.push(p.intl.formatToPlainString(p.t.LmYuHT, { activeActivities: b.join(", ") })),
                (i = O.join(", "));
            break;
        case c.rbe.GUILD_STAGE_VOICE:
            n = p.t.TPPk2T;
            break;
        default:
            n = e.Le.has(g.type)
                ? f > 0
                    ? p.t["ZL7+I6"]
                    : h
                      ? p.t.YlVvmc
                      : p.t["0nZpiF"]
                : f > 0
                  ? p.t.g8ONM0
                  : h
                    ? p.t.smf1CZ
                    : p.t.s0JADj;
    }
    let E = null != i ? [i] : null != n ? [p.intl.formatToPlainString(n, { channelName: C, mentionCount: f })] : [];
    L ? E.push(p.intl.string(p.t["fk1/bX"])) : P && E.push(p.intl.string(p.t["NGg/fm"])),
        null != m && m > 0 && E.push(p.intl.formatToPlainString(p.t.O6PLYd, { activitiesCount: m }));
    let M = (function (t) {
        let { isSubscriptionGated: n, needSubscriptionToAccess: i } = t;
        if (n)
            if (i) return p.intl.string(p.t["oj+HOs"]);
            else return p.intl.string(p.t.xI3TQQ);
    })({ isSubscriptionGated: I, needSubscriptionToAccess: T });
    return null != M && E.push(M), null != N && E.push(N), E.join(", ");
}
function h(t) {
    let { channel: n, muted: i, userStatus: l, isFavorite: e } = t,
        r = [];
    return (e && r.push(p.intl.string(p.t.cCPjSK)), !0 === i)
        ? (r.push(p.intl.string(p.t.C4zCMb)), r.join(", "))
        : (n.type === c.rbe.DM &&
              null != l &&
              r.push(
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
          r.length > 0 ? r.join(", ") : void 0);
}
