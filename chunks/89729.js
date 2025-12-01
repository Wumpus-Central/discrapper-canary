n.d(t, { g: () => _ }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(995774),
    o = n(592125),
    s = n(542578),
    l = n(699516),
    c = n(5192),
    u = n(566006),
    d = n(388032);
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
    let _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.O.NORMAL,
        m = arguments.length > 3 ? arguments[3] : void 0,
        h = s.Z.getReactions(e.getChannelId(), e.id, t, f, _),
        g = o.Z.getChannel(e.getChannelId()),
        E = null == g || g.isPrivate() ? null : g.getGuildId(),
        b = e.getReaction(t),
        y = _ === u.O.BURST,
        O = i()(Array.from(null != (n = null == h ? void 0 : h.values()) ? n : []))
            .reject((e) => l.Z.isBlockedOrIgnored(e.id))
            .take(f)
            .map((e) => c.ZP.getName(E, null == g ? void 0 : g.id, e))
            .value();
    if (0 === O.length) return "";
    let v = y ? p.burst : p.standard,
        S = Math.max(
            0,
            (null != (r = y ? (null == b ? void 0 : b.burst_count) : null == b ? void 0 : b.count) ? r : 0) - O.length,
        ),
        I = (0, a.Lh)(t);
    if (1 === O.length)
        if (!(S > 0))
            return d.intl.formatToPlainString(v.reactionTooltip1, {
                a: O[0],
                emojiName: I,
            });
        else if (null != m)
            return d.intl.format(v.reactionTooltip1NInteractive, {
                a: O[0],
                n: S,
                emojiName: I,
                onClick: m,
            });
        else
            return d.intl.formatToPlainString(v.reactionTooltip1N, {
                a: O[0],
                n: S,
                emojiName: I,
            });
    if (2 === O.length)
        if (!(S > 0))
            return d.intl.formatToPlainString(v.reactionTooltip2, {
                a: O[0],
                b: O[1],
                emojiName: I,
            });
        else if (null != m)
            return d.intl.format(v.reactionTooltip2NInteractive, {
                a: O[0],
                b: O[1],
                n: S,
                emojiName: I,
                onClick: m,
            });
        else
            return d.intl.formatToPlainString(v.reactionTooltip2N, {
                a: O[0],
                b: O[1],
                n: S,
                emojiName: I,
            });
    return 3 !== O.length
        ? null != m
            ? d.intl.format(v.reactionTooltipNInteractive, {
                  n: S,
                  emojiName: I,
                  onClick: m,
              })
            : d.intl.formatToPlainString(v.reactionTooltipN, {
                  n: S,
                  emojiName: I,
              })
        : S > 0
          ? null != m
              ? d.intl.format(v.reactionTooltip3NInteractive, {
                    a: O[0],
                    b: O[1],
                    c: O[2],
                    n: S,
                    emojiName: I,
                    onClick: m,
                })
              : d.intl.formatToPlainString(v.reactionTooltip3N, {
                    a: O[0],
                    b: O[1],
                    c: O[2],
                    n: S,
                    emojiName: I,
                })
          : d.intl.formatToPlainString(v.reactionTooltip3, {
                a: O[0],
                b: O[1],
                c: O[2],
                emojiName: I,
            });
}
