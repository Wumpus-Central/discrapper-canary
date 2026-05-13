"use strict";
n.d(t, { A: () => T });
var i = n(691540),
    r = n(857250),
    s = n(97483),
    a = n(228366),
    o = n(574172),
    l = n(869146),
    u = n(113854),
    c = n(439372),
    d = n(957292),
    _ = n(400115),
    f = n(174459),
    h = n(91242),
    p = n(652215);
class E extends c.A {
    static displayName = "FramesManager";
    actions = {
        RPC_APP_DISCONNECTED: (e) => {
            this.handleRPCDisconnect(e);
        },
        FRAME_LAUNCH: (e) => {
            let { applicationId: t } = e;
            (0, d.Pd)(t);
        },
        FRAME_LAUNCH_FAIL: (e) => {
            let { applicationId: t } = e;
            (0, _.Wl)(t);
        },
        FRAME_STOP: (e) => {
            let { applicationId: t } = e;
            (0, d.iG)(t);
        },
    };
    handleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e,
            i = n.id;
        if (null == i || null == t) return;
        let r = h.A.getConnectedFrame();
        r?.applicationId === i &&
            (this.leaveFrame({ applicationId: i }),
            t.code !== p.YI$.CLOSE_NORMAL &&
                (f.default.track(p.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i,
                }),
                this.showRPCDisconnectErrorUI(t)));
    };
}
var m = n(165610),
    g = n(375708);
let A = !1,
    I = !1,
    T = new (class extends E {
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
            t === p.MLl.ACTIVITY_POPOUT && (I = !1);
        };
        handlePopoutWindowUpdate = () => {
            let e = A,
                t = l.A.getWindowOpen(p.MLl.ACTIVITY_POPOUT);
            if (e && !t && !I) {
                let e = h.A.getConnectedFrame();
                null != e && u.A.stopFrame({ applicationId: e.applicationId });
            }
            A = t;
        };
        popInFrame = () => {
            (I = !0), o.close(p.MLl.ACTIVITY_POPOUT);
            let e = h.A.getConnectedFrame();
            null != e && u.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: m.y.FOCUSED });
        };
        showRPCDisconnectErrorUI(e) {
            let { code: t, message: n } = e,
                a = `${g.intl.formatToPlainString(g.t.hbiAO6, { code: t })}: ${n}`;
            (0, i.P0)((0, r.o)(a, s.Ck.FAILURE));
        }
        leaveFrame(e) {
            let { applicationId: t } = e;
            u.A.stopFrame({ applicationId: t });
        }
    })();
