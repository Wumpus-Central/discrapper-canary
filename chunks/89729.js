n.d(t, { g: () => p });
var i = n(392711),
    r = n.n(i),
    o = n(995774),
    l = n(592125),
    a = n(542578),
    s = n(699516),
    c = n(5192),
    u = n(566006),
    d = n(388032);
let h = {
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
};
function p(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.O.NORMAL,
        p = arguments.length > 3 ? arguments[3] : void 0,
        m = a.Z.getReactions(e.getChannelId(), e.id, t, 3, i),
        f = l.Z.getChannel(e.getChannelId()),
        g = null == f || f.isPrivate() ? null : f.getGuildId(),
        b = e.getReaction(t),
        j = i === u.O.BURST,
        O = r()(m)
            .reject((e) => s.Z.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => c.ZP.getName(g, null == f ? void 0 : f.id, e))
            .value();
    if (0 === O.length) return '';
    let v = j ? h.burst : h.standard,
        y = Math.max(0, (null != (n = j ? (null == b ? void 0 : b.burst_count) : null == b ? void 0 : b.count) ? n : 0) - O.length),
        T = (0, o.Lh)(t);
    if (1 === O.length)
        if (!(y > 0))
            return d.intl.formatToPlainString(v.reactionTooltip1, {
                a: O[0],
                emojiName: T
            });
        else if (null != p)
            return d.intl.format(v.reactionTooltip1NInteractive, {
                a: O[0],
                n: y,
                emojiName: T,
                onClick: p
            });
        else
            return d.intl.formatToPlainString(v.reactionTooltip1N, {
                a: O[0],
                n: y,
                emojiName: T
            });
    if (2 === O.length)
        if (!(y > 0))
            return d.intl.formatToPlainString(v.reactionTooltip2, {
                a: O[0],
                b: O[1],
                emojiName: T
            });
        else if (null != p)
            return d.intl.format(v.reactionTooltip2NInteractive, {
                a: O[0],
                b: O[1],
                n: y,
                emojiName: T,
                onClick: p
            });
        else
            return d.intl.formatToPlainString(v.reactionTooltip2N, {
                a: O[0],
                b: O[1],
                n: y,
                emojiName: T
            });
    return 3 !== O.length
        ? null != p
            ? d.intl.format(v.reactionTooltipNInteractive, {
                  n: y,
                  emojiName: T,
                  onClick: p
              })
            : d.intl.formatToPlainString(v.reactionTooltipN, {
                  n: y,
                  emojiName: T
              })
        : y > 0
          ? null != p
              ? d.intl.format(v.reactionTooltip3NInteractive, {
                    a: O[0],
                    b: O[1],
                    c: O[2],
                    n: y,
                    emojiName: T,
                    onClick: p
                })
              : d.intl.formatToPlainString(v.reactionTooltip3N, {
                    a: O[0],
                    b: O[1],
                    c: O[2],
                    n: y,
                    emojiName: T
                })
          : d.intl.formatToPlainString(v.reactionTooltip3, {
                a: O[0],
                b: O[1],
                c: O[2],
                emojiName: T
            });
}
