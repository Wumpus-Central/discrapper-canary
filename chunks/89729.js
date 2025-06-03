n.d(t, { g: () => p }), n(388685);
var i = n(392711),
    r = n.n(i),
    o = n(995774),
    l = n(592125),
    s = n(542578),
    a = n(699516),
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
        f = arguments.length > 3 ? arguments[3] : void 0,
        m = s.Z.getReactions(e.getChannelId(), e.id, t, 3, p),
        g = l.Z.getChannel(e.getChannelId()),
        b = null == g || g.isPrivate() ? null : g.getGuildId(),
        O = e.getReaction(t),
        v = p === u.O.BURST,
        j = r()(Array.from(null != (n = null == m ? void 0 : m.values()) ? n : []))
            .reject((e) => a.Z.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => c.ZP.getName(b, null == g ? void 0 : g.id, e))
            .value();
    if (0 === j.length) return '';
    let y = v ? h.burst : h.standard,
        _ = Math.max(0, (null != (i = v ? (null == O ? void 0 : O.burst_count) : null == O ? void 0 : O.count) ? i : 0) - j.length),
        S = (0, o.Lh)(t);
    if (1 === j.length)
        if (!(_ > 0))
            return d.intl.formatToPlainString(y.reactionTooltip1, {
                a: j[0],
                emojiName: S
            });
        else if (null != f)
            return d.intl.format(y.reactionTooltip1NInteractive, {
                a: j[0],
                n: _,
                emojiName: S,
                onClick: f
            });
        else
            return d.intl.formatToPlainString(y.reactionTooltip1N, {
                a: j[0],
                n: _,
                emojiName: S
            });
    if (2 === j.length)
        if (!(_ > 0))
            return d.intl.formatToPlainString(y.reactionTooltip2, {
                a: j[0],
                b: j[1],
                emojiName: S
            });
        else if (null != f)
            return d.intl.format(y.reactionTooltip2NInteractive, {
                a: j[0],
                b: j[1],
                n: _,
                emojiName: S,
                onClick: f
            });
        else
            return d.intl.formatToPlainString(y.reactionTooltip2N, {
                a: j[0],
                b: j[1],
                n: _,
                emojiName: S
            });
    return 3 !== j.length
        ? null != f
            ? d.intl.format(y.reactionTooltipNInteractive, {
                  n: _,
                  emojiName: S,
                  onClick: f
              })
            : d.intl.formatToPlainString(y.reactionTooltipN, {
                  n: _,
                  emojiName: S
              })
        : _ > 0
          ? null != f
              ? d.intl.format(y.reactionTooltip3NInteractive, {
                    a: j[0],
                    b: j[1],
                    c: j[2],
                    n: _,
                    emojiName: S,
                    onClick: f
                })
              : d.intl.formatToPlainString(y.reactionTooltip3N, {
                    a: j[0],
                    b: j[1],
                    c: j[2],
                    n: _,
                    emojiName: S
                })
          : d.intl.formatToPlainString(y.reactionTooltip3, {
                a: j[0],
                b: j[1],
                c: j[2],
                emojiName: S
            });
}
