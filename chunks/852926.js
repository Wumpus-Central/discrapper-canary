n.d(t, {
    GC: () => m,
    _X: () => f,
    em: () => g,
    jU: () => h
});
var r = n(13245),
    i = n(371651),
    l = n(808506),
    o = n(998502),
    a = n(13140),
    s = n(996106),
    c = n(914946),
    u = n(186901),
    d = n(981631);
let p = ['207646673902501888'];
function h(e) {
    if (null == e)
        return {
            lock: d.VqG,
            context: d.IlC.APP
        };
    let t = i.default.isOverlayOOPEnabledForPid(e);
    return l.Z.isReady(e)
        ? (r.Z.setInputLocked(!1, e),
          {
              lock() {
                  r.Z.setInputLocked(!0, e);
              },
              context: t ? d.IlC.POPOUT : d.IlC.OVERLAY
          })
        : (o.ZP.focus(null, !0),
          {
              lock() {
                  o.ZP.setForegroundProcess(e);
              },
              context: d.IlC.APP
          });
}
let g = async (e, t, n) => {
        if (((0, c.YK)(e, t), (null == n || '' === n) && (0, c.s9)(t))) return (e.authorization.scopes = [u.cE, u.CN]), Promise.resolve();
        if (null == n || '' === n) return Promise.reject(new s.Z({ closeCode: d.$VG.INVALID_CLIENTID }, 'No Client ID Specified'));
        let r = o.ZP.releaseChannel !== d.R5N.CANARY && !p.includes(n) && e.transport !== u.He.POST_MESSAGE;
        return await (0, c.vv)(n, r), (0, c.YS)(e, n, t);
    },
    f = () =>
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
                            name: null !== (t = (0, a.H9)(e)) && void 0 !== t ? t : 'unknown'
                        };
                    })),
                t
            );
        }),
    m = (e) =>
        (0, c.FJ)(e, (e) => {
            let t = '';
            return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = (0, a.BB)(e.modeOptions.shortcut)), t;
        });
