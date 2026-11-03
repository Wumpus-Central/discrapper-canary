let r;
t.d(n, {
    qg: () => l,
    IS: () => d,
    Ts: () => b,
    tJ: () =>
        function* e(n) {
            for (let t of n)
                switch ((yield t, t.type)) {
                    case "paragraph":
                    case "strikethrough":
                    case "underline":
                    case "italic":
                    case "bold":
                    case "quote":
                        yield* e(t.value);
                        break;
                    case "spoiler":
                    case "heading":
                    case "small":
                        yield* e(t.value.content);
                        break;
                    case "list":
                        for (let n of t.value.items) yield* e(n.content);
                        break;
                    case "link":
                        t.text && (yield* e(t.text));
                }
        },
});
var _ = t(882498),
    i = t(451076),
    o = t(971673);
async function a() {
    return (r || (r = await (0, _.i)()), r);
}
async function c() {
    var e;
    return ((e = await a()), (0, o.Ay)({ module_or_path: e }));
}
t(849324);
let f = !1,
    u = null;
function b() {
    return f
        ? Promise.resolve()
        : (u ??= c().then(
              () => {
                  f = !0;
              },
              (e) => {
                  throw ((u = null), e);
              },
          ));
}
function s() {
    if (f) return;
    let e = (r || (r = (0, i.J)()), r);
    if (!e)
        throw Error(
            "@discord/markdown-wasm is not initialised. Await init() once before parsing, or hand already-compiled wasm to initSync().",
        );
    ((0, o.QR)({ module: e }), (f = !0));
}
function l(e, n) {
    return (s(), (0, o.qg)(e, n));
}
function d(e, n) {
    return (s(), (0, o.IS)(e, n));
}
