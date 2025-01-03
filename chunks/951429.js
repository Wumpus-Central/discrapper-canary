r.d(n, {
    A: function () {
        return a;
    },
    P: function () {
        return s;
    }
});
var i = r(576838);
function a(e) {
    let n,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let a = e / r,
        s = i.Z.getCurrentConfig({ location: 'perceptualToAmplitude' });
    return (n = a < 1 && s.gamma >= 0 ? Math.pow(a, s.gamma) : Math.pow(10, ((a - 1) * (a > 1 ? s.boostRange : s.attenuationRange)) / 20)) * r;
}
function s(e) {
    let n,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let a = e / r,
        s = i.Z.getCurrentConfig({ location: 'amplitudeToPerceptual' });
    if (a < 1 && s.gamma >= 0) n = Math.pow(a, 1 / s.gamma);
    else {
        let e = 20 * Math.log10(a);
        n = e / (e > 0 ? s.boostRange : s.attenuationRange) + 1;
    }
    return n * r;
}
