n.d(t, {
    BK: () => r,
    Bf: () => c,
    KZ: () => d
}),
    n(724458),
    n(653041);
var a = n(476326),
    i = n(403182),
    l = n(74538),
    s = n(474936),
    o = n(388032);
function r(e, t) {
    let n = i.Ng(i.dg(t));
    return l.ZP.isPremium(e, s.p9.TIER_2) ? o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: n }) : l.ZP.isPremium(e, s.p9.TIER_1) ? o.intl.formatToPlainString(o.t['Nr+Lsb'], { maxSize: n }) : o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: n });
}
function c(e, t) {
    return i.nA(e, t) || i.vY(e);
}
function d(e) {
    return e.reduce((e, t) => (t.item.platform === a.ow.WEB && e.push(t.item.file), e), []);
}
