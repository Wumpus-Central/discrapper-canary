"use strict";
n.d(t, { A: () => _ });
var r = n(481613),
    i = n.n(r),
    s = n(73153),
    a = n(579872),
    o = n(272355),
    l = n(975571),
    u = n(652215),
    c = n(985018);
class d extends o.A {
    _initialize() {
        s.h.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission);
    }
    _terminate() {
        s.h.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission);
    }
    handlePermission = (e) => {
        let { kind: t, granted: n } = e,
            r = "Firefox" === i().name ? u.MVz.ENABLE_MIC_FIREFOX : u.MVz.ENABLE_MIC_CHROME;
        if (!n) {
            let e = "audio" !== t;
            a.A.show({
                title: e ? c.intl.string(c.t.OqloH8) : c.intl.string(c.t["kI+OOV"]),
                body: e ? c.intl.string(c.t.l3P7K0) : c.intl.string(c.t.l3jwOd),
                onConfirm: () => window.open(l.A.getArticleURL(r), "_blank"),
                confirmText: c.intl.string(c.t.psXQHP),
            });
        }
    };
}
let _ = new d();
