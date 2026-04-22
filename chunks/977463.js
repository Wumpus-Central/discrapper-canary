"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(939249),
    a = n(834730),
    o = n(534890),
    c = n(442433),
    u = n(640708),
    d = n(941971),
    h = n(707539),
    m = n(576705),
    p = n(222823),
    f = n(340833),
    g = n(913642),
    _ = n(661191),
    x = n(513272),
    A = n(798505),
    C = n(781605),
    E = n(870721),
    I = n(652215),
    v = n(670455),
    y = n(156700);
function S(e) {
    let { summary: t, channel: p, members: E, guildId: S, unread: b, onClick: N } = e,
        [T, j] = l.useState(!1),
        R = (0, h.aK)(_.default.extractTimestamp(t.startId)),
        w = (0, s.bG)([x.A], () => x.A.summaryFeedback(t)),
        L = (e, n) => {
            e.stopPropagation(), (0, A.A)({ summary: t, channel: p, rating: n });
        },
        M = m.A.can(I.xBc.MANAGE_MESSAGES, p);
    return (0, i.jsxs)(r.D, {
        className: y.kL,
        onClick: N,
        onContextMenu: (e) => {
            M &&
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("43921").then(n.bind(n, 304232));
                    return (n) => (0, i.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => j(!0),
        onMouseLeave: () => j(!1),
        children: [
            (0, i.jsx)(d.A, { hovered: T, unread: b, className: y.dM }),
            (0, i.jsx)("div", {
                className: y.uV,
                children: (0, i.jsxs)("div", {
                    className: y.Hw,
                    children: [
                        (0, i.jsx)(a.E, {
                            className: y.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: R,
                        }),
                        (0, i.jsx)(u.A, { height: 4, width: 4, "aria-hidden": "true", className: y.Om }),
                        (0, i.jsx)(o.o, { size: "xxs", color: "currentColor", className: y.Kk }),
                        (0, i.jsx)(a.E, {
                            className: y.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        E.length > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.A, { height: 4, width: 4, "aria-hidden": "true", className: y.Om }),
                                    (0, i.jsx)(C.A, {
                                        partySize: { knownSize: E.length, totalSize: E.length },
                                        maxAvatarsShown: 3,
                                        members: E,
                                        guildId: S,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            T &&
                null == w &&
                (0, i.jsxs)("div", {
                    className: y.p_,
                    children: [
                        (0, i.jsx)(r.D, {
                            onClick: (e) => L(e, v.P0.GOOD),
                            children: (0, i.jsx)(g.A, { className: y.O1, width: 12, height: 12 }),
                        }),
                        (0, i.jsx)(r.D, {
                            onClick: (e) => L(e, v.P0.BAD),
                            children: (0, i.jsx)(f.A, { className: y.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, i.jsx)(a.E, { color: "text-strong", variant: "text-sm/semibold", className: y.DD, children: t.topic }),
            (0, i.jsx)(a.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: y.VA,
                children: t.summShort,
            }),
        ],
    });
}
function b(e) {
    let { summaries: t, summariesMembers: n, channel: r, selectTopic: a, setOpen: o } = e,
        c = (0, s.bG)([p.Ay], () => p.Ay.getOldestUnreadMessageId(r.id)),
        u = l.useCallback(
            (e) => {
                a(e), o(!1);
            },
            [a, o],
        );
    return t.length < 1
        ? (0, i.jsx)(E.A, {})
        : (0, i.jsx)(i.Fragment, {
              children: t.map((e, t) => {
                  let l = n[t] ?? [];
                  return (0, i.jsx)(
                      S,
                      {
                          summary: e,
                          channel: r,
                          members: l,
                          guildId: r.guild_id,
                          unread: null != c && _.default.compare(e.endId, c) > 0,
                          onClick: () => u(t),
                      },
                      t,
                  );
              }),
          });
}
