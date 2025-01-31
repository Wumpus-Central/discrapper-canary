n.d(t, {
    A: () => r,
    P: () => a
});
var i = n(576838);
function r(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let r = e / n,
        a = i.Z.getCurrentConfig({ location: 'perceptualToAmplitude' });
    return (t = r < 1 && a.gamma >= 0 ? Math.pow(r, a.gamma) : Math.pow(10, ((r - 1) * (r > 1 ? a.boostRange : a.attenuationRange)) / 20)) * n;
}
function a(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let r = e / n,
        a = i.Z.getCurrentConfig({ location: 'amplitudeToPerceptual' });
    if (r < 1 && a.gamma >= 0) t = Math.pow(r, 1 / a.gamma);
    else {
        let e = 20 * Math.log10(r);
        t = e / (e > 0 ? a.boostRange : a.attenuationRange) + 1;
    }
    return t * n;
}
