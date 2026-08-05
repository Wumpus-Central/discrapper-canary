"use strict";
n.d(t, { A: () => S });
var i = n(691540),
    r = n(857250),
    a = n(97483),
    s = n(228366),
    l = n(574172),
    o = n(869146),
    d = n(113854),
    c = n(439372),
    u = n(957292),
    _ = n(400115),
    E = n(174459),
    A = n(91242),
    h = n(652215),
    I = n(613057);
class f extends c.A {
    static displayName = "FramesManager";
    actions = {
        RPC_APP_DISCONNECTED: (e) => {
            this.handleRPCDisconnect(e);
        },
        FRAME_LAUNCH: (e) => {
            let { applicationId: t } = e;
            (0, u.Pd)(t);
        },
        FRAME_LAUNCH_FAIL: (e) => {
            let { applicationId: t } = e;
            (0, _.Wl)(t);
        },
        FRAME_STOP: (e) => {
            let { applicationId: t } = e;
            (0, u.iG)(t);
        },
    };
    handleRPCDisconnect = (e) => {
        let { reason: t, source: n } = e;
        if (null == t || n.type !== I.z4.POST_MESSAGE) return;
        let i = A.A.getFrameByIframeId(n.iframeId);
        null != i &&
            (this.leaveFrame(i.id),
            t.code !== h.YI$.CLOSE_NORMAL &&
                (E.default.track(h.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i.applicationId,
                }),
                this.showRPCDisconnectErrorUI(t)));
    };
}
var p = n(165610),
    T = n(375708);
let m = !1,
    g = !1,
    S = new (class extends f {
        static displayName = "FramesWebManager";
        _initialize() {
            super._initialize(),
                o.A.addChangeListener(this.handlePopoutWindowUpdate),
                s.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
        }
        _terminate() {
            super._terminate(),
                o.A.removeChangeListener(this.handlePopoutWindowUpdate),
                s.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
        }
        handlePopoutWindowOpen = (e) => {
            let { key: t } = e;
            t === h.MLl.ACTIVITY_POPOUT && (g = !1);
        };
        handlePopoutWindowUpdate = () => {
            let e = m,
                t = o.A.getWindowOpen(h.MLl.ACTIVITY_POPOUT);
            if (e && !t && !g) {
                let e = A.A.getMainFrame();
                null != e && d.A.stopFrame(e.id);
            }
            m = t;
        };
        popInFrame = () => {
            (g = !0), l.close(h.MLl.ACTIVITY_POPOUT);
            let e = A.A.getMainFrame();
            null != e && d.A.updateFrameLayoutMode({ frameId: e.id, layoutMode: p.y0.FOCUSED });
        };
        showRPCDisconnectErrorUI(e) {
            let { code: t, message: n } = e,
                s = `${T.intl.formatToPlainString(T.t.hbiAO6, { code: t })}: ${n}`;
            (0, i.P0)((0, r.o)(s, a.Ck.FAILURE));
        }
        leaveFrame(e) {
            null != e && d.A.stopFrame(e);
        }
    })();
