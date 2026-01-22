n.d(t, { A: () => s });
var r = n(361926),
    i = n(207371),
    a = n(177640);
function s(e) {
    let { context: t, application: n, botUserId: s } = e,
        o = (0, i.e)(n),
        l = (0, r.Vr)({
            context: t,
            applicationId: n.id,
            botUserId: s,
        }),
        c = (0, a.A)("channel" === t.type ? t.channel : void 0);
    return !o && l && null != s && !c;
}
