n.d(t, { P: () => u, C: () => s });
var l = n(582128),
    r = n(646514),
    a = n(515718),
    i = n(998304);
let u = r.A.unsafe_rawColors.NEUTRAL_35.resolve({ saturation: 1 }).hex();
function s(e) {
    let [t, n] = l.useState(null);
    return (l.useEffect(() => {
        if (null == e) return;
        let t = !1;
        return (
            !(async function (e) {
                try {
                    let l,
                        r,
                        s = await (0, a.S4)(e),
                        o =
                            (null != s
                                ? ((r =
                                      (l = s.filter((e) => {
                                          let [t, n, l] = e,
                                              { lightness: r } = (0, i.IB)(t, n, l);
                                          return r > 0.15 && r < 0.85;
                                      })).find((e) => {
                                          let [t, n, l] = e;
                                          return (0, i.IB)(t, n, l).saturation > 0.3;
                                      }) ?? l[0]),
                                  null != r ? (0, i.Ob)(r[0], r[1], r[2]) : null)
                                : null) ?? u;
                    t || n({ url: e, color: o });
                } catch {
                    t || n({ url: e, color: u });
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
