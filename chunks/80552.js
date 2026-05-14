"use strict";
n.d(t, { T_: () => A, oS: () => I, Ay: () => T }), n(321073);
var i,
    r,
    s = n(64700),
    a = n(284009),
    o = n.n(a),
    l = (((i = {})[(i.GAME_PROFILE_DISABLED = 1)] = "GAME_PROFILE_DISABLED"), i),
    u =
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
    c = n(665260),
    d = n(574381),
    _ = n(311043),
    f = n(174459);
let h = (0, n(945810).mj)({
    name: "2026-03-game-profiles-mobile",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var p = n(738250),
    E = n(652215);
let m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0;
        f.default.track(E.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: t,
            rejection_reason: n,
            source: i,
        });
    },
    g = (e) => {
        if (null == e) return ["no match"];
        let t = [];
        return (
            c.Lt(e.gameFlags, l.GAME_PROFILE_DISABLED) && t.push("profile disabled"),
            e.themes.includes(u.EROTIC) && t.push("nsfw"),
            t
        );
    },
    A = (e) => 0 === g(e).length,
    I = (e) => A(_.A.getGame(e)),
    T = (e) => {
        let { applicationId: t = "", gameId: n, source: i, trackEntryPointImpression: r = !0 } = e,
            a = s.useRef(!1),
            l =
                (h.useConfig({ location: "useShouldOpenGameProfileModal" }).enabled && ((0, d.m0)() || (0, d.un)())) ||
                (0, d.xl)() ||
                (0, d.HZ)(),
            {
                gameId: u,
                gameRecord: c,
                isLoading: _,
            } = (0, p.A)({ applicationId: l ? t : void 0, gameId: l ? n : void 0 }),
            f = A(c);
        return (
            s.useEffect(() => {
                if (!a.current && l && r && !_ && null != c) {
                    o()(null != i, "Cannot track a Game Profile Entry Point Impressions without a source.");
                    let e = g(c);
                    m(f, c.id, e, i), (a.current = !0);
                }
            }, [l, c, f, _, i, r]),
            { shouldOpenGameProfile: l && f, gameId: u }
        );
    };
