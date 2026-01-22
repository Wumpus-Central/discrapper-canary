n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(397927),
    i = n(73153),
    a = n(574172),
    s = n(869146),
    o = n(625180),
    l = n(367348),
    c = n(91242),
    u = n(165610),
    d = n(652215),
    f = n(985018);

function p(e, t, n) {
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
let _ = !1,
    h = !1;
class m extends l.A {
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
    showRPCDisconnectErrorUI(e) {
        let { code: t, message: n } = e,
            i = ""
                .concat(
                    f.intl.formatToPlainString(f.t.hbiAO6, {
                        code: t,
                    }),
                    ": ",
                )
                .concat(n);
        (0, r.showToast)((0, r.createToast)(i, r.ToastType.FAILURE));
    }
    leaveFrame(e) {
        let { applicationId: t } = e;
        o.A.stopFrame({
            applicationId: t,
        });
    }
    constructor(...e) {
        super(...e),
            p(this, "handlePopoutWindowOpen", (e) => {
                let { key: t } = e;
                t === d.MLl.ACTIVITY_POPOUT && (h = !1);
            }),
            p(this, "handlePopoutWindowUpdate", () => {
                let e = _,
                    t = s.A.getWindowOpen(d.MLl.ACTIVITY_POPOUT);
                if (e && !t && !h) {
                    let e = c.A.getConnectedFrame();
                    null != e &&
                        o.A.stopFrame({
                            applicationId: e.applicationId,
                        });
                }
                _ = t;
            }),
            p(this, "popInFrame", () => {
                (h = !0), a.close(d.MLl.ACTIVITY_POPOUT);
                let e = c.A.getConnectedFrame();
                null != e &&
                    o.A.updateFrameLayoutMode({
                        applicationId: e.applicationId,
                        layoutMode: u.y.FOCUSED,
                    });
            });
    }
}
p(m, "displayName", "FramesWebManager");
let g = new m();
