n.d(t, { Z: () => h });
var a = n(255367),
    r = n(73800),
    i = n(120356),
    o = n.n(i),
    c = n(442837),
    l = n(481060),
    s = n(700582),
    u = n(372900),
    d = n(318713),
    p = n(123145),
    m = n(592125),
    g = n(73249),
    f = n(369171),
    b = n(545093),
    O = n(388032),
    y = n(114047);
let _ = r.memo(function (e) {
    let { message: t } = e,
        n = (0, c.e7)([m.Z], () => m.Z.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, a.jsx)(f.ZP, {
              children: (e) =>
                  (0, a.jsxs)(u.Z.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, a.jsx)(s.Z, {
                              user: t.author,
                              size: l.EFr.SIZE_40,
                              className: o()(y.authorAvatar, e)
                          }),
                          (0, a.jsxs)('div', {
                              className: o()(y.author, e),
                              children: [
                                  (0, a.jsx)(l.Rny, {
                                      children: (0, a.jsx)('div', {
                                          className: y.authorNameWrapper,
                                          children: (0, a.jsx)(p.Z, {
                                              className: y.authorName,
                                              message: t,
                                              channel: n
                                          })
                                      })
                                  }),
                                  (0, a.jsx)(d.Z, {
                                      timestamp: t.timestamp,
                                      className: y.timestamp,
                                      tooltipPosition: 'bottom'
                                  })
                              ]
                          })
                      ]
                  })
          });
});
function h(e) {
    var t;
    let { item: n, hideMediaOptions: r, onClose: i } = e,
        c = null == (t = n.sourceMetadata) ? void 0 : t.message;
    return (0, a.jsxs)('div', {
        className: y.topBar,
        children: [
            null != c && (0, a.jsx)(_, { message: c }),
            (0, a.jsx)(g.Z, {
                item: n,
                hideMediaOptions: r
            }),
            (0, a.jsx)(f.ZP, {
                mode: f.lx.PINNED,
                children: (e) =>
                    (0, a.jsx)(b.Z, {
                        onClick: i,
                        icon: l.Dio,
                        tooltip: O.intl.string(O.t.cpT0Cg),
                        className: o()(y.closeButton, e)
                    })
            })
        ]
    });
}
