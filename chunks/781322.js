function r() {
    return "u" < typeof navigator
        ? { userAgent: "", platform: "", maxTouchPoints: 0 }
        : { userAgent: navigator.userAgent, platform: navigator.platform, maxTouchPoints: navigator.maxTouchPoints };
}
function n() {
    return "u" < typeof navigator ? "" : navigator.userAgent;
}
i.d(t, { n: () => r, t: () => n });
