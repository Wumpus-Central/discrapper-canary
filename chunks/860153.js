a.d(t, { Z: () => S });
var n = a(200651),
    i = a(192379),
    s = a(120356),
    o = a.n(s),
    l = a(442837),
    r = a(481060),
    c = a(700582),
    d = a(372900),
    u = a(318713),
    m = a(123145),
    _ = a(592125),
    p = a(369171),
    g = a(388032),
    h = a(791891);
let C = i.memo(function (e) {
    let { message: t } = e,
        a = (0, l.e7)([_.Z], () => _.Z.getChannel(t.channel_id));
    return null == a
        ? null
        : (0, n.jsx)(n.Fragment, {
              children: (0, n.jsx)('div', {
                  className: h.messageContents,
                  children: (0, n.jsxs)(d.Z.Provider, {
                      value: a.guild_id,
                      children: [
                          (0, n.jsx)(c.Z, { user: t.author }),
                          (0, n.jsx)(r.Rny, {
                              children: (0, n.jsx)(m.Z, {
                                  message: t,
                                  channel: a
                              })
                          }),
                          (0, n.jsx)(u.Z, {
                              timestamp: t.timestamp,
                              className: h.timestamp
                          })
                      ]
                  })
              })
          });
});
function S(e) {
    var t;
    let { item: a, onClose: i } = e,
        s = null === (t = a.sourceMetadata) || void 0 === t ? void 0 : t.message;
    return (0, n.jsx)(p.ZP, {
        children: (e) =>
            (0, n.jsxs)('div', {
                className: o()(h.topBar, e),
                children: [
                    (0, n.jsx)(r.zxk, {
                        look: r.iLD.BLANK,
                        color: r.Ttl.CUSTOM,
                        size: r.PhG.ICON,
                        className: h.closeButton,
                        innerClassName: h.closeButtonInner,
                        'aria-label': g.intl.string(g.t.Xvtztr),
                        onClick: i,
                        children: (0, n.jsx)(r.Dio, {})
                    }),
                    null != s && (0, n.jsx)(C, { message: s })
                ]
            })
    });
}
