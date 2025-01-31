n.d(t, {
    e: () => f,
    w: () => p
});
var i = n(47770),
    r = n(846519),
    a = n(570140),
    s = n(710845),
    o = n(646047),
    l = n(425497),
    u = n(70956),
    c = n(27414);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var f = (function (e) {
    return (e.WindowVisibilityChanged = 'window-visibility-changed'), (e.IncomingVideoEnabledChanged = 'incoming-video-enabled-changed'), e;
})({});
class _ extends i.Z {
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    update() {
        this.discordVisible !== (0, c.Z)() &&
            ((this.discordVisible = (0, c.Z)()),
            this.emit('window-visibility-changed', this.discordVisible),
            this.discordVisible
                ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(!0))
                : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
                      this.setIncomingVideoEnabled(!1);
                  }));
    }
    setIncomingVideoEnabled(e) {
        let t = this.incomingVideoEnabled !== e;
        (this.incomingVideoEnabled = e), t && (this.logger.info('Incoming video enabled changed, incomingVideoEnabled = '.concat(this.incomingVideoEnabled)), this.emit('incoming-video-enabled-changed', this.incomingVideoEnabled));
    }
    constructor() {
        super(),
            d(this, 'disableVideoTimer', new r.V7()),
            d(this, 'discordVisible', !0),
            d(this, 'incomingVideoEnabled', !0),
            d(this, 'logger', new s.Z('WindowVisibilityVideoManager')),
            d(this, 'HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS', 30 * u.Z.Millis.SECOND),
            d(this, 'handleWindowVisibilityChange', () => {
                this.update();
            }),
            d(this, 'handleAppStateUpdate', () => {
                l.Z.stopVideoWhenHidden() && this.update();
            }),
            d(this, 'handlePipModeChanged', () => {
                l.Z.stopVideoWhenHidden() && this.update();
            }),
            a.Z.subscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange),
            a.Z.subscribe('APP_STATE_UPDATE', this.handleAppStateUpdate),
            o.Z.addOnPipModeChangedListener(this.handlePipModeChanged);
    }
}
let p = new _();
