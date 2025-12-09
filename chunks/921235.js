n.d(t, { Z: () => x }), n(388685), n(583741);
var i = n(54381),
    r = n(473749),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(904245),
    u = n(268350),
    d = n(926491),
    p = n(419922),
    h = n(314897),
    f = n(375954),
    m = n(594174),
    g = n(626135),
    b = n(51144),
    C = n(901461),
    y = n(981631),
    _ = n(388032),
    v = n(315146);
let O = "749054660769218631";
function x(e) {
    var t;
    let { channel: n } = e,
        [l, x] = r.useState("");
    r.useEffect(() => {
        (0, u.FQ)("847199849233514549", !0);
    }, []);
    let E = (0, o.e7)(
            [f.Z, h.default],
            () =>
                !!a()(f.Z.getMessages(n.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== h.default.getId() && e.state === y.yb.SENT && !(0, C.Z)(e)),
        ),
        j = (0, o.e7)([m.default], () => m.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        S = null != (t = b.ZP.useName(j)) ? t : _.intl.string(_.t.y1Wu2f),
        P = (0, o.e7)([d.Z], () => d.Z.getStickerById(O)),
        I = r.useCallback(async () => {
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
                    e.ok || 429 !== e.status || x(_.intl.string(_.t.Whhv4w));
                }
        }, [n.id, n.type, l]),
        Z = _.intl.formatToPlainString(_.t.m0zYbV, { username: S }),
        T =
            null != l && "" !== l
                ? (0, i.jsx)(s.Text, {
                      className: v.error,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: l,
                  })
                : null;
    return E
        ? (0, i.jsxs)("div", {
              className: v.containerCompact,
              children: [
                  (0, i.jsxs)(s.P3F, {
                      className: null != l && "" !== l ? v.compactButtonDisabled : v.compactButton,
                      "aria-label": _.intl.string(_.t.pJObYI),
                      onClick: I,
                      children: [
                          (0, i.jsx)(p.Z, {
                              sticker: P,
                              size: 24,
                          }),
                          (0, i.jsx)(s.Text, {
                              className: v.text,
                              variant: "text-md/medium",
                              children: Z,
                          }),
                      ],
                  }),
                  T,
              ],
          })
        : (0, i.jsxs)("div", {
              className: v.containerExpanded,
              children: [
                  (0, i.jsx)(p.Z, {
                      sticker: P,
                      size: 160,
                      className: v.stickerExpanded,
                  }),
                  (0, i.jsx)(s.Button, {
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
