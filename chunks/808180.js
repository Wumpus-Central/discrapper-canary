"use strict";
n.d(t, { N: () => c, X: () => _ });
var r = n(972347),
    i = n(451988),
    a = n(73153),
    s = n(626584),
    o = n(784113),
    l = n(927813),
    u = n(399307),
    c = (function (e) {
        return (
            (e.WindowVisibilityChanged = "window-visibility-changed"),
            (e.IncomingVideoEnabledChanged = "incoming-video-enabled-changed"),
            e
        );
    })({});
class d extends r.A {
    disableVideoTimer = new i.Ep();
    discordVisible = !0;
    incomingVideoEnabled = !0;
    lastEnabledChange = performance.now();
    logger = new s.A("WindowVisibilityVideoManager");
    HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * l.A.Millis.SECOND;
    constructor() {
        super(),
            a.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.update),
            a.h.subscribe("APP_STATE_UPDATE", this.update),
            o.A.addOnPipModeChangedListener(this.update);
    }
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    lastIncomingVideoEnabledChangeTime() {
        return this.lastEnabledChange;
    }
    update = () => {
        this.discordVisible !== (0, u.A)() &&
            ((this.discordVisible = (0, u.A)()),
            this.emit("window-visibility-changed", this.discordVisible),
            this.discordVisible
                ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(!0))
                : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
                      this.setIncomingVideoEnabled(!1);
                  }));
    };
    setIncomingVideoEnabled(e) {
        let t = this.incomingVideoEnabled !== e;
        (this.incomingVideoEnabled = e),
            t &&
                (this.logger.info(
                    `Incoming video enabled changed, incomingVideoEnabled = ${this.incomingVideoEnabled}`,
                ),
                (this.lastEnabledChange = performance.now()),
                this.emit("incoming-video-enabled-changed", this.incomingVideoEnabled));
    }
}
let _ = new d();
