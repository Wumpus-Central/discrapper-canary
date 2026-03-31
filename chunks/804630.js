i.d(t, { Gf: () => p, Tf: () => h });
var n = i(627968);
i(64700), i(503698);
var a = i(311907),
    l = i(990078);
i(397927);
var s = i(672979),
    r = i(90644);
i(432166);
var o = i(587895),
    c = i(769015);
i(290987), i(172710), i(763758);
var d = i(139675),
    u = i(486020),
    m = i(652215);
i(985018);
var _ = i(812810);
function p(e, t, i) {
    let n;
    return null != t && (0, r.A)(t)
        ? {
              isSpotify: !0,
              name: t.details ?? t.name ?? "",
              type: m.$pd.LISTENING,
              assets: t.assets ?? void 0,
              applicationId: t.application_id,
              state: t.state ?? void 0,
              syncId: t.sync_id ?? void 0,
              timestamps: t.timestamps ?? void 0,
              rawActivity: t,
              userId: e,
          }
        : null != i
          ? ((n = t?.type === m.$pd.WATCHING ? m.$pd.WATCHING : m.$pd.PLAYING),
            {
                isSpotify: !1,
                isEmbedded: !0,
                isGame: !1,
                name: i.application.name,
                type: n,
                applicationId: i.application.id,
                embeddedIconUrl:
                    u.Ay.getApplicationIconURL({ id: i.application.id, icon: i.application.icon }) ?? void 0,
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
                isGame: (0, s.A)(t),
                name: t?.name ?? "",
                type: t?.type ?? m.$pd.PLAYING,
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
function h(e) {
    let { resolvedActivity: t } = e,
        i = (0, a.bG)([o.A], () => (null != t.applicationId ? o.A.getApplication(t.applicationId) : null), [
            t.applicationId,
        ]),
        { assets: s, isGame: r, isEmbedded: u } = t;
    if (null == s || (null == s.large_image && null == s.small_image))
        return u && null != t.embeddedIconUrl
            ? (0, n.jsx)(l.m, {
                  text: t.embeddedApplicationName,
                  position: "top",
                  asContainer: !0,
                  children: (0, n.jsx)("img", {
                      alt: t.embeddedApplicationName,
                      src: t.embeddedIconUrl,
                      className: _.Sl,
                  }),
              })
            : r
              ? (0, n.jsx)(c.A, { game: i, className: _.Sl })
              : null;
    let m = s.large_image ?? s.small_image;
    return null != m
        ? (0, n.jsx)("img", {
              alt: s.large_text ?? "",
              src: (0, d.uD)(t.applicationId, m, [128, 128]),
              className: _.Sl,
          })
        : null;
}
