n.d(t, {
    $1: () => h,
    YT: () => E,
    pn: () => v
}),
    n(411104);
var i = n(570140),
    r = n(923928),
    a = n(593472),
    s = n(594190),
    o = n(77498),
    l = n(594174),
    u = n(626135),
    c = n(358085),
    d = n(998502),
    f = n(789465),
    _ = n(981631);
let p = {
    development: [0, 0, 0, 0],
    canary: [1, 0, 30, 10],
    ptb: [1, 0, 1005, 2],
    stable: [1, 0, 9001, 2]
};
function h() {
    var e;
    return !(null === d.ZP || void 0 === d.ZP ? void 0 : null === (e = d.ZP.isModuleVersionAtLeast) || void 0 === e ? void 0 : e.call(d.ZP, 'discord_hook', p));
}
async function m() {
    if (!(0, c.isWindows)()) return Promise.reject(Error('Hook is only available on Windows'));
    if (h()) return Promise.reject(Error('Hook module is too old'));
    await d.ZP.ensureModule('discord_hook');
    let e = await d.ZP.requireModule('discord_hook');
    return g(e), e;
}
function g(e) {
    if (null == e.setFlags) return;
    let t = 0,
        n = f.Z.getCurrentConfig({ location: 'edd7d3_1' }, { autoTrackExposure: !1 });
    n.enableCrashReporting && (console.log('Hook: Enabling crash reporting.'), (t |= 1));
    let i = l.default.getCurrentUser();
    null != i && (i.isStaff() || n.enableCrashTrigger) && (console.log('Hook: Enabling crash trigger.'), (t |= 2)), e.setFlags(t);
}
function E(e, t) {
    return m().then((n) => {
        var l;
        let c = null === (l = s.ZP.getGameForPID(e)) || void 0 === l ? void 0 : l.name,
            d = o.Z.getGameByName(c),
            f = null;
        return new Promise((o) => {
            let l = (e, n) => {
                    u.default.track(_.rMx.HOOK_RESULT, {
                        game_name: c,
                        game_id: null == d ? null : d.id,
                        success: n,
                        error: e,
                        ...t
                    }),
                        null != f && (clearTimeout(f), (f = null)),
                        n ? o() : o((e = null != e ? e : 'Unknown hook error'));
                },
                p = s.ZP.getOverlayOptionsForPID(e),
                h = {
                    ...a.r,
                    ...p,
                    elevate: s.ZP.shouldElevateProcessForPID(e)
                };
            null == h.allowHook || h.allowHook
                ? ((f = setTimeout(() => {
                      n.cancelAttachToProcess(e), l('Timed out waiting for hook response', !1);
                  }, 120000)),
                  n.attachToProcess(e, h, l),
                  i.Z.wait(() => r.Z.clearElevatedProcess()))
                : o('Hook is disabled for this game');
        });
    });
}
function v(e) {
    return m().then((t) => {
        t.cancelAttachToProcess(e);
    });
}
