n.d(t, { A: () => u }), n(896048);
var r = n(179771),
    i = n(10584),
    l = n(636401),
    a = n(629471),
    s = n(613057),
    o = n(652215),
    c = n(731854);
let u = {
    [o.e$_.SET_CERTIFIED_DEVICES]: {
        scope: {
            [s.sm.ANY]: [r.F.RPC, s.hj],
        },
        validation: (e) =>
            (0, a.A)(e)
                .required()
                .keys({
                    devices: e.array().items(
                        (0, a.A)(e).keys({
                            type: e.string().required().valid([c.oh.AUDIO_INPUT, c.oh.AUDIO_OUTPUT, c.oh.VIDEO_INPUT]),
                            id: e.string().required().min(1),
                            vendor: (0, a.A)(e)
                                .required()
                                .keys({
                                    name: e.string().min(1),
                                    url: e.string().min(1),
                                }),
                            model: (0, a.A)(e)
                                .required()
                                .keys({
                                    name: e.string().min(1),
                                    url: e.string().min(1),
                                }),
                            related: e.array().items(e.string().min(1)),
                            echo_cancellation: e.boolean(),
                            noise_suppression: e.boolean(),
                            automatic_gain_control: e.boolean(),
                            hardware_mute: e.boolean(),
                        }),
                    ),
                }),
        handler(e) {
            let {
                socket: t,
                args: { devices: n },
            } = e;
            if (null == t.application.id) throw new l.A({ errorCode: o.Lw6.INVALID_COMMAND }, "No application.");
            (0, i.z)(
                t.application.id,
                n.map((e) => ({
                    type: e.type,
                    id: e.id,
                    vendor: e.vendor,
                    model: e.model,
                    related: e.related.filter((e) => n.some((t) => t.id === e)),
                    echoCancellation: e.echo_cancellation,
                    noiseSuppression: e.noise_suppression,
                    automaticGainControl: e.automatic_gain_control,
                    hardwareMute: e.hardware_mute,
                })),
            );
        },
    },
};
