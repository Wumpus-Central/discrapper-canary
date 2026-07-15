n.r(s), n.d(s, { OpenViduRecordingProvider: () => r });
var t = n(723246),
    r = class {
        async connect(e) {
            let { OpenVidu: s } = await (0, t.t)(),
                n = (function () {
                    let e = `inc_rec_${Math.random().toString(36).slice(2)}`,
                        s = document.getElementById(e);
                    if (s) return { id: e, element: s };
                    let n = document.createElement("div");
                    return (n.id = e), (n.style.display = "none"), document.body.appendChild(n), { id: e, element: n };
                })(),
                r = new s(),
                i = r.initSession(),
                o = e.stream.getVideoTracks()[0],
                a = e.stream.getAudioTracks()[0],
                d = void 0 !== a,
                c = r.initPublisher(n.id, {
                    publishAudio: d,
                    audioSource: !!d && a,
                    videoSource: o ?? !1,
                    frameRate: 30,
                });
            i.on("exception", (s) => {
                e.events?.onSessionException?.({ name: s?.name, message: s?.message, sessionId: i.sessionId });
            }),
                c.on("streamCreated", () => {
                    e.events?.onPublisherCreated?.({ sessionId: i.sessionId, streamId: c.stream?.streamId });
                }),
                await i.connect(e.sessionToken),
                e.events?.onSessionConnected?.(i.sessionId);
            try {
                await i.publish(c);
            } catch (n) {
                let s = n instanceof Error ? n.message : String(n);
                throw (
                    (e.events?.onPublisherError?.({ message: s, sessionId: i.sessionId, streamId: c.stream?.streamId }),
                    n)
                );
            }
            return {
                sessionId: i.sessionId,
                publisher: {
                    getStreamId: () => c.stream?.streamId,
                    replaceVideoTrack: async (e) => {
                        await c.replaceTrack(e);
                    },
                    destroy: () => {},
                },
                disconnect: async () => {
                    try {
                        i.disconnect(),
                            e.stream.getTracks().forEach((e) => {
                                e.stop();
                            });
                    } finally {
                        e.events?.onSessionDisconnected?.(i.sessionId),
                            n.element.parentNode && n.element.parentNode.removeChild(n.element);
                    }
                },
            };
        }
    };
