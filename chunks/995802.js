t.d(e, { Ay: () => d, OQ: () => s, Pc: () => a.A, v8: () => I });
var r = t(485845),
    i = t(991690),
    l = t(587895),
    u = t(260498),
    a = t(333807),
    o = t(734057),
    c = t(636401),
    A = t(36810),
    p = t(652215);
function s(n) {
    let e = u.Ay.findProjectByApplicationId(n);
    if (null != e) return "user" === e.install_scope;
    let t = l.A.getApplication(n);
    return (
        t?.integrationTypesConfig != null &&
        t.supportsIntegrationTypes(r.b.USER_INSTALL) &&
        !t.supportsIntegrationTypes(r.b.GUILD_INSTALL)
    );
}
function I(n, e) {
    let t = n.surface.type !== i.U.OVERLAY ? n.surface.guildId : void 0,
        r = o.A.getChannel(e);
    return null != t && null != r && r.isGuildVocal() && r.getGuildId() === t;
}
function d(n) {
    let e = (0, A.Ay)(n);
    if (!(0, a.A)(e.frame.applicationId))
        throw new c.A({ errorCode: p.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "Only a Conjuring app can use this API");
    return e;
}
