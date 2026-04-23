n.d(t, { A: () => u });
var i = n(179771),
    r = n(10584),
    a = n(636401),
    l = n(629471),
    s = n(613057),
    o = n(652215),
    d = n(731854);
let u = {
    [o.e$_.SET_CERTIFIED_DEVICES]: {
        scope: { [s.sm.ANY]: [i.F.RPC, s.hj] },
        validation: (e) =>
            (0, l.A)(e)
                .required()
                .keys({
                    devices: e.array().items(
                        (0, l.A)(e).keys({
                            type: e.string().required().valid([d.oh.AUDIO_INPUT, d.oh.AUDIO_OUTPUT, d.oh.VIDEO_INPUT]),
                            id: e.string().required().min(1),
                            vendor: (0, l.A)(e)
                                .required()
                                .keys({ name: e.string().min(1), url: e.string().min(1) }),
                            model: (0, l.A)(e)
                                .required()
                                .keys({ name: e.string().min(1), url: e.string().min(1) }),
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
            if (null == t.application.id) throw new a.A({ errorCode: o.Lw6.INVALID_COMMAND }, "No application.");
            (0, r.z)(
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
