n(47120);
var i = n(200651);
n(192379);
var r = n(392711),
    l = n.n(r),
    a = n(481060),
    s = n(463395),
    o = n(820486),
    c = n(131951),
    d = n(65154);
let u = new Set(['DisplayPort']),
    h = !1;
function m() {
    let e;
    if (h) return;
    let t = c.Z.getInputDeviceId(),
        r = c.Z.getOutputDeviceId();
    if (o.Z.getState().neverShowModal || l().isEmpty(o.Z.lastDeviceConnected)) return;
    let m = (0, o.X)(c.Z.getInputDevices()[t]),
        p = (0, o.X)(c.Z.getOutputDevices()[r]);
    if (l().some(o.Z.lastDeviceConnected, (e) => u.has(e.displayName) || e.displayName === m || e.displayName === p)) return;
    let g = l().some(o.Z.lastDeviceConnected, (e) => s.Z.isCertified(o.Z.inputDevices[e.displayName]) || s.Z.isCertified(o.Z.outputDevices[e.displayName]));
    if (((t === d.w5 && o.Z.lastInputSystemDevice.justChanged) || (r === d.w5 && o.Z.lastOutputSystemDevice.justChanged)) && !g) return;
    let f = l().first(Object.keys(o.Z.lastDeviceConnected)),
        _ = null != f && '' !== f ? o.Z.lastDeviceConnected[f] : null;
    null != _ &&
        (o.Z.initialized && null != f && (s.Z.isCertified(o.Z.inputDevices[f]) ? (e = s.Z.getCertifiedDevice(o.Z.inputDevices[f])) : s.Z.isCertified(o.Z.outputDevices[f]) && (e = s.Z.getCertifiedDevice(o.Z.outputDevices[f]))),
        (h = !0),
        (0, a.openModalLazy)(async () => {
            let { default: t } = await n.e('83536').then(n.bind(n, 43991));
            return (n) => {
                let { transitionState: r, onClose: l } = n;
                return (0, i.jsx)(t, {
                    device: _,
                    certifiedDeviceMetadata: e,
                    transitionState: r,
                    onClose: () => ((h = !1), l())
                });
            };
        }));
}
t.Z = {
    init() {
        o.Z.addChangeListener(m);
    }
};
