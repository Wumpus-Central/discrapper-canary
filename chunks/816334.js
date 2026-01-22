let r;
n.d(t, {
    r: () => s,
}),
    n(65821);
var i = n(283639),
    a = n(913589);
try {
    r = n(
        Object(
            (function () {
                var e = Error("Cannot find module '@shopify/react-native-skia'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
        ),
    ).Skia;
} catch (e) {
    r = null;
}
async function s(e) {
    let { assetsToLoad: t, drawImage: r, exportConfigs: s } = e,
        o = await (0, i.h9)(t);
    await o.loadFonts();
    {
        let e = n(507428).A,
            t = n(684266).A,
            i = document.createElement("canvas"),
            l = new e(i, o),
            c = new t(),
            u = new a.A(l, c);
        r(u.canvas);
        let d = await u.export(s);
        return i.remove(), d;
    }
}
