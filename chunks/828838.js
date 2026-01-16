n.d(t, { Z: () => g }), n(388685);
var r = n(481060),
    i = n(570140),
    a = n(788983),
    o = n(928518),
    s = n(48131),
    l = n(460093),
    c = n(591472),
    u = n(408491),
    d = n(981631),
    f = n(388032);
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
class m extends l.Z {
    _initialize() {
        super._initialize(),
            o.Z.addChangeListener(this.handlePopoutWindowUpdate),
            i.Z.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    _terminate() {
        super._terminate(),
            o.Z.removeChangeListener(this.handlePopoutWindowUpdate),
            i.Z.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    showRPCDisconnectErrorUI(e) {
        let { code: t, message: n } = e,
            i = "".concat(f.intl.formatToPlainString(f.t.hbiAO6, { code: t }), ": ").concat(n);
        (0, r.showToast)((0, r.createToast)(i, r.ToastType.FAILURE));
    }
    leaveFrame(e) {
        let { applicationId: t } = e;
        s.Z.stopFrame({ applicationId: t });
    }
    constructor(...e) {
        super(...e),
            p(this, "handlePopoutWindowOpen", (e) => {
                let { key: t } = e;
                t === d.KJ3.ACTIVITY_POPOUT && (h = !1);
            }),
            p(this, "handlePopoutWindowUpdate", () => {
                let e = _,
                    t = o.Z.getWindowOpen(d.KJ3.ACTIVITY_POPOUT);
                if (e && !t && !h) {
                    let e = c.Z.getConnectedFrame();
                    null != e && s.Z.stopFrame({ applicationId: e.applicationId });
                }
                _ = t;
            }),
            p(this, "popInFrame", () => {
                (h = !0), a.close(d.KJ3.ACTIVITY_POPOUT);
                let e = c.Z.getConnectedFrame();
                null != e &&
                    s.Z.updateFrameLayoutMode({
                        applicationId: e.applicationId,
                        layoutMode: u.U.FOCUSED,
                    });
            });
    }
}
p(m, "displayName", "FramesWebManager");
let g = new m();
