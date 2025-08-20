n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(700582),
    u = n(372900),
    d = n(318713),
    p = n(123145),
    f = n(592125),
    y = n(73249),
    m = n(369171),
    O = n(545093),
    b = n(388032),
    g = n(774846);
let E = i.memo(function (e) {
    let { message: t } = e,
        n = (0, a.e7)([f.Z], () => f.Z.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, r.jsx)(m.ZP, {
              children: (e) =>
                  (0, r.jsxs)(u.Z.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, r.jsx)(c.Z, {
                              user: t.author,
                              size: s.EFr.SIZE_40,
                              className: o()(g.authorAvatar, e),
                          }),
                          (0, r.jsxs)("div", {
                              className: o()(g.author, e),
                              children: [
                                  (0, r.jsx)(s.Rny, {
                                      children: (0, r.jsx)("div", {
                                          className: g.authorNameWrapper,
                                          children: (0, r.jsx)(p.Z, {
                                              className: g.authorName,
                                              message: t,
                                              channel: n,
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)(d.Z, {
                                      timestamp: t.timestamp,
                                      className: g.timestamp,
                                      tooltipPosition: "bottom",
                                  }),
                              ],
                          }),
                      ],
                  }),
          });
});
function h(e) {
    var t;
    let { item: n, hideMediaOptions: i, onClose: l } = e,
        a = null == (t = n.sourceMetadata) ? void 0 : t.message;
    return (0, r.jsxs)("div", {
        className: g.topBar,
        children: [
            null != a && (0, r.jsx)(E, { message: a }),
            (0, r.jsx)(y.Z, {
                item: n,
                hideMediaOptions: i,
            }),
            (0, r.jsx)(m.ZP, {
                mode: m.lx.PINNED,
                children: (e) =>
                    (0, r.jsx)(O.Z, {
                        onClick: l,
                        icon: s.Dio,
                        tooltip: b.intl.string(b.t.cpT0Cg),
                        className: o()(g.closeButton, e),
                    }),
            }),
        ],
    });
}
