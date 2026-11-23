n.d(t, { k: () => A });
var r = n(582128),
    i = n(855986),
    s = n(183636),
    l = n(506988),
    a = n(971276),
    u = n(887947),
    o = n(157695);
let c = (0, n(945810).mj)({
    name: "2026-11-ad-refresh-immediate-on-focus",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !1 },
        2: { enabled: !0 },
        3: { enabled: !0 },
        4: { enabled: !0 },
        5: { enabled: !0 },
        6: { enabled: !0 },
        7: { enabled: !0 },
        8: { enabled: !0 },
        9: { enabled: !0 },
    },
});
var d = n(107195),
    f = n(221596);
function E(e, t, n, r, i) {
    if (!(!(0, a.s)() || (e.length > 0 && e.every((e) => (0, d.sv)(e))))) {
        if ("focused" !== s.A.getState()) {
            e.length > 0 && (0, u.F)(t, Math.min(...e.map((e) => e.ttlMillis)), i);
            return;
        }
        !o.A.isFetchingAdToDeliverByPlacement(t) && o.A.canRefreshAd(t) && n(t, r);
    }
}
function A(e, t) {
    let { fetch: n, callerSource: a, refetchOnFocus: u } = t,
        { enabled: d } = c.useConfig(
            { location: e === l.p9.QUEST_HOME_BANNER_DESKTOP ? f.rE.QUEST_HOME_HERO : f.rE.QUESTS_BAR },
            { autoTrackExposure: null != e && null == u },
        ),
        A = u ?? d,
        C = s.A.useState(),
        _ = A ? C : null,
        T = (0, i.bG)([o.A], () => (null == e ? null : o.A.getAdDecisionsForPlacement(e)), [e]);
    (0, r.useEffect)(() => {
        if (null == e || null == T) return;
        E(T, e, n, `${a}-open`, A);
        let t = setInterval(() => {
            E(o.A.getAdDecisionsForPlacement(e), e, n, `${a}-interval`, A);
        }, 3e4);
        return () => clearInterval(t);
    }, [T, e, n, a, _, A]);
}
