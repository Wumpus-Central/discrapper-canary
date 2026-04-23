l.d(t, { A: () => c });
var n = l(627968),
    i = l(64700),
    a = l(834730),
    s = l(159083),
    C = l(189552),
    r = l(636670),
    o = l(985018),
    d = l(570804);
function c(e) {
    let { searchState: t } = e,
        l = i.useMemo(
            () => ({
                [C.IY.LOADING]: null,
                [C.IY.SUCCESS_STILL_INDEXING]: { icon: (0, n.jsx)(s.A, {}), message: o.intl.string(o.t.AXPbZr) },
                [C.IY.SUCCESS_EMPTY]: { icon: (0, n.jsx)(r.A, {}), message: o.intl.string(o.t.wdyR52) },
                [C.IY.SUCCESS_FULL]: null,
            }),
            [],
        )[t];
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: d.p,
              children: [
                  (0, n.jsx)("div", { className: d.__invalid_noResultsIconContainer, children: l.icon }),
                  (0, n.jsx)(a.E, { variant: "text-md/normal", color: "text-muted", children: l.message }),
              ],
          });
}
