n.d(t, { A: () => f, z: () => c });
var l = n(582128),
    a = n(314116),
    r = n(858899),
    i = n(381991),
    s = n(716594),
    u = n(949757),
    o = n(809526),
    d = n(105292);
function c(e) {
    let t = e?.id,
        n = e?.name,
        a = l.useRef(!1);
    return l.useCallback(() => {
        null == t ||
            null == n ||
            a.current ||
            ((a.current = !0),
            (0, r.P0)({ text: d.intl.formatToPlainString(o.default.aN2JdD, { name: n }) }),
            (0, u.iG)(t, n)
                .catch((e) => {
                    let n;
                    (console.error("[conjure] project export failed", t, e),
                        (0, r.P0)({
                            text:
                                409 === (n = e instanceof s.x ? e.status : null)
                                    ? d.intl.string(o.default["9oqbEw"])
                                    : 404 === n
                                      ? d.intl.string(o.default["0W8uLq"])
                                      : d.intl.string(o.default.N8753A),
                            variant: "critical",
                        }));
                })
                .finally(() => {
                    a.current = !1;
                }));
    }, [t, n]);
}
function f(e) {
    let t = e.id,
        n = e.name,
        s = c(e),
        f = l.useCallback(
            (e) => {
                let l = (0, u.vt)(e);
                null != l
                    ? (0, r.P0)({ text: l, variant: "critical" })
                    : (0, a.A)({
                          title: d.intl.formatToPlainString(o.default["Gm+u1+"], { name: n }),
                          subtitle: d.intl.string(o.default.M7H3sJ),
                          confirmText: d.intl.string(o.default.gFHykw),
                          variant: "critical",
                          onConfirm: async () => {
                              (0, i.Ay)(t);
                              try {
                                  await (0, u.Hj)(t, e, d.intl.string(o.default.Owerd3));
                              } catch {
                                  (0, r.P0)({ text: d.intl.string(o.default["Q+l4Hv"]), variant: "critical" });
                              }
                          },
                      });
            },
            [t, n],
        ),
        m = (0, u.yN)(f);
    return { onExport: s, onImport: m.open, importInput: m.input };
}
