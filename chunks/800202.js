var e = l(582128),
    i = l(314116),
    r = l(858899),
    a = l(381991),
    u = l(716594),
    f = l(949757),
    c = l(191850),
    d = l(792996);
function s(t) {
    let n = t?.id,
        l = t?.name,
        i = e.useRef(!1);
    return e.useCallback(() => {
        null == n ||
            null == l ||
            i.current ||
            ((i.current = !0),
            (0, r.P0)({ text: d.intl.formatToPlainString(c.default.aN2JdD, { name: l }) }),
            (0, f.iG)(n, l)
                .catch((t) => {
                    let l;
                    (console.error("[conjure] project export failed", n, t),
                        (0, r.P0)({
                            text:
                                409 === (l = t instanceof u.x ? t.status : null)
                                    ? d.intl.string(c.default["9oqbEw"])
                                    : 404 === l
                                      ? d.intl.string(c.default["0W8uLq"])
                                      : d.intl.string(c.default.N8753A),
                            variant: "critical",
                        }));
                })
                .finally(() => {
                    i.current = !1;
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
                        let e = (0, f.vt)(t);
                        null != e
                            ? (0, r.P0)({ text: e, variant: "critical" })
                            : (0, i.A)({
                                  title: d.intl.formatToPlainString(c.default["Gm+u1+"], { name: l }),
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
                    [n, l],
                ),
                g = (0, f.yN)(o);
            return { onExport: u, onImport: g.open, importInput: g.input };
        },
        z: s,
    },
);
