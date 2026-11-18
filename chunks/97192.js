l.d(t, { P: () => u, C: () => s });
var n = l(582128),
    r = l(646514),
    a = l(515718),
    i = l(998304);
let u = r.A.unsafe_rawColors.NEUTRAL_35.resolve({ saturation: 1 }).hex();
function s(e) {
    let [t, l] = n.useState(null);
    return (n.useEffect(() => {
        if (null == e) return;
        let t = !1;
        return (
            !(async function (e) {
                try {
                    let n,
                        r,
                        s = await (0, a.S4)(e),
                        o =
                            (null != s
                                ? ((r =
                                      (n = s.filter((e) => {
                                          let [t, l, n] = e,
                                              { lightness: r } = (0, i.IB)(t, l, n);
                                          return r > 0.15 && r < 0.85;
                                      })).find((e) => {
                                          let [t, l, n] = e;
                                          return (0, i.IB)(t, l, n).saturation > 0.3;
                                      }) ?? n[0]),
                                  null != r ? (0, i.Ob)(r[0], r[1], r[2]) : null)
                                : null) ?? u;
                    t || l({ url: e, color: o });
                } catch {
                    t || l({ url: e, color: u });
                }
            })(e),
            () => {
                t = !0;
            }
        );
    }, [e]),
    null == e)
        ? u
        : t?.url === e
          ? t.color
          : void 0;
}
