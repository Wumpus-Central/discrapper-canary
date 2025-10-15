n.d(t, { g: () => p }), n(388685);
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
    _ = {
        standard: {
            reactionTooltip1NInteractive: d.t.dgtYDA,
            reactionTooltip1N: d.t.mXild3,
            reactionTooltip1: d.t.Oro30N,
            reactionTooltip2NInteractive: d.t["0GBwVV"],
            reactionTooltip2N: d.t.UWGs2t,
            reactionTooltip2: d.t["p+0jvr"],
            reactionTooltip3NInteractive: d.t["dK6/7e"],
            reactionTooltip3N: d.t.UnXdX1,
            reactionTooltip3: d.t.bbPMcX,
            reactionTooltipNInteractive: d.t.Thj7LS,
            reactionTooltipN: d.t.CRrc7e,
        },
        burst: {
            reactionTooltip1NInteractive: d.t.G98B0d,
            reactionTooltip1N: d.t["u/03eH"],
            reactionTooltip1: d.t["z4q3+/"],
            reactionTooltip2NInteractive: d.t.wkcffn,
            reactionTooltip2N: d.t.T4EYUl,
            reactionTooltip2: d.t.R2HykZ,
            reactionTooltip3NInteractive: d.t.OhtGx8,
            reactionTooltip3N: d.t.M8bwl5,
            reactionTooltip3: d.t.sNl6XV,
            reactionTooltipNInteractive: d.t.nsITOj,
            reactionTooltipN: d.t.dkieHx,
        },
    };
function p(e, t) {
    var n, r;
    let p = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.O.NORMAL,
        h = arguments.length > 3 ? arguments[3] : void 0,
        m = s.Z.getReactions(e.getChannelId(), e.id, t, f, p),
        g = o.Z.getChannel(e.getChannelId()),
        E = null == g || g.isPrivate() ? null : g.getGuildId(),
        b = e.getReaction(t),
        y = p === u.O.BURST,
        O = i()(Array.from(null != (n = null == m ? void 0 : m.values()) ? n : []))
            .reject((e) => l.Z.isBlockedOrIgnored(e.id))
            .take(f)
            .map((e) => c.ZP.getName(E, null == g ? void 0 : g.id, e))
            .value();
    if (0 === O.length) return "";
    let v = y ? _.burst : _.standard,
        I = Math.max(
            0,
            (null != (r = y ? (null == b ? void 0 : b.burst_count) : null == b ? void 0 : b.count) ? r : 0) - O.length,
        ),
        T = (0, a.Lh)(t);
    if (1 === O.length)
        if (!(I > 0))
            return d.intl.formatToPlainString(v.reactionTooltip1, {
                a: O[0],
                emojiName: T,
            });
        else if (null != h)
            return d.intl.format(v.reactionTooltip1NInteractive, {
                a: O[0],
                n: I,
                emojiName: T,
                onClick: h,
            });
        else
            return d.intl.formatToPlainString(v.reactionTooltip1N, {
                a: O[0],
                n: I,
                emojiName: T,
            });
    if (2 === O.length)
        if (!(I > 0))
            return d.intl.formatToPlainString(v.reactionTooltip2, {
                a: O[0],
                b: O[1],
                emojiName: T,
            });
        else if (null != h)
            return d.intl.format(v.reactionTooltip2NInteractive, {
                a: O[0],
                b: O[1],
                n: I,
                emojiName: T,
                onClick: h,
            });
        else
            return d.intl.formatToPlainString(v.reactionTooltip2N, {
                a: O[0],
                b: O[1],
                n: I,
                emojiName: T,
            });
    return 3 !== O.length
        ? null != h
            ? d.intl.format(v.reactionTooltipNInteractive, {
                  n: I,
                  emojiName: T,
                  onClick: h,
              })
            : d.intl.formatToPlainString(v.reactionTooltipN, {
                  n: I,
                  emojiName: T,
              })
        : I > 0
          ? null != h
              ? d.intl.format(v.reactionTooltip3NInteractive, {
                    a: O[0],
                    b: O[1],
                    c: O[2],
                    n: I,
                    emojiName: T,
                    onClick: h,
                })
              : d.intl.formatToPlainString(v.reactionTooltip3N, {
                    a: O[0],
                    b: O[1],
                    c: O[2],
                    n: I,
                    emojiName: T,
                })
          : d.intl.formatToPlainString(v.reactionTooltip3, {
                a: O[0],
                b: O[1],
                c: O[2],
                emojiName: T,
            });
}
