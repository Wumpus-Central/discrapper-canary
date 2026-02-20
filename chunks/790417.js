n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    s = n(517164),
    r = n(114212),
    o = n(290863),
    c = n(461213),
    d = n(975571),
    u = n(146655),
    g = n(489379),
    m = n(837924),
    x = n(558628),
    f = n(842241),
    p = n(282797),
    h = n(782505),
    _ = n(83013),
    A = n(515054),
    I = n(518477),
    j = n(652215),
    v = n(985018),
    E = n(897757);
function T(e) {
    let { user: t, currentUser: n, displayProfile: T, guildId: b, channelId: y, onClose: N } = e,
        { live: S, recent: C, stream: k } = (0, u.A)(t.id),
        { voiceChannel: R, voiceActivity: w } = (0, g.A)({ userId: t.id, guildId: b }),
        O = (0, l.bG)([s.A], () => s.A.isFetchingUserOutbox(t.id)),
        L = t.id === n.id,
        P = (0, l.bG)([c.A, o.A], () => {
            let e = L ? c.A.getStatus() : o.A.getStatus(t.id);
            return e === a.clD.OFFLINE || e === a.clD.INVISIBLE;
        }),
        D = S.length > 0 || null != k,
        G = T?.private !== !0 && null == k && null == w && null != R,
        U = !P && (D || G),
        M = C.length > 0;
    return U || M || !O
        ? U || M || O
            ? (0, i.jsxs)(A.K, {
                  className: E.XG,
                  fade: !0,
                  children: [
                      U
                          ? (0, i.jsx)(_.A, {
                                heading: v.intl.string(v.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: E.kR,
                                    children: [
                                        null != k &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(f.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: k,
                                                    onClose: N,
                                                }),
                                            }),
                                        S.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(m.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: N,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        G &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(p.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    voiceChannel: R,
                                                    onClose: N,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      M
                          ? (0, i.jsx)(_.A, {
                                heading: v.intl.string(v.t.jzgEoL),
                                introText: L
                                    ? v.intl.format(v.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  a.MzZ,
                                                  {
                                                      href: d.A.getArticleURL(j.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: I.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: E.kR,
                                    children: C.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(x.A, { user: t, entry: e, onClose: N }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : L
              ? (0, i.jsx)(h.qv, { onClose: N })
              : (0, i.jsx)(h.zf, { user: t, guildId: T?.guildId ?? b, channelId: y, onClose: N })
        : (0, i.jsx)("div", {
              className: E.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: E.kr,
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
