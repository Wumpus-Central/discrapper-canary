n.d(t, {
    A: () => l,
});
var r = n(800828),
    i = n(994500),
    a = n(660387);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}

function l() {
    return o(
        {
            num_friends: i.A.getFriendCount(),
            num_outgoing_requests: i.A.getOutgoingCount(),
            num_incoming_requests: i.A.getPendingCount(),
            num_game_friends: r.A.getGameFriendCount(),
            num_game_outgoing_requests: r.A.getPendingOutgoingCount(),
            num_game_incoming_requests: r.A.getPendingIncomingCount(),
        },
        (0, a.F)(),
    );
}
