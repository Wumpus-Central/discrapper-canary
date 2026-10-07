n.d(t, { A: () => l });
var i = n(730852),
    r = n(439372),
    a = n(763827);
class s extends r.A {
    actions = { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates };
    handleVoiceStateUpdates() {
        a.A.didReconnectTimeOut() && i.default.disconnect();
    }
}
let l = new s();
