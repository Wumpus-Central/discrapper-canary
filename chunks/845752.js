n.d(t, { Z: () => s });
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    o = n(186901),
    a = n(981631);
function s(e, t) {
    return {
        [a.zMe.VOICE_SETTINGS_UPDATE]: {
            scope: {
                [o.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
            },
            handler: () => (t) => {
                let { prevState: n, dispatch: r } = t,
                    l = e();
                return i().isEqual(l, n) || r(l), l;
            }
        },
        [a.zMe.VOICE_SETTINGS_UPDATE_2]: {
            scope: o.lH,
            handler(e) {
                let { socket: n } = e;
                return (e) => {
                    let { prevState: r, dispatch: l } = e;
                    if (null == n.application.id) return r;
                    let o = t(n.application.id);
                    return i().isEqual(o, r) || l(o), o;
                };
            }
        }
    };
}
