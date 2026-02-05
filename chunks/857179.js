n.d(t, { G: () => _, o: () => h });
var i = n(284009),
    r = n.n(i),
    a = n(205693),
    l = n(602674),
    s = n(76788),
    o = n(536184),
    d = n(430452),
    c = n(904054);
let u = new Map();
async function A(e) {
    let t = u.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        i = (0, l.v)(),
        r = await i?.decodeAudioData(n);
    return null != r && u.set(e, r), r;
}
function h(e) {
    let { soundKey: t, soundURL: n, soundVolume: i, reportSoundStartedPlaying: l } = e;
    return new Promise(async (e, s) => {
        let o = await A(n);
        null == o && e(),
            d.A.getMediaEngine().eachConnection((n) => {
                n.context === a.x.DEFAULT &&
                    (l(),
                    r()(null != o, "audioBuffer cannot be null here"),
                    n.startSamplesLocalPlayback(t, o, i, (t, n) => {
                        0 !== t ? s(Error(`${n}`)) : e();
                    }));
            });
    });
}
function _(e, t) {
    let { soundKey: n, soundURL: i, soundVolume: r, reportSoundStartedPlaying: a } = e,
        l = t.get(n);
    if (null != l) {
        l.currentTime = 0;
        return;
    }
    return new Promise(async (e) => {
        let l = new (await (0, o.A)(i))();
        (l.src = i),
            (l.volume = (0, c.A)(r)),
            l.addEventListener(l instanceof s.A.OGVPlayer ? "loadedmetadata" : "canplaythrough", () => {
                a(), t.set(n, l), l.play();
            }),
            l.addEventListener("ended", () => {
                t.delete(n), (l.src = ""), e();
            });
    });
}
