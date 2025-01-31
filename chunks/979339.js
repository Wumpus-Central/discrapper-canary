n.d(t, { Z: () => s }), n(47120), n(653041);
var i = n(442837),
    l = n(136015),
    a = n(565799),
    r = n(501655);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        [n] = (0, i.e7)(
            [a.Z],
            () => {
                let n = a.Z.getMutableParticipants(e).filter((e) => e.type === r.Ui.VOICE),
                    i = [];
                for (let e of n) {
                    if (i.length >= t) break;
                    null == i.find((t) => t.id === e.user.id) && i.push(e.user);
                }
                return [
                    {
                        participants: n,
                        usersInSummary: i
                    },
                    a.Z.getParticipantsVersion(e)
                ];
            },
            [e, t],
            l.Q
        );
    return n;
}
