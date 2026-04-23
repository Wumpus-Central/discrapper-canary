n.d(t, { BE: () => c, DX: () => _, dI: () => m, gW: () => g });
var i,
    s = n(417597),
    l = n(71393),
    a = n(576705),
    r = n(287809),
    o = n(464477),
    d = n(652215),
    u = n(985018);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? u.intl.string(u.t.YJGvuD)
              : u.intl.string(u.t["3iKih7"])
          : e.hasFlag(d.nhx.PARTNER)
            ? t
                ? u.intl.string(u.t["9UucjT"])
                : u.intl.string(u.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? u.intl.string(u.t["9VWpT9"])
                  : u.intl.string(u.t.LfCBZG)
              : null;
}
var g =
    (((i = {}).AVAILABLE = "available"),
    (i.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (i.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    i);
function m() {
    let e = (0, s.bG)([r.default], () => r.default.getCurrentUser()?.verified);
    return o.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, s.bG)([l.A, a.A, r.default], () =>
        r.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? u.intl.string(u.t.hxf9fX)
                : u.intl.string(u.t["3iKih7"])
            : l.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(d.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        a.A.can(d.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? u.intl.string(u.t.OYTCUh)
                  : u.intl.string(u.t.HC8uSZ)
              : null,
    );
}
