n.d(t, { Z: () => x }), n(388685), n(583741);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(904245),
    u = n(268350),
    d = n(926491),
    p = n(419922),
    f = n(314897),
    h = n(375954),
    m = n(594174),
    g = n(626135),
    b = n(51144),
    _ = n(901461),
    y = n(981631),
    C = n(388032),
    v = n(315146);
let O = "749054660769218631";
function x(e) {
    var t;
    let { channel: n } = e,
        [l, x] = i.useState("");
    i.useEffect(() => {
        (0, u.FQ)("847199849233514549", !0);
    }, []);
    let E = (0, o.e7)(
            [h.Z, f.default],
            () =>
                !!a()(h.Z.getMessages(n.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== f.default.getId() && e.state === y.yb.SENT && !(0, _.Z)(e)),
        ),
        j = (0, o.e7)([m.default], () => m.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        S = null != (t = b.ZP.useName(j)) ? t : C.intl.string(C.t.y1Wu2f),
        P = (0, o.e7)([d.Z], () => d.Z.getStickerById(O)),
        I = i.useCallback(async () => {
            if (null == l || "" === l)
                try {
                    await c.Z.sendGreetMessage(n.id, O),
                        g.default.track(y.rMx.DM_EMPTY_ACTION, {
                            channel_id: n.id,
                            channel_type: n.type,
                            source: "Wave",
                            type: "Send wave",
                        });
                } catch (e) {
                    e.ok || 429 !== e.status || x(C.intl.string(C.t.Whhv4w));
                }
        }, [n.id, n.type, l]),
        Z = C.intl.formatToPlainString(C.t.m0zYbV, { username: S }),
        T =
            null != l && "" !== l
                ? (0, r.jsx)(s.Text, {
                      className: v.error,
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: l,
                  })
                : null;
    return E
        ? (0, r.jsxs)("div", {
              className: v.containerCompact,
              children: [
                  (0, r.jsxs)(s.P3F, {
                      className: null != l && "" !== l ? v.compactButtonDisabled : v.compactButton,
                      "aria-label": C.intl.string(C.t.pJObYI),
                      onClick: I,
                      children: [
                          (0, r.jsx)(p.Z, {
                              sticker: P,
                              size: 24,
                          }),
                          (0, r.jsx)(s.Text, {
                              className: v.text,
                              variant: "text-md/medium",
                              children: Z,
                          }),
                      ],
                  }),
                  T,
              ],
          })
        : (0, r.jsxs)("div", {
              className: v.containerExpanded,
              children: [
                  (0, r.jsx)(p.Z, {
                      sticker: P,
                      size: 160,
                      className: v.stickerExpanded,
                  }),
                  (0, r.jsx)(s.Button, {
                      fullWidth: !0,
                      variant: "primary",
                      size: "md",
                      onClick: I,
                      disabled: !!l,
                      text: Z,
                  }),
                  T,
              ],
          });
}
