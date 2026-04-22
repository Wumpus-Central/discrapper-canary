"use strict";
n.d(t, { B: () => l, G: () => o });
var r = n(311907),
    i = n(153488),
    s = n(531685);
n(595);
var a = n(652215);
function o() {
    var e, t;
    return (
        (e = (0, r.bG)([s.A], () => s.A.windowSize().width)),
        (t = (0, r.bG)([i.A], () => i.A.hasConsented(a.YAq.PERSONALIZATION))),
        e > 1200 && t
    );
}
function l() {
    var e, t;
    return (e = s.A.windowSize().width), (t = i.A.hasConsented(a.YAq.PERSONALIZATION)), e > 1200 && t;
}
