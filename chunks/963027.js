i.d(n, { Ay: () => g, r2: () => h }), i(321073), i(667532);
var l = i(583846),
    r = i(95701),
    e = i(994500),
    s = i(287809),
    u = i(427262),
    a = i(148719),
    o = i(47167),
    c = i(652215),
    f = i(375708);
function g(t) {
    let n,
        i,
        {
            channel: g,
            unread: h = !1,
            mentionCount: p = 0,
            voiceStates: D,
            embeddedActivitiesCount: m,
            activityNames: b,
            isSubscriptionGated: I,
            needSubscriptionToAccess: T,
            isIncomingCall: L = !1,
            isOngoingCall: d = !1,
            voiceChannelStartTime: C,
            ignored: P = !1,
            blocked: S = !1,
        } = t,
        M = (0, o.m1)(g, s.default, e.A),
        N = (function (t) {
            if (t) return f.intl.string(f.t["4qvAtn"]);
        })((0, a.A)(g)),
        O = (function (t) {
            let { blocked: n, ignored: i } = t;
            return n ? f.intl.string(f.t.dByf4y) : i ? f.intl.string(f.t.mMCUM9) : void 0;
        })({ blocked: S, ignored: P });
    switch (g.type) {
        case c.rbe.DM:
            n = p > 0 ? f.t.TO8LYt : h ? f.t.F2MZsu : f.t.fYqXVY;
            break;
        case c.rbe.GROUP_DM: {
            let t;
            (t = p > 0 ? f.t.Lo0dCa : h ? f.t["fxxUo/"] : f.t.lts3Ld),
                (i = [
                    f.intl.formatToPlainString(t, { channelName: M, mentionCount: p }),
                    f.intl.formatToPlainString(f.t.CxSA5N, { members: g.recipients.length + 1 }),
                ].join(", "));
            break;
        }
        case c.rbe.GUILD_STORE:
            n = f.t.Bo4msg;
            break;
        case c.rbe.GUILD_DIRECTORY:
            n = f.t["92EAF2"];
            break;
        case c.rbe.GUILD_ANNOUNCEMENT:
            n = p > 0 ? f.t.sDKIpm : h ? f.t.VM7z8f : f.t.WJ3MPt;
            break;
        case c.rbe.GUILD_VOICE:
            let k = [f.intl.formatToPlainString(f.t.bkpadO, { channelName: M })];
            p > 0 && k.push(f.intl.formatToPlainString(f.t["3l1GOx"], { mentionCount: p })),
                h && k.push(f.intl.string(f.t.x5zAGZ));
            let E = g.userLimit,
                U = null != E && E > 0;
            if (null != D && D.length > 0) {
                let t = D.length - 3,
                    n = D.slice(0, 3)
                        .map((t) => {
                            let { nick: n, user: i } = t;
                            return n ?? (0, u.mG)(i);
                        })
                        .join(", ");
                k.push(n),
                    t > 0 && k.push(f.intl.formatToPlainString(f.t.sfgpgr, { overflow: t })),
                    U && k.push(f.intl.formatToPlainString(f.t["6qgTOF"], { userCount: D.length, limit: E }));
            }
            null != C &&
                k.push(f.intl.formatToPlainString(f.t.JQtsGh, { duration: (0, l.U3)({ start: C }, Date.now()) })),
                null != b &&
                    b.length > 0 &&
                    k.push(f.intl.formatToPlainString(f.t.LmYuHT, { activeActivities: b.join(", ") })),
                (i = k.join(", "));
            break;
        case c.rbe.GUILD_STAGE_VOICE:
            n = f.t.TPPk2T;
            break;
        default:
            n = r.Le.has(g.type)
                ? p > 0
                    ? f.t["ZL7+I6"]
                    : h
                      ? f.t.YlVvmc
                      : f.t["0nZpiF"]
                : p > 0
                  ? f.t.g8ONM0
                  : h
                    ? f.t.smf1CZ
                    : f.t.s0JADj;
    }
    let G = null != i ? [i] : null != n ? [f.intl.formatToPlainString(n, { channelName: M, mentionCount: p })] : [];
    null != O && G.unshift(O),
        L ? G.push(f.intl.string(f.t["fk1/bX"])) : d && G.push(f.intl.string(f.t["NGg/fm"])),
        null != m && m > 0 && G.push(f.intl.formatToPlainString(f.t.O6PLYd, { activitiesCount: m }));
    let A = (function (t) {
        let { isSubscriptionGated: n, needSubscriptionToAccess: i } = t;
        if (n)
            if (i) return f.intl.string(f.t["oj+HOs"]);
            else return f.intl.string(f.t.xI3TQQ);
    })({ isSubscriptionGated: I, needSubscriptionToAccess: T });
    return null != A && G.push(A), null != N && G.push(N), G.join(", ");
}
function h(t) {
    let { channel: n, muted: i, userStatus: l, isFavorite: r } = t,
        e = [];
    return (r && e.push(f.intl.string(f.t.cCPjSK)), !0 === i)
        ? (e.push(f.intl.string(f.t.C4zCMb)), e.join(", "))
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
