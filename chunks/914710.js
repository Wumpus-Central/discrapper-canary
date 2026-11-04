let r;
t.d(n, {
    Ts: () => f,
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
    qg: () => b,
    IS: () => s,
});
var _ = t(882498),
    i = t(451076),
    o = t(971673);
t(849324);
let a = !1,
    c = null;
function f() {
    return a
        ? Promise.resolve()
        : (c ??= (async function () {
              var e;
              return (
                  (e = await (async function () {
                      return (r || (r = await (0, _.i)()), r);
                  })()),
                  (0, o.Ay)({ module_or_path: e })
              );
          })().then(
              () => {
                  a = !0;
              },
              (e) => {
                  throw ((c = null), e);
              },
          ));
}
function u() {
    if (a) return;
    let e = (r || (r = (0, i.J)()), r);
    if (!e)
        throw Error(
            "@discord/markdown-wasm is not initialised. Await init() once before parsing, or hand already-compiled wasm to initSync().",
        );
    ((0, o.QR)({ module: e }), (a = !0));
}
function b(e, n) {
    return (u(), (0, o.qg)(e, n));
}
function s(e, n) {
    return (u(), (0, o.IS)(e, n));
}
