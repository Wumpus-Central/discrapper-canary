n.d(t, {
    e: () => d,
    w: () => _
});
var i = n(47770),
    r = n(846519),
    a = n(570140),
    s = n(710845),
    o = n(646047),
    l = n(70956),
    u = n(27414);
function c(e, t, n) {
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
var d = (function (e) {
    return (e.WindowVisibilityChanged = 'window-visibility-changed'), (e.IncomingVideoEnabledChanged = 'incoming-video-enabled-changed'), e;
})({});
class f extends i.Z {
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    setIncomingVideoEnabled(e) {
        let t = this.incomingVideoEnabled !== e;
        (this.incomingVideoEnabled = e), t && (this.logger.info('Incoming video enabled changed, incomingVideoEnabled = '.concat(this.incomingVideoEnabled)), this.emit('incoming-video-enabled-changed', this.incomingVideoEnabled));
    }
    constructor() {
        super(),
            c(this, 'disableVideoTimer', new r.V7()),
            c(this, 'discordVisible', !0),
            c(this, 'incomingVideoEnabled', !0),
            c(this, 'logger', new s.Z('WindowVisibilityVideoManager')),
            c(this, 'HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS', 30 * l.Z.Millis.SECOND),
            c(this, 'update', () => {
                this.discordVisible !== (0, u.Z)() &&
                    ((this.discordVisible = (0, u.Z)()),
                    this.emit('window-visibility-changed', this.discordVisible),
                    this.discordVisible
                        ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(!0))
                        : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
                              this.setIncomingVideoEnabled(!1);
                          }));
            }),
            a.Z.subscribe('WINDOW_VISIBILITY_CHANGE', this.update),
            a.Z.subscribe('APP_STATE_UPDATE', this.update),
            o.Z.addOnPipModeChangedListener(this.update);
    }
}
let _ = new f();
