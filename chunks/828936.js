n.d(t, { l: () => c });
var i = n(17928),
    r = n(73153),
    a = n(91242);
let s = new Map(),
    l = new Set();
class o extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    isUpdateAvailable(e) {
        return null != e && l.has(e);
    }
}
let d = new o(r.h, {
    APPLICATION_FRAME_UPDATE: function (e) {
        let { applicationId: t, updatedAt: n } = e,
            i = null != n ? Date.parse(n) : NaN,
            r = !1;
        for (let { id: e, applicationId: n } of a.A.getAllFrames()) {
            if (n !== t || l.has(e)) continue;
            let a = s.get(e);
            (null == a || Number.isNaN(i) || !(a >= i)) && (l.add(e), (r = !0));
        }
        return r;
    },
    FRAME_LAUNCH: function (e) {
        let { frameId: t } = e;
        return (s.set(t, Date.now()), l.delete(t));
    },
    FRAME_STOP: function (e) {
        let { frameId: t } = e;
        return (s.delete(t), l.delete(t));
    },
    FRAME_UPDATE_PROXY_TICKET: function (e) {
        let { frameId: t } = e;
        return (s.set(t, Date.now()), l.delete(t));
    },
});
function c(e) {
    return (0, i.bG)([d], () => d.isUpdateAvailable(e), [e]);
}
