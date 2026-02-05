"use strict";
n.d(t, { A: () => m });
var r = n(397927),
    i = n(73153),
    a = n(574172),
    s = n(869146),
    o = n(625180),
    l = n(367348),
    u = n(91242),
    c = n(165610),
    d = n(652215),
    _ = n(985018);
let f = !1,
    p = !1;
class h extends l.A {
    static displayName = "FramesWebManager";
    _initialize() {
        super._initialize(),
            s.A.addChangeListener(this.handlePopoutWindowUpdate),
            i.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    _terminate() {
        super._terminate(),
            s.A.removeChangeListener(this.handlePopoutWindowUpdate),
            i.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    handlePopoutWindowOpen = (e) => {
        let { key: t } = e;
        t === d.MLl.ACTIVITY_POPOUT && (p = !1);
    };
    handlePopoutWindowUpdate = () => {
        let e = f,
            t = s.A.getWindowOpen(d.MLl.ACTIVITY_POPOUT);
        if (e && !t && !p) {
            let e = u.A.getConnectedFrame();
            null != e && o.A.stopFrame({ applicationId: e.applicationId });
        }
        f = t;
    };
    popInFrame = () => {
        (p = !0), a.close(d.MLl.ACTIVITY_POPOUT);
        let e = u.A.getConnectedFrame();
        null != e && o.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: c.y.FOCUSED });
    };
    showRPCDisconnectErrorUI(e) {
        let { code: t, message: n } = e,
            i = `${_.intl.formatToPlainString(_.t.hbiAO6, { code: t })}: ${n}`;
        (0, r.showToast)((0, r.createToast)(i, r.ToastType.FAILURE));
    }
    leaveFrame(e) {
        let { applicationId: t } = e;
        o.A.stopFrame({ applicationId: t });
    }
}
let m = new h();
