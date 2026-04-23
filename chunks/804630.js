n.d(t, { Gf: () => b, Tf: () => S, _Q: () => C, vP: () => N });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(311907),
    r = n(990078),
    o = n(534514),
    d = n(939249),
    c = n(672979),
    u = n(90644),
    h = n(432166),
    A = n(587895),
    _ = n(769015),
    m = n(172710),
    g = n(763758),
    p = n(139675),
    f = n(486020),
    E = n(652215),
    x = n(985018),
    I = n(145225);
function C(e) {
    return (
        {
            [E.$pd.PLAYING]: x.intl.string(x.t.J4MQFX),
            [E.$pd.COMPETING]: x.intl.string(x.t.J4MQFX),
            [E.$pd.WATCHING]: x.intl.string(x.t.xeqvTg),
            [E.$pd.LISTENING]: x.intl.string(x.t.ep6av7),
        }[e] ?? x.intl.string(x.t["1+boPi"])
    );
}
function b(e, t, n) {
    let i;
    return null != t && (0, u.A)(t)
        ? {
              isSpotify: !0,
              name: t.details ?? t.name ?? "",
              type: E.$pd.LISTENING,
              assets: t.assets ?? void 0,
              applicationId: t.application_id,
              state: t.state ?? void 0,
              syncId: t.sync_id ?? void 0,
              timestamps: t.timestamps ?? void 0,
              rawActivity: t,
              userId: e,
          }
        : null != n
          ? ((i = t?.type === E.$pd.WATCHING ? E.$pd.WATCHING : E.$pd.PLAYING),
            {
                isSpotify: !1,
                isEmbedded: !0,
                isGame: !1,
                name: n.application.name,
                type: i,
                applicationId: n.application.id,
                embeddedIconUrl:
                    f.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }) ?? void 0,
                embeddedApplicationName: n.application.name,
                assets: t?.assets ?? void 0,
                details: t?.details ?? void 0,
                state: t?.state ?? void 0,
                timestamps: t?.timestamps ?? void 0,
                userId: e,
            })
          : {
                isSpotify: !1,
                isEmbedded: !1,
                isGame: (0, c.A)(t),
                name: t?.name ?? "",
                type: t?.type ?? E.$pd.PLAYING,
                applicationId: t?.application_id,
                embeddedIconUrl: void 0,
                embeddedApplicationName: void 0,
                assets: t?.assets ?? void 0,
                details: t?.details ?? void 0,
                state: t?.state ?? void 0,
                timestamps: t?.timestamps ?? void 0,
                userId: e,
            };
}
function N(e) {
    let { resolvedActivity: t, showHeader: n = !0 } = e,
        { assets: l, applicationId: a, name: c, state: u, syncId: A, timestamps: _, userId: f, rawActivity: E } = t,
        x = l?.large_image ?? l?.small_image;
    return (0, i.jsxs)("div", {
        className: I.ec,
        children: [
            n
                ? (0, i.jsx)("div", {
                      className: I.N1,
                      children: (0, i.jsx)(o.D, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: C(t.type),
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: I.Wh,
                children: [
                    null != x
                        ? (0, i.jsx)(r.m, {
                              text: l?.large_text ?? null,
                              position: "top",
                              children: (0, i.jsx)(d.D, {
                                  onClick: () => (0, m.QX)(E, f),
                                  className: I.nf,
                                  children: (0, i.jsx)("img", {
                                      alt: l?.large_text ?? "",
                                      src: (0, p.uD)(a, x, [128, 128]),
                                      className: I.Sl,
                                  }),
                              }),
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: I.wt,
                        children: [
                            null != c &&
                                c.length > 0 &&
                                (0, i.jsx)(o.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children:
                                        null != A
                                            ? (0, i.jsx)(d.D, {
                                                  onClick: () => (0, m.Mp)(E),
                                                  className: I.nf,
                                                  children: c,
                                              })
                                            : c,
                                }),
                            null != u &&
                                u.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: s()(I.QJ, I.p9, I.Mo),
                                    children: (0, i.jsx)(g.A, {
                                        artists: u,
                                        canOpen: null != A,
                                        linkClassName: I.QJ,
                                        onOpenSpotifyArtist: (e) => (0, m.mN)(E, f, e),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            _?.start != null &&
                _?.end != null &&
                (0, i.jsx)(h.A, { start: _.start, end: _.end, className: I.Jq, themed: !0, singleLine: !0 }),
        ],
    });
}
function S(e) {
    let { resolvedActivity: t } = e,
        n = (0, a.bG)([A.A], () => (null != t.applicationId ? A.A.getApplication(t.applicationId) : null), [
            t.applicationId,
        ]),
        { assets: l, isGame: s, isEmbedded: o } = t;
    if (null == l || (null == l.large_image && null == l.small_image))
        return o && null != t.embeddedIconUrl
            ? (0, i.jsx)(r.m, {
                  text: t.embeddedApplicationName,
                  position: "top",
                  asContainer: !0,
                  children: (0, i.jsx)("img", {
                      alt: t.embeddedApplicationName,
                      src: t.embeddedIconUrl,
                      className: I.Sl,
                  }),
              })
            : s
              ? (0, i.jsx)(_.A, { game: n, className: I.Sl })
              : null;
    let d = l.large_image ?? l.small_image;
    return null != d
        ? (0, i.jsx)("img", {
              alt: l.large_text ?? "",
              src: (0, p.uD)(t.applicationId, d, [128, 128]),
              className: I.Sl,
          })
        : null;
}
