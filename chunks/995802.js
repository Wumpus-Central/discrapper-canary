var i = t(485845),
    r = t(991690),
    a = t(587895),
    u = t(260498),
    l = t(333807),
    o = t(734057),
    c = t(636401),
    A = t(36810),
    p = t(652215);
t.d(
    n,
    { Pc: () => l.A },
    {
        Ay: function (e) {
            let n = (0, A.Ay)(e);
            if (!(0, l.A)(n.frame.applicationId))
                throw new c.A(
                    { errorCode: p.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                    "Only a Conjuring app can use this API",
                );
            return n;
        },
        OQ: function (e) {
            let n = u.Ay.findProjectByApplicationId(e);
            if (null != n) return "user" === n.install_scope;
            let t = a.A.getApplication(e);
            return (
                t?.integrationTypesConfig != null &&
                t.supportsIntegrationTypes(i.b.USER_INSTALL) &&
                !t.supportsIntegrationTypes(i.b.GUILD_INSTALL)
            );
        },
        v8: function (e, n) {
            let t = e.surface.type !== r.U.OVERLAY ? e.surface.guildId : void 0,
                i = o.A.getChannel(n);
            return null != t && null != i && i.isGuildVocal() && i.getGuildId() === t;
        },
    },
);
