a(321073);
var r,
    i = a(626584),
    l = a(927813);
((r = {})[(r.SECONDS_30 = 30 * l.A.Millis.SECOND)] = "SECONDS_30"),
    (r[(r.MINUTES_1 = l.A.Millis.MINUTE)] = "MINUTES_1"),
    (r[(r.MINUTES_2 = 2 * l.A.Millis.MINUTE)] = "MINUTES_2"),
    l.A.Millis.SECOND;
let o = new i.A("Clips");
l.A.Millis.SECOND,
    l.A.Millis.DAY,
    self.addEventListener("message", async (e) => {
        let t,
            {
                data: { videoBuffer: r },
            } = e,
            { default: i } = await a.e("25777").then(a.t.bind(a, 293384, 19));
        r.fileStart = 0;
        let l = i.createFile(),
            n = {},
            s = {},
            d = {},
            u = i.createFile(),
            c = new Promise((e) => {
                t = e;
            });
        (l.onError = () => {
            t?.();
        }),
            (l.onReady = (e) => {
                if ((u.init({ duration: e.duration, timescale: e.timescale }), 0 === e.audioTracks.length))
                    return void t?.();
                for (let t of e.audioTracks) {
                    let a = i.createFile();
                    a.init({ duration: e.duration, timescale: e.timescale }),
                        a.addTrack({
                            id: t.id,
                            timescale: t.timescale,
                            hdlr: "soun",
                            type: "mp4a",
                            duration: t.duration,
                            layer: t.layer,
                            channel_count: t.audio.channel_count,
                            samplerate: t.audio.sample_rate,
                            samplesize: t.audio.sample_size,
                            name: t.name,
                        }),
                        u.addTrack({
                            id: t.id,
                            timescale: t.timescale,
                            hdlr: "soun",
                            type: "mp4a",
                            duration: t.duration,
                            layer: t.layer,
                            channel_count: t.audio.channel_count,
                            samplerate: t.audio.sample_rate,
                            samplesize: t.audio.sample_size,
                            name: t.name,
                        }),
                        (n[t.id] = a),
                        (s[t.id] = t),
                        (d[t.id] = t.name.length > 0 ? t.name : `track_${t.id}`),
                        l.setExtractionOptions(t.id, null, { nbSamples: 1 / 0 });
                }
                (l.onSamples = (e, a, r) => {
                    let i = n[e];
                    if (null == i) return void o.warn(`No output file found for track ${e}`);
                    for (let t of r) i.addSample(e, t.data, t), u.addSample(e, t.data, t);
                    l.releaseUsedSamples(e, r.length);
                    let d = i.getTrackById(e),
                        c = u.getTrackById(e),
                        p = l.getTrackById(e);
                    if (null != p.edts) {
                        let e = p.edts.elst;
                        d.add("edts").boxes.push(e), c.add("edts").boxes.push(e);
                    }
                    delete s[e], 0 === Object.keys(s).length && t?.();
                }),
                    l.start();
            }),
            l.appendBuffer(r),
            l.flush(),
            await c;
        let p = [],
            f = u.getBuffer(),
            m = [r, f];
        for (let [e, t] of Object.entries(n)) {
            let a = parseInt(e, 10),
                r = t.getBuffer();
            p.push({ trackId: a, trackName: d[a], buffer: r }), m.push(r);
        }
        self.postMessage({ videoBuffer: r, audioTracks: p, audioBuffer: f }, m);
    });
