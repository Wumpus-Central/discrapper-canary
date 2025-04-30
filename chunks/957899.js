n.d(t, { Z: () => l }), n(388685);
var r = n(147913),
    i = n(604375),
    a = n(268004);
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
class s extends r.Z {
    handleVoiceChannelSelect() {
        a.M.trigger();
    }
    handleCallCreate() {
        a.M.trigger();
    }
    handleUserSettingsModalOpen() {
        i.X.trigger();
    }
    constructor(...e) {
        super(...e),
            o(this, 'actions', {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                CALL_CREATE: this.handleCallCreate,
                USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen
            });
    }
}
let l = new s();
