i.d(t, { Gf: () => S, Tf: () => b, _Q: () => f, vP: () => G });
var l = i(477900);
i(582128);
var a = i(503698),
    n = i.n(a),
    s = i(17928),
    d = i(297264),
    r = i(866665),
    c = i(939249),
    o = i(672979),
    p = i(90644),
    m = i(432166),
    u = i(587895),
    x = i(769015),
    A = i(202163),
    h = i(172710),
    v = i(763758),
    g = i(970928),
    N = i(486020),
    j = i(652215),
    y = i(375708),
    I = i(742782);
function f(e) {
    return (
        {
            [j.$pd.PLAYING]: y.intl.string(y.t.J4MQFX),
            [j.$pd.COMPETING]: y.intl.string(y.t.J4MQFX),
            [j.$pd.WATCHING]: y.intl.string(y.t.xeqvTg),
            [j.$pd.LISTENING]: y.intl.string(y.t.ep6av7),
        }[e] ?? y.intl.string(y.t["1+boPi"])
    );
}
function S(e, t, i) {
    let l;
    return null != t && (0, p.A)(t)
        ? {
              isSpotify: !0,
              name: t.details ?? t.name ?? "",
              type: j.$pd.LISTENING,
              assets: t.assets ?? void 0,
              applicationId: t.application_id,
              state: t.state ?? void 0,
              syncId: t.sync_id ?? void 0,
              timestamps: t.timestamps ?? void 0,
              rawActivity: t,
              userId: e,
          }
        : null != i
          ? ((l = t?.type === j.$pd.WATCHING ? j.$pd.WATCHING : j.$pd.PLAYING),
            {
                isSpotify: !1,
                isEmbedded: !0,
                isGame: !1,
                name: i.application.name,
                type: l,
                applicationId: i.application.id,
                embeddedIconUrl:
                    N.Ay.getApplicationIconURL({ id: i.application.id, icon: i.application.icon }) ?? void 0,
                embeddedApplicationName: i.application.name,
                assets: t?.assets ?? void 0,
                details: t?.details ?? void 0,
                state: t?.state ?? void 0,
                timestamps: t?.timestamps ?? void 0,
                userId: e,
            })
          : {
                isSpotify: !1,
                isEmbedded: !1,
                isGame: (0, o.A)(t),
                name: t?.name ?? "",
                type: t?.type ?? j.$pd.PLAYING,
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
function G(e) {
    let { resolvedActivity: t, showHeader: i = !0 } = e,
        { assets: a, applicationId: s, name: o, state: p, syncId: u, timestamps: x, userId: A, rawActivity: N } = t,
        j = a?.large_image ?? a?.small_image;
    return (0, l.jsxs)("div", {
        className: I.ec,
        children: [
            i
                ? (0, l.jsx)("div", {
                      className: I.N1,
                      children: (0, l.jsx)(d.D, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: f(t.type),
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                className: I.Wh,
                children: [
                    null != j
                        ? (0, l.jsx)(r.m, {
                              text: a?.large_text ?? null,
                              position: "top",
                              children: (0, l.jsx)(c.D, {
                                  onClick: () => (0, h.QX)(N, A),
                                  className: I.nf,
                                  children: (0, l.jsx)("img", {
                                      alt: a?.large_text ?? "",
                                      src: (0, g.uD)(s, j, [128, 128]),
                                      className: I.Sl,
                                  }),
                              }),
                          })
                        : null,
                    (0, l.jsxs)("div", {
                        className: I.wt,
                        children: [
                            null != o &&
                                o.length > 0 &&
                                (0, l.jsx)(d.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children:
                                        null != u
                                            ? (0, l.jsx)(c.D, {
                                                  onClick: () => (0, h.Mp)(N),
                                                  className: I.nf,
                                                  children: o,
                                              })
                                            : o,
                                }),
                            null != p &&
                                p.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: n()(I.QJ, I.p9, I.Mo),
                                    children: (0, l.jsx)(v.A, {
                                        artists: p,
                                        canOpen: null != u,
                                        linkClassName: I.QJ,
                                        onOpenSpotifyArtist: (e) => (0, h.mN)(N, A, e),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            x?.start != null &&
                x?.end != null &&
                (0, l.jsx)(m.A, { start: x.start, end: x.end, className: I.Jq, themed: !0, singleLine: !0 }),
        ],
    });
}
function b(e) {
    let { resolvedActivity: t } = e,
        i = (0, s.bG)([u.A], () => (null != t.applicationId ? u.A.getApplication(t.applicationId) : null), [
            t.applicationId,
        ]),
        { gameRecord: a } = (0, A.A)(t.applicationId),
        { assets: n, isGame: d, isEmbedded: c } = t;
    if (null == n || (null == n.large_image && null == n.small_image))
        return c && null != t.embeddedIconUrl
            ? (0, l.jsx)(r.m, {
                  text: t.embeddedApplicationName,
                  position: "top",
                  asContainer: !0,
                  children: (0, l.jsx)("img", {
                      alt: t.embeddedApplicationName,
                      src: t.embeddedIconUrl,
                      className: I.Sl,
                  }),
              })
            : d
              ? (0, l.jsx)(x.A, { game: a ?? i, className: I.Sl })
              : null;
    let o = n.large_image ?? n.small_image;
    return null != o
        ? (0, l.jsx)("img", {
              alt: n.large_text ?? "",
              src: (0, g.uD)(t.applicationId, o, [128, 128]),
              className: I.Sl,
          })
        : null;
}
