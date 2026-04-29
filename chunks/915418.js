i.d(t, { r: () => m });
var a = i(64700),
    s = i(17928),
    n = i(469778),
    r = i(276666),
    l = i(545600),
    c = i(777376),
    d = i(674567),
    o = i(788868);
let u = {
    [c.gR.INITIAL]: c.p1.CLAIM_IN_PROGRESS,
    [c.gR.AWAITING_ACTIVATION]: c.p1.CLAIM_IN_PROGRESS,
    [c.gR.ACTIVATED]: c.p1.CLAIMED,
    [c.gR.FAILED]: c.p1.NOT_CLAIMED,
    [c.gR.EXPIRED]: c.p1.NOT_CLAIMED,
    [c.gR.CANCELLATION_PENDING]: c.p1.CANCELLATION_IN_PROGRESS,
};
function m() {
    let e = (0, d.V)(),
        t = (0, s.bG)([n.A], () => n.A.isFetchedForApplication(o.tv)),
        { activationStatus: i, activationRequestState: m } = (0, s.cf)([l.A], () => ({
            activationStatus: l.A.getActivationStatus(),
            activationRequestState: l.A.getRequestState(),
        })),
        A = t && (null != i ? i.state === c.gR.CANCELLATION_PENDING : m === c.Px.NOT_FETCHED);
    return (
        a.useEffect(() => {
            e === d.s.NITRO && A && (0, r.x6)(c.n9.XGPP);
        }, [e, A]),
        (function (e) {
            let { activationStatus: t, activationRequestState: i } = e,
                a = i === c.Px.FETCHING || i === c.Px.CANCELLING;
            return i === c.Px.NOT_FETCHED || i === c.Px.FETCHING
                ? { status: c.p1.NOT_CLAIMED, redirect: null, requestInProgress: !0 }
                : {
                      status: null != t ? u[t.state] : c.p1.NOT_CLAIMED,
                      redirect: t?.redirect ?? null,
                      requestInProgress: a,
                  };
        })({ activationStatus: i, activationRequestState: m })
    );
}
