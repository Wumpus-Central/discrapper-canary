"use strict";
n.d(t, { A: () => S });
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(397927),
    s = n(73153),
    o = n(87001),
    l = n(574172),
    u = n(378570),
    c = n(646865),
    d = n(795816),
    _ = n(458664),
    f = n(933958),
    p = n(969151),
    h = n(315206),
    m = n(594007),
    g = n(5867),
    E = n(652215),
    A = n(985018);
let I = !1,
    T = !1;
class y extends _.A {
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
    showErrorModal(e) {
        let { code: t, message: n } = e;
        (0, a.mMO)(
            async () => (e) =>
                (0, r.jsx)(i.Modal, {
                    title: A.intl.formatToPlainString(A.t.hbiAO6, { code: t }),
                    subtitle: n,
                    actions: [{ text: A.intl.string(A.t.BddRzS), onClick: e.onClose, variant: "primary" }],
                    ...e,
                }),
        );
    }
    showLaunchErrorModal(e) {
        (0, a.mMO)(
            async () => (t) =>
                (0, r.jsx)(i.Modal, {
                    title: A.intl.string(A.t.PtobXW),
                    subtitle: e,
                    actions: [{ text: A.intl.string(A.t.BddRzS), onClick: t.onClose, variant: "primary" }],
                    ...t,
                }),
        );
    }
    showDevShelfOverrideEnabled() {
        (0, a.showToast)((0, a.createToast)(A.intl.string(A.t.JfA7IK), a.ToastType.SUCCESS));
    }
    leaveActivity(e) {
        let { location: t, applicationId: n, showFeedback: r, shouldClosePopout: i = !0 } = e;
        s.h.wait(() => {
            (0, d._H)({ location: t, applicationId: n, showFeedback: r });
        }),
            (0, c.f)() && i && (0, l.close)(E.MLl.ACTIVITY_POPOUT);
    }
    hidePIPEmbed(e) {
        let { location: t, applicationId: n } = e,
            r = (0, m.A)(t.id, n);
        (0, h.bK)(r);
    }
    handleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e;
        this.superHandleRPCDisconnect({ reason: t, application: n });
    };
    releaseWebView() {}
    handlePopoutWindowOpen = (e) => {
        let { key: t } = e;
        t === E.MLl.ACTIVITY_POPOUT && (T = !1);
    };
    popInActivity = () => {
        (T = !0), l.close(E.MLl.ACTIVITY_POPOUT);
        let e = f.Ay.getCurrentEmbeddedActivity();
        if (null != e) {
            let t = (0, p.H)(e.location);
            null != t && (0, u.iN)(t), (0, d.gk)(g.Gd.PANEL);
        }
    };
    handlePopoutWindowUpdate = () => {
        let e = I,
            t = o.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT);
        if (e && !t && !T) {
            let e = f.Ay.getCurrentEmbeddedActivity();
            null != e && this.leaveActivity({ location: e.location, applicationId: e.applicationId });
        }
        I = t;
    };
}
let S = new y();
