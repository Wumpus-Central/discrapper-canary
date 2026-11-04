n.d(t, { l: () => c });
var i = n(17928),
    r = n(73153),
    l = n(91242);
let s = new Map(),
    a = new Set();
class o extends i.Ay.Store {
    initialize() {
        this.waitFor(l.A);
    }
    isUpdateAvailable(e) {
        return null != e && a.has(e);
    }
}
let u = new o(r.h, {
    APPLICATION_FRAME_UPDATE: function (e) {
        let { applicationId: t, updatedAt: n } = e,
            i = null != n ? Date.parse(n) : NaN,
            r = !1;
        for (let { id: e, applicationId: n } of l.A.getAllFrames()) {
            if (n !== t || a.has(e)) continue;
            let l = s.get(e);
            (null == l || Number.isNaN(i) || !(l >= i)) && (a.add(e), (r = !0));
        }
        return r;
    },
    FRAME_LAUNCH: function (e) {
        let { frameId: t } = e;
        return (s.set(t, Date.now()), a.delete(t));
    },
    FRAME_STOP: function (e) {
        let { frameId: t } = e;
        return (s.delete(t), a.delete(t));
    },
    FRAME_UPDATE_PROXY_TICKET: function (e) {
        let { frameId: t } = e;
        return (s.set(t, Date.now()), a.delete(t));
    },
});
function c(e) {
    return (0, i.bG)([u], () => u.isUpdateAvailable(e), [e]);
}
