n.d(t, {
    g: function () {
        return h;
    }
});
var i = n(392711),
    o = n.n(i),
    a = n(995774),
    l = n(592125),
    s = n(542578),
    r = n(699516),
    c = n(5192),
    d = n(566006),
    u = n(388032);
function h(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.O.NORMAL,
        h = arguments.length > 3 ? arguments[3] : void 0,
        m = s.Z.getReactions(e.getChannelId(), e.id, t, 3, i),
        p = l.Z.getChannel(e.getChannelId()),
        f = null == p || p.isPrivate() ? null : p.getGuildId(),
        g = e.getReaction(t),
        v = i === d.O.BURST,
        b = o()(m)
            .reject((e) => r.Z.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => c.ZP.getName(f, null == p ? void 0 : p.id, e))
            .value();
    if (0 === b.length) return '';
    let T = {
            standard: {
                reactionTooltip1NInteractive: u.t.dgtYDA,
                reactionTooltip1N: u.t.mXild3,
                reactionTooltip1: u.t.Oro30N,
                reactionTooltip2NInteractive: u.t['0GBwVV'],
                reactionTooltip2N: u.t.UWGs2t,
                reactionTooltip2: u.t['p+0jvr'],
                reactionTooltip3NInteractive: u.t['dK6/7e'],
                reactionTooltip3N: u.t.UnXdX1,
                reactionTooltip3: u.t.bbPMcX,
                reactionTooltipNInteractive: u.t.Thj7LS,
                reactionTooltipN: u.t.CRrc7e
            },
            burst: {
                reactionTooltip1NInteractive: u.t.G98B0d,
                reactionTooltip1N: u.t['u/03eH'],
                reactionTooltip1: u.t['z4q3+/'],
                reactionTooltip2NInteractive: u.t.wkcffn,
                reactionTooltip2N: u.t.T4EYUl,
                reactionTooltip2: u.t.R2HykZ,
                reactionTooltip3NInteractive: u.t.OhtGx8,
                reactionTooltip3N: u.t.M8bwl5,
                reactionTooltip3: u.t.sNl6XV,
                reactionTooltipNInteractive: u.t.nsITOj,
                reactionTooltipN: u.t.dkieHx
            }
        },
        x = v ? T.burst : T.standard,
        _ = Math.max(0, (null !== (n = v ? (null == g ? void 0 : g.burst_count) : null == g ? void 0 : g.count) && void 0 !== n ? n : 0) - b.length),
        j = (0, a.Lh)(t);
    if (1 === b.length)
        return _ > 0
            ? null != h
                ? u.intl.formatToPlainString(x.reactionTooltip1NInteractive, {
                      a: b[0],
                      n: _,
                      emojiName: j,
                      onClick: h
                  })
                : u.intl.formatToPlainString(x.reactionTooltip1N, {
                      a: b[0],
                      n: _,
                      emojiName: j
                  })
            : u.intl.formatToPlainString(x.reactionTooltip1, {
                  a: b[0],
                  emojiName: j
              });
    if (2 === b.length)
        return _ > 0
            ? null != h
                ? u.intl.formatToPlainString(x.reactionTooltip2NInteractive, {
                      a: b[0],
                      b: b[1],
                      n: _,
                      emojiName: j,
                      onClick: h
                  })
                : u.intl.formatToPlainString(x.reactionTooltip2N, {
                      a: b[0],
                      b: b[1],
                      n: _,
                      emojiName: j
                  })
            : u.intl.formatToPlainString(x.reactionTooltip2, {
                  a: b[0],
                  b: b[1],
                  emojiName: j
              });
    if (3 === b.length)
        return _ > 0
            ? null != h
                ? u.intl.formatToPlainString(x.reactionTooltip3NInteractive, {
                      a: b[0],
                      b: b[1],
                      c: b[2],
                      n: _,
                      emojiName: j,
                      onClick: h
                  })
                : u.intl.formatToPlainString(x.reactionTooltip3N, {
                      a: b[0],
                      b: b[1],
                      c: b[2],
                      n: _,
                      emojiName: j
                  })
            : u.intl.formatToPlainString(x.reactionTooltip3, {
                  a: b[0],
                  b: b[1],
                  c: b[2],
                  emojiName: j
              });
    else
        return null != h
            ? u.intl.formatToPlainString(x.reactionTooltipNInteractive, {
                  n: _,
                  emojiName: j,
                  onClick: h
              })
            : u.intl.formatToPlainString(x.reactionTooltipN, {
                  n: _,
                  emojiName: j
              });
}
