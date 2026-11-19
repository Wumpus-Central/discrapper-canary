n.d(t, { Dp: () => b, kW: () => v, r8: () => S });
var r = n(582128),
    i = n(323889),
    s = n(855986),
    l = n(157695),
    a = n(183636),
    u = n(506988),
    o = n(971276),
    c = n(887947),
    d = n(945810);
let f = (0, d.mj)({
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
var A = n(107195),
    C = n(221596);
function E(e, t, n, r, i) {
    if (!(!(0, o.s)() || (e.length > 0 && e.every((e) => (0, A.sv)(e))))) {
        if ("focused" !== a.A.getState()) {
            e.length > 0 && (0, c.F)(t, Math.min(...e.map((e) => e.ttlMillis)), i);
            return;
        }
        !l.A.isFetchingAdToDeliverByPlacement(t) && l.A.canRefreshAd(t) && n(t, r);
    }
}
var g = n(797553),
    T = n(122760);
let _ = (0, d.mj)({
    name: "2026-11-return-full-quest-status-in-decision",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
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
var m = n(977416);
function p(e, t) {
    let n = _.getConfig({ location: "quest-placement-refresh" }).enabled;
    (n || (0, g.N1)(), (0, g.r8)(e, t, n));
}
function b(e) {
    return (0, s.bG)([l.A], () => l.A.getAdDecisionsForPlacement(e)[0] ?? null, [e]);
}
function v(e) {
    !(function (e, t) {
        let { fetch: n, callerSource: i } = t,
            { enabled: o } = f.useConfig(
                { location: e === u.p9.QUEST_HOME_BANNER_DESKTOP ? C.rE.QUEST_HOME_HERO : C.rE.QUESTS_BAR },
                { autoTrackExposure: null != e },
            ),
            c = a.A.useState(),
            d = o ? c : null,
            A = (0, s.bG)([l.A], () => (null == e ? null : l.A.getAdDecisionsForPlacement(e)), [e]);
        (0, r.useEffect)(() => {
            if (null == e || null == A) return;
            E(A, e, n, `${i}-open`, o);
            let t = setInterval(() => {
                E(l.A.getAdDecisionsForPlacement(e), e, n, `${i}-interval`, o);
            }, 3e4);
            return () => clearInterval(t);
        }, [A, e, n, i, d, o]);
    })(e, { fetch: p, callerSource: "questBar" });
}
function S(e, t) {
    let n = (0, s.bG)([T.A], () => T.A.getQuestPreviewOverride(t), [t]),
        l = b(e),
        a = (0, A.Yz)(l?.creative),
        u = (0, s.bG)([T.A], () => (null != a ? (T.A.quests.get(a) ?? null) : null), [a]),
        o = null == u || (0, m.Ic)(u) ? null : u,
        c = n ?? o,
        d = (0, A.I4)(l?.creative),
        f = (0, A.Hc)(l?.creative);
    return (0, r.useMemo)(
        () =>
            null != c
                ? { type: i.p.QUEST, quest: c }
                : null != d
                  ? { type: i.p.BOUNTY, bounty: d }
                  : null != f
                    ? { type: i.p.PLAYABLE, playable: f }
                    : { type: i.p.NO_FILL },
        [c, d, f],
    );
}
