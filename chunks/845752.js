n.d(t, { Z: () => s });
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(186901),
    o = n(981631);
function s(e, t) {
    return {
        [o.zMe.VOICE_SETTINGS_UPDATE]: {
            scope: {
                [a.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
            },
            handler: () => (t) => {
                let { prevState: n, dispatch: r } = t,
                    l = e();
                return i().isEqual(l, n) || r(l), l;
            }
        },
        [o.zMe.VOICE_SETTINGS_UPDATE_2]: {
            scope: a.lH,
            handler(e) {
                let { socket: n } = e;
                return (e) => {
                    let { prevState: r, dispatch: l } = e;
                    if (null == n.application.id) return r;
                    let a = t(n.application.id);
                    return i().isEqual(a, r) || l(a), a;
                };
            }
        }
    };
}
