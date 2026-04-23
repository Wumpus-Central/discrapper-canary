i.d(t, { i: () => m });
var n = i(735438),
    l = i.n(n),
    a = i(815807),
    s = i(734057),
    o = i(956703),
    r = i(994500),
    u = i(562153),
    d = i(505527),
    c = i(985018);
let h = {
    standard: {
        reactionTooltip1NInteractive: c.t.dgtYDJ,
        reactionTooltip1N: c.t.mXild1,
        reactionTooltip1: c.t.Oro30L,
        reactionTooltip2NInteractive: c.t["0GBwVR"],
        reactionTooltip2N: c.t.UWGs2n,
        reactionTooltip2: c.t["p+0jvt"],
        reactionTooltip3NInteractive: c.t["dK6/7W"],
        reactionTooltip3N: c.t["UnXdX/"],
        reactionTooltip3: c.t.bbPMcR,
        reactionTooltipNInteractive: c.t.Thj7LX,
        reactionTooltipN: c.t.CRrc7c,
    },
    burst: {
        reactionTooltip1NInteractive: c.t.G98B0W,
        reactionTooltip1N: c.t["u/03eN"],
        reactionTooltip1: c.t["z4q3+w"],
        reactionTooltip2NInteractive: c.t.wkcffp,
        reactionTooltip2N: c.t.T4EYUu,
        reactionTooltip2: c.t.R2HykW,
        reactionTooltip3NInteractive: c.t.OhtGxz,
        reactionTooltip3N: c.t["M8bwl+"],
        reactionTooltip3: c.t.sNl6XR,
        reactionTooltipNInteractive: c.t.nsITOq,
        reactionTooltipN: c.t.dkieH5,
    },
};
function m(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.v.NORMAL,
        n = arguments.length > 3 ? arguments[3] : void 0,
        m = o.A.getReactions(e.getChannelId(), e.id, t, 3, i),
        p = s.A.getChannel(e.getChannelId()),
        g = null == p || p.isPrivate() ? null : p.getGuildId(),
        A = e.getReaction(t),
        f = i === d.v.BURST,
        E = l()(Array.from(m?.values() ?? []))
            .reject((e) => r.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => u.Ay.getName(g, p?.id, e))
            .value();
    if (0 === E.length) return "";
    let T = f ? h.burst : h.standard,
        N = Math.max(0, ((f ? A?.burst_count : A?.count) ?? 0) - E.length),
        x = (0, a.b3)(t);
    if (1 === E.length)
        if (!(N > 0)) return c.intl.formatToPlainString(T.reactionTooltip1, { a: E[0], emojiName: x });
        else if (null != n)
            return c.intl.format(T.reactionTooltip1NInteractive, { a: E[0], n: N, emojiName: x, onClick: n });
        else return c.intl.formatToPlainString(T.reactionTooltip1N, { a: E[0], n: N, emojiName: x });
    if (2 === E.length)
        if (!(N > 0)) return c.intl.formatToPlainString(T.reactionTooltip2, { a: E[0], b: E[1], emojiName: x });
        else if (null != n)
            return c.intl.format(T.reactionTooltip2NInteractive, { a: E[0], b: E[1], n: N, emojiName: x, onClick: n });
        else return c.intl.formatToPlainString(T.reactionTooltip2N, { a: E[0], b: E[1], n: N, emojiName: x });
    return 3 !== E.length
        ? null != n
            ? c.intl.format(T.reactionTooltipNInteractive, { n: N, emojiName: x, onClick: n })
            : c.intl.formatToPlainString(T.reactionTooltipN, { n: N, emojiName: x })
        : N > 0
          ? null != n
              ? c.intl.format(T.reactionTooltip3NInteractive, {
                    a: E[0],
                    b: E[1],
                    c: E[2],
                    n: N,
                    emojiName: x,
                    onClick: n,
                })
              : c.intl.formatToPlainString(T.reactionTooltip3N, { a: E[0], b: E[1], c: E[2], n: N, emojiName: x })
          : c.intl.formatToPlainString(T.reactionTooltip3, { a: E[0], b: E[1], c: E[2], emojiName: x });
}
