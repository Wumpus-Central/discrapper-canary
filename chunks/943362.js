n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(239091),
    l = n(782568),
    c = n(364640),
    u = n(124072),
    d = n(198620),
    f = n(746878),
    _ = n(981631),
    p = n(833845),
    h = n(606629);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    return {
        react(t, i, m) {
            let E = m.noStyleAndInteraction
                    ? void 0
                    : async (n) => {
                          let r = await (0, d.B_)(t.attachmentUrl);
                          e.shouldStopPropagation && (null == n || n.stopPropagation()), c.Z.trackLinkClicked(r), e.shouldCloseDefaultModals && (0, a.pTH)(), (0, l.Z)(r);
                      },
                y = m.noStyleAndInteraction
                    ? _.dG4
                    : (e) => {
                          (0, s.jW)(e, async () => {
                              let { default: e } = await n.e('98466').then(n.bind(n, 151578));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      b(g({}, n), {
                                          attachmentUrl: t.attachmentUrl,
                                          attachmentName: t.attachmentName
                                      })
                                  );
                          });
                      };
            return (0, r.jsxs)(
                u.Z,
                {
                    role: 'link',
                    href: t.attachmentUrl,
                    onClick: E,
                    onContextMenu: y,
                    className: 'attachmentLink',
                    children: [
                        (0, r.jsx)(a.Ujz, {
                            size: 'xs',
                            className: o()(h.icon, p.icon),
                            color: a.TVs.colors.MENTION_FOREGROUND
                        }),
                        (0, f.S)(t, i, m)
                    ]
                },
                m.key
            );
        }
    };
}
