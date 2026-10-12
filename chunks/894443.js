n.d(t, { A: () => l });
var r = n(17928),
    s = n(73153);
let o = new Map();
class i extends r.Ay.Store {
    getFailure(e) {
        return o.get(e);
    }
}
let l = new i(s.h, {
    CONJURE_REMIX_STATE_SET: function (e) {
        let { projectId: t, pending: n, failed: r } = e;
        return n ? (o.set(t, r), !0) : o.delete(t);
    },
});
