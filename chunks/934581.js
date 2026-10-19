s.d(t, { A: () => n });
var a = s(284009),
    i = s.n(a);
function n(e, t) {
    if ((i()(e.length >= t, "Waveform smaller than samples"), e.length === t)) return e;
    let s = e.length / t,
        a = [],
        n = 0;
    for (; a.length < t;) {
        let t = Math.round((a.length + 1) * s),
            i = 0,
            l = 0;
        for (let s = n; s < t && s < e.length; s++) ((i += e[s]), l++);
        ((a[a.length] = i / l), (n = t));
    }
    return a;
}
