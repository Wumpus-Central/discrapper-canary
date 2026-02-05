n.r(t), n.d(t, { default: () => w });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    d = n(554146),
    c = n(827734),
    o = n(397927),
    u = n(726249),
    _ = n(826673),
    h = n(742589),
    x = n(637248),
    m = n(760207),
    A = n(454058),
    g = n(761640),
    C = n(71393),
    f = n(202776),
    p = n(659069),
    N = n(539916),
    j = n(746080),
    v = n(49999),
    b = n(985018),
    I = n(682628),
    E = n(638990);
function S(e) {
    let { guild: t } = e,
        n = (0, f.A)(t);
    i.useEffect(() => {
        (0, _.Dr)(d.M.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: v.i.DISMISS });
    });
    let s = n
            ? b.intl.formatToPlainString(b.t.uqZgYe, { guildName: t.name })
            : b.intl.formatToPlainString(b.t.velJea, { guildName: t.name }),
        a = n ? b.intl.string(b.t.h9mGOP) : b.intl.string(b.t.et6wav);
    return (
        (0, u.HU)({ location: s }),
        (0, l.jsxs)(h.A, {
            className: I.wx,
            innerClassname: I.MU,
            hideSearch: !0,
            channelId: j.VV.CUSTOMIZE_COMMUNITY,
            guildId: t.id,
            children: [
                (0, l.jsx)(h.A.Icon, { icon: o.kiI, "aria-hidden": !0 }),
                (0, l.jsx)(h.A.Title, { children: a }),
            ],
        })
    );
}
function w(e) {
    let { guildId: t, selectedSection: n } = e,
        s = (0, r.bG)([C.A], () => C.A.getGuild(t)),
        d = (0, f.A)(s),
        [u, _] = i.useState(n ?? N.qC.CUSTOMIZE);
    i.useEffect(() => {
        null != n && _(n);
    }, [n]),
        i.useEffect(() => {
            d || u !== N.qC.CUSTOMIZE || _(N.qC.BROWSE);
        }, [d, u]);
    let h = (0, r.bG)([g.Ay], () => g.Ay.getCurrentSidebarChannelId(j.VV.CHANNEL_BROWSER)),
        v = null != h && u === N.qC.BROWSE,
        w = (0, r.bG)([A.A], () => A.A.getNewChannelIds(t).size > 0),
        y = (0, x.RD)(t);
    return null == s
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(E.TE, { [E.js]: v }),
                      children: [
                          (0, l.jsx)(S, { guild: s }),
                          (0, l.jsxs)("div", {
                              className: a()(E.Qs, I.kL),
                              children: [
                                  d &&
                                      (0, l.jsxs)(o.VQ0, {
                                          className: I.$H,
                                          type: "top",
                                          look: "brand",
                                          selectedItem: u,
                                          onItemSelect: (e) => _(e),
                                          children: [
                                              (0, l.jsx)(
                                                  o.VQ0.Item,
                                                  {
                                                      className: I.YU,
                                                      id: N.qC.CUSTOMIZE,
                                                      children: b.intl.string(b.t.H2cICW),
                                                  },
                                                  N.qC.CUSTOMIZE,
                                              ),
                                              (0, l.jsxs)(
                                                  o.VQ0.Item,
                                                  {
                                                      className: I.YU,
                                                      id: N.qC.BROWSE,
                                                      "aria-label": b.intl.string(b.t.et6wav),
                                                      children: [
                                                          b.intl.string(b.t.et6wav),
                                                          (0, l.jsx)(o.LpS, {
                                                              text: w ? b.intl.string(b.t.psHMa6) : y,
                                                              color: w
                                                                  ? c.A.unsafe_rawColors.BRAND_260.css
                                                                  : c.A.colors.BACKGROUND_MOD_STRONG.css,
                                                              className: a()({ [I.Ad]: w }),
                                                          }),
                                                      ],
                                                  },
                                                  N.qC.BROWSE,
                                              ),
                                          ],
                                      }),
                                  (() => {
                                      switch (u) {
                                          case N.qC.CUSTOMIZE:
                                              return (0, l.jsx)(p.A, {
                                                  guildId: t,
                                                  onBrowseChannels: () => _(N.qC.BROWSE),
                                              });
                                          case N.qC.BROWSE:
                                          default:
                                              return (0, l.jsx)(m.A, { guildId: t });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  v && (0, l.jsx)(m.W, { channelId: h }),
              ],
          });
}
