l.d(t, { Gf: () => f, Tf: () => S, _Q: () => N, vP: () => T });
var i = l(477900);
l(582128);
var s = l(503698),
    n = l.n(s),
    a = l(17928);
if (/^(221552|614256)$/.test(l.j)) var d = l(297264);
var r = l(866665);
if (/^(221552|614256)$/.test(l.j)) var o = l(939249);
var c = l(672979),
    p = l(90644),
    u = l(432166),
    m = l(587895),
    A = l(769015),
    h = l(172710),
    x = l(763758),
    v = l(970928),
    j = l(486020),
    g = l(652215),
    I = l(375708),
    y = l(37921);
function N(e) {
    return (
        {
            [g.$pd.PLAYING]: I.intl.string(I.t.J4MQFX),
            [g.$pd.COMPETING]: I.intl.string(I.t.J4MQFX),
            [g.$pd.WATCHING]: I.intl.string(I.t.xeqvTg),
            [g.$pd.LISTENING]: I.intl.string(I.t.ep6av7),
        }[e] ?? I.intl.string(I.t["1+boPi"])
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
                isGame: (0, c.A)(t),
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
        { assets: s, applicationId: a, name: c, state: p, syncId: m, timestamps: A, userId: j, rawActivity: g } = t,
        I = s?.large_image ?? s?.small_image;
    return (0, i.jsxs)("div", {
        className: y.ec,
        children: [
            l
                ? (0, i.jsx)("div", {
                      className: y.N1,
                      children: (0, i.jsx)(d.D, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: N(t.type),
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: y.Wh,
                children: [
                    null != I
                        ? (0, i.jsx)(r.m, {
                              text: s?.large_text ?? null,
                              position: "top",
                              children: (0, i.jsx)(o.D, {
                                  onClick: () => (0, h.QX)(g, j),
                                  className: y.nf,
                                  children: (0, i.jsx)("img", {
                                      alt: s?.large_text ?? "",
                                      src: (0, v.uD)(a, I, [128, 128]),
                                      className: y.Sl,
                                  }),
                              }),
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: y.wt,
                        children: [
                            null != c &&
                                c.length > 0 &&
                                (0, i.jsx)(d.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children:
                                        null != m
                                            ? (0, i.jsx)(o.D, {
                                                  onClick: () => (0, h.Mp)(g),
                                                  className: y.nf,
                                                  children: c,
                                              })
                                            : c,
                                }),
                            null != p &&
                                p.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: n()(y.QJ, y.p9, y.Mo),
                                    children: (0, i.jsx)(x.A, {
                                        artists: p,
                                        canOpen: null != m,
                                        linkClassName: y.QJ,
                                        onOpenSpotifyArtist: (e) => (0, h.mN)(g, j, e),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            A?.start != null &&
                A?.end != null &&
                (0, i.jsx)(u.A, { start: A.start, end: A.end, className: y.Jq, themed: !0, singleLine: !0 }),
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
                      className: y.Sl,
                  }),
              })
            : n
              ? (0, i.jsx)(A.A, { game: l, className: y.Sl })
              : null;
    let o = s.large_image ?? s.small_image;
    return null != o
        ? (0, i.jsx)("img", {
              alt: s.large_text ?? "",
              src: (0, v.uD)(t.applicationId, o, [128, 128]),
              className: y.Sl,
          })
        : null;
}
