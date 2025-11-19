n.d(t, { Z: () => b });
var i = n(54381),
    l = n(473749),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    u = n(700582),
    c = n(372900),
    d = n(318713),
    p = n(123145),
    m = n(592125),
    y = n(73249),
    f = n(369171),
    E = n(545093),
    O = n(388032),
    h = n(578436);
let S = l.memo(function (e) {
    let { message: t } = e,
        n = (0, o.e7)([m.Z], () => m.Z.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, i.jsx)(f.ZP, {
              children: (e) =>
                  (0, i.jsxs)(c.Z.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, i.jsx)(u.Z, {
                              user: t.author,
                              size: s.EFr.SIZE_40,
                              className: a()(h.authorAvatar, e),
                          }),
                          (0, i.jsxs)("div", {
                              className: a()(h.author, e),
                              children: [
                                  (0, i.jsx)(s.Rny, {
                                      children: (0, i.jsx)("div", {
                                          className: h.authorNameWrapper,
                                          children: (0, i.jsx)(p.Z, {
                                              className: h.authorName,
                                              message: t,
                                              channel: n,
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)(d.Z, {
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
function b(e) {
    var t;
    let { item: n, hideMediaOptions: l, onClose: r } = e,
        o = null == (t = n.sourceMetadata) ? void 0 : t.message;
    return (0, i.jsxs)("div", {
        className: h.topBar,
        children: [
            null != o && (0, i.jsx)(S, { message: o }),
            (0, i.jsx)(y.Z, {
                item: n,
                hideMediaOptions: l,
            }),
            (0, i.jsx)(f.ZP, {
                mode: f.lx.PINNED,
                children: (e) =>
                    (0, i.jsx)(E.Z, {
                        onClick: r,
                        icon: s.Dio,
                        tooltip: O.intl.string(O.t.cpT0Cq),
                        className: a()(h.closeButton, e),
                    }),
            }),
        ],
    });
}
