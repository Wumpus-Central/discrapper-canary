(n.d(t, {
    Y: () => v,
    a: () => b
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(846027),
    u = n(906732),
    d = n(131951),
    p = n(626135),
    f = n(981631),
    m = n(65154),
    g = n(521361);
function _(e) {
    let { label: t, Icon: n } = e;
    return (0, r.jsxs)('div', {
        className: g.selectedDevice,
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
function v() {
    let { analyticsLocations: e } = (0, u.ZP)(),
        { canSetInputDevice: t, inputDeviceId: n } = (0, o.cj)([d.Z], () => ({
            canSetInputDevice: d.Z.supports(m.AN.AUDIO_INPUT_DEVICE),
            inputDeviceId: d.Z.getInputDeviceId()
        })),
        l = (0, o.e7)([d.Z], () => d.Z.getInputDevices()),
        v = i.useCallback(
            (t) => {
                var n;
                (c.Z.setInputDevice(t, { analyticsLocations: e }),
                    p.default.track(f.rMx.VOICE_FILTER_MIC_SELECTOR_INPUT_SELECTED, {
                        input_mode: t,
                        active_voice_filter_id: null != (n = d.Z.getActiveVoiceFilter()) ? n : null
                    }));
            },
            [e]
        ),
        b = i.useCallback(() => {
            var e;
            p.default.track(f.rMx.VOICE_FILTER_MIC_SELECTOR_OPENED, { active_voice_filter_id: null != (e = d.Z.getActiveVoiceFilter()) ? e : null });
        }, []);
    return (0, r.jsx)(s.q4e, {
        value: n,
        onOpen: b,
        onChange: v,
        options: a().map(l, (e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        }),
        isDisabled: !t,
        look: s.qQH.FILLED,
        className: g.selector,
        popoutPosition: 'top',
        renderOptionValue: (e) => {
            let [t] = e;
            return (0, r.jsx)(_, {
                label: t.label,
                Icon: s.S6n
            });
        }
    });
}
function b() {
    let { analyticsLocations: e } = (0, u.ZP)(),
        { canSetOutputDevice: t, outputDeviceId: n } = (0, o.cj)([d.Z], () => ({
            canSetOutputDevice: d.Z.supports(m.AN.AUDIO_OUTPUT_DEVICE),
            outputDeviceId: d.Z.getOutputDeviceId()
        })),
        i = (0, o.e7)([d.Z], () => d.Z.getOutputDevices());
    return (0, r.jsx)(s.q4e, {
        value: n,
        onChange: (t) => c.Z.setOutputDevice(t, { analyticsLocations: e }),
        options: a().map(i, (e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        }),
        isDisabled: !t,
        look: s.qQH.FILLED,
        className: g.selector,
        popoutPosition: 'top',
        renderOptionValue: (e) => {
            let [t] = e;
            return (0, r.jsx)(_, {
                label: t.label,
                Icon: s.VWR
            });
        }
    });
}
