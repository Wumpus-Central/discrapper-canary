var l = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    r = n(350835),
    s = n(855986),
    o = n(534514),
    u = n(866665),
    c = n(939249),
    d = n(672979),
    m = n(90644),
    A = n(432166),
    p = n(587895),
    h = n(769015),
    f = n(202163),
    g = n(172710),
    x = n(763758),
    I = n(913659),
    v = n(486020),
    T = n(792996),
    S = n(742782);
function y(e) {
    return (
        {
            [r.$.PLAYING]: T.intl.string(T.t.J4MQFX),
            [r.$.COMPETING]: T.intl.string(T.t.J4MQFX),
            [r.$.WATCHING]: T.intl.string(T.t.xeqvTg),
            [r.$.LISTENING]: T.intl.string(T.t.ep6av7),
        }[e] ?? T.intl.string(T.t["1+boPi"])
    );
}
n.d(
    t,
    {},
    {
        Gf: function (e, t, n) {
            let l;
            return null != t && (0, m.A)(t)
                ? {
                      isSpotify: !0,
                      name: t.details ?? t.name ?? "",
                      type: r.$.LISTENING,
                      assets: t.assets ?? void 0,
                      applicationId: t.application_id,
                      state: t.state ?? void 0,
                      syncId: t.sync_id ?? void 0,
                      timestamps: t.timestamps ?? void 0,
                      rawActivity: t,
                      userId: e,
                  }
                : null != n
                  ? ((l = t?.type === r.$.WATCHING ? r.$.WATCHING : r.$.PLAYING),
                    {
                        isSpotify: !1,
                        isEmbedded: !0,
                        isGame: !1,
                        name: n.application.name,
                        type: l,
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
                        isGame: (0, d.A)(t),
                        name: t?.name ?? "",
                        type: t?.type ?? r.$.PLAYING,
                        applicationId: t?.application_id,
                        embeddedIconUrl: void 0,
                        embeddedApplicationName: void 0,
                        assets: t?.assets ?? void 0,
                        details: t?.details ?? void 0,
                        state: t?.state ?? void 0,
                        timestamps: t?.timestamps ?? void 0,
                        userId: e,
                    };
        },
        Tf: function (e) {
            let { resolvedActivity: t } = e,
                n = (0, s.bG)([p.A], () => (null != t.applicationId ? p.A.getApplication(t.applicationId) : null), [
                    t.applicationId,
                ]),
                { gameRecord: i } = (0, f.Ay)(t.applicationId),
                { assets: a, isGame: r, isEmbedded: o } = t;
            if (null == a || (null == a.large_image && null == a.small_image))
                return o && null != t.embeddedIconUrl
                    ? (0, l.jsx)(u.m, {
                          text: t.embeddedApplicationName,
                          position: "top",
                          asContainer: !0,
                          children: (0, l.jsx)("img", {
                              alt: t.embeddedApplicationName,
                              src: t.embeddedIconUrl,
                              className: S.Sl,
                          }),
                      })
                    : r
                      ? (0, l.jsx)(h.A, { game: i ?? n, className: S.Sl })
                      : null;
            let c = a.large_image ?? a.small_image;
            return null != c
                ? (0, l.jsx)("img", {
                      alt: a.large_text ?? "",
                      src: (0, I.uD)(t.applicationId, c, [128, 128]),
                      className: S.Sl,
                  })
                : null;
        },
        _Q: y,
        vP: function (e) {
            let { resolvedActivity: t, showHeader: n = !0 } = e,
                {
                    assets: i,
                    applicationId: r,
                    name: s,
                    state: d,
                    syncId: m,
                    timestamps: p,
                    userId: h,
                    rawActivity: f,
                } = t,
                v = i?.large_image ?? i?.small_image;
            return (0, l.jsxs)("div", {
                className: S.ec,
                children: [
                    n
                        ? (0, l.jsx)("div", {
                              className: S.N1,
                              children: (0, l.jsx)(o.D, {
                                  variant: "body-xs/medium",
                                  color: "text-muted",
                                  children: y(t.type),
                              }),
                          })
                        : null,
                    (0, l.jsxs)("div", {
                        className: S.Wh,
                        children: [
                            null != v
                                ? (0, l.jsx)(u.m, {
                                      text: i?.large_text ?? null,
                                      position: "top",
                                      children: (0, l.jsx)(c.D, {
                                          onClick: () => (0, g.QX)(f, h),
                                          className: S.nf,
                                          children: (0, l.jsx)("img", {
                                              alt: i?.large_text ?? "",
                                              src: (0, I.uD)(r, v, [128, 128]),
                                              className: S.Sl,
                                          }),
                                      }),
                                  })
                                : null,
                            (0, l.jsxs)("div", {
                                className: S.wt,
                                children: [
                                    null != s &&
                                        s.length > 0 &&
                                        (0, l.jsx)(o.D, {
                                            variant: "heading-xs/medium",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children:
                                                null != m
                                                    ? (0, l.jsx)(c.D, {
                                                          onClick: () => (0, g.Mp)(f),
                                                          className: S.nf,
                                                          children: s,
                                                      })
                                                    : s,
                                        }),
                                    null != d &&
                                        d.length > 0 &&
                                        (0, l.jsx)("div", {
                                            className: a()(S.QJ, S.p9, S.Mo),
                                            children: (0, l.jsx)(x.A, {
                                                artists: d,
                                                canOpen: null != m,
                                                linkClassName: S.QJ,
                                                onOpenSpotifyArtist: (e) => (0, g.mN)(f, h, e),
                                            }),
                                        }),
                                ],
                            }),
                        ],
                    }),
                    p?.start != null &&
                        p?.end != null &&
                        (0, l.jsx)(A.A, { start: p.start, end: p.end, className: S.Jq, themed: !0, singleLine: !0 }),
                ],
            });
        },
    },
);
