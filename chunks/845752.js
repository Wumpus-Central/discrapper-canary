n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(392711),
    r = n.n(i),
    l = n(243814),
    a = n(186901),
    s = n(981631);
function o(e, t) {
    return {
        [s.zMe.VOICE_SETTINGS_UPDATE]: {
            scope: {
                [a.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
            },
            handler: () => (t) => {
                let { prevState: n, dispatch: i } = t,
                    l = e();
                return !r().isEqual(l, n) && i(l), l;
            }
        },
        [s.zMe.VOICE_SETTINGS_UPDATE_2]: {
            scope: a.lH,
            handler(e) {
                let { socket: n } = e;
                return (e) => {
                    let { prevState: i, dispatch: l } = e;
                    if (null == n.application.id) return i;
                    let a = t(n.application.id);
                    return !r().isEqual(a, i) && l(a), a;
                };
            }
        }
    };
}
