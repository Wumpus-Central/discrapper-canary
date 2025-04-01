n.d(t, {
    DM: () => f,
    ZP: () => g
});
var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(692547),
    s = n(481060),
    l = n(109434),
    c = n(456269),
    u = n(479099),
    d = n(176505),
    h = n(388032),
    p = n(591483),
    m = n(835760);
function f(e) {
    let { channel: t, isNew: n } = e,
        i = (0, c.eV)(t),
        o = i.slice(void 0, 3),
        r = i.slice(3),
        a = i.length > 3 ? i.length - 3 : 0,
        s = t.hasFlag(d.zZ.PINNED),
        l = o.length > 0 || s || n;
    return {
        shownTags: o,
        remainingTags: r,
        moreTagsCount: a,
        isPinned: s,
        shouldRenderTagsRow: l,
        forumPostContainsTags: i.length > 0
    };
}
function g(e) {
    let { channel: t, isNew: n, tagsClassName: o, className: c } = e,
        {
            shownTags: d,
            remainingTags: g,
            moreTagsCount: b,
            isPinned: v,
            shouldRenderTagsRow: j
        } = f({
            channel: t,
            isNew: n
        }),
        { tagFilter: O } = (0, l.H)(t.id);
    return j
        ? (0, i.jsxs)('div', {
              className: r()(m.tags, c),
              children: [
                  n
                      ? (0, i.jsx)(s.IGR, {
                            className: r()(p.newBadge, p.inTagsRow),
                            color: a.Z.unsafe_rawColors.BRAND_260.css,
                            text: h.NW.string(h.t.y2b7CA)
                        })
                      : null,
                  v &&
                      (0, i.jsx)('div', {
                          className: m.pinIcon,
                          children: (0, i.jsx)(s.ua7, {
                              text: h.NW.string(h.t['1QLRYW']),
                              children: (e) => {
                                  var t, n;
                                  return (0, i.jsx)(
                                      s.qQX,
                                      ((t = (function (e) {
                                          for (var t = 1; t < arguments.length; t++) {
                                              var n = null != arguments[t] ? arguments[t] : {},
                                                  i = Object.keys(n);
                                              'function' == typeof Object.getOwnPropertySymbols &&
                                                  (i = i.concat(
                                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                      })
                                                  )),
                                                  i.forEach(function (t) {
                                                      var i;
                                                      (i = n[t]),
                                                          t in e
                                                              ? Object.defineProperty(e, t, {
                                                                    value: i,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0
                                                                })
                                                              : (e[t] = i);
                                                  });
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
                                                    var i = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, i);
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
                      (0, i.jsx)(
                          u.Z,
                          {
                              tag: e,
                              size: u.Z.Sizes.SMALL,
                              className: r()(o, { [m.tagFiltered]: O.has(e.id) })
                          },
                          e.id
                      )
                  ),
                  b > 0
                      ? (0, i.jsx)(u.f, {
                            tags: g,
                            count: b,
                            size: u.Z.Sizes.SMALL
                        })
                      : null
              ]
          })
        : null;
}
