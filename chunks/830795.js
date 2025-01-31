function i(e, t, n) {
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
function r(e, t) {
    let n = -1 / 0;
    e.getFloatFrequencyData(t);
    for (let e = 4; e < t.length; e++) t[e] > n && t[e] < 0 && (n = t[e]);
    return n;
}
n.d(t, { Z: () => a }), n(653041), n(951953), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
class a {
    stop() {
        this.source.disconnect(), clearInterval(this.interval), (this.speakingCounter = 0);
    }
    get speaking() {
        return this.speakingCounter > 0 || this.silentFrames < this.silenceThreshold;
    }
    update() {
        (this.currentVolume = r(this.analyser, this.fftBins)), this.speakingHistory[this.speakingHistoryIndex] && this.speakingCounter--;
        let e = this.currentVolume > this.threshold;
        (this.speakingHistory[this.speakingHistoryIndex] = e), e && this.speakingCounter++, ++this.speakingHistoryIndex === this.speakingHistory.length && (this.speakingHistoryIndex = 0), this.speakingCounter > 0 ? (this.silentFrames = 0) : this.silentFrames++;
    }
    constructor(e, t, n, r = 0.1, a = 10) {
        i(this, 'threshold', void 0), i(this, 'currentVolume', 0), i(this, 'analyser', void 0), i(this, 'interval', void 0), i(this, 'fftBins', void 0), i(this, 'source', void 0), i(this, 'speakingHistory', void 0), i(this, 'speakingHistoryIndex', 0), i(this, 'speakingCounter', 0), i(this, 'silenceThreshold', void 0), i(this, 'silentFrames', void 0), i(this, 'onProcess', null);
        let s = e.createAnalyser();
        (s.fftSize = 512), (s.smoothingTimeConstant = r);
        let o = e.createMediaStreamSource(t);
        o.connect(s);
        let l = [];
        for (let e = 0; e < a; e++) l.push(!1);
        let u = window.setInterval(() => {
            var e, t;
            this.update(), null === (e = (t = this).onProcess) || void 0 === e || e.call(t, this.speaking, this.currentVolume);
        }, 20);
        (this.threshold = n), (this.analyser = s), (this.interval = u), (this.fftBins = new Float32Array(s.fftSize)), (this.source = o), (this.speakingHistory = l), (this.silenceThreshold = this.speakingHistory.length), (this.silentFrames = this.silenceThreshold);
    }
}
