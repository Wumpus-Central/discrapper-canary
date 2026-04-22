t.r(n), t.d(n, { default: () => D });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(311907),
    d = t(554146),
    c = t(827734),
    o = t(740426),
    u = t(761508),
    _ = t(777666),
    h = t(726249),
    m = t(826673),
    x = t(742589),
    A = t(637248),
    C = t(760207),
    g = t(454058),
    f = t(761640),
    p = t(71393),
    N = t(202776),
    j = t(659069),
    v = t(539916),
    b = t(746080),
    E = t(49999),
    I = t(985018),
    w = t(397882),
    S = t(964623);
function y(e) {
    let { guild: n } = e,
        t = (0, N.A)(n);
    i.useEffect(() => {
        (0, m.Dr)(d.M.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: E.i.DISMISS });
    });
    let s = t
            ? I.intl.formatToPlainString(I.t.uqZgYe, { guildName: n.name })
            : I.intl.formatToPlainString(I.t.velJea, { guildName: n.name }),
        a = t ? I.intl.string(I.t.h9mGOP) : I.intl.string(I.t.et6wav);
    return (
        (0, h.HU)({ location: s }),
        (0, l.jsxs)(x.A, {
            className: w.wx,
            innerClassname: w.MU,
            hideSearch: !0,
            channelId: b.VV.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            children: [(0, l.jsx)(x.A.Icon, { icon: o.k, "aria-hidden": !0 }), (0, l.jsx)(x.A.Title, { children: a })],
        })
    );
}
function D(e) {
    let { guildId: n, selectedSection: t } = e,
        s = (0, r.bG)([p.A], () => p.A.getGuild(n)),
        d = (0, N.A)(s),
        [o, h] = i.useState(t ?? v.qC.CUSTOMIZE);
    i.useEffect(() => {
        null != t && h(t);
    }, [t]),
        i.useEffect(() => {
            d || o !== v.qC.CUSTOMIZE || h(v.qC.BROWSE);
        }, [d, o]);
    let m = (0, r.bG)([f.Ay], () => f.Ay.getCurrentSidebarChannelId(b.VV.CHANNEL_BROWSER)),
        x = null != m && o === v.qC.BROWSE,
        E = (0, r.bG)([g.A], () => g.A.getNewChannelIds(n).size > 0),
        D = (0, A.RD)(n);
    return null == s
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(S.TE, { [S.js]: x }),
                      children: [
                          (0, l.jsx)(y, { guild: s }),
                          (0, l.jsxs)("div", {
                              className: a()(S.Qs, w.kL),
                              children: [
                                  d &&
                                      (0, l.jsxs)(u.V, {
                                          className: w.$H,
                                          type: "top",
                                          look: "brand",
                                          selectedItem: o,
                                          onItemSelect: (e) => h(e),
                                          children: [
                                              (0, l.jsx)(
                                                  u.V.Item,
                                                  {
                                                      className: w.YU,
                                                      id: v.qC.CUSTOMIZE,
                                                      children: I.intl.string(I.t.H2cICW),
                                                  },
                                                  v.qC.CUSTOMIZE,
                                              ),
                                              (0, l.jsxs)(
                                                  u.V.Item,
                                                  {
                                                      className: w.YU,
                                                      id: v.qC.BROWSE,
                                                      "aria-label": I.intl.string(I.t.et6wav),
                                                      children: [
                                                          I.intl.string(I.t.et6wav),
                                                          (0, l.jsx)(_.Lp, {
                                                              text: E ? I.intl.string(I.t.psHMa6) : D,
                                                              color: E
                                                                  ? c.A.unsafe_rawColors.BRAND_260.css
                                                                  : c.A.colors.BACKGROUND_MOD_STRONG.css,
                                                              className: a()({ [w.Ad]: E }),
                                                          }),
                                                      ],
                                                  },
                                                  v.qC.BROWSE,
                                              ),
                                          ],
                                      }),
                                  (() => {
                                      switch (o) {
                                          case v.qC.CUSTOMIZE:
                                              return (0, l.jsx)(j.A, {
                                                  guildId: n,
                                                  onBrowseChannels: () => h(v.qC.BROWSE),
                                              });
                                          case v.qC.BROWSE:
                                          default:
                                              return (0, l.jsx)(C.A, { guildId: n });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  x && (0, l.jsx)(C.W, { channelId: m }),
              ],
          });
}
