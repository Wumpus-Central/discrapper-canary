r.d(n, {
    P: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(609194),
    s = r(669079),
    l = r(987209),
    u = r(388032),
    c = r(926617);
function d(e) {
    let { giftMessage: n = u.intl.string(u.t.DrgnS0) } = e,
        { isGift: r, giftRecipient: d } = (0, l.wD)();
    return !r || (0, s.pO)(d)
        ? null
        : (0, i.jsx)(o.Z, {
              className: c.paymentNote,
              iconSize: o.Z.Sizes.SMALL,
              icon: a.GiftIcon,
              color: null == n ? o.Z.Colors.PRIMARY : o.Z.Colors.SECONDARY,
              children: n
          });
}
