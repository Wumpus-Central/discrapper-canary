r.d(n, { Ay: () => I, OQ: () => d, Pc: () => a.A, v8: () => s });
var t = r(485845),
    i = r(991690),
    l = r(587895),
    u = r(260498),
    a = r(333807),
    o = r(734057),
    A = r(636401),
    c = r(36810),
    p = r(652215);
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
        t = o.A.getChannel(n);
    return null != r && null != t && t.isGuildVocal() && t.getGuildId() === r;
}
function I(e) {
    let n = (0, c.A)(e);
    if (!(0, a.A)(n.frame.applicationId))
        throw new A.A({ errorCode: p.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "Only a Conjuring app can use this API");
    return n;
}
