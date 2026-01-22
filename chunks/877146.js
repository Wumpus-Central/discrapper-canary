n.d(t, {
    A: () => g,
    Y: () => m,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(861382),
    o = n(408557),
    l = n(132422),
    c = n(615284),
    u = n(429196),
    d = n(575293),
    f = n(76623),
    p = n(355622),
    _ = n(416379),
    h = n(111314);
function m(e) {
    let {
            channel: t,
            type: n,
            activeCommand: m,
            pendingReply: g,
            pendingScheduledMessage: E,
            selectedAutocompleteInputType: b,
            selectedAutocompleteInputError: y,
        } = e,
        { activeCommandOption: O, activeCommandOptionStates: A } = (0, a.cf)([s.A], () => ({
            activeCommandOption: s.A.getActiveOption(t.id),
            activeCommandOptionStates: s.A.getOptionStates(t.id),
        })),
        v = (0, c.x)(t);
    return i.useMemo(() => {
        let e = [],
            i = [];
        return (
            null != t.guild_id &&
                n === p.oU.NORMAL &&
                i.push(
                    (0, r.jsx)(d.A, {
                        guildId: t.guild_id,
                        channel: t,
                        className: h.UW,
                    }),
                ),
            null != m &&
                e.push(
                    (0, r.jsx)(o.A, {
                        activeCommand: m,
                        activeOption: null != O ? O : null,
                        optionStates: A,
                        channelId: t.id,
                    }),
                ),
            null != g &&
                e.push(
                    (0, r.jsx)(_.A, {
                        reply: g,
                        chatInputType: n,
                    }),
                ),
            v && e.push((0, r.jsx)(c.X, {})),
            null != E && e.push((0, r.jsx)(f.C, { pendingScheduledMessage: E })),
            "gameMentionInput" === b && i.push((0, r.jsx)(l.S, {})),
            "timestampMentionInput" === b && i.push((0, r.jsx)(u.S, { error: null != y && y })),
            {
                stacked: e,
                floating: i,
            }
        );
    }, [m, O, A, t, g, v, n, E, b, y]);
}
function g(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, r.jsx)("div", { children: e }, t)),
        a = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === a.length
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  a.length > 0 &&
                      (0, r.jsx)("div", {
                          className: h.Vq,
                          children: a,
                      }),
                  n.length > 0 &&
                      (0, r.jsx)("div", {
                          className: h.MD,
                          children: n,
                      }),
              ],
          });
}
