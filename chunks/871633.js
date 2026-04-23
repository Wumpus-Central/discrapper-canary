"use strict";
n.d(t, { Zb: () => _, MT: () => a, CO: () => o, n1: () => l, bB: () => d, hD: () => s }),
    n(735438),
    n(975807),
    n(328153),
    n(738533),
    n(723702);
var i = n(227309),
    r = n(652215);
function s(e) {
    return e.distributor === r.d3x.ROBLOX && null != e.sku ? `${e.sku}:${e.gameMetadata?.[i.IO.PLACE_ID] ?? ""}` : null;
}
function a(e) {
    return e.distributor === r.d3x.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[i.IO.PLACE_ID]
        ? JSON.stringify({ placeId: e.gameMetadata[i.IO.PLACE_ID] })
        : null;
}
function o(e) {
    return e.distributor !== r.d3x.ROBLOX ||
        null == e.gameMetadata ||
        null == e.gameMetadata[i.IO.ROBLOX_TIME_STARTED] ||
        e.id === i.a7 ||
        null == e.gameName
        ? {}
        : { name: e.gameName, sync_id: e.gameMetadata[i.IO.ROBLOX_TIME_STARTED] };
}
function l(e) {
    return e.distributor === r.d3x.ROBLOX && e.id !== i.a7;
}
function d(e) {
    return e.thirdPartySkus.some((e) => e.distributor === r.d3x.ROBLOX);
}
function _(e) {
    return e.id !== i.aX && e.thirdPartySkus.some((e) => e.distributor === r.d3x.ROBLOX);
}
