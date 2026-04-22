"use strict";
n.d(t, { f: () => L });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(942381),
    c = n(417597),
    u = n(862482),
    m = n(192308),
    h = n(750943),
    g = n(834730),
    x = n(22231),
    f = n(241326),
    _ = n(608299),
    p = n(775602),
    j = n(355622),
    b = n(851023),
    v = n(349688),
    C = n(915089),
    A = n(607470),
    N = n(703007),
    S = n(218152),
    E = n(715493),
    T = n(518960),
    y = n(286911),
    I = n(985018),
    w = n(222209);
let R = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
    k = (0, C.Ld)();
function M(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: a } = e,
        s = (0, E.eX)({ numAttachments: t.length, containerWidth: n, containerHeight: a });
    return (0, l.jsx)(l.Fragment, {
        children: t.map((e, t) =>
            (0, l.jsx)(
                "div",
                {
                    style: s[t],
                    children:
                        !0 === e.isVideo
                            ? (0, l.jsx)(A.A, { src: e.src, className: w.xn, "aria-hidden": !0 })
                            : (0, l.jsx)("img", { src: e.src, className: w.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
                },
                e.src,
            ),
        ),
    });
}
let L = (e) => {
    let { parentChannel: t } = e,
        { textAreaState: s } = (0, S.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        r = (0, c.bG)([p.A], () => p.A.keyboardModeEnabled),
        C = (0, y.A)(t, s.textValue?.trim()),
        A = a.useMemo(() => C.find((e) => e.isThumbnail), [C]),
        E = null != C && C.length > 0,
        L = a.useMemo(() => {
            let e = C?.length > 1 ? 1.15 : 1;
            return { width: 153 * e, height: 86 * e };
        }, [C]),
        D = a.useCallback(
            (e) => {
                null != A && _.A.remove(t.id, A.id, j.oU.CREATE_FORUM_POST.drafts.type),
                    (0, T.R)(e.currentTarget.files, t, j.oU.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0,
                        origin: "file_picker",
                    }),
                    (e.currentTarget.value = null);
            },
            [t, A],
        ),
        P = (e) => {
            e.stopPropagation(),
                A?.upload != null &&
                    (0, m.openModalLazy)(async () => {
                        let e = A.upload;
                        o()(null != e, "upload should not be null");
                        let { default: a } = await Promise.resolve().then(n.bind(n, 427281));
                        return (n) =>
                            (0, l.jsx)(a, {
                                ...n,
                                upload: e,
                                channelId: t.id,
                                draftType: j.oU.CREATE_FORUM_POST.drafts.type,
                                onSubmit: (n) => {
                                    let { name: l, description: a, spoiler: s } = n;
                                    _.A.update(t.id, e.id, j.oU.CREATE_FORUM_POST.drafts.type, {
                                        filename: l,
                                        description: a,
                                        spoiler: s,
                                    });
                                },
                                disableSpoiler: !0,
                            });
                    });
        },
        O = (0, l.jsx)(N.A, {
            color: u.XD.CUSTOM,
            className: w.zL,
            innerClassName: w.Nr,
            onChange: D,
            multiple: !1,
            "aria-hidden": !0,
            filters: R,
            "aria-describedby": k,
            "aria-label": E ? I.intl.string(I.t.MxJI3f) : I.intl.string(I.t.Cbiofa),
            children: E
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(M, { mediaAttachments: C, containerWidth: L.width, containerHeight: L.height }),
                          (0, l.jsxs)("div", {
                              className: i()(w.On, { [w.bP]: C?.length > 2 }),
                              children: [
                                  (0, l.jsx)(g.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: I.intl.string(I.t.MxJI3f),
                                  }),
                                  null == A && (0, l.jsx)(x.R, { size: "xs", color: "currentColor", className: w.IZ }),
                              ],
                          }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(h.X, {
                              size: "custom",
                              width: 39,
                              height: 39,
                              color: "currentColor",
                              className: w.T3,
                          }),
                          (0, l.jsx)(g.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: I.intl.string(I.t.Cbiofa),
                          }),
                      ],
                  }),
        });
    return (0, l.jsx)("div", {
        className: w.iT,
        style: L,
        children:
            null != A
                ? (0, l.jsx)(v.A, {
                      actions: (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(b.A, {
                                  className: w.XI,
                                  tooltip: I.intl.string(I.t.Y8ujqr),
                                  onClick: P,
                                  children: (0, l.jsx)(x.R, { size: "xs", color: "currentColor" }),
                              }),
                              (0, l.jsx)(b.A, {
                                  className: w.XI,
                                  tooltip: I.intl.string(I.t.vN7REz),
                                  onClick: () => _.A.remove(t.id, A.id, j.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, l.jsx)(f.u, { size: "md", color: "currentColor" }),
                              }),
                          ],
                      }),
                      draftType: j.oU.CREATE_FORUM_POST.drafts.type,
                      id: A.id,
                      channelId: t.id,
                      handleEditModal: P,
                      keyboardModeEnabled: r,
                      size: v.L.SMALL,
                      className: w.Xc,
                      children: O,
                  })
                : O,
    });
};
