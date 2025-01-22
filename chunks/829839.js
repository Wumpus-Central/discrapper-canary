r.d(n, {
    AQ: function () {
        return y;
    },
    DY: function () {
        return g;
    },
    yQ: function () {
        return E;
    }
});
var i,
    a,
    o,
    s,
    l,
    u,
    c = r(653041);
var d = r(733860);
var f = r(553813),
    p = r.n(f),
    h = r(65154);
let _ = [
    {
        name: 'H265',
        encode: (null === (a = window) || void 0 === a ? void 0 : null === (i = a.DiscordNative) || void 0 === i ? void 0 : i.process.platform) !== 'darwin' || ((null === (s = window) || void 0 === s ? void 0 : null === (o = s.DiscordNative) || void 0 === o ? void 0 : o.os.arch) === 'arm64' && p().satisfies(null === (u = window) || void 0 === u ? void 0 : null === (l = u.DiscordNative) || void 0 === l ? void 0 : l.os.release, h.n4)),
        decode: !0
    },
    {
        name: 'H264',
        encode: !0,
        decode: !0
    },
    {
        name: 'VP8',
        encode: !0,
        decode: !0
    },
    {
        name: 'VP9',
        encode: !0,
        decode: !0
    }
];
function m(e, n) {
    let r = n.concat(_),
        i = [];
    return (
        r.forEach((n) => {
            let r = e.find((e) => n.name === e.codec);
            null != r &&
                i.push({
                    name: r.codec,
                    encode: r.encode && n.encode,
                    decode: r.decode && n.decode
                });
        }),
        i
    );
}
function g(e) {
    let n = [];
    return (
        e.has(h.V8.SIGNAL_AV1_DECODE)
            ? n.unshift({
                  name: 'AV1',
                  encode: !1,
                  decode: !0
              })
            : e.has(h.V8.SIGNAL_AV1) &&
              n.unshift({
                  name: 'AV1',
                  encode: !0,
                  decode: !0
              }),
        n
    );
}
function E(e, n) {
    return 'string' == typeof e
        ? m(
              JSON.parse(e).map((e) => ({
                  codec: v(e.codec),
                  encode: e.encode,
                  decode: e.decode
              })),
              n
          )
        : m(
              e.map((e) => ({
                  codec: v(e),
                  encode: !0,
                  decode: !0
              })),
              n
          );
}
function v(e) {
    return 'AV1X' === e ? 'AV1' : e;
}
function y(e) {
    return 'AV1' === e ? 'AV1X' : e;
}
