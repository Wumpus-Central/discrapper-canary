i.d(t, { A: () => y });
var n = i(627968);
i(64700);
var l = i(17928),
    s = i(652215),
    a = i(349288),
    r = i(517164),
    d = i(114212),
    o = i(290863),
    c = i(461213),
    u = i(975571),
    g = i(146655),
    m = i(489379),
    h = i(402857),
    x = i(353394),
    p = i(64622),
    j = i(986712),
    A = i(782505),
    f = i(83013),
    I = i(515054),
    S = i(518477),
    v = i(375708),
    E = i(740620);
function y(e) {
    let { user: t, currentUser: i, displayProfile: y, guildId: b, channelId: T, onClose: C } = e,
        { live: N, recent: w, stream: R } = (0, g.A)(t.id),
        { voiceChannel: O, voiceActivity: k } = (0, m.A)({ userId: t.id, guildId: b }),
        L = (0, l.bG)([r.A], () => r.A.isFetchingUserOutbox(t.id)),
        G = t.id === i.id,
        _ = (0, l.bG)([c.A, o.A], () => {
            let e = G ? c.A.getStatus() : o.A.getStatus(t.id);
            return e === s.clD.OFFLINE || e === s.clD.INVISIBLE;
        }),
        P = N.length > 0 || null != R,
        M = y?.private !== !0 && null == R && null == k && null != O,
        D = !_ && (P || M),
        U = w.length > 0;
    return D || U || !L
        ? D || U || L
            ? (0, n.jsxs)(I.K, {
                  className: E.XG,
                  fade: !0,
                  children: [
                      D
                          ? (0, n.jsx)(f.A, {
                                heading: v.intl.string(v.t.J6STd9),
                                children: (0, n.jsxs)("ul", {
                                    className: E.kR,
                                    children: [
                                        null != R &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(p.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    stream: R,
                                                    onClose: C,
                                                }),
                                            }),
                                        N.map((e, l) =>
                                            (0, n.jsx)(
                                                "li",
                                                {
                                                    children: (0, n.jsx)(h.A, {
                                                        user: t,
                                                        currentUser: i,
                                                        activity: e,
                                                        onClose: C,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        M &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(j.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    voiceChannel: O,
                                                    onClose: C,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      U
                          ? (0, n.jsx)(f.A, {
                                heading: v.intl.string(v.t.jzgEoL),
                                introText: G
                                    ? v.intl.format(v.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, n.jsx)(
                                                  a.Anchor,
                                                  {
                                                      href: u.A.getArticleURL(s.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: S.bk.RECENT_ACTIVITY,
                                children: (0, n.jsx)("ul", {
                                    className: E.kR,
                                    children: w.map((e) =>
                                        (0, n.jsx)(
                                            "li",
                                            { children: (0, n.jsx)(x.A, { user: t, entry: e, onClose: C }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : G
              ? (0, n.jsx)(A.qv, { onClose: C })
              : (0, n.jsx)(A.zf, { user: t, guildId: y?.guildId ?? b, channelId: T, onClose: C })
        : (0, n.jsx)("div", {
              className: E.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, n.jsxs)(
                      "div",
                      {
                          className: E.kr,
                          children: [
                              (0, n.jsx)(d.FQ, { width: 60, opacity: 0.08 }),
                              (0, n.jsx)(d.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
