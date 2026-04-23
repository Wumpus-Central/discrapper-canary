n.d(t, { G: () => p, o: () => E });
var i = n(284009),
    r = n.n(i),
    a = n(205693),
    l = n(602674),
    s = n(76788),
    o = n(738011),
    d = n(536184),
    u = n(430452),
    c = n(728458),
    A = n(904054);
let h = new Map();
async function _(e) {
    let t = h.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        i = (0, l.v)(),
        r = await i?.decodeAudioData(n);
    return null != r && h.set(e, r), r;
}
function E(e) {
    let { soundKey: t, soundURL: n, soundVolume: i, reportSoundStartedPlaying: l } = e;
    return new Promise(async (e, s) => {
        let o = await _(n);
        null == o && e(),
            u.Ay.getMediaEngine().eachConnection((n) => {
                n.context === a.x.DEFAULT &&
                    (l(),
                    r()(null != o, "audioBuffer cannot be null here"),
                    n.startSamplesLocalPlayback(t, o, i, (t, n) => {
                        0 !== t ? s(Error(`${n}`)) : e();
                    }));
            });
    });
}
function p(e, t) {
    let { soundKey: n, soundURL: i, soundVolume: r, reportSoundStartedPlaying: a } = e,
        l = t.get(n);
    if (null != l) {
        l.currentTime = 0;
        return;
    }
    return new Promise(async (e) => {
        let l = new (await (0, d.A)(i))();
        (l.src = i),
            (l.volume = (0, A.A)(r)),
            l.addEventListener(l instanceof s.A.OGVPlayer ? "loadedmetadata" : "canplaythrough", () => {
                a(),
                    t.set(n, l),
                    l.play()?.catch((i) => {
                        if ((0, o.u)(i)) {
                            c.A.captureException(i, { tags: { errorType: "autoplay_policy", expected: "true" } }),
                                t.delete(n),
                                (l.src = ""),
                                e();
                            return;
                        }
                        throw i;
                    });
            }),
            l.addEventListener("ended", () => {
                t.delete(n), (l.src = ""), e();
            });
    });
}
