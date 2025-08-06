n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
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
    h = n(114047);
let E = i.memo(function (e) {
    let { message: t } = e,
        n = (0, a.e7)([m.Z], () => m.Z.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, r.jsx)(y.ZP, {
              children: (e) =>
                  (0, r.jsxs)(u.Z.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, r.jsx)(c.Z, {
                              user: t.author,
                              size: s.EFr.SIZE_40,
                              className: l()(h.authorAvatar, e),
                          }),
                          (0, r.jsxs)("div", {
                              className: l()(h.author, e),
                              children: [
                                  (0, r.jsx)(s.Rny, {
                                      children: (0, r.jsx)("div", {
                                          className: h.authorNameWrapper,
                                          children: (0, r.jsx)(p.Z, {
                                              className: h.authorName,
                                              message: t,
                                              channel: n,
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)(d.Z, {
                                      timestamp: t.timestamp,
                                      className: h.timestamp,
                                      tooltipPosition: "bottom",
                                  }),
                              ],
                          }),
                      ],
                  }),
          });
});
function g(e) {
    var t;
    let { item: n, hideMediaOptions: i, onClose: o } = e,
        a = null == (t = n.sourceMetadata) ? void 0 : t.message;
    return (0, r.jsxs)("div", {
        className: h.topBar,
        children: [
            null != a && (0, r.jsx)(E, { message: a }),
            (0, r.jsx)(f.Z, {
                item: n,
                hideMediaOptions: i,
            }),
            (0, r.jsx)(y.ZP, {
                mode: y.lx.PINNED,
                children: (e) =>
                    (0, r.jsx)(b.Z, {
                        onClick: o,
                        icon: s.Dio,
                        tooltip: O.intl.string(O.t.cpT0Cg),
                        className: l()(h.closeButton, e),
                    }),
            }),
        ],
    });
}
