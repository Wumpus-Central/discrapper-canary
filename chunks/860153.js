n.d(t, { Z: () => p });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    r = n(481060),
    u = n(700582),
    c = n(372900),
    d = n(318713),
    _ = n(123145),
    E = n(592125),
    m = n(369171),
    S = n(388032),
    h = n(795938);
let f = l.memo(function (e) {
    let { message: t } = e,
        n = (0, o.e7)([E.Z], () => E.Z.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)('div', {
                  className: h.messageContents,
                  children: (0, i.jsxs)(c.Z.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, i.jsx)(u.Z, { user: t.author }),
                          (0, i.jsx)(r.Rny, {
                              children: (0, i.jsx)(_.Z, {
                                  message: t,
                                  channel: n
                              })
                          }),
                          (0, i.jsx)(d.Z, {
                              timestamp: t.timestamp,
                              className: h.timestamp
                          })
                      ]
                  })
              })
          });
});
function p(e) {
    var t;
    let { item: n, onClose: l } = e,
        a = null === (t = n.sourceMetadata) || void 0 === t ? void 0 : t.message;
    return (0, i.jsx)(m.ZP, {
        children: (e) =>
            (0, i.jsxs)('div', {
                className: s()(h.topBar, e),
                children: [
                    (0, i.jsx)(r.zxk, {
                        look: r.iLD.BLANK,
                        color: r.Ttl.CUSTOM,
                        size: r.PhG.ICON,
                        className: h.closeButton,
                        innerClassName: h.closeButtonInner,
                        'aria-label': S.intl.string(S.t.Xvtztr),
                        onClick: l,
                        children: (0, i.jsx)(r.Dio, {})
                    }),
                    null != a && (0, i.jsx)(f, { message: a })
                ]
            })
    });
}
