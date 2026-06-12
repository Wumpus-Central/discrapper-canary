n.d(t, { J: () => g });
var l = n(627968),
    r = n(64700),
    u = n(70283),
    i = n(17928),
    s = n(192308),
    a = n(982240),
    d = n(211159),
    c = n(566980),
    o = n(998370),
    f = n(315693);
function g() {
    let { enabled: e } = o.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
        t = (0, i.bG)([a.Ay], () => a.Ay.getBadgeById(u.$.GIFTING)?.tiers),
        g = (0, d.t4)((e) => e.purchaseState),
        S = r.useRef(null);
    return (
        r.useEffect(() => {
            e && g === c.h.PURCHASING && (S.current = a.Ay.getSingleRequirementProgress(u.$.GIFTING)?.current ?? null);
        }, [e, g]),
        r.useCallback(() => {
            if (e && null != S.current && null != (null != t ? (0, f.aZ)(t, S.current) : null)) {
                let e = S.current;
                (0, s.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([n.e("13396"), n.e("9964"), n.e("83703")]).then(
                        n.bind(n, 855210),
                    );
                    return (n) => (0, l.jsx)(t, { ...n, currentProgress: e });
                });
            }
        }, [e, t])
    );
}
