n.d(t, { G: () => p, o: () => m });
var i = n(284009),
    r = n.n(i),
    l = n(205693),
    a = n(602674),
    s = n(76788),
    o = n(738011),
    d = n(536184),
    c = n(430452),
    u = n(728458),
    A = n(904054);
let h = new Map();
async function _(e) {
    let t = h.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        i = (0, a.v)(),
        r = await i?.decodeAudioData(n);
    return null != r && h.set(e, r), r;
}
function m(e) {
    let { soundKey: t, soundURL: n, soundVolume: i, reportSoundStartedPlaying: a } = e;
    return new Promise(async (e, s) => {
        let o = await _(n);
        null == o && e(),
            c.Ay.getMediaEngine().eachConnection((n) => {
                n.context === l.x.DEFAULT &&
                    (a(),
                    r()(null != o, "audioBuffer cannot be null here"),
                    n.startSamplesLocalPlayback(t, o, i, (t, n) => {
                        0 !== t ? s(Error(`${n}`)) : e();
                    }));
            });
    });
}
function p(e, t) {
    let { soundKey: n, soundURL: i, soundVolume: r, reportSoundStartedPlaying: l } = e,
        a = t.get(n);
    if (null != a) {
        a.currentTime = 0;
        return;
    }
    return new Promise(async (e) => {
        let a = new (await (0, d.A)(i))();
        (a.src = i),
            (a.volume = (0, A.A)(r)),
            a.addEventListener(a instanceof s.A.OGVPlayer ? "loadedmetadata" : "canplaythrough", () => {
                l(),
                    t.set(n, a),
                    a.play()?.catch((i) => {
                        if ((0, o.u)(i)) {
                            u.A.captureException(i, { tags: { errorType: "autoplay_policy", expected: "true" } }),
                                t.delete(n),
                                (a.src = ""),
                                e();
                            return;
                        }
                        throw i;
                    });
            }),
            a.addEventListener("ended", () => {
                t.delete(n), (a.src = ""), e();
            });
    });
}
