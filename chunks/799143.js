n.d(t, {
    Y: () => h,
    a: () => v
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(392711),
    o = n.n(a),
    l = n(442837),
    s = n(481060),
    c = n(846027),
    d = n(906732),
    u = n(131951),
    _ = n(626135),
    m = n(981631),
    f = n(65154),
    p = n(521361);
function g(e) {
    let { label: t, Icon: n } = e;
    return (0, r.jsxs)('div', {
        className: p.selectedDevice,
        children: [
            (0, r.jsx)(n, {
                size: 'custom',
                width: 20,
                height: 20,
                color: s.TVs.colors.INTERACTIVE_MUTED
            }),
            (0, r.jsx)(s.Text, {
                lineClamp: 1,
                variant: 'text-md/normal',
                color: 'text-secondary',
                children: t
            })
        ]
    });
}
function h() {
    let { analyticsLocations: e } = (0, d.ZP)(),
        { canSetInputDevice: t, inputDeviceId: n } = (0, l.cj)([u.Z], () => ({
            canSetInputDevice: u.Z.supports(f.AN.AUDIO_INPUT_DEVICE),
            inputDeviceId: u.Z.getInputDeviceId()
        })),
        a = (0, l.e7)([u.Z], () => u.Z.getInputDevices()),
        h = i.useCallback(
            (t) => {
                var n;
                c.Z.setInputDevice(t, { analyticsLocations: e }),
                    _.default.track(m.rMx.VOICE_FILTER_MIC_SELECTOR_INPUT_SELECTED, {
                        input_mode: t,
                        active_voice_filter_id: null != (n = u.Z.getActiveVoiceFilter()) ? n : null
                    });
            },
            [e]
        ),
        v = i.useCallback(() => {
            var e;
            _.default.track(m.rMx.VOICE_FILTER_MIC_SELECTOR_OPENED, { active_voice_filter_id: null != (e = u.Z.getActiveVoiceFilter()) ? e : null });
        }, []);
    return (0, r.jsx)(s.q4e, {
        value: n,
        onOpen: v,
        onChange: h,
        options: o().map(a, (e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        }),
        isDisabled: !t,
        look: s.qQH.FILLED,
        className: p.selector,
        popoutPosition: 'top',
        renderOptionValue: (e) => {
            let [t] = e;
            return (0, r.jsx)(g, {
                label: t.label,
                Icon: s.S6n
            });
        }
    });
}
function v() {
    let { analyticsLocations: e } = (0, d.ZP)(),
        { canSetOutputDevice: t, outputDeviceId: n } = (0, l.cj)([u.Z], () => ({
            canSetOutputDevice: u.Z.supports(f.AN.AUDIO_OUTPUT_DEVICE),
            outputDeviceId: u.Z.getOutputDeviceId()
        })),
        i = (0, l.e7)([u.Z], () => u.Z.getOutputDevices());
    return (0, r.jsx)(s.q4e, {
        value: n,
        onChange: (t) => c.Z.setOutputDevice(t, { analyticsLocations: e }),
        options: o().map(i, (e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        }),
        isDisabled: !t,
        look: s.qQH.FILLED,
        className: p.selector,
        popoutPosition: 'top',
        renderOptionValue: (e) => {
            let [t] = e;
            return (0, r.jsx)(g, {
                label: t.label,
                Icon: s.VWR
            });
        }
    });
}
