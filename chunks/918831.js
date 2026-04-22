n.d(t, { A: () => s });
var l = n(361926),
    i = n(207371),
    a = n(177640);
function s(e) {
    let { context: t, application: n, botUserId: s } = e,
        r = (0, i.e)(n),
        o = (0, l.Vr)({ context: t, applicationId: n.id, botUserId: s }),
        c = (0, a.A)("channel" === t.type ? t.channel : void 0);
    return !r && o && null != s && !c;
}
