i.d(t, { A: () => y });
var n = i(627968);
i(64700);
var s = i(311907),
    l = i(397927),
    a = i(517164),
    r = i(114212),
    o = i(290863),
    d = i(461213),
    c = i(975571),
    u = i(146655),
    g = i(489379),
    m = i(837924),
    h = i(558628),
    x = i(842241),
    p = i(282797),
    A = i(782505),
    f = i(83013),
    I = i(515054),
    j = i(518477),
    v = i(652215),
    S = i(985018),
    b = i(50108);
function y(e) {
    let { user: t, currentUser: i, displayProfile: y, guildId: E, channelId: T, onClose: C } = e,
        { live: w, recent: N, stream: R } = (0, u.A)(t.id),
        { voiceChannel: k, voiceActivity: L } = (0, g.A)({ userId: t.id, guildId: E }),
        O = (0, s.bG)([a.A], () => a.A.isFetchingUserOutbox(t.id)),
        _ = t.id === i.id,
        M = (0, s.bG)([d.A, o.A], () => {
            let e = _ ? d.A.getStatus() : o.A.getStatus(t.id);
            return e === l.clD.OFFLINE || e === l.clD.INVISIBLE;
        }),
        P = w.length > 0 || null != R,
        G = y?.private !== !0 && null == R && null == L && null != k,
        U = !M && (P || G),
        F = N.length > 0;
    return U || F || !O
        ? U || F || O
            ? (0, n.jsxs)(I.K, {
                  className: b.XG,
                  fade: !0,
                  children: [
                      U
                          ? (0, n.jsx)(f.A, {
                                heading: S.intl.string(S.t.J6STd9),
                                children: (0, n.jsxs)("ul", {
                                    className: b.kR,
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
                                        w.map((e, s) =>
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
                                                `live-${s}`,
                                            ),
                                        ),
                                        G &&
                                            (0, n.jsx)("li", {
                                                children: (0, n.jsx)(p.A, {
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
                                introText: _
                                    ? S.intl.format(S.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, n.jsx)(
                                                  l.MzZ,
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
                                    className: b.kR,
                                    children: N.map((e) =>
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
            : _
              ? (0, n.jsx)(A.qv, { onClose: C })
              : (0, n.jsx)(A.zf, { user: t, guildId: y?.guildId ?? E, channelId: T, onClose: C })
        : (0, n.jsx)("div", {
              className: b.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, n.jsxs)(
                      "div",
                      {
                          className: b.kr,
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
