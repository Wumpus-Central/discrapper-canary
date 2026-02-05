"use strict";
n.d(t, { B: () => l, G: () => o });
var r = n(311907),
    i = n(153488),
    a = n(531685);
n(595);
var s = n(652215);
function o() {
    return u(
        (0, r.bG)([a.A], () => a.A.windowSize().width),
        (0, r.bG)([i.A], () => i.A.hasConsented(s.YAq.PERSONALIZATION)),
    );
}
function l() {
    return u(a.A.windowSize().width, i.A.hasConsented(s.YAq.PERSONALIZATION));
}
function u(e, t) {
    return e > 1200 && t;
}
