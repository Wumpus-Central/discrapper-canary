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
    f = i(782505),
    A = i(83013),
    I = i(515054),
    v = i(518477),
    S = i(375708),
    b = i(740620);
function y(e) {
    let { user: t, currentUser: i, displayProfile: y, guildId: E, channelId: C, onClose: w } = e,
        { live: N, recent: T, stream: R } = (0, g.A)(t.id),
        { voiceChannel: k, voiceActivity: O } = (0, m.A)({ userId: t.id, guildId: E }),
        L = (0, l.bG)([r.A], () => r.A.isFetchingUserOutbox(t.id)),
        P = t.id === i.id,
        G = (0, l.bG)([c.A, o.A], () => {
            let e = P ? c.A.getStatus() : o.A.getStatus(t.id);
            return e === s.clD.OFFLINE || e === s.clD.INVISIBLE;
        }),
        M = N.length > 0 || null != R,
        _ = y?.private !== !0 && null == R && null == O && null != k,
        U = !G && (M || _),
        D = T.length > 0;
    return U || D || !L
        ? U || D || L
            ? (0, n.jsxs)(I.K, {
                  className: b.XG,
                  fade: !0,
                  children: [
                      U
                          ? (0, n.jsx)(A.A, {
                                heading: S.intl.string(S.t.J6STd9),
                                children: (0, n.jsxs)("ul", {
                                    className: b.kR,
                                    children: [
                                        null != R &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(p.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    stream: R,
                                                    onClose: w,
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
                                                        onClose: w,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        _ &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(j.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    voiceChannel: k,
                                                    onClose: w,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      D
                          ? (0, n.jsx)(A.A, {
                                heading: S.intl.string(S.t.jzgEoL),
                                introText: P
                                    ? S.intl.format(S.t["4bk9Ak"], {
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
                                scrollTargetId: v.bk.RECENT_ACTIVITY,
                                children: (0, n.jsx)("ul", {
                                    className: b.kR,
                                    children: T.map((e) =>
                                        (0, n.jsx)(
                                            "li",
                                            { children: (0, n.jsx)(x.A, { user: t, entry: e, onClose: w }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : P
              ? (0, n.jsx)(f.qv, { onClose: w })
              : (0, n.jsx)(f.zf, { user: t, guildId: y?.guildId ?? E, channelId: C, onClose: w })
        : (0, n.jsx)("div", {
              className: b.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, n.jsxs)(
                      "div",
                      {
                          className: b.kr,
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
