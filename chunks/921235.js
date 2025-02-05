n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
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
    _ = n(51144),
    C = n(901461),
    x = n(981631),
    v = n(388032),
    E = n(207349);
let I = '749054660769218631';
function b(e) {
    var t;
    let { channel: n } = e,
        [a, b] = l.useState('');
    l.useEffect(() => {
        (0, d.FQ)('847199849233514549', !0);
    }, []);
    let Z = (0, s.e7)(
            [m.Z, p.default],
            () =>
                !!r()(m.Z.getMessages(n.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== p.default.getId() && e.state === x.yb.SENT && !(0, C.Z)(e))
        ),
        N = (0, s.e7)([f.default], () => f.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        T = null !== (t = _.ZP.useName(N)) && void 0 !== t ? t : v.intl.string(v.t.y1Wu2d),
        S = (0, s.e7)([u.Z], () => u.Z.getStickerById(I)),
        j = l.useCallback(async () => {
            if (null == a || '' === a)
                try {
                    await c.Z.sendGreetMessage(n.id, I),
                        g.default.track(x.rMx.DM_EMPTY_ACTION, {
                            channel_id: n.id,
                            channel_type: n.type,
                            source: 'Wave',
                            type: 'Send wave'
                        });
                } catch (e) {
                    e.ok || 429 !== e.status || b(v.intl.string(v.t['Whhv4+']));
                }
        }, [n.id, n.type, a]),
        y = v.intl.formatToPlainString(v.t.m0zYbW, { username: T }),
        A =
            null != a && '' !== a
                ? (0, i.jsx)(o.Text, {
                      className: E.error,
                      color: 'text-danger',
                      variant: 'text-sm/normal',
                      children: a
                  })
                : null;
    return Z
        ? (0, i.jsxs)('div', {
              className: E.containerCompact,
              children: [
                  (0, i.jsxs)(o.P3F, {
                      className: null != a && '' !== a ? E.compactButtonDisabled : E.compactButton,
                      'aria-label': v.intl.string(v.t.pJObYG),
                      onClick: j,
                      children: [
                          (0, i.jsx)(h.ZP, {
                              sticker: S,
                              size: 24
                          }),
                          (0, i.jsx)(o.Text, {
                              className: E.text,
                              variant: 'text-md/medium',
                              children: y
                          })
                      ]
                  }),
                  A
              ]
          })
        : (0, i.jsxs)('div', {
              className: E.containerExpanded,
              children: [
                  (0, i.jsx)(h.ZP, {
                      sticker: S,
                      size: 160
                  }),
                  (0, i.jsx)(o.zxk, {
                      className: E.button,
                      onClick: j,
                      disabled: !!a,
                      children: y
                  }),
                  A
              ]
          });
}
