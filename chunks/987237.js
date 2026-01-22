n.d(t, {
    A: () => C,
    C: () => T,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(793574),
    l = n(688810),
    c = n(532794),
    u = n(166403),
    d = n(954571),
    f = n(927578),
    p = n(697087),
    _ = n(112848),
    h = n(508591),
    m = n(788868),
    g = n(652215),
    E = n(49999),
    b = n(985018);
let y = 1,
    O = 15;
function A() {
    let e = I();
    return 1 === e ? b.intl.string(b.t.NBae0i) : b.intl.format(b.t.GSynLW, { time: e });
}
function v() {
    let e = (0, a.bG)([u.A], () => u.A.getPremiumSubscription());
    return null != e && e.status === g.Dmq.CANCELED ? e : null;
}
function S() {
    let e = v(),
        t = I();
    return null != e && t >= y && t <= O;
}
function I() {
    let e = v();
    return null != e ? (0, f.x6)(e) : 0;
}
function T(e, t) {
    let n = (0, _.Lh)(),
        r = S(),
        i = (0, p.u)(e, t);
    return null != n && r && i;
}
let C = (e) => {
    var t;
    let { markAsDismissed: n, children: a, mode: u = "popover", tooltipDelay: f = 300, targetElementRef: p } = e,
        { analyticsLocations: v } = (0, l.Ay)(o.A.TIERED_TENURE_BADGE_CHURN_REMINDER),
        S = A(),
        T = I(),
        C = null != (t = (0, _.Lh)()) ? t : m.Ac.PREMIUM_TENURE_1_MONTH,
        N = (0, i.useCallback)(() => {
            d.default.track(g.HAw.TOOLTIP_VIEWED, { type: "tiered_tenure_badge_churn_reminder" });
        }, []),
        R = (0, i.useCallback)(() => {
            null == n || n(E.i.TAKE_ACTION),
                (0, c.A)({
                    initialPlanId: null,
                    subscriptionTier: null,
                    analyticsLocations: v,
                });
        }, [n, v]),
        w = [
            {
                text: b.intl.string(b.t.iIvF2z),
                variant: "expressive",
                icon: s.tvc,
                iconPosition: "start",
                onClick: R,
            },
        ],
        P = T >= y && T <= O ? Math.max(1, Math.min(100, ((O - T) / O) * 100)) : 1,
        D = T <= 10 ? "critical" : "warning";
    return (0, r.jsx)(h.A, {
        badgeId: C,
        targetElementRef: p,
        body: S,
        mode: u,
        tooltipDelay: f,
        markAsDismissed: n,
        progressCircleText: "" + T,
        progressCirclePercent: P,
        progressCircleUrgency: D,
        actions: w,
        onShow: "tooltip" === u ? N : void 0,
        estimatedTooltipHeight: 300,
        children: a,
    });
};
