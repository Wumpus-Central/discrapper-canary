n.d(t, { r: () => f });
var a = n(64700),
    i = n(913290),
    r = n(357758),
    s = n(17928),
    l = n(469778),
    c = n(276666),
    o = n(545600),
    d = n(777376),
    u = n(674567),
    _ = n(788868);
let m = new Set(),
    p = {
        [d.gR.INITIAL]: d.p1.CLAIM_IN_PROGRESS,
        [d.gR.AWAITING_ACTIVATION]: d.p1.CLAIM_IN_PROGRESS,
        [d.gR.ACTIVATED]: d.p1.CLAIMED,
        [d.gR.FAILED]: d.p1.NOT_CLAIMED,
        [d.gR.EXPIRED]: d.p1.NOT_CLAIMED,
    };
function f() {
    let e = (function () {
            var e;
            let t,
                n = (0, s.bG)([l.A], () => l.A.getForSku("1476683556242718862") ?? m, [], r._);
            if (null == n || 0 === n.size) return d.p1.NOT_CLAIMED;
            let a = null;
            for (let e of n) (null == a || (e.startsAt?.getTime() ?? 0) > (a.startsAt?.getTime() ?? 0)) && (a = e);
            if (null == a) return d.p1.NOT_CLAIMED;
            if (null == a.endsAt || new Date() < a.endsAt) return d.p1.CLAIMED;
            if (
                ((e = a),
                (t = new Date()),
                e.fulfillmentStatus === i.w.UNFULFILLMENT_NEEDED ||
                    (null != e.endsAt && t >= e.endsAt && e.isFulfilled()))
            )
                return d.p1.CANCELLATION_IN_PROGRESS;
        })(),
        t = (0, u.V)(),
        n = (0, s.bG)([l.A], () => l.A.isFetchedForApplication(_.tv)),
        { activationStatus: f, activationRequestState: A } = (0, s.cf)([o.A], () => ({
            activationStatus: o.A.getActivationStatus(),
            activationRequestState: o.A.getRequestState(),
        })),
        g = n && (null == e || e === d.p1.NOT_CLAIMED) && t === u.s.NITRO && !(0, d.Nk)(f?.redirect);
    return (
        a.useEffect(() => {
            g && (0, c.x6)(d.n9.XGPP);
        }, [g]),
        (function (e) {
            let { entitlementStatus: t, activationStatus: n, activationRequestState: a, entitlementsLoaded: i } = e,
                r = a === d.Px.FETCHING || a === d.Px.CANCELLING;
            return i
                ? null != t && t !== d.p1.NOT_CLAIMED
                    ? { status: t, redirect: null, requestInProgress: r }
                    : a === d.Px.NOT_FETCHED || a === d.Px.FETCHING
                      ? { status: d.p1.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                      : {
                            status: null != n ? p[n.state] : d.p1.NOT_CLAIMED,
                            redirect: n?.redirect ?? null,
                            requestInProgress: r,
                        }
                : { status: d.p1.NOT_CLAIMED, redirect: null, requestInProgress: !0 };
        })({ entitlementStatus: e, activationStatus: f, activationRequestState: A, entitlementsLoaded: n })
    );
}
