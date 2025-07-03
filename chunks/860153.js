n.d(t, { Z: () => h });
var a = n(255367),
    r = n(73800),
    o = n(120356),
    i = n.n(o),
    c = n(442837),
    l = n(481060),
    s = n(700582),
    u = n(372900),
    p = n(318713),
    d = n(123145),
    m = n(592125),
    g = n(73249),
    f = n(369171),
    y = n(545093),
    b = n(388032),
    O = n(114047);
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
                              className: i()(O.authorAvatar, e)
                          }),
                          (0, a.jsxs)('div', {
                              className: i()(O.author, e),
                              children: [
                                  (0, a.jsx)(l.Rny, {
                                      children: (0, a.jsx)('div', {
                                          className: O.authorNameWrapper,
                                          children: (0, a.jsx)(d.Z, {
                                              className: O.authorName,
                                              message: t,
                                              channel: n
                                          })
                                      })
                                  }),
                                  (0, a.jsx)(p.Z, {
                                      timestamp: t.timestamp,
                                      className: O.timestamp,
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
    let { item: n, hideMediaOptions: r, onClose: o } = e,
        c = null == (t = n.sourceMetadata) ? void 0 : t.message;
    return (0, a.jsxs)('div', {
        className: O.topBar,
        children: [
            null != c && (0, a.jsx)(_, { message: c }),
            (0, a.jsx)(g.Z, {
                item: n,
                hideMediaOptions: r
            }),
            (0, a.jsx)(f.ZP, {
                mode: f.lx.PINNED,
                children: (e) =>
                    (0, a.jsx)(y.Z, {
                        onClick: o,
                        icon: l.Dio,
                        tooltip: b.intl.string(b.t.cpT0Cg),
                        className: i()(O.closeButton, e)
                    })
            })
        ]
    });
}
