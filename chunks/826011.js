s.d(t, { default: () => h });
var n = s(951288),
    r = s(647438),
    a = s(442837),
    i = s(667202),
    l = s(481060),
    c = s(572004),
    o = s(744993),
    d = s(693587),
    p = s(943970),
    u = s(998964),
    m = s(440589),
    x = s(388032),
    v = s(999852);
function h(e) {
    let { guildId: t, instance: s, onClose: h, transitionState: f } = e,
        I = (0, a.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getStateForGuild(t)) ? void 0 : e.instructions[s.planId];
        });
    r.useEffect(() => {
        null == I && (0, o.iX)(t, s.planId);
    }, [t, s.planId, I]);
    let j = (0, u.Z)(s),
        C = r.useCallback(() => {
            (0, c.JG)(j), (0, l.showToast)((0, l.createToast)(x.intl.string(x.t["+5kSoa"]), l.ToastType.SUCCESS));
        }, [j]),
        N = (0, p.Z)(s.gameId, "cover");
    return (0, n.jsx)(i.I, {
        graphic: {
            src: N,
            type: "image",
        },
        title: s.name,
        subtitle: x.intl.string(m.default["8Fgoo6"]),
        size: "md",
        transitionState: f,
        onClose: h,
        children:
            null == I
                ? (0, n.jsx)(l.$jN, {})
                : (0, n.jsxs)("div", {
                      className: v.content,
                      children: [
                          (0, n.jsx)("div", {
                              className: v.stepsContainer,
                              children: I.map((e, t) =>
                                  (0, n.jsxs)(
                                      "div",
                                      {
                                          className: v.step,
                                          children: [
                                              (0, n.jsx)("div", {
                                                  className: v.stepNumber,
                                                  children: (0, n.jsx)(l.Text, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-secondary",
                                                      children: x.intl.formatToPlainString(m.default.e0RxEB, {
                                                          step: t + 1,
                                                      }),
                                                  }),
                                              }),
                                              (0, n.jsx)(l.Text, {
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
                                      children: (0, n.jsx)(l.Text, {
                                          variant: "text-md/medium",
                                          color: "header-primary",
                                          children: j,
                                      }),
                                  }),
                                  (0, n.jsx)(l.zxk, {
                                      variant: "primary",
                                      text: x.intl.string(x.t.OpuAlJ),
                                      onClick: C,
                                      icon: l.TIy,
                                  }),
                              ],
                          }),
                      ],
                  }),
    });
}
