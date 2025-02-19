n.d(t, {
    $d: () => N,
    BQ: () => T,
    Cb: () => L,
    Hu: () => M,
    L1: () => B,
    Ow: () => G,
    Wx: () => I,
    X: () => Z,
    XZ: () => j,
    Y$: () => D,
    Yn: () => k,
    jD: () => A,
    lf: () => P,
    pF: () => U,
    sl: () => x,
    vJ: () => R,
    yJ: () => w,
    ye: () => C
}),
    n(266796),
    n(789020),
    n(627494),
    n(757143),
    n(301563),
    n(653041),
    n(47120);
var r = n(912370),
    i = n(668781),
    o = n(904245),
    a = n(895924),
    s = n(667204),
    l = n(957730),
    c = n(973616),
    u = n(768581),
    d = n(585483),
    f = n(630388),
    p = n(541099),
    _ = n(827498),
    h = n(981631),
    m = n(689079),
    g = n(388032);
function E(e, t, n) {
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
function v(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let I = { id: m.bi.BUILT_IN };
function T(e) {
    return e.id !== m.bi.BUILT_IN;
}
function N(e) {
    return T(e) ? e.name : g.NW.string(g.t.UB2gGx);
}
function A(e) {
    return T(e) ? e.description : g.NW.string(g.t.X9fusr);
}
function C(e) {
    var t;
    return T(e) && (0, f.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, h.udG.EMBEDDED);
}
function R(e) {
    var t;
    return T(e) && (0, f.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, h.udG.PARTNER);
}
function P(e) {
    var t;
    return T(e) && (0, f.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, h.udG.PROMOTED);
}
function w(e) {
    return T(e) && C(e) ? (e instanceof c.ZP ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function D(e) {
    let { command: t, optionValues: n, context: r, commandTargetId: c, maxSizeCallback: u, sectionName: d, commandOrigin: f = a.bB.APPLICATION_LAUNCHER } = e,
        { channel: _ } = r,
        h = async () => {
            try {
                let i = await (0, s.Z)({
                    command: t,
                    optionValues: n,
                    context: r,
                    commandTargetId: c,
                    maxSizeCallback: u,
                    commandOrigin: f,
                    sectionName: d,
                    source: p.Z.entrypoint()
                });
                if (t.inputType === a.iw.BUILT_IN_TEXT && null != i && null != r.channel) {
                    var e;
                    let t = l.ZP.parse(_, i.content);
                    (t.tts = null !== (e = i.tts) && void 0 !== e && e), o.Z.sendMessage(r.channel.id, t);
                }
            } catch (e) {
                throw (
                    (i.Z.show({
                        title: g.NW.string(g.t['aHO//v']),
                        body: g.NW.string(g.t.kuzKHB),
                        confirmText: g.NW.string(g.t['5911LS']),
                        onConfirm: () => h()
                    }),
                    e)
                );
            }
        };
    return h();
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n } = t,
        r = O(t, ['fakeAppIconURL']);
    return T(e)
        ? {
              iconURL: u.ZP.getApplicationIconURL(
                  y(v({}, r), {
                      id: e.id,
                      icon: e.icon
                  })
              ),
              name: e.name,
              description: e.description
          }
        : {
              iconURL: null != n ? n : null,
              name: g.NW.string(g.t.UB2gGx),
              description: g.NW.string(g.t.X9fusr)
          };
}
function L(e) {
    return !!T(e) && (e instanceof c.ZP ? e.isMonetized : e.is_monetized);
}
function M(e) {
    let t = w(e);
    return null != t && t.displays_advertisements;
}
function k(e) {
    return e === _._b.TEXT;
}
function j(e) {
    return null == e ? '' : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
}
function U(e) {
    let t = [];
    for (let n of e) {
        let e = n.application_directory_collection_items.filter((e) => e.type === r.C.APPLICATION && C(e.application));
        0 !== e.length && t.push(y(v({}, n), { application_directory_collection_items: e }));
    }
    return t;
}
function G(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig
    };
}
function B(e) {
    return e instanceof c.ZP
        ? {
              applicationId: e.id,
              customInstallUrl: e.customInstallUrl,
              installParams: e.installParams,
              integrationTypesConfig: e.integrationTypesConfig
          }
        : {
              applicationId: e.id,
              customInstallUrl: e.custom_install_url,
              installParams: e.install_params,
              integrationTypesConfig: e.integration_types_config
          };
}
function Z(e) {
    d.S.dispatchToLastSubscribed(h.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
