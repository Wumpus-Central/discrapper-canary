var i = r(47120);
var a = r(147913),
    o = r(604375),
    s = r(268004);
function l(e, n, r) {
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
class u extends a.Z {
    handleVoiceChannelSelect() {
        s.M.trigger();
    }
    handleCallCreate() {
        s.M.trigger();
    }
    handleUserSettingsModalOpen() {
        o.X.trigger();
    }
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                CALL_CREATE: this.handleCallCreate,
                USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen
            });
    }
}
n.Z = new u();
