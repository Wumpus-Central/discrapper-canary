n.d(t, { Z: () => f }), n(47120);
var r = n(200651);
n(192379);
var i = n(392711),
    l = n.n(i),
    a = n(481060),
    o = n(463395),
    s = n(820486),
    c = n(131951),
    u = n(65154);
let d = new Set(['DisplayPort']),
    p = !1;
function h() {
    let e;
    if (p) return;
    let t = c.Z.getInputDeviceId(),
        i = c.Z.getOutputDeviceId();
    if (s.Z.getState().neverShowModal || l().isEmpty(s.Z.lastDeviceConnected)) return;
    let h = (0, s.X)(c.Z.getInputDevices()[t]),
        f = (0, s.X)(c.Z.getOutputDevices()[i]);
    if (l().some(s.Z.lastDeviceConnected, (e) => d.has(e.displayName) || e.displayName === h || e.displayName === f)) return;
    let g = l().some(s.Z.lastDeviceConnected, (e) => o.Z.isCertified(s.Z.inputDevices[e.displayName]) || o.Z.isCertified(s.Z.outputDevices[e.displayName]));
    if (((t === u.w5 && s.Z.lastInputSystemDevice.justChanged) || (i === u.w5 && s.Z.lastOutputSystemDevice.justChanged)) && !g) return;
    let m = l().first(Object.keys(s.Z.lastDeviceConnected)),
        b = null != m && '' !== m ? s.Z.lastDeviceConnected[m] : null;
    null != b &&
        (s.Z.initialized && null != m && (o.Z.isCertified(s.Z.inputDevices[m]) ? (e = o.Z.getCertifiedDevice(s.Z.inputDevices[m])) : o.Z.isCertified(s.Z.outputDevices[m]) && (e = o.Z.getCertifiedDevice(s.Z.outputDevices[m]))),
        (p = !0),
        (0, a.ZDy)(async () => {
            let { default: t } = await n.e('83536').then(n.bind(n, 43991));
            return (n) => {
                let { transitionState: i, onClose: l } = n;
                return (0, r.jsx)(t, {
                    device: b,
                    certifiedDeviceMetadata: e,
                    transitionState: i,
                    onClose: () => ((p = !1), l())
                });
            };
        }));
}
let f = {
    init() {
        s.Z.addChangeListener(h);
    }
};
