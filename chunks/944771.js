"use strict";
n.r(t),
    n.d(t, {
        ComponentPlayground: () => l,
        default: () => u,
        getComponentPlaygroundConfigs: () => a,
        useComponentPlaygroundConfigs: () => o,
    });
var r = n(627968),
    i = n(64700),
    s = n(3258);
async function a() {
    return [
        (await Promise.all([n.e("1410"), n.e("8555"), n.e("62139")]).then(n.bind(n, 318678))).playgroundConfig,
        (
            await Promise.all([
                n.e("57174"),
                n.e("81028"),
                n.e("8555"),
                n.e("91652"),
                n.e("40396"),
                n.e("90365"),
                n.e("28936"),
                n.e("68859"),
                n.e("48330"),
                n.e("92414"),
                n.e("94857"),
                n.e("41353"),
                n.e("34779"),
                n.e("49559"),
                n.e("18976"),
                n.e("10277"),
                n.e("37372"),
                n.e("35169"),
                n.e("91139"),
                n.e("41595"),
                n.e("41606"),
                n.e("38213"),
                n.e("35432"),
                n.e("93168"),
                n.e("30124"),
                n.e("19736"),
            ]).then(n.bind(n, 890908))
        ).playgroundConfig,
        (await n.e("10264").then(n.bind(n, 61003))).mfaPlaygroundConfig,
        (await Promise.all([n.e("21957"), n.e("18037"), n.e("69839"), n.e("96956")]).then(n.bind(n, 395058))).cmsConfig,
        (
            await Promise.all([n.e("57174"), n.e("92868"), n.e("91652"), n.e("29636"), n.e("69474")]).then(
                n.bind(n, 169621),
            )
        ).playgroundConfig,
    ];
}
function o() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, n] = i.useState([]);
    return (
        i.useEffect(() => {
            e && a().then((e) => n(e));
        }, [e]),
        t
    );
}
function l() {
    let e = o();
    return (0, r.jsx)(s.Playground, { configs: e });
}
let u = l;
