n.d(t, { Z: () => u }), n(388685);
var r = n(147913),
    i = n(358085),
    a = n(998502),
    o = n(947851),
    s = n(64914);
function l(e, t, n) {
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
class c extends r.Z {
    constructor(...e) {
        super(...e),
            l(this, "handlePostConnectionOpen", () => {
                if (!(0, i.isWeb)())
                    if ((0, o.Y)("NegativeHardwareAccelerationExperimentManager"))
                        a.ZP.setSetting("enableHardwareAcceleration", !0);
                    else {
                        let e = (0, s.fD)();
                        a.ZP.setSetting("enableHardwareAcceleration", e);
                    }
            }),
            l(this, "actions", { POST_CONNECTION_OPEN: this.handlePostConnectionOpen });
    }
}
let u = new c();
