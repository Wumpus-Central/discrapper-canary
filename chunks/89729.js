n.d(t, { g: () => h });
var i = n(392711),
    o = n.n(i),
    r = n(995774),
    a = n(592125),
    s = n(542578),
    l = n(699516),
    c = n(5192),
    u = n(566006),
    d = n(388032);
function h(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.O.NORMAL,
        h = arguments.length > 3 ? arguments[3] : void 0,
        p = s.Z.getReactions(e.getChannelId(), e.id, t, 3, i),
        m = a.Z.getChannel(e.getChannelId()),
        f = null == m || m.isPrivate() ? null : m.getGuildId(),
        g = e.getReaction(t),
        b = i === u.O.BURST,
        v = o()(p)
            .reject((e) => l.Z.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => c.ZP.getName(f, null == m ? void 0 : m.id, e))
            .value();
    if (0 === v.length) return '';
    let j = {
            standard: {
                reactionTooltip1NInteractive: d.t.dgtYDA,
                reactionTooltip1N: d.t.mXild3,
                reactionTooltip1: d.t.Oro30N,
                reactionTooltip2NInteractive: d.t['0GBwVV'],
                reactionTooltip2N: d.t.UWGs2t,
                reactionTooltip2: d.t['p+0jvr'],
                reactionTooltip3NInteractive: d.t['dK6/7e'],
                reactionTooltip3N: d.t.UnXdX1,
                reactionTooltip3: d.t.bbPMcX,
                reactionTooltipNInteractive: d.t.Thj7LS,
                reactionTooltipN: d.t.CRrc7e
            },
            burst: {
                reactionTooltip1NInteractive: d.t.G98B0d,
                reactionTooltip1N: d.t['u/03eH'],
                reactionTooltip1: d.t['z4q3+/'],
                reactionTooltip2NInteractive: d.t.wkcffn,
                reactionTooltip2N: d.t.T4EYUl,
                reactionTooltip2: d.t.R2HykZ,
                reactionTooltip3NInteractive: d.t.OhtGx8,
                reactionTooltip3N: d.t.M8bwl5,
                reactionTooltip3: d.t.sNl6XV,
                reactionTooltipNInteractive: d.t.nsITOj,
                reactionTooltipN: d.t.dkieHx
            }
        },
        O = b ? j.burst : j.standard,
        y = Math.max(0, (null !== (n = b ? (null == g ? void 0 : g.burst_count) : null == g ? void 0 : g.count) && void 0 !== n ? n : 0) - v.length),
        T = (0, r.Lh)(t);
    return 1 === v.length
        ? y > 0
            ? null != h
                ? d.NW.formatToPlainString(O.reactionTooltip1NInteractive, {
                      a: v[0],
                      n: y,
                      emojiName: T,
                      onClick: h
                  })
                : d.NW.formatToPlainString(O.reactionTooltip1N, {
                      a: v[0],
                      n: y,
                      emojiName: T
                  })
            : d.NW.formatToPlainString(O.reactionTooltip1, {
                  a: v[0],
                  emojiName: T
              })
        : 2 === v.length
          ? y > 0
              ? null != h
                  ? d.NW.formatToPlainString(O.reactionTooltip2NInteractive, {
                        a: v[0],
                        b: v[1],
                        n: y,
                        emojiName: T,
                        onClick: h
                    })
                  : d.NW.formatToPlainString(O.reactionTooltip2N, {
                        a: v[0],
                        b: v[1],
                        n: y,
                        emojiName: T
                    })
              : d.NW.formatToPlainString(O.reactionTooltip2, {
                    a: v[0],
                    b: v[1],
                    emojiName: T
                })
          : 3 === v.length
            ? y > 0
                ? null != h
                    ? d.NW.formatToPlainString(O.reactionTooltip3NInteractive, {
                          a: v[0],
                          b: v[1],
                          c: v[2],
                          n: y,
                          emojiName: T,
                          onClick: h
                      })
                    : d.NW.formatToPlainString(O.reactionTooltip3N, {
                          a: v[0],
                          b: v[1],
                          c: v[2],
                          n: y,
                          emojiName: T
                      })
                : d.NW.formatToPlainString(O.reactionTooltip3, {
                      a: v[0],
                      b: v[1],
                      c: v[2],
                      emojiName: T
                  })
            : null != h
              ? d.NW.formatToPlainString(O.reactionTooltipNInteractive, {
                    n: y,
                    emojiName: T,
                    onClick: h
                })
              : d.NW.formatToPlainString(O.reactionTooltipN, {
                    n: y,
                    emojiName: T
                });
}
