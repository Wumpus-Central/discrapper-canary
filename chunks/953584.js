n.d(t, {
    Ay: () => c,
    FM: () => u,
}),
    n(896048);
var r = n(311907),
    i = n(73153);

function a(e, t, n) {
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
let s = 10;
class o extends r.il {
    isVideoStatsEnabled(e) {
        var t;
        return null != (t = this.videoStatsEnabled.get(e)) && t;
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
            this.videoStatsEnabled.size > s)
        ) {
            let e = this.videoStatsEnabled.size - s,
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
    constructor(...e) {
        super(...e), a(this, "videoStatsEnabled", new Map());
    }
}
let l = new o(i.h, {}),
    c = l;

function u(e) {
    l.toggleVideoStats(e);
}
