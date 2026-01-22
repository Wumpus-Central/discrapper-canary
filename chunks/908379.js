n.d(t, { A: () => p }), n(896048);
var r = n(481613),
    i = n.n(r),
    a = n(73153),
    s = n(579872),
    o = n(272355),
    l = n(975571),
    c = n(652215),
    u = n(985018);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class f extends o.A {
    _initialize() {
        a.h.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission);
    }
    _terminate() {
        a.h.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission);
    }
    constructor(...e) {
        super(...e),
            d(this, "handlePermission", (e) => {
                let { kind: t, granted: n } = e,
                    r = "Firefox" === i().name ? c.MVz.ENABLE_MIC_FIREFOX : c.MVz.ENABLE_MIC_CHROME;
                if (!n) {
                    let e = "audio" !== t;
                    s.A.show({
                        title: e ? u.intl.string(u.t.OqloH8) : u.intl.string(u.t["kI+OOV"]),
                        body: e ? u.intl.string(u.t.l3P7K0) : u.intl.string(u.t.l3jwOd),
                        onConfirm: () => window.open(l.A.getArticleURL(r), "_blank"),
                        confirmText: u.intl.string(u.t.psXQHP),
                    });
                }
            });
    }
}
let p = new f();
