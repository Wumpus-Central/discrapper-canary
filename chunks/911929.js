"use strict";
n.d(t, { s: () => s });
var i = n(587895),
    r = n(113267),
    a = n(375708);
function s(e, t) {
    switch (e) {
        case r.A.ReasonCodes.TIMEOUT:
            let n = i.A.getApplication(t);
            if (null != n) return a.intl.formatToPlainString(a.t.u2D2Uj, { applicationName: n.name });
            return a.intl.string(a.t["vGU8+r"]);
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
            return a.intl.string(a.t.GyzcrS);
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
            return a.intl.string(a.t.hHGrWz);
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
            return a.intl.string(a.t.j29zCr);
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
            return a.intl.string(a.t["4WuFRE"]);
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
            return a.intl.string(a.t.RvkXdb);
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
            return a.intl.string(a.t.uGDCcw);
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY:
            return a.intl.string(a.t.WjNAAA);
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE:
            return a.intl.string(a.t.PtobXW);
        case r.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION:
            return a.intl.string(a.t.PrHIM5);
    }
}
