t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(442837),
    s = t(481060),
    u = t(700582),
    c = t(372900),
    d = t(318713),
    f = t(123145),
    m = t(592125),
    h = t(369171),
    p = t(795938);
let g = l.memo(function (e) {
    let { message: n } = e,
        t = (0, o.e7)([m.Z], () => m.Z.getChannel(n.channel_id));
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
function _(e) {
    var n;
    let { item: t, onClose: l } = e,
        r = null === (n = t.sourceMetadata) || void 0 === n ? void 0 : n.message;
    return (0, i.jsx)(h.ZP, {
        children: (e) =>
            (0, i.jsxs)('div', {
                className: a()(p.topBar, e),
                children: [
                    (0, i.jsx)(s.Button, {
                        look: s.ButtonLooks.BLANK,
                        color: s.ButtonColors.CUSTOM,
                        size: s.ButtonSizes.ICON,
                        className: p.closeButton,
                        innerClassName: p.closeButtonInner,
                        onClick: l,
                        children: (0, i.jsx)(s.XSmallIcon, {})
                    }),
                    null != r && (0, i.jsx)(g, { message: r })
                ]
            })
    });
}
