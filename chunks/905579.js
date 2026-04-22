"use strict";
n.d(t, { A: () => g });
var r = n(691540),
    i = n(857250),
    s = n(97483),
    a = n(73153),
    o = n(574172),
    l = n(869146),
    u = n(625180),
    d = n(367348),
    c = n(91242),
    _ = n(165610),
    f = n(652215),
    E = n(985018);
let h = !1,
    p = !1;
class m extends d.A {
    static displayName = "FramesWebManager";
    _initialize() {
        super._initialize(),
            l.A.addChangeListener(this.handlePopoutWindowUpdate),
            a.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    _terminate() {
        super._terminate(),
            l.A.removeChangeListener(this.handlePopoutWindowUpdate),
            a.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    handlePopoutWindowOpen = (e) => {
        let { key: t } = e;
        t === f.MLl.ACTIVITY_POPOUT && (p = !1);
    };
    handlePopoutWindowUpdate = () => {
        let e = h,
            t = l.A.getWindowOpen(f.MLl.ACTIVITY_POPOUT);
        if (e && !t && !p) {
            let e = c.A.getConnectedFrame();
            null != e && u.A.stopFrame({ applicationId: e.applicationId });
        }
        h = t;
    };
    popInFrame = () => {
        (p = !0), o.close(f.MLl.ACTIVITY_POPOUT);
        let e = c.A.getConnectedFrame();
        null != e && u.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: _.y.FOCUSED });
    };
    showRPCDisconnectErrorUI(e) {
        let { code: t, message: n } = e,
            a = `${E.intl.formatToPlainString(E.t.hbiAO6, { code: t })}: ${n}`;
        (0, r.P0)((0, i.o)(a, s.Ck.FAILURE));
    }
    leaveFrame(e) {
        let { applicationId: t } = e;
        u.A.stopFrame({ applicationId: t });
    }
}
let g = new m();
