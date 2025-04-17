n.d(t, { F: () => a });
var r = n(70956),
    i = n(388032);
function a(e) {
    let t = (e - Date.now()) / r.Z.Millis.HOUR;
    return t > 24 ? i.NW.formatToPlainString(i.t['g9s+dH'], { numDays: Math.floor(t / 24) }) : t >= 1 ? i.NW.formatToPlainString(i.t.k9v339, { numHours: Math.floor(t) }) : i.NW.formatToPlainString(i.t['/d0GmZ'], { numMinutes: Math.floor(60 * t) });
}
