n.d(t, { A: () => O, i: () => k });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(980707),
    o = n(477782),
    c = n(22231),
    d = n(173936),
    u = n(32880),
    m = n(922016),
    h = n(939249),
    g = n(530005),
    p = n(890856),
    A = n(297264),
    x = n(696986),
    f = n(834730),
    E = n(442433),
    I = n(628677),
    C = n(580630),
    _ = n(571654),
    v = n(661531),
    N = n(175841),
    j = n(375708),
    T = n(230533);
function S(e) {
    let {
        label: t,
        backgroundColor: n = v.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: l,
        iconColor: s,
    } = e;
    return (0, i.jsxs)("div", {
        className: T.q,
        style: { backgroundColor: n },
        children: [
            (0, i.jsx)(f.E, {
                variant: "text-sm/normal",
                color: "text-overlay-light",
                className: T.__invalid_badgeText,
                children: t,
            }),
            (0, i.jsx)(l, { className: T.r, color: s ?? "currentColor", "aria-hidden": !0 }),
        ],
    });
}
function y() {
    return (0, i.jsx)(S, { label: j.intl.string(j.t["I+02Gs"]), backgroundColor: "#207B8D", icon: N.SparklesIcon });
}
function b() {
    return (0, i.jsx)(S, {
        label: j.intl.string(j.t.TgsPaP),
        icon: c.PencilIcon,
        iconColor: v.A.unsafe_rawColors.PRIMARY_330.css,
    });
}
var R = n(818348),
    L = n(402805);
