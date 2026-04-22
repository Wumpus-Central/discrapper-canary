"use strict";
n.d(t, { r: () => s });
var i = n(283639),
    l = n(913589);
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
    let { assetsToLoad: t, drawImage: s, exportConfigs: r } = e,
        a = await (0, i.h9)(t);
    await a.loadFonts();
    {
        let e = n(507428).A,
            t = n(684266).A,
            i = document.createElement("canvas"),
            o = new e(i, a),
            c = new t(),
            u = new l.A(o, c);
        s(u.canvas);
        let d = await u.export(r);
        return i.remove(), d;
    }
}
