n.d(t, { A: () => a });
var s = n(17928),
    r = n(73153);
let o = new Map(),
    i = new Map();
class l extends s.Ay.Store {
    getFailure(e) {
        return o.get(e);
    }
    getSetupStartedAt(e) {
        return null === o.get(e) ? i.get(e) : void 0;
    }
}
let a = new l(r.h, {
    CONJURE_REMIX_STATE_SET: function (e) {
        let { projectId: t, pending: n, failed: s } = e;
        return n
            ? (null == s && null !== o.get(t) && i.set(t, Date.now()), o.set(t, s), !0)
            : (i.delete(t), o.delete(t));
    },
});
