n.d(t, {
    BK: () => s,
    Bf: () => c,
    KZ: () => u
}),
    n(539854);
var r = n(476326),
    i = n(403182),
    l = n(74538),
    a = n(474936),
    o = n(388032);
function s(e, t) {
    let n = i.Ng(i.dg(t));
    return l.ZP.isPremium(e, a.p9.TIER_2) ? o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: n }) : l.ZP.isPremium(e, a.p9.TIER_1) ? o.intl.formatToPlainString(o.t['Nr+Lsb'], { maxSize: n }) : o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: n });
}
function c(e, t) {
    return i.nA(e, t) || i.vY(e);
}
function u(e) {
    return e.reduce((e, t) => (t.item.platform === r.ow.WEB && e.push(t.item.file), e), []);
}
