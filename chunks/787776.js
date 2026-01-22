e(321073),
    e(896048),
    e(638769),
    self.addEventListener("message", (t) => {
        let {
                data: { rawBufferData: r, width: e, options: o, config: n, id: a },
            } = t,
            { normalizedData: i, normalizedVolumeMultipler: s } = ((t, r, e, o) => {
                var n;
                let a,
                    { fineTuning: i, fineTuningResolution: s, duration: u } = e,
                    l = Math.floor(r / o.waveformBlockWidth);
                if (i >= 0) {
                    let r = Math.floor((t.length * (i - (s * i) / u)) / u),
                        e = Math.floor((t.length * (i + (s * (u - i)) / u)) / u);
                    a = t.slice(r, e);
                } else a = t;
                let f = Math.floor(a.length / l),
                    c = [];
                for (let t = 0; t < l; t++) {
                    let r = f * t,
                        e = 0;
                    for (let t = 0; t < f; t++) e += Math.abs(a[r + t]);
                    c.push(e / f);
                }
                let p = Math.pow(Math.max(...c), -1),
                    v = c.map((t) => t * p),
                    h = [...c].sort()[Math.floor(0.95 * c.length)];
                return {
                    normalizedData: v,
                    normalizedVolumeMultipler: Math.min((null != (n = o.loudnessThreshold) ? n : h) / h, 1),
                };
            })(r, e, o, n);
        self.postMessage({
            waveform: i,
            id: a,
            normalizedVolumeMultipler: s,
        });
    });
