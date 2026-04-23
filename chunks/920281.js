s.d(t, { d: () => d }), s(393431), s(532706), s(42231), s(232424), s(949626), s(767709), s(65162), s(508300);
var i = s(344390),
    r = s(141931),
    n = s(742459),
    l = s(430452),
    a = s(392128),
    o = s(985018);
let c = [
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
    let s,
        { width: d, height: u, types: f = [r.fS.CAMERA, r.fS.SCREEN, r.fS.WINDOW] } = e,
        h = l.Ay.getVideoDevices(),
        x = (0, n.A)(l.Ay.getMediaEngine(), f, { width: d, height: u }),
        p = (0, a.e)(),
        _ = await p,
        m = await x,
        g = m
            .filter((e) => e.id.startsWith(r.fS.SCREEN))
            .map((e) => {
                let t = e.name;
                return (
                    "Entire screen" === t
                        ? (t = o.intl.string(o.t.R4wpLN))
                        : /^Screen \d+$/.test(t) &&
                          (t = o.intl.formatToPlainString(o.t["y/R7n4"], { index: parseInt(t.split(" ")[1]) })),
                    { ...e, name: t }
                );
            }),
        j = ((t = m.filter((e) => e.id.startsWith(r.fS.WINDOW))),
        (s = {}),
        _.forEach((e) => {
            s[e.id] = e;
        }),
        t.forEach((e) => {
            s[e.id] = e;
        }),
        Object.values(s)).map((e) => ({ ...e, icon: e.icon?.split(",")[1] ? e.icon : void 0 })),
        v = [];
    return (
        f.includes(r.fS.CAMERA) &&
            (v = Object.entries(h)
                .filter((e) => {
                    let [t, s] = e;
                    return !s.disabled;
                })
                .map((e, t) => {
                    let [s, r] = e,
                        n = c[t % c.length],
                        l = Uint8Array.from(atob(n), (e) => e.charCodeAt(0)),
                        a = (0, i.V1)(l);
                    return { id: "camera:" + r.id, name: r.name, url: a };
                })),
        { windowSources: j, screenSources: g, cameraSources: v }
    );
}
