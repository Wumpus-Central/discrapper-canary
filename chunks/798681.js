r.d(n, {
    e: function () {
        return i;
    },
    w: function () {
        return _;
    }
});
var i,
    a = r(47770),
    o = r(846519),
    s = r(570140),
    l = r(710845),
    u = r(646047),
    c = r(425497),
    d = r(70956),
    f = r(27414);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.WindowVisibilityChanged = 'window-visibility-changed'), (e.IncomingVideoEnabledChanged = 'incoming-video-enabled-changed');
})(i || (i = {}));
class h extends a.Z {
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    update() {
        if (this.discordVisible !== (0, f.Z)())
            (this.discordVisible = (0, f.Z)()),
                this.emit('window-visibility-changed', this.discordVisible),
                this.discordVisible
                    ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(!0))
                    : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
                          this.setIncomingVideoEnabled(!1);
                      });
    }
    setIncomingVideoEnabled(e) {
        let n = this.incomingVideoEnabled !== e;
        (this.incomingVideoEnabled = e), n && (this.logger.info('Incoming video enabled changed, incomingVideoEnabled = '.concat(this.incomingVideoEnabled)), this.emit('incoming-video-enabled-changed', this.incomingVideoEnabled));
    }
    constructor() {
        super(),
            p(this, 'disableVideoTimer', new o.V7()),
            p(this, 'discordVisible', !0),
            p(this, 'incomingVideoEnabled', !0),
            p(this, 'logger', new l.Z('WindowVisibilityVideoManager')),
            p(this, 'HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS', 30 * d.Z.Millis.SECOND),
            p(this, 'handleWindowVisibilityChange', () => {
                this.update();
            }),
            p(this, 'handleAppStateUpdate', () => {
                c.Z.stopVideoWhenHidden() && this.update();
            }),
            p(this, 'handlePipModeChanged', () => {
                c.Z.stopVideoWhenHidden() && this.update();
            }),
            s.Z.subscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange),
            s.Z.subscribe('APP_STATE_UPDATE', this.handleAppStateUpdate),
            u.Z.addOnPipModeChangedListener(this.handlePipModeChanged);
    }
}
let _ = new h();
