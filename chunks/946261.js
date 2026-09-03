n.r(t), n.d(t, { WebAudioSound: () => g, playGiftSound: () => f, voiceSinkId: () => I });
var i = n(435558),
    r = n.n(i),
    a = n(72978),
    s = n(731738),
    l = n(807393),
    o = n(102597),
    d = n(904054),
    c = n(916546),
    u = n(723702),
    _ = n(38405),
    E = n(257645);
let A = "default",
    h = /^( Device)?( \([^()]+\))+$/,
    I = A;
function f(e, t) {
    let n = new Audio((0, o.A)(e));
    (n.volume = (0, d.A)(t)), n.play();
}
async function p() {
    if (null != window.navigator.mediaDevices)
        try {
            var e, t;
            let n = await window.navigator.mediaDevices.enumerateDevices(),
                i = c.Ay.getOutputDevices(),
                s = r()(i)
                    .sortBy((e) => e.index)
                    .findIndex((e) => e.id === c.Ay.getOutputDeviceId()),
                l = i[c.Ay.getOutputDeviceId()];
            if (null == l) {
                I = A;
                return;
            }
            let o = n.filter((e) => "audiooutput" === e.kind && "communications" !== e.deviceId),
                d = o[s];
            if (((e = l.name), (t = d?.label ?? "").startsWith(e) && null != t.substring(e.length).match(h))) {
                I = d.deviceId;
                return;
            }
            if (
                ((d = r()(o).maxBy((e) => (0, a.stringSimilarity)(e.label, l.name))),
                null == d || 0.6 > (0, a.stringSimilarity)(d.label, l.name))
            ) {
                I = A;
                return;
            }
            I = d.deviceId;
        } catch {
            I = A;
        }
}
function T(e, t) {
    l.A.increment({ name: s.K.NOTIFICATION_SOUND_PLAYBACK_FAILURE, tags: [`reason:${e}`] }),
        _.A.captureException(t, { tags: { source: "notification_sound_playback" } });
}
function m(e) {
    T("NotAllowedError" === e.name ? "autoplay_blocked" : "generic", e);
}
u.isPlatformEmbedded && (c.Ay.addChangeListener(p), p());
let g = class {
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
                    this.trackNotificationFailure && m(e);
                });
        });
    }
    play() {
        this.ensureAudio().then((e) => {
            (e.loop = !1),
                e.play().catch((e) => {
                    this.trackNotificationFailure && m(e);
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
                (e.onerror = null), e.pause(), (e.src = "");
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
                                u.isPlatformEmbedded && i.setSinkId(this.outputChannel === E.a.DEFAULT ? A : I),
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
                            this.trackNotificationFailure && T(e, n), t(n);
                        }),
                        (i.onended = () => this.destroyAudio()),
                        i.load();
                })),
            this._audio
        );
    }
};
