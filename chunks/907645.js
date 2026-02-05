"use strict";
n.d(t, { f: () => d });
var r = n(744230),
    i = n(113267),
    a = n(296043),
    s = n(253932),
    o = n(10716),
    l = n(795816),
    u = n(652215),
    c = n(985018);
async function d(e, t) {
    let n,
        d,
        _,
        f = c.intl.string(c.t["IOy+I5"]);
    if (e instanceof r.A) {
        (n = 0), (_ = e.reason);
        let i = o.A.getFetchState();
        switch ((s.Q_.getSetting() && i !== o.$.LOADED && (await (0, l.SE)()), e.reason)) {
            case r.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                o.A.inDevModeForApplication(t) && (f = c.intl.string(c.t.hXRXfz));
                break;
            case r.A.Reasons.INVALID_CHANNEL:
                f = c.intl.string(c.t.j29zCr);
                break;
            case r.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
                d = e.detailCode;
        }
    } else if (e instanceof i.A) (n = 1), (_ = e.reason), (f = (0, a.sW)(e.reason, t) ?? f);
    else
        switch (((n = 2), (d = e.status), (_ = e.code), e.code)) {
            case u.t02.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                f = c.intl.string(c.t.GyzcrS);
                break;
            case u.t02.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                f = c.intl.string(c.t.zxv7EF);
                break;
            case u.t02.INVALID_PERMISSIONS:
                f = c.intl.string(c.t.hHGrWz);
                break;
            case u.t02.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                f = c.intl.string(c.t.j29zCr);
                break;
            case u.t02.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                f = c.intl.string(c.t["4WuFRE"]);
                break;
            case u.t02.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                f = c.intl.string(c.t.RvkXdb);
                break;
            case u.t02.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                f = c.intl.string(c.t.uGDCcw);
        }
    return { message: f, errorType: n, errorStatus: d, errorCode: _ };
}
