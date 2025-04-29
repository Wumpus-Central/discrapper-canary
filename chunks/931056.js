n.d(t, { Z: () => d }), n(539854), n(388685);
var r = n(73800),
    i = n(442837),
    l = n(417438),
    o = n(360787),
    a = n(158776);
let s = [],
    c = [],
    u = [];
function d(e, t) {
    let [n, d] = (function (e, t) {
        let [n, l] = r.useMemo(
                () =>
                    (function (e, t) {
                        if (!t.isPrivate()) return [u, c];
                        let n = e.filter((e) => {
                                var t, n;
                                return (null == (t = e.application) ? void 0 : t.id) != null && (null == (n = e.activity) ? void 0 : n.party_id) != null;
                            }),
                            r = n.map((e) => e.id);
                        return [n, r];
                    })(e, t),
                [e, t]
            ),
            o = (0, i.Wu)(
                [a.Z],
                () => {
                    let e = [];
                    return (
                        n.forEach((t) => {
                            null !=
                                a.Z.findActivity(
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
        return [
            l,
            r.useMemo(
                () =>
                    (function (e, t) {
                        if (0 === e.length) return s;
                        let n = [];
                        return (
                            e.forEach((e) => {
                                var r, i;
                                let l = null == (r = e.application) ? void 0 : r.id,
                                    o = null == (i = e.activity) ? void 0 : i.party_id;
                                if (e.id in t || null == l || null == o) return;
                                let a = e.timestamp.getTime(),
                                    s = {
                                        userId: e.author.id,
                                        applicationId: l,
                                        partyId: o,
                                        messageId: e.id,
                                        channelId: e.channel_id,
                                        inviteTime: a
                                    };
                                n.push(s);
                            }),
                            n
                        );
                    })(n, o),
                [n, o]
            )
        ];
    })(e, t);
    return (
        r.useEffect(() => {
            for (let e of d) o.Z.isSubscribed(e) || (0, l.L)(e);
        }, [d]),
        [n, d]
    );
}
