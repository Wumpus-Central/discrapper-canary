i.d(t, { A: () => b });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    a = i(517164),
    r = i(114212),
    d = i(290863),
    o = i(461213),
    c = i(975571),
    u = i(146655),
    g = i(489379),
    m = i(837924),
    h = i(558628),
    x = i(842241),
    A = i(282797),
    p = i(782505),
    f = i(83013),
    I = i(515054),
    j = i(518477),
    v = i(652215),
    S = i(985018),
    E = i(740620);
function b(e) {
    let { user: t, currentUser: i, displayProfile: b, guildId: T, channelId: y, onClose: C } = e,
        { live: N, recent: w, stream: R } = (0, u.A)(t.id),
        { voiceChannel: k, voiceActivity: O } = (0, g.A)({ userId: t.id, guildId: T }),
        L = (0, l.bG)([a.A], () => a.A.isFetchingUserOutbox(t.id)),
        M = t.id === i.id,
        _ = (0, l.bG)([o.A, d.A], () => {
            let e = M ? o.A.getStatus() : d.A.getStatus(t.id);
            return e === s.clD.OFFLINE || e === s.clD.INVISIBLE;
        }),
        P = N.length > 0 || null != R,
        U = b?.private !== !0 && null == R && null == O && null != k,
        G = !_ && (P || U),
        F = w.length > 0;
    return G || F || !L
        ? G || F || L
            ? (0, n.jsxs)(I.K, {
                  className: E.XG,
                  fade: !0,
                  children: [
                      G
                          ? (0, n.jsx)(f.A, {
                                heading: S.intl.string(S.t.J6STd9),
                                children: (0, n.jsxs)("ul", {
                                    className: E.kR,
                                    children: [
                                        null != R &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(x.A, {
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
                                                    children: (0, n.jsx)(m.A, {
                                                        user: t,
                                                        currentUser: i,
                                                        activity: e,
                                                        onClose: C,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        U &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(A.A, {
                                                    user: t,
                                                    currentUser: i,
                                                    voiceChannel: k,
                                                    onClose: C,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      F
                          ? (0, n.jsx)(f.A, {
                                heading: S.intl.string(S.t.jzgEoL),
                                introText: M
                                    ? S.intl.format(S.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, n.jsx)(
                                                  s.MzZ,
                                                  {
                                                      href: c.A.getArticleURL(v.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: j.bk.RECENT_ACTIVITY,
                                children: (0, n.jsx)("ul", {
                                    className: E.kR,
                                    children: w.map((e) =>
                                        (0, n.jsx)(
                                            "li",
                                            { children: (0, n.jsx)(h.A, { user: t, entry: e, onClose: C }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : M
              ? (0, n.jsx)(p.qv, { onClose: C })
              : (0, n.jsx)(p.zf, { user: t, guildId: b?.guildId ?? T, channelId: y, onClose: C })
        : (0, n.jsx)("div", {
              className: E.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, n.jsxs)(
                      "div",
                      {
                          className: E.kr,
                          children: [
                              (0, n.jsx)(r.FQ, { width: 60, opacity: 0.08 }),
                              (0, n.jsx)(r.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
