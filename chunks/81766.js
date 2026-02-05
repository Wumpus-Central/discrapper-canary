i.d(n, { A: () => c });
var l = i(627968);
i(64700);
var a = i(397927),
    e = i(253932),
    r = i(957565),
    d = i(985018);
function c(t, n) {
    let i = n.primarySkuId,
        c = e.Q_.useSetting();
    return !__OVERLAY__ && c && r.p5
        ? (0, l.jsxs)(a.Drp, {
              id: "application-dev",
              label: d.intl.string(d.t.OpuAlK),
              action: () => (0, r.C)(n.id),
              children: [
                  (0, l.jsx)(a.Drp, { id: "app-id", label: d.intl.string(d.t.qSHshq), action: () => (0, r.C)(n.id) }),
                  null != t
                      ? (0, l.jsx)(a.Drp, {
                            id: "branch-id",
                            label: d.intl.string(d.t.g7oyyo),
                            action: () => (0, r.C)(t.branchId),
                        })
                      : null,
                  null != i
                      ? (0, l.jsx)(a.Drp, { id: "sku-id", label: d.intl.string(d.t.hReUdL), action: () => (0, r.C)(i) })
                      : null,
              ],
          })
        : null;
}
