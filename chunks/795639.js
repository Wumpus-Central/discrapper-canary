n.d(t, { _: () => E }), n(781311), n(953529);
var r = n(54381),
    a = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(512722),
    o = n.n(s),
    c = n(782425),
    d = n(399606),
    u = n(755721),
    m = n(481060),
    h = n(166459),
    f = n(607070),
    g = n(541716),
    x = n(273031),
    b = n(859235),
    p = n(313201),
    j = n(70097),
    v = n(374794),
    C = n(470623),
    y = n(983200),
    T = n(127654),
    S = n(124252),
    N = n(388032),
    w = n(238791);
let O = [
        {
            name: "Media Post Thumbnail",
            extensions: ["jpg", "jpeg", "png", "gif", "webp"],
        },
    ],
    P = (0, p.hQ)();
function I(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: a } = e,
        i = (0, y.tu)({
            numAttachments: t.length,
            containerWidth: n,
            containerHeight: a,
        });
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) => {
            var n;
            return (0, r.jsx)(
                "div",
                {
                    style: i[t],
                    children:
                        !0 === e.isVideo
                            ? (0, r.jsx)(j.Z, {
                                  src: e.src,
                                  className: w.thumbnail,
                                  "aria-hidden": !0,
                              })
                            : (0, r.jsx)("img", {
                                  src: e.src,
                                  className: w.thumbnail,
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
        p = (0, d.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        j = (0, S.Z)(i, null == (t = s.textValue) ? void 0 : t.trim()),
        y = a.useMemo(() => j.find((e) => e.isThumbnail), [j]),
        E = null != j && j.length > 0,
        _ = a.useMemo(() => {
            let e = (null == j ? void 0 : j.length) > 1 ? 1.15 : 1;
            return {
                width: 153 * e,
                height: 86 * e,
            };
        }, [j]),
        R = a.useCallback(
            (e) => {
                null != y && h.Z.remove(i.id, y.id, g.Ie.CREATE_FORUM_POST.drafts.type),
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
                            var a, l;
                            return (0, r.jsx)(
                                t,
                                ((a = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
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
                                            let { name: n, description: r, spoiler: a } = t;
                                            h.Z.update(i.id, e.id, g.Ie.CREATE_FORUM_POST.drafts.type, {
                                                filename: n,
                                                description: r,
                                                spoiler: a,
                                            });
                                        },
                                        disableSpoiler: !0,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                a),
                            );
                        };
                    });
        },
        Z = (0, r.jsx)(v.Z, {
            color: u.Tt.CUSTOM,
            className: w.uploadFileInputContainer,
            innerClassName: w.uploadThumbnailContainer,
            onChange: R,
            multiple: !1,
            "aria-hidden": !0,
            filters: O,
            "aria-describedby": P,
            "aria-label": E ? N.intl.string(N.t.MxJI3f) : N.intl.string(N.t.Cbiofa),
            children: E
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(I, {
                              mediaAttachments: j,
                              containerWidth: _.width,
                              containerHeight: _.height,
                          }),
                          (0, r.jsxs)("div", {
                              className: l()(w.changeThumbnailLabelContainer, {
                                  [w.changeThumbnailLabelOverflow]: (null == j ? void 0 : j.length) > 2,
                              }),
                              children: [
                                  (0, r.jsx)(m.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: N.intl.string(N.t.MxJI3f),
                                  }),
                                  null == y &&
                                      (0, r.jsx)(m.vdY, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: w.editIcon,
                                      }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(m.FmF, {
                              size: "custom",
                              width: 39,
                              height: 39,
                              color: "currentColor",
                              className: w.uploadIcon,
                          }),
                          (0, r.jsx)(m.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: N.intl.string(N.t.Cbiofa),
                          }),
                      ],
                  }),
        });
    return (0, r.jsx)("div", {
        className: w.thumbnailContainer,
        style: _,
        children:
            null != y
                ? (0, r.jsx)(b.Z, {
                      actions: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(x.Z, {
                                  className: w.action,
                                  tooltip: N.intl.string(N.t.Y8ujqr),
                                  onClick: M,
                                  children: (0, r.jsx)(m.vdY, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                              }),
                              (0, r.jsx)(x.Z, {
                                  className: w.action,
                                  tooltip: N.intl.string(N.t.vN7REz),
                                  onClick: () => h.Z.remove(i.id, y.id, g.Ie.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, r.jsx)(m.XHJ, {
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
                      className: w.attachmentListItem,
                      children: Z,
                  })
                : Z,
    });
};
