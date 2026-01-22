n.d(t, { i: () => _ }), n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(815807),
    s = n(734057),
    o = n(956703),
    l = n(994500),
    c = n(562153),
    u = n(505527),
    d = n(985018);
let f = 3,
    p = {
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
function _(e, t) {
    var n, r;
    let _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.v.NORMAL,
        h = arguments.length > 3 ? arguments[3] : void 0,
        m = o.A.getReactions(e.getChannelId(), e.id, t, f, _),
        g = s.A.getChannel(e.getChannelId()),
        E = null == g || g.isPrivate() ? null : g.getGuildId(),
        b = e.getReaction(t),
        y = _ === u.v.BURST,
        O = i()(Array.from(null != (n = null == m ? void 0 : m.values()) ? n : []))
            .reject((e) => l.A.isBlockedOrIgnored(e.id))
            .take(f)
            .map((e) => c.Ay.getName(E, null == g ? void 0 : g.id, e))
            .value();
    if (0 === O.length) return "";
    let A = y ? p.burst : p.standard,
        v = Math.max(
            0,
            (null != (r = y ? (null == b ? void 0 : b.burst_count) : null == b ? void 0 : b.count) ? r : 0) - O.length,
        ),
        S = (0, a.b3)(t);
    if (1 === O.length)
        if (!(v > 0))
            return d.intl.formatToPlainString(A.reactionTooltip1, {
                a: O[0],
                emojiName: S,
            });
        else if (null != h)
            return d.intl.format(A.reactionTooltip1NInteractive, {
                a: O[0],
                n: v,
                emojiName: S,
                onClick: h,
            });
        else
            return d.intl.formatToPlainString(A.reactionTooltip1N, {
                a: O[0],
                n: v,
                emojiName: S,
            });
    if (2 === O.length)
        if (!(v > 0))
            return d.intl.formatToPlainString(A.reactionTooltip2, {
                a: O[0],
                b: O[1],
                emojiName: S,
            });
        else if (null != h)
            return d.intl.format(A.reactionTooltip2NInteractive, {
                a: O[0],
                b: O[1],
                n: v,
                emojiName: S,
                onClick: h,
            });
        else
            return d.intl.formatToPlainString(A.reactionTooltip2N, {
                a: O[0],
                b: O[1],
                n: v,
                emojiName: S,
            });
    return 3 !== O.length
        ? null != h
            ? d.intl.format(A.reactionTooltipNInteractive, {
                  n: v,
                  emojiName: S,
                  onClick: h,
              })
            : d.intl.formatToPlainString(A.reactionTooltipN, {
                  n: v,
                  emojiName: S,
              })
        : v > 0
          ? null != h
              ? d.intl.format(A.reactionTooltip3NInteractive, {
                    a: O[0],
                    b: O[1],
                    c: O[2],
                    n: v,
                    emojiName: S,
                    onClick: h,
                })
              : d.intl.formatToPlainString(A.reactionTooltip3N, {
                    a: O[0],
                    b: O[1],
                    c: O[2],
                    n: v,
                    emojiName: S,
                })
          : d.intl.formatToPlainString(A.reactionTooltip3, {
                a: O[0],
                b: O[1],
                c: O[2],
                emojiName: S,
            });
}
