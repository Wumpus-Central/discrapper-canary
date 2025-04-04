n.d(t, {
    $1: () => b,
    YT: () => O,
    pn: () => I
}),
    n(411104);
var r = n(570140),
    i = n(923928),
    o = n(593472),
    a = n(594190),
    s = n(77498),
    l = n(594174),
    c = n(626135),
    u = n(358085),
    d = n(998502),
    f = n(789465),
    _ = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = {
    development: [0, 0, 0, 0],
    canary: [1, 0, 30, 10],
    ptb: [1, 0, 1005, 2],
    stable: [1, 0, 9001, 2]
};
function b() {
    var e;
    return !(null === d.ZP || void 0 === d.ZP || null == (e = d.ZP.isModuleVersionAtLeast) ? void 0 : e.call(d.ZP, 'discord_hook', E));
}
async function y() {
    if (!(0, u.isWindows)()) return Promise.reject(Error('Hook is only available on Windows'));
    if (b()) return Promise.reject(Error('Hook module is too old'));
    await d.ZP.ensureModule('discord_hook');
    let e = await d.ZP.requireModule('discord_hook');
    return v(e), e;
}
function v(e) {
    if (null == e.setFlags) return;
    let t = 0,
        n = f.Z.getCurrentConfig({ location: 'edd7d3_1' }, { autoTrackExposure: !1 });
    n.enableCrashReporting && (console.log('Hook: Enabling crash reporting.'), (t |= 1));
    let r = l.default.getCurrentUser();
    null != r && (r.isStaff() || n.enableCrashTrigger) && (console.log('Hook: Enabling crash trigger.'), (t |= 2)), e.setFlags(t);
}
function O(e, t) {
    return y().then((n) => {
        var l;
        let u = null == (l = a.ZP.getGameForPID(e)) ? void 0 : l.name,
            d = s.Z.getGameByName(u),
            f = null;
        return new Promise((s) => {
            let l = (e, n) => {
                    c.default.track(
                        _.rMx.HOOK_RESULT,
                        h(
                            {
                                game_name: u,
                                game_id: null == d ? null : d.id,
                                success: n,
                                error: e
                            },
                            t
                        )
                    ),
                        null != f && (clearTimeout(f), (f = null)),
                        n ? s() : s((e = null != e ? e : 'Unknown hook error'));
                },
                p = a.ZP.getOverlayOptionsForPID(e),
                m = g(h({}, o.r, p), { elevate: a.ZP.shouldElevateProcessForPID(e) });
            null == m.allowHook || m.allowHook
                ? ((f = setTimeout(() => {
                      n.cancelAttachToProcess(e), l('Timed out waiting for hook response', !1);
                  }, 120000)),
                  n.attachToProcess(e, m, l),
                  r.Z.wait(() => i.Z.clearElevatedProcess()))
                : s('Hook is disabled for this game');
        });
    });
}
function I(e) {
    return y().then((t) => {
        t.cancelAttachToProcess(e);
    });
}