function M(e) {
    let {
        showEditProduct: t,
        showUnpublishProduct: n,
        showCopyLink: l,
        showTestDownload: s,
        showDeleteProduct: a,
        showReportProduct: m,
        onEditProduct: h,
        onUnpublishProduct: g,
        onDeleteProduct: p,
        onCopyLink: A,
        onTestDownload: x,
        onReportProduct: f,
        closePopout: E,
        onSelect: I,
    } = e;
    return (0, i.jsx)("div", {
        className: L.li,
        children: (0, i.jsxs)(r.W, {
            "data-menu-migrated": !0,
            navId: "guild-product-context",
            onClose: E,
            "aria-label": j.intl.string(j.t.Z146dM),
            onSelect: I,
            children: [
                (0, i.jsxs)(o.rX, {
                    children: [
                        t &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-edit",
                                label: j.intl.string(j.t.EEfce4),
                                icon: c.PencilIcon,
                                leadingAccessory: { type: "icon", icon: c.PencilIcon },
                                action: h,
                            }),
                        l &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-copy-link",
                                label: j.intl.string(j.t.XR26uj),
                                icon: d.LinkIcon,
                                leadingAccessory: { type: "icon", icon: d.LinkIcon },
                                action: A,
                            }),
                        s &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-test-download",
                                label: j.intl.string(j.t.aXoI6U),
                                icon: u.DownloadIcon,
                                leadingAccessory: { type: "icon", icon: u.DownloadIcon },
                                action: x,
                            }),
                    ],
                }),
                (0, i.jsxs)(o.rX, {
                    children: [
                        n &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-unpublish",
                                label: j.intl.string(j.t.QrkMlN),
                                action: g,
                            }),
                        a &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-delete",
                                label: j.intl.string(j.t.zWjqvB),
                                color: "danger",
                                action: p,
                            }),
                    ],
                }),
                (0, i.jsx)(o.rX, {
                    children:
                        m &&
                        (0, i.jsx)(o.Dr, {
                            id: "guild-product-report",
                            label: j.intl.string(j.t["6yUzvG"]),
                            color: "danger",
                            action: f,
                        }),
                }),
            ],
        }),
    });
}
function k(e) {
    let {
            product: t,
            guildId: n,
            showEditProduct: s,
            showUnpublishProduct: a,
            showTestDownload: r,
            showCopyLink: o,
            showDeleteProduct: c,
            showReportProduct: d,
            onEditProduct: u,
            onUnpublishProduct: p,
            onDeleteProduct: A,
            onCopyProductLink: x,
            onTestDownload: f,
            onReportProduct: E,
        } = e,
        I = l.useRef(null);
    return (0, i.jsx)("div", {
        onClick: function (e) {
            e.stopPropagation();
        },
        children: (0, i.jsx)(m.Y, {
            targetElementRef: I,
            position: "right",
            align: "top",
            spacing: -8,
            animation: m.Y.Animation.FADE,
            renderPopout: (e) =>
                (0, i.jsx)(M, {
                    ...e,
                    guildId: n,
                    productId: t.id,
                    showEditProduct: s,
                    showUnpublishProduct: a,
                    showCopyLink: o,
                    showTestDownload: r,
                    showReportProduct: d,
                    showDeleteProduct: c,
                    onEditProduct: u,
                    onUnpublishProduct: p,
                    onDeleteProduct: A,
                    onCopyLink: x,
                    onTestDownload: f,
                    onReportProduct: E,
                }),
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(h.D, {
                    ...e,
                    innerRef: I,
                    "aria-label": j.intl.formatToPlainString(j.t.RtqjeB, { productName: t.name }),
                    "aria-haspopup": "listbox",
                    "aria-expanded": l,
                    className: L.hC,
                    children: (0, i.jsx)(g.F, {
                        size: "md",
                        color: "currentColor",
                        className: L.Su,
                        "aria-hidden": !0,
                    }),
                });
            },
        }),
    });
}
function O(e) {
    let {
            product: t,
            guildId: n,
            onEditProduct: l,
            onUnpublishProduct: s,
            onDeleteProduct: r,
            onCopyProductLink: o,
            onTestDownload: c,
            disabled: d = !1,
        } = e,
        u = (0, I.R)(t, 600),
        m = null !== t.price_tier ? (0, C.$g)(t.price_tier, R.Yr.USD) : void 0,
        h = (0, _.z)(t);
    return (0, i.jsxs)(p.s, {
        tag: "article",
        className: a()(L.gc, L.Um, { [L.r9]: d }),
        onClick: d ? void 0 : l,
        onContextMenu: function (e) {
            (0, E.L3)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(M, {
                        ...e,
                        closePopout: E.Z_,
                        guildId: n,
                        productId: t.id,
                        showEditProduct: !0,
                        showUnpublishProduct: t.published,
                        showCopyLink: t.published,
                        showTestDownload: null != t.attachments,
                        showDeleteProduct: !0,
                        showReportProduct: !1,
                        onEditProduct: l,
                        onUnpublishProduct: s,
                        onDeleteProduct: r,
                        onCopyLink: o,
                        onTestDownload: c,
                        onReportProduct: () => {},
                    }),
                ),
            );
        },
        "aria-label": j.intl.formatToPlainString(j.t["X/yAKs"], { productName: t.name }),
        children: [
            (0, i.jsx)("img", { alt: "", src: u, className: L.K_ }),
            (0, i.jsxs)("div", {
                className: L.aG,
                children: [
                    (0, i.jsxs)("div", {
                        className: L.jb,
                        children: [
                            (0, i.jsx)(A.D, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: L.tZ,
                                children: t.name,
                            }),
                            (0, i.jsx)(x.h, { size: 8 }),
                            (0, i.jsxs)("div", {
                                className: L.MS,
                                children: [
                                    (0, i.jsx)(f.E, { variant: "text-md/normal", color: "text-default", children: m }),
                                    null != h
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: L.zk }),
                                                  (0, i.jsx)(f.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-default",
                                                      children: h,
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)(x.h, { size: 16 }),
                            t.published ? (0, i.jsx)(y, {}) : (0, i.jsx)(b, {}),
                        ],
                    }),
                    !d &&
                        (0, i.jsx)(k, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: l,
                            onUnpublishProduct: s,
                            onDeleteProduct: r,
                            onCopyProductLink: o,
                            onTestDownload: c,
                            onReportProduct: () => {},
                        }),
                ],
            }),
        ],
    });
}
