"use strict";
n.r(t), n.d(t, { WebAudioSound: () => A, playGiftSound: () => g, voiceSinkId: () => h });
var r = n(735438),
    i = n.n(r),
    a = n(72978),
    s = n(102597),
    o = n(904054),
    l = n(430452),
    u = n(723702),
    c = n(257645);
let d = "default",
    _ = 0.6,
    f = /^( Device)?( \([^()]+\))+$/,
    h = d;
function p(e, t) {
    return !!t.startsWith(e) && null != t.substring(e.length).match(f);
}
function g(e, t) {
    let n = new Audio((0, s.A)(e));
    (n.volume = (0, o.A)(t)), n.play();
}
async function E() {
    if (null != window.navigator.mediaDevices)
        try {
            let e = await window.navigator.mediaDevices.enumerateDevices(),
                t = l.Ay.getOutputDevices(),
                n = i()(t)
                    .sortBy((e) => e.index)
                    .findIndex((e) => e.id === l.Ay.getOutputDeviceId()),
                r = t[l.Ay.getOutputDeviceId()];
            if (null == r) {
                h = d;
                return;
            }
            let s = e.filter((e) => "audiooutput" === e.kind && "communications" !== e.deviceId),
                o = s[n];
            if (p(r.name, o?.label ?? "")) {
                h = o.deviceId;
                return;
            }
            if (
                ((o = i()(s).maxBy((e) => (0, a.stringSimilarity)(e.label, r.name))),
                null == o || (0, a.stringSimilarity)(o.label, r.name) < _)
            ) {
                h = d;
                return;
            }
            h = o.deviceId;
        } catch {
            h = d;
        }
}
u.isPlatformEmbedded && (l.Ay.addChangeListener(E), E());
let A = class {
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
                                u.isPlatformEmbedded && r.setSinkId(this.outputChannel === c.a.DEFAULT ? d : h),
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
