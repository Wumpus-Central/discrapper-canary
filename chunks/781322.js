function r() {
    return "u" < typeof navigator
        ? { userAgent: "", platform: "", maxTouchPoints: 0 }
        : { userAgent: navigator.userAgent, platform: navigator.platform, maxTouchPoints: navigator.maxTouchPoints };
}
function n(e = 1280, t = 720) {
    return "u" < typeof window
        ? { outerWidth: e, outerHeight: t, innerWidth: e, innerHeight: t }
        : {
              outerWidth: window.outerWidth,
              outerHeight: window.outerHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
          };
}
function o() {
    return "u" < typeof navigator ? "" : navigator.userAgent;
}
i.d(t, { n: () => r, r: () => n, t: () => o });
