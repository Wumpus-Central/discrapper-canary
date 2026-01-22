n.d(t, {
    B: () => l,
    G: () => o,
});
var r = n(311907),
    i = n(153488),
    a = n(531685);
n(595);
var s = n(652215);

function o() {
    return c(
        (0, r.bG)([a.A], () => a.A.windowSize().width),
        (0, r.bG)([i.A], () => i.A.hasConsented(s.YAq.PERSONALIZATION)),
    );
}

function l() {
    return c(a.A.windowSize().width, i.A.hasConsented(s.YAq.PERSONALIZATION));
}

function c(e, t) {
    return e > 1200 && t;
}
