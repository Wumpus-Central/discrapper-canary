i.d(t, { Ay: () => l, FM: () => o, Vh: () => u, ke: () => d });
var a = i(17928),
    n = i(73153);
class r extends a.il {
    videoStatsEnabled = new Map();
    isVideoStatsEnabled(e) {
        return this.videoStatsEnabled.get(e) ?? !1;
    }
    toggleVideoStats(e) {
        let t = this.isVideoStatsEnabled(e);
        this.setVideoStats(e, !t);
    }
    setVideoStats(e, t) {
        if (!t) {
            this.videoStatsEnabled.delete(e) && this.emitChange();
            return;
        }
        if (
            (this.videoStatsEnabled.has(e) && this.videoStatsEnabled.delete(e),
            this.videoStatsEnabled.set(e, t),
            this.videoStatsEnabled.size > 10)
        ) {
            let e = this.videoStatsEnabled.size - 10,
                t = this.videoStatsEnabled.keys();
            for (let i = 0; i < e; i++) {
                let e = t.next().value;
                null != e && this.videoStatsEnabled.delete(e);
            }
        }
        this.emitChange();
    }
    clearVideoStats(e) {
        this.videoStatsEnabled.delete(e) && this.emitChange();
    }
}
let s = new r(n.h, {}),
    l = s;
function o(e) {
    s.toggleVideoStats(e);
}
function u(e, t) {
    s.setVideoStats(e, t);
}
function d(e) {
    s.clearVideoStats(e);
}
