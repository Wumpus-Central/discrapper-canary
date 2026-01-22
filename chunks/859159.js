n.d(t, { A: () => c }), n(896048);
var r = n(735438),
    i = n(430452),
    a = n(977997),
    s = n(607567),
    o = n(731854);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class c {
    updateVoiceStates(e, t) {
        t === this.channelId
            ? (this.totalParticipants.add(e),
              (this.maxVoiceStateCount = Math.max(s.Ay.countVoiceStatesForChannel(t), this.maxVoiceStateCount)))
            : (null == t && e in this.totalSpeakers && (this.totalSpeakers[e] = o.ME.NONE),
              e === this.userId && null != t && this.setChannelId(t));
    }
    getStats() {
        return {
            max_voice_state_count: this.maxVoiceStateCount,
            total_voice_state_count: this.totalParticipants.size,
            max_listener_count: this.maxListenerCount,
            total_listener_count: this.totalListeners.size,
            max_speaker_count: this.maxSpeakerCount,
            total_speaker_count: Object.keys(this.totalSpeakers).length,
        };
    }
    getUserVoiceSettingsStats(e) {
        let t = i.A.getSettings(e),
            n = new Set(Object.keys(t.localMutes)),
            a = new Set(Object.keys(t.localVolumes));
        return (
            a.delete(this.userId),
            n.delete(this.userId),
            {
                num_local_voice_user_mutes: (0, r.intersection)(Array.from(n), Array.from(this.totalParticipants))
                    .length,
                num_local_voice_volumes: (0, r.intersection)(Array.from(a), Array.from(this.totalParticipants)).length,
            }
        );
    }
    setSpeaking(e, t) {
        if (t !== o.ME.NONE) {
            let n = a.A.getVoiceStateForChannel(this.channelId, e);
            if (null != n && !n.selfMute && !n.mute) {
                this.totalSpeakers[e] = t;
                let n = Object.values(this.totalSpeakers).filter((e) => e !== o.ME.NONE).length;
                this.maxSpeakerCount = Math.max(this.maxSpeakerCount, n);
            }
        } else e in this.totalSpeakers && (this.totalSpeakers[e] = o.ME.NONE);
        if (this.userId === e) {
            if (t === this.speaking) return;
            if (t !== o.ME.NONE) {
                let e = Object.values(a.A.getVoiceStatesForChannel(this.channelId)).filter(
                    (e) => !e.selfDeaf && !e.deaf,
                );
                e.forEach((e) => this.totalListeners.add(e.userId)),
                    (this.maxListenerCount = Math.max(e.length, this.maxListenerCount));
            }
            this.speaking = t;
        }
    }
    setChannelId(e) {
        if (e === this.channelId) return;
        (this.channelId = e), (this.totalParticipants = new Set([this.userId]));
        let t = Object.keys(a.A.getVoiceStatesForChannel(this.channelId));
        t.forEach((e) => this.totalParticipants.add(e)),
            (this.maxVoiceStateCount = t.length),
            (this.speaking = o.ME.NONE),
            (this.maxListenerCount = 0),
            (this.totalListeners = new Set()),
            (this.maxSpeakerCount = 0),
            (this.totalSpeakers = {});
    }
    constructor(e, t) {
        l(this, "userId", void 0),
            l(this, "channelId", void 0),
            l(this, "maxVoiceStateCount", 1),
            l(this, "totalParticipants", new Set()),
            l(this, "speaking", o.ME.NONE),
            l(this, "maxListenerCount", 0),
            l(this, "totalListeners", new Set()),
            l(this, "maxSpeakerCount", 0),
            l(this, "totalSpeakers", {}),
            (this.userId = e),
            this.setChannelId(t);
    }
}
