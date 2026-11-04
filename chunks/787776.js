(r(321073),
    self.addEventListener("message", (e) => {
        let {
                data: { rawBufferData: t, width: r, options: o, config: a, id: l },
            } = e,
            { normalizedData: s, normalizedVolumeMultipler: n } = (function (e, t, r, o) {
                let a,
                    { fineTuning: l, fineTuningResolution: s, duration: n } = r,
                    i = Math.floor(t / o.waveformBlockWidth);
                if (l >= 0) {
                    let t = Math.floor((e.length * (l - (s * l) / n)) / n),
                        r = Math.floor((e.length * (l + (s * (n - l)) / n)) / n);
                    a = e.slice(t, r);
                } else a = e;
                let f = Math.floor(a.length / i),
                    h = [];
                for (let e = 0; e < i; e++) {
                    let t = f * e,
                        r = 0;
                    for (let e = 0; e < f; e++) r += Math.abs(a[t + e]);
                    h.push(r / f);
                }
                let p = Math.pow(Math.max(...h), -1),
                    u = h.map((e) => e * p),
                    c = [...h].sort()[Math.floor(0.95 * h.length)];
                return { normalizedData: u, normalizedVolumeMultipler: Math.min((o.loudnessThreshold ?? c) / c, 1) };
            })(t, r, o, a);
        self.postMessage({ waveform: s, id: l, normalizedVolumeMultipler: n });
    }));
