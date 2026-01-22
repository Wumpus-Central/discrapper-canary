n.d(t, {
    G: () => h,
    o: () => f,
}),
    n(896048),
    n(65821);
var r = n(284009),
    i = n.n(r),
    l = n(205693),
    a = n(602674),
    s = n(76788),
    o = n(536184),
    c = n(430452),
    u = n(904054);
let d = new Map();
async function p(e) {
    let t = d.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        r = (0, a.v)(),
        i = await (null == r ? void 0 : r.decodeAudioData(n));
    return null != i && d.set(e, i), i;
}

function f(e) {
    let { soundKey: t, soundURL: n, soundVolume: r, reportSoundStartedPlaying: a } = e;
    return new Promise(async (e, s) => {
        let o = await p(n);
        null == o && e(),
            c.A.getMediaEngine().eachConnection((n) => {
                n.context === l.x.DEFAULT &&
                    (a(),
                    i()(null != o, "audioBuffer cannot be null here"),
                    n.startSamplesLocalPlayback(t, o, r, (t, n) => {
                        0 !== t ? s(Error("".concat(n))) : e();
                    }));
            });
    });
}

function h(e, t) {
    let { soundKey: n, soundURL: r, soundVolume: i, reportSoundStartedPlaying: l } = e,
        a = t.get(n);
    if (null != a) {
        a.currentTime = 0;
        return;
    }
    return new Promise(async (e) => {
        let a = new (await (0, o.A)(r))();
        (a.src = r),
            (a.volume = (0, u.A)(i)),
            a.addEventListener(a instanceof s.A.OGVPlayer ? "loadedmetadata" : "canplaythrough", () => {
                l(), t.set(n, a), a.play();
            }),
            a.addEventListener("ended", () => {
                t.delete(n), (a.src = ""), e();
            });
    });
}
