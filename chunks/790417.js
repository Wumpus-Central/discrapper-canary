n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    s = n(517164),
    r = n(114212),
    o = n(290863),
    d = n(461213),
    c = n(975571),
    u = n(146655),
    g = n(489379),
    m = n(837924),
    x = n(558628),
    p = n(842241),
    f = n(282797),
    h = n(782505),
    _ = n(83013),
    A = n(515054),
    I = n(518477),
    j = n(652215),
    v = n(985018),
    T = n(50108);
function E(e) {
    let { user: t, currentUser: n, displayProfile: E, guildId: b, channelId: N, onClose: S } = e,
        { live: y, recent: C, stream: R } = (0, u.A)(t.id),
        { voiceChannel: k, voiceActivity: O } = (0, g.A)({ userId: t.id, guildId: b }),
        L = (0, l.bG)([s.A], () => s.A.isFetchingUserOutbox(t.id)),
        w = t.id === n.id,
        D = (0, l.bG)([d.A, o.A], () => {
            let e = w ? d.A.getStatus() : o.A.getStatus(t.id);
            return e === a.clD.OFFLINE || e === a.clD.INVISIBLE;
        }),
        P = y.length > 0 || null != R,
        G = E?.private !== !0 && null == R && null == O && null != k,
        M = !D && (P || G),
        U = C.length > 0;
    return M || U || !L
        ? M || U || L
            ? (0, i.jsxs)(A.K, {
                  className: T.XG,
                  fade: !0,
                  children: [
                      M
                          ? (0, i.jsx)(_.A, {
                                heading: v.intl.string(v.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: T.kR,
                                    children: [
                                        null != R &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(p.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: R,
                                                    onClose: S,
                                                }),
                                            }),
                                        y.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(m.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: S,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        G &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(f.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    voiceChannel: k,
                                                    onClose: S,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      U
                          ? (0, i.jsx)(_.A, {
                                heading: v.intl.string(v.t.jzgEoL),
                                introText: w
                                    ? v.intl.format(v.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  a.MzZ,
                                                  {
                                                      href: c.A.getArticleURL(j.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: I.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: T.kR,
                                    children: C.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(x.A, { user: t, entry: e, onClose: S }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : w
              ? (0, i.jsx)(h.qv, { onClose: S })
              : (0, i.jsx)(h.zf, { user: t, guildId: E?.guildId ?? b, channelId: N, onClose: S })
        : (0, i.jsx)("div", {
              className: T.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: T.kr,
                          children: [
                              (0, i.jsx)(r.FQ, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(r.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
