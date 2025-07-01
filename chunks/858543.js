n.d(t, {
    DM: () => f,
    ZP: () => b
});
var r = n(255367);
n(73800);
var s = n(120356),
    l = n.n(s),
    a = n(692547),
    i = n(481060),
    o = n(109434),
    c = n(456269),
    u = n(479099),
    d = n(176505),
    m = n(388032),
    h = n(602512),
    g = n(520069);
function f(e) {
    let { channel: t, isNew: n } = e,
        r = (0, c.eV)(t),
        s = r.slice(void 0, 3),
        l = r.slice(3),
        a = r.length > 3 ? r.length - 3 : 0,
        i = t.hasFlag(d.zZ.PINNED),
        o = s.length > 0 || i || n;
    return {
        shownTags: s,
        remainingTags: l,
        moreTagsCount: a,
        isPinned: i,
        shouldRenderTagsRow: o,
        forumPostContainsTags: r.length > 0
    };
}
function b(e) {
    let { channel: t, isNew: n, tagsClassName: s, className: c } = e,
        {
            shownTags: d,
            remainingTags: b,
            moreTagsCount: p,
            isPinned: j,
            shouldRenderTagsRow: x
        } = f({
            channel: t,
            isNew: n
        }),
        { tagFilter: v } = (0, o.H)(t.id);
    return x
        ? (0, r.jsxs)('div', {
              className: l()(g.tags, c),
              children: [
                  n
                      ? (0, r.jsx)(i.IGR, {
                            className: l()(h.newBadge, h.inTagsRow),
                            color: a.Z.unsafe_rawColors.BRAND_260.css,
                            text: m.intl.string(m.t.y2b7CA)
                        })
                      : null,
                  j &&
                      (0, r.jsx)('div', {
                          className: g.pinIcon,
                          children: (0, r.jsx)(i.ua7, {
                              text: m.intl.string(m.t['1QLRYW']),
                              children: (e) => {
                                  var t, n;
                                  return (0, r.jsx)(
                                      i.qQX,
                                      ((t = (function (e) {
                                          for (var t = 1; t < arguments.length; t++) {
                                              var n = null != arguments[t] ? arguments[t] : {},
                                                  r = Object.keys(n);
                                              ('function' == typeof Object.getOwnPropertySymbols &&
                                                  (r = r.concat(
                                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                      })
                                                  )),
                                                  r.forEach(function (t) {
                                                      var r;
                                                      ((r = n[t]),
                                                          t in e
                                                              ? Object.defineProperty(e, t, {
                                                                    value: r,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0
                                                                })
                                                              : (e[t] = r));
                                                  }));
                                          }
                                          return e;
                                      })({ size: 'custom' }, e)),
                                      (n = n =
                                          {
                                              width: 16,
                                              height: 16,
                                              color: 'white'
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r);
                                                }
                                                return n;
                                            })(Object(n)).forEach(function (e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                            }),
                                      t)
                                  );
                              }
                          })
                      }),
                  d.map((e) =>
                      (0, r.jsx)(
                          u.Z,
                          {
                              tag: e,
                              size: u.Z.Sizes.SMALL,
                              className: l()(s, { [g.tagFiltered]: v.has(e.id) })
                          },
                          e.id
                      )
                  ),
                  p > 0
                      ? (0, r.jsx)(u.f, {
                            tags: b,
                            count: p,
                            size: u.Z.Sizes.SMALL
                        })
                      : null
              ]
          })
        : null;
}
