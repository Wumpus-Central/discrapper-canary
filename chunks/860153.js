n.d(t, { Z: () => E });
var i = n(255367),
    r = n(73800),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(700582),
    u = n(372900),
    d = n(318713),
    p = n(123145),
    m = n(592125),
    f = n(73249),
    y = n(369171),
    b = n(545093),
    O = n(388032),
    g = n(959917);
let h = r.memo(function (e) {
    let { message: t } = e,
        n = (0, a.e7)([m.Z], () => m.Z.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, i.jsx)(y.ZP, {
              children: (e) =>
                  (0, i.jsxs)(u.Z.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, i.jsx)(c.Z, {
                              user: t.author,
                              size: s.EFr.SIZE_40,
                              className: l()(g.authorAvatar, e),
                          }),
                          (0, i.jsxs)("div", {
                              className: l()(g.author, e),
                              children: [
                                  (0, i.jsx)(s.Rny, {
                                      children: (0, i.jsx)("div", {
                                          className: g.authorNameWrapper,
                                          children: (0, i.jsx)(p.Z, {
                                              className: g.authorName,
                                              message: t,
                                              channel: n,
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)(d.Z, {
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
function E(e) {
    var t;
    let { item: n, hideMediaOptions: r, onClose: o } = e,
        a = null == (t = n.sourceMetadata) ? void 0 : t.message;
    return (0, i.jsxs)("div", {
        className: g.topBar,
        children: [
            null != a && (0, i.jsx)(h, { message: a }),
            (0, i.jsx)(f.Z, {
                item: n,
                hideMediaOptions: r,
            }),
            (0, i.jsx)(y.ZP, {
                mode: y.lx.PINNED,
                children: (e) =>
                    (0, i.jsx)(b.Z, {
                        onClick: o,
                        icon: s.Dio,
                        tooltip: O.intl.string(O.t.cpT0Cg),
                        className: l()(g.closeButton, e),
                    }),
            }),
        ],
    });
}
