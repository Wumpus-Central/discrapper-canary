n.d(t, { P: () => u, C: () => s });
var r = n(582128),
    l = n(646514),
    a = n(515718),
    i = n(998304);
let u = l.A.unsafe_rawColors.NEUTRAL_35.resolve({ saturation: 1 }).hex();
function s(e) {
    let [t, n] = r.useState(null);
    return (r.useEffect(() => {
        if (null == e) return;
        let t = !1;
        return (
            !(async function (e) {
                try {
                    let r,
                        l,
                        s = await (0, a.S4)(e),
                        o =
                            (null != s
                                ? ((l =
                                      (r = s.filter((e) => {
                                          let [t, n, r] = e,
                                              { lightness: l } = (0, i.IB)(t, n, r);
                                          return l > 0.15 && l < 0.85;
                                      })).find((e) => {
                                          let [t, n, r] = e;
                                          return (0, i.IB)(t, n, r).saturation > 0.3;
                                      }) ?? r[0]),
                                  null != l ? (0, i.Ob)(l[0], l[1], l[2]) : null)
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
