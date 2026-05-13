"use strict";
n.d(t, { gn: () => A, ML: () => I, dq: () => g });
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(573648),
    l = n(941314);
let u = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-03-churro",
    defaultConfig: { allowPlayStationStaging: !1 },
    variations: { 1: { allowPlayStationStaging: !0 } },
});
var c = n(30370),
    d = n(287809),
    _ = n(927813),
    f = n(652215),
    h = n(650583);
let p = { [f.fg2.INSTAGRAM]: ["1036753656588017764"] },
    E = new Map([[f.fg2.INSTAGRAM, new Date(2023, 1, 18).getTime()]]),
    m = 30 * _.A.Millis.DAY;
function g(e) {
    let { forUserProfile: t } = e,
        n = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        i = u.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging,
        r = (0, l.useIsRiotSocialSDKMigrationEnabled)({ location: "usePlatformAllowed" });
    return (e) =>
        e.type === f.fg2.PLAYSTATION_STAGING
            ? i
            : !!(void 0 !== n && p[e.type]?.includes(n.id)) || !!t || ((null == e.replacedBy || !r) && e.enabled);
}
function A() {
    let e = (0, a.bG)([c.A], () => c.A.getAccounts()),
        t = g({ forUserProfile: !1 }),
        n = i.useMemo(() => {
            let t = new Set();
            return e.forEach((e) => t.add(e.type)), t;
        }, [e]);
    return i.useMemo(
        () =>
            s().sortBy(o.A.filter(t), [
                (e) => !(E.has(e.type) && Date.now() < (E.get(e.type) ?? 0) + m),
                (e) => n.has(e.type),
                (e) => e.hasMetadata,
                (e) => !f.ewM.has(e.type),
                (e) => e.name,
            ]),
        [n, t],
    );
}
function I(e) {
    let [t, n] = i.useState(!1);
    function r(e) {
        let { key: t } = e;
        t === h.dh.SHIFT && n(!0);
    }
    function s(e) {
        let { key: t } = e;
        t === h.dh.SHIFT && n(!1);
    }
    return (i.useEffect(
        () => (
            window.addEventListener("keydown", r),
            window.addEventListener("keyup", s),
            () => {
                window.removeEventListener("keydown", r), window.removeEventListener("keyup", s);
            }
        ),
        [],
    ),
    t && e === f.fg2.TWITTER)
        ? f.fg2.TWITTER_LEGACY
        : e;
}
f.fg2.PLAYSTATION, f.fg2.XBOX, f.fg2.SPOTIFY, f.fg2.STEAM, f.fg2.TWITCH;
