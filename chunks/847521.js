"use strict";
n.d(t, { Ar: () => _, CO: () => u, Dh: () => d, MT: () => l, bB: () => p, hD: () => o, n1: () => f }),
    n(735438),
    n(975807),
    n(15285);
var r = n(477394);
n(206626);
var i = n(227309),
    a = n(652215),
    s = n(985018);
function o(e) {
    return e.distributor === a.d3x.ROBLOX && null != e.sku ? `${e.sku}:${e.gameMetadata?.[i.IO.PLACE_ID] ?? ""}` : null;
}
function l(e) {
    return e.distributor === a.d3x.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[i.IO.PLACE_ID]
        ? JSON.stringify({ placeId: e.gameMetadata[i.IO.PLACE_ID] })
        : null;
}
function u(e) {
    return e.distributor !== a.d3x.ROBLOX ||
        null == e.gameMetadata ||
        null == e.gameMetadata[i.IO.ROBLOX_TIME_STARTED] ||
        e.id === i.a7 ||
        null == e.gameName
        ? {}
        : { name: e.gameName, sync_id: e.gameMetadata[i.IO.ROBLOX_TIME_STARTED] };
}
function c(e) {
    return e.metadata?.distributor === a.d3x.ROBLOX && e.application_id !== i.a7;
}
function d(e) {
    if (!c(e)) return e;
    let t = r.a.getConfig({ location: "transformRobloxSubgameNames" }).alternativeTitle ? s.t.HjVwG3 : s.t.G6BGdx;
    return { ...e, name: s.intl.formatToPlainString(t, { subgameName: e.name }) };
}
function _(e) {
    if (e.type !== a.$pd.PLAYING || !c(e)) return e;
    let t = Number(e.sync_id),
        n = { ...e };
    return (n.application_id = i.a7), (n.name = a.gG4[a.d3x.ROBLOX]), isNaN(t) || (n.timestamps = { start: t }), n;
}
function f(e) {
    return e.distributor === a.d3x.ROBLOX && e.id !== i.a7;
}
function p(e) {
    return e.thirdPartySkus.some((e) => e.distributor === a.d3x.ROBLOX);
}
