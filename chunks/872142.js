n.d(t, { f: () => I });
var i = n(477900);
n(582128);
var r = n(830215),
    a = n(744230),
    s = n(113267),
    l = n(964363),
    o = n(121780),
    d = n(253932),
    c = n(975571),
    u = n(10716),
    _ = n(578983),
    E = n(28863);
function A(e) {
    let { href: t, children: n } = e;
    return (0, i.jsx)(E.Anchor, { href: t, children: n });
}
var f = n(652215),
    h = n(792996);
async function I(e, t) {
    let n,
        E,
        I,
        p = h.intl.string(h.t["IOy+I5"]);
    if (e instanceof a.A) {
        ((n = 0), (I = e.reason));
        let i = u.A.getFetchState();
        switch ((d.Q_.getSetting() && i !== u.$.LOADED && (await (0, _.S)()), e.reason)) {
            case a.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                u.A.inDevModeForApplication(t) && (p = h.intl.string(h.t.hXRXfz));
                break;
            case a.A.Reasons.INVALID_CHANNEL:
                p = h.intl.string(h.t.j29zCr);
                break;
            case a.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
                E = e.detailCode;
        }
    } else if (e instanceof s.A) ((n = 1), (I = e.reason), (p = (0, l.sW)(e.reason, t) ?? p));
    else
        switch (((n = 2), (E = e.status), (I = e.code), e.code)) {
            case f.t02.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                p = h.intl.string(h.t.GyzcrS);
                break;
            case f.t02.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                p = h.intl.string(h.t.zxv7EF);
                break;
            case f.t02.INVALID_PERMISSIONS:
                p = h.intl.string(h.t.hHGrWz);
                break;
            case f.t02.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                p = h.intl.string(h.t.j29zCr);
                break;
            case f.t02.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                p = h.intl.string(h.t["4WuFRE"]);
                break;
            case f.t02.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                p = h.intl.string(h.t.RvkXdb);
                break;
            case f.t02.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                p = h.intl.string(h.t.uGDCcw);
        }
    if (
        ((1 === n && I === s.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION) ||
            (2 === n && 20060 === I)) &&
        (null == o.A.getCountryCode() && (await r.A.getLocationMetadata()), o.A.getCountryCode()?.alpha2 === "BR")
    ) {
        let e = c.A.getArticleURL("42704051358359");
        p = h.intl.format(h.t.GJ27pD, {
            supportArticleUrl: (0, i.jsx)(A, { href: e, children: e }, "supportArticleUrl"),
        });
    }
    return { message: p, errorType: n, errorStatus: E, errorCode: I };
}
