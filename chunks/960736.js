n.d(t, {
    N9: () => A,
    Z1: () => v,
    dR: () => f,
    jJ: () => y,
    lD: () => a,
    p9: () => g,
    qO: () => b,
    tJ: () => h,
    uE: () => w,
    xD: () => p,
    xP: () => O,
}),
    n(733351);
var r = n(353640),
    i = n(873298),
    l = n(253932),
    o = n(287809);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {
    nickname: void 0,
    dmsAllowed: !l.Zt.getSetting(),
};
function s(e) {
    let t = l._Z.getSetting();
    return t !== i.Qd.ACTIVITY_STATUS_ON && (t !== i.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || null == e || !(e > 200));
}
let a = (0, r.v)((e) => ({
        nickname: d.nickname,
        dmsAllowed: d.dmsAllowed,
        showActivity: !0,
        inviteCode: void 0,
        guildId: void 0,
        touched: !1,
        setNickname: (t) =>
            e((e) =>
                c(u({}, e), {
                    nickname: t,
                    touched: !0,
                }),
            ),
        setDmsAllowed: (t) =>
            e((e) =>
                c(u({}, e), {
                    dmsAllowed: t,
                    touched: !0,
                }),
            ),
        setShowActivity: (t) =>
            e((e) =>
                c(u({}, e), {
                    showActivity: t,
                    touched: !0,
                }),
            ),
        setInviteCode: (t) =>
            e((e) =>
                c(u({}, e), {
                    inviteCode: t,
                    touched: !0,
                }),
            ),
        setGuildId: (t) =>
            e((e) =>
                c(u({}, e), {
                    guildId: t,
                    touched: !0,
                }),
            ),
        initialize: (t, n, r) =>
            e((e) =>
                c(u({}, e), {
                    guildSize: t,
                    inviteCode: n,
                    guildId: r,
                    showActivity: s(t),
                    dmsAllowed: !l.Zt.getSetting(),
                    touched: !1,
                }),
            ),
        reset: () =>
            e((e) => ({
                nickname: d.nickname,
                dmsAllowed: d.dmsAllowed,
                showActivity: s(e.guildSize),
                inviteCode: void 0,
                guildId: void 0,
                guildSize: e.guildSize,
                touched: !1,
            })),
    })),
    f = (e, t, n) => {
        a.getState().initialize(e, t, n);
    },
    O = () => {
        a.getState().reset();
    },
    b = () => {
        let e = a.getState();
        return e.nickname !== d.nickname || e.dmsAllowed !== d.dmsAllowed || e.showActivity !== s(e.guildSize);
    },
    g = () => a.getState().inviteCode,
    p = () => a.getState().guildId,
    y = () => a.getState().touched,
    v = () => a.getState().dmsAllowed,
    h = () => a.getState().nickname,
    A = () => a.getState().showActivity,
    w = () => {
        var e, t;
        let { nickname: n } = a();
        if (null != n && "" !== n.trim()) return n;
        let r = o.default.getCurrentUser();
        return null != (e = null != (t = null == r ? void 0 : r.globalName) ? t : null == r ? void 0 : r.username)
            ? e
            : "";
    };
