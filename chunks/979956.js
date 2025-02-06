i.d(t, {
    BK: () => a,
    Bf: () => _,
    KZ: () => c
}),
    i(724458),
    i(653041);
var n = i(476326),
    l = i(403182),
    o = i(74538),
    d = i(474936),
    r = i(388032);
function a(e, t) {
    let i = l.Ng(l.dg(t));
    return o.ZP.isPremium(e, d.p9.TIER_2) ? r.intl.formatToPlainString(r.t.fxEKdX, { maxSize: i }) : o.ZP.isPremium(e, d.p9.TIER_1) ? r.intl.formatToPlainString(r.t['Nr+Lsb'], { maxSize: i }) : r.intl.formatToPlainString(r.t.fxEKdX, { maxSize: i });
}
function _(e, t) {
    return l.nA(e, t) || l.vY(e);
}
function c(e) {
    return e.reduce((e, t) => (t.item.platform === n.ow.WEB && e.push(t.item.file), e), []);
}
