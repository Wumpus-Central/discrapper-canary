n.d(t, { Z: () => h });
var a = n(951288),
    r = n(647438),
    i = n(120356),
    o = n.n(i),
    l = n(442837),
    c = n(481060),
    s = n(700582),
    u = n(372900),
    d = n(318713),
    p = n(123145),
    m = n(592125),
    g = n(73249),
    y = n(369171),
    f = n(545093),
    b = n(388032),
    O = n(774846);
let _ = r.memo(function (e) {
    let { message: t } = e,
        n = (0, l.e7)([m.Z], () => m.Z.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, a.jsx)(y.ZP, {
              children: (e) =>
                  (0, a.jsxs)(u.Z.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, a.jsx)(s.Z, {
                              user: t.author,
                              size: c.EFr.SIZE_40,
                              className: o()(O.authorAvatar, e),
                          }),
                          (0, a.jsxs)("div", {
                              className: o()(O.author, e),
                              children: [
                                  (0, a.jsx)(c.Rny, {
                                      children: (0, a.jsx)("div", {
                                          className: O.authorNameWrapper,
                                          children: (0, a.jsx)(p.Z, {
                                              className: O.authorName,
                                              message: t,
                                              channel: n,
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)(d.Z, {
                                      timestamp: t.timestamp,
                                      className: O.timestamp,
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
    let { item: n, hideMediaOptions: r, onClose: i } = e,
        l = null == (t = n.sourceMetadata) ? void 0 : t.message;
    return (0, a.jsxs)("div", {
        className: O.topBar,
        children: [
            null != l && (0, a.jsx)(_, { message: l }),
            (0, a.jsx)(g.Z, {
                item: n,
                hideMediaOptions: r,
            }),
            (0, a.jsx)(y.ZP, {
                mode: y.lx.PINNED,
                children: (e) =>
                    (0, a.jsx)(f.Z, {
                        onClick: i,
                        icon: c.Dio,
                        tooltip: b.intl.string(b.t.cpT0Cg),
                        className: o()(O.closeButton, e),
                    }),
            }),
        ],
    });
}
