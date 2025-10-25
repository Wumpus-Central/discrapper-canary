t.d(n, { x: () => o });
var i = t(442837),
    r = t(594174),
    l = t(359119),
    a = t(237292),
    s = t(13279);
let o = (e) => {
    let n = (0, a.y0)({ location: "context-menu-item" }),
        t = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
        o = (0, s.z)(e.id, "context-menu-item");
    return (null == t ? void 0 : t.isStaff()) === !0 && n && e.isDM()
        ? {
              isTier1: (null == o ? void 0 : o.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_1,
              isTier2: (null == o ? void 0 : o.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
          }
        : null;
};
