r.d(n, {
    A: function () {
        return a;
    },
    P: function () {
        return o;
    }
});
var i = r(576838);
function a(e) {
    let n,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let a = e / r,
        o = i.Z.getCurrentConfig({ location: 'perceptualToAmplitude' });
    return (n = a < 1 && o.gamma >= 0 ? Math.pow(a, o.gamma) : Math.pow(10, ((a - 1) * (a > 1 ? o.boostRange : o.attenuationRange)) / 20)) * r;
}
function o(e) {
    let n,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
    if (0 === e) return 0;
    let a = e / r,
        o = i.Z.getCurrentConfig({ location: 'amplitudeToPerceptual' });
    if (a < 1 && o.gamma >= 0) n = Math.pow(a, 1 / o.gamma);
    else {
        let e = 20 * Math.log10(a);
        n = e / (e > 0 ? o.boostRange : o.attenuationRange) + 1;
    }
    return n * r;
}
