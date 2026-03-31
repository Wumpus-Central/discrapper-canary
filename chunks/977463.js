"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
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
    E = n(798505),
    g = n(781605),
    A = n(870721),
    I = n(652215),
    T = n(670455),
    S = n(585241);
function y(e) {
    let { summary: t, channel: _, members: A, guildId: y, unread: v, onClick: N } = e,
        [C, R] = i.useState(!1),
        O = (0, c.aK)(h.default.extractTimestamp(t.startId)),
        b = (0, s.bG)([m.A], () => m.A.summaryFeedback(t)),
        D = (e, n) => {
            e.stopPropagation(), (0, E.A)({ summary: t, channel: _, rating: n });
        },
        L = d.A.can(I.xBc.MANAGE_MESSAGES, _),
        w = (e) => {
            L &&
                (0, o.L3)(e, async () => {
                    let { default: e } = await n.e("43921").then(n.bind(n, 304232));
                    return (n) => (0, r.jsx)(e, { ...n, summary: t });
                });
        };
    return (0, r.jsxs)(a.DUT, {
        className: S.kL,
        onClick: N,
        onContextMenu: w,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        children: [
            (0, r.jsx)(u.A, { hovered: C, unread: v, className: S.dM }),
            (0, r.jsx)("div", {
                className: S.uV,
                children: (0, r.jsxs)("div", {
                    className: S.Hw,
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: S.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: O,
                        }),
                        (0, r.jsx)(l.A, { height: 4, width: 4, "aria-hidden": "true", className: S.Om }),
                        (0, r.jsx)(a.oyn, { size: "xxs", color: "currentColor", className: S.Kk }),
                        (0, r.jsx)(a.Text, {
                            className: S.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        A.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.A, { height: 4, width: 4, "aria-hidden": "true", className: S.Om }),
                                    (0, r.jsx)(g.A, {
                                        partySize: { knownSize: A.length, totalSize: A.length },
                                        maxAvatarsShown: 3,
                                        members: A,
                                        guildId: y,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            C &&
                null == b &&
                (0, r.jsxs)("div", {
                    className: S.p_,
                    children: [
                        (0, r.jsx)(a.DUT, {
                            onClick: (e) => D(e, T.P0.GOOD),
                            children: (0, r.jsx)(p.A, { className: S.O1, width: 12, height: 12 }),
                        }),
                        (0, r.jsx)(a.DUT, {
                            onClick: (e) => D(e, T.P0.BAD),
                            children: (0, r.jsx)(f.A, { className: S.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, r.jsx)(a.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                className: S.DD,
                children: t.topic,
            }),
            (0, r.jsx)(a.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: S.VA,
                children: t.summShort,
            }),
        ],
    });
}
function v(e) {
    let { summaries: t, summariesMembers: n, channel: a, selectTopic: o, setOpen: l } = e,
        u = (0, s.bG)([_.Ay], () => _.Ay.getOldestUnreadMessageId(a.id)),
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
                      y,
                      {
                          summary: e,
                          channel: a,
                          members: i,
                          guildId: a.guild_id,
                          unread: null != u && h.default.compare(e.endId, u) > 0,
                          onClick: () => c(t),
                      },
                      t,
                  );
              }),
          });
}
