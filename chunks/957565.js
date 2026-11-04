var i = n(723702),
    r = n(856383),
    a = n(253400);
let s = i.isPlatformEmbedded && null != a.Ay.copy,
    l = "function" == typeof window.navigator?.clipboard?.writeText,
    o = s || l;
n.d(
    t,
    {},
    {
        C: async function (e, t, n) {
            if (!o) return void n?.(Error("Clipboard API not supported."));
            try {
                (s ? await a.Ay.copy(e) : await window.navigator.clipboard.writeText(e), t?.());
            } catch (e) {
                (n?.(e), r.A.captureException(e));
            }
        },
        p5: o,
    },
);
