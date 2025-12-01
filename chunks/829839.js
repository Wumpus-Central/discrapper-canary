n.d(t, {
    AQ: () => d,
    DY: () => l,
    yQ: () => c,
}),
    n(539854);
var r = n(553813),
    i = n.n(r),
    a = n(65154);
let o = [
    {
        name: "H264",
        encode: !0,
        decode: !0,
    },
    {
        name: "VP8",
        encode: !0,
        decode: !0,
    },
    {
        name: "VP9",
        encode: !0,
        decode: !0,
    },
];
function s(e, t) {
    let n = t.concat(o),
        r = [];
    return (
        n.forEach((t) => {
            let n = e.find((e) => t.name === e.codec);
            null != n &&
                r.push({
                    name: n.codec,
                    encode: n.encode && t.encode,
                    decode: n.decode && t.decode,
                });
        }),
        r
    );
}
function l(e) {
    var t, n, r, o, s, l;
    let c = [];
    return (
        e.has(a.V8.SIGNAL_AV1_DECODE)
            ? c.push({
                  name: "AV1",
                  encode: !1,
                  decode: !0,
              })
            : e.has(a.V8.SIGNAL_AV1) &&
              c.push({
                  name: "AV1",
                  encode: !0,
                  decode: !0,
              }),
        c.push({
            name: "H265",
            encode:
                "undefined" == typeof window ||
                (null == (n = window) || null == (t = n.DiscordNative) ? void 0 : t.process.platform) !== "darwin" ||
                ((null == (o = window) || null == (r = o.DiscordNative) ? void 0 : r.os.arch) === "arm64" &&
                    i().satisfies(null == (l = window) || null == (s = l.DiscordNative) ? void 0 : s.os.release, a.n4)),
            decode:
                !(null == e ? void 0 : e.has(a.V8.H265_HARDWARE_ONLY)) ||
                (null == e ? void 0 : e.has(a.V8.H265_HARDWARE_DECODE_AVAILABLE)),
        }),
        c
    );
}
function c(e, t) {
    return "string" == typeof e
        ? s(
              JSON.parse(e).map((e) => ({
                  codec: u(e.codec),
                  encode: e.encode,
                  decode: e.decode,
              })),
              t,
          )
        : s(
              e.map((e) => ({
                  codec: u(e),
                  encode: !0,
                  decode: !0,
              })),
              t,
          );
}
function u(e) {
    return "AV1X" === e ? "AV1" : e;
}
function d(e) {
    return "AV1" === e ? "AV1X" : e;
}
