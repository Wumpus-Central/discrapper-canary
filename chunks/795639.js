n.d(t, { _: () => E }), n(781311), n(953529);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(512722),
    o = n.n(s),
    c = n(55160),
    d = n(399606),
    u = n(755721),
    m = n(481060),
    f = n(166459),
    h = n(607070),
    g = n(541716),
    x = n(273031),
    b = n(859235),
    p = n(313201),
    j = n(70097),
    v = n(374794),
    C = n(470623),
    y = n(983200),
    T = n(127654),
    w = n(124252),
    S = n(388032),
    N = n(238791);
let O = [
        {
            name: "Media Post Thumbnail",
            extensions: ["jpg", "jpeg", "png", "gif", "webp"],
        },
    ],
    I = (0, p.hQ)();
function P(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: r } = e,
        i = (0, y.tu)({
            numAttachments: t.length,
            containerWidth: n,
            containerHeight: r,
        });
    return (0, a.jsx)(a.Fragment, {
        children: t.map((e, t) => {
            var n;
            return (0, a.jsx)(
                "div",
                {
                    style: i[t],
                    children:
                        !0 === e.isVideo
                            ? (0, a.jsx)(j.Z, {
                                  src: e.src,
                                  className: N.thumbnail,
                                  "aria-hidden": !0,
                              })
                            : (0, a.jsx)("img", {
                                  src: e.src,
                                  className: N.thumbnail,
                                  "aria-hidden": !0,
                                  alt: null != (n = null == e ? void 0 : e.alt) ? n : "",
                              }),
                },
                e.src,
            );
        }),
    });
}
let E = (e) => {
    var t;
    let { parentChannel: i } = e,
        { textAreaState: s } = (0, C.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.X),
        p = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        j = (0, w.Z)(i, null == (t = s.textValue) ? void 0 : t.trim()),
        y = r.useMemo(() => j.find((e) => e.isThumbnail), [j]),
        E = null != j && j.length > 0,
        _ = r.useMemo(() => {
            let e = (null == j ? void 0 : j.length) > 1 ? 1.15 : 1;
            return {
                width: 153 * e,
                height: 86 * e,
            };
        }, [j]),
        R = r.useCallback(
            (e) => {
                null != y && f.Z.remove(i.id, y.id, g.Ie.CREATE_FORUM_POST.drafts.type),
                    (0, T.d)(e.currentTarget.files, i, g.Ie.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0,
                        origin: "file_picker",
                    }),
                    (e.currentTarget.value = null);
            },
            [i, y],
        ),
        M = (e) => {
            e.stopPropagation(),
                (null == y ? void 0 : y.upload) != null &&
                    (0, m.ZDy)(async () => {
                        let e = y.upload;
                        o()(null != e, "upload should not be null");
                        let { default: t } = await Promise.resolve().then(n.bind(n, 403592));
                        return (n) => {
                            var r, l;
                            return (0, a.jsx)(
                                t,
                                ((r = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            a = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (a = a.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            a.forEach(function (t) {
                                                var a;
                                                (a = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: a,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = a);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (l = l =
                                    {
                                        upload: e,
                                        channelId: i.id,
                                        draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
                                        onSubmit: (t) => {
                                            let { name: n, description: a, spoiler: r } = t;
                                            f.Z.update(i.id, e.id, g.Ie.CREATE_FORUM_POST.drafts.type, {
                                                filename: n,
                                                description: a,
                                                spoiler: r,
                                            });
                                        },
                                        disableSpoiler: !0,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, a);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                r),
                            );
                        };
                    });
        },
        Z = (0, a.jsx)(v.Z, {
            color: u.Tt.CUSTOM,
            className: N.uploadFileInputContainer,
            innerClassName: N.uploadThumbnailContainer,
            onChange: R,
            multiple: !1,
            "aria-hidden": !0,
            filters: O,
            "aria-describedby": I,
            "aria-label": E ? S.intl.string(S.t.MxJI3f) : S.intl.string(S.t.Cbiofa),
            children: E
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(P, {
                              mediaAttachments: j,
                              containerWidth: _.width,
                              containerHeight: _.height,
                          }),
                          (0, a.jsxs)("div", {
                              className: l()(N.changeThumbnailLabelContainer, {
                                  [N.changeThumbnailLabelOverflow]: (null == j ? void 0 : j.length) > 2,
                              }),
                              children: [
                                  (0, a.jsx)(m.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: S.intl.string(S.t.MxJI3f),
                                  }),
                                  null == y &&
                                      (0, a.jsx)(m.vdY, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: N.editIcon,
                                      }),
                              ],
                          }),
                      ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(m.FmF, {
                              size: "custom",
                              width: 39,
                              height: 39,
                              color: "currentColor",
                              className: N.uploadIcon,
                          }),
                          (0, a.jsx)(m.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: S.intl.string(S.t.Cbiofa),
                          }),
                      ],
                  }),
        });
    return (0, a.jsx)("div", {
        className: N.thumbnailContainer,
        style: _,
        children:
            null != y
                ? (0, a.jsx)(b.Z, {
                      actions: (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(x.Z, {
                                  className: N.action,
                                  tooltip: S.intl.string(S.t.Y8ujqr),
                                  onClick: M,
                                  children: (0, a.jsx)(m.vdY, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                              }),
                              (0, a.jsx)(x.Z, {
                                  className: N.action,
                                  tooltip: S.intl.string(S.t.vN7REz),
                                  onClick: () => f.Z.remove(i.id, y.id, g.Ie.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, a.jsx)(m.XHJ, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
                      draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
                      id: y.id,
                      channelId: i.id,
                      handleEditModal: M,
                      keyboardModeEnabled: p,
                      size: b.q.SMALL,
                      className: N.attachmentListItem,
                      children: Z,
                  })
                : Z,
    });
};
