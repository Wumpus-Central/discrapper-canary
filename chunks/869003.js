"use strict";
n.d(t, { A: () => R });
var i = n(477900);
n(582128);
var r = n(189213),
    a = n(192308),
    s = n(691540),
    l = n(857250),
    o = n(97483),
    d = n(228366),
    c = n(567249),
    u = n(574172),
    _ = n(378570),
    E = n(646865),
    A = n(795816),
    h = n(957292),
    I = n(933958),
    f = n(969151),
    p = n(315206),
    T = n(594007),
    m = n(5867),
    g = n(652215),
    S = n(375708);
let N = !1,
    C = !1;
class O extends h.Ay {
    _initialize() {
        super._initialize(),
            c.A.addChangeListener(this.handlePopoutWindowUpdate),
            d.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    _terminate() {
        super._terminate(),
            c.A.removeChangeListener(this.handlePopoutWindowUpdate),
            d.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    showErrorModal(e) {
        let { code: t, message: n } = e;
        (0, a.openModalLazy)(
            async () => (e) =>
                (0, i.jsx)(r.Modal, {
                    title: S.intl.formatToPlainString(S.t.hbiAO6, { code: t }),
                    subtitle: n,
                    actions: [{ text: S.intl.string(S.t.BddRzS), onClick: e.onClose, variant: "primary" }],
                    ...e,
                }),
        );
    }
    showLaunchErrorModal(e) {
        (0, a.openModalLazy)(
            async () => (t) =>
                (0, i.jsx)(r.Modal, {
                    title: S.intl.string(S.t.PtobXW),
                    subtitle: e,
                    actions: [{ text: S.intl.string(S.t.BddRzS), onClick: t.onClose, variant: "primary" }],
                    ...t,
                }),
        );
    }
    showDevShelfOverrideEnabled() {
        (0, s.P0)((0, l.o)(S.intl.string(S.t.JfA7IK), o.Ck.SUCCESS));
    }
    leaveActivity(e) {
        let { location: t, applicationId: n, showFeedback: i, shouldClosePopout: r = !0 } = e;
        d.h.wait(() => {
            (0, A._H)({ location: t, applicationId: n, showFeedback: i });
        }),
            (0, E.f)() && r && (0, u.close)(g.MLl.ACTIVITY_POPOUT);
    }
    hidePIPEmbed(e) {
        let { location: t, applicationId: n } = e,
            i = (0, T.A)(t.id, n);
        (0, p.bK)(i);
    }
    handleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e;
        this.superHandleRPCDisconnect({ reason: t, application: n });
    };
    releaseWebView() {}
    handlePopoutWindowOpen = (e) => {
        let { key: t } = e;
        t === g.MLl.ACTIVITY_POPOUT && (C = !1);
    };
    popInActivity = () => {
        (C = !0), u.close(g.MLl.ACTIVITY_POPOUT);
        let e = I.Ay.getCurrentEmbeddedActivity();
        if (null != e) {
            let t = (0, f.H)(e.location);
            null != t && (0, _.iN)(t), (0, A.gk)(m.Gd.PANEL);
        }
    };
    handlePopoutWindowUpdate = () => {
        let e = N,
            t = c.A.getWindowOpen(g.MLl.ACTIVITY_POPOUT);
        if (e && !t && !C) {
            let e = I.Ay.getCurrentEmbeddedActivity();
            null != e && this.leaveActivity({ location: e.location, applicationId: e.applicationId });
        }
        N = t;
    };
}
let R = new O();
