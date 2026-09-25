(l.d(e, { T_: () => h, oS: () => A, Ay: () => I }), l(321073));
var t,
    a = l(582128),
    o = l(284009),
    u = l.n(o),
    i = (((t = {})[(t.GAME_DISABLED = 1)] = "GAME_DISABLED"), t),
    r = l(665260),
    d = l(501592),
    c = l(311043),
    s = l(174459),
    f = l(738250),
    g = l(652215);
function m(n) {
    return r.Lt(n.gameFlags, i.GAME_DISABLED);
}
function p(n) {
    if (null == n) return ["no match"];
    let e = [];
    return (m(n) && e.push("profile disabled"), (0, d.K)(n.contentClassification) && e.push("nsfw"), e);
}
function h(n) {
    return 0 === p(n).length;
}
function A(n) {
    return h(c.A.getGame(n));
}
let I = function (n) {
    let { applicationId: e = "", gameId: l, source: t, trackEntryPointImpression: o = !0 } = n,
        i = a.useRef(!1),
        { gameId: r, gameRecord: d, isLoading: c } = (0, f.A)({ applicationId: e, gameId: l }),
        h = null != d && !m(d);
    return (
        a.useEffect(() => {
            i.current ||
                !o ||
                c ||
                null == d ||
                (u()(null != t, "Cannot track a Game Profile Entry Point Impressions without a source."),
                (function (n, e) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        t = arguments.length > 3 ? arguments[3] : void 0;
                    s.default.track(g.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
                        game_profile_available: n,
                        application_id: e,
                        rejection_reason: l,
                        source: t,
                    });
                })(h, d.id, p(d), t),
                (i.current = !0));
        }, [d, h, c, t, o]),
        { shouldOpenGameProfile: h, gameId: r }
    );
};
