r.d(n, {
    IO: function () {
        return h;
    },
    h3: function () {
        return p;
    },
    k1: function () {
        return u;
    },
    tU: function () {
        return f;
    }
});
var i = r(47120);
var a = r(724458);
var o = r(709054),
    s = r(355298),
    l = r(333984);
function u(e) {
    let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, l.Z];
    return d(
        c(e).filter((e) => {
            let [, i] = e;
            return !n.isMessageRequest(i.id) && !r.isSpam(i.id);
        })
    );
}
function c(e) {
    return o.default.keys(e).map((n) => [n, e[n]]);
}
function d(e) {
    return Array.from(e).reduce((e, n) => {
        let [r, i] = n;
        return Object.assign(e, { [r]: i });
    }, {});
}
function f(e) {
    let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, l.Z];
    return e.filter((e) => !n.isMessageRequest(e) && !r.isSpam(e));
}
function p(e) {
    let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, l.Z];
    return n.isMessageRequest(e) || r.isSpam(e);
}
function h() {
    let [e, n] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [s.Z, l.Z],
        r = n.getSpamChannelsCount();
    return e.getMessageRequestsCount() > 0 || r > 0;
}
