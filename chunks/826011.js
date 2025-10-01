s.d(t, { default: () => I });
var n = s(951288),
    r = s(647438),
    i = s(660815),
    a = s(793030),
    l = s(442837),
    c = s(481060),
    o = s(494620),
    d = s(572004),
    p = s(744993),
    u = s(693587),
    m = s(943970),
    x = s(998964),
    f = s(440589),
    h = s(388032),
    v = s(999852);
function I(e) {
    let { guildId: t, instance: s, onClose: I, transitionState: j } = e,
        C = (0, l.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getStateForGuild(t)) ? void 0 : e.instructions[s.planId];
        });
    r.useEffect(() => {
        null == C && (0, p.iX)(t, s.planId);
    }, [t, s.planId, C]);
    let N = (0, x.Z)(s),
        g = r.useCallback(() => {
            (0, d.JG)(N), (0, c.showToast)((0, c.createToast)(h.intl.string(h.t["+5kSoa"]), c.ToastType.SUCCESS));
        }, [N]),
        T = (0, m.Z)(s.gameId, "cover"),
        _ = r.useMemo(() => {
            switch (s.status) {
                case i.V.STARTING:
                    return h.intl.string(f.default["1XVBDQ"]);
                case i.V.OFFLINE:
                    return h.intl.string(f.default.m4inWl);
                default:
                    return;
            }
        }, [s.status]);
    return (0, n.jsx)(a.ExpressiveModal, {
        graphic: {
            src: T,
            type: "image",
        },
        title: s.name,
        subtitle: h.intl.string(f.default["8Fgoo6"]),
        size: "md",
        transitionState: j,
        onClose: I,
        children:
            null == C
                ? (0, n.jsx)(c.$jN, {})
                : (0, n.jsxs)("div", {
                      className: v.content,
                      children: [
                          null != _ &&
                              (0, n.jsx)(o.Z, {
                                  className: v.infoBox,
                                  children: _,
                              }),
                          (0, n.jsx)("div", {
                              className: v.stepsContainer,
                              children: C.map((e, t) =>
                                  (0, n.jsxs)(
                                      "div",
                                      {
                                          className: v.step,
                                          children: [
                                              (0, n.jsx)("div", {
                                                  className: v.stepNumber,
                                                  children: (0, n.jsx)(c.Text, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-secondary",
                                                      children: h.intl.formatToPlainString(f.default.e0RxEB, {
                                                          step: t + 1,
                                                      }),
                                                  }),
                                              }),
                                              (0, n.jsx)(c.Text, {
                                                  variant: "text-md/normal",
                                                  color: "header-primary",
                                                  children: e,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          (0, n.jsxs)("div", {
                              className: v.serverIpContainer,
                              children: [
                                  (0, n.jsx)("div", {
                                      className: v.serverIpInput,
                                      children: (0, n.jsx)(c.Text, {
                                          variant: "text-md/medium",
                                          color: "header-primary",
                                          children: N,
                                      }),
                                  }),
                                  (0, n.jsx)(c.zxk, {
                                      variant: "primary",
                                      text: h.intl.string(h.t.OpuAlJ),
                                      onClick: g,
                                      icon: c.TIy,
                                  }),
                              ],
                          }),
                      ],
                  }),
    });
}
