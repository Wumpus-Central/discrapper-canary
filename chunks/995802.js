r.d(e, { Ay: () => I, OQ: () => s, Pc: () => u.A, v8: () => d });
var t = r(485845),
    i = r(991690),
    a = r(587895),
    l = r(260498),
    u = r(333807),
    o = r(734057),
    c = r(636401),
    p = r(36810),
    A = r(652215);
function s(n) {
    let e = l.Ay.findProjectByApplicationId(n);
    if (null != e) return "user" === e.install_scope;
    let r = a.A.getApplication(n);
    return (
        r?.integrationTypesConfig != null &&
        r.supportsIntegrationTypes(t.b.USER_INSTALL) &&
        !r.supportsIntegrationTypes(t.b.GUILD_INSTALL)
    );
}
function d(n, e) {
    let r = n.surface.type !== i.U.OVERLAY ? n.surface.guildId : void 0,
        t = o.A.getChannel(e);
    return null != r && null != t && t.isGuildVocal() && t.getGuildId() === r;
}
function I(n) {
    let e = (0, p.Ay)(n);
    if (!(0, u.A)(e.frame.applicationId))
        throw new c.A({ errorCode: A.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "Only a Conjuring app can use this API");
    return e;
}
