n.d(t, {
    GC: function () {
        return f;
    },
    _X: function () {
        return g;
    },
    em: function () {
        return p;
    },
    jU: function () {
        return m;
    }
});
var i = n(13245),
    r = n(371651),
    l = n(808506),
    a = n(998502),
    s = n(13140),
    o = n(996106),
    c = n(914946),
    d = n(186901),
    u = n(981631);
let h = ['207646673902501888'];
function m(e) {
    if (null == e)
        return {
            lock: u.VqG,
            context: u.IlC.APP
        };
    let t = r.Z.isOverlayOOPEnabledForPid(e);
    return l.Z.isReady(e)
        ? (i.Z.setInputLocked(!1, e),
          {
              lock() {
                  i.Z.setInputLocked(!0, e);
              },
              context: t ? u.IlC.POPOUT : u.IlC.OVERLAY
          })
        : (a.ZP.focus(null, !0),
          {
              lock() {
                  a.ZP.setForegroundProcess(e);
              },
              context: u.IlC.APP
          });
}
let p = async (e, t, n) => {
        if (((0, c.YK)(e, t), (null == n || '' === n) && (0, c.s9)(t))) return (e.authorization.scopes = [d.cE, d.CN]), Promise.resolve();
        if (null == n || '' === n) return Promise.reject(new o.Z({ closeCode: u.$VG.INVALID_CLIENTID }, 'No Client ID Specified'));
        let i = a.ZP.releaseChannel !== u.R5N.CANARY && !h.includes(n) && e.transport !== d.He.POST_MESSAGE;
        return await (0, c.vv)(n, i), (0, c.fy)(e, n, t);
    },
    g = () =>
        (0, c.tr)((e) => {
            let t = [];
            if (null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut))
                t = e.modeOptions.shortcut.map((e) => {
                    var t;
                    return {
                        type: e[0],
                        code: e[1],
                        name: null !== (t = (0, s.H9)(e)) && void 0 !== t ? t : 'unknown'
                    };
                });
            return t;
        }),
    f = (e) =>
        (0, c.FJ)(e, (e) => {
            let t = '';
            return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = (0, s.BB)(e.modeOptions.shortcut)), t;
        });
