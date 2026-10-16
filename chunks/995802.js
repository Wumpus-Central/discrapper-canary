r.d(n, { Ay: () => I, OQ: () => d, Pc: () => p, v8: () => s });
var t = r(485845),
    i = r(991690),
    l = r(587895),
    u = r(260498),
    a = r(734057),
    o = r(636401),
    c = r(36810),
    A = r(652215);
function p(e) {
    return l.A.getApplication(e)?.conjureProjectId != null || u.Ay.isConjureProjectApplication(e);
}
function d(e) {
    let n = u.Ay.findProjectByApplicationId(e);
    if (null != n) return "user" === n.install_scope;
    let r = l.A.getApplication(e);
    return (
        r?.integrationTypesConfig != null &&
        r.supportsIntegrationTypes(t.b.USER_INSTALL) &&
        !r.supportsIntegrationTypes(t.b.GUILD_INSTALL)
    );
}
function s(e, n) {
    let r = e.surface.type !== i.U.OVERLAY ? e.surface.guildId : void 0,
        t = a.A.getChannel(n);
    return null != r && null != t && t.isGuildVocal() && t.getGuildId() === r;
}
function I(e) {
    let n = (0, c.A)(e);
    if (!p(n.frame.applicationId))
        throw new o.A({ errorCode: A.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "Only a Conjuring app can use this API");
    return n;
}
