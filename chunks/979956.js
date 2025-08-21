i.d(t, {
    BK: () => a,
    Bf: () => d,
    KZ: () => c,
}),
    i(539854);
var n = i(476326),
    r = i(403182),
    s = i(74538),
    o = i(474936),
    l = i(388032);
function a(e, t) {
    let i = r.Ng(r.dg(t));
    return s.ZP.isPremium(e, o.p9.TIER_2)
        ? l.intl.formatToPlainString(l.t.fxEKdX, { maxSize: i })
        : s.ZP.isPremium(e, o.p9.TIER_1)
          ? l.intl.formatToPlainString(l.t["Nr+Lsb"], { maxSize: i })
          : l.intl.formatToPlainString(l.t.fxEKdX, { maxSize: i });
}
function d(e, t) {
    return r.nA(e, t) || r.vY(e);
}
function c(e) {
    return e.reduce((e, t) => (t.item.platform === n.ow.WEB && e.push(t.item.file), e), []);
}
