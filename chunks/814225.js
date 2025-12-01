n.d(t, {
    P3: () => p,
    ZK: () => f,
    en: () => m,
}),
    n(704826),
    n(35282),
    n(388685);
var r = n(913527),
    i = n.n(r),
    a = n(828700);
n(358085), n(73346);
var o = n(981631),
    s = n(388032);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = {},
    u = {},
    d = Object.freeze(
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        l(e, t, n[t]);
                    });
            }
            return e;
        })({ ALL: -1 }, o.EKQ),
    );
function f(e) {
    let t = (0, a.LX)(e, { path: o.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug") });
    return null != t ? t.params.skuId : null;
}
function p(e) {
    switch (e) {
        case o.EKQ.ACTION:
            return s.intl.string(s.t["1o2/IM"]);
        case o.EKQ.ACTION_RPG:
            return s.intl.string(s.t.e9Yo4H);
        case o.EKQ.BRAWLER:
            return s.intl.string(s.t.WCkEjT);
        case o.EKQ.HACK_AND_SLASH:
            return s.intl.string(s.t.xQ4VmK);
        case o.EKQ.PLATFORMER:
            return s.intl.string(s.t.WA3189);
        case o.EKQ.STEALTH:
            return s.intl.string(s.t["6UPFdw"]);
        case o.EKQ.SURVIVAL:
            return s.intl.string(s.t.SVPCt9);
        case o.EKQ.ADVENTURE:
            return s.intl.string(s.t["15p8on"]);
        case o.EKQ.ACTION_ADVENTURE:
            return s.intl.string(s.t.AxkUBp);
        case o.EKQ.METROIDVANIA:
            return s.intl.string(s.t.Iwr38m);
        case o.EKQ.OPEN_WORLD:
            return s.intl.string(s.t["2HRHJO"]);
        case o.EKQ.PSYCHOLOGICAL_HORROR:
            return s.intl.string(s.t["/IwK3s"]);
        case o.EKQ.SANDBOX:
            return s.intl.string(s.t["2+Vu4Q"]);
        case o.EKQ.SURVIVAL_HORROR:
            return s.intl.string(s.t.CCzRiK);
        case o.EKQ.VISUAL_NOVEL:
            return s.intl.string(s.t.FE7rnk);
        case o.EKQ.DRIVING_RACING:
            return s.intl.string(s.t.Erzgca);
        case o.EKQ.VEHICULAR_COMBAT:
            return s.intl.string(s.t.YQHhog);
        case o.EKQ.MASSIVELY_MULTIPLAYER:
            return s.intl.string(s.t["5CNg1o"]);
        case o.EKQ.MMORPG:
            return s.intl.string(s.t["c4NuO/"]);
        case o.EKQ.ROLE_PLAYING:
            return s.intl.string(s.t.yayVgs);
        case o.EKQ.DUNGEON_CRAWLER:
            return s.intl.string(s.t.qicemc);
        case o.EKQ.ROGUELIKE:
            return s.intl.string(s.t.zWzaCv);
        case o.EKQ.SHOOTER:
            return s.intl.string(s.t["+pk6sd"]);
        case o.EKQ.LIGHT_GUN:
            return s.intl.string(s.t.TDS96y);
        case o.EKQ.SHOOT_EM_UP:
            return s.intl.string(s.t.wltDUE);
        case o.EKQ.FPS:
            return s.intl.string(s.t.olTaq4);
        case o.EKQ.DUAL_JOYSTICK_SHOOTER:
            return s.intl.string(s.t["SN+NS3"]);
        case o.EKQ.SIMULATION:
            return s.intl.string(s.t.sxMPdm);
        case o.EKQ.FLIGHT_SIMULATOR:
            return s.intl.string(s.t["Q7msr+"]);
        case o.EKQ.TRAIN_SIMULATOR:
            return s.intl.string(s.t.ZtECf3);
        case o.EKQ.LIFE_SIMULATOR:
            return s.intl.string(s.t.byt5Fo);
        case o.EKQ.FISHING:
            return s.intl.string(s.t.BKwiwY);
        case o.EKQ.SPORTS:
            return s.intl.string(s.t.O0B7XM);
        case o.EKQ.BASEBALL:
            return s.intl.string(s.t["jPYb/z"]);
        case o.EKQ.BASKETBALL:
            return s.intl.string(s.t["o+D1Bm"]);
        case o.EKQ.BILLIARDS:
            return s.intl.string(s.t.PJ5o4E);
        case o.EKQ.BOWLING:
            return s.intl.string(s.t["82afJw"]);
        case o.EKQ.BOXING:
            return s.intl.string(s.t.DQvfei);
        case o.EKQ.FOOTBALL:
            return s.intl.string(s.t.slOYkj);
        case o.EKQ.GOLF:
            return s.intl.string(s.t.aeQPlG);
        case o.EKQ.HOCKEY:
            return s.intl.string(s.t.g7oe5X);
        case o.EKQ.SKATEBOARDING_SKATING:
            return s.intl.string(s.t.yBDEP0);
        case o.EKQ.SNOWBOARDING_SKIING:
            return s.intl.string(s.t.GVaAci);
        case o.EKQ.SOCCER:
            return s.intl.string(s.t.KPznxl);
        case o.EKQ.TRACK_FIELD:
            return s.intl.string(s.t["hJ62Q/"]);
        case o.EKQ.SURFING_WAKEBOARDING:
            return s.intl.string(s.t.PSh0CV);
        case o.EKQ.WRESTLING:
            return s.intl.string(s.t["3y9hAT"]);
        case o.EKQ.STRATEGY:
            return s.intl.string(s.t.KovTD8);
        case o.EKQ.FOUR_X:
            return s.intl.string(s.t["19h4dX"]);
        case o.EKQ.ARTILLERY:
            return s.intl.string(s.t.sBqLsP);
        case o.EKQ.RTS:
            return s.intl.string(s.t.yS4ddj);
        case o.EKQ.TOWER_DEFENSE:
            return s.intl.string(s.t.SULyIO);
        case o.EKQ.TURN_BASED_STRATEGY:
            return s.intl.string(s.t.VDsbru);
        case o.EKQ.WARGAME:
            return s.intl.string(s.t.YDCIrO);
        case o.EKQ.MOBA:
            return s.intl.string(s.t.i1m1t8);
        case o.EKQ.FIGHTING:
            return s.intl.string(s.t.KepcSI);
        case o.EKQ.PUZZLE:
            return s.intl.string(s.t.rm7Ggs);
        case o.EKQ.CARD_GAME:
            return s.intl.string(s.t.kX85vy);
        case o.EKQ.EDUCATION:
            return s.intl.string(s.t.klIi67);
        case o.EKQ.FITNESS:
            return s.intl.string(s.t.GOaaFb);
        case o.EKQ.GAMBLING:
            return s.intl.string(s.t["X8/Ee9"]);
        case o.EKQ.MUSIC_RHYTHM:
            return s.intl.string(s.t.qPgrgw);
        case o.EKQ.PARTY_MINI_GAME:
            return s.intl.string(s.t.diBclF);
        case o.EKQ.PINBALL:
            return s.intl.string(s.t["1+ottx"]);
        case o.EKQ.TRIVIA_BOARD_GAME:
            return s.intl.string(s.t.aLlxjC);
        case o.EKQ.TACTICAL:
            return s.intl.string(s.t.LRPgbt);
        case o.EKQ.INDIE:
            return s.intl.string(s.t.hz9Xvj);
        case o.EKQ.ARCADE:
            return s.intl.string(s.t.Sbxowr);
        case o.EKQ.POINT_AND_CLICK:
            return s.intl.string(s.t.vcerEn);
        default:
            return s.intl.string(s.t["9b4eUr"]);
    }
}
Object.keys(d).forEach((e) => {
    let t = e.toLowerCase().replace(/_/g, "-"),
        n = d[e];
    (c[t] = n), (u[n] = t);
});
let _ = [
    ["YYYY-MM-DD", "MMMM DD, Y"],
    ["YYYY-MM", "MMMM Y"],
    ["MM-DD", "MMMM DD"],
    ["MM", "MMMM"],
    ["YYYY", "Y"],
];
function m(e) {
    let { preorderReleaseAt: t, preorderApproximateReleaseDate: n } = e;
    if (null != t) return t.format("MMMM DD");
    if (null == n) return null;
    for (let e = 0; e < _.length; e++) {
        let [t, r] = _[e],
            a = i()(n, t, !0);
        if (a.isValid()) return a.format(r);
    }
    return n;
}
