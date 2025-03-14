n.d(t, { Z: () => l }), n(47120);
var r = n(147913),
    i = n(604375),
    o = n(268004);
function a(e, t, n) {
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
class s extends r.Z {
    handleVoiceChannelSelect() {
        o.M.trigger();
    }
    handleCallCreate() {
        o.M.trigger();
    }
    handleUserSettingsModalOpen() {
        i.X.trigger();
    }
    constructor(...e) {
        super(...e),
            a(this, 'actions', {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                CALL_CREATE: this.handleCallCreate,
                USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen
            });
    }
}
let l = new s();
