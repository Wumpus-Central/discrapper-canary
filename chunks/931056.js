n.d(t, { Z: () => d }), n(539854), n(388685);
var i = n(473749),
    r = n(442837),
    l = n(417438),
    a = n(360787),
    o = n(158776);
let s = [],
    c = [],
    u = [];
function d(e, t) {
    let [n, d] = (function (e, t) {
        let [n, l] = i.useMemo(
                () =>
                    (function (e, t) {
                        if (!t.isPrivate()) return [u, c];
                        let n = e.filter((e) => {
                                var t, n;
                                return (
                                    (null == (t = e.application) ? void 0 : t.id) != null &&
                                    (null == (n = e.activity) ? void 0 : n.party_id) != null
                                );
                            }),
                            i = n.map((e) => e.id);
                        return [n, i];
                    })(e, t),
                [e, t],
            ),
            a = (0, r.Wu)([o.Z], () => {
                let e = [];
                return (
                    n.forEach((t) => {
                        null !=
                            o.Z.findActivity(
                                t.author.id,
                                (e) => {
                                    var n, i, r;
                                    return (
                                        e.application_id === (null == (n = t.application) ? void 0 : n.id) &&
                                        (null == (i = e.party) ? void 0 : i.id) ===
                                            (null == (r = t.activity) ? void 0 : r.party_id)
                                    );
                                },
                                null,
                                !0,
                            ) && e.push(t.id);
                    }),
                    e
                );
            }, [n]);
        return [
            l,
            i.useMemo(
                () =>
                    (function (e, t) {
                        if (0 === e.length) return s;
                        let n = [];
                        return (
                            e.forEach((e) => {
                                var i, r;
                                let l = null == (i = e.application) ? void 0 : i.id,
                                    a = null == (r = e.activity) ? void 0 : r.party_id;
                                if (e.id in t || null == l || null == a) return;
                                let o = e.timestamp.getTime(),
                                    s = {
                                        userId: e.author.id,
                                        applicationId: l,
                                        partyId: a,
                                        messageId: e.id,
                                        channelId: e.channel_id,
                                        inviteTime: o,
                                    };
                                n.push(s);
                            }),
                            n
                        );
                    })(n, a),
                [n, a],
            ),
        ];
    })(e, t);
    return (
        i.useEffect(() => {
            for (let e of d) a.Z.isSubscribed(e) || (0, l.L)(e);
        }, [d]),
        [n, d]
    );
}
