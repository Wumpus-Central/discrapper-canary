n.d(t, {
    Y: () => _,
    a: () => C
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(906732),
    u = n(131951),
    h = n(626135),
    p = n(981631),
    m = n(65154),
    f = n(603046);
function g(e) {
    let { label: t, Icon: n } = e;
    return (0, i.jsxs)('div', {
        className: f.selectedDevice,
        children: [
            (0, i.jsx)(n, {
                size: 'custom',
                width: 20,
                height: 20,
                color: o.TVs.colors.INTERACTIVE_MUTED
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-secondary',
                children: t
            })
        ]
    });
}
function _() {
    let { analyticsLocations: e } = (0, d.ZP)(),
        { canSetInputDevice: t, inputDeviceId: n } = (0, s.cj)([u.Z], () => ({
            canSetInputDevice: u.Z.supports(m.AN.AUDIO_INPUT_DEVICE),
            inputDeviceId: u.Z.getInputDeviceId()
        })),
        a = (0, s.e7)([u.Z], () => u.Z.getInputDevices()),
        _ = l.useCallback(
            (t) => {
                var n;
                c.Z.setInputDevice(t, { analyticsLocations: e }),
                    h.default.track(p.rMx.VOICE_FILTER_MIC_SELECTOR_INPUT_SELECTED, {
                        input_mode: t,
                        active_voice_filter_id: null !== (n = u.Z.getActiveVoiceFilter()) && void 0 !== n ? n : null
                    });
            },
            [e]
        ),
        C = l.useCallback(() => {
            var e;
            h.default.track(p.rMx.VOICE_FILTER_MIC_SELECTOR_OPENED, { active_voice_filter_id: null !== (e = u.Z.getActiveVoiceFilter()) && void 0 !== e ? e : null });
        }, []);
    return (0, i.jsx)(o.q4e, {
        value: n,
        onOpen: C,
        onChange: _,
        options: r().map(a, (e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        }),
        isDisabled: !t,
        look: o.qQH.CUSTOM,
        className: f.selector,
        popoutPosition: 'top',
        renderOptionValue: (e) => {
            let [t] = e;
            return (0, i.jsx)(g, {
                label: t.label,
                Icon: o.S6n
            });
        }
    });
}
function C() {
    let { analyticsLocations: e } = (0, d.ZP)(),
        { canSetOutputDevice: t, outputDeviceId: n } = (0, s.cj)([u.Z], () => ({
            canSetOutputDevice: u.Z.supports(m.AN.AUDIO_OUTPUT_DEVICE),
            outputDeviceId: u.Z.getOutputDeviceId()
        })),
        l = (0, s.e7)([u.Z], () => u.Z.getOutputDevices());
    return (0, i.jsx)(o.q4e, {
        value: n,
        onChange: (t) => c.Z.setOutputDevice(t, { analyticsLocations: e }),
        options: r().map(l, (e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        }),
        isDisabled: !t,
        look: o.qQH.CUSTOM,
        className: f.selector,
        popoutPosition: 'top',
        renderOptionValue: (e) => {
            let [t] = e;
            return (0, i.jsx)(g, {
                label: t.label,
                Icon: o.VWR
            });
        }
    });
}
