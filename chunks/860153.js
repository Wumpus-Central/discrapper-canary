n.d(t, { Z: () => h });
var a = n(200651),
    r = n(192379),
    o = n(120356),
    i = n.n(o),
    c = n(442837),
    s = n(481060),
    l = n(700582),
    u = n(372900),
    d = n(318713),
    p = n(123145),
    m = n(592125),
    _ = n(73249),
    g = n(369171),
    f = n(545093),
    y = n(388032),
    b = n(114047);
let O = r.memo(function (e) {
    let { message: t } = e,
        n = (0, c.e7)([m.Z], () => m.Z.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, a.jsx)(g.ZP, {
              children: (e) =>
                  (0, a.jsxs)(u.Z.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, a.jsx)(l.Z, {
                              user: t.author,
                              size: s.EFr.SIZE_40,
                              className: i()(b.authorAvatar, e)
                          }),
                          (0, a.jsxs)('div', {
                              className: i()(b.author, e),
                              children: [
                                  (0, a.jsx)(s.Rny, {
                                      children: (0, a.jsx)('div', {
                                          className: b.authorNameWrapper,
                                          children: (0, a.jsx)(p.Z, {
                                              className: b.authorName,
                                              message: t,
                                              channel: n
                                          })
                                      })
                                  }),
                                  (0, a.jsx)(d.Z, {
                                      timestamp: t.timestamp,
                                      className: b.timestamp,
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
        className: b.topBar,
        children: [
            null != c && (0, a.jsx)(O, { message: c }),
            (0, a.jsx)(_.Z, {
                item: n,
                hideMediaOptions: r
            }),
            (0, a.jsx)(g.ZP, {
                mode: g.lx.PINNED,
                children: (e) =>
                    (0, a.jsx)(f.Z, {
                        onClick: o,
                        icon: s.Dio,
                        tooltip: y.NW.string(y.t.cpT0Cg),
                        className: i()(b.closeButton, e)
                    })
            })
        ]
    });
}
