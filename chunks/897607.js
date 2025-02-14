n.d(t, { Z: () => p }), n(47120);
var i = n(200651);
n(192379);
var l = n(392711),
    r = n.n(l),
    a = n(481060),
    s = n(463395),
    o = n(820486),
    d = n(131951),
    c = n(65154);
let u = new Set(['DisplayPort']),
    h = !1;
function m() {
    let e;
    if (h) return;
    let t = d.Z.getInputDeviceId(),
        l = d.Z.getOutputDeviceId();
    if (o.Z.getState().neverShowModal || r().isEmpty(o.Z.lastDeviceConnected)) return;
    let m = (0, o.X)(d.Z.getInputDevices()[t]),
        p = (0, o.X)(d.Z.getOutputDevices()[l]);
    if (r().some(o.Z.lastDeviceConnected, (e) => u.has(e.displayName) || e.displayName === m || e.displayName === p)) return;
    let g = r().some(o.Z.lastDeviceConnected, (e) => s.Z.isCertified(o.Z.inputDevices[e.displayName]) || s.Z.isCertified(o.Z.outputDevices[e.displayName]));
    if (((t === c.w5 && o.Z.lastInputSystemDevice.justChanged) || (l === c.w5 && o.Z.lastOutputSystemDevice.justChanged)) && !g) return;
    let _ = r().first(Object.keys(o.Z.lastDeviceConnected)),
        f = null != _ && '' !== _ ? o.Z.lastDeviceConnected[_] : null;
    null != f &&
        (o.Z.initialized && null != _ && (s.Z.isCertified(o.Z.inputDevices[_]) ? (e = s.Z.getCertifiedDevice(o.Z.inputDevices[_])) : s.Z.isCertified(o.Z.outputDevices[_]) && (e = s.Z.getCertifiedDevice(o.Z.outputDevices[_]))),
        (h = !0),
        (0, a.ZDy)(async () => {
            let { default: t } = await n.e('83536').then(n.bind(n, 43991));
            return (n) => {
                let { transitionState: l, onClose: r } = n;
                return (0, i.jsx)(t, {
                    device: f,
                    certifiedDeviceMetadata: e,
                    transitionState: l,
                    onClose: () => ((h = !1), r())
                });
            };
        }));
}
let p = {
    init() {
        o.Z.addChangeListener(m);
    }
};
