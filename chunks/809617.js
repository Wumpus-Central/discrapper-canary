l.d(t, { A: () => c });
var n = l(627968),
    i = l(64700),
    s = l(397927),
    a = l(159083),
    r = l(189552),
    C = l(636670),
    o = l(985018),
    d = l(948196);
function c(e) {
    let { searchState: t } = e,
        l = i.useMemo(
            () => ({
                [r.IY.LOADING]: null,
                [r.IY.SUCCESS_STILL_INDEXING]: { icon: (0, n.jsx)(a.A, {}), message: o.intl.string(o.t.AXPbZr) },
                [r.IY.SUCCESS_EMPTY]: { icon: (0, n.jsx)(C.A, {}), message: o.intl.string(o.t.wdyR52) },
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
                  (0, n.jsx)(s.Text, { variant: "text-md/normal", color: "text-muted", children: l.message }),
              ],
          });
}
