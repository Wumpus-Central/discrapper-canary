n.d(t, { g: () => p });
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
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.O.NORMAL,
        p = arguments.length > 3 ? arguments[3] : void 0,
        m = s.Z.getReactions(e.getChannelId(), e.id, t, 3, i),
        f = a.Z.getChannel(e.getChannelId()),
        g = null == f || f.isPrivate() ? null : f.getGuildId(),
        b = e.getReaction(t),
        j = i === u.O.BURST,
        v = r()(m)
            .reject((e) => l.Z.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => c.ZP.getName(g, null == f ? void 0 : f.id, e))
            .value();
    if (0 === v.length) return '';
    let O = j ? h.burst : h.standard,
        y = Math.max(0, (null != (n = j ? (null == b ? void 0 : b.burst_count) : null == b ? void 0 : b.count) ? n : 0) - v.length),
        x = (0, o.Lh)(t);
    if (1 === v.length)
        if (!(y > 0))
            return d.NW.formatToPlainString(O.reactionTooltip1, {
                a: v[0],
                emojiName: x
            });
        else if (null != p)
            return d.NW.format(O.reactionTooltip1NInteractive, {
                a: v[0],
                n: y,
                emojiName: x,
                onClick: p
            });
        else
            return d.NW.formatToPlainString(O.reactionTooltip1N, {
                a: v[0],
                n: y,
                emojiName: x
            });
    if (2 === v.length)
        if (!(y > 0))
            return d.NW.formatToPlainString(O.reactionTooltip2, {
                a: v[0],
                b: v[1],
                emojiName: x
            });
        else if (null != p)
            return d.NW.format(O.reactionTooltip2NInteractive, {
                a: v[0],
                b: v[1],
                n: y,
                emojiName: x,
                onClick: p
            });
        else
            return d.NW.formatToPlainString(O.reactionTooltip2N, {
                a: v[0],
                b: v[1],
                n: y,
                emojiName: x
            });
    return 3 !== v.length
        ? null != p
            ? d.NW.format(O.reactionTooltipNInteractive, {
                  n: y,
                  emojiName: x,
                  onClick: p
              })
            : d.NW.formatToPlainString(O.reactionTooltipN, {
                  n: y,
                  emojiName: x
              })
        : y > 0
          ? null != p
              ? d.NW.format(O.reactionTooltip3NInteractive, {
                    a: v[0],
                    b: v[1],
                    c: v[2],
                    n: y,
                    emojiName: x,
                    onClick: p
                })
              : d.NW.formatToPlainString(O.reactionTooltip3N, {
                    a: v[0],
                    b: v[1],
                    c: v[2],
                    n: y,
                    emojiName: x
                })
          : d.NW.formatToPlainString(O.reactionTooltip3, {
                a: v[0],
                b: v[1],
                c: v[2],
                emojiName: x
            });
}
