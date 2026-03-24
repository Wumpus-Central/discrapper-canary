"use strict";
n.d(t, { CO: () => o, MT: () => a, bB: () => u, hD: () => s, n1: () => l }), n(735438), n(975807), n(15285), n(206626);
var r = n(227309),
    i = n(652215);
function s(e) {
    return e.distributor === i.d3x.ROBLOX && null != e.sku ? `${e.sku}:${e.gameMetadata?.[r.IO.PLACE_ID] ?? ""}` : null;
}
function a(e) {
    return e.distributor === i.d3x.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[r.IO.PLACE_ID]
        ? JSON.stringify({ placeId: e.gameMetadata[r.IO.PLACE_ID] })
        : null;
}
function o(e) {
    return e.distributor !== i.d3x.ROBLOX ||
        null == e.gameMetadata ||
        null == e.gameMetadata[r.IO.ROBLOX_TIME_STARTED] ||
        e.id === r.a7 ||
        null == e.gameName
        ? {}
        : { name: e.gameName, sync_id: e.gameMetadata[r.IO.ROBLOX_TIME_STARTED] };
}
function l(e) {
    return e.distributor === i.d3x.ROBLOX && e.id !== r.a7;
}
function u(e) {
    return e.thirdPartySkus.some((e) => e.distributor === i.d3x.ROBLOX);
}
