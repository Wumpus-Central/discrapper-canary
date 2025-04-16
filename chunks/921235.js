n.d(t, { Z: () => j }), n(388685), n(583741);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(442837),
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
    _ = n(901461),
    y = n(981631),
    C = n(388032),
    x = n(900170);
let v = '749054660769218631';
function j(e) {
    var t;
    let { channel: n } = e,
        [l, j] = i.useState('');
    i.useEffect(() => {
        (0, u.FQ)('847199849233514549', !0);
    }, []);
    let O = (0, a.e7)(
            [f.Z, h.default],
            () =>
                !!o()(f.Z.getMessages(n.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== h.default.getId() && e.state === y.yb.SENT && !(0, _.Z)(e))
        ),
        E = (0, a.e7)([m.default], () => m.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        N = null != (t = b.ZP.useName(E)) ? t : C.NW.string(C.t.y1Wu2d),
        I = (0, a.e7)([d.Z], () => d.Z.getStickerById(v)),
        P = i.useCallback(async () => {
            if (null == l || '' === l)
                try {
                    await c.Z.sendGreetMessage(n.id, v),
                        g.default.track(y.rMx.DM_EMPTY_ACTION, {
                            channel_id: n.id,
                            channel_type: n.type,
                            source: 'Wave',
                            type: 'Send wave'
                        });
                } catch (e) {
                    e.ok || 429 !== e.status || j(C.NW.string(C.t['Whhv4+']));
                }
        }, [n.id, n.type, l]),
        S = C.NW.formatToPlainString(C.t.m0zYbW, { username: N }),
        Z =
            null != l && '' !== l
                ? (0, r.jsx)(s.Text, {
                      className: x.error,
                      color: 'text-danger',
                      variant: 'text-sm/normal',
                      children: l
                  })
                : null;
    return O
        ? (0, r.jsxs)('div', {
              className: x.containerCompact,
              children: [
                  (0, r.jsxs)(s.P3F, {
                      className: null != l && '' !== l ? x.compactButtonDisabled : x.compactButton,
                      'aria-label': C.NW.string(C.t.pJObYG),
                      onClick: P,
                      children: [
                          (0, r.jsx)(p.Z, {
                              sticker: I,
                              size: 24
                          }),
                          (0, r.jsx)(s.Text, {
                              className: x.text,
                              variant: 'text-md/medium',
                              children: S
                          })
                      ]
                  }),
                  Z
              ]
          })
        : (0, r.jsxs)('div', {
              className: x.containerExpanded,
              children: [
                  (0, r.jsx)(p.Z, {
                      sticker: I,
                      size: 160
                  }),
                  (0, r.jsx)(s.zxk, {
                      className: x.button,
                      onClick: P,
                      disabled: !!l,
                      children: S
                  }),
                  Z
              ]
          });
}
