n.d(t, {
    A: () => o,
}),
    n(457529),
    n(65821);
var r = n(536194);
let i = (0, n(242133).g)();
class a {
    pack(e) {
        return JSON.stringify(e);
    }
    unpack(e) {
        if ("string" != typeof e)
            throw Error(
                "Expected a string to be passed to JSONEncoding.unpack, got ".concat(null == e ? null : typeof e),
            );
        return JSON.parse(e);
    }
    getName() {
        return "json";
    }
    wantsString() {
        return !0;
    }
}
let s = void 0 !== i ? i : a;
r.P.isDiscordGatewayPlaintextSet() && (s = a);
let o = s;
