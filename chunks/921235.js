n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(904245),
    d = n(268350),
    u = n(926491),
    h = n(419922),
    p = n(314897),
    m = n(375954),
    f = n(594174),
    g = n(626135),
    C = n(51144),
    x = n(901461),
    v = n(981631),
    _ = n(388032),
    I = n(207349);
let E = '749054660769218631';
function b(e) {
    var t;
    let { channel: n } = e,
        [r, b] = l.useState('');
    l.useEffect(() => {
        (0, d.FQ)('847199849233514549', !0);
    }, []);
    let Z = (0, s.e7)(
            [m.Z, p.default],
            () =>
                !!a()(m.Z.getMessages(n.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== p.default.getId() && e.state === v.yb.SENT && !(0, x.Z)(e))
        ),
        S = (0, s.e7)([f.default], () => f.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        N = null !== (t = C.ZP.useName(S)) && void 0 !== t ? t : _.intl.string(_.t.y1Wu2d),
        T = (0, s.e7)([u.Z], () => u.Z.getStickerById(E)),
        j = l.useCallback(async () => {
            if (null == r || '' === r)
                try {
                    await c.Z.sendGreetMessage(n.id, E),
                        g.default.track(v.rMx.DM_EMPTY_ACTION, {
                            channel_id: n.id,
                            channel_type: n.type,
                            source: 'Wave',
                            type: 'Send wave'
                        });
                } catch (e) {
                    !e.ok && 429 === e.status && b(_.intl.string(_.t['Whhv4+']));
                }
        }, [n.id, n.type, r]),
        A = _.intl.formatToPlainString(_.t.m0zYbW, { username: N }),
        y =
            null != r && '' !== r
                ? (0, i.jsx)(o.Text, {
                      className: I.error,
                      color: 'text-danger',
                      variant: 'text-sm/normal',
                      children: r
                  })
                : null;
    return Z
        ? (0, i.jsxs)('div', {
              className: I.containerCompact,
              children: [
                  (0, i.jsxs)(o.Clickable, {
                      className: null != r && '' !== r ? I.compactButtonDisabled : I.compactButton,
                      'aria-label': _.intl.string(_.t.pJObYG),
                      onClick: j,
                      children: [
                          (0, i.jsx)(h.ZP, {
                              sticker: T,
                              size: 24
                          }),
                          (0, i.jsx)(o.Text, {
                              className: I.text,
                              variant: 'text-md/medium',
                              children: A
                          })
                      ]
                  }),
                  y
              ]
          })
        : (0, i.jsxs)('div', {
              className: I.containerExpanded,
              children: [
                  (0, i.jsx)(h.ZP, {
                      sticker: T,
                      size: 160
                  }),
                  (0, i.jsx)(o.Button, {
                      className: I.button,
                      onClick: j,
                      disabled: !!r,
                      children: A
                  }),
                  y
              ]
          });
}
