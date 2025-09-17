o.d(t, { Z: () => c });
var i = o(311473),
    n = o(131951),
    a = o(626135);
async function c(e, t) {
    let { rating: o, category: c, reasonCode: l, reasonDescription: r, variant: _, feedback: s, analyticsData: d } = t,
        u = n.Z.getSettings(),
        b = n.Z.getInputDeviceId(),
        m = n.Z.getInputDevices()[b],
        p = n.Z.getOutputDeviceId(),
        v = n.Z.getOutputDevices()[p],
        g = n.Z.getVideoDeviceId(),
        h = n.Z.getVideoDevices()[g],
        f = n.Z.getNoiseCancellation(),
        y = n.Z.getMediaEngine().getAudioSubsystem(),
        O = n.Z.getMediaEngine().getAudioLayer(),
        C = await i.Z.getKrispModel();
    a.default.track(
        e,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(o);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(o).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(o, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = o[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })(
            {
                rating: null != o ? o : "no response",
                category: c,
                reason_code: l,
                reason_description: r,
                reason_variant: _,
                feedback: s,
                audio_input_mode: u.mode,
                automatic_audio_input_sensitivity_enabled: u.modeOptions.autoThreshold,
                audio_input_sensitivity: u.modeOptions.threshold,
                vad_use_advanced_voice_activity: u.modeOptions.vadUseKrisp,
                echo_cancellation_enabled: u.echoCancellation,
                noise_suppression_enabled: u.noiseSuppression,
                automatic_gain_control_enabled: u.automaticGainControl,
                voice_output_volume: u.outputVolume,
                noise_cancellation_enabled: f,
                input_device_name: null == m ? void 0 : m.name,
                output_device_name: null == v ? void 0 : v.name,
                video_device_name: null == h ? void 0 : h.name,
                audio_subsystem: y,
                audio_layer: O,
                automatic_audio_subsystem: u.automaticAudioSubsystem,
                krisp_nc_model: C,
            },
            d,
        ),
    );
}
