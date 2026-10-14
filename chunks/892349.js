n.d(t, { p: () => u });
var l = n(883645),
    i = n(558620),
    r = n(951305),
    a = n(166532),
    s = n(163074),
    o = n(557679);
function u(e) {
    let t = (0, i.A)(),
        n = (0, l.s2)(),
        { isGift: u, giftRecipient: c } = (0, r.Pv)(),
        { enabled: d } = s.A.useConfig({ location: e });
    return n === a.pn.PLAN_SELECT && d && (0, o.M)({ isGift: u, giftRecipient: c, selectedPlanId: t?.id });
}
