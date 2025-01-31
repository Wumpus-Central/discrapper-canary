n.d(t, { P: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(609194),
    s = n(669079),
    o = n(987209),
    l = n(388032),
    u = n(926617);
function c(e) {
    let { giftMessage: t = l.intl.string(l.t.DrgnS0) } = e,
        { isGift: n, giftRecipient: c } = (0, o.wD)();
    return !n || (0, s.pO)(c)
        ? null
        : (0, i.jsx)(a.Z, {
              className: u.paymentNote,
              iconSize: a.Z.Sizes.SMALL,
              icon: r.OgN,
              color: null == t ? a.Z.Colors.PRIMARY : a.Z.Colors.SECONDARY,
              children: t
          });
}
