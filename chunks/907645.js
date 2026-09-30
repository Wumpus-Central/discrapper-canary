n.d(t, { f: () => E });
var i = n(830215),
    r = n(744230),
    a = n(113267),
    s = n(743738),
    l = n(121780),
    o = n(885386),
    d = n(10716),
    c = n(795816),
    u = n(652215),
    _ = n(375708);
async function E(e, t) {
    let n,
        E,
        A,
        h = _.intl.string(_.t["IOy+I5"]);
    if (e instanceof r.A) {
        ((n = 0), (A = e.reason));
        let i = d.A.getFetchState();
        switch ((o.Q_.getSetting() && i !== d.$.LOADED && (await (0, c.SE)()), e.reason)) {
            case r.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                d.A.inDevModeForApplication(t) && (h = _.intl.string(_.t.hXRXfz));
                break;
            case r.A.Reasons.INVALID_CHANNEL:
                h = _.intl.string(_.t.j29zCr);
                break;
            case r.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
                E = e.detailCode;
        }
    } else if (e instanceof a.A) ((n = 1), (A = e.reason), (h = (0, s.sW)(e.reason, t) ?? h));
    else
        switch (((n = 2), (E = e.status), (A = e.code), e.code)) {
            case u.t02.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                h = _.intl.string(_.t.GyzcrS);
                break;
            case u.t02.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                h = _.intl.string(_.t.zxv7EF);
                break;
            case u.t02.INVALID_PERMISSIONS:
                h = _.intl.string(_.t.hHGrWz);
                break;
            case u.t02.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                h = _.intl.string(_.t.j29zCr);
                break;
            case u.t02.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                h = _.intl.string(_.t["4WuFRE"]);
                break;
            case u.t02.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                h = _.intl.string(_.t.RvkXdb);
                break;
            case u.t02.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                h = _.intl.string(_.t.uGDCcw);
        }
    return (
        ((1 === n && A === a.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION) ||
            (2 === n && 20060 === A)) &&
            (null == l.A.getCountryCode() && (await i.A.getLocationMetadata()),
            l.A.getCountryCode()?.alpha2 === "BR" &&
                (h = _.intl.formatToPlainString(_.t.GJ27pD, {
                    supportArticleUrl:
                        "https://support.discord.com/hc/en-us/articles/42704051358359-Why-video-features-are-currently-unavailable-in-Brazil",
                }))),
        { message: h, errorType: n, errorStatus: E, errorCode: A }
    );
}
