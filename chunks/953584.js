"use strict";
n.d(t, { Ay: () => o, FM: () => l });
var r = n(311907),
    i = n(73153);
class s extends r.il {
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
            for (let n = 0; n < e; n++) {
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
let a = new s(i.h, {}),
    o = a;
function l(e) {
    a.toggleVideoStats(e);
}
