n.d(t, {
    GC: () => _,
    _X: () => m,
    br: () => f,
    em: () => h,
    jU: () => g,
});
var r = n(13245),
    i = n(371651),
    l = n(610394),
    a = n(998502),
    s = n(13140),
    o = n(996106),
    c = n(914946),
    u = n(186901),
    d = n(981631);
let p = ["207646673902501888"];
function f(e) {
    return null != e && !!i.default.isOverlayOOPEnabledForPid(e) && l.Z.isReady(e);
}
function g(e) {
    return null == e
        ? {
              lock: d.VqG,
              context: d.IlC.APP,
          }
        : f(e)
          ? (r.Z.setInputLocked(!1, e),
            {
                lock() {
                    r.Z.setInputLocked(!0, e);
                },
                context: d.IlC.POPOUT,
            })
          : (a.ZP.focus(null, !0),
            {
                lock() {
                    a.ZP.setForegroundProcess(e);
                },
                context: d.IlC.APP,
            });
}
let h = async (e, t, n) => {
        if (((0, c.YK)(e, t), (null == n || "" === n) && (0, c.s9)(t)))
            return (e.authorization.scopes = [u.cE, u.CN]), Promise.resolve();
        if (null == n || "" === n)
            return Promise.reject(new o.Z({ closeCode: d.$VG.INVALID_CLIENTID }, "No Client ID Specified"));
        let r = a.ZP.releaseChannel !== d.R5N.CANARY && !p.includes(n) && e.transport !== u.He.POST_MESSAGE;
        return await (0, c.vv)(n, r), (0, c.YS)(e, n, t);
    },
    m = () =>
        (0, c.tr)((e) => {
            let t = [];
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = e.modeOptions.shortcut.map((e) => {
                        var t;
                        return {
                            type: e[0],
                            code: e[1],
                            name: null != (t = (0, s.H9)(e)) ? t : "unknown",
                        };
                    })),
                t
            );
        }),
    _ = (e) =>
        (0, c.FJ)(e, (e) => {
            let t = "";
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = (0, s.BB)(e.modeOptions.shortcut)),
                t
            );
        });
