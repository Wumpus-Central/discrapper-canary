n.d(t, {
    BK: () => c,
    Bf: () => d,
    KZ: () => _
}),
    n(653041);
var i = n(476326),
    o = n(403182),
    r = n(74538),
    l = n(474936),
    a = n(388032);
function c(e, t) {
    let n = o.Ng(o.dg(t));
    return r.ZP.isPremium(e, l.p9.TIER_2) ? a.NW.formatToPlainString(a.t.fxEKdX, { maxSize: n }) : r.ZP.isPremium(e, l.p9.TIER_1) ? a.NW.formatToPlainString(a.t['Nr+Lsb'], { maxSize: n }) : a.NW.formatToPlainString(a.t.fxEKdX, { maxSize: n });
}
function d(e, t) {
    return o.nA(e, t) || o.vY(e);
}
function _(e) {
    return e.reduce((e, t) => (t.item.platform === i.ow.WEB && e.push(t.item.file), e), []);
}
