n.d(t, { Z: () => a });
var i = n(131951),
    o = n(626135);
function a(e, t) {
    let { rating: n, reasonCode: a, reasonDescription: l, feedback: s, analyticsData: c } = t,
        r = i.Z.getSettings(),
        u = i.Z.getInputDeviceId(),
        d = i.Z.getInputDevices()[u],
        _ = i.Z.getOutputDeviceId(),
        m = i.Z.getOutputDevices()[_],
        b = i.Z.getVideoDeviceId(),
        p = i.Z.getVideoDevices()[b],
        x = i.Z.getNoiseCancellation(),
        h = i.Z.getMediaEngine().getAudioSubsystem(),
        v = i.Z.getMediaEngine().getAudioLayer();
    o.default.track(
        e,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })(
            {
                rating: null != n ? n : 'no response',
                reason_code: a,
                reason_description: l,
                feedback: s,
                audio_input_mode: r.mode,
                automatic_audio_input_sensitivity_enabled: r.modeOptions.autoThreshold,
                audio_input_sensitivity: r.modeOptions.threshold,
                echo_cancellation_enabled: r.echoCancellation,
                noise_suppression_enabled: r.noiseSuppression,
                automatic_gain_control_enabled: r.automaticGainControl,
                voice_output_volume: r.outputVolume,
                noise_cancellation_enabled: x,
                input_device_name: null == d ? void 0 : d.name,
                output_device_name: null == m ? void 0 : m.name,
                video_device_name: null == p ? void 0 : p.name,
                audio_subsystem: h,
                audio_layer: v,
                automatic_audio_subsystem: r.automaticAudioSubsystem
            },
            c
        )
    );
}
