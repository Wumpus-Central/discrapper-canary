(n.d(t, { Z: () => O }), n(388685), n(583741));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(904245),
    d = n(268350),
    p = n(926491),
    h = n(419922),
    f = n(314897),
    m = n(375954),
    g = n(594174),
    b = n(626135),
    _ = n(51144),
    y = n(901461),
    C = n(981631),
    x = n(388032),
    v = n(900170);
let j = '749054660769218631';
function O(e) {
    var t;
    let { channel: n } = e,
        [l, O] = i.useState('');
    i.useEffect(() => {
        (0, d.FQ)('847199849233514549', !0);
    }, []);
    let E = (0, o.e7)(
            [m.Z, f.default],
            () =>
                !!a()(m.Z.getMessages(n.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== f.default.getId() && e.state === C.yb.SENT && !(0, y.Z)(e))
        ),
        S = (0, o.e7)([g.default], () => g.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        I = null != (t = _.ZP.useName(S)) ? t : x.intl.string(x.t.y1Wu2d),
        P = (0, o.e7)([p.Z], () => p.Z.getStickerById(j)),
        Z = i.useCallback(async () => {
            if (null == l || '' === l)
                try {
                    (await u.Z.sendGreetMessage(n.id, j),
                        b.default.track(C.rMx.DM_EMPTY_ACTION, {
                            channel_id: n.id,
                            channel_type: n.type,
                            source: 'Wave',
                            type: 'Send wave'
                        }));
                } catch (e) {
                    e.ok || 429 !== e.status || O(x.intl.string(x.t['Whhv4+']));
                }
        }, [n.id, n.type, l]),
        N = x.intl.formatToPlainString(x.t.m0zYbW, { username: I }),
        T =
            null != l && '' !== l
                ? (0, r.jsx)(c.Text, {
                      className: v.error,
                      color: 'text-danger',
                      variant: 'text-sm/normal',
                      children: l
                  })
                : null;
    return E
        ? (0, r.jsxs)('div', {
              className: v.containerCompact,
              children: [
                  (0, r.jsxs)(c.P3F, {
                      className: null != l && '' !== l ? v.compactButtonDisabled : v.compactButton,
                      'aria-label': x.intl.string(x.t.pJObYG),
                      onClick: Z,
                      children: [
                          (0, r.jsx)(h.Z, {
                              sticker: P,
                              size: 24
                          }),
                          (0, r.jsx)(c.Text, {
                              className: v.text,
                              variant: 'text-md/medium',
                              children: N
                          })
                      ]
                  }),
                  T
              ]
          })
        : (0, r.jsxs)('div', {
              className: v.containerExpanded,
              children: [
                  (0, r.jsx)(h.Z, {
                      sticker: P,
                      size: 160
                  }),
                  (0, r.jsx)(s.zx, {
                      className: v.button,
                      onClick: Z,
                      disabled: !!l,
                      children: N
                  }),
                  T
              ]
          });
}
