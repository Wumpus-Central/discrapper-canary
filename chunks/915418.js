A.d(e, { r: () => c });
var r = A(64700),
    I = A(17928),
    a = A(183972),
    C = A(919466),
    E = A(297966),
    _ = A(469778),
    l = A(777376),
    N = A(674567),
    n = A(202541);
let u = {
    [E.gR.INITIAL]: l.p.CLAIM_IN_PROGRESS,
    [E.gR.AWAITING_ACTIVATION]: l.p.CLAIM_IN_PROGRESS,
    [E.gR.ACTIVATED]: l.p.CLAIMED,
    [E.gR.FAILED]: l.p.NOT_CLAIMED,
    [E.gR.EXPIRED]: l.p.NOT_CLAIMED,
    [E.gR.CANCELLATION_PENDING]: l.p.CANCELLATION_IN_PROGRESS,
};
function c() {
    let t = (0, N.V)(),
        e = (0, I.bG)([_.A], () => _.A.isFetchedForApplication(n.tv)),
        { activationStatus: A, activationRequestState: c } = (0, I.cf)([C.A], () => ({
            activationStatus: C.A.getActivationStatus(),
            activationRequestState: C.A.getRequestState(),
        })),
        i = e && (null != A ? A.state === E.gR.CANCELLATION_PENDING : c === E.db.NOT_FETCHED);
    return (
        r.useEffect(() => {
            t === N.s.HAS_ACCESS && i && (0, a.x6)(E.n9.XGPP);
        }, [t, i]),
        (function (t) {
            let { activationStatus: e, activationRequestState: A } = t,
                r = A === E.db.FETCHING || A === E.db.CANCELLING;
            return A === E.db.NOT_FETCHED || A === E.db.FETCHING
                ? { status: l.p.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                : {
                      status: null != e ? u[e.state] : l.p.NOT_CLAIMED,
                      redirect: e?.redirect ?? null,
                      requestInProgress: r,
                  };
        })({ activationStatus: A, activationRequestState: c })
    );
}
