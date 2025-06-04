n.d(t, { Z: () => f }), n(388685);
var r = n(147913),
    i = n(626135),
    o = n(358085),
    a = n(998502),
    s = n(654769),
    l = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
async function u() {
    if (!o.isPlatformEmbedded) return !1;
    let e = await s.Z.hasPermission();
    return a.ZP.shouldDisplayNotifications() && e;
}
class d extends r.Z {
    async handlePostConnectionOpen() {
        let e = await u();
        i.default.track(l.rMx.NOTIFICATION_PERMISSION_STATUS, { os_enabled: e });
    }
    constructor(...e) {
        super(...e), c(this, 'actions', { POST_CONNECTION_OPEN: this.handlePostConnectionOpen });
    }
}
let f = new d();
