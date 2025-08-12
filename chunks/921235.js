n.d(t, { Z: () => T }), n(388685), n(583741);
var r = n(255367),
    i = n(73800),
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(904245),
    u = n(268350),
    d = n(926491),
    f = n(419922),
    _ = n(314897),
    p = n(375954),
    h = n(594174),
    m = n(626135),
    g = n(51144),
    E = n(901461),
    b = n(981631),
    y = n(388032),
    O = n(276606);
let v = "847199849233514549",
    I = "749054660769218631";
function T(e) {
    var t;
    let { channel: n } = e,
        [o, T] = i.useState("");
    i.useEffect(() => {
        (0, u.FQ)(v, !0);
    }, []);
    let S = (0, s.e7)(
            [p.Z, _.default],
            () =>
                !!a()(p.Z.getMessages(n.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== _.default.getId() && e.state === b.yb.SENT && !(0, E.Z)(e)),
        ),
        A = (0, s.e7)([h.default], () => h.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        N = null != (t = g.ZP.useName(A)) ? t : y.intl.string(y.t.y1Wu2d),
        C = (0, s.e7)([d.Z], () => d.Z.getStickerById(I)),
        R = i.useCallback(async () => {
            if (null == o || "" === o)
                try {
                    await c.Z.sendGreetMessage(n.id, I),
                        m.default.track(b.rMx.DM_EMPTY_ACTION, {
                            channel_id: n.id,
                            channel_type: n.type,
                            source: "Wave",
                            type: "Send wave",
                        });
                } catch (e) {
                    e.ok || 429 !== e.status || T(y.intl.string(y.t["Whhv4+"]));
                }
        }, [n.id, n.type, o]),
        P = y.intl.formatToPlainString(y.t.m0zYbW, { username: N }),
        w =
            null != o && "" !== o
                ? (0, r.jsx)(l.Text, {
                      className: O.error,
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: o,
                  })
                : null;
    return S
        ? (0, r.jsxs)("div", {
              className: O.containerCompact,
              children: [
                  (0, r.jsxs)(l.P3F, {
                      className: null != o && "" !== o ? O.compactButtonDisabled : O.compactButton,
                      "aria-label": y.intl.string(y.t.pJObYG),
                      onClick: R,
                      children: [
                          (0, r.jsx)(f.Z, {
                              sticker: C,
                              size: 24,
                          }),
                          (0, r.jsx)(l.Text, {
                              className: O.text,
                              variant: "text-md/medium",
                              children: P,
                          }),
                      ],
                  }),
                  w,
              ],
          })
        : (0, r.jsxs)("div", {
              className: O.containerExpanded,
              children: [
                  (0, r.jsx)(f.Z, {
                      sticker: C,
                      size: 160,
                      className: O.stickerExpanded,
                  }),
                  (0, r.jsx)(l.zxk, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: R,
                      disabled: !!o,
                      text: P,
                  }),
                  w,
              ],
          });
}
