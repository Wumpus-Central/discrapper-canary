"use strict";
n.d(t, { N: () => d, X: () => f });
var r,
    i = n(972347),
    s = n(451988),
    a = n(73153),
    o = n(626584),
    l = n(6494),
    u = n(927813),
    c = n(399307),
    d =
        (((r = {}).WindowVisibilityChanged = "window-visibility-changed"),
        (r.IncomingVideoEnabledChanged = "incoming-video-enabled-changed"),
        r);
class _ extends i.A {
    disableVideoTimer = new s.Ep();
    discordVisible = !0;
    incomingVideoEnabled = !0;
    lastEnabledChange = performance.now();
    logger = new o.A("WindowVisibilityVideoManager");
    HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * u.A.Millis.SECOND;
    constructor() {
        super(),
            a.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.update),
            a.h.subscribe("APP_STATE_UPDATE", this.update),
            l.A.addOnPipModeChangedListener(this.update);
    }
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    lastIncomingVideoEnabledChangeTime() {
        return this.lastEnabledChange;
    }
    update = () => {
        this.discordVisible !== (0, c.A)() &&
            ((this.discordVisible = (0, c.A)()),
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
let f = new _();
