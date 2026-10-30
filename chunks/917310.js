let r;
n.d(t, {
    qg: () => l,
    IS: () => d,
    Ts: () => s,
    tJ: () =>
        function* e(t) {
            for (let n of t)
                switch ((yield n, n.type)) {
                    case "paragraph":
                    case "strikethrough":
                    case "underline":
                    case "italic":
                    case "bold":
                    case "quote":
                        yield* e(n.value);
                        break;
                    case "spoiler":
                    case "heading":
                    case "small":
                        yield* e(n.value.content);
                        break;
                    case "list":
                        for (let t of n.value.items) yield* e(t.content);
                        break;
                    case "link":
                        n.text && (yield* e(n.text));
                }
        },
});
var _ = n(882498),
    i = n(451076),
    o = n(971673);
async function c() {
    return (r || (r = await (0, _.i)()), r);
}
async function a() {
    var e;
    return ((e = await c()), (0, o.Ay)({ module_or_path: e }));
}
n(849324);
let u = !1,
    f = null;
function s() {
    return u
        ? Promise.resolve()
        : (f ??= a().then(
              () => {
                  u = !0;
              },
              (e) => {
                  throw ((f = null), e);
              },
          ));
}
function b() {
    if (u) return;
    let e = (r || (r = (0, i.J)()), r);
    if (!e)
        throw Error(
            "@discord/markdown-wasm is not initialised. Await init() once before parsing, or hand already-compiled wasm to initSync().",
        );
    ((0, o.QR)({ module: e }), (u = !0));
}
function l(e, t) {
    return (b(), (0, o.qg)(e, t));
}
function d(e, t) {
    return (b(), (0, o.IS)(e, t));
}
