n.d(t, { P: () => s });
var r = n(311907),
    i = n(287809),
    l = n(349435),
    a = n(617641),
    d = n(452082);
let s = (e) => {
    let t = (0, a.Lc)({ location: "context-menu-item" }),
        n = (0, r.bG)([i.default], () => i.default.getCurrentUser()),
        s = (0, d.j)(e.id, "context-menu-item");
    return n?.isStaff() === !0 && t && e.isDM()
        ? {
              isTier1: s?.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1,
              isTier2: s?.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_2,
          }
        : null;
};
