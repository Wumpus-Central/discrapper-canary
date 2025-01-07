t.d(n, {
    Z: function () {
        return E;
    }
});
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(442837),
    s = t(481060),
    u = t(700582),
    c = t(372900),
    d = t(318713),
    f = t(123145),
    h = t(592125),
    m = t(369171),
    p = t(795938);
let _ = r.memo(function (e) {
    let { message: n } = e,
        t = (0, o.e7)([h.Z], () => h.Z.getChannel(n.channel_id));
    return null == t
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)('div', {
                  className: p.messageContents,
                  children: (0, i.jsxs)(c.Z.Provider, {
                      value: t.guild_id,
                      children: [
                          (0, i.jsx)(u.Z, { user: n.author }),
                          (0, i.jsx)(s.FocusBlock, {
                              children: (0, i.jsx)(f.Z, {
                                  message: n,
                                  channel: t
                              })
                          }),
                          (0, i.jsx)(d.Z, {
                              timestamp: n.timestamp,
                              className: p.timestamp
                          })
                      ]
                  })
              })
          });
});
function E(e) {
    var n;
    let { item: t, onClose: r } = e,
        a = null === (n = t.sourceMetadata) || void 0 === n ? void 0 : n.message;
    return (0, i.jsx)(m.ZP, {
        children: (e) =>
            (0, i.jsxs)('div', {
                className: l()(p.topBar, e),
                children: [
                    (0, i.jsx)(s.Button, {
                        look: s.ButtonLooks.BLANK,
                        color: s.ButtonColors.CUSTOM,
                        size: s.ButtonSizes.ICON,
                        className: p.closeButton,
                        innerClassName: p.closeButtonInner,
                        onClick: r,
                        children: (0, i.jsx)(s.XSmallIcon, {})
                    }),
                    null != a && (0, i.jsx)(_, { message: a })
                ]
            })
    });
}
