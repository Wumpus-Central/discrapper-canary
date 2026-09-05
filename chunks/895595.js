n.d(t, { L: () => d });
var i = n(228366),
    r = n(393033),
    a = n(462714),
    s = n(482876),
    l = n(757319);
let o = null;
function d(e) {
    return (0, l._)(e)
        ? null != o
            ? o
            : (o = (async () => {
                  try {
                      let e = (0, r.qn)() ? await (0, s.j)() : await (0, s.J)();
                      i.h.dispatch({
                          type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                          methods: e.methods,
                          footerMessage: e.footerMessage,
                          outageBannerMessage: e.outageBannerMessage,
                      });
                      let t = await (0, a.Y)(e.methods);
                      return 0 === t.length;
                  } catch {
                      return !1;
                  }
              })().finally(() => {
                  o = null;
              }))
        : Promise.resolve(!1);
}
