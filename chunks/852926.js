n.d(t, {
    GC: () => _,
    _X: () => b,
    br: () => f,
    em: () => m,
    jU: () => g
});
var r = n(13245),
    i = n(615287),
    l = n(371651),
    a = n(610394),
    o = n(998502),
    s = n(13140),
    c = n(996106),
    u = n(914946),
    d = n(186901),
    p = n(981631);
let h = ['207646673902501888'];
function f(e) {
    return null != e && l.default.isOverlayOOPEnabledForPid(e) && a.ZP.isReady(e) && a.ZP.getOverlayState(e) === i.mM.OVERLAY_RENDERING;
}
function g(e) {
    return null == e
        ? {
              lock: p.VqG,
              context: p.IlC.APP
          }
        : f(e)
          ? (r.Z.setInputLocked(!1, e),
            {
                lock() {
                    r.Z.setInputLocked(!0, e);
                },
                context: p.IlC.POPOUT
            })
          : (o.ZP.focus(null, !0),
            {
                lock() {
                    o.ZP.setForegroundProcess(e);
                },
                context: p.IlC.APP
            });
}
let m = async (e, t, n) => {
        if (((0, u.YK)(e, t), (null == n || '' === n) && (0, u.s9)(t))) return (e.authorization.scopes = [d.cE, d.CN]), Promise.resolve();
        if (null == n || '' === n) return Promise.reject(new c.Z({ closeCode: p.$VG.INVALID_CLIENTID }, 'No Client ID Specified'));
        let r = o.ZP.releaseChannel !== p.R5N.CANARY && !h.includes(n) && e.transport !== d.He.POST_MESSAGE;
        return await (0, u.vv)(n, r), (0, u.YS)(e, n, t);
    },
    b = () =>
        (0, u.tr)((e) => {
            let t = [];
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = e.modeOptions.shortcut.map((e) => {
                        var t;
                        return {
                            type: e[0],
                            code: e[1],
                            name: null != (t = (0, s.H9)(e)) ? t : 'unknown'
                        };
                    })),
                t
            );
        }),
    _ = (e) =>
        (0, u.FJ)(e, (e) => {
            let t = '';
            return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = (0, s.BB)(e.modeOptions.shortcut)), t;
        });
