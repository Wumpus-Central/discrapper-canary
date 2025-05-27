o.d(t, { Z: () => i });
var n = o(131951),
    r = o(626135);
function i(e, t) {
    let { rating: o, category: i, reasonCode: l, reasonDescription: a, variant: s, feedback: c, analyticsData: u } = t,
        d = n.Z.getSettings(),
        b = n.Z.getInputDeviceId(),
        m = n.Z.getInputDevices()[b],
        p = n.Z.getOutputDeviceId(),
        _ = n.Z.getOutputDevices()[p],
        f = n.Z.getVideoDeviceId(),
        h = n.Z.getVideoDevices()[f],
        g = n.Z.getNoiseCancellation(),
        O = n.Z.getMediaEngine().getAudioSubsystem(),
        v = n.Z.getMediaEngine().getAudioLayer();
    r.default.track(
        e,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(o);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(o).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(o, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = o[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                rating: null != o ? o : 'no response',
                category: i,
                reason_code: l,
                reason_description: a,
                reason_variant: s,
                feedback: c,
                audio_input_mode: d.mode,
                automatic_audio_input_sensitivity_enabled: d.modeOptions.autoThreshold,
                audio_input_sensitivity: d.modeOptions.threshold,
                echo_cancellation_enabled: d.echoCancellation,
                noise_suppression_enabled: d.noiseSuppression,
                automatic_gain_control_enabled: d.automaticGainControl,
                voice_output_volume: d.outputVolume,
                noise_cancellation_enabled: g,
                input_device_name: null == m ? void 0 : m.name,
                output_device_name: null == _ ? void 0 : _.name,
                video_device_name: null == h ? void 0 : h.name,
                audio_subsystem: O,
                audio_layer: v,
                automatic_audio_subsystem: d.automaticAudioSubsystem
            },
            u
        )
    );
}
