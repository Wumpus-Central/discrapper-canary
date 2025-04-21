n.d(t, { F: () => l });
var r = n(70956),
    i = n(388032);
function l(e) {
    let t = (e - Date.now()) / r.Z.Millis.HOUR;
    return t > 24 ? i.intl.formatToPlainString(i.t['g9s+dH'], { numDays: Math.floor(t / 24) }) : t >= 1 ? i.intl.formatToPlainString(i.t.k9v339, { numHours: Math.floor(t) }) : i.intl.formatToPlainString(i.t['/d0GmZ'], { numMinutes: Math.floor(60 * t) });
}
