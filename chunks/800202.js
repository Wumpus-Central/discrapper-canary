e.d(n, { A: () => o, z: () => s });
var l = e(582128),
    i = e(314116),
    r = e(858899),
    a = e(381991),
    u = e(716594),
    f = e(949757),
    c = e(809526),
    d = e(105292);
function s(t) {
    let n = t?.id,
        e = t?.name,
        i = l.useRef(!1);
    return l.useCallback(() => {
        null == n ||
            null == e ||
            i.current ||
            ((i.current = !0),
            (0, r.P0)({ text: d.intl.formatToPlainString(c.default.aN2JdD, { name: e }) }),
            (0, f.iG)(n, e)
                .catch((t) => {
                    let e;
                    (console.error("[conjure] project export failed", n, t),
                        (0, r.P0)({
                            text:
                                409 === (e = t instanceof u.x ? t.status : null)
                                    ? d.intl.string(c.default["9oqbEw"])
                                    : 404 === e
                                      ? d.intl.string(c.default["0W8uLq"])
                                      : d.intl.string(c.default.N8753A),
                            variant: "critical",
                        }));
                })
                .finally(() => {
                    i.current = !1;
                }));
    }, [n, e]);
}
function o(t) {
    let n = t.id,
        e = t.name,
        u = s(t),
        o = l.useCallback(
            (t) => {
                let l = (0, f.vt)(t);
                null != l
                    ? (0, r.P0)({ text: l, variant: "critical" })
                    : (0, i.A)({
                          title: d.intl.formatToPlainString(c.default["Gm+u1+"], { name: e }),
                          subtitle: d.intl.string(c.default.M7H3sJ),
                          confirmText: d.intl.string(c.default.gFHykw),
                          variant: "critical",
                          onConfirm: async () => {
                              (0, a.A)(n);
                              try {
                                  await (0, f.Hj)(n, t, d.intl.string(c.default.Owerd3));
                              } catch {
                                  (0, r.P0)({ text: d.intl.string(c.default["Q+l4Hv"]), variant: "critical" });
                              }
                          },
                      });
            },
            [n, e],
        ),
        g = (0, f.yN)(o);
    return { onExport: u, onImport: g.open, importInput: g.input };
}
