"use strict";
n.d(t, { A: () => R });
var r = n(627968);
n(64700);
var i = n(189213),
    s = n(192308),
    a = n(691540),
    o = n(857250),
    l = n(97483),
    u = n(73153),
    d = n(87001),
    c = n(574172),
    _ = n(378570),
    f = n(646865),
    E = n(795816),
    h = n(458664),
    p = n(933958),
    m = n(969151),
    g = n(315206),
    A = n(594007),
    I = n(5867),
    T = n(652215),
    S = n(985018);
let y = !1,
    N = !1;
class O extends h.A {
    _initialize() {
        super._initialize(),
            d.A.addChangeListener(this.handlePopoutWindowUpdate),
            u.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    _terminate() {
        super._terminate(),
            d.A.removeChangeListener(this.handlePopoutWindowUpdate),
            u.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    showErrorModal(e) {
        let { code: t, message: n } = e;
        (0, s.openModalLazy)(
            async () => (e) =>
                (0, r.jsx)(i.Modal, {
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
                (0, r.jsx)(i.Modal, {
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
        let { location: t, applicationId: n, showFeedback: r, shouldClosePopout: i = !0 } = e;
        u.h.wait(() => {
            (0, E._H)({ location: t, applicationId: n, showFeedback: r });
        }),
            (0, f.f)() && i && (0, c.close)(T.MLl.ACTIVITY_POPOUT);
    }
    hidePIPEmbed(e) {
        let { location: t, applicationId: n } = e,
            r = (0, A.A)(t.id, n);
        (0, g.bK)(r);
    }
    handleRPCDisconnect = (e) => {
        let { reason: t, application: n } = e;
        this.superHandleRPCDisconnect({ reason: t, application: n });
    };
    releaseWebView() {}
    handlePopoutWindowOpen = (e) => {
        let { key: t } = e;
        t === T.MLl.ACTIVITY_POPOUT && (N = !1);
    };
    popInActivity = () => {
        (N = !0), c.close(T.MLl.ACTIVITY_POPOUT);
        let e = p.Ay.getCurrentEmbeddedActivity();
        if (null != e) {
            let t = (0, m.H)(e.location);
            null != t && (0, _.iN)(t), (0, E.gk)(I.Gd.PANEL);
        }
    };
    handlePopoutWindowUpdate = () => {
        let e = y,
            t = d.A.getWindowOpen(T.MLl.ACTIVITY_POPOUT);
        if (e && !t && !N) {
            let e = p.Ay.getCurrentEmbeddedActivity();
            null != e && this.leaveActivity({ location: e.location, applicationId: e.applicationId });
        }
        y = t;
    };
}
let R = new O();
