n.d(t, {
    Y: () => m,
    a: () => f
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(392711),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(846027),
    c = n(906732),
    d = n(131951),
    u = n(65154),
    h = n(603046);
function p(e) {
    let { label: t, Icon: n } = e;
    return (0, i.jsxs)('div', {
        className: h.selectedDevice,
        children: [
            (0, i.jsx)(n, {
                size: 'custom',
                width: 20,
                height: 20,
                color: s.TVs.colors.INTERACTIVE_MUTED
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'text-secondary',
                children: t
            })
        ]
    });
}
function m() {
    let { analyticsLocations: e } = (0, c.ZP)(),
        { canSetInputDevice: t, inputDeviceId: n } = (0, r.cj)([d.Z], () => ({
            canSetInputDevice: d.Z.supports(u.AN.AUDIO_INPUT_DEVICE),
            inputDeviceId: d.Z.getInputDeviceId()
        })),
        l = (0, r.e7)([d.Z], () => d.Z.getInputDevices());
    return (0, i.jsx)(s.q4e, {
        value: n,
        onChange: (t) => o.Z.setInputDevice(t, { analyticsLocations: e }),
        options: a().map(l, (e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        }),
        isDisabled: !t,
        look: s.qQH.CUSTOM,
        className: h.selector,
        popoutPosition: 'top',
        renderOptionValue: (e) => {
            let [t] = e;
            return (0, i.jsx)(p, {
                label: t.label,
                Icon: s.S6n
            });
        }
    });
}
function f() {
    let { analyticsLocations: e } = (0, c.ZP)(),
        { canSetOutputDevice: t, outputDeviceId: n } = (0, r.cj)([d.Z], () => ({
            canSetOutputDevice: d.Z.supports(u.AN.AUDIO_OUTPUT_DEVICE),
            outputDeviceId: d.Z.getOutputDeviceId()
        })),
        l = (0, r.e7)([d.Z], () => d.Z.getOutputDevices());
    return (0, i.jsx)(s.q4e, {
        value: n,
        onChange: (t) => o.Z.setOutputDevice(t, { analyticsLocations: e }),
        options: a().map(l, (e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        }),
        isDisabled: !t,
        look: s.qQH.CUSTOM,
        className: h.selector,
        popoutPosition: 'top',
        renderOptionValue: (e) => {
            let [t] = e;
            return (0, i.jsx)(p, {
                label: t.label,
                Icon: s.VWR
            });
        }
    });
}
