i.d(t, { g: () => h });
var n = i(392711),
    a = i.n(n),
    o = i(995774),
    s = i(592125),
    l = i(542578),
    r = i(699516),
    c = i(5192),
    d = i(566006),
    u = i(388032);
function h(e, t) {
    var i;
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.O.NORMAL,
        h = arguments.length > 3 ? arguments[3] : void 0,
        m = l.Z.getReactions(e.getChannelId(), e.id, t, 3, n),
        p = s.Z.getChannel(e.getChannelId()),
        g = null == p || p.isPrivate() ? null : p.getGuildId(),
        f = e.getReaction(t),
        v = n === d.O.BURST,
        x = a()(m)
            .reject((e) => r.Z.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => c.ZP.getName(g, null == p ? void 0 : p.id, e))
            .value();
    if (0 === x.length) return '';
    let b = {
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
        T = v ? b.burst : b.standard,
        j = Math.max(0, (null !== (i = v ? (null == f ? void 0 : f.burst_count) : null == f ? void 0 : f.count) && void 0 !== i ? i : 0) - x.length),
        _ = (0, o.Lh)(t);
    return 1 === x.length
        ? j > 0
            ? null != h
                ? u.intl.formatToPlainString(T.reactionTooltip1NInteractive, {
                      a: x[0],
                      n: j,
                      emojiName: _,
                      onClick: h
                  })
                : u.intl.formatToPlainString(T.reactionTooltip1N, {
                      a: x[0],
                      n: j,
                      emojiName: _
                  })
            : u.intl.formatToPlainString(T.reactionTooltip1, {
                  a: x[0],
                  emojiName: _
              })
        : 2 === x.length
          ? j > 0
              ? null != h
                  ? u.intl.formatToPlainString(T.reactionTooltip2NInteractive, {
                        a: x[0],
                        b: x[1],
                        n: j,
                        emojiName: _,
                        onClick: h
                    })
                  : u.intl.formatToPlainString(T.reactionTooltip2N, {
                        a: x[0],
                        b: x[1],
                        n: j,
                        emojiName: _
                    })
              : u.intl.formatToPlainString(T.reactionTooltip2, {
                    a: x[0],
                    b: x[1],
                    emojiName: _
                })
          : 3 === x.length
            ? j > 0
                ? null != h
                    ? u.intl.formatToPlainString(T.reactionTooltip3NInteractive, {
                          a: x[0],
                          b: x[1],
                          c: x[2],
                          n: j,
                          emojiName: _,
                          onClick: h
                      })
                    : u.intl.formatToPlainString(T.reactionTooltip3N, {
                          a: x[0],
                          b: x[1],
                          c: x[2],
                          n: j,
                          emojiName: _
                      })
                : u.intl.formatToPlainString(T.reactionTooltip3, {
                      a: x[0],
                      b: x[1],
                      c: x[2],
                      emojiName: _
                  })
            : null != h
              ? u.intl.formatToPlainString(T.reactionTooltipNInteractive, {
                    n: j,
                    emojiName: _,
                    onClick: h
                })
              : u.intl.formatToPlainString(T.reactionTooltipN, {
                    n: j,
                    emojiName: _
                });
}
