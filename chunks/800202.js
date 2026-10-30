n.d(t, { A: () => f, z: () => c });
var l = n(582128),
    a = n(314116),
    r = n(858899),
    i = n(381991),
    s = n(716594),
    o = n(949757),
    u = n(809526),
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
            (0, r.P0)({ text: d.intl.formatToPlainString(u.default.aN2JdD, { name: n }) }),
            (0, o.iG)(t, n)
                .catch((e) => {
                    let n;
                    (console.error("[conjure] project export failed", t, e),
                        (0, r.P0)({
                            text:
                                409 === (n = e instanceof s.x ? e.status : null)
                                    ? d.intl.string(u.default["9oqbEw"])
                                    : 404 === n
                                      ? d.intl.string(u.default["0W8uLq"])
                                      : d.intl.string(u.default.N8753A),
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
                let l = (0, o.vt)(e);
                null != l
                    ? (0, r.P0)({ text: l, variant: "critical" })
                    : (0, a.A)({
                          title: d.intl.formatToPlainString(u.default["Gm+u1+"], { name: n }),
                          subtitle: d.intl.string(u.default.M7H3sJ),
                          confirmText: d.intl.string(u.default.gFHykw),
                          variant: "critical",
                          onConfirm: async () => {
                              (0, i.Ay)(t);
                              try {
                                  await (0, o.Hj)(t, e, d.intl.string(u.default.Owerd3));
                              } catch {
                                  (0, r.P0)({ text: d.intl.string(u.default["Q+l4Hv"]), variant: "critical" });
                              }
                          },
                      });
            },
            [t, n],
        ),
        m = (0, o.yN)(f);
    return { onExport: s, onImport: m.open, importInput: m.input };
}
