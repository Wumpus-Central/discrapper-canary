"use strict";
n.d(t, { r: () => s });
var r = n(283639),
    i = n(913589);
try {
    n(
        Object(
            (function () {
                var e = Error("Cannot find module '@shopify/react-native-skia'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
        ),
    ).Skia;
} catch (e) {}
async function s(e) {
    let { assetsToLoad: t, drawImage: s, exportConfigs: a } = e,
        o = await (0, r.h9)(t);
    await o.loadFonts();
    {
        let e = n(507428).A,
            t = n(684266).A,
            r = document.createElement("canvas"),
            l = new e(r, o),
            u = new t(),
            c = new i.A(l, u);
        s(c.canvas);
        let d = await c.export(a);
        return r.remove(), d;
    }
}
