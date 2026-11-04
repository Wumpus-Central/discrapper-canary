var r = n(855986),
    s = n(73153);
let i = new Map(),
    o = new Map();
class l extends r.Ay.Store {
    getFailure(e) {
        return i.get(e);
    }
    getSetupStartedAt(e) {
        return null === i.get(e) ? o.get(e) : void 0;
    }
}
let a = new l(s.h, {
    CONJURE_REMIX_STATE_SET: function (e) {
        let { projectId: t, pending: n, failed: r } = e;
        return n
            ? (null == r && null !== i.get(t) && o.set(t, Date.now()), i.set(t, r), !0)
            : (o.delete(t), i.delete(t));
    },
});
n.d(t, {}, { A: a });
