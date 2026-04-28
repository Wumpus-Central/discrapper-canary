"use strict";
n.d(t, { Ay: () => r, FM: () => o });
var l = n(17928),
    i = n(228366);
class s extends l.il {
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
    r = a;
function o(e) {
    a.toggleVideoStats(e);
}
