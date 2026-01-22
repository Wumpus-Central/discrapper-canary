n.d(t, { f: () => w }), n(733351), n(228524);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(284009),
    c = n.n(s),
    o = n(942381),
    d = n(417597),
    u = n(421380),
    m = n(397927),
    h = n(608299),
    f = n(775602),
    g = n(355622),
    x = n(851023),
    b = n(349688),
    p = n(915089),
    j = n(607470),
    v = n(703007),
    y = n(218152),
    A = n(715493),
    C = n(518960),
    O = n(286911),
    N = n(985018),
    S = n(403094);
let T = [
        {
            name: "Media Post Thumbnail",
            extensions: ["jpg", "jpeg", "png", "gif", "webp"],
        },
    ],
    _ = (0, p.Ld)();
function E(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: r } = e,
        a = (0, A.eX)({
            numAttachments: t.length,
            containerWidth: n,
            containerHeight: r,
        });
    return (0, l.jsx)(l.Fragment, {
        children: t.map((e, t) => {
            var n;
            return (0, l.jsx)(
                "div",
                {
                    style: a[t],
                    children:
                        !0 === e.isVideo
                            ? (0, l.jsx)(j.A, {
                                  src: e.src,
                                  className: S.xn,
                                  "aria-hidden": !0,
                              })
                            : (0, l.jsx)("img", {
                                  src: e.src,
                                  className: S.xn,
                                  "aria-hidden": !0,
                                  alt: null != (n = null == e ? void 0 : e.alt) ? n : "",
                              }),
                },
                e.src,
            );
        }),
    });
}
let w = (e) => {
    var t;
    let { parentChannel: a } = e,
        { textAreaState: s } = (0, y.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, o.x),
        p = (0, d.bG)([f.A], () => f.A.keyboardModeEnabled),
        j = (0, O.A)(a, null == (t = s.textValue) ? void 0 : t.trim()),
        A = r.useMemo(() => j.find((e) => e.isThumbnail), [j]),
        w = null != j && j.length > 0,
        R = r.useMemo(() => {
            let e = (null == j ? void 0 : j.length) > 1 ? 1.15 : 1;
            return {
                width: 153 * e,
                height: 86 * e,
            };
        }, [j]),
        k = r.useCallback(
            (e) => {
                null != A && h.A.remove(a.id, A.id, g.oU.CREATE_FORUM_POST.drafts.type),
                    (0, C.R)(e.currentTarget.files, a, g.oU.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0,
                        origin: "file_picker",
                    }),
                    (e.currentTarget.value = null);
            },
            [a, A],
        ),
        P = (e) => {
            e.stopPropagation(),
                (null == A ? void 0 : A.upload) != null &&
                    (0, m.mMO)(async () => {
                        let e = A.upload;
                        c()(null != e, "upload should not be null");
                        let { default: t } = await Promise.resolve().then(n.bind(n, 427281));
                        return (n) => {
                            var r, i;
                            return (0, l.jsx)(
                                t,
                                ((r = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (i = i =
                                    {
                                        upload: e,
                                        channelId: a.id,
                                        draftType: g.oU.CREATE_FORUM_POST.drafts.type,
                                        onSubmit: (t) => {
                                            let { name: n, description: l, spoiler: r } = t;
                                            h.A.update(a.id, e.id, g.oU.CREATE_FORUM_POST.drafts.type, {
                                                filename: n,
                                                description: l,
                                                spoiler: r,
                                            });
                                        },
                                        disableSpoiler: !0,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, l);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                r),
                            );
                        };
                    });
        },
        I = (0, l.jsx)(v.A, {
            color: u.XD.CUSTOM,
            className: S.zL,
            innerClassName: S.Nr,
            onChange: k,
            multiple: !1,
            "aria-hidden": !0,
            filters: T,
            "aria-describedby": _,
            "aria-label": w ? N.intl.string(N.t.MxJI3f) : N.intl.string(N.t.Cbiofa),
            children: w
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(E, {
                              mediaAttachments: j,
                              containerWidth: R.width,
                              containerHeight: R.height,
                          }),
                          (0, l.jsxs)("div", {
                              className: i()(S.On, { [S.bP]: (null == j ? void 0 : j.length) > 2 }),
                              children: [
                                  (0, l.jsx)(m.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: N.intl.string(N.t.MxJI3f),
                                  }),
                                  null == A &&
                                      (0, l.jsx)(m.R2l, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: S.IZ,
                                      }),
                              ],
                          }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(m.XGR, {
                              size: "custom",
                              width: 39,
                              height: 39,
                              color: "currentColor",
                              className: S.T3,
                          }),
                          (0, l.jsx)(m.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: N.intl.string(N.t.Cbiofa),
                          }),
                      ],
                  }),
        });
    return (0, l.jsx)("div", {
        className: S.iT,
        style: R,
        children:
            null != A
                ? (0, l.jsx)(b.A, {
                      actions: (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(x.A, {
                                  className: S.XI,
                                  tooltip: N.intl.string(N.t.Y8ujqr),
                                  onClick: P,
                                  children: (0, l.jsx)(m.R2l, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                              }),
                              (0, l.jsx)(x.A, {
                                  className: S.XI,
                                  tooltip: N.intl.string(N.t.vN7REz),
                                  onClick: () => h.A.remove(a.id, A.id, g.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, l.jsx)(m.ucK, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
                      draftType: g.oU.CREATE_FORUM_POST.drafts.type,
                      id: A.id,
                      channelId: a.id,
                      handleEditModal: P,
                      keyboardModeEnabled: p,
                      size: b.L.SMALL,
                      className: S.Xc,
                      children: I,
                  })
                : I,
    });
};
