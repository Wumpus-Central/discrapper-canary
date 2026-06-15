i.d(t, { Gf: () => f, Tf: () => b, _Q: () => I, vP: () => S });
var l = i(627968);
i(64700);
var n = i(503698),
    a = i.n(n),
    s = i(17928),
    d = i(990078),
    r = i(534514),
    c = i(939249),
    o = i(672979),
    p = i(90644),
    m = i(432166),
    u = i(587895),
    x = i(137177),
    h = i(172710),
    A = i(763758),
    v = i(970928),
    g = i(486020),
    N = i(652215),
    j = i(375708),
    y = i(145225);
function I(e) {
    return (
        {
            [N.$pd.PLAYING]: j.intl.string(j.t.J4MQFX),
            [N.$pd.COMPETING]: j.intl.string(j.t.J4MQFX),
            [N.$pd.WATCHING]: j.intl.string(j.t.xeqvTg),
            [N.$pd.LISTENING]: j.intl.string(j.t.ep6av7),
        }[e] ?? j.intl.string(j.t["1+boPi"])
    );
}
function f(e, t, i) {
    let l;
    return null != t && (0, p.A)(t)
        ? {
              isSpotify: !0,
              name: t.details ?? t.name ?? "",
              type: N.$pd.LISTENING,
              assets: t.assets ?? void 0,
              applicationId: t.application_id,
              state: t.state ?? void 0,
              syncId: t.sync_id ?? void 0,
              timestamps: t.timestamps ?? void 0,
              rawActivity: t,
              userId: e,
          }
        : null != i
          ? ((l = t?.type === N.$pd.WATCHING ? N.$pd.WATCHING : N.$pd.PLAYING),
            {
                isSpotify: !1,
                isEmbedded: !0,
                isGame: !1,
                name: i.application.name,
                type: l,
                applicationId: i.application.id,
                embeddedIconUrl:
                    g.Ay.getApplicationIconURL({ id: i.application.id, icon: i.application.icon }) ?? void 0,
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
                type: t?.type ?? N.$pd.PLAYING,
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
function S(e) {
    let { resolvedActivity: t, showHeader: i = !0 } = e,
        { assets: n, applicationId: s, name: o, state: p, syncId: u, timestamps: x, userId: g, rawActivity: N } = t,
        j = n?.large_image ?? n?.small_image;
    return (0, l.jsxs)("div", {
        className: y.ec,
        children: [
            i
                ? (0, l.jsx)("div", {
                      className: y.N1,
                      children: (0, l.jsx)(r.D, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: I(t.type),
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                className: y.Wh,
                children: [
                    null != j
                        ? (0, l.jsx)(d.m, {
                              text: n?.large_text ?? null,
                              position: "top",
                              children: (0, l.jsx)(c.D, {
                                  onClick: () => (0, h.QX)(N, g),
                                  className: y.nf,
                                  children: (0, l.jsx)("img", {
                                      alt: n?.large_text ?? "",
                                      src: (0, v.uD)(s, j, [128, 128]),
                                      className: y.Sl,
                                  }),
                              }),
                          })
                        : null,
                    (0, l.jsxs)("div", {
                        className: y.wt,
                        children: [
                            null != o &&
                                o.length > 0 &&
                                (0, l.jsx)(r.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children:
                                        null != u
                                            ? (0, l.jsx)(c.D, {
                                                  onClick: () => (0, h.Mp)(N),
                                                  className: y.nf,
                                                  children: o,
                                              })
                                            : o,
                                }),
                            null != p &&
                                p.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: a()(y.QJ, y.p9, y.Mo),
                                    children: (0, l.jsx)(A.A, {
                                        artists: p,
                                        canOpen: null != u,
                                        linkClassName: y.QJ,
                                        onOpenSpotifyArtist: (e) => (0, h.mN)(N, g, e),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            x?.start != null &&
                x?.end != null &&
                (0, l.jsx)(m.A, { start: x.start, end: x.end, className: y.Jq, themed: !0, singleLine: !0 }),
        ],
    });
}
function b(e) {
    let { resolvedActivity: t } = e,
        i = (0, s.bG)([u.A], () => (null != t.applicationId ? u.A.getApplication(t.applicationId) : null), [
            t.applicationId,
        ]),
        { assets: n, isGame: a, isEmbedded: r } = t;
    if (null == n || (null == n.large_image && null == n.small_image))
        return r && null != t.embeddedIconUrl
            ? (0, l.jsx)(d.m, {
                  text: t.embeddedApplicationName,
                  position: "top",
                  asContainer: !0,
                  children: (0, l.jsx)("img", {
                      alt: t.embeddedApplicationName,
                      src: t.embeddedIconUrl,
                      className: y.Sl,
                  }),
              })
            : a
              ? (0, l.jsx)(x.A, { game: i, className: y.Sl })
              : null;
    let c = n.large_image ?? n.small_image;
    return null != c
        ? (0, l.jsx)("img", {
              alt: n.large_text ?? "",
              src: (0, v.uD)(t.applicationId, c, [128, 128]),
              className: y.Sl,
          })
        : null;
}
