(t.d(e, { T_: () => h, oS: () => m, Ay: () => _, TC: () => A }), t(321073));
var l,
    a = t(582128),
    u = t(284009),
    o = t.n(u),
    i = (((l = {})[(l.GAME_DISABLED = 1)] = "GAME_DISABLED"), l),
    r = t(665260),
    d = t(501592),
    s = t(311043),
    c = t(980822),
    f = t(174459),
    p = t(652215);
function A(n) {
    return r.Lt(n.gameFlags, i.GAME_DISABLED);
}
function g(n) {
    if (null == n) return ["no match"];
    let e = [];
    return (A(n) && e.push("profile disabled"), (0, d.K)(n.contentClassification) && e.push("nsfw"), e);
}
function h(n) {
    return 0 === g(n).length;
}
function m(n) {
    return h(s.A.getGame(n));
}
let _ = function (n) {
    let { applicationId: e = "", gameId: t, source: l, trackEntryPointImpression: u = !0 } = n,
        i = a.useRef(!1),
        { gameId: r, gameRecord: d, isLoading: s } = (0, c.A)({ applicationId: e, gameId: t }),
        h = null != d && !A(d);
    return (
        a.useEffect(() => {
            i.current ||
                !u ||
                s ||
                null == d ||
                (o()(null != l, "Cannot track a Game Profile Entry Point Impressions without a source."),
                (function (n, e) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        l = arguments.length > 3 ? arguments[3] : void 0;
                    f.default.track(p.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
                        game_profile_available: n,
                        application_id: e,
                        rejection_reason: t,
                        source: l,
                    });
                })(h, d.id, g(d), l),
                (i.current = !0));
        }, [d, h, s, l, u]),
        { shouldOpenGameProfile: h, gameId: r }
    );
};
