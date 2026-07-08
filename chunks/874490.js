"use strict";
n.d(t, { gn: () => p, ML: () => T, dq: () => f });
var i = n(64700),
    r = n(735438),
    a = n.n(r),
    s = n(17928),
    l = n(573648);
let o = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-03-churro",
    defaultConfig: { allowPlayStationStaging: !1 },
    variations: { 1: { allowPlayStationStaging: !0 } },
});
var d = n(30370),
    c = n(287809),
    u = n(927813),
    _ = n(652215),
    E = n(650583);
let A = { [_.fg2.INSTAGRAM]: ["1036753656588017764"] },
    h = new Map([[_.fg2.INSTAGRAM, new Date(2023, 1, 18).getTime()]]),
    I = 30 * u.A.Millis.DAY;
function f(e) {
    let { forUserProfile: t } = e,
        n = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        i = o.useConfig({ location: "f2f7ef_1" }).allowPlayStationStaging;
    return (e) =>
        e.type === _.fg2.PLAYSTATION_STAGING
            ? i
            : !!(void 0 !== n && A[e.type]?.includes(n.id)) ||
              !!t ||
              (!e.migrationData?.getMigrationExperimentEnabled("ConnectionsHooks") && e.enabled);
}
function p() {
    let e = (0, s.bG)([d.A], () => d.A.getAccounts()),
        t = f({ forUserProfile: !1 }),
        n = i.useMemo(() => {
            let t = new Set();
            return e.forEach((e) => t.add(e.type)), t;
        }, [e]);
    return i.useMemo(
        () =>
            a().sortBy(l.A.filter(t), [
                (e) => !(h.has(e.type) && Date.now() < (h.get(e.type) ?? 0) + I),
                (e) => n.has(e.type),
                (e) => e.hasMetadata,
                (e) => !_.ewM.has(e.type),
                (e) => e.name,
            ]),
        [n, t],
    );
}
function T(e) {
    let [t, n] = i.useState(!1);
    function r(e) {
        let { key: t } = e;
        t === E.dh.SHIFT && n(!0);
    }
    function a(e) {
        let { key: t } = e;
        t === E.dh.SHIFT && n(!1);
    }
    return (i.useEffect(
        () => (
            window.addEventListener("keydown", r),
            window.addEventListener("keyup", a),
            () => {
                window.removeEventListener("keydown", r), window.removeEventListener("keyup", a);
            }
        ),
        [],
    ),
    t && e === _.fg2.TWITTER)
        ? _.fg2.TWITTER_LEGACY
        : e;
}
_.fg2.PLAYSTATION, _.fg2.XBOX, _.fg2.SPOTIFY, _.fg2.STEAM, _.fg2.TWITCH;
