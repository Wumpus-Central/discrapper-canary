t(321073),
    self.addEventListener("message", (e) => {
        let {
                data: { rawBufferData: r, width: t, options: o, config: a, id: l },
            } = e,
            { normalizedData: s, normalizedVolumeMultipler: n } = ((e, r, t, o) => {
                let a,
                    { fineTuning: l, fineTuningResolution: s, duration: n } = t,
                    i = Math.floor(r / o.waveformBlockWidth);
                if (l >= 0) {
                    let r = Math.floor((e.length * (l - (s * l) / n)) / n),
                        t = Math.floor((e.length * (l + (s * (n - l)) / n)) / n);
                    a = e.slice(r, t);
                } else a = e;
                let h = Math.floor(a.length / i),
                    p = [];
                for (let e = 0; e < i; e++) {
                    let r = h * e,
                        t = 0;
                    for (let e = 0; e < h; e++) t += Math.abs(a[r + e]);
                    p.push(t / h);
                }
                let f = Math.pow(Math.max(...p), -1),
                    u = p.map((e) => e * f),
                    d = [...p].sort()[Math.floor(0.95 * p.length)];
                return { normalizedData: u, normalizedVolumeMultipler: Math.min((o.loudnessThreshold ?? d) / d, 1) };
            })(r, t, o, a);
        self.postMessage({ waveform: s, id: l, normalizedVolumeMultipler: n });
    });
