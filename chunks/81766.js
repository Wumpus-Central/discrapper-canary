n.d(e, { A: () => o });
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(253932),
    a = n(957565),
    c = n(985018);
function o(t, e) {
    let n = e.primarySkuId,
        o = l.Q_.useSetting();
    return !__OVERLAY__ && o && a.p5
        ? (0, r.jsxs)(i.Drp, {
              id: "application-dev",
              label: c.intl.string(c.t.OpuAlK),
              action: () => (0, a.C)(e.id),
              children: [
                  (0, r.jsx)(i.Drp, {
                      id: "app-id",
                      label: c.intl.string(c.t.qSHshq),
                      action: () => (0, a.C)(e.id),
                  }),
                  null != t
                      ? (0, r.jsx)(i.Drp, {
                            id: "branch-id",
                            label: c.intl.string(c.t.g7oyyo),
                            action: () => (0, a.C)(t.branchId),
                        })
                      : null,
                  null != n
                      ? (0, r.jsx)(i.Drp, {
                            id: "sku-id",
                            label: c.intl.string(c.t.hReUdL),
                            action: () => (0, a.C)(n),
                        })
                      : null,
              ],
          })
        : null;
}
