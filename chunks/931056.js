n.d(t, { Z: () => u }), n(653041), n(47120);
var i = n(192379),
    l = n(442837),
    a = n(417438),
    r = n(360787),
    s = n(158776);
let o = [],
    c = [],
    d = [c, o];
function u(e, t) {
    let [n, u] = (0, l.Wu)(
        [s.Z],
        () => {
            if (!t.isPrivate()) return d;
            let n = [],
                i = [];
            return (e.forEach((e) => {
                var t, l;
                let a = null === (t = e.application) || void 0 === t ? void 0 : t.id,
                    r = null === (l = e.activity) || void 0 === l ? void 0 : l.party_id;
                if (null != a && null != r) {
                    let t = e.author.id;
                    if (
                        null !=
                        s.Z.findActivity(
                            t,
                            (e) => {
                                var t;
                                return e.application_id === a && (null === (t = e.party) || void 0 === t ? void 0 : t.id) === r;
                            },
                            null,
                            !0
                        )
                    ) {
                        n.push(e.id);
                        return;
                    }
                    let l = e.timestamp.getTime(),
                        o = {
                            userId: t,
                            applicationId: a,
                            partyId: r,
                            messageId: e.id,
                            channelId: e.channel_id,
                            inviteTime: l
                        };
                    i.push(o);
                }
            }),
            0 === n.length && 0 === i.length)
                ? d
                : 0 === n.length
                  ? [c, i]
                  : 0 === i.length
                    ? [n, o]
                    : [n, i];
        },
        [e, t]
    );
    return (
        i.useEffect(() => {
            for (let e of u) r.Z.isSubscribed(e) || (0, a.L)(e);
        }, [u]),
        [n, u]
    );
}
