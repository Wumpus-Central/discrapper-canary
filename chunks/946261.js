"use strict";
n.r(t), n.d(t, { WebAudioSound: () => T, playGiftSound: () => m, voiceSinkId: () => E });
var i = n(735438),
    r = n.n(i),
    s = n(72978),
    a = n(731738),
    o = n(807393),
    l = n(102597),
    u = n(904054),
    c = n(555975),
    d = n(723702),
    _ = n(38405),
    h = n(257645);
let f = "default",
    p = /^( Device)?( \([^()]+\))+$/,
    E = f;
function m(e, t) {
    let n = new Audio((0, l.A)(e));
    (n.volume = (0, u.A)(t)), n.play();
}
async function g() {
    if (null != window.navigator.mediaDevices)
        try {
            var e, t;
            let n = await window.navigator.mediaDevices.enumerateDevices(),
                i = c.Ay.getOutputDevices(),
                a = r()(i)
                    .sortBy((e) => e.index)
                    .findIndex((e) => e.id === c.Ay.getOutputDeviceId()),
                o = i[c.Ay.getOutputDeviceId()];
            if (null == o) {
                E = f;
                return;
            }
            let l = n.filter((e) => "audiooutput" === e.kind && "communications" !== e.deviceId),
                u = l[a];
            if (((e = o.name), (t = u?.label ?? "").startsWith(e) && null != t.substring(e.length).match(p))) {
                E = u.deviceId;
                return;
            }
            if (
                ((u = r()(l).maxBy((e) => (0, s.stringSimilarity)(e.label, o.name))),
                null == u || 0.6 > (0, s.stringSimilarity)(u.label, o.name))
            ) {
                E = f;
                return;
            }
            E = u.deviceId;
        } catch {
            E = f;
        }
}
function A(e, t) {
    o.A.increment({ name: a.K.NOTIFICATION_SOUND_PLAYBACK_FAILURE, tags: [`reason:${e}`] }),
        _.A.captureException(t, { tags: { source: "notification_sound_playback" } });
}
function I(e) {
    A("NotAllowedError" === e.name ? "autoplay_blocked" : "generic", e);
}
d.isPlatformEmbedded && (c.Ay.addChangeListener(g), g());
let T = class {
    name;
    _volume;
    _audio;
    outputChannel;
    trackNotificationFailure;
    constructor(e, t, n, i, r = !1) {
        (this.name = e), (this._volume = n), (this.outputChannel = i), (this.trackNotificationFailure = r);
    }
    get volume() {
        return this._volume;
    }
    set volume(e) {
        (this._volume = e), this.ensureAudio().then((t) => (t.volume = e));
    }
    loop() {
        this.ensureAudio().then((e) => {
            (e.loop = !0),
                e.play().catch((e) => {
                    this.trackNotificationFailure && I(e);
                });
        });
    }
    play() {
        this.ensureAudio().then((e) => {
            (e.loop = !1),
                e.play().catch((e) => {
                    this.trackNotificationFailure && I(e);
                });
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
                            (i.volume = Math.min((c.Ay.getOutputVolume() / 100) * this._volume, 1)),
                                d.isPlatformEmbedded && i.setSinkId(this.outputChannel === h.a.DEFAULT ? f : E),
                                e(i);
                        }),
                        (i.onerror = () => {
                            let e =
                                    i.error?.code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED
                                        ? "asset_404"
                                        : i.error?.code === MediaError.MEDIA_ERR_DECODE
                                          ? "decode_error"
                                          : "generic",
                                n = Error(`could not play audio: ${e}`);
                            this.trackNotificationFailure && A(e, n), t(n);
                        }),
                        (i.onended = () => this.destroyAudio()),
                        i.load();
                })),
            this._audio
        );
    }
};
