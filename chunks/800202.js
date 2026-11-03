n.d(t, { A: () => f, z: () => d });
var l = n(582128),
    r = n(314116),
    a = n(858899),
    i = n(381991),
    s = n(716594),
    u = n(949757),
    o = n(809526),
    c = n(105292);
function d(e) {
    let t = e?.id,
        n = e?.name,
        r = l.useRef(!1);
    return l.useCallback(() => {
        null == t ||
            null == n ||
            r.current ||
            ((r.current = !0),
            (0, a.P0)({ text: c.intl.formatToPlainString(o.default.aN2JdD, { name: n }) }),
            (0, u.iG)(t, n)
                .catch((e) => {
                    let n;
                    (console.error("[conjure] project export failed", t, e),
                        (0, a.P0)({
                            text:
                                409 === (n = e instanceof s.x ? e.status : null)
                                    ? c.intl.string(o.default["9oqbEw"])
                                    : 404 === n
                                      ? c.intl.string(o.default["0W8uLq"])
                                      : c.intl.string(o.default.N8753A),
                            variant: "critical",
                        }));
                })
                .finally(() => {
                    r.current = !1;
                }));
    }, [t, n]);
}
function f(e) {
    let t = e.id,
        n = e.name,
        s = d(e),
        f = l.useCallback(
            (e) => {
                let l = (0, u.vt)(e);
                null != l
                    ? (0, a.P0)({ text: l, variant: "critical" })
                    : (0, r.A)({
                          title: c.intl.formatToPlainString(o.default["Gm+u1+"], { name: n }),
                          subtitle: c.intl.string(o.default.M7H3sJ),
                          confirmText: c.intl.string(o.default.gFHykw),
                          variant: "critical",
                          onConfirm: async () => {
                              (0, i.A)(t);
                              try {
                                  await (0, u.Hj)(t, e, c.intl.string(o.default.Owerd3));
                              } catch {
                                  (0, a.P0)({ text: c.intl.string(o.default["Q+l4Hv"]), variant: "critical" });
                              }
                          },
                      });
            },
            [t, n],
        ),
        h = (0, u.yN)(f);
    return { onExport: s, onImport: h.open, importInput: h.input };
}
