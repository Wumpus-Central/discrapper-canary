n.d(t, {
    i: () => h,
}),
    n(896048);
var i = n(735438),
    l = n.n(i),
    r = n(815807),
    o = n(734057),
    a = n(956703),
    s = n(994500),
    u = n(562153),
    c = n(505527),
    d = n(985018);
let p = {
    standard: {
        reactionTooltip1NInteractive: d.t.dgtYDJ,
        reactionTooltip1N: d.t.mXild1,
        reactionTooltip1: d.t.Oro30L,
        reactionTooltip2NInteractive: d.t["0GBwVR"],
        reactionTooltip2N: d.t.UWGs2n,
        reactionTooltip2: d.t["p+0jvt"],
        reactionTooltip3NInteractive: d.t["dK6/7W"],
        reactionTooltip3N: d.t["UnXdX/"],
        reactionTooltip3: d.t.bbPMcR,
        reactionTooltipNInteractive: d.t.Thj7LX,
        reactionTooltipN: d.t.CRrc7c,
    },
    burst: {
        reactionTooltip1NInteractive: d.t.G98B0W,
        reactionTooltip1N: d.t["u/03eN"],
        reactionTooltip1: d.t["z4q3+w"],
        reactionTooltip2NInteractive: d.t.wkcffp,
        reactionTooltip2N: d.t.T4EYUu,
        reactionTooltip2: d.t.R2HykW,
        reactionTooltip3NInteractive: d.t.OhtGxz,
        reactionTooltip3N: d.t["M8bwl+"],
        reactionTooltip3: d.t.sNl6XR,
        reactionTooltipNInteractive: d.t.nsITOq,
        reactionTooltipN: d.t.dkieH5,
    },
};

function h(e, t) {
    var n, i;
    let h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.v.NORMAL,
        m = arguments.length > 3 ? arguments[3] : void 0,
        f = a.A.getReactions(e.getChannelId(), e.id, t, 3, h),
        g = o.A.getChannel(e.getChannelId()),
        b = null == g || g.isPrivate() ? null : g.getGuildId(),
        y = e.getReaction(t),
        O = h === c.v.BURST,
        v = l()(Array.from(null != (n = null == f ? void 0 : f.values()) ? n : []))
            .reject((e) => s.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => u.Ay.getName(b, null == g ? void 0 : g.id, e))
            .value();
    if (0 === v.length) return "";
    let j = O ? p.burst : p.standard,
        A = Math.max(
            0,
            (null != (i = O ? (null == y ? void 0 : y.burst_count) : null == y ? void 0 : y.count) ? i : 0) - v.length,
        ),
        T = (0, r.b3)(t);
    if (1 === v.length)
        if (!(A > 0))
            return d.intl.formatToPlainString(j.reactionTooltip1, {
                a: v[0],
                emojiName: T,
            });
        else if (null != m)
            return d.intl.format(j.reactionTooltip1NInteractive, {
                a: v[0],
                n: A,
                emojiName: T,
                onClick: m,
            });
        else
            return d.intl.formatToPlainString(j.reactionTooltip1N, {
                a: v[0],
                n: A,
                emojiName: T,
            });
    if (2 === v.length)
        if (!(A > 0))
            return d.intl.formatToPlainString(j.reactionTooltip2, {
                a: v[0],
                b: v[1],
                emojiName: T,
            });
        else if (null != m)
            return d.intl.format(j.reactionTooltip2NInteractive, {
                a: v[0],
                b: v[1],
                n: A,
                emojiName: T,
                onClick: m,
            });
        else
            return d.intl.formatToPlainString(j.reactionTooltip2N, {
                a: v[0],
                b: v[1],
                n: A,
                emojiName: T,
            });
    return 3 !== v.length
        ? null != m
            ? d.intl.format(j.reactionTooltipNInteractive, {
                  n: A,
                  emojiName: T,
                  onClick: m,
              })
            : d.intl.formatToPlainString(j.reactionTooltipN, {
                  n: A,
                  emojiName: T,
              })
        : A > 0
          ? null != m
              ? d.intl.format(j.reactionTooltip3NInteractive, {
                    a: v[0],
                    b: v[1],
                    c: v[2],
                    n: A,
                    emojiName: T,
                    onClick: m,
                })
              : d.intl.formatToPlainString(j.reactionTooltip3N, {
                    a: v[0],
                    b: v[1],
                    c: v[2],
                    n: A,
                    emojiName: T,
                })
          : d.intl.formatToPlainString(j.reactionTooltip3, {
                a: v[0],
                b: v[1],
                c: v[2],
                emojiName: T,
            });
}
