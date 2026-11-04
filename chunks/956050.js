var i = n(367974);
(n(696016),
    n.d(
        t,
        {},
        {
            m: async function (e, t) {
                let n,
                    r = document.createElement("video");
                ((r.volume = 0), (r.crossOrigin = "anonymous"), (r.src = e), (r.currentTime = t));
                try {
                    (await Promise.race([
                        r.play(),
                        new Promise((e, t) => {
                            n = setTimeout(() => t(Error("createThumbnailFromVideo: playback start timed out")), 5e3);
                        }),
                    ]),
                        r.pause());
                    let e = 640 / r.videoWidth,
                        t = 360 / r.videoHeight,
                        i = Math.min(e, t),
                        a = r.videoWidth * i,
                        s = r.videoHeight * i,
                        l = document.createElement("canvas");
                    ((l.width = a), (l.height = s));
                    let o = l.getContext("2d");
                    if (null == o) throw Error("Could not create canvas context");
                    return (
                        o.drawImage(r, 0, 0, r.videoWidth, r.videoHeight, 0, 0, a, s), l.toDataURL("image/jpeg", 0.9)
                    );
                } finally {
                    (null != n && clearTimeout(n), (0, i.A)(r));
                }
            },
        },
    ));
