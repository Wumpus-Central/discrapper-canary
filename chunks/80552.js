"use strict";
n.d(t, { oS: () => N, Ay: () => C }), n(321073);
var i,
    r,
    s = n(64700),
    a = n(284009),
    o = n.n(a),
    l = (((i = {})[(i.GAME_PROFILE_DISABLED = 1)] = "GAME_PROFILE_DISABLED"), i),
    d =
        (((r = {})[(r.THRILLER = 0)] = "THRILLER"),
        (r[(r.SCIENCE_FICTION = 1)] = "SCIENCE_FICTION"),
        (r[(r.ACTION = 2)] = "ACTION"),
        (r[(r.HORROR = 3)] = "HORROR"),
        (r[(r.SURVIVAL = 4)] = "SURVIVAL"),
        (r[(r.FANTASY = 5)] = "FANTASY"),
        (r[(r.HISTORICAL = 6)] = "HISTORICAL"),
        (r[(r.STEALTH = 7)] = "STEALTH"),
        (r[(r.COMEDY = 8)] = "COMEDY"),
        (r[(r.BUSINESS = 9)] = "BUSINESS"),
        (r[(r.DRAMA = 10)] = "DRAMA"),
        (r[(r.NON_FICTION = 11)] = "NON_FICTION"),
        (r[(r.KIDS = 12)] = "KIDS"),
        (r[(r.SANDBOX = 13)] = "SANDBOX"),
        (r[(r.OPEN_WORLD = 14)] = "OPEN_WORLD"),
        (r[(r.WARFARE = 15)] = "WARFARE"),
        (r[(r.EDUCATIONAL = 16)] = "EDUCATIONAL"),
        (r[(r.MYSTERY = 17)] = "MYSTERY"),
        (r[(r.PARTY = 18)] = "PARTY"),
        (r[(r.ROMANCE = 19)] = "ROMANCE"),
        (r[(r.EROTIC = 20)] = "EROTIC"),
        r),
    _ = n(665260),
    u = n(574381),
    c = n(17928),
    E = n(587895),
    h = n(429913),
    m = n(311043),
    f = n(569926),
    g = n(954571);
let p = (0, n(945810).mj)({
    name: "2026-03-game-profiles-mobile",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var A = n(652215);
let I = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0;
        g.default.track(A.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: t,
            rejection_reason: n,
            source: i,
        });
    },
    T = (e) => {
        let t = [];
        return null == e
            ? ["no match"]
            : (_.Lt(e.gameFlags, l.GAME_PROFILE_DISABLED) && t.push("profile disabled"),
              e.themes.includes(d.EROTIC) && t.push("nsfw"),
              (null == e.description || 0 === e.description.length) && t.push("no summary"),
              t);
    },
    S = (e) => 0 === T(e).length,
    N = (e) => S(m.A.getGame(e)),
    C = (e) => {
        let { applicationId: t = "", source: n, trackEntryPointImpression: i = !0 } = e,
            r = s.useRef(!1),
            a =
                (p.useConfig({ location: "useShouldOpenGameProfileModal" }).enabled && ((0, u.m0)() || (0, u.un)())) ||
                (0, u.xl)() ||
                (0, u.HZ)(),
            l = (0, c.bG)([E.A], () => E.A.getApplication(t)),
            d = s.useMemo(
                () => [t, ...(l?.linkedGames?.map((e) => e.id) ?? [])].filter((e) => null != e && "" !== e),
                [t, l],
            );
        (0, h.A)(a ? d : []), (0, f.x)(a ? d : []);
        let _ = (0, c.bG)([m.A], () => d.find((e) => S(m.A.getGame(e)))),
            g = (0, c.bG)([m.A, E.A], () => d.every((e) => !m.A.isFetching(e) && !E.A.isFetchingApplication(e)));
        return (
            s.useEffect(() => {
                if (!r.current && a && i && null != l && (g || null != _)) {
                    let e = null != _ ? m.A.getGame(_) : m.A.getGame(l.id);
                    if (null != e) {
                        o()(null != n, "Cannot track a Game Profile Entry Point Impressions without a source.");
                        let t = T(e);
                        I(null != _, e.applicationId, t, n), (r.current = !0);
                    }
                }
            }, [_, l, a, g, n, i]),
            { shouldOpenGameProfile: a && null != _, applicationId: _ }
        );
    };
