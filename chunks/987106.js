l.d(n, { Z: () => g });
var t = l(200651);
l(192379);
var i = l(120356),
    r = l.n(i),
    a = l(392711),
    s = l(481060),
    o = l(239091),
    u = l(596454),
    c = l(911969),
    d = l(744969),
    m = l(572004),
    h = l(49012),
    p = l(970184),
    x = l(280501),
    v = l(388032),
    f = l(502385);
function C(e) {
    let { url: n, onSelect: l } = e;
    return m.wS && null != n
        ? (0, t.jsx)(s.v2r, {
              navId: 'component-button',
              onClose: o.Zy,
              'aria-label': v.intl.string(v.t.tvTXy8),
              onSelect: l,
              children: (0, t.jsx)(s.kSQ, {
                  children: (0, t.jsx)(s.sNh, {
                      id: 'copy',
                      label: v.intl.string(v.t.uHhnfX),
                      action: () => (0, m.JG)(n)
                  })
              })
          })
        : null;
}
function g(e) {
    let n;
    let { label: l, style: i, disabled: m, emoji: v, url: g, skuId: j } = e,
        { executeStateUpdate: N, visualState: S, isDisabled: E } = (0, p.Ee)(e),
        I = (0, d.s)(j),
        Z = null != j && i === c.ZJ.PREMIUM,
        T = Z && (null == I ? void 0 : I.disabled),
        b = Z ? (null == I ? void 0 : I.label) : l,
        y = null != v,
        L = null != b && b.length > 0,
        k = i === c.ZJ.LINK && null != g && g.length > 0,
        _ = S === x.gH.LOADING || (Z && null == I);
    return (
        (n = k
            ? () => {
                  (0, h.q)({
                      href: null != g ? g : '',
                      shouldConfirm: !0
                  });
              }
            : Z
              ? null != I && !1 === I.disabled
                  ? I.onClick
                  : a.noop
              : () => N()),
        (0, t.jsxs)(s.zxk, {
            color: (function (e) {
                switch (e) {
                    case c.ZJ.PRIMARY:
                    case c.ZJ.PREMIUM:
                        return s.zxk.Colors.BRAND;
                    case c.ZJ.SUCCESS:
                        return s.zxk.Colors.GREEN;
                    case c.ZJ.DESTRUCTIVE:
                        return s.zxk.Colors.RED;
                    default:
                        return s.zxk.Colors.PRIMARY;
                }
            })(i),
            size: s.zxk.Sizes.SMALL,
            disabled: m || S === x.gH.DISABLED || E || T,
            onClick: n,
            onContextMenu: (e) => {
                k &&
                    (0, o.vq)(e, (e) =>
                        (0, t.jsx)(C, {
                            ...e,
                            url: g
                        })
                    );
            },
            role: k ? 'link' : 'button',
            children: [
                (0, t.jsxs)('div', {
                    className: r()(f.content, {
                        [f.hidden]: _,
                        [f.premium]: Z
                    }),
                    'aria-hidden': _,
                    children: [
                        Z
                            ? (0, t.jsx)('div', {
                                  className: f.shopIcon,
                                  children: (0, t.jsx)(s.EOn, {
                                      size: 'xs',
                                      color: 'white'
                                  })
                              })
                            : null,
                        y
                            ? (0, t.jsx)(u.Z, {
                                  className: r()({ [f.textEmoji]: L }),
                                  src: v.src,
                                  emojiId: v.id,
                                  emojiName: v.name,
                                  animated: v.animated
                              })
                            : null,
                        L
                            ? (0, t.jsx)('div', {
                                  className: f.label,
                                  children: b
                              })
                            : null,
                        k
                            ? (0, t.jsx)(s.rgF, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: f.launchIcon
                              })
                            : null
                    ]
                }),
                _
                    ? (0, t.jsx)('div', {
                          className: f.loading,
                          children: (0, t.jsx)(s.bbz, {
                              dotRadius: 3.5,
                              themed: !0
                          })
                      })
                    : null
            ]
        })
    );
}
