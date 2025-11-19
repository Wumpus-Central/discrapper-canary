n.d(t, { P: () => u });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(609194),
    o = n(669079),
    s = n(987209),
    l = n(388032),
    c = n(676766);
function u(e) {
    let { giftMessage: t = l.intl.string(l.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: u } = (0, s.wD)();
    return !n || (0, o.pO)(u)
        ? null
        : (0, r.jsx)(a.Z, {
              className: c.paymentNote,
              iconSize: a.Z.Sizes.SMALL,
              icon: i.OgN,
              color: null == t ? a.Z.Colors.PRIMARY : a.Z.Colors.SECONDARY,
              children: t,
          });
}
