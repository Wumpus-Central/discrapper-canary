"use strict";
n.d(t, { A: () => g, Y: () => m }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(861382),
    o = n(408557),
    l = n(132422),
    u = n(615284),
    c = n(429196),
    d = n(575293),
    _ = n(76623),
    f = n(355622),
    p = n(416379),
    h = n(111314);
function m(e) {
    let {
            channel: t,
            type: n,
            activeCommand: m,
            pendingReply: g,
            pendingScheduledMessage: E,
            selectedAutocompleteInputType: A,
            selectedAutocompleteInputError: I,
        } = e,
        { activeCommandOption: T, activeCommandOptionStates: y } = (0, a.cf)([s.A], () => ({
            activeCommandOption: s.A.getActiveOption(t.id),
            activeCommandOptionStates: s.A.getOptionStates(t.id),
        })),
        S = (0, u.x)(t);
    return i.useMemo(() => {
        let e = [],
            i = [];
        return (
            null != t.guild_id &&
                n === f.oU.NORMAL &&
                i.push((0, r.jsx)(d.A, { guildId: t.guild_id, channel: t, className: h.UW })),
            null != m &&
                e.push(
                    (0, r.jsx)(o.A, { activeCommand: m, activeOption: T ?? null, optionStates: y, channelId: t.id }),
                ),
            null != g && e.push((0, r.jsx)(p.A, { reply: g, chatInputType: n })),
            S && e.push((0, r.jsx)(u.X, {})),
            null != E && e.push((0, r.jsx)(_.C, { pendingScheduledMessage: E })),
            "gameMentionInput" === A && i.push((0, r.jsx)(l.S, {})),
            "timestampMentionInput" === A && i.push((0, r.jsx)(c.S, { error: I ?? !1 })),
            { stacked: e, floating: i }
        );
    }, [m, T, y, t, g, S, n, E, A, I]);
}
function g(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, r.jsx)("div", { children: e }, t)),
        a = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === a.length
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  a.length > 0 && (0, r.jsx)("div", { className: h.Vq, children: a }),
                  n.length > 0 && (0, r.jsx)("div", { className: h.MD, children: n }),
              ],
          });
}
