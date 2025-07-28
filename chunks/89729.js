(n.d(t, { g: () => p }), n(388685));
var i = n(392711),
    r = n.n(i),
    l = n(995774),
    o = n(592125),
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
    var n, i;
    let p = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.O.NORMAL,
        m = arguments.length > 3 ? arguments[3] : void 0,
        f = a.Z.getReactions(e.getChannelId(), e.id, t, 3, p),
        g = o.Z.getChannel(e.getChannelId()),
        b = null == g || g.isPrivate() ? null : g.getGuildId(),
        j = e.getReaction(t),
        O = p === u.O.BURST,
        y = r()(Array.from(null != (n = null == f ? void 0 : f.values()) ? n : []))
            .reject((e) => s.Z.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => c.ZP.getName(b, null == g ? void 0 : g.id, e))
            .value();
    if (0 === y.length) return '';
    let v = O ? h.burst : h.standard,
        T = Math.max(0, (null != (i = O ? (null == j ? void 0 : j.burst_count) : null == j ? void 0 : j.count) ? i : 0) - y.length),
        S = (0, l.Lh)(t);
    if (1 === y.length)
        if (!(T > 0))
            return d.intl.formatToPlainString(v.reactionTooltip1, {
                a: y[0],
                emojiName: S
            });
        else if (null != m)
            return d.intl.format(v.reactionTooltip1NInteractive, {
                a: y[0],
                n: T,
                emojiName: S,
                onClick: m
            });
        else
            return d.intl.formatToPlainString(v.reactionTooltip1N, {
                a: y[0],
                n: T,
                emojiName: S
            });
    if (2 === y.length)
        if (!(T > 0))
            return d.intl.formatToPlainString(v.reactionTooltip2, {
                a: y[0],
                b: y[1],
                emojiName: S
            });
        else if (null != m)
            return d.intl.format(v.reactionTooltip2NInteractive, {
                a: y[0],
                b: y[1],
                n: T,
                emojiName: S,
                onClick: m
            });
        else
            return d.intl.formatToPlainString(v.reactionTooltip2N, {
                a: y[0],
                b: y[1],
                n: T,
                emojiName: S
            });
    return 3 !== y.length
        ? null != m
            ? d.intl.format(v.reactionTooltipNInteractive, {
                  n: T,
                  emojiName: S,
                  onClick: m
              })
            : d.intl.formatToPlainString(v.reactionTooltipN, {
                  n: T,
                  emojiName: S
              })
        : T > 0
          ? null != m
              ? d.intl.format(v.reactionTooltip3NInteractive, {
                    a: y[0],
                    b: y[1],
                    c: y[2],
                    n: T,
                    emojiName: S,
                    onClick: m
                })
              : d.intl.formatToPlainString(v.reactionTooltip3N, {
                    a: y[0],
                    b: y[1],
                    c: y[2],
                    n: T,
                    emojiName: S
                })
          : d.intl.formatToPlainString(v.reactionTooltip3, {
                a: y[0],
                b: y[1],
                c: y[2],
                emojiName: S
            });
}
