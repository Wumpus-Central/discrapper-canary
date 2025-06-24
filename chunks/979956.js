i.d(e, {
    BK: () => a,
    Bf: () => d,
    KZ: () => u
}),
    i(539854);
var n = i(476326),
    r = i(403182),
    s = i(74538),
    o = i(474936),
    l = i(388032);
function a(t, e) {
    let i = r.Ng(r.dg(e));
    return s.ZP.isPremium(t, o.p9.TIER_2) ? l.intl.formatToPlainString(l.t.fxEKdX, { maxSize: i }) : s.ZP.isPremium(t, o.p9.TIER_1) ? l.intl.formatToPlainString(l.t['Nr+Lsb'], { maxSize: i }) : l.intl.formatToPlainString(l.t.fxEKdX, { maxSize: i });
}
function d(t, e) {
    return r.nA(t, e) || r.vY(t);
}
function u(t) {
    return t.reduce((t, e) => (e.item.platform === n.ow.WEB && t.push(e.item.file), t), []);
}
