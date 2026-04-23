i.d(t, { A: () => y });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(652215),
    a = i(349288),
    r = i(517164),
    d = i(114212),
    o = i(290863),
    c = i(461213),
    u = i(975571),
    g = i(146655),
    m = i(489379),
    h = i(837924),
    x = i(558628),
    p = i(842241),
    A = i(282797),
    f = i(782505),
    j = i(83013),
    I = i(515054),
    v = i(518477),
    S = i(985018),
    E = i(740620);
function y(e) {
    let { user: t, currentUser: i, displayProfile: y, guildId: w, channelId: b, onClose: N } = e,
        { live: T, recent: C, stream: R } = (0, g.A)(t.id),
        { voiceChannel: O, voiceActivity: k } = (0, m.A)({ userId: t.id, guildId: w }),
        L = (0, l.bG)([r.A], () => r.A.isFetchingUserOutbox(t.id)),
        G = t.id === i.id,
        _ = (0, l.bG)([c.A, o.A], () => {
            let e = G ? c.A.getStatus() : o.A.getStatus(t.id);
            return e === s.clD.OFFLINE || e === s.clD.INVISIBLE;
        }),
        M = T.length > 0 || null != R,
        P = y?.private !== !0 && null == R && null == k && null != O,
        U = !_ && (M || P),
        D = C.length > 0;
    return U || D || !L
        ? U || D || L
            ? (0, n.jsxs)(I.K, {
                  className: E.XG,
                  fade: !0,
                  children: [
                      U
                          ? (0, n.jsx)(j.A, {
                                heading: S.intl.string(S.t.J6STd9),
                                children: (0, n.jsxs)("ul", {
                                    className: E.kR,
                                    children: [
                                        null != R &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(p.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    stream: R,
                                                    onClose: N,
                                                }),
                                            }),
                                        T.map((e, l) =>
                                            (0, n.jsx)(
                                                "li",
                                                {
                                                    children: (0, n.jsx)(h.A, {
                                                        user: t,
                                                        currentUser: i,
                                                        activity: e,
                                                        onClose: N,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        P &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(A.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    voiceChannel: O,
                                                    onClose: N,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      D
                          ? (0, n.jsx)(j.A, {
                                heading: S.intl.string(S.t.jzgEoL),
                                introText: G
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
                                    className: E.kR,
                                    children: C.map((e) =>
                                        (0, n.jsx)(
                                            "li",
                                            { children: (0, n.jsx)(x.A, { user: t, entry: e, onClose: N }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : G
              ? (0, n.jsx)(f.qv, { onClose: N })
              : (0, n.jsx)(f.zf, { user: t, guildId: y?.guildId ?? w, channelId: b, onClose: N })
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
