(n.d(t, { Z: () => p }), n(539854), n(388685));
var r = n(73800),
    i = n(442837),
    o = n(417438),
    a = n(360787),
    s = n(158776);
let l = [],
    c = [],
    u = [];
function d(e, t) {
    if (!t.isPrivate()) return [u, c];
    let n = e.filter((e) => {
            var t, n;
            return (null == (t = e.application) ? void 0 : t.id) != null && (null == (n = e.activity) ? void 0 : n.party_id) != null;
        }),
        r = n.map((e) => e.id);
    return [n, r];
}
function f(e, t) {
    if (0 === e.length) return l;
    let n = [];
    return (
        e.forEach((e) => {
            var r, i;
            let o = null == (r = e.application) ? void 0 : r.id,
                a = null == (i = e.activity) ? void 0 : i.party_id;
            if (e.id in t || null == o || null == a) return;
            let s = e.timestamp.getTime(),
                l = {
                    userId: e.author.id,
                    applicationId: o,
                    partyId: a,
                    messageId: e.id,
                    channelId: e.channel_id,
                    inviteTime: s
                };
            n.push(l);
        }),
        n
    );
}
function _(e, t) {
    let [n, o] = r.useMemo(() => d(e, t), [e, t]),
        a = (0, i.Wu)(
            [s.Z],
            () => {
                let e = [];
                return (
                    n.forEach((t) => {
                        null !=
                            s.Z.findActivity(
                                t.author.id,
                                (e) => {
                                    var n, r, i;
                                    return e.application_id === (null == (n = t.application) ? void 0 : n.id) && (null == (r = e.party) ? void 0 : r.id) === (null == (i = t.activity) ? void 0 : i.party_id);
                                },
                                null,
                                !0
                            ) && e.push(t.id);
                    }),
                    e
                );
            },
            [n]
        );
    return [o, r.useMemo(() => f(n, a), [n, a])];
}
function p(e, t) {
    let [n, i] = _(e, t);
    return (
        r.useEffect(() => {
            for (let e of i) a.Z.isSubscribed(e) || (0, o.L)(e);
        }, [i]),
        [n, i]
    );
}
