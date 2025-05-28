n.d(t, { Z: () => l });
var r = n(259443),
    i = n(46973),
    a = n(65154);
function o(e, t, n) {
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
let s = new r.Yd('ConnectionEventFramerateReducer');
class l {
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
                this.connection.destroyed || (s.info('BaseConnection.userSpeakingChange: Reduced framerate after '.concat(a.u$, ' ms.')), (this.framerateReductionTimeout = void 0), (this.sinkWants.isMuted = !0), this.updateRemoteWantsFramerate());
            }, a.u$);
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
    constructor(e, t) {
        o(this, 'connection', void 0),
            o(this, 'sinkWants', void 0),
            o(this, 'framerateReductionTimeout', void 0),
            o(this, 'handleSpeaking', void 0),
            o(this, 'handleSelfMute', void 0),
            (this.connection = e),
            (this.sinkWants = t),
            (this.handleSpeaking = (e, t) => {
                e === this.connection.userId && this.userSpeakingChange(t === a.Dg.NONE);
            }),
            (this.handleSelfMute = (e) => {
                this.connection.hasDesktopSource() || (this.destroyFramerateScaleFactorTimers(), (this.sinkWants.isMuted = e), this.updateRemoteWantsFramerate());
            }),
            s.enableNativeLogger(!0),
            e.on(i.Sh.Speaking, this.handleSpeaking),
            e.on(i.Sh.Mute, this.handleSelfMute),
            this.initialize();
    }
}
