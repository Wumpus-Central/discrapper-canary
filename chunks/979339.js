n.d(t, { Z: () => a }), n(47120), n(653041);
var r = n(442837),
    i = n(136015),
    l = n(565799),
    o = n(501655);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        [n] = (0, r.e7)(
            [l.Z],
            () => {
                let n = l.Z.getMutableParticipants(e).filter((e) => e.type === o.Ui.VOICE),
                    r = [];
                for (let e of n) {
                    if (r.length >= t) break;
                    null == r.find((t) => t.id === e.user.id) && r.push(e.user);
                }
                return [
                    {
                        participants: n,
                        usersInSummary: r
                    },
                    l.Z.getParticipantsVersion(e)
                ];
            },
            [e, t],
            i.Q
        );
    return n;
}
