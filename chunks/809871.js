"use strict";
n.d(t, { A: () => A });
var i = n(691540),
    r = n(857250),
    s = n(97483),
    a = n(228366),
    o = n(574172),
    l = n(869146),
    d = n(625180),
    _ = n(439372),
    u = n(954571),
    c = n(91242),
    E = n(652215);
class h extends _.A {
    static displayName = "FramesManager";
    actions = {
        RPC_APP_DISCONNECTED: (e) => {
            this.handleRPCDisconnect(e);
        },
    };
    handleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e,
            i = n.id;
        if (null == i || null == t) return;
        let r = c.A.getConnectedFrame();
        r?.applicationId === i &&
            (this.leaveFrame({ applicationId: i }),
            t.code !== E.YI$.CLOSE_NORMAL &&
                (u.default.track(E.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i,
                }),
                this.showRPCDisconnectErrorUI(t)));
    };
}
var m = n(165610),
    f = n(985018);
let g = !1,
    p = !1,
    A = new (class extends h {
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
            t === E.MLl.ACTIVITY_POPOUT && (p = !1);
        };
        handlePopoutWindowUpdate = () => {
            let e = g,
                t = l.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT);
            if (e && !t && !p) {
                let e = c.A.getConnectedFrame();
                null != e && d.A.stopFrame({ applicationId: e.applicationId });
            }
            g = t;
        };
        popInFrame = () => {
            (p = !0), o.close(E.MLl.ACTIVITY_POPOUT);
            let e = c.A.getConnectedFrame();
            null != e && d.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: m.y.FOCUSED });
        };
        showRPCDisconnectErrorUI(e) {
            let { code: t, message: n } = e,
                a = `${f.intl.formatToPlainString(f.t.hbiAO6, { code: t })}: ${n}`;
            (0, i.P0)((0, r.o)(a, s.Ck.FAILURE));
        }
        leaveFrame(e) {
            let { applicationId: t } = e;
            d.A.stopFrame({ applicationId: t });
        }
    })();
