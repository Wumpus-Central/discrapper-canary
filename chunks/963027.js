(e.d(n, { Ay: () => D, r2: () => b }), e(321073), e(667532));
var i = e(583846),
    r = e(994500),
    l = e(287809),
    s = e(427262),
    a = e(148719),
    u = e(47167),
    c = e(652215),
    o = e(105292);
function D(t) {
    let n,
        e,
        {
            channel: D,
            unread: b = !1,
            mentionCount: h = 0,
            voiceStates: g,
            embeddedActivitiesCount: p,
            activityNames: I,
            isSubscriptionGated: f,
            needSubscriptionToAccess: T,
            isIncomingCall: E = !1,
            isOngoingCall: U = !1,
            voiceChannelStartTime: L,
            ignored: m = !1,
            blocked: A = !1,
        } = t,
        N = (0, u.m1)(D, l.default, r.A),
        P = (function (t) {
            if (t) return o.intl.string(o.t["4qvAtn"]);
        })((0, a.A)(D)),
        C = (function (t) {
            let { blocked: n, ignored: e } = t;
            return n ? o.intl.string(o.t.dByf4y) : e ? o.intl.string(o.t.mMCUM9) : void 0;
        })({ blocked: A, ignored: m });
    switch (D.type) {
        case c.rbe.DM:
            n = h > 0 ? o.t.TO8LYt : b ? o.t.F2MZsu : o.t.fYqXVY;
            break;
        case c.rbe.GROUP_DM: {
            let t;
            ((t = h > 0 ? o.t.Lo0dCa : b ? o.t["fxxUo/"] : o.t.lts3Ld),
                (e = [
                    o.intl.formatToPlainString(t, { channelName: N, mentionCount: h }),
                    o.intl.formatToPlainString(o.t.CxSA5N, { members: D.recipients.length + 1 }),
                ].join(", ")));
            break;
        }
        case c.rbe.GUILD_STORE:
            n = o.t.Bo4msg;
            break;
        case c.rbe.GUILD_DIRECTORY:
            n = o.t["92EAF2"];
            break;
        case c.rbe.GUILD_ANNOUNCEMENT:
            n = h > 0 ? o.t.sDKIpm : b ? o.t.VM7z8f : o.t.WJ3MPt;
            break;
        case c.rbe.GUILD_APP:
            n = h > 0 ? o.t.BILI3J : b ? o.t["xzhzM/"] : o.t.F98YPC;
            break;
        case c.rbe.GUILD_FORUM:
            n = h > 0 ? o.t.rSsuUF : b ? o.t["dr/Oik"] : o.t.Ajnhpa;
            break;
        case c.rbe.GUILD_MEDIA:
            n = h > 0 ? o.t.KqEUsJ : b ? o.t["37AyNG"] : o.t.KuUltE;
            break;
        case c.rbe.GUILD_VOICE:
            let G = [o.intl.formatToPlainString(o.t.bkpadO, { channelName: N })];
            (h > 0 && G.push(o.intl.formatToPlainString(o.t["3l1GOx"], { mentionCount: h })),
                b && G.push(o.intl.string(o.t.x5zAGZ)));
            let M = D.userLimit,
                O = null != M && M > 0;
            if (null != g && g.length > 0) {
                let t = g.length - 3,
                    n = g
                        .slice(0, 3)
                        .map((t) => {
                            let { nick: n, user: e } = t;
                            return n ?? (0, s.mG)(e);
                        })
                        .join(", ");
                (G.push(n),
                    t > 0 && G.push(o.intl.formatToPlainString(o.t.sfgpgr, { overflow: t })),
                    O && G.push(o.intl.formatToPlainString(o.t["6qgTOF"], { userCount: g.length, limit: M })));
            }
            (null != L &&
                G.push(o.intl.formatToPlainString(o.t.JQtsGh, { duration: (0, i.U3)({ start: L }, Date.now()) })),
                null != I &&
                    I.length > 0 &&
                    G.push(o.intl.formatToPlainString(o.t.LmYuHT, { activeActivities: I.join(", ") })),
                (e = G.join(", ")));
            break;
        case c.rbe.GUILD_STAGE_VOICE:
            n = o.t.TPPk2T;
            break;
        case c.rbe.ANNOUNCEMENT_THREAD:
        case c.rbe.PUBLIC_THREAD:
        case c.rbe.PRIVATE_THREAD:
        case c.rbe.MEDIA_THREAD:
            n = h > 0 ? o.t["ZL7+I6"] : b ? o.t.YlVvmc : o.t["0nZpiF"];
            break;
        case c.rbe.GUILD_TEXT:
        case c.rbe.GUILD_CATEGORY:
        case c.rbe.GUILD_SPACE:
        case c.rbe.UNKNOWN:
        default:
            n = h > 0 ? o.t.g8ONM0 : b ? o.t.smf1CZ : o.t.s0JADj;
    }
    let S = null != e ? [e] : null != n ? [o.intl.formatToPlainString(n, { channelName: N, mentionCount: h })] : [];
    (null != C && S.unshift(C),
        E ? S.push(o.intl.string(o.t["fk1/bX"])) : U && S.push(o.intl.string(o.t["NGg/fm"])),
        null != p && p > 0 && S.push(o.intl.formatToPlainString(o.t.O6PLYd, { activitiesCount: p })),
        D.isNSFW() && S.push(o.intl.string(o.t.jVv7YM)),
        D.isSpoilerChannel() && S.push(o.intl.string(o.t["+Pu3G1"])));
    let k = (function (t) {
        let { isSubscriptionGated: n, needSubscriptionToAccess: e } = t;
        if (n)
            if (e) return o.intl.string(o.t["oj+HOs"]);
            else return o.intl.string(o.t.xI3TQQ);
    })({ isSubscriptionGated: f, needSubscriptionToAccess: T });
    return (null != k && S.push(k), null != P && S.push(P), S.join(", "));
}
function b(t) {
    let { channel: n, muted: e, userStatus: i, isFavorite: r } = t,
        l = [];
    return (r && l.push(o.intl.string(o.t.cCPjSK)), !0 === e)
        ? (l.push(o.intl.string(o.t.C4zCMb)), l.join(", "))
        : (n.type === c.rbe.DM &&
              null != i &&
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
                  })(i),
              ),
          l.length > 0 ? l.join(", ") : void 0);
}
