n.d(t, {
    A: () => i,
    P: () => o
});
var r = n(576838);
function i(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let i = e / n,
        o = r.Z.getCurrentConfig({ location: 'perceptualToAmplitude' });
    return (t = i < 1 && o.gamma >= 0 ? Math.pow(i, o.gamma) : Math.pow(10, ((i - 1) * (i > 1 ? o.boostRange : o.attenuationRange)) / 20)) * n;
}
function o(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let i = e / n,
        o = r.Z.getCurrentConfig({ location: 'amplitudeToPerceptual' });
    if (i < 1 && o.gamma >= 0) t = Math.pow(i, 1 / o.gamma);
    else {
        let e = 20 * Math.log10(i);
        t = e / (e > 0 ? o.boostRange : o.attenuationRange) + 1;
    }
    return t * n;
}
