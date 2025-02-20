n.d(t, {
    AQ: () => g,
    DY: () => _,
    yQ: () => h
}),
    n(653041),
    n(733860);
var r,
    i,
    o,
    a,
    s,
    l,
    c = n(553813),
    u = n.n(c),
    d = n(65154);
let f = [
    {
        name: 'H265',
        encode: (null === (i = window) || void 0 === i ? void 0 : null === (r = i.DiscordNative) || void 0 === r ? void 0 : r.process.platform) !== 'darwin' || ((null === (a = window) || void 0 === a ? void 0 : null === (o = a.DiscordNative) || void 0 === o ? void 0 : o.os.arch) === 'arm64' && u().satisfies(null === (l = window) || void 0 === l ? void 0 : null === (s = l.DiscordNative) || void 0 === s ? void 0 : s.os.release, d.n4)),
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
function p(e, t) {
    let n = t.concat(f),
        r = [];
    return (
        n.forEach((t) => {
            let n = e.find((e) => t.name === e.codec);
            null != n &&
                r.push({
                    name: n.codec,
                    encode: n.encode && t.encode,
                    decode: n.decode && t.decode
                });
        }),
        r
    );
}
function _(e) {
    let t = [];
    return (
        e.has(d.V8.SIGNAL_AV1_DECODE)
            ? t.unshift({
                  name: 'AV1',
                  encode: !1,
                  decode: !0
              })
            : e.has(d.V8.SIGNAL_AV1) &&
              t.unshift({
                  name: 'AV1',
                  encode: !0,
                  decode: !0
              }),
        t
    );
}
function h(e, t) {
    return 'string' == typeof e
        ? p(
              JSON.parse(e).map((e) => ({
                  codec: m(e.codec),
                  encode: e.encode,
                  decode: e.decode
              })),
              t
          )
        : p(
              e.map((e) => ({
                  codec: m(e),
                  encode: !0,
                  decode: !0
              })),
              t
          );
}
function m(e) {
    return 'AV1X' === e ? 'AV1' : e;
}
function g(e) {
    return 'AV1' === e ? 'AV1X' : e;
}
