e.d(n, { Ay: () => D, r2: () => b }), e(321073), e(667532);
var r = e(583846),
    i = e(994500),
    l = e(287809),
    s = e(427262),
    a = e(148719),
    u = e(47167),
    c = e(652215),
    o = e(375708);
function D(t) {
    let n,
        e,
        {
            channel: D,
            unread: b = !1,
            mentionCount: I = 0,
            voiceStates: f,
            embeddedActivitiesCount: g,
            activityNames: h,
            isSubscriptionGated: p,
            needSubscriptionToAccess: T,
            isIncomingCall: E = !1,
            isOngoingCall: U = !1,
            voiceChannelStartTime: L,
            ignored: m = !1,
            blocked: A = !1,
        } = t,
        N = (0, u.m1)(D, l.default, i.A),
        P = (function (t) {
            if (t) return o.intl.string(o.t["4qvAtn"]);
        })((0, a.A)(D)),
        C = (function (t) {
            let { blocked: n, ignored: e } = t;
            return n ? o.intl.string(o.t.dByf4y) : e ? o.intl.string(o.t.mMCUM9) : void 0;
        })({ blocked: A, ignored: m });
    switch (D.type) {
        case c.rbe.DM:
            n = I > 0 ? o.t.TO8LYt : b ? o.t.F2MZsu : o.t.fYqXVY;
            break;
        case c.rbe.GROUP_DM: {
            let t;
            (t = I > 0 ? o.t.Lo0dCa : b ? o.t["fxxUo/"] : o.t.lts3Ld),
                (e = [
                    o.intl.formatToPlainString(t, { channelName: N, mentionCount: I }),
                    o.intl.formatToPlainString(o.t.CxSA5N, { members: D.recipients.length + 1 }),
                ].join(", "));
            break;
        }
        case c.rbe.GUILD_STORE:
            n = o.t.Bo4msg;
            break;
        case c.rbe.GUILD_DIRECTORY:
            n = o.t["92EAF2"];
            break;
        case c.rbe.GUILD_ANNOUNCEMENT:
            n = I > 0 ? o.t.sDKIpm : b ? o.t.VM7z8f : o.t.WJ3MPt;
            break;
        case c.rbe.GUILD_APP:
            n = I > 0 ? o.t.BILI3J : b ? o.t["xzhzM/"] : o.t.F98YPC;
            break;
        case c.rbe.GUILD_FORUM:
            n = I > 0 ? o.t.rSsuUF : b ? o.t["dr/Oik"] : o.t.Ajnhpa;
            break;
        case c.rbe.GUILD_MEDIA:
            n = I > 0 ? o.t.KqEUsJ : b ? o.t["37AyNG"] : o.t.KuUltE;
            break;
        case c.rbe.GUILD_VOICE:
            let G = [o.intl.formatToPlainString(o.t.bkpadO, { channelName: N })];
            I > 0 && G.push(o.intl.formatToPlainString(o.t["3l1GOx"], { mentionCount: I })),
                b && G.push(o.intl.string(o.t.x5zAGZ));
            let M = D.userLimit,
                O = null != M && M > 0;
            if (null != f && f.length > 0) {
                let t = f.length - 3,
                    n = f
                        .slice(0, 3)
                        .map((t) => {
                            let { nick: n, user: e } = t;
                            return n ?? (0, s.mG)(e);
                        })
                        .join(", ");
                G.push(n),
                    t > 0 && G.push(o.intl.formatToPlainString(o.t.sfgpgr, { overflow: t })),
                    O && G.push(o.intl.formatToPlainString(o.t["6qgTOF"], { userCount: f.length, limit: M }));
            }
            null != L &&
                G.push(o.intl.formatToPlainString(o.t.JQtsGh, { duration: (0, r.U3)({ start: L }, Date.now()) })),
                null != h &&
                    h.length > 0 &&
                    G.push(o.intl.formatToPlainString(o.t.LmYuHT, { activeActivities: h.join(", ") })),
                (e = G.join(", "));
            break;
        case c.rbe.GUILD_STAGE_VOICE:
            n = o.t.TPPk2T;
            break;
        case c.rbe.ANNOUNCEMENT_THREAD:
        case c.rbe.PUBLIC_THREAD:
        case c.rbe.PRIVATE_THREAD:
        case c.rbe.MEDIA_THREAD:
            n = I > 0 ? o.t["ZL7+I6"] : b ? o.t.YlVvmc : o.t["0nZpiF"];
            break;
        case c.rbe.GUILD_TEXT:
        case c.rbe.GUILD_CATEGORY:
        case c.rbe.GUILD_SPACE:
        case c.rbe.UNKNOWN:
        default:
            n = I > 0 ? o.t.g8ONM0 : b ? o.t.smf1CZ : o.t.s0JADj;
    }
    let k = null != e ? [e] : null != n ? [o.intl.formatToPlainString(n, { channelName: N, mentionCount: I })] : [];
    null != C && k.unshift(C),
        E ? k.push(o.intl.string(o.t["fk1/bX"])) : U && k.push(o.intl.string(o.t["NGg/fm"])),
        null != g && g > 0 && k.push(o.intl.formatToPlainString(o.t.O6PLYd, { activitiesCount: g }));
    let _ = (function (t) {
        let { isSubscriptionGated: n, needSubscriptionToAccess: e } = t;
        if (n)
            if (e) return o.intl.string(o.t["oj+HOs"]);
            else return o.intl.string(o.t.xI3TQQ);
    })({ isSubscriptionGated: p, needSubscriptionToAccess: T });
    return null != _ && k.push(_), null != P && k.push(P), k.join(", ");
}
function b(t) {
    let { channel: n, muted: e, userStatus: r, isFavorite: i } = t,
        l = [];
    return (i && l.push(o.intl.string(o.t.cCPjSK)), !0 === e)
        ? (l.push(o.intl.string(o.t.C4zCMb)), l.join(", "))
        : (n.type === c.rbe.DM &&
              null != r &&
              l.push(
                  (function (t) {
                      switch (t) {
                          case c.clD.ONLINE:
                              return (0, s.MU)(c.clD.ONLINE);
                          case c.clD.IDLE:
                              return (0, s.MU)(c.clD.IDLE);
                          case c.clD.DND:
                              return (0, s.MU)(c.clD.DND);
                          case c.clD.INVISIBLE:
                              return (0, s.MU)(c.clD.INVISIBLE);
                          default:
                              return "";
                      }
                  })(r),
              ),
          l.length > 0 ? l.join(", ") : void 0);
}
