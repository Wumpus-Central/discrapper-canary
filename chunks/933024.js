"use strict";
n.d(t, { A: () => l });
var i = n(290863),
    r = n(994500),
    s = n(652215),
    a = n(800828),
    o = n(660387);
function l() {
    return {
        num_friends: r.A.getFriendCount(),
        ...(function () {
            let e = 0,
                t = 0,
                n = 0;
            for (let a of r.A.getFriendIDs())
                switch (i.A.getStatus(a)) {
                    case s.clD.ONLINE:
                        e++;
                        break;
                    case s.clD.IDLE:
                        t++;
                        break;
                    case s.clD.DND:
                        n++;
                }
            return { num_friends_online: e, num_friends_idle: t, num_friends_dnd: n };
        })(),
        num_outgoing_requests: r.A.getOutgoingCount(),
        num_incoming_requests: r.A.getPendingCount(),
        num_game_friends: a.A.getGameFriendCount(),
        num_game_outgoing_requests: a.A.getPendingOutgoingCount(),
        num_game_incoming_requests: a.A.getPendingIncomingCount(),
        ...(0, o.F)(),
    };
}
