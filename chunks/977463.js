"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(939249),
    o = n(834730),
    l = n(534890),
    u = n(442433),
    c = n(640708),
    d = n(941971),
    _ = n(707539),
    f = n(576705),
    p = n(222823),
    h = n(340833),
    E = n(913642),
    m = n(661191),
    g = n(513272),
    A = n(798505),
    I = n(781605),
    T = n(870721),
    S = n(652215),
    y = n(670455),
    N = n(156700);
function v(e) {
    let { summary: t, channel: p, members: T, guildId: v, unread: C, onClick: O } = e,
        [R, b] = i.useState(!1),
        D = (0, _.aK)(m.default.extractTimestamp(t.startId)),
        L = (0, s.bG)([g.A], () => g.A.summaryFeedback(t)),
        w = (e, n) => {
            e.stopPropagation(), (0, A.A)({ summary: t, channel: p, rating: n });
        },
        M = f.A.can(S.xBc.MANAGE_MESSAGES, p);
    return (0, r.jsxs)(a.D, {
        className: N.kL,
        onClick: O,
        onContextMenu: (e) => {
            M &&
                (0, u.L3)(e, async () => {
                    let { default: e } = await n.e("43921").then(n.bind(n, 304232));
                    return (n) => (0, r.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: [
            (0, r.jsx)(d.A, { hovered: R, unread: C, className: N.dM }),
            (0, r.jsx)("div", {
                className: N.uV,
                children: (0, r.jsxs)("div", {
                    className: N.Hw,
                    children: [
                        (0, r.jsx)(o.E, {
                            className: N.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: D,
                        }),
                        (0, r.jsx)(c.A, { height: 4, width: 4, "aria-hidden": "true", className: N.Om }),
                        (0, r.jsx)(l.o, { size: "xxs", color: "currentColor", className: N.Kk }),
                        (0, r.jsx)(o.E, {
                            className: N.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        T.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(c.A, { height: 4, width: 4, "aria-hidden": "true", className: N.Om }),
                                    (0, r.jsx)(I.A, {
                                        partySize: { knownSize: T.length, totalSize: T.length },
                                        maxAvatarsShown: 3,
                                        members: T,
                                        guildId: v,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            R &&
                null == L &&
                (0, r.jsxs)("div", {
                    className: N.p_,
                    children: [
                        (0, r.jsx)(a.D, {
                            onClick: (e) => w(e, y.P0.GOOD),
                            children: (0, r.jsx)(E.A, { className: N.O1, width: 12, height: 12 }),
                        }),
                        (0, r.jsx)(a.D, {
                            onClick: (e) => w(e, y.P0.BAD),
                            children: (0, r.jsx)(h.A, { className: N.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, r.jsx)(o.E, { color: "text-strong", variant: "text-sm/semibold", className: N.DD, children: t.topic }),
            (0, r.jsx)(o.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: N.VA,
                children: t.summShort,
            }),
        ],
    });
}
function C(e) {
    let { summaries: t, summariesMembers: n, channel: a, selectTopic: o, setOpen: l } = e,
        u = (0, s.bG)([p.Ay], () => p.Ay.getOldestUnreadMessageId(a.id)),
        c = i.useCallback(
            (e) => {
                o(e), l(!1);
            },
            [o, l],
        );
    return t.length < 1
        ? (0, r.jsx)(T.A, {})
        : (0, r.jsx)(r.Fragment, {
              children: t.map((e, t) => {
                  let i = n[t] ?? [];
                  return (0, r.jsx)(
                      v,
                      {
                          summary: e,
                          channel: a,
                          members: i,
                          guildId: a.guild_id,
                          unread: null != u && m.default.compare(e.endId, u) > 0,
                          onClick: () => c(t),
                      },
                      t,
                  );
              }),
          });
}
