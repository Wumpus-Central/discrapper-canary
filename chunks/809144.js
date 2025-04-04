n.d(t, { P: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(609194),
    a = n(669079),
    s = n(987209),
    l = n(388032),
    c = n(478474);
function u(e) {
    let { giftMessage: t = l.NW.string(l.t.DrgnS0) } = e,
        { isGift: n, giftRecipient: u } = (0, s.wD)();
    return !n || (0, a.pO)(u)
        ? null
        : (0, r.jsx)(o.Z, {
              className: c.paymentNote,
              iconSize: o.Z.Sizes.SMALL,
              icon: i.OgN,
              color: null == t ? o.Z.Colors.PRIMARY : o.Z.Colors.SECONDARY,
              children: t
          });
}
