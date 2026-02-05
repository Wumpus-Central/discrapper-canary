"use strict";
n.d(t, { A: () => s });
var r = n(800828),
    i = n(994500),
    a = n(660387);
function s() {
    return {
        num_friends: i.A.getFriendCount(),
        num_outgoing_requests: i.A.getOutgoingCount(),
        num_incoming_requests: i.A.getPendingCount(),
        num_game_friends: r.A.getGameFriendCount(),
        num_game_outgoing_requests: r.A.getPendingOutgoingCount(),
        num_game_incoming_requests: r.A.getPendingIncomingCount(),
        ...(0, a.F)(),
    };
}
