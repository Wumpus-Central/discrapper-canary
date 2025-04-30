function r(e, t, n) {
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
function i(e, t) {
    let n = -1 / 0;
    e.getFloatFrequencyData(t);
    for (let e = 4; e < t.length; e++) t[e] > n && t[e] < 0 && (n = t[e]);
    return n;
}
n.d(t, { Z: () => o }), n(539854), n(17294), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
class o {
    stop() {
        this.source.disconnect(), clearInterval(this.interval), (this.speakingCounter = 0);
    }
    get speaking() {
        return this.speakingCounter > 0 || this.silentFrames < this.silenceThreshold;
    }
    update() {
        (this.currentVolume = i(this.analyser, this.fftBins)), this.speakingHistory[this.speakingHistoryIndex] && this.speakingCounter--;
        let e = this.currentVolume > this.threshold;
        (this.speakingHistory[this.speakingHistoryIndex] = e), e && this.speakingCounter++, ++this.speakingHistoryIndex === this.speakingHistory.length && (this.speakingHistoryIndex = 0), this.speakingCounter > 0 ? (this.silentFrames = 0) : this.silentFrames++;
    }
    constructor(e, t, n, i = 0.1, o = 10) {
        r(this, 'threshold', void 0), r(this, 'currentVolume', 0), r(this, 'analyser', void 0), r(this, 'interval', void 0), r(this, 'fftBins', void 0), r(this, 'source', void 0), r(this, 'speakingHistory', void 0), r(this, 'speakingHistoryIndex', 0), r(this, 'speakingCounter', 0), r(this, 'silenceThreshold', void 0), r(this, 'silentFrames', void 0), r(this, 'onProcess', null);
        let a = e.createAnalyser();
        (a.fftSize = 512), (a.smoothingTimeConstant = i);
        let s = e.createMediaStreamSource(t);
        s.connect(a);
        let l = [];
        for (let e = 0; e < o; e++) l.push(!1);
        let c = window.setInterval(() => {
            var e, t;
            this.update(), null == (e = (t = this).onProcess) || e.call(t, this.speaking, this.currentVolume);
        }, 20);
        (this.threshold = n), (this.analyser = a), (this.interval = c), (this.fftBins = new Float32Array(a.fftSize)), (this.source = s), (this.speakingHistory = l), (this.silenceThreshold = this.speakingHistory.length), (this.silentFrames = this.silenceThreshold);
    }
}
