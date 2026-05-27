l.d(n, { oS: () => g, Ay: () => L }), l(321073);
var a,
    t,
    o = l(64700),
    i = l(284009),
    u = l.n(i),
    d = (((a = {})[(a.GAME_PROFILE_DISABLED = 1)] = "GAME_PROFILE_DISABLED"), a),
    r =
        (((t = {})[(t.THRILLER = 0)] = "THRILLER"),
        (t[(t.SCIENCE_FICTION = 1)] = "SCIENCE_FICTION"),
        (t[(t.ACTION = 2)] = "ACTION"),
        (t[(t.HORROR = 3)] = "HORROR"),
        (t[(t.SURVIVAL = 4)] = "SURVIVAL"),
        (t[(t.FANTASY = 5)] = "FANTASY"),
        (t[(t.HISTORICAL = 6)] = "HISTORICAL"),
        (t[(t.STEALTH = 7)] = "STEALTH"),
        (t[(t.COMEDY = 8)] = "COMEDY"),
        (t[(t.BUSINESS = 9)] = "BUSINESS"),
        (t[(t.DRAMA = 10)] = "DRAMA"),
        (t[(t.NON_FICTION = 11)] = "NON_FICTION"),
        (t[(t.KIDS = 12)] = "KIDS"),
        (t[(t.SANDBOX = 13)] = "SANDBOX"),
        (t[(t.OPEN_WORLD = 14)] = "OPEN_WORLD"),
        (t[(t.WARFARE = 15)] = "WARFARE"),
        (t[(t.EDUCATIONAL = 16)] = "EDUCATIONAL"),
        (t[(t.MYSTERY = 17)] = "MYSTERY"),
        (t[(t.PARTY = 18)] = "PARTY"),
        (t[(t.ROMANCE = 19)] = "ROMANCE"),
        (t[(t.EROTIC = 20)] = "EROTIC"),
        t),
    s = l(665260),
    A = l(574381),
    I = l(311043),
    E = l(174459);
let c = (0, l(945810).mj)({
    name: "2026-03-game-profiles-mobile",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var f = l(738250),
    p = l(652215);
let R = function (e, n) {
        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            a = arguments.length > 3 ? arguments[3] : void 0;
        E.default.track(p.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: n,
            rejection_reason: l,
            source: a,
        });
    },
    O = (e) => {
        if (null == e) return ["no match"];
        let n = [];
        return (
            s.Lt(e.gameFlags, d.GAME_PROFILE_DISABLED) && n.push("profile disabled"),
            e.themes.includes(r.EROTIC) && n.push("nsfw"),
            n
        );
    },
    m = (e) => 0 === O(e).length,
    g = (e) => m(I.A.getGame(e)),
    L = (e) => {
        let { applicationId: n = "", gameId: l, source: a, trackEntryPointImpression: t = !0 } = e,
            i = o.useRef(!1),
            d =
                (c.useConfig({ location: "useShouldOpenGameProfileModal" }).enabled && ((0, A.m0)() || (0, A.un)())) ||
                (0, A.xl)() ||
                (0, A.HZ)(),
            {
                gameId: r,
                gameRecord: s,
                isLoading: I,
            } = (0, f.A)({ applicationId: d ? n : void 0, gameId: d ? l : void 0 }),
            E = m(s);
        return (
            o.useEffect(() => {
                if (!i.current && d && t && !I && null != s) {
                    u()(null != a, "Cannot track a Game Profile Entry Point Impressions without a source.");
                    let e = O(s);
                    R(E, s.id, e, a), (i.current = !0);
                }
            }, [d, s, E, I, a, t]),
            { shouldOpenGameProfile: d && E, gameId: r }
        );
    };
