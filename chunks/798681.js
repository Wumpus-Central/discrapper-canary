n.d(t, {
    e: () => d,
    w: () => _
});
var r = n(47770),
    i = n(846519),
    o = n(570140),
    a = n(710845),
    s = n(646047),
    l = n(70956),
    c = n(27414);
function u(e, t, n) {
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
class f extends r.Z {
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    lastIncomingVideoEnabledChangeTime() {
        return this.lastEnabledChange;
    }
    setIncomingVideoEnabled(e) {
        let t = this.incomingVideoEnabled !== e;
        (this.incomingVideoEnabled = e), t && (this.logger.info('Incoming video enabled changed, incomingVideoEnabled = '.concat(this.incomingVideoEnabled)), (this.lastEnabledChange = Date.now()), this.emit('incoming-video-enabled-changed', this.incomingVideoEnabled));
    }
    constructor() {
        super(),
            u(this, 'disableVideoTimer', new i.V7()),
            u(this, 'discordVisible', !0),
            u(this, 'incomingVideoEnabled', !0),
            u(this, 'lastEnabledChange', Date.now()),
            u(this, 'logger', new a.Z('WindowVisibilityVideoManager')),
            u(this, 'HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS', 30 * l.Z.Millis.SECOND),
            u(this, 'update', () => {
                this.discordVisible !== (0, c.Z)() &&
                    ((this.discordVisible = (0, c.Z)()),
                    this.emit('window-visibility-changed', this.discordVisible),
                    this.discordVisible
                        ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(!0))
                        : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
                              this.setIncomingVideoEnabled(!1);
                          }));
            }),
            o.Z.subscribe('WINDOW_VISIBILITY_CHANGE', this.update),
            o.Z.subscribe('APP_STATE_UPDATE', this.update),
            s.Z.addOnPipModeChangedListener(this.update);
    }
}
let _ = new f();
