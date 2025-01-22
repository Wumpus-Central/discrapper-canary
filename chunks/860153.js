e.d(t, {
    Z: function () {
        return p;
    }
});
var i = e(200651),
    o = e(192379),
    l = e(120356),
    a = e.n(l),
    s = e(442837),
    r = e(481060),
    u = e(700582),
    c = e(372900),
    d = e(318713),
    f = e(123145),
    _ = e(592125),
    E = e(369171),
    m = e(388032),
    S = e(795938);
let h = o.memo(function (n) {
    let { message: t } = n,
        e = (0, s.e7)([_.Z], () => _.Z.getChannel(t.channel_id));
    return null == e
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)('div', {
                  className: S.messageContents,
                  children: (0, i.jsxs)(c.Z.Provider, {
                      value: e.guild_id,
                      children: [
                          (0, i.jsx)(u.Z, { user: t.author }),
                          (0, i.jsx)(r.FocusBlock, {
                              children: (0, i.jsx)(f.Z, {
                                  message: t,
                                  channel: e
                              })
                          }),
                          (0, i.jsx)(d.Z, {
                              timestamp: t.timestamp,
                              className: S.timestamp
                          })
                      ]
                  })
              })
          });
});
function p(n) {
    var t;
    let { item: e, onClose: o } = n,
        l = null === (t = e.sourceMetadata) || void 0 === t ? void 0 : t.message;
    return (0, i.jsx)(E.ZP, {
        children: (n) =>
            (0, i.jsxs)('div', {
                className: a()(S.topBar, n),
                children: [
                    (0, i.jsx)(r.Button, {
                        look: r.ButtonLooks.BLANK,
                        color: r.ButtonColors.CUSTOM,
                        size: r.ButtonSizes.ICON,
                        className: S.closeButton,
                        innerClassName: S.closeButtonInner,
                        'aria-label': m.intl.string(m.t.Xvtztr),
                        onClick: o,
                        children: (0, i.jsx)(r.XSmallIcon, {})
                    }),
                    null != l && (0, i.jsx)(h, { message: l })
                ]
            })
    });
}
