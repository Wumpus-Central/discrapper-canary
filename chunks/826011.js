n.d(t, { default: () => I });
var s = n(951288),
    r = n(647438),
    i = n(660815),
    a = n(793030),
    l = n(442837),
    c = n(198168),
    o = n(481060),
    p = n(494620),
    d = n(572004),
    u = n(744993),
    x = n(693587),
    m = n(998964),
    f = n(440589),
    h = n(388032),
    v = n(999852);
function I(e) {
    let { guildId: t, instance: n, onClose: I, transitionState: C } = e,
        N = (0, l.e7)([x.Z], () => {
            var e;
            return null == (e = x.Z.getStateForGuild(t)) ? void 0 : e.instructions[n.planId];
        });
    r.useEffect(() => {
        null == N && (0, u.iX)(t, n.planId);
    }, [t, n.planId, N]);
    let T = (0, m.Z)(n),
        j = r.useCallback(() => {
            (0, d.JG)(T), (0, o.showToast)((0, o.createToast)(h.intl.string(h.t["+5kSoa"]), o.ToastType.SUCCESS));
        }, [T]),
        S = r.useMemo(() => {
            switch (n.status) {
                case i.V.STARTING:
                    return h.intl.string(f.default["1XVBDQ"]);
                case i.V.OFFLINE:
                    return h.intl.string(f.default.m4inWl);
                default:
                    return;
            }
        }, [n.status]);
    return (0, s.jsx)(a.ExpressiveModal, {
        graphic: {
            type: "dynamic",
            component: c.DynamicGraphicComponent.PORTKEY_GAME_INSTRUCTIONS_ASSET,
            props: { instance: n },
        },
        title: n.name,
        subtitle: h.intl.string(f.default["8Fgoo6"]),
        size: "md",
        transitionState: C,
        onClose: I,
        children:
            null == N
                ? (0, s.jsx)(o.$jN, {})
                : (0, s.jsxs)("div", {
                      className: v.content,
                      children: [
                          null != S &&
                              (0, s.jsx)(p.Z, {
                                  className: v.infoBox,
                                  children: S,
                              }),
                          (0, s.jsx)("div", {
                              className: v.stepsContainer,
                              children: N.map((e, t) =>
                                  (0, s.jsxs)(
                                      "div",
                                      {
                                          className: v.step,
                                          children: [
                                              (0, s.jsx)("div", {
                                                  className: v.stepNumber,
                                                  children: (0, s.jsx)(o.Text, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-secondary",
                                                      children: h.intl.formatToPlainString(f.default.e0RxEB, {
                                                          step: t + 1,
                                                      }),
                                                  }),
                                              }),
                                              (0, s.jsx)(o.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "text-secondary",
                                                  children: e,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          (0, s.jsxs)("div", {
                              className: v.serverIpContainer,
                              children: [
                                  (0, s.jsx)("div", {
                                      className: v.serverIpInput,
                                      children: (0, s.jsx)(o.Text, {
                                          variant: "text-md/medium",
                                          color: "header-primary",
                                          children: T,
                                      }),
                                  }),
                                  (0, s.jsx)(o.zxk, {
                                      variant: "primary",
                                      text: h.intl.string(h.t.OpuAlJ),
                                      onClick: j,
                                      icon: o.TIy,
                                  }),
                              ],
                          }),
                      ],
                  }),
    });
}
