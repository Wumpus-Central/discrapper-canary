function i() {
    return "u" < typeof navigator
        ? { userAgent: "", platform: "", maxTouchPoints: 0 }
        : { userAgent: navigator.userAgent, platform: navigator.platform, maxTouchPoints: navigator.maxTouchPoints };
}
function e(l = 1280, t = 720) {
    return "u" < typeof window
        ? { outerWidth: l, outerHeight: t, innerWidth: l, innerHeight: t }
        : {
              outerWidth: window.outerWidth,
              outerHeight: window.outerHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
          };
}
d.d(t, { n: () => e, t: () => i });
