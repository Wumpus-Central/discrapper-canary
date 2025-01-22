r.d(n, {
    $d: function () {
        return C;
    },
    BQ: function () {
        return A;
    },
    Cb: function () {
        return P;
    },
    Hu: function () {
        return M;
    },
    L1: function () {
        return Z;
    },
    Ow: function () {
        return G;
    },
    Wx: function () {
        return S;
    },
    X: function () {
        return F;
    },
    XZ: function () {
        return U;
    },
    Y$: function () {
        return L;
    },
    Yn: function () {
        return k;
    },
    jD: function () {
        return N;
    },
    lf: function () {
        return D;
    },
    pF: function () {
        return B;
    },
    sl: function () {
        return w;
    },
    vJ: function () {
        return O;
    },
    yJ: function () {
        return x;
    },
    ye: function () {
        return R;
    }
});
var i = r(789020);
var a = r(627494);
var o = r(757143);
var s = r(653041);
var l = r(47120);
var u = r(912370),
    c = r(668781),
    d = r(904245),
    f = r(895924),
    p = r(667204),
    h = r(957730),
    _ = r(973616),
    m = r(768581),
    g = r(585483),
    E = r(630388),
    v = r(541099),
    y = r(827498),
    b = r(981631),
    I = r(689079),
    T = r(388032);
let S = { id: I.bi.BUILT_IN };
function A(e) {
    return e.id !== I.bi.BUILT_IN;
}
function C(e) {
    return A(e) ? e.name : T.intl.string(T.t.UB2gGx);
}
function N(e) {
    return A(e) ? e.description : T.intl.string(T.t.X9fusr);
}
function R(e) {
    var n;
    return A(e) && (0, E.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, b.udG.EMBEDDED);
}
function O(e) {
    var n;
    return A(e) && (0, E.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, b.udG.PARTNER);
}
function D(e) {
    var n;
    return A(e) && (0, E.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, b.udG.PROMOTED);
}
function x(e) {
    return A(e) && R(e) ? (e instanceof _.ZP ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function L(e) {
    let { command: n, optionValues: r, context: i, commandTargetId: a, maxSizeCallback: o, sectionName: s, commandOrigin: l = f.bB.APPLICATION_LAUNCHER } = e,
        { channel: u } = i,
        _ = async () => {
            try {
                let c = await (0, p.Z)({
                    command: n,
                    optionValues: r,
                    context: i,
                    commandTargetId: a,
                    maxSizeCallback: o,
                    commandOrigin: l,
                    sectionName: s,
                    source: v.Z.entrypoint()
                });
                if (n.inputType === f.iw.BUILT_IN_TEXT && null != c) {
                    var e;
                    let n = h.ZP.parse(u, c.content);
                    (n.tts = null !== (e = c.tts) && void 0 !== e && e), d.Z.sendMessage(i.channel.id, n);
                }
            } catch (e) {
                throw (
                    (c.Z.show({
                        title: T.intl.string(T.t['aHO//v']),
                        body: T.intl.string(T.t.kuzKHB),
                        confirmText: T.intl.string(T.t['5911LS']),
                        onConfirm: () => _()
                    }),
                    e)
                );
            }
        };
    return _();
}
function w(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: r, ...i } = n;
    return A(e)
        ? {
              iconURL: m.ZP.getApplicationIconURL({
                  ...i,
                  id: e.id,
                  icon: e.icon
              }),
              name: e.name,
              description: e.description
          }
        : {
              iconURL: null != r ? r : null,
              name: T.intl.string(T.t.UB2gGx),
              description: T.intl.string(T.t.X9fusr)
          };
}
function P(e) {
    return !!A(e) && (e instanceof _.ZP ? e.isMonetized : e.is_monetized);
}
function M(e) {
    let n = x(e);
    return null != n && n.displays_advertisements;
}
function k(e) {
    return e === y._b.TEXT;
}
function U(e) {
    return null == e ? '' : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
}
function B(e) {
    let n = [];
    for (let r of e) {
        let e = r.application_directory_collection_items.filter((e) => e.type === u.C.APPLICATION && R(e.application));
        if (0 !== e.length)
            n.push({
                ...r,
                application_directory_collection_items: e
            });
    }
    return n;
}
function G(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig
    };
}
function Z(e) {
    return e instanceof _.ZP
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
function F(e) {
    g.S.dispatchToLastSubscribed(b.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
