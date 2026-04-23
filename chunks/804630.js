n.d(t, { Gf: () => S, Tf: () => C, _Q: () => N, vP: () => y });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    r = n(17928),
    s = n(990078);
if (/^(14256|21552)$/.test(n.j)) var o = n(534514);
if (/^(14256|21552)$/.test(n.j)) var d = n(939249);
var c = n(672979),
    u = n(90644),
    p = n(432166),
    m = n(587895),
    h = n(137177),
    g = n(172710),
    A = n(763758),
    f = n(970928),
    v = n(486020),
    x = n(652215),
    I = n(985018),
    E = n(145225);
function N(e) {
    return (
        {
            [x.$pd.PLAYING]: I.intl.string(I.t.J4MQFX),
            [x.$pd.COMPETING]: I.intl.string(I.t.J4MQFX),
            [x.$pd.WATCHING]: I.intl.string(I.t.xeqvTg),
            [x.$pd.LISTENING]: I.intl.string(I.t.ep6av7),
        }[e] ?? I.intl.string(I.t["1+boPi"])
    );
}
function S(e, t, n) {
    let i;
    return null != t && (0, u.A)(t)
        ? {
              isSpotify: !0,
              name: t.details ?? t.name ?? "",
              type: x.$pd.LISTENING,
              assets: t.assets ?? void 0,
              applicationId: t.application_id,
              state: t.state ?? void 0,
              syncId: t.sync_id ?? void 0,
              timestamps: t.timestamps ?? void 0,
              rawActivity: t,
              userId: e,
          }
        : null != n
          ? ((i = t?.type === x.$pd.WATCHING ? x.$pd.WATCHING : x.$pd.PLAYING),
            {
                isSpotify: !1,
                isEmbedded: !0,
                isGame: !1,
                name: n.application.name,
                type: i,
                applicationId: n.application.id,
                embeddedIconUrl:
                    v.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }) ?? void 0,
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
                type: t?.type ?? x.$pd.PLAYING,
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
function y(e) {
    let { resolvedActivity: t, showHeader: n = !0 } = e,
        { assets: a, applicationId: r, name: c, state: u, syncId: m, timestamps: h, userId: v, rawActivity: x } = t,
        I = a?.large_image ?? a?.small_image;
    return (0, i.jsxs)("div", {
        className: E.ec,
        children: [
            n
                ? (0, i.jsx)("div", {
                      className: E.N1,
                      children: (0, i.jsx)(o.D, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: N(t.type),
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: E.Wh,
                children: [
                    null != I
                        ? (0, i.jsx)(s.m, {
                              text: a?.large_text ?? null,
                              position: "top",
                              children: (0, i.jsx)(d.D, {
                                  onClick: () => (0, g.QX)(x, v),
                                  className: E.nf,
                                  children: (0, i.jsx)("img", {
                                      alt: a?.large_text ?? "",
                                      src: (0, f.uD)(r, I, [128, 128]),
                                      className: E.Sl,
                                  }),
                              }),
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: E.wt,
                        children: [
                            null != c &&
                                c.length > 0 &&
                                (0, i.jsx)(o.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children:
                                        null != m
                                            ? (0, i.jsx)(d.D, {
                                                  onClick: () => (0, g.Mp)(x),
                                                  className: E.nf,
                                                  children: c,
                                              })
                                            : c,
                                }),
                            null != u &&
                                u.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: l()(E.QJ, E.p9, E.Mo),
                                    children: (0, i.jsx)(A.A, {
                                        artists: u,
                                        canOpen: null != m,
                                        linkClassName: E.QJ,
                                        onOpenSpotifyArtist: (e) => (0, g.mN)(x, v, e),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            h?.start != null &&
                h?.end != null &&
                (0, i.jsx)(p.A, { start: h.start, end: h.end, className: E.Jq, themed: !0, singleLine: !0 }),
        ],
    });
}
function C(e) {
    let { resolvedActivity: t } = e,
        n = (0, r.bG)([m.A], () => (null != t.applicationId ? m.A.getApplication(t.applicationId) : null), [
            t.applicationId,
        ]),
        { assets: a, isGame: l, isEmbedded: o } = t;
    if (null == a || (null == a.large_image && null == a.small_image))
        return o && null != t.embeddedIconUrl
            ? (0, i.jsx)(s.m, {
                  text: t.embeddedApplicationName,
                  position: "top",
                  asContainer: !0,
                  children: (0, i.jsx)("img", {
                      alt: t.embeddedApplicationName,
                      src: t.embeddedIconUrl,
                      className: E.Sl,
                  }),
              })
            : l
              ? (0, i.jsx)(h.A, { game: n, className: E.Sl })
              : null;
    let d = a.large_image ?? a.small_image;
    return null != d
        ? (0, i.jsx)("img", {
              alt: a.large_text ?? "",
              src: (0, f.uD)(t.applicationId, d, [128, 128]),
              className: E.Sl,
          })
        : null;
}
