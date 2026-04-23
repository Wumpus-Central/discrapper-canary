"use strict";
n.d(t, { A: () => o });
var r = n(536194);
let i = (0, n(242133).g)();
class s {
    pack(e) {
        return JSON.stringify(e);
    }
    unpack(e) {
        if ("string" != typeof e)
            throw Error(`Expected a string to be passed to JSONEncoding.unpack, got ${null == e ? null : typeof e}`);
        return JSON.parse(e);
    }
    getName() {
        return "json";
    }
    wantsString() {
        return !0;
    }
}
let a = void 0 !== i ? i : s;
r.P.isDiscordGatewayPlaintextSet() && (a = s);
let o = a;
