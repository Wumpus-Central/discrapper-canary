n.d(t, {
    A: () => I,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(901517),
    s = n(517164),
    o = n(114212),
    c = n(290863),
    u = n(461213),
    d = n(975571),
    f = n(146655),
    p = n(489379),
    b = n(837924),
    g = n(558628),
    m = n(842241),
    y = n(282797),
    O = n(782505),
    j = n(83013),
    x = n(515054),
    h = n(518477),
    v = n(652215),
    A = n(985018),
    w = n(897757);

function I(e) {
    let { user: t, currentUser: n, displayProfile: I, guildId: P, channelId: E, onClose: S } = e,
        { voiceActivityStatusEnabled: T } = (0, a.G)({
            location: "UserProfileModalV2Activity",
        }),
        { live: _, recent: N, stream: D } = (0, f.A)(t.id),
        { voiceChannel: R, voiceActivity: C } = (0, p.A)({
            userId: t.id,
            guildId: P,
        }),
        k = (0, l.bG)([s.A], () => s.A.isFetchingUserOutbox(t.id)),
        G = t.id === n.id,
        L = (0, l.bG)([u.A, c.A], () => {
            let e = G ? u.A.getStatus() : c.A.getStatus(t.id);
            return e === i.clD.OFFLINE || e === i.clD.INVISIBLE;
        }),
        U = _.length > 0 || null != D,
        M = T && null == D && null == C && null != R,
        F = !L && (U || M),
        X = N.length > 0;
    if (!F && !X && k)
        return (0, r.jsx)("div", {
            className: w.kR,
            children: Array.from({
                length: 8,
            }).map((e, t) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: w.kr,
                        children: [
                            (0, r.jsx)(o.FQ, {
                                width: 60,
                                opacity: 0.08,
                            }),
                            (0, r.jsx)(o.FQ, {
                                width: 135,
                                opacity: 0.08,
                            }),
                        ],
                    },
                    t,
                ),
            ),
        });
    if (!F && !X && !k) {
        var W;
        return G
            ? (0, r.jsx)(O.qv, {
                  onClose: S,
              })
            : (0, r.jsx)(O.zf, {
                  user: t,
                  guildId: null != (W = null == I ? void 0 : I.guildId) ? W : P,
                  channelId: E,
                  onClose: S,
              });
    }
    return (0, r.jsxs)(x.K, {
        className: w.XG,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(j.A, {
                      heading: A.intl.string(A.t.J6STd9),
                      children: (0, r.jsxs)("ul", {
                          className: w.kR,
                          children: [
                              null != D &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(m.A, {
                                          user: t,
                                          currentUser: n,
                                          stream: D,
                                          onClose: S,
                                      }),
                                  }),
                              _.map((e, l) =>
                                  (0, r.jsx)(
                                      "li",
                                      {
                                          children: (0, r.jsx)(b.A, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: S,
                                          }),
                                      },
                                      "live-".concat(l),
                                  ),
                              ),
                              M &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(y.A, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: R,
                                          onClose: S,
                                      }),
                                  }),
                          ],
                      }),
                  })
                : null,
            X
                ? (0, r.jsx)(j.A, {
                      heading: A.intl.string(A.t.jzgEoL),
                      introText: G
                          ? A.intl.format(A.t["4bk9Ak"], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        i.MzZ,
                                        {
                                            href: d.A.getArticleURL(v.MVz.ACTIVITY_STATUS_SETTINGS),
                                            children: e,
                                        },
                                        t,
                                    ),
                            })
                          : void 0,
                      scrollTargetId: h.bk.RECENT_ACTIVITY,
                      children: (0, r.jsx)("ul", {
                          className: w.kR,
                          children: N.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(g.A, {
                                          user: t,
                                          entry: e,
                                          onClose: S,
                                      }),
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  })
                : null,
        ],
    });
}
