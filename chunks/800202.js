var e = l(582128),
    a = l(314116),
    i = l(858899),
    r = l(381991),
    u = l(716594),
    d = l(949757),
    f = l(258576),
    c = l(792996);
function s(t) {
    let n = t?.id,
        l = t?.name,
        a = e.useRef(!1);
    return e.useCallback(() => {
        null == n ||
            null == l ||
            a.current ||
            ((a.current = !0),
            (0, i.P0)({ text: c.intl.formatToPlainString(f.default.aN2JdD, { name: l }) }),
            (0, d.iG)(n, l)
                .catch((t) => {
                    let l;
                    (console.error("[conjure] project export failed", n, t),
                        (0, i.P0)({
                            text:
                                409 === (l = t instanceof u.x ? t.status : null)
                                    ? c.intl.string(f.default["9oqbEw"])
                                    : 404 === l
                                      ? c.intl.string(f.default["0W8uLq"])
                                      : c.intl.string(f.default.N8753A),
                            variant: "critical",
                        }));
                })
                .finally(() => {
                    a.current = !1;
                }));
    }, [n, l]);
}
l.d(
    n,
    {},
    {
        A: function (t) {
            let n = t.id,
                l = t.name,
                u = s(t),
                o = e.useCallback(
                    (t) => {
                        let e = (0, d.vt)(t);
                        null != e
                            ? (0, i.P0)({ text: e, variant: "critical" })
                            : (0, a.A)({
                                  title: c.intl.formatToPlainString(f.default["Gm+u1+"], { name: l }),
                                  subtitle: c.intl.string(f.default.M7H3sJ),
                                  confirmText: c.intl.string(f.default.gFHykw),
                                  variant: "critical",
                                  onConfirm: async () => {
                                      (0, r.A)(n);
                                      try {
                                          await (0, d.Hj)(n, t, c.intl.string(f.default.Owerd3));
                                      } catch {
                                          (0, i.P0)({ text: c.intl.string(f.default["Q+l4Hv"]), variant: "critical" });
                                      }
                                  },
                              });
                    },
                    [n, l],
                ),
                g = (0, d.yN)(o);
            return { onExport: u, onImport: g.open, importInput: g.input };
        },
        z: s,
    },
);
