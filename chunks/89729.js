n.d(t, { g: () => p }), n(388685);
var i = n(392711),
    r = n.n(i),
    o = n(995774),
    a = n(592125),
    s = n(542578),
    l = n(699516),
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
    var n, i;
    let p = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.O.NORMAL,
        m = arguments.length > 3 ? arguments[3] : void 0,
        f = s.Z.getReactions(e.getChannelId(), e.id, t, 3, p),
        g = a.Z.getChannel(e.getChannelId()),
        b = null == g || g.isPrivate() ? null : g.getGuildId(),
        j = e.getReaction(t),
        v = p === u.O.BURST,
        O = r()(Array.from(null != (n = null == f ? void 0 : f.values()) ? n : []))
            .reject((e) => l.Z.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => c.ZP.getName(b, null == g ? void 0 : g.id, e))
            .value();
    if (0 === O.length) return '';
    let y = v ? h.burst : h.standard,
        x = Math.max(0, (null != (i = v ? (null == j ? void 0 : j.burst_count) : null == j ? void 0 : j.count) ? i : 0) - O.length),
        T = (0, o.Lh)(t);
    if (1 === O.length)
        if (!(x > 0))
            return d.intl.formatToPlainString(y.reactionTooltip1, {
                a: O[0],
                emojiName: T
            });
        else if (null != m)
            return d.intl.format(y.reactionTooltip1NInteractive, {
                a: O[0],
                n: x,
                emojiName: T,
                onClick: m
            });
        else
            return d.intl.formatToPlainString(y.reactionTooltip1N, {
                a: O[0],
                n: x,
                emojiName: T
            });
    if (2 === O.length)
        if (!(x > 0))
            return d.intl.formatToPlainString(y.reactionTooltip2, {
                a: O[0],
                b: O[1],
                emojiName: T
            });
        else if (null != m)
            return d.intl.format(y.reactionTooltip2NInteractive, {
                a: O[0],
                b: O[1],
                n: x,
                emojiName: T,
                onClick: m
            });
        else
            return d.intl.formatToPlainString(y.reactionTooltip2N, {
                a: O[0],
                b: O[1],
                n: x,
                emojiName: T
            });
    return 3 !== O.length
        ? null != m
            ? d.intl.format(y.reactionTooltipNInteractive, {
                  n: x,
                  emojiName: T,
                  onClick: m
              })
            : d.intl.formatToPlainString(y.reactionTooltipN, {
                  n: x,
                  emojiName: T
              })
        : x > 0
          ? null != m
              ? d.intl.format(y.reactionTooltip3NInteractive, {
                    a: O[0],
                    b: O[1],
                    c: O[2],
                    n: x,
                    emojiName: T,
                    onClick: m
                })
              : d.intl.formatToPlainString(y.reactionTooltip3N, {
                    a: O[0],
                    b: O[1],
                    c: O[2],
                    n: x,
                    emojiName: T
                })
          : d.intl.formatToPlainString(y.reactionTooltip3, {
                a: O[0],
                b: O[1],
                c: O[2],
                emojiName: T
            });
}
