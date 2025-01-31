n.d(t, { Z: () => o });
var i = n(392711),
    l = n.n(i),
    r = n(243814),
    a = n(186901),
    s = n(981631);
function o(e, t) {
    return {
        [s.zMe.VOICE_SETTINGS_UPDATE]: {
            scope: {
                [a.Gp.ANY]: [r.x.RPC, r.x.RPC_VOICE_READ]
            },
            handler: () => (t) => {
                let { prevState: n, dispatch: i } = t,
                    r = e();
                return l().isEqual(r, n) || i(r), r;
            }
        },
        [s.zMe.VOICE_SETTINGS_UPDATE_2]: {
            scope: a.lH,
            handler(e) {
                let { socket: n } = e;
                return (e) => {
                    let { prevState: i, dispatch: r } = e;
                    if (null == n.application.id) return i;
                    let a = t(n.application.id);
                    return l().isEqual(a, i) || r(a), a;
                };
            }
        }
    };
}
