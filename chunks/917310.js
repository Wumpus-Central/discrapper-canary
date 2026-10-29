let r;
n.d(t, {
    w4: () => u.w,
    qg: () => d,
    IS: () => g,
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
    Ts: () => b,
});
var _ = n(882498),
    i = n(451076),
    o = n(971673);
async function a() {
    return (r || (r = await (0, _.i)()), r);
}
async function c() {
    var e;
    return ((e = await a()), (0, o.Ay)({ module_or_path: e }));
}
var u = n(849324);
let f = !1,
    s = null;
function b() {
    return f
        ? Promise.resolve()
        : (s ??= c().then(
              () => {
                  f = !0;
              },
              (e) => {
                  throw ((s = null), e);
              },
          ));
}
function l() {
    if (f) return;
    let e = (r || (r = (0, i.J)()), r);
    if (!e)
        throw Error(
            "@discord/markdown-wasm is not initialised. Await init() once before parsing, or hand already-compiled wasm to initSync().",
        );
    ((0, o.QR)({ module: e }), (f = !0));
}
function d(e, t) {
    return (l(), (0, o.qg)(e, t));
}
function g(e, t) {
    return (l(), (0, o.IS)(e, t));
}
