n.d(t, {
    y: () => u,
}),
    n(321073),
    n(896048),
    n(638769);
var r = n(311907),
    i = n(870391),
    l = n(290863),
    s = n(994500),
    o = n(287809),
    a = n(652215);

function u() {
    return (0, r.yK)([i.A, o.default, l.A, s.A], () => {
        let e = i.A.getGroups(),
            t = [];
        for (let n of e) {
            let e = [];
            for (let t of n.userIds) {
                let n = o.default.getUser(t);
                if (null == n || !s.A.isFriend(t)) continue;
                let r = l.A.getActivities(t),
                    i = s.A.getNickname(t);
                e.push({
                    user: n,
                    activities: r,
                    nickname: i,
                });
            }
            e.sort((e, t) => {
                var n, r;
                let i = l.A.getStatus(e.user.id),
                    s = l.A.getStatus(t.user.id),
                    o = i === a.clD.ONLINE || i === a.clD.IDLE || i === a.clD.DND,
                    u = s === a.clD.ONLINE || s === a.clD.IDLE || s === a.clD.DND;
                if (o !== u) return u ? 1 : -1;
                let c = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
                    d = (null != (r = t.user.globalName) ? r : t.user.username).toLowerCase();
                return c.localeCompare(d);
            }),
                t.push({
                    id: n.id,
                    name: n.name,
                    users: e,
                });
        }
        return t;
    });
}
