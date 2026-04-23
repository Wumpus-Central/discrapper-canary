"use strict";
n.d(t, { A: () => O });
var i = n(627968);
n(64700);
var r = n(189213),
    s = n(192308),
    a = n(691540),
    o = n(857250),
    l = n(97483),
    d = n(228366),
    _ = n(567249),
    u = n(574172),
    c = n(378570),
    E = n(646865),
    h = n(795816),
    m = n(458664),
    f = n(933958),
    g = n(969151),
    p = n(315206),
    A = n(594007),
    I = n(5867),
    T = n(652215),
    S = n(985018);
let N = !1,
    C = !1;
class R extends m.A {
    _initialize() {
        super._initialize(),
            _.A.addChangeListener(this.handlePopoutWindowUpdate),
            d.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    _terminate() {
        super._terminate(),
            _.A.removeChangeListener(this.handlePopoutWindowUpdate),
            d.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    showErrorModal(e) {
        let { code: t, message: n } = e;
        (0, s.openModalLazy)(
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
        (0, s.openModalLazy)(
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
        (0, a.P0)((0, o.o)(S.intl.string(S.t.JfA7IK), l.Ck.SUCCESS));
    }
    leaveActivity(e) {
        let { location: t, applicationId: n, showFeedback: i, shouldClosePopout: r = !0 } = e;
        d.h.wait(() => {
            (0, h._H)({ location: t, applicationId: n, showFeedback: i });
        }),
            (0, E.f)() && r && (0, u.close)(T.MLl.ACTIVITY_POPOUT);
    }
    hidePIPEmbed(e) {
        let { location: t, applicationId: n } = e,
            i = (0, A.A)(t.id, n);
        (0, p.bK)(i);
    }
    handleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e;
        this.superHandleRPCDisconnect({ reason: t, application: n });
    };
    releaseWebView() {}
    handlePopoutWindowOpen = (e) => {
        let { key: t } = e;
        t === T.MLl.ACTIVITY_POPOUT && (C = !1);
    };
    popInActivity = () => {
        (C = !0), u.close(T.MLl.ACTIVITY_POPOUT);
        let e = f.Ay.getCurrentEmbeddedActivity();
        if (null != e) {
            let t = (0, g.H)(e.location);
            null != t && (0, c.iN)(t), (0, h.gk)(I.Gd.PANEL);
        }
    };
    handlePopoutWindowUpdate = () => {
        let e = N,
            t = _.A.getWindowOpen(T.MLl.ACTIVITY_POPOUT);
        if (e && !t && !C) {
            let e = f.Ay.getCurrentEmbeddedActivity();
            null != e && this.leaveActivity({ location: e.location, applicationId: e.applicationId });
        }
        N = t;
    };
}
let O = new R();
