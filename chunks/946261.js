n.r(t),
    n.d(t, {
        WebAudioSound: () => b,
        playGiftSound: () => g,
        voiceSinkId: () => h,
    }),
    n(747238),
    n(65821);
var r = n(735438),
    i = n.n(r),
    a = n(72978),
    s = n(102597),
    o = n(904054),
    l = n(430452),
    c = n(723702),
    u = n(257645);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = "default",
    p = 0.6,
    _ = /^( Device)?( \([^()]+\))+$/,
    h = f;
function m(e, t) {
    return !!t.startsWith(e) && null != t.substring(e.length).match(_);
}
function g(e, t) {
    let n = new Audio((0, s.A)(e));
    (n.volume = (0, o.A)(t)), n.play();
}
async function E() {
    if (null != window.navigator.mediaDevices)
        try {
            var e;
            let t = await window.navigator.mediaDevices.enumerateDevices(),
                n = l.A.getOutputDevices(),
                r = i()(n)
                    .sortBy((e) => e.index)
                    .findIndex((e) => e.id === l.A.getOutputDeviceId()),
                s = n[l.A.getOutputDeviceId()];
            if (null == s) {
                h = f;
                return;
            }
            let o = t.filter((e) => "audiooutput" === e.kind && "communications" !== e.deviceId),
                c = o[r];
            if (m(s.name, null != (e = null == c ? void 0 : c.label) ? e : "")) {
                h = c.deviceId;
                return;
            }
            if (
                ((c = i()(o).maxBy((e) => (0, a.stringSimilarity)(e.label, s.name))),
                null == c || (0, a.stringSimilarity)(c.label, s.name) < p)
            ) {
                h = f;
                return;
            }
            h = c.deviceId;
        } catch (e) {
            h = f;
        }
}
c.isPlatformEmbedded && (l.A.addChangeListener(E), E());
let b = class {
    get volume() {
        return this._volume;
    }
    set volume(e) {
        (this._volume = e), this.ensureAudio().then((t) => (t.volume = e));
    }
    loop() {
        this.ensureAudio().then((e) => {
            (e.loop = !0), e.play();
        });
    }
    play() {
        this.ensureAudio().then((e) => {
            (e.loop = !1), e.play();
        });
    }
    pause() {
        var e;
        null == (e = this._audio) || e.then((e) => e.pause());
    }
    stop() {
        this.destroyAudio();
    }
    playWithListener() {
        return new Promise((e, t) => {
            this.ensureAudio().then((n) => {
                (null == n.duration || 0 === n.duration) && t("sound has no duration"),
                    n.play(),
                    setTimeout(() => {
                        e(!0);
                    }, n.duration);
            });
        });
    }
    destroyAudio() {
        null != this._audio &&
            (this._audio.then((e) => {
                e.pause(), (e.src = "");
            }),
            (this._audio = null));
    }
    ensureAudio() {
        var e;
        return (
            (this._audio =
                null != (e = this._audio)
                    ? e
                    : new Promise((e, t) => {
                          let r = new Audio();
                          (r.src = n(696354)("./".concat(this.name, ".mp3"))),
                              (r.onloadeddata = () => {
                                  (r.volume = Math.min((l.A.getOutputVolume() / 100) * this._volume, 1)),
                                      c.isPlatformEmbedded && r.setSinkId(this.outputChannel === u.a.DEFAULT ? f : h),
                                      e(r);
                              }),
                              (r.onerror = () => t(Error("could not play audio"))),
                              (r.onended = () => this.destroyAudio()),
                              r.load();
                      })),
            this._audio
        );
    }
    constructor(e, t, n, r) {
        d(this, "name", void 0),
            d(this, "_volume", void 0),
            d(this, "_audio", void 0),
            d(this, "outputChannel", void 0),
            (this.name = e),
            (this._volume = n),
            (this.outputChannel = r);
    }
};
