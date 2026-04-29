"use strict";
n.r(t), n.d(t, { WebAudioSound: () => f, playGiftSound: () => h, voiceSinkId: () => E });
var i = n(735438),
    r = n.n(i),
    s = n(72978),
    a = n(102597),
    o = n(904054),
    l = n(51760),
    _ = n(723702),
    d = n(257645);
let u = "default",
    c = /^( Device)?( \([^()]+\))+$/,
    E = u;
function h(e, t) {
    let n = new Audio((0, a.A)(e));
    (n.volume = (0, o.A)(t)), n.play();
}
async function m() {
    if (null != window.navigator.mediaDevices)
        try {
            var e, t;
            let n = await window.navigator.mediaDevices.enumerateDevices(),
                i = l.Ay.getOutputDevices(),
                a = r()(i)
                    .sortBy((e) => e.index)
                    .findIndex((e) => e.id === l.Ay.getOutputDeviceId()),
                o = i[l.Ay.getOutputDeviceId()];
            if (null == o) {
                E = u;
                return;
            }
            let _ = n.filter((e) => "audiooutput" === e.kind && "communications" !== e.deviceId),
                d = _[a];
            if (((e = o.name), (t = d?.label ?? "").startsWith(e) && null != t.substring(e.length).match(c))) {
                E = d.deviceId;
                return;
            }
            if (
                ((d = r()(_).maxBy((e) => (0, s.stringSimilarity)(e.label, o.name))),
                null == d || 0.6 > (0, s.stringSimilarity)(d.label, o.name))
            ) {
                E = u;
                return;
            }
            E = d.deviceId;
        } catch {
            E = u;
        }
}
_.isPlatformEmbedded && (l.Ay.addChangeListener(m), m());
let f = class {
    name;
    _volume;
    _audio;
    outputChannel;
    constructor(e, t, n, i) {
        (this.name = e), (this._volume = n), (this.outputChannel = i);
    }
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
        this._audio?.then((e) => e.pause());
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
        return (
            (this._audio =
                this._audio ??
                new Promise((e, t) => {
                    let i = new Audio();
                    (i.src = n(696354)(`./${this.name}.mp3`)),
                        (i.onloadeddata = () => {
                            (i.volume = Math.min((l.Ay.getOutputVolume() / 100) * this._volume, 1)),
                                _.isPlatformEmbedded && i.setSinkId(this.outputChannel === d.a.DEFAULT ? u : E),
                                e(i);
                        }),
                        (i.onerror = () => t(Error("could not play audio"))),
                        (i.onended = () => this.destroyAudio()),
                        i.load();
                })),
            this._audio
        );
    }
};
