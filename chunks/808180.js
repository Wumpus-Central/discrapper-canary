n.d(t, {
    N: () => d,
    X: () => p,
});
var r = n(972347),
    i = n(451988),
    a = n(73153),
    s = n(626584),
    o = n(784113),
    l = n(927813),
    c = n(399307);

function u(e, t, n) {
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
var d = (function (e) {
    return (
        (e.WindowVisibilityChanged = "window-visibility-changed"),
        (e.IncomingVideoEnabledChanged = "incoming-video-enabled-changed"),
        e
    );
})({});
class f extends r.A {
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    lastIncomingVideoEnabledChangeTime() {
        return this.lastEnabledChange;
    }
    setIncomingVideoEnabled(e) {
        let t = this.incomingVideoEnabled !== e;
        (this.incomingVideoEnabled = e),
            t &&
                (this.logger.info(
                    "Incoming video enabled changed, incomingVideoEnabled = ".concat(this.incomingVideoEnabled),
                ),
                (this.lastEnabledChange = performance.now()),
                this.emit("incoming-video-enabled-changed", this.incomingVideoEnabled));
    }
    constructor() {
        super(),
            u(this, "disableVideoTimer", new i.Ep()),
            u(this, "discordVisible", !0),
            u(this, "incomingVideoEnabled", !0),
            u(this, "lastEnabledChange", performance.now()),
            u(this, "logger", new s.A("WindowVisibilityVideoManager")),
            u(this, "HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS", 30 * l.A.Millis.SECOND),
            u(this, "update", () => {
                this.discordVisible !== (0, c.A)() &&
                    ((this.discordVisible = (0, c.A)()),
                    this.emit("window-visibility-changed", this.discordVisible),
                    this.discordVisible
                        ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(!0))
                        : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
                              this.setIncomingVideoEnabled(!1);
                          }));
            }),
            a.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.update),
            a.h.subscribe("APP_STATE_UPDATE", this.update),
            o.A.addOnPipModeChangedListener(this.update);
    }
}
let p = new f();
