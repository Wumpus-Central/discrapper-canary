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
            await Promise.all([
                n.e("1410"),
                n.e("81645"),
                n.e("28367"),
                n.e("8555"),
                n.e("47111"),
                n.e("58048"),
                n.e("64082"),
            ]).then(n.bind(n, 318678))
        ).playgroundConfig,
        (
            await Promise.all([
                n.e("24199"),
                n.e("57036"),
                n.e("70474"),
                n.e("61943"),
                n.e("57174"),
                n.e("76640"),
                n.e("7175"),
                n.e("54873"),
                n.e("23353"),
                n.e("73667"),
                n.e("11250"),
                n.e("14138"),
                n.e("3442"),
                n.e("85071"),
                n.e("88017"),
                n.e("70994"),
                n.e("17239"),
                n.e("65283"),
                n.e("51793"),
                n.e("58164"),
                n.e("81645"),
                n.e("36682"),
                n.e("63070"),
                n.e("25370"),
                n.e("28367"),
                n.e("96313"),
                n.e("27411"),
                n.e("49318"),
                n.e("12721"),
                n.e("37383"),
                n.e("17601"),
                n.e("8087"),
                n.e("55057"),
                n.e("20455"),
                n.e("49141"),
                n.e("48563"),
                n.e("27355"),
                n.e("67876"),
                n.e("25412"),
                n.e("374"),
                n.e("8555"),
                n.e("40396"),
                n.e("28936"),
                n.e("64243"),
                n.e("97386"),
                n.e("47742"),
                n.e("48330"),
                n.e("92414"),
                n.e("94857"),
                n.e("16419"),
                n.e("41353"),
                n.e("82561"),
                n.e("37201"),
                n.e("37372"),
                n.e("95752"),
                n.e("55360"),
                n.e("56403"),
                n.e("93764"),
                n.e("26730"),
                n.e("21075"),
                n.e("79668"),
                n.e("55839"),
                n.e("91652"),
                n.e("35432"),
                n.e("64190"),
                n.e("41981"),
                n.e("56297"),
            ]).then(n.bind(n, 890908))
        ).playgroundConfig,
        (await n.e("10264").then(n.bind(n, 61003))).mfaPlaygroundConfig,
        (
            await Promise.all([
                n.e("24199"),
                n.e("57036"),
                n.e("70474"),
                n.e("61943"),
                n.e("76640"),
                n.e("7175"),
                n.e("54873"),
                n.e("23353"),
                n.e("73667"),
                n.e("11250"),
                n.e("14138"),
                n.e("3442"),
                n.e("85071"),
                n.e("88017"),
                n.e("70994"),
                n.e("17239"),
                n.e("65283"),
                n.e("51793"),
                n.e("58164"),
                n.e("81645"),
                n.e("36682"),
                n.e("63070"),
                n.e("25370"),
                n.e("28367"),
                n.e("96313"),
                n.e("27411"),
                n.e("49318"),
                n.e("12721"),
                n.e("37383"),
                n.e("17601"),
                n.e("8087"),
                n.e("55057"),
                n.e("20455"),
                n.e("49141"),
                n.e("48563"),
                n.e("27355"),
                n.e("67876"),
                n.e("89"),
                n.e("58801"),
                n.e("69839"),
                n.e("46314"),
            ]).then(n.bind(n, 395058))
        ).cmsConfig,
        (
            await Promise.all([n.e("57174"), n.e("92868"), n.e("91652"), n.e("19482"), n.e("16649")]).then(
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
