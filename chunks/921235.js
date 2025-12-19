n.d(t, { Z: () => E }), n(388685), n(583741);
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
    f = n(314897),
    h = n(375954),
    m = n(594174),
    g = n(626135),
    b = n(51144),
    y = n(901461),
    C = n(981631),
    v = n(388032),
    x = n(42241);
let O = "749054660769218631";
function E(e) {
    var t;
    let { channel: n } = e,
        [l, E] = r.useState("");
    r.useEffect(() => {
        (0, u.FQ)("847199849233514549", !0);
    }, []);
    let j = (0, o.e7)(
            [h.Z, f.default],
            () =>
                !!a()(h.Z.getMessages(n.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== f.default.getId() && e.state === C.yb.SENT && !(0, y.Z)(e)),
        ),
        S = (0, o.e7)([m.default], () => m.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        _ = null != (t = b.ZP.useName(S)) ? t : v.intl.string(v.t.y1Wu2f),
        P = (0, o.e7)([d.Z], () => d.Z.getStickerById(O)),
        I = r.useCallback(async () => {
            if (null == l || "" === l)
                try {
                    await c.Z.sendGreetMessage(n.id, O),
                        g.default.track(C.rMx.DM_EMPTY_ACTION, {
                            channel_id: n.id,
                            channel_type: n.type,
                            source: "Wave",
                            type: "Send wave",
                        });
                } catch (e) {
                    e.ok || 429 !== e.status || E(v.intl.string(v.t.Whhv4w));
                }
        }, [n.id, n.type, l]),
        Z = v.intl.formatToPlainString(v.t.m0zYbV, { username: _ }),
        T =
            null != l && "" !== l
                ? (0, i.jsx)(s.Text, {
                      className: x.error,
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      children: l,
                  })
                : null;
    return j
        ? (0, i.jsxs)("div", {
              className: x.containerCompact,
              children: [
                  (0, i.jsxs)(s.P3F, {
                      className: null != l && "" !== l ? x.compactButtonDisabled : x.compactButton,
                      "aria-label": v.intl.string(v.t.pJObYI),
                      onClick: I,
                      children: [
                          (0, i.jsx)(p.Z, {
                              sticker: P,
                              size: 24,
                          }),
                          (0, i.jsx)(s.Text, {
                              className: x.text,
                              variant: "text-md/medium",
                              children: Z,
                          }),
                      ],
                  }),
                  T,
              ],
          })
        : (0, i.jsxs)("div", {
              className: x.containerExpanded,
              children: [
                  (0, i.jsx)(p.Z, {
                      sticker: P,
                      size: 160,
                      className: x.stickerExpanded,
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
