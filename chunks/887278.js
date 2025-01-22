r.d(n, {
    $1: function () {
        return E;
    },
    YT: function () {
        return b;
    },
    pn: function () {
        return I;
    }
});
var i,
    a = r(411104);
var o = r(570140),
    s = r(923928),
    l = r(593472),
    u = r(594190),
    c = r(77498),
    d = r(594174),
    f = r(626135),
    p = r(358085),
    h = r(998502),
    _ = r(789465),
    m = r(981631);
let g = {
    development: [0, 0, 0, 0],
    canary: [1, 0, 30, 10],
    ptb: [1, 0, 1005, 2],
    stable: [1, 0, 9001, 2]
};
function E() {
    var e;
    return !(null === h.ZP || void 0 === h.ZP ? void 0 : null === (e = h.ZP.isModuleVersionAtLeast) || void 0 === e ? void 0 : e.call(h.ZP, 'discord_hook', g));
}
async function v() {
    if (!(0, p.isWindows)()) return Promise.reject(Error('Hook is only available on Windows'));
    if (E()) return Promise.reject(Error('Hook module is too old'));
    await h.ZP.ensureModule('discord_hook');
    let e = await h.ZP.requireModule('discord_hook');
    return y(e), e;
}
function y(e) {
    if (null == e.setFlags) return;
    let n = 0,
        r = _.Z.getCurrentConfig({ location: 'edd7d3_1' }, { autoTrackExposure: !1 });
    r.enableCrashReporting && (console.log('Hook: Enabling crash reporting.'), (n |= 1));
    let i = d.default.getCurrentUser();
    null != i && (i.isStaff() || r.enableCrashTrigger) && (console.log('Hook: Enabling crash trigger.'), (n |= 2)), e.setFlags(n);
}
function b(e, n) {
    return v().then((r) => {
        var i;
        let a = null === (i = u.ZP.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
            d = c.Z.getGameByName(a),
            p = null;
        return new Promise((i) => {
            let c = (e, r) => {
                    f.default.track(m.rMx.HOOK_RESULT, {
                        game_name: a,
                        game_id: null == d ? null : d.id,
                        success: r,
                        error: e,
                        ...n
                    }),
                        null != p && (clearTimeout(p), (p = null)),
                        r ? i() : i((e = null != e ? e : 'Unknown hook error'));
                },
                h = u.ZP.getOverlayOptionsForPID(e),
                _ = {
                    ...l.r,
                    ...h,
                    elevate: u.ZP.shouldElevateProcessForPID(e)
                };
            null == _.allowHook || _.allowHook
                ? ((p = setTimeout(() => {
                      r.cancelAttachToProcess(e), c('Timed out waiting for hook response', !1);
                  }, 120000)),
                  r.attachToProcess(e, _, c),
                  o.Z.wait(() => s.Z.clearElevatedProcess()))
                : i('Hook is disabled for this game');
        });
    });
}
function I(e) {
    return v().then((n) => {
        n.cancelAttachToProcess(e);
    });
}
!(function (e) {
    (e[(e.None = 0)] = 'None'), (e[(e.EnableCrashReporting = 1)] = 'EnableCrashReporting'), (e[(e.EnableCrashTrigger = 2)] = 'EnableCrashTrigger');
})(i || (i = {}));
