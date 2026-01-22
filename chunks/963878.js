n.r(t),
    n.d(t, {
        default: () => E,
    }),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    c = n(554146),
    d = n(827734),
    o = n(397927),
    u = n(726249),
    f = n(826673),
    b = n(742589),
    h = n(637248),
    p = n(760207),
    g = n(454058),
    m = n(761640),
    x = n(71393),
    A = n(202776),
    j = n(659069),
    O = n(539916),
    C = n(746080),
    y = n(49999),
    v = n(985018),
    _ = n(682628),
    N = n(638990);

function w(e) {
    let { guild: t } = e,
        n = (0, A.A)(t);
    r.useEffect(() => {
        (0, f.Dr)(c.M.CHANNEL_BROWSER_NEW_BADGE_NUX, {
            dismissAction: y.i.DISMISS,
        });
    });
    let i = n
            ? v.intl.formatToPlainString(v.t.uqZgYe, {
                  guildName: t.name,
              })
            : v.intl.formatToPlainString(v.t.velJea, {
                  guildName: t.name,
              }),
        a = n ? v.intl.string(v.t.h9mGOP) : v.intl.string(v.t.et6wav);
    return (
        (0, u.HU)({
            location: i,
        }),
        (0, l.jsxs)(b.A, {
            className: _.wx,
            innerClassname: _.MU,
            hideSearch: !0,
            channelId: C.VV.CUSTOMIZE_COMMUNITY,
            guildId: t.id,
            children: [
                (0, l.jsx)(b.A.Icon, {
                    icon: o.kiI,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(b.A.Title, {
                    children: a,
                }),
            ],
        })
    );
}

function E(e) {
    let { guildId: t, selectedSection: n } = e,
        i = (0, s.bG)([x.A], () => x.A.getGuild(t)),
        c = (0, A.A)(i),
        [u, f] = r.useState(null != n ? n : O.qC.CUSTOMIZE);
    r.useEffect(() => {
        null != n && f(n);
    }, [n]),
        r.useEffect(() => {
            c || u !== O.qC.CUSTOMIZE || f(O.qC.BROWSE);
        }, [c, u]);
    let b = (0, s.bG)([m.Ay], () => m.Ay.getCurrentSidebarChannelId(C.VV.CHANNEL_BROWSER)),
        y = null != b && u === O.qC.BROWSE,
        E = (0, s.bG)([g.A], () => g.A.getNewChannelIds(t).size > 0),
        S = (0, h.RD)(t);
    return null == i
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(N.TE, {
                          [N.js]: y,
                      }),
                      children: [
                          (0, l.jsx)(w, {
                              guild: i,
                          }),
                          (0, l.jsxs)("div", {
                              className: a()(N.Qs, _.kL),
                              children: [
                                  c &&
                                      (0, l.jsxs)(o.VQ0, {
                                          className: _.$H,
                                          type: "top",
                                          look: "brand",
                                          selectedItem: u,
                                          onItemSelect: (e) => f(e),
                                          children: [
                                              (0, l.jsx)(
                                                  o.VQ0.Item,
                                                  {
                                                      className: _.YU,
                                                      id: O.qC.CUSTOMIZE,
                                                      children: v.intl.string(v.t.H2cICW),
                                                  },
                                                  O.qC.CUSTOMIZE,
                                              ),
                                              (0, l.jsxs)(
                                                  o.VQ0.Item,
                                                  {
                                                      className: _.YU,
                                                      id: O.qC.BROWSE,
                                                      "aria-label": v.intl.string(v.t.et6wav),
                                                      children: [
                                                          v.intl.string(v.t.et6wav),
                                                          (0, l.jsx)(o.LpS, {
                                                              text: E ? v.intl.string(v.t.psHMa6) : S,
                                                              color: E
                                                                  ? d.A.unsafe_rawColors.BRAND_260.css
                                                                  : d.A.colors.BACKGROUND_MOD_STRONG.css,
                                                              className: a()({
                                                                  [_.Ad]: E,
                                                              }),
                                                          }),
                                                      ],
                                                  },
                                                  O.qC.BROWSE,
                                              ),
                                          ],
                                      }),
                                  (() => {
                                      switch (u) {
                                          case O.qC.CUSTOMIZE:
                                              return (0, l.jsx)(j.A, {
                                                  guildId: t,
                                                  onBrowseChannels: () => f(O.qC.BROWSE),
                                              });
                                          case O.qC.BROWSE:
                                          default:
                                              return (0, l.jsx)(p.A, {
                                                  guildId: t,
                                              });
                                      }
                                  })(),
                              ],
                          }),
                      ],
                  }),
                  y &&
                      (0, l.jsx)(p.W, {
                          channelId: b,
                      }),
              ],
          });
}
