n.d(t, {
    BK: function () {
        return o;
    },
    Bf: function () {
        return c;
    },
    KZ: function () {
        return d;
    }
}),
    n(724458),
    n(653041);
var i = n(476326),
    l = n(403182),
    r = n(74538),
    a = n(474936),
    s = n(388032);
function o(e, t) {
    let n = l.Ng(l.dg(t));
    return r.ZP.isPremium(e, a.p9.TIER_2) ? s.intl.formatToPlainString(s.t.fxEKdX, { maxSize: n }) : r.ZP.isPremium(e, a.p9.TIER_1) ? s.intl.formatToPlainString(s.t['Nr+Lsb'], { maxSize: n }) : s.intl.formatToPlainString(s.t.fxEKdX, { maxSize: n });
}
function c(e, t) {
    return l.nA(e, t) || l.vY(e);
}
function d(e) {
    return e.reduce((e, t) => (t.item.platform === i.ow.WEB && e.push(t.item.file), e), []);
}
