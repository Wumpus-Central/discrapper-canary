n.d(t, { A: () => I }), n(896048);
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(397927),
    s = n(73153),
    o = n(87001),
    l = n(574172),
    c = n(378570),
    u = n(646865),
    d = n(795816),
    f = n(458664),
    p = n(933958),
    _ = n(969151),
    h = n(315206),
    m = n(594007),
    g = n(5867),
    E = n(652215),
    b = n(985018);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
let A = !1,
    v = !1;
class S extends f.A {
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
                (0, r.jsx)(
                    i.Modal,
                    O(
                        {
                            title: b.intl.formatToPlainString(b.t.hbiAO6, { code: t }),
                            subtitle: n,
                            actions: [
                                {
                                    text: b.intl.string(b.t.BddRzS),
                                    onClick: e.onClose,
                                    variant: "primary",
                                },
                            ],
                        },
                        e,
                    ),
                ),
        );
    }
    showLaunchErrorModal(e) {
        (0, a.mMO)(
            async () => (t) =>
                (0, r.jsx)(
                    i.Modal,
                    O(
                        {
                            title: b.intl.string(b.t.PtobXW),
                            subtitle: e,
                            actions: [
                                {
                                    text: b.intl.string(b.t.BddRzS),
                                    onClick: t.onClose,
                                    variant: "primary",
                                },
                            ],
                        },
                        t,
                    ),
                ),
        );
    }
    showDevShelfOverrideEnabled() {
        (0, a.showToast)((0, a.createToast)(b.intl.string(b.t.JfA7IK), a.ToastType.SUCCESS));
    }
    leaveActivity(e) {
        let { location: t, applicationId: n, showFeedback: r, shouldClosePopout: i = !0 } = e;
        s.h.wait(() => {
            (0, d._H)({
                location: t,
                applicationId: n,
                showFeedback: r,
            });
        }),
            (0, u.f)() && i && (0, l.close)(E.MLl.ACTIVITY_POPOUT);
    }
    hidePIPEmbed(e) {
        let { location: t, applicationId: n } = e,
            r = (0, m.A)(t.id, n);
        (0, h.bK)(r);
    }
    releaseWebView() {}
    constructor(...e) {
        super(...e),
            y(this, "handleRPCDisconnect", (e) => {
                let { reason: t, application: n } = e;
                this.superHandleRPCDisconnect({
                    reason: t,
                    application: n,
                });
            }),
            y(this, "handlePopoutWindowOpen", (e) => {
                let { key: t } = e;
                t === E.MLl.ACTIVITY_POPOUT && (v = !1);
            }),
            y(this, "popInActivity", () => {
                (v = !0), l.close(E.MLl.ACTIVITY_POPOUT);
                let e = p.Ay.getCurrentEmbeddedActivity();
                if (null != e) {
                    let t = (0, _.H)(e.location);
                    null != t && (0, c.iN)(t), (0, d.gk)(g.Gd.PANEL);
                }
            }),
            y(this, "handlePopoutWindowUpdate", () => {
                let e = A,
                    t = o.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT);
                if (e && !t && !v) {
                    let e = p.Ay.getCurrentEmbeddedActivity();
                    null != e &&
                        this.leaveActivity({
                            location: e.location,
                            applicationId: e.applicationId,
                        });
                }
                A = t;
            });
    }
}
let I = new S();
