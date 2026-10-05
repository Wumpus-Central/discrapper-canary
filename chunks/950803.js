n.d(t, { f: () => f });
var i = n(477900);
n(582128);
var r = n(830215),
    a = n(744230),
    s = n(113267),
    l = n(743738),
    o = n(121780),
    d = n(885386),
    c = n(975571),
    u = n(10716),
    _ = n(795816),
    E = n(28863);
function A(e) {
    let { href: t, children: n } = e;
    return (0, i.jsx)(E.Anchor, { href: t, children: n });
}
var h = n(652215),
    I = n(375708);
async function f(e, t) {
    let n,
        E,
        f,
        p = I.intl.string(I.t["IOy+I5"]);
    if (e instanceof a.A) {
        ((n = 0), (f = e.reason));
        let i = u.A.getFetchState();
        switch ((d.Q_.getSetting() && i !== u.$.LOADED && (await (0, _.SE)()), e.reason)) {
            case a.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                u.A.inDevModeForApplication(t) && (p = I.intl.string(I.t.hXRXfz));
                break;
            case a.A.Reasons.INVALID_CHANNEL:
                p = I.intl.string(I.t.j29zCr);
                break;
            case a.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
                E = e.detailCode;
        }
    } else if (e instanceof s.A) ((n = 1), (f = e.reason), (p = (0, l.sW)(e.reason, t) ?? p));
    else
        switch (((n = 2), (E = e.status), (f = e.code), e.code)) {
            case h.t02.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                p = I.intl.string(I.t.GyzcrS);
                break;
            case h.t02.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                p = I.intl.string(I.t.zxv7EF);
                break;
            case h.t02.INVALID_PERMISSIONS:
                p = I.intl.string(I.t.hHGrWz);
                break;
            case h.t02.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                p = I.intl.string(I.t.j29zCr);
                break;
            case h.t02.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                p = I.intl.string(I.t["4WuFRE"]);
                break;
            case h.t02.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                p = I.intl.string(I.t.RvkXdb);
                break;
            case h.t02.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                p = I.intl.string(I.t.uGDCcw);
        }
    if (
        ((1 === n && f === s.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION) ||
            (2 === n && 20060 === f)) &&
        (null == o.A.getCountryCode() && (await r.A.getLocationMetadata()), o.A.getCountryCode()?.alpha2 === "BR")
    ) {
        let e = c.A.getArticleURL("42704051358359");
        p = I.intl.format(I.t.GJ27pD, {
            supportArticleUrl: (0, i.jsx)(A, { href: e, children: e }, "supportArticleUrl"),
        });
    }
    return { message: p, errorType: n, errorStatus: E, errorCode: f };
}
