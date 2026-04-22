"use strict";
n.r(t), n.d(t, { WebAudioSound: () => p, playGiftSound: () => E, voiceSinkId: () => f });
var r = n(735438),
    i = n.n(r),
    s = n(72978),
    a = n(102597),
    o = n(904054),
    l = n(430452),
    u = n(723702),
    d = n(257645);
let c = "default",
    _ = /^( Device)?( \([^()]+\))+$/,
    f = c;
function E(e, t) {
    let n = new Audio((0, a.A)(e));
    (n.volume = (0, o.A)(t)), n.play();
}
async function h() {
    if (null != window.navigator.mediaDevices)
        try {
            var e, t;
            let n = await window.navigator.mediaDevices.enumerateDevices(),
                r = l.Ay.getOutputDevices(),
                a = i()(r)
                    .sortBy((e) => e.index)
                    .findIndex((e) => e.id === l.Ay.getOutputDeviceId()),
                o = r[l.Ay.getOutputDeviceId()];
            if (null == o) {
                f = c;
                return;
            }
            let u = n.filter((e) => "audiooutput" === e.kind && "communications" !== e.deviceId),
                d = u[a];
            if (((e = o.name), (t = d?.label ?? "").startsWith(e) && null != t.substring(e.length).match(_))) {
                f = d.deviceId;
                return;
            }
            if (
                ((d = i()(u).maxBy((e) => (0, s.stringSimilarity)(e.label, o.name))),
                null == d || 0.6 > (0, s.stringSimilarity)(d.label, o.name))
            ) {
                f = c;
                return;
            }
            f = d.deviceId;
        } catch {
            f = c;
        }
}
u.isPlatformEmbedded && (l.Ay.addChangeListener(h), h());
let p = class {
    name;
    _volume;
    _audio;
    outputChannel;
    constructor(e, t, n, r) {
        (this.name = e), (this._volume = n), (this.outputChannel = r);
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
                    let r = new Audio();
                    (r.src = n(696354)(`./${this.name}.mp3`)),
                        (r.onloadeddata = () => {
                            (r.volume = Math.min((l.Ay.getOutputVolume() / 100) * this._volume, 1)),
                                u.isPlatformEmbedded && r.setSinkId(this.outputChannel === d.a.DEFAULT ? c : f),
                                e(r);
                        }),
                        (r.onerror = () => t(Error("could not play audio"))),
                        (r.onended = () => this.destroyAudio()),
                        r.load();
                })),
            this._audio
        );
    }
};
