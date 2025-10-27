n.d(t, { Z: () => h });
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(700582),
    u = n(372900),
    d = n(318713),
    f = n(123145),
    p = n(592125),
    m = n(73249),
    y = n(369171),
    O = n(545093),
    b = n(388032),
    E = n(774846);
let g = r.memo(function (e) {
    let { message: t } = e,
        n = (0, o.e7)([p.Z], () => p.Z.getChannel(t.channel_id));
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
                              className: a()(E.authorAvatar, e),
                          }),
                          (0, i.jsxs)("div", {
                              className: a()(E.author, e),
                              children: [
                                  (0, i.jsx)(s.Rny, {
                                      children: (0, i.jsx)("div", {
                                          className: E.authorNameWrapper,
                                          children: (0, i.jsx)(f.Z, {
                                              className: E.authorName,
                                              message: t,
                                              channel: n,
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)(d.Z, {
                                      timestamp: t.timestamp,
                                      className: E.timestamp,
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
    let { item: n, hideMediaOptions: r, onClose: l } = e,
        o = null == (t = n.sourceMetadata) ? void 0 : t.message;
    return (0, i.jsxs)("div", {
        className: E.topBar,
        children: [
            null != o && (0, i.jsx)(g, { message: o }),
            (0, i.jsx)(m.Z, {
                item: n,
                hideMediaOptions: r,
            }),
            (0, i.jsx)(y.ZP, {
                mode: y.lx.PINNED,
                children: (e) =>
                    (0, i.jsx)(O.Z, {
                        onClick: l,
                        icon: s.Dio,
                        tooltip: b.intl.string(b.t.cpT0Cq),
                        className: a()(E.closeButton, e),
                    }),
            }),
        ],
    });
}
