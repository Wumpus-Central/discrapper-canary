n.d(t, {
    $d: () => w,
    BQ: () => P,
    Cb: () => B,
    Hu: () => F,
    L1: () => Y,
    Ow: () => W,
    PZ: () => K,
    WA: () => k,
    Wx: () => R,
    XZ: () => Z,
    Y$: () => U,
    Yn: () => V,
    jD: () => D,
    lf: () => M,
    pF: () => H,
    sl: () => G,
    vJ: () => x,
    yJ: () => j,
    ye: () => L
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
    a = n(911969),
    s = n(761122),
    l = n(213459),
    c = n(895924),
    u = n(581364),
    d = n(667204),
    f = n(433534),
    _ = n(957730),
    p = n(973616),
    h = n(768581),
    m = n(630388),
    g = n(358085),
    E = n(541099),
    b = n(827498),
    y = n(981631),
    v = n(689079),
    O = n(388032);
function I(e, t, n) {
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
function S(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = { id: v.bi.BUILT_IN };
function P(e) {
    return e.id !== v.bi.BUILT_IN;
}
function w(e) {
    return P(e) ? e.name : O.NW.string(O.t.UB2gGx);
}
function D(e) {
    return P(e) ? e.description : O.NW.string(O.t.X9fusr);
}
function L(e) {
    var t;
    return P(e) && (0, m.yE)(null != (t = e.flags) ? t : 0, y.udG.EMBEDDED);
}
function x(e) {
    var t;
    return P(e) && (0, m.yE)(null != (t = e.flags) ? t : 0, y.udG.PARTNER);
}
function M(e) {
    var t;
    return P(e) && (0, m.yE)(null != (t = e.flags) ? t : 0, y.udG.PROMOTED);
}
function k(e) {
    let t = j(e),
        n = null == t ? void 0 : t.client_platform_config[(0, s.Z)((0, g.getOS)())];
    if ((null == n ? void 0 : n.label_until) != null && Date.now() < Date.parse(null == n ? void 0 : n.label_until)) {
        var r;
        return null != (r = null == n ? void 0 : n.label_type) ? r : a.ww.NONE;
    }
    return a.ww.NONE;
}
function j(e) {
    return P(e) && L(e) ? (e instanceof p.ZP ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function U(e) {
    let { command: t, optionValues: n, context: r, commandTargetId: a, maxSizeCallback: s, sectionName: l, commandOrigin: u = c.bB.APPLICATION_LAUNCHER } = e,
        { channel: f } = r,
        p = async () => {
            try {
                let i = await (0, d.Z)({
                    command: t,
                    optionValues: n,
                    context: r,
                    commandTargetId: a,
                    maxSizeCallback: s,
                    commandOrigin: u,
                    sectionName: l,
                    source: E.Z.entrypoint()
                });
                if (t.inputType === c.iw.BUILT_IN_TEXT && null != i && null != r.channel) {
                    var e;
                    let t = _.ZP.parse(f, i.content);
                    (t.tts = null != (e = i.tts) && e), o.Z.sendMessage(r.channel.id, t);
                }
            } catch (e) {
                throw (
                    (i.Z.show({
                        title: O.NW.string(O.t['aHO//v']),
                        body: O.NW.string(O.t.kuzKHB),
                        confirmText: O.NW.string(O.t['5911LS']),
                        onConfirm: () => p()
                    }),
                    e)
                );
            }
        };
    return p();
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n } = t,
        r = A(t, ['fakeAppIconURL']);
    return P(e)
        ? {
              iconURL: h.ZP.getApplicationIconURL(
                  N(S({}, r), {
                      id: e.id,
                      icon: e.icon
                  })
              ),
              name: e.name,
              description: e.description
          }
        : {
              iconURL: null != n ? n : null,
              name: O.NW.string(O.t.UB2gGx),
              description: O.NW.string(O.t.X9fusr)
          };
}
function B(e) {
    return !!P(e) && (e instanceof p.ZP ? e.isMonetized : e.is_monetized);
}
function F(e) {
    let t = j(e);
    return null != t && t.displays_advertisements;
}
function V(e) {
    return e === b._b.TEXT || e === b._b.PLAY_TAB || e === b._b.QUICK_LAUNCHER;
}
function Z(e) {
    return null == e ? '' : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
}
function H(e) {
    let t = [];
    for (let n of e) {
        let e = n.application_directory_collection_items.filter((e) => e.type === r.C.APPLICATION && L(e.application));
        0 !== e.length && t.push(N(S({}, n), { application_directory_collection_items: e }));
    }
    return t;
}
function W(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig
    };
}
function Y(e) {
    return e instanceof p.ZP
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
function K(e, t) {
    let n = null != t ? l.ZP.getGuildState(t) : null,
        r = null != n && (0, u.TK)(e.id, n);
    return (0, f.D)(e) || r;
}
