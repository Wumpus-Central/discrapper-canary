t.d(n, {
    P: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(609194),
    s = t(669079),
    a = t(987209),
    c = t(388032),
    o = t(926617);
function u(e) {
    let { giftMessage: n = c.intl.string(c.t.DrgnS0) } = e,
        { isGift: t, giftRecipient: u } = (0, a.wD)();
    return !t || (0, s.pO)(u)
        ? null
        : (0, i.jsx)(r.Z, {
              className: o.paymentNote,
              iconSize: r.Z.Sizes.SMALL,
              icon: l.GiftIcon,
              color: null == n ? r.Z.Colors.PRIMARY : r.Z.Colors.SECONDARY,
              children: n
          });
}
