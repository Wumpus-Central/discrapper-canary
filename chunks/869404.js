n.d(t, {
    IO: () => d,
    h3: () => c,
    k1: () => s,
    tU: () => u
}),
    n(47120),
    n(724458);
var i = n(709054),
    r = n(355298),
    a = n(333984);
function s(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, a.Z];
    return l(
        o(e).filter((e) => {
            let [, i] = e;
            return !t.isMessageRequest(i.id) && !n.isSpam(i.id);
        })
    );
}
function o(e) {
    return i.default.keys(e).map((t) => [t, e[t]]);
}
function l(e) {
    return Array.from(e).reduce((e, t) => {
        let [n, i] = t;
        return Object.assign(e, { [n]: i });
    }, {});
}
function u(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, a.Z];
    return e.filter((e) => !t.isMessageRequest(e) && !n.isSpam(e));
}
function c(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, a.Z];
    return t.isMessageRequest(e) || n.isSpam(e);
}
function d() {
    let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.Z, a.Z],
        n = t.getSpamChannelsCount();
    return e.getMessageRequestsCount() > 0 || n > 0;
}
