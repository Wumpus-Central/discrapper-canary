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
        (
            await Promise.all([n.e("1410"), n.e("8555"), n.e("68883"), n.e("58048"), n.e("57740")]).then(
                n.bind(n, 318678),
            )
        ).playgroundConfig,
        (
            await Promise.all([
                n.e("57174"),
                n.e("25412"),
                n.e("374"),
                n.e("8555"),
                n.e("40396"),
                n.e("28936"),
                n.e("64243"),
                n.e("97386"),
                n.e("48330"),
                n.e("92414"),
                n.e("94857"),
                n.e("16419"),
                n.e("41353"),
                n.e("82561"),
                n.e("45253"),
                n.e("47742"),
                n.e("37372"),
                n.e("95752"),
                n.e("9648"),
                n.e("56403"),
                n.e("93764"),
                n.e("26730"),
                n.e("21075"),
                n.e("79668"),
                n.e("55839"),
                n.e("91652"),
                n.e("35432"),
                n.e("64190"),
                n.e("79893"),
                n.e("26901"),
            ]).then(n.bind(n, 890908))
        ).playgroundConfig,
        (await n.e("10264").then(n.bind(n, 61003))).mfaPlaygroundConfig,
        (await Promise.all([n.e("89"), n.e("58801"), n.e("69839"), n.e("85864")]).then(n.bind(n, 395058))).cmsConfig,
        (
            await Promise.all([n.e("57174"), n.e("92868"), n.e("91652"), n.e("19482"), n.e("50924")]).then(
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
