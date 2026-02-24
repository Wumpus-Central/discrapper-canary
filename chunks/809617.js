l.d(t, { A: () => c });
var n = l(627968),
    i = l(64700),
    a = l(397927),
    s = l(159083),
    r = l(189552),
    o = l(636670),
    C = l(985018),
    d = l(965023);
function c(e) {
    let { searchState: t } = e,
        l = i.useMemo(
            () => ({
                [r.IY.LOADING]: null,
                [r.IY.SUCCESS_STILL_INDEXING]: { icon: (0, n.jsx)(s.A, {}), message: C.intl.string(C.t.AXPbZr) },
                [r.IY.SUCCESS_EMPTY]: { icon: (0, n.jsx)(o.A, {}), message: C.intl.string(C.t.wdyR52) },
                [r.IY.SUCCESS_FULL]: null,
            }),
            [],
        )[t];
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: d.p,
              children: [
                  (0, n.jsx)("div", { className: d.__invalid_noResultsIconContainer, children: l.icon }),
                  (0, n.jsx)(a.Text, { variant: "text-md/normal", color: "text-muted", children: l.message }),
              ],
          });
}
