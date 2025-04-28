n.d(t, {
    BK: () => s,
    Bf: () => c,
    KZ: () => d
}),
    n(539854);
var a = n(476326),
    i = n(403182),
    l = n(74538),
    r = n(474936),
    o = n(388032);
function s(e, t) {
    let n = i.Ng(i.dg(t));
    return l.ZP.isPremium(e, r.p9.TIER_2) ? o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: n }) : l.ZP.isPremium(e, r.p9.TIER_1) ? o.intl.formatToPlainString(o.t['Nr+Lsb'], { maxSize: n }) : o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: n });
}
function c(e, t) {
    return i.nA(e, t) || i.vY(e);
}
function d(e) {
    return e.reduce((e, t) => (t.item.platform === a.ow.WEB && e.push(t.item.file), e), []);
}
