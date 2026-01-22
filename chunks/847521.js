n.d(t, {
    Ar: () => m,
    CO: () => p,
    Dh: () => h,
    MT: () => f,
    bB: () => E,
    hD: () => d,
    n1: () => g,
}),
    n(457529),
    n(735438),
    n(975807),
    n(15285);
var r = n(477394);
n(206626);
var i = n(227309),
    a = n(652215),
    s = n(985018);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
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

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function d(e) {
    if (e.distributor === a.d3x.ROBLOX && null != e.sku) {
        var t, n;
        return ""
            .concat(e.sku, ":")
            .concat(null != (t = null == (n = e.gameMetadata) ? void 0 : n[i.IO.PLACE_ID]) ? t : "");
    }
    return null;
}

function f(e) {
    return e.distributor === a.d3x.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[i.IO.PLACE_ID]
        ? JSON.stringify({
              placeId: e.gameMetadata[i.IO.PLACE_ID],
          })
        : null;
}

function p(e) {
    return e.distributor !== a.d3x.ROBLOX ||
        null == e.gameMetadata ||
        null == e.gameMetadata[i.IO.ROBLOX_TIME_STARTED] ||
        e.id === i.a7 ||
        null == e.gameName
        ? {}
        : {
              name: e.gameName,
              sync_id: e.gameMetadata[i.IO.ROBLOX_TIME_STARTED],
          };
}

function _(e) {
    var t;
    return (null == (t = e.metadata) ? void 0 : t.distributor) === a.d3x.ROBLOX && e.application_id !== i.a7;
}

function h(e) {
    if (!_(e)) return e;
    let t = r.a.getConfig({
        location: "transformRobloxSubgameNames",
    }).alternativeTitle
        ? s.t.HjVwG3
        : s.t.G6BGdx;
    return u(l({}, e), {
        name: s.intl.formatToPlainString(t, {
            subgameName: e.name,
        }),
    });
}

function m(e) {
    if (e.type !== a.$pd.PLAYING || !_(e)) return e;
    let t = Number(e.sync_id),
        n = l({}, e);
    return (
        (n.application_id = i.a7),
        (n.name = a.gG4[a.d3x.ROBLOX]),
        isNaN(t) ||
            (n.timestamps = {
                start: t,
            }),
        n
    );
}

function g(e) {
    return e.distributor === a.d3x.ROBLOX && e.id !== i.a7;
}

function E(e) {
    return e.thirdPartySkus.some((e) => e.distributor === a.d3x.ROBLOX);
}
