n.d(t, { Z: () => l }), n(47120);
var i = n(147913),
    r = n(604375),
    a = n(268004);
function s(e, t, n) {
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
class o extends i.Z {
    handleVoiceChannelSelect() {
        a.M.trigger();
    }
    handleCallCreate() {
        a.M.trigger();
    }
    handleUserSettingsModalOpen() {
        r.X.trigger();
    }
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                CALL_CREATE: this.handleCallCreate,
                USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen
            });
    }
}
let l = new o();
