n.d(t, { Z: () => o });
var r = n(51144),
    i = n(591085),
    a = n(340426);
function o() {
    var e;
    let { useCachedData: t = !0, fetch: n = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: o } = (0, a.Z)({
            useCachedData: t,
            fetch: n,
        }),
        { premiumGroupMembers: s } = (0, i.Z)(null != (e = null == o ? void 0 : o.subscriptionId) ? e : null, {
            useCachedData: t,
            fetch: n,
        });
    return (null == s ? void 0 : s.primary) != null ? (0, r.XM)(null == s ? void 0 : s.primary) : null;
}
