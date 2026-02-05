"use strict";
function r(e, t) {
    let n = -1 / 0;
    e.getFloatFrequencyData(t);
    for (let e = 4; e < t.length; e++) t[e] > n && t[e] < 0 && (n = t[e]);
    return n;
}
n.d(t, { A: () => i }), n(321073), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
class i {
    threshold;
    currentVolume = 0;
    analyser;
    interval;
    fftBins;
    source;
    speakingHistory;
    speakingHistoryIndex = 0;
    speakingCounter = 0;
    silenceThreshold;
    silentFrames;
    onProcess = null;
    constructor(e, t, n, r = 0.1, i = 10) {
        const a = e.createAnalyser();
        (a.fftSize = 512), (a.smoothingTimeConstant = r);
        const s = e.createMediaStreamSource(t);
        s.connect(a);
        const o = [];
        for (let e = 0; e < i; e++) o.push(!1);
        const l = window.setInterval(() => {
            this.update(), this.onProcess?.(this.speaking, this.currentVolume);
        }, 20);
        (this.threshold = n),
            (this.analyser = a),
            (this.interval = l),
            (this.fftBins = new Float32Array(a.fftSize)),
            (this.source = s),
            (this.speakingHistory = o),
            (this.silenceThreshold = this.speakingHistory.length),
            (this.silentFrames = this.silenceThreshold);
    }
    stop() {
        this.source.disconnect(), clearInterval(this.interval), (this.speakingCounter = 0);
    }
    get speaking() {
        return this.speakingCounter > 0 || this.silentFrames < this.silenceThreshold;
    }
    update() {
        (this.currentVolume = r(this.analyser, this.fftBins)),
            this.speakingHistory[this.speakingHistoryIndex] && this.speakingCounter--;
        let e = this.currentVolume > this.threshold;
        (this.speakingHistory[this.speakingHistoryIndex] = e),
            e && this.speakingCounter++,
            ++this.speakingHistoryIndex === this.speakingHistory.length && (this.speakingHistoryIndex = 0),
            this.speakingCounter > 0 ? (this.silentFrames = 0) : this.silentFrames++;
    }
}
