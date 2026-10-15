n.d(t, { A: () => a });
var r = n(17928),
    s = n(73153);
let o = new Map(),
    i = new Map();
class l extends r.Ay.Store {
    getFailure(e) {
        return o.get(e);
    }
    getSetupStartedAt(e) {
        return null === o.get(e) ? i.get(e) : void 0;
    }
}
let a = new l(s.h, {
    CONJURE_REMIX_STATE_SET: function (e) {
        let { projectId: t, pending: n, failed: r } = e;
        return n
            ? (null == r && null !== o.get(t) && i.set(t, Date.now()), o.set(t, r), !0)
            : (i.delete(t), o.delete(t));
    },
});
