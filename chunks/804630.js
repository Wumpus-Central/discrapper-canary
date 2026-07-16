l.d(t, { Gf: () => f, Tf: () => S, _Q: () => N, vP: () => T });
var i = l(627968);
l(64700);
var s = l(503698),
    n = l.n(s),
    a = l(17928);
if (/^(14256|21552)$/.test(l.j)) var d = l(297264);
var r = l(866665);
if (/^(14256|21552)$/.test(l.j)) var c = l(939249);
var o = l(672979),
    p = l(90644),
    u = l(432166),
    m = l(587895),
    A = l(769015),
    h = l(172710),
    x = l(763758),
    v = l(970928),
    j = l(486020),
    g = l(652215),
    y = l(375708),
    I = l(145225);
function N(e) {
    return (
        {
            [g.$pd.PLAYING]: y.intl.string(y.t.J4MQFX),
            [g.$pd.COMPETING]: y.intl.string(y.t.J4MQFX),
            [g.$pd.WATCHING]: y.intl.string(y.t.xeqvTg),
            [g.$pd.LISTENING]: y.intl.string(y.t.ep6av7),
        }[e] ?? y.intl.string(y.t["1+boPi"])
    );
}
function f(e, t, l) {
    let i;
    return null != t && (0, p.A)(t)
        ? {
              isSpotify: !0,
              name: t.details ?? t.name ?? "",
              type: g.$pd.LISTENING,
              assets: t.assets ?? void 0,
              applicationId: t.application_id,
              state: t.state ?? void 0,
              syncId: t.sync_id ?? void 0,
              timestamps: t.timestamps ?? void 0,
              rawActivity: t,
              userId: e,
          }
        : null != l
          ? ((i = t?.type === g.$pd.WATCHING ? g.$pd.WATCHING : g.$pd.PLAYING),
            {
                isSpotify: !1,
                isEmbedded: !0,
                isGame: !1,
                name: l.application.name,
                type: i,
                applicationId: l.application.id,
                embeddedIconUrl:
                    j.Ay.getApplicationIconURL({ id: l.application.id, icon: l.application.icon }) ?? void 0,
                embeddedApplicationName: l.application.name,
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
                type: t?.type ?? g.$pd.PLAYING,
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
function T(e) {
    let { resolvedActivity: t, showHeader: l = !0 } = e,
        { assets: s, applicationId: a, name: o, state: p, syncId: m, timestamps: A, userId: j, rawActivity: g } = t,
        y = s?.large_image ?? s?.small_image;
    return (0, i.jsxs)("div", {
        className: I.ec,
        children: [
            l
                ? (0, i.jsx)("div", {
                      className: I.N1,
                      children: (0, i.jsx)(d.D, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: N(t.type),
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: I.Wh,
                children: [
                    null != y
                        ? (0, i.jsx)(r.m, {
                              text: s?.large_text ?? null,
                              position: "top",
                              children: (0, i.jsx)(c.D, {
                                  onClick: () => (0, h.QX)(g, j),
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
                                (0, i.jsx)(d.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children:
                                        null != m
                                            ? (0, i.jsx)(c.D, {
                                                  onClick: () => (0, h.Mp)(g),
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
                                        onOpenSpotifyArtist: (e) => (0, h.mN)(g, j, e),
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
    let { resolvedActivity: t } = e,
        l = (0, a.bG)([m.A], () => (null != t.applicationId ? m.A.getApplication(t.applicationId) : null), [
            t.applicationId,
        ]),
        { assets: s, isGame: n, isEmbedded: d } = t;
    if (null == s || (null == s.large_image && null == s.small_image))
        return d && null != t.embeddedIconUrl
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
            : n
              ? (0, i.jsx)(A.A, { game: l, className: I.Sl })
              : null;
    let c = s.large_image ?? s.small_image;
    return null != c
        ? (0, i.jsx)("img", {
              alt: s.large_text ?? "",
              src: (0, v.uD)(t.applicationId, c, [128, 128]),
              className: I.Sl,
          })
        : null;
}
