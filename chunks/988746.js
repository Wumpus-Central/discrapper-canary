r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(259443),
    a = r(46973),
    o = r(65154);
function s(e, n, r) {
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
let l = new i.Yd('ConnectionEventFramerateReducer');
class u {
    initialize() {
        this.userSpeakingChange(!0);
    }
    userSpeakingChange(e) {
        if (!this.connection.hasDesktopSource()) {
            if ((this.destroyFramerateScaleFactorTimers(), !e)) {
                this.sinkWants.isMuted && ((this.sinkWants.isMuted = !1), this.updateRemoteWantsFramerate());
                return;
            }
            this.framerateReductionTimeout = setTimeout(() => {
                if (!this.connection.destroyed) l.info('BaseConnection.userSpeakingChange: Reduced framerate after '.concat(o.u$, ' ms.')), (this.framerateReductionTimeout = void 0), (this.sinkWants.isMuted = !0), this.updateRemoteWantsFramerate();
            }, o.u$);
        }
    }
    destroyFramerateScaleFactorTimers() {
        'number' == typeof this.framerateReductionTimeout && (clearTimeout(this.framerateReductionTimeout), (this.framerateReductionTimeout = void 0));
    }
    updateRemoteWantsFramerate() {
        this.connection.updateVideoQuality(['remoteSinkWantsMaxFramerate']);
    }
    destroy() {
        this.destroyFramerateScaleFactorTimers();
    }
    constructor(e, n) {
        s(this, 'connection', void 0),
            s(this, 'sinkWants', void 0),
            s(this, 'framerateReductionTimeout', void 0),
            s(this, 'handleSpeaking', void 0),
            s(this, 'handleSelfMute', void 0),
            (this.connection = e),
            (this.sinkWants = n),
            (this.handleSpeaking = (e, n) => {
                e === this.connection.userId && this.userSpeakingChange(n === o.Dg.NONE);
            }),
            (this.handleSelfMute = (e) => {
                if (!this.connection.hasDesktopSource()) this.destroyFramerateScaleFactorTimers(), (this.sinkWants.isMuted = e), this.updateRemoteWantsFramerate();
            }),
            l.enableNativeLogger(!0),
            e.on(a.Sh.Speaking, this.handleSpeaking),
            e.on(a.Sh.Mute, this.handleSelfMute),
            this.initialize();
    }
}
