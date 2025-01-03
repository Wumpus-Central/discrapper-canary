n(47120);
var i = n(243814),
    r = n(120960),
    l = n(996106),
    a = n(452426),
    s = n(186901),
    o = n(981631),
    c = n(65154);
t.Z = {
    [o.Etm.SET_CERTIFIED_DEVICES]: {
        scope: {
            [s.Gp.ANY]: [i.x.RPC, s.lH]
        },
        validation: (e) =>
            (0, a.Z)(e)
                .required()
                .keys({
                    devices: e.array().items(
                        (0, a.Z)(e).keys({
                            type: e.string().required().valid([c.h7.AUDIO_INPUT, c.h7.AUDIO_OUTPUT, c.h7.VIDEO_INPUT]),
                            id: e.string().required().min(1),
                            vendor: (0, a.Z)(e)
                                .required()
                                .keys({
                                    name: e.string().min(1),
                                    url: e.string().min(1)
                                }),
                            model: (0, a.Z)(e)
                                .required()
                                .keys({
                                    name: e.string().min(1),
                                    url: e.string().min(1)
                                }),
                            related: e.array().items(e.string().min(1)),
                            echo_cancellation: e.boolean(),
                            noise_suppression: e.boolean(),
                            automatic_gain_control: e.boolean(),
                            hardware_mute: e.boolean()
                        })
                    )
                }),
        handler(e) {
            let {
                socket: t,
                args: { devices: n }
            } = e;
            if (null == t.application.id) throw new l.Z({ errorCode: o.lTL.INVALID_COMMAND }, 'No application.');
            (0, r.N)(
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
                    hardwareMute: e.hardware_mute
                }))
            );
        }
    }
};
