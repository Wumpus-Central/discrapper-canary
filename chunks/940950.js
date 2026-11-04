var i = n(597798),
    r = n(439372),
    a = n(495867);
class s extends r.A {
    actions = { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates };
    handleVoiceStateUpdates() {
        a.A.didReconnectTimeOut() && i.default.disconnect();
    }
}
let l = new s();
n.d(t, {}, { A: l });
