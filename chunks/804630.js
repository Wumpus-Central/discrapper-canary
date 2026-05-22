t.d(l, { Gf: () => f, Tf: () => S, _Q: () => N, vP: () => T });
var i = t(627968);
t(64700);
var s = t(503698),
    n = t.n(s),
    a = t(17928),
    d = t(990078),
    r = t(534514),
    c = t(939249),
    o = t(672979),
    p = t(90644),
    u = t(432166),
    m = t(587895),
    A = t(137177),
    h = t(172710),
    x = t(763758),
    v = t(970928),
    g = t(486020),
    j = t(652215),
    y = t(375708),
    I = t(145225);
function N(e) {
    return (
        {
            [j.$pd.PLAYING]: y.intl.string(y.t.J4MQFX),
            [j.$pd.COMPETING]: y.intl.string(y.t.J4MQFX),
            [j.$pd.WATCHING]: y.intl.string(y.t.xeqvTg),
            [j.$pd.LISTENING]: y.intl.string(y.t.ep6av7),
        }[e] ?? y.intl.string(y.t["1+boPi"])
    );
}
function f(e, l, t) {
    let i;
    return null != l && (0, p.A)(l)
        ? {
              isSpotify: !0,
              name: l.details ?? l.name ?? "",
              type: j.$pd.LISTENING,
              assets: l.assets ?? void 0,
              applicationId: l.application_id,
              state: l.state ?? void 0,
              syncId: l.sync_id ?? void 0,
              timestamps: l.timestamps ?? void 0,
              rawActivity: l,
              userId: e,
          }
        : null != t
          ? ((i = l?.type === j.$pd.WATCHING ? j.$pd.WATCHING : j.$pd.PLAYING),
            {
                isSpotify: !1,
                isEmbedded: !0,
                isGame: !1,
                name: t.application.name,
                type: i,
                applicationId: t.application.id,
                embeddedIconUrl:
                    g.Ay.getApplicationIconURL({ id: t.application.id, icon: t.application.icon }) ?? void 0,
                embeddedApplicationName: t.application.name,
                assets: l?.assets ?? void 0,
                details: l?.details ?? void 0,
                state: l?.state ?? void 0,
                timestamps: l?.timestamps ?? void 0,
                userId: e,
            })
          : {
                isSpotify: !1,
                isEmbedded: !1,
                isGame: (0, o.A)(l),
                name: l?.name ?? "",
                type: l?.type ?? j.$pd.PLAYING,
                applicationId: l?.application_id,
                embeddedIconUrl: void 0,
                embeddedApplicationName: void 0,
                assets: l?.assets ?? void 0,
                details: l?.details ?? void 0,
                state: l?.state ?? void 0,
                timestamps: l?.timestamps ?? void 0,
                userId: e,
            };
}
function T(e) {
    let { resolvedActivity: l, showHeader: t = !0 } = e,
        { assets: s, applicationId: a, name: o, state: p, syncId: m, timestamps: A, userId: g, rawActivity: j } = l,
        y = s?.large_image ?? s?.small_image;
    return (0, i.jsxs)("div", {
        className: I.ec,
        children: [
            t
                ? (0, i.jsx)("div", {
                      className: I.N1,
                      children: (0, i.jsx)(r.D, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: N(l.type),
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: I.Wh,
                children: [
                    null != y
                        ? (0, i.jsx)(d.m, {
                              text: s?.large_text ?? null,
                              position: "top",
                              children: (0, i.jsx)(c.D, {
                                  onClick: () => (0, h.QX)(j, g),
                                  className: I.nf,
                                  children: (0, i.jsx)("img", {
                                      alt: s?.large_text ?? "",
                                      src: (0, v.uD)(a, y, [128, 128]),
                                      className: I.Sl,
                                  }),
                              }),
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: I.wt,
                        children: [
                            null != o &&
                                o.length > 0 &&
                                (0, i.jsx)(r.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children:
                                        null != m
                                            ? (0, i.jsx)(c.D, {
                                                  onClick: () => (0, h.Mp)(j),
                                                  className: I.nf,
                                                  children: o,
                                              })
                                            : o,
                                }),
                            null != p &&
                                p.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: n()(I.QJ, I.p9, I.Mo),
                                    children: (0, i.jsx)(x.A, {
                                        artists: p,
                                        canOpen: null != m,
                                        linkClassName: I.QJ,
                                        onOpenSpotifyArtist: (e) => (0, h.mN)(j, g, e),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            A?.start != null &&
                A?.end != null &&
                (0, i.jsx)(u.A, { start: A.start, end: A.end, className: I.Jq, themed: !0, singleLine: !0 }),
        ],
    });
}
function S(e) {
    let { resolvedActivity: l } = e,
        t = (0, a.bG)([m.A], () => (null != l.applicationId ? m.A.getApplication(l.applicationId) : null), [
            l.applicationId,
        ]),
        { assets: s, isGame: n, isEmbedded: r } = l;
    if (null == s || (null == s.large_image && null == s.small_image))
        return r && null != l.embeddedIconUrl
            ? (0, i.jsx)(d.m, {
                  text: l.embeddedApplicationName,
                  position: "top",
                  asContainer: !0,
                  children: (0, i.jsx)("img", {
                      alt: l.embeddedApplicationName,
                      src: l.embeddedIconUrl,
                      className: I.Sl,
                  }),
              })
            : n
              ? (0, i.jsx)(A.A, { game: t, className: I.Sl })
              : null;
    let c = s.large_image ?? s.small_image;
    return null != c
        ? (0, i.jsx)("img", {
              alt: s.large_text ?? "",
              src: (0, v.uD)(l.applicationId, c, [128, 128]),
              className: I.Sl,
          })
        : null;
}
