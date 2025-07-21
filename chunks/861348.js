(r.d(t, { default: () => M }), r(539854), r(388685));
var n = r(255367),
    i = r(73800),
    o = r(120356),
    c = r.n(o),
    s = r(954955),
    a = r.n(s),
    l = r(442837),
    u = r(477690),
    f = r(481060),
    d = r(691251),
    p = r(563132),
    b = r(409813),
    h = r(185139),
    j = r(624138),
    O = r(790954),
    m = r(453070),
    g = r(926491),
    P = r(378233),
    k = r(515005),
    _ = r(282896),
    y = r(732171),
    S = r(981631),
    x = r(388032),
    v = r(982301);
let I = (0, j.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
    C = (0, j.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
    w = (0, j.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
    E = I + 2 * C,
    N = a()(O.pF, 250),
    T = () => {
        N.cancel();
    },
    W = (e) => {
        let { visibleRowIndex: t, columnIndex: r } = e;
        (N.cancel(), (0, O.Mf)(r, t, d.u.MOUSE_EVENT));
    },
    A = (e) => {
        let { stickerPack: t, width: r, hasHeaderImage: o, isScrolling: s, onInspect: a } = e,
            l = i.useMemo(() => [(0, P.z)(t)], [t]),
            u = (0, O.Y6)((e) => e.inspectedStickerPosition),
            {
                rowCountBySection: f,
                stickersGrid: d,
                gutterWidth: p
            } = (0, m.el)({
                stickersCategories: l,
                stickerNodeMargin: w,
                stickerNodeWidth: E,
                listWidth: r
            });
        return (0, n.jsxs)('div', {
            className: c()(v.container, { [v.containerWithHeader]: o }),
            children: [
                (0, n.jsx)(
                    _.Z,
                    {
                        className: v.header,
                        stickerPack: t,
                        withDescription: !0
                    },
                    t.id
                ),
                (0, n.jsx)('div', {
                    onFocus: T,
                    onBlur: N,
                    onMouseOver: T,
                    onMouseOut: N,
                    children: (() => {
                        if (0 === f.length) return null;
                        let e = [];
                        for (let t = 0; t < f[0]; t++)
                            e.push(
                                (0, n.jsx)(
                                    k.Z,
                                    {
                                        enlargeOnInteraction: !0,
                                        preferAnimation: !0,
                                        gutterWidth: p,
                                        inspectedStickerPosition: u,
                                        isScrolling: s,
                                        onInspect: a,
                                        rowIndex: t,
                                        stickerDescriptors: d[t],
                                        stickerPadding: C,
                                        stickerSize: I,
                                        isDisplayingIndividualStickers: !0,
                                        checkSendability: !1
                                    },
                                    t
                                )
                            );
                        return e;
                    })()
                })
            ]
        });
    },
    R = (e) => {
        let { onClose: t, stickerPack: r } = e;
        (0, m.fP)();
        let i = (0, l.e7)([g.Z], () => g.Z.isPremiumPack(r.id));
        return (0, n.jsxs)(f.mzw, {
            className: v.footer,
            children: [
                (0, n.jsx)(f.eee, {
                    onClick: t,
                    className: v.skuPreviewFooterCloseButton,
                    children: x.intl.string(x.t.cpT0Cg)
                }),
                i &&
                    (0, n.jsx)(f.zxk, {
                        variant: 'expressive',
                        type: 'submit',
                        icon: f.SrA,
                        text: x.intl.string(x.t['w+kuhY']),
                        onClick: () => {
                            (t(), (0, y.Z)({ section: S.jXE.STICKER_PACK_VIEW_ALL }));
                        }
                    })
            ]
        });
    },
    D = (e) => {
        let { stickerPack: t, onClose: r } = e,
            i = (0, P.sM)(t, 1024);
        return null == i
            ? null
            : (0, n.jsxs)(f.xBx, {
                  className: v.headerWithImage,
                  children: [
                      (0, n.jsx)('div', {
                          role: 'image',
                          style: { backgroundImage: 'url('.concat(i, ')') },
                          className: v.backgroundImage
                      }),
                      (0, n.jsx)(f.olH, {
                          className: v.closeButton,
                          onClick: r
                      })
                  ]
              });
    };
function M(e) {
    var t,
        r,
        { onClose: o, stickerPack: c } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) ((r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) ((r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
            }
            return i;
        })(e, ['onClose', 'stickerPack']);
    let [a, l] = i.useState(null),
        u = i.useCallback((e) => {
            null !== e && l(e.offsetWidth);
        }, []);
    return (
        i.useLayoutEffect(() => {
            (0, O.pF)();
        }, []),
        (0, n.jsx)(p.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, n.jsx)(
                f.Y0X,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                ((n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n));
                            }));
                    }
                    return e;
                })({}, s)),
                (r = r =
                    {
                        'aria-labelledby': 'sticker-pack-sku-preview-modal',
                        parentComponent: 'StickerPackViewAllModal',
                        children: (0, n.jsx)(h.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, n.jsx)('div', {
                                ref: u,
                                children:
                                    null != a &&
                                    (0, n.jsx)(A, {
                                        stickerPack: c,
                                        hasHeaderImage: !0,
                                        onInspect: W,
                                        width: a
                                    })
                            }),
                            footer: (0, n.jsx)(R, {
                                onClose: o,
                                stickerPack: c
                            }),
                            header: (0, n.jsx)(D, {
                                onClose: o,
                                stickerPack: c
                            }),
                            onScroll: N,
                            steps: [b.h8.SKU_PREVIEW],
                            currentStep: b.h8.SKU_PREVIEW
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t)
            )
        })
    );
}
