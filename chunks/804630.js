i.d(t, { Gf: () => S, Tf: () => b, _Q: () => f, vP: () => G });
var l = i(477900);
i(582128);
var a = i(503698),
    n = i.n(a),
    s = i(350835),
    d = i(17928),
    r = i(297264),
    c = i(866665),
    o = i(939249),
    m = i(672979),
    p = i(90644),
    u = i(432166),
    x = i(587895),
    A = i(769015),
    h = i(202163),
    v = i(172710),
    g = i(763758),
    N = i(970928),
    j = i(486020),
    y = i(105292),
    I = i(742782);
function f(e) {
    return (
        {
            [s.$.PLAYING]: y.intl.string(y.t.J4MQFX),
            [s.$.COMPETING]: y.intl.string(y.t.J4MQFX),
            [s.$.WATCHING]: y.intl.string(y.t.xeqvTg),
            [s.$.LISTENING]: y.intl.string(y.t.ep6av7),
        }[e] ?? y.intl.string(y.t["1+boPi"])
    );
}
function S(e, t, i) {
    let l;
    return null != t && (0, p.A)(t)
        ? {
              isSpotify: !0,
              name: t.details ?? t.name ?? "",
              type: s.$.LISTENING,
              assets: t.assets ?? void 0,
              applicationId: t.application_id,
              state: t.state ?? void 0,
              syncId: t.sync_id ?? void 0,
              timestamps: t.timestamps ?? void 0,
              rawActivity: t,
              userId: e,
          }
        : null != i
          ? ((l = t?.type === s.$.WATCHING ? s.$.WATCHING : s.$.PLAYING),
            {
                isSpotify: !1,
                isEmbedded: !0,
                isGame: !1,
                name: i.application.name,
                type: l,
                applicationId: i.application.id,
                embeddedIconUrl:
                    j.Ay.getApplicationIconURL({ id: i.application.id, icon: i.application.icon }) ?? void 0,
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
                isGame: (0, m.A)(t),
                name: t?.name ?? "",
                type: t?.type ?? s.$.PLAYING,
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
        { assets: a, applicationId: s, name: d, state: m, syncId: p, timestamps: x, userId: A, rawActivity: h } = t,
        j = a?.large_image ?? a?.small_image;
    return (0, l.jsxs)("div", {
        className: I.ec,
        children: [
            i
                ? (0, l.jsx)("div", {
                      className: I.N1,
                      children: (0, l.jsx)(r.D, {
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
                        ? (0, l.jsx)(c.m, {
                              text: a?.large_text ?? null,
                              position: "top",
                              children: (0, l.jsx)(o.D, {
                                  onClick: () => (0, v.QX)(h, A),
                                  className: I.nf,
                                  children: (0, l.jsx)("img", {
                                      alt: a?.large_text ?? "",
                                      src: (0, N.uD)(s, j, [128, 128]),
                                      className: I.Sl,
                                  }),
                              }),
                          })
                        : null,
                    (0, l.jsxs)("div", {
                        className: I.wt,
                        children: [
                            null != d &&
                                d.length > 0 &&
                                (0, l.jsx)(r.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children:
                                        null != p
                                            ? (0, l.jsx)(o.D, {
                                                  onClick: () => (0, v.Mp)(h),
                                                  className: I.nf,
                                                  children: d,
                                              })
                                            : d,
                                }),
                            null != m &&
                                m.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: n()(I.QJ, I.p9, I.Mo),
                                    children: (0, l.jsx)(g.A, {
                                        artists: m,
                                        canOpen: null != p,
                                        linkClassName: I.QJ,
                                        onOpenSpotifyArtist: (e) => (0, v.mN)(h, A, e),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            x?.start != null &&
                x?.end != null &&
                (0, l.jsx)(u.A, { start: x.start, end: x.end, className: I.Jq, themed: !0, singleLine: !0 }),
        ],
    });
}
function b(e) {
    let { resolvedActivity: t } = e,
        i = (0, d.bG)([x.A], () => (null != t.applicationId ? x.A.getApplication(t.applicationId) : null), [
            t.applicationId,
        ]),
        { gameRecord: a } = (0, h.A)(t.applicationId),
        { assets: n, isGame: s, isEmbedded: r } = t;
    if (null == n || (null == n.large_image && null == n.small_image))
        return r && null != t.embeddedIconUrl
            ? (0, l.jsx)(c.m, {
                  text: t.embeddedApplicationName,
                  position: "top",
                  asContainer: !0,
                  children: (0, l.jsx)("img", {
                      alt: t.embeddedApplicationName,
                      src: t.embeddedIconUrl,
                      className: I.Sl,
                  }),
              })
            : s
              ? (0, l.jsx)(A.A, { game: a ?? i, className: I.Sl })
              : null;
    let o = n.large_image ?? n.small_image;
    return null != o
        ? (0, l.jsx)("img", {
              alt: n.large_text ?? "",
              src: (0, N.uD)(t.applicationId, o, [128, 128]),
              className: I.Sl,
          })
        : null;
}
