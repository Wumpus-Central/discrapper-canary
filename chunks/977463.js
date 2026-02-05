"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(442433),
    l = n(640708),
    u = n(941971),
    c = n(707539),
    d = n(576705),
    _ = n(222823),
    f = n(340833),
    p = n(913642),
    h = n(661191),
    m = n(513272),
    g = n(798505),
    E = n(781605),
    A = n(870721),
    I = n(652215),
    T = n(670455),
    y = n(995255);
function S(e) {
    let { summary: t, channel: _, members: A, guildId: S, unread: v, onClick: C } = e,
        [b, N] = i.useState(!1),
        R = (0, c.aK)(h.default.extractTimestamp(t.startId)),
        O = (0, a.bG)([m.A], () => m.A.summaryFeedback(t)),
        D = (e, n) => {
            e.stopPropagation(), (0, g.A)({ summary: t, channel: _, rating: n });
        },
        L = d.A.can(I.xBc.MANAGE_MESSAGES, _),
        w = (e) => {
            L &&
                (0, o.L3)(e, async () => {
                    let { default: e } = await n.e("43921").then(n.bind(n, 304232));
                    return (n) => (0, r.jsx)(e, { ...n, summary: t });
                });
        };
    return (0, r.jsxs)(s.DUT, {
        className: y.kL,
        onClick: C,
        onContextMenu: w,
        onMouseEnter: () => N(!0),
        onMouseLeave: () => N(!1),
        children: [
            (0, r.jsx)(u.A, { hovered: b, unread: v, className: y.dM }),
            (0, r.jsx)("div", {
                className: y.uV,
                children: (0, r.jsxs)("div", {
                    className: y.Hw,
                    children: [
                        (0, r.jsx)(s.Text, {
                            className: y.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: R,
                        }),
                        (0, r.jsx)(l.A, { height: 4, width: 4, "aria-hidden": "true", className: y.Om }),
                        (0, r.jsx)(s.oyn, { size: "xxs", color: "currentColor", className: y.Kk }),
                        (0, r.jsx)(s.Text, {
                            className: y.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        A.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.A, { height: 4, width: 4, "aria-hidden": "true", className: y.Om }),
                                    (0, r.jsx)(E.A, {
                                        partySize: { knownSize: A.length, totalSize: A.length },
                                        maxAvatarsShown: 3,
                                        members: A,
                                        guildId: S,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            b &&
                !O &&
                (0, r.jsxs)("div", {
                    className: y.p_,
                    children: [
                        (0, r.jsx)(s.DUT, {
                            onClick: (e) => D(e, T.P0.GOOD),
                            children: (0, r.jsx)(p.A, { className: y.O1, width: 12, height: 12 }),
                        }),
                        (0, r.jsx)(s.DUT, {
                            onClick: (e) => D(e, T.P0.BAD),
                            children: (0, r.jsx)(f.A, { className: y.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, r.jsx)(s.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                className: y.DD,
                children: t.topic,
            }),
            (0, r.jsx)(s.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: y.VA,
                children: t.summShort,
            }),
        ],
    });
}
function v(e) {
    let { summaries: t, summariesMembers: n, channel: s, selectTopic: o, setOpen: l } = e,
        u = (0, a.bG)([_.Ay], () => _.Ay.getOldestUnreadMessageId(s.id)),
        c = i.useCallback(
            (e) => {
                o(e), l(!1);
            },
            [o, l],
        );
    return t.length < 1
        ? (0, r.jsx)(A.A, {})
        : (0, r.jsx)(r.Fragment, {
              children: t.map((e, t) => {
                  let i = n[t] ?? [];
                  return (0, r.jsx)(
                      S,
                      {
                          summary: e,
                          channel: s,
                          members: i,
                          guildId: s.guild_id,
                          unread: null != u && h.default.compare(e.endId, u) > 0,
                          onClick: () => c(t),
                      },
                      t,
                  );
              }),
          });
}
