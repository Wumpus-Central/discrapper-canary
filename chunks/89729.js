n.d(t, { g: () => h });
var i = n(392711),
    a = n.n(i),
    o = n(995774),
    s = n(592125),
    l = n(542578),
    r = n(699516),
    c = n(5192),
    d = n(566006),
    u = n(388032);
function h(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.O.NORMAL,
        h = arguments.length > 3 ? arguments[3] : void 0,
        m = l.Z.getReactions(e.getChannelId(), e.id, t, 3, i),
        p = s.Z.getChannel(e.getChannelId()),
        g = null == p || p.isPrivate() ? null : p.getGuildId(),
        f = e.getReaction(t),
        v = i === d.O.BURST,
        T = a()(m)
            .reject((e) => r.Z.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => c.ZP.getName(g, null == p ? void 0 : p.id, e))
            .value();
    if (0 === T.length) return '';
    let x = {
            standard: {
                reactionTooltip1NInteractive: u.t.dgtYDA,
                reactionTooltip1N: u.t.mXild3,
                reactionTooltip1: u.t.Oro30N,
                reactionTooltip2NInteractive: u.t['0GBwVV'],
                reactionTooltip2N: u.t.UWGs2t,
                reactionTooltip2: u.t['p+0jvr'],
                reactionTooltip3NInteractive: u.t['dK6/7e'],
                reactionTooltip3N: u.t.UnXdX1,
                reactionTooltip3: u.t.bbPMcX,
                reactionTooltipNInteractive: u.t.Thj7LS,
                reactionTooltipN: u.t.CRrc7e
            },
            burst: {
                reactionTooltip1NInteractive: u.t.G98B0d,
                reactionTooltip1N: u.t['u/03eH'],
                reactionTooltip1: u.t['z4q3+/'],
                reactionTooltip2NInteractive: u.t.wkcffn,
                reactionTooltip2N: u.t.T4EYUl,
                reactionTooltip2: u.t.R2HykZ,
                reactionTooltip3NInteractive: u.t.OhtGx8,
                reactionTooltip3N: u.t.M8bwl5,
                reactionTooltip3: u.t.sNl6XV,
                reactionTooltipNInteractive: u.t.nsITOj,
                reactionTooltipN: u.t.dkieHx
            }
        },
        _ = v ? x.burst : x.standard,
        b = Math.max(0, (null !== (n = v ? (null == f ? void 0 : f.burst_count) : null == f ? void 0 : f.count) && void 0 !== n ? n : 0) - T.length),
        j = (0, o.Lh)(t);
    return 1 === T.length
        ? b > 0
            ? null != h
                ? u.intl.formatToPlainString(_.reactionTooltip1NInteractive, {
                      a: T[0],
                      n: b,
                      emojiName: j,
                      onClick: h
                  })
                : u.intl.formatToPlainString(_.reactionTooltip1N, {
                      a: T[0],
                      n: b,
                      emojiName: j
                  })
            : u.intl.formatToPlainString(_.reactionTooltip1, {
                  a: T[0],
                  emojiName: j
              })
        : 2 === T.length
          ? b > 0
              ? null != h
                  ? u.intl.formatToPlainString(_.reactionTooltip2NInteractive, {
                        a: T[0],
                        b: T[1],
                        n: b,
                        emojiName: j,
                        onClick: h
                    })
                  : u.intl.formatToPlainString(_.reactionTooltip2N, {
                        a: T[0],
                        b: T[1],
                        n: b,
                        emojiName: j
                    })
              : u.intl.formatToPlainString(_.reactionTooltip2, {
                    a: T[0],
                    b: T[1],
                    emojiName: j
                })
          : 3 === T.length
            ? b > 0
                ? null != h
                    ? u.intl.formatToPlainString(_.reactionTooltip3NInteractive, {
                          a: T[0],
                          b: T[1],
                          c: T[2],
                          n: b,
                          emojiName: j,
                          onClick: h
                      })
                    : u.intl.formatToPlainString(_.reactionTooltip3N, {
                          a: T[0],
                          b: T[1],
                          c: T[2],
                          n: b,
                          emojiName: j
                      })
                : u.intl.formatToPlainString(_.reactionTooltip3, {
                      a: T[0],
                      b: T[1],
                      c: T[2],
                      emojiName: j
                  })
            : null != h
              ? u.intl.formatToPlainString(_.reactionTooltipNInteractive, {
                    n: b,
                    emojiName: j,
                    onClick: h
                })
              : u.intl.formatToPlainString(_.reactionTooltipN, {
                    n: b,
                    emojiName: j
                });
}
