a.d(n, { oS: () => L, Ay: () => g }), a(321073);
var l,
    o,
    t = a(64700),
    i = a(284009),
    d = a.n(i),
    r = (((l = {})[(l.GAME_PROFILE_DISABLED = 1)] = "GAME_PROFILE_DISABLED"), l),
    u =
        (((o = {})[(o.THRILLER = 0)] = "THRILLER"),
        (o[(o.SCIENCE_FICTION = 1)] = "SCIENCE_FICTION"),
        (o[(o.ACTION = 2)] = "ACTION"),
        (o[(o.HORROR = 3)] = "HORROR"),
        (o[(o.SURVIVAL = 4)] = "SURVIVAL"),
        (o[(o.FANTASY = 5)] = "FANTASY"),
        (o[(o.HISTORICAL = 6)] = "HISTORICAL"),
        (o[(o.STEALTH = 7)] = "STEALTH"),
        (o[(o.COMEDY = 8)] = "COMEDY"),
        (o[(o.BUSINESS = 9)] = "BUSINESS"),
        (o[(o.DRAMA = 10)] = "DRAMA"),
        (o[(o.NON_FICTION = 11)] = "NON_FICTION"),
        (o[(o.KIDS = 12)] = "KIDS"),
        (o[(o.SANDBOX = 13)] = "SANDBOX"),
        (o[(o.OPEN_WORLD = 14)] = "OPEN_WORLD"),
        (o[(o.WARFARE = 15)] = "WARFARE"),
        (o[(o.EDUCATIONAL = 16)] = "EDUCATIONAL"),
        (o[(o.MYSTERY = 17)] = "MYSTERY"),
        (o[(o.PARTY = 18)] = "PARTY"),
        (o[(o.ROMANCE = 19)] = "ROMANCE"),
        (o[(o.EROTIC = 20)] = "EROTIC"),
        o),
    s = a(665260),
    I = a(574381),
    A = a(311043),
    E = a(174459);
let R = (0, a(945810).mj)({
    name: "2026-03-game-profiles-mobile",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
var c = a(738250),
    O = a(652215);
let f = function (e, n) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            l = arguments.length > 3 ? arguments[3] : void 0;
        E.default.track(O.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: n,
            rejection_reason: a,
            source: l,
        });
    },
    m = (e) => {
        if (null == e) return ["no match"];
        let n = [];
        return (
            s.Lt(e.gameFlags, r.GAME_PROFILE_DISABLED) && n.push("profile disabled"),
            e.themes.includes(u.EROTIC) && n.push("nsfw"),
            n
        );
    },
    p = (e) => 0 === m(e).length,
    L = (e) => p(A.A.getGame(e)),
    g = (e) => {
        let { applicationId: n = "", gameId: a, source: l, trackEntryPointImpression: o = !0 } = e,
            i = t.useRef(!1),
            r =
                (R.useConfig({ location: "useShouldOpenGameProfileModal" }).enabled && ((0, I.m0)() || (0, I.un)())) ||
                (0, I.xl)() ||
                (0, I.HZ)(),
            {
                gameId: u,
                gameRecord: s,
                isLoading: A,
            } = (0, c.A)({ applicationId: r ? n : void 0, gameId: r ? a : void 0 }),
            E = p(s);
        return (
            t.useEffect(() => {
                if (!i.current && r && o && !A && null != s) {
                    d()(null != l, "Cannot track a Game Profile Entry Point Impressions without a source.");
                    let e = m(s);
                    f(E, s.id, e, l), (i.current = !0);
                }
            }, [r, s, E, A, l, o]),
            { shouldOpenGameProfile: r && E, gameId: u }
        );
    };
