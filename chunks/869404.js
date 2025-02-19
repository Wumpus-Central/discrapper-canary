n.d(t, {
    IO: () => d,
    h3: () => u,
    k1: () => a,
    tU: () => c
}),
    n(47120);
var r = n(709054),
    i = n(355298),
    o = n(333984);
function a(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, o.Z];
    return l(
        s(e).filter((e) => {
            let [, r] = e;
            return !t.isMessageRequest(r.id) && !n.isSpam(r.id);
        })
    );
}
function s(e) {
    return r.default.keys(e).map((t) => [t, e[t]]);
}
function l(e) {
    return Array.from(e).reduce((e, t) => {
        let [n, r] = t;
        return Object.assign(e, { [n]: r });
    }, {});
}
function c(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, o.Z];
    return e.filter((e) => !t.isMessageRequest(e) && !n.isSpam(e));
}
function u(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, o.Z];
    return t.isMessageRequest(e) || n.isSpam(e);
}
function d() {
    let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.Z, o.Z],
        n = t.getSpamChannelsCount();
    return e.getMessageRequestsCount() > 0 || n > 0;
}
