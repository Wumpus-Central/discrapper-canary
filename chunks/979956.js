(n.d(t, {
    BK: () => l,
    Bf: () => c,
    KZ: () => u
}),
    n(539854));
var r = n(476326),
    i = n(403182),
    a = n(74538),
    o = n(474936),
    s = n(388032);
function l(e, t) {
    let n = i.Ng(i.dg(t));
    return a.ZP.isPremium(e, o.p9.TIER_2) ? s.intl.formatToPlainString(s.t.fxEKdX, { maxSize: n }) : a.ZP.isPremium(e, o.p9.TIER_1) ? s.intl.formatToPlainString(s.t['Nr+Lsb'], { maxSize: n }) : s.intl.formatToPlainString(s.t.fxEKdX, { maxSize: n });
}
function c(e, t) {
    return i.nA(e, t) || i.vY(e);
}
function u(e) {
    return e.reduce((e, t) => (t.item.platform === r.ow.WEB && e.push(t.item.file), e), []);
}
