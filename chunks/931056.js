n.d(t, { Z: () => d }), n(653041), n(47120);
var r = n(192379),
    i = n(442837),
    l = n(417438),
    o = n(360787),
    a = n(158776);
let s = [],
    c = [],
    u = [c, s];
function d(e, t) {
    let [n, d] = (0, i.Wu)(
        [a.Z],
        () => {
            if (!t.isPrivate()) return u;
            let n = [],
                r = [];
            return (e.forEach((e) => {
                var t, i;
                let l = null == (t = e.application) ? void 0 : t.id,
                    o = null == (i = e.activity) ? void 0 : i.party_id;
                if (null != l && null != o) {
                    let t = e.author.id;
                    if (
                        null !=
                        a.Z.findActivity(
                            t,
                            (e) => {
                                var t;
                                return e.application_id === l && (null == (t = e.party) ? void 0 : t.id) === o;
                            },
                            null,
                            !0
                        )
                    )
                        return void n.push(e.id);
                    let i = e.timestamp.getTime(),
                        s = {
                            userId: t,
                            applicationId: l,
                            partyId: o,
                            messageId: e.id,
                            channelId: e.channel_id,
                            inviteTime: i
                        };
                    r.push(s);
                }
            }),
            0 === n.length && 0 === r.length)
                ? u
                : 0 === n.length
                  ? [c, r]
                  : 0 === r.length
                    ? [n, s]
                    : [n, r];
        },
        [e, t]
    );
    return (
        r.useEffect(() => {
            for (let e of d) o.Z.isSubscribed(e) || (0, l.L)(e);
        }, [d]),
        [n, d]
    );
}
