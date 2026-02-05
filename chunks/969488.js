"use strict";
n.d(t, { f: () => R });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(942381),
    c = n(417597),
    u = n(421380),
    m = n(397927),
    h = n(608299),
    x = n(775602),
    g = n(355622),
    f = n(851023),
    p = n(349688),
    _ = n(915089),
    j = n(607470),
    b = n(703007),
    v = n(218152),
    A = n(715493),
    C = n(518960),
    T = n(286911),
    N = n(985018),
    S = n(403094);
let y = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
    E = (0, _.Ld)();
function I(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: i } = e,
        s = (0, A.eX)({ numAttachments: t.length, containerWidth: n, containerHeight: i });
    return (0, l.jsx)(l.Fragment, {
        children: t.map((e, t) =>
            (0, l.jsx)(
                "div",
                {
                    style: s[t],
                    children:
                        !0 === e.isVideo
                            ? (0, l.jsx)(j.A, { src: e.src, className: S.xn, "aria-hidden": !0 })
                            : (0, l.jsx)("img", { src: e.src, className: S.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
                },
                e.src,
            ),
        ),
    });
}
let R = (e) => {
    let { parentChannel: t } = e,
        { textAreaState: s } = (0, v.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        r = (0, c.bG)([x.A], () => x.A.keyboardModeEnabled),
        _ = (0, T.A)(t, s.textValue?.trim()),
        j = i.useMemo(() => _.find((e) => e.isThumbnail), [_]),
        A = null != _ && _.length > 0,
        R = i.useMemo(() => {
            let e = _?.length > 1 ? 1.15 : 1;
            return { width: 153 * e, height: 86 * e };
        }, [_]),
        M = i.useCallback(
            (e) => {
                null != j && h.A.remove(t.id, j.id, g.oU.CREATE_FORUM_POST.drafts.type),
                    (0, C.R)(e.currentTarget.files, t, g.oU.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0,
                        origin: "file_picker",
                    }),
                    (e.currentTarget.value = null);
            },
            [t, j],
        ),
        k = (e) => {
            e.stopPropagation(),
                j?.upload != null &&
                    (0, m.mMO)(async () => {
                        let e = j.upload;
                        o()(null != e, "upload should not be null");
                        let { default: i } = await Promise.resolve().then(n.bind(n, 427281));
                        return (n) =>
                            (0, l.jsx)(i, {
                                ...n,
                                upload: e,
                                channelId: t.id,
                                draftType: g.oU.CREATE_FORUM_POST.drafts.type,
                                onSubmit: (n) => {
                                    let { name: l, description: i, spoiler: s } = n;
                                    h.A.update(t.id, e.id, g.oU.CREATE_FORUM_POST.drafts.type, {
                                        filename: l,
                                        description: i,
                                        spoiler: s,
                                    });
                                },
                                disableSpoiler: !0,
                            });
                    });
        },
        w = (0, l.jsx)(b.A, {
            color: u.XD.CUSTOM,
            className: S.zL,
            innerClassName: S.Nr,
            onChange: M,
            multiple: !1,
            "aria-hidden": !0,
            filters: y,
            "aria-describedby": E,
            "aria-label": A ? N.intl.string(N.t.MxJI3f) : N.intl.string(N.t.Cbiofa),
            children: A
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(I, { mediaAttachments: _, containerWidth: R.width, containerHeight: R.height }),
                          (0, l.jsxs)("div", {
                              className: a()(S.On, { [S.bP]: _?.length > 2 }),
                              children: [
                                  (0, l.jsx)(m.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: N.intl.string(N.t.MxJI3f),
                                  }),
                                  null == j &&
                                      (0, l.jsx)(m.R2l, { size: "xs", color: "currentColor", className: S.IZ }),
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
            null != j
                ? (0, l.jsx)(p.A, {
                      actions: (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(f.A, {
                                  className: S.XI,
                                  tooltip: N.intl.string(N.t.Y8ujqr),
                                  onClick: k,
                                  children: (0, l.jsx)(m.R2l, { size: "xs", color: "currentColor" }),
                              }),
                              (0, l.jsx)(f.A, {
                                  className: S.XI,
                                  tooltip: N.intl.string(N.t.vN7REz),
                                  onClick: () => h.A.remove(t.id, j.id, g.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, l.jsx)(m.ucK, { size: "md", color: "currentColor" }),
                              }),
                          ],
                      }),
                      draftType: g.oU.CREATE_FORUM_POST.drafts.type,
                      id: j.id,
                      channelId: t.id,
                      handleEditModal: k,
                      keyboardModeEnabled: r,
                      size: p.L.SMALL,
                      className: S.Xc,
                      children: w,
                  })
                : w,
    });
};
