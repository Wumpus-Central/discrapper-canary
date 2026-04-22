i.d(t, { A: () => c });
var l = i(627968);
i(64700);
var a = i(477782),
    e = i(253932),
    r = i(957565),
    d = i(985018);
function c(n, t) {
    let i = t.primarySkuId,
        c = e.Q_.useSetting();
    return !__OVERLAY__ && c && r.p5
        ? (0, l.jsxs)(a.Dr, {
              id: "application-dev",
              label: d.intl.string(d.t.OpuAlK),
              action: () => (0, r.C)(t.id),
              children: [
                  (0, l.jsx)(a.Dr, { id: "app-id", label: d.intl.string(d.t.qSHshq), action: () => (0, r.C)(t.id) }),
                  null != n
                      ? (0, l.jsx)(a.Dr, {
                            id: "branch-id",
                            label: d.intl.string(d.t.g7oyyo),
                            action: () => (0, r.C)(n.branchId),
                        })
                      : null,
                  null != i
                      ? (0, l.jsx)(a.Dr, { id: "sku-id", label: d.intl.string(d.t.hReUdL), action: () => (0, r.C)(i) })
                      : null,
              ],
          })
        : null;
}
