n.d(t, { f: () => d });
var r = n(744230),
    i = n(113267),
    a = n(296043),
    s = n(253932),
    o = n(10716),
    l = n(795816),
    c = n(652215),
    u = n(985018);
async function d(e, t) {
    let n,
        d,
        f,
        p = u.intl.string(u.t["IOy+I5"]);
    if (e instanceof r.A) {
        (n = 0), (f = e.reason);
        let i = o.A.getFetchState();
        switch ((s.Q_.getSetting() && i !== o.$.LOADED && (await (0, l.SE)()), e.reason)) {
            case r.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                o.A.inDevModeForApplication(t) && (p = u.intl.string(u.t.hXRXfz));
                break;
            case r.A.Reasons.INVALID_CHANNEL:
                p = u.intl.string(u.t.j29zCr);
                break;
            case r.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
                d = e.detailCode;
        }
    } else if (e instanceof i.A) {
        var _;
        (n = 1), (f = e.reason), (p = null != (_ = (0, a.sW)(e.reason, t)) ? _ : p);
    } else
        switch (((n = 2), (d = e.status), (f = e.code), e.code)) {
            case c.t02.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                p = u.intl.string(u.t.GyzcrS);
                break;
            case c.t02.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                p = u.intl.string(u.t.zxv7EF);
                break;
            case c.t02.INVALID_PERMISSIONS:
                p = u.intl.string(u.t.hHGrWz);
                break;
            case c.t02.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                p = u.intl.string(u.t.j29zCr);
                break;
            case c.t02.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                p = u.intl.string(u.t["4WuFRE"]);
                break;
            case c.t02.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                p = u.intl.string(u.t.RvkXdb);
                break;
            case c.t02.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                p = u.intl.string(u.t.uGDCcw);
        }
    return {
        message: p,
        errorType: n,
        errorStatus: d,
        errorCode: f,
    };
}
