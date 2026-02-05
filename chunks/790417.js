n.d(t, { A: () => b });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(901517),
    s = n(517164),
    o = n(114212),
    d = n(290863),
    c = n(461213),
    u = n(975571),
    g = n(146655),
    m = n(489379),
    x = n(837924),
    f = n(558628),
    h = n(842241),
    p = n(282797),
    _ = n(782505),
    A = n(83013),
    I = n(515054),
    j = n(518477),
    v = n(652215),
    T = n(985018),
    E = n(897757);
function b(e) {
    let { user: t, currentUser: n, displayProfile: b, guildId: y, channelId: C, onClose: N } = e,
        { voiceActivityStatusEnabled: S } = (0, r.G)({ location: "UserProfileModalV2Activity" }),
        { live: w, recent: k, stream: R } = (0, g.A)(t.id),
        { voiceChannel: O, voiceActivity: L } = (0, m.A)({ userId: t.id, guildId: y }),
        P = (0, l.bG)([s.A], () => s.A.isFetchingUserOutbox(t.id)),
        D = t.id === n.id,
        G = (0, l.bG)([c.A, d.A], () => {
            let e = D ? c.A.getStatus() : d.A.getStatus(t.id);
            return e === a.clD.OFFLINE || e === a.clD.INVISIBLE;
        }),
        M = w.length > 0 || null != R,
        U = S && null == R && null == L && null != O,
        F = !G && (M || U),
        W = k.length > 0;
    return F || W || !P
        ? F || W || P
            ? (0, i.jsxs)(I.K, {
                  className: E.XG,
                  fade: !0,
                  children: [
                      F
                          ? (0, i.jsx)(A.A, {
                                heading: T.intl.string(T.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: E.kR,
                                    children: [
                                        null != R &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(h.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: R,
                                                    onClose: N,
                                                }),
                                            }),
                                        w.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(x.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: N,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        U &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(p.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    voiceChannel: O,
                                                    onClose: N,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      W
                          ? (0, i.jsx)(A.A, {
                                heading: T.intl.string(T.t.jzgEoL),
                                introText: D
                                    ? T.intl.format(T.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  a.MzZ,
                                                  {
                                                      href: u.A.getArticleURL(v.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: j.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: E.kR,
                                    children: k.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(f.A, { user: t, entry: e, onClose: N }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : D
              ? (0, i.jsx)(_.qv, { onClose: N })
              : (0, i.jsx)(_.zf, { user: t, guildId: b?.guildId ?? y, channelId: C, onClose: N })
        : (0, i.jsx)("div", {
              className: E.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: E.kr,
                          children: [
                              (0, i.jsx)(o.FQ, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(o.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
