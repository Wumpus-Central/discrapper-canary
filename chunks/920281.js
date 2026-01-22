r.d(t, { d: () => d }),
    r(747238),
    r(896048),
    r(927092),
    r(212978),
    r(201528),
    r(393431),
    r(752391),
    r(532706),
    r(42231),
    r(232424),
    r(757074),
    r(949626),
    r(767709),
    r(65162),
    r(21862),
    r(801460),
    r(508300),
    r(650828);
var n = r(344390),
    l = r(141931),
    s = r(742459),
    i = r(430452),
    a = r(392128),
    c = r(985018);
let o = [
    "GQgGHISKZ5aYqYeYhX9isDUHGw",
    "bAgKFITWhoVvmHVRuokCdjVQaA",
    "XAgGDIJ/ipadd3iCiYUcWpCZBA",
    "HRkGDIT5aXRneomGdlvUawB7qA",
    "I9gNDISmlqqPmHiKd3isTp/5lg",
    "XxgGBIIwT2ZGpneUeZev6fWLXQ",
    "KzsKNIZDeYmfd3ihe1bXfr8Jxg",
    "J9cRDIJ6iHd/d4h4eIUJf5LyRw",
    "DggKFIQwtndKe3hVfXnAWQmddQ",
    "WggKDILeh3ePZpd6l4jln1b5SQ",
    "4PgJJIJVl3eAaod2iJeHj7tE8Q",
];
async function d(e) {
    var t;
    let r,
        { width: d, height: f, types: u = [l.fS.CAMERA, l.fS.SCREEN, l.fS.WINDOW] } = e,
        h = i.A.getVideoDevices(),
        p = (0, s.A)(i.A.getMediaEngine(), u, {
            width: d,
            height: f,
        }),
        x = (0, a.e)(),
        j = await x,
        m = await p,
        g = m
            .filter((e) => e.id.startsWith(l.fS.SCREEN))
            .map((e) => {
                var t, r;
                let n = e.name;
                return (
                    "Entire screen" === n
                        ? (n = c.intl.string(c.t.R4wpLN))
                        : /^Screen \d+$/.test(n) &&
                          (n = c.intl.formatToPlainString(c.t["y/R7n4"], { index: parseInt(n.split(" ")[1]) })),
                    (t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, e)),
                    (r = r = { name: n }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t
                );
            }),
        b =
            ((t = m.filter((e) => e.id.startsWith(l.fS.WINDOW))),
            (r = {}),
            j.forEach((e) => {
                r[e.id] = e;
            }),
            t.forEach((e) => {
                r[e.id] = e;
            }),
            Object.values(r)),
        v = [];
    return (
        u.includes(l.fS.CAMERA) &&
            (v = Object.entries(h)
                .filter((e) => {
                    let [t, r] = e;
                    return !r.disabled;
                })
                .map((e, t) => {
                    let [r, l] = e,
                        s = o[t % o.length],
                        i = Uint8Array.from(atob(s), (e) => e.charCodeAt(0)),
                        a = (0, n.V1)(i);
                    return {
                        id: "camera:" + l.id,
                        name: l.name,
                        url: a,
                    };
                })),
        {
            windowSources: b,
            screenSources: g,
            cameraSources: v,
        }
    );
}
