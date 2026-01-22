function r(e, t, n) {
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

function i(e, t) {
    let n = -1 / 0;
    e.getFloatFrequencyData(t);
    for (let e = 4; e < t.length; e++) t[e] > n && t[e] < 0 && (n = t[e]);
    return n;
}
n.d(t, {
    A: () => a,
}),
    n(321073),
    n(927092),
    n(212978),
    n(648691),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
class a {
    stop() {
        this.source.disconnect(), clearInterval(this.interval), (this.speakingCounter = 0);
    }
    get speaking() {
        return this.speakingCounter > 0 || this.silentFrames < this.silenceThreshold;
    }
    update() {
        (this.currentVolume = i(this.analyser, this.fftBins)),
            this.speakingHistory[this.speakingHistoryIndex] && this.speakingCounter--;
        let e = this.currentVolume > this.threshold;
        (this.speakingHistory[this.speakingHistoryIndex] = e),
            e && this.speakingCounter++,
            ++this.speakingHistoryIndex === this.speakingHistory.length && (this.speakingHistoryIndex = 0),
            this.speakingCounter > 0 ? (this.silentFrames = 0) : this.silentFrames++;
    }
    constructor(e, t, n, i = 0.1, a = 10) {
        r(this, "threshold", void 0),
            r(this, "currentVolume", 0),
            r(this, "analyser", void 0),
            r(this, "interval", void 0),
            r(this, "fftBins", void 0),
            r(this, "source", void 0),
            r(this, "speakingHistory", void 0),
            r(this, "speakingHistoryIndex", 0),
            r(this, "speakingCounter", 0),
            r(this, "silenceThreshold", void 0),
            r(this, "silentFrames", void 0),
            r(this, "onProcess", null);
        const s = e.createAnalyser();
        (s.fftSize = 512), (s.smoothingTimeConstant = i);
        const o = e.createMediaStreamSource(t);
        o.connect(s);
        const l = [];
        for (let e = 0; e < a; e++) l.push(!1);
        const c = window.setInterval(() => {
            var e, t;
            this.update(), null == (e = (t = this).onProcess) || e.call(t, this.speaking, this.currentVolume);
        }, 20);
        (this.threshold = n),
            (this.analyser = s),
            (this.interval = c),
            (this.fftBins = new Float32Array(s.fftSize)),
            (this.source = o),
            (this.speakingHistory = l),
            (this.silenceThreshold = this.speakingHistory.length),
            (this.silentFrames = this.silenceThreshold);
    }
}
