n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var a = n(311907),
    l = n(397927),
    s = n(517164),
    r = n(114212),
    o = n(290863),
    c = n(461213),
    d = n(975571),
    u = n(146655),
    m = n(489379),
    g = n(837924),
    p = n(558628),
    x = n(842241),
    f = n(282797),
    _ = n(782505),
    h = n(83013),
    A = n(515054),
    I = n(518477),
    v = n(652215),
    j = n(985018),
    E = n(50108);
function T(e) {
    let { user: t, currentUser: n, displayProfile: T, guildId: N, channelId: C, onClose: b } = e,
        { live: S, recent: y, stream: R } = (0, u.A)(t.id),
        { voiceChannel: O, voiceActivity: w } = (0, m.A)({ userId: t.id, guildId: N }),
        k = (0, a.bG)([s.A], () => s.A.isFetchingUserOutbox(t.id)),
        L = t.id === n.id,
        D = (0, a.bG)([c.A, o.A], () => {
            let e = L ? c.A.getStatus() : o.A.getStatus(t.id);
            return e === l.clD.OFFLINE || e === l.clD.INVISIBLE;
        }),
        P = S.length > 0 || null != R,
        G = T?.private !== !0 && null == R && null == w && null != O,
        U = !D && (P || G),
        F = y.length > 0;
    return U || F || !k
        ? U || F || k
            ? (0, i.jsxs)(A.K, {
                  className: E.XG,
                  fade: !0,
                  children: [
                      U
                          ? (0, i.jsx)(h.A, {
                                heading: j.intl.string(j.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: E.kR,
                                    children: [
                                        null != R &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(x.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: R,
                                                    onClose: b,
                                                }),
                                            }),
                                        S.map((e, a) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(g.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: b,
                                                    }),
                                                },
                                                `live-${a}`,
                                            ),
                                        ),
                                        G &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(f.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    voiceChannel: O,
                                                    onClose: b,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      F
                          ? (0, i.jsx)(h.A, {
                                heading: j.intl.string(j.t.jzgEoL),
                                introText: L
                                    ? j.intl.format(j.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  l.MzZ,
                                                  {
                                                      href: d.A.getArticleURL(v.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: I.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: E.kR,
                                    children: y.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(p.A, { user: t, entry: e, onClose: b }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : L
              ? (0, i.jsx)(_.qv, { onClose: b })
              : (0, i.jsx)(_.zf, { user: t, guildId: T?.guildId ?? N, channelId: C, onClose: b })
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
