n.d(e, {
    BK: function () {
        return a;
    },
    Bf: function () {
        return f;
    },
    KZ: function () {
        return p;
    }
}),
    n(724458),
    n(653041);
var i = n(476326),
    c = n(403182),
    o = n(74538),
    l = n(474936),
    r = n(388032);
function a(t, e) {
    let n = c.Ng(c.dg(e));
    return o.ZP.isPremium(t, l.p9.TIER_2) ? r.intl.formatToPlainString(r.t.fxEKdX, { maxSize: n }) : o.ZP.isPremium(t, l.p9.TIER_1) ? r.intl.formatToPlainString(r.t['Nr+Lsb'], { maxSize: n }) : r.intl.formatToPlainString(r.t.fxEKdX, { maxSize: n });
}
function f(t, e) {
    return c.nA(t, e) || c.vY(t);
}
function p(t) {
    return t.reduce((t, e) => (e.item.platform === i.ow.WEB && t.push(e.item.file), t), []);
}
