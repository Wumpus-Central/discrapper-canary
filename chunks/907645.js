n.d(t, { f: () => u });
var i = n(744230),
    r = n(113267),
    a = n(743738),
    s = n(885386),
    l = n(10716),
    o = n(795816),
    d = n(652215),
    c = n(375708);
async function u(e, t) {
    let n,
        u,
        _,
        E = c.intl.string(c.t["IOy+I5"]);
    if (e instanceof i.A) {
        (n = 0), (_ = e.reason);
        let r = l.A.getFetchState();
        switch ((s.Q_.getSetting() && r !== l.$.LOADED && (await (0, o.SE)()), e.reason)) {
            case i.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                l.A.inDevModeForApplication(t) && (E = c.intl.string(c.t.hXRXfz));
                break;
            case i.A.Reasons.INVALID_CHANNEL:
                E = c.intl.string(c.t.j29zCr);
                break;
            case i.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
                u = e.detailCode;
        }
    } else if (e instanceof r.A) (n = 1), (_ = e.reason), (E = (0, a.sW)(e.reason, t) ?? E);
    else
        switch (((n = 2), (u = e.status), (_ = e.code), e.code)) {
            case d.t02.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                E = c.intl.string(c.t.GyzcrS);
                break;
            case d.t02.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                E = c.intl.string(c.t.zxv7EF);
                break;
            case d.t02.INVALID_PERMISSIONS:
                E = c.intl.string(c.t.hHGrWz);
                break;
            case d.t02.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                E = c.intl.string(c.t.j29zCr);
                break;
            case d.t02.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                E = c.intl.string(c.t["4WuFRE"]);
                break;
            case d.t02.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                E = c.intl.string(c.t.RvkXdb);
                break;
            case d.t02.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                E = c.intl.string(c.t.uGDCcw);
        }
    return { message: E, errorType: n, errorStatus: u, errorCode: _ };
}
