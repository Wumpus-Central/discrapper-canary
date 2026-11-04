(e.r(s), e(41851));
var i = e(269882),
    n = e(646613);
let a = (0, n.t)({ types: { context: {} } }).createMachine({
    id: "trust-graph",
    initial: "finished",
    context: {},
    states: { finished: { type: "final" } },
});
function r(t) {
    return t.matches("finished") ? { status: "finished" } : { status: "idle" };
}
function u(t) {
    return { load() {} };
}
e.d(
    s,
    {},
    {
        createTrustGraphManager: function () {
            return (0, n.l)({
                actor: (0, n.s)(a).start(),
                mapState: r,
                createApi: u,
                instrumentation: (0, i.s)(i.n.trustGraph),
            });
        },
        trustGraphMachine: a,
    },
);
