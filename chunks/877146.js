"use strict";
n.d(t, { A: () => E, Y: () => h }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(861382),
    o = n(408557),
    l = n(615284),
    u = n(429196),
    c = n(575293),
    d = n(76623),
    _ = n(355622),
    f = n(416379),
    p = n(266599);
function h(e) {
    let {
            channel: t,
            type: n,
            activeCommand: h,
            pendingReply: E,
            pendingScheduledMessage: m,
            selectedAutocompleteInputType: g,
            selectedAutocompleteInputError: A,
        } = e,
        { activeCommandOption: I, activeCommandOptionStates: T } = (0, s.cf)([a.A], () => ({
            activeCommandOption: a.A.getActiveOption(t.id),
            activeCommandOptionStates: a.A.getOptionStates(t.id),
        })),
        S = (0, l.x)(t);
    return i.useMemo(() => {
        let e = [],
            i = [];
        return (
            null != t.guild_id &&
                n === _.oU.NORMAL &&
                i.push((0, r.jsx)(c.A, { guildId: t.guild_id, channel: t, className: p.UW })),
            null != h &&
                e.push(
                    (0, r.jsx)(o.A, { activeCommand: h, activeOption: I ?? null, optionStates: T, channelId: t.id }),
                ),
            null != E && e.push((0, r.jsx)(f.A, { reply: E, chatInputType: n })),
            S && e.push((0, r.jsx)(l.X, {})),
            null != m && e.push((0, r.jsx)(d.C, { pendingScheduledMessage: m })),
            "timestampMentionInput" === g && i.push((0, r.jsx)(u.S, { error: A ?? !1 })),
            { stacked: e, floating: i }
        );
    }, [h, I, T, t, E, S, n, m, g, A]);
}
function E(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, r.jsx)("div", { children: e }, t)),
        s = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === s.length
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  s.length > 0 && (0, r.jsx)("div", { className: p.Vq, children: s }),
                  n.length > 0 && (0, r.jsx)("div", { className: p.MD, children: n }),
              ],
          });
}
