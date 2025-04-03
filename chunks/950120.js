n.r(t), n.d(t, { default: () => m });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(873546),
    s = n(481060),
    c = n(425493),
    u = n(376641),
    d = n(714338),
    f = n(585483),
    p = n(288229),
    _ = n(981631),
    h = n(388032),
    O = n(854600);
function b(e) {
    let { onClose: t } = e,
        n = i.useRef(null);
    return (0, r.jsx)('div', {
        className: O.mobileCloseWrapper,
        ref: n,
        children: (0, r.jsx)(s.JcV, {
            containerRef: n,
            children: (0, r.jsx)('div', {
                children: (0, r.jsx)(c.Z, {
                    closeAction: t,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function m(e) {
    var t,
        n,
        { onClose: o, items: c, startingIndex: m, fit: g, shouldRedactExplicitContent: y, shouldHideMediaOptions: C, shouldAnimateCarousel: E, className: S, transitionState: v } = e,
        P = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['onClose', 'items', 'startingIndex', 'fit', 'shouldRedactExplicitContent', 'shouldHideMediaOptions', 'shouldAnimateCarousel', 'className', 'transitionState']);
    let x = l.tq && null != o;
    return (
        i.useEffect(() => {
            if (null != o)
                return (
                    f.S.subscribe(_.CkL.MEDIA_MODAL_CLOSE, o),
                    () => {
                        f.S.unsubscribe(_.CkL.MEDIA_MODAL_CLOSE, o);
                    }
                );
        }, [o]),
        i.useEffect(
            () => (
                v === s.Dvm.ENTERED && (d.Z.disable(), d.Z.enableTemp(u.P)),
                v === s.Dvm.HIDDEN && (d.Z.disable(), d.Z.enableTemp(u.v)),
                () => {
                    d.Z.disableTemp();
                }
            ),
            [v]
        ),
        (0, r.jsxs)(
            s.Y0X,
            ((t = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    hideShadow: !0,
                    className: a()(O.carouselModal, S),
                    transitionState: v
                },
                P
            )),
            (n = n =
                {
                    size: s.CgR.DYNAMIC,
                    'aria-label': h.NW.string(h.t.AMTX3t),
                    onClick: o,
                    children: [
                        x ? (0, r.jsx)(b, { onClose: o }) : null,
                        (0, r.jsx)(p.Z, {
                            items: c,
                            startIndex: m,
                            fit: g,
                            shouldRedactExplicitContent: y,
                            shouldHideMediaOptions: C,
                            shouldAnimateCarousel: E
                        })
                    ]
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
        )
    );
}
