n.d(t, { A: () => b });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    s = n(901517),
    r = n(517164),
    o = n(114212),
    c = n(290863),
    d = n(461213),
    u = n(975571),
    g = n(146655),
    m = n(489379),
    x = n(837924),
    f = n(558628),
    p = n(842241),
    h = n(282797),
    _ = n(782505),
    A = n(83013),
    I = n(515054),
    j = n(518477),
    v = n(652215),
    E = n(985018),
    T = n(897757);
function b(e) {
    let { user: t, currentUser: n, displayProfile: b, guildId: y, channelId: N, onClose: S } = e,
        { voiceActivityStatusEnabled: C } = (0, s.G)({ location: "UserProfileModalV2Activity" }),
        { live: k, recent: R, stream: w } = (0, g.A)(t.id),
        { voiceChannel: O, voiceActivity: L } = (0, m.A)({ userId: t.id, guildId: y }),
        P = (0, l.bG)([r.A], () => r.A.isFetchingUserOutbox(t.id)),
        D = t.id === n.id,
        G = (0, l.bG)([d.A, c.A], () => {
            let e = D ? d.A.getStatus() : c.A.getStatus(t.id);
            return e === a.clD.OFFLINE || e === a.clD.INVISIBLE;
        }),
        U = k.length > 0 || null != w,
        M = b?.private === !0,
        F = C && !M && null == w && null == L && null != O,
        W = !G && (U || F),
        H = R.length > 0;
    return W || H || !P
        ? W || H || P
            ? (0, i.jsxs)(I.K, {
                  className: T.XG,
                  fade: !0,
                  children: [
                      W
                          ? (0, i.jsx)(A.A, {
                                heading: E.intl.string(E.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: T.kR,
                                    children: [
                                        null != w &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(p.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: w,
                                                    onClose: S,
                                                }),
                                            }),
                                        k.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(x.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: S,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        F &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(h.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    voiceChannel: O,
                                                    onClose: S,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      H
                          ? (0, i.jsx)(A.A, {
                                heading: E.intl.string(E.t.jzgEoL),
                                introText: D
                                    ? E.intl.format(E.t["4bk9Ak"], {
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
                                    className: T.kR,
                                    children: R.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(f.A, { user: t, entry: e, onClose: S }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : D
              ? (0, i.jsx)(_.qv, { onClose: S })
              : (0, i.jsx)(_.zf, { user: t, guildId: b?.guildId ?? y, channelId: N, onClose: S })
        : (0, i.jsx)("div", {
              className: T.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: T.kr,
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
