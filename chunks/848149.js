"use strict";
n.d(t, { J: () => h });
var i = n(627968),
    r = n(64700),
    s = n(70283),
    a = n(17928),
    o = n(192308),
    l = n(982240),
    u = n(650170),
    c = n(566980),
    d = n(998370),
    _ = n(315693);
function h() {
    let { enabled: e } = d.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
        t = (0, a.bG)([l.Ay], () => l.Ay.getBadgeById(s.$.GIFTING)?.tiers),
        h = (0, u.t4)((e) => e.purchaseState),
        f = r.useRef(null);
    return (
        r.useEffect(() => {
            e && h === c.h.PURCHASING && (f.current = l.Ay.getSingleRequirementProgress(s.$.GIFTING)?.current ?? null);
        }, [e, h]),
        r.useCallback(() => {
            if (e && null != f.current && null != (null != t ? (0, _.aZ)(t, f.current) : null)) {
                let e = f.current;
                (0, o.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([n.e("13396"), n.e("83703")]).then(n.bind(n, 855210));
                    return (n) => (0, i.jsx)(t, { ...n, currentProgress: e });
                });
            }
        }, [e, t])
    );
}
