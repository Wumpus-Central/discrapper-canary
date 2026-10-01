n.d(t, { A: () => P, i: () => M });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(980707),
    o = n(477782),
    d = n(22231),
    c = n(173936),
    u = n(32880),
    m = n(922016),
    h = n(939249),
    g = n(530005),
    p = n(890856),
    A = n(297264),
    x = n(696986),
    f = n(834730),
    I = n(442433),
    E = n(628677),
    v = n(580630),
    C = n(571654),
    _ = n(661531),
    j = n(175841),
    N = n(375708),
    y = n(230533);
function T(e) {
    let {
        label: t,
        backgroundColor: n = _.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: l,
        iconColor: s,
    } = e;
    return (0, i.jsxs)("div", {
        className: y.q,
        style: { backgroundColor: n },
        children: [
            (0, i.jsx)(f.E, {
                variant: "text-sm/normal",
                color: "text-overlay-light",
                className: y.__invalid_badgeText,
                children: t,
            }),
            (0, i.jsx)(l, { className: y.r, color: s ?? "currentColor", "aria-hidden": !0 }),
        ],
    });
}
function S() {
    return (0, i.jsx)(T, { label: N.intl.string(N.t["I+02Gs"]), backgroundColor: "#207B8D", icon: j.SparklesIcon });
}
function b() {
    return (0, i.jsx)(T, {
        label: N.intl.string(N.t.TgsPaP),
        icon: d.PencilIcon,
        iconColor: _.A.unsafe_rawColors.PRIMARY_330.css,
    });
}
var k = n(818348),
    R = n(402805);
function L(e) {
    let {
        showEditProduct: t,
        showUnpublishProduct: n,
        showCopyLink: l,
        showTestDownload: s,
        showDeleteProduct: r,
        showReportProduct: m,
        onEditProduct: h,
        onUnpublishProduct: g,
        onDeleteProduct: p,
        onCopyLink: A,
        onTestDownload: x,
        onReportProduct: f,
        closePopout: I,
        onSelect: E,
    } = e;
    return (0, i.jsx)("div", {
        className: R.li,
        children: (0, i.jsxs)(a.W, {
            "data-menu-migrated": !0,
            navId: "guild-product-context",
            onClose: I,
            "aria-label": N.intl.string(N.t.Z146dM),
            onSelect: E,
            children: [
                (0, i.jsxs)(o.rX, {
                    children: [
                        t &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-edit",
                                label: N.intl.string(N.t.EEfce4),
                                icon: d.PencilIcon,
                                leadingAccessory: { type: "icon", icon: d.PencilIcon },
                                action: h,
                            }),
                        l &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-copy-link",
                                label: N.intl.string(N.t.XR26uj),
                                icon: c.LinkIcon,
                                leadingAccessory: { type: "icon", icon: c.LinkIcon },
                                action: A,
                            }),
                        s &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-test-download",
                                label: N.intl.string(N.t.aXoI6U),
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
                                label: N.intl.string(N.t.QrkMlN),
                                action: g,
                            }),
                        r &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-delete",
                                label: N.intl.string(N.t.zWjqvB),
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
                            label: N.intl.string(N.t["6yUzvG"]),
                            color: "danger",
                            action: f,
                        }),
                }),
            ],
        }),
    });
}
function M(e) {
    let {
            product: t,
            guildId: n,
            showEditProduct: s,
            showUnpublishProduct: r,
            showTestDownload: a,
            showCopyLink: o,
            showDeleteProduct: d,
            showReportProduct: c,
            onEditProduct: u,
            onUnpublishProduct: p,
            onDeleteProduct: A,
            onCopyProductLink: x,
            onTestDownload: f,
            onReportProduct: I,
        } = e,
        E = l.useRef(null);
    return (0, i.jsx)("div", {
        onClick: function (e) {
            e.stopPropagation();
        },
        children: (0, i.jsx)(m.Y, {
            targetElementRef: E,
            position: "right",
            align: "top",
            spacing: -8,
            animation: m.Y.Animation.FADE,
            renderPopout: (e) =>
                (0, i.jsx)(L, {
                    ...e,
                    guildId: n,
                    productId: t.id,
                    showEditProduct: s,
                    showUnpublishProduct: r,
                    showCopyLink: o,
                    showTestDownload: a,
                    showReportProduct: c,
                    showDeleteProduct: d,
                    onEditProduct: u,
                    onUnpublishProduct: p,
                    onDeleteProduct: A,
                    onCopyLink: x,
                    onTestDownload: f,
                    onReportProduct: I,
                }),
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(h.D, {
                    ...e,
                    innerRef: E,
                    "aria-label": N.intl.formatToPlainString(N.t.RtqjeB, { productName: t.name }),
                    "aria-haspopup": "listbox",
                    "aria-expanded": l,
                    className: R.hC,
                    children: (0, i.jsx)(g.F, {
                        size: "md",
                        color: "currentColor",
                        className: R.Su,
                        "aria-hidden": !0,
                    }),
                });
            },
        }),
    });
}
function P(e) {
    let {
            product: t,
            guildId: n,
            onEditProduct: l,
            onUnpublishProduct: s,
            onDeleteProduct: a,
            onCopyProductLink: o,
            onTestDownload: d,
            disabled: c = !1,
        } = e,
        u = (0, E.R)(t, 600),
        m = null !== t.price_tier ? (0, v.$g)(t.price_tier, k.Yr.USD) : void 0,
        h = (0, C.z)(t);
    return (0, i.jsxs)(p.s, {
        tag: "article",
        className: r()(R.gc, R.Um, { [R.r9]: c }),
        onClick: c ? void 0 : l,
        onContextMenu: function (e) {
            (0, I.L3)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(L, {
                        ...e,
                        closePopout: I.Z_,
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
                        onDeleteProduct: a,
                        onCopyLink: o,
                        onTestDownload: d,
                        onReportProduct: () => {},
                    }),
                ),
            );
        },
        "aria-label": N.intl.formatToPlainString(N.t["X/yAKs"], { productName: t.name }),
        children: [
            (0, i.jsx)("img", { alt: "", src: u, className: R.K_ }),
            (0, i.jsxs)("div", {
                className: R.aG,
                children: [
                    (0, i.jsxs)("div", {
                        className: R.jb,
                        children: [
                            (0, i.jsx)(A.D, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: R.tZ,
                                children: t.name,
                            }),
                            (0, i.jsx)(x.h, { size: 8 }),
                            (0, i.jsxs)("div", {
                                className: R.MS,
                                children: [
                                    (0, i.jsx)(f.E, { variant: "text-md/normal", color: "text-default", children: m }),
                                    null != h
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: R.zk }),
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
                            t.published ? (0, i.jsx)(S, {}) : (0, i.jsx)(b, {}),
                        ],
                    }),
                    !c &&
                        (0, i.jsx)(M, {
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
                            onDeleteProduct: a,
                            onCopyProductLink: o,
                            onTestDownload: d,
                            onReportProduct: () => {},
                        }),
                ],
            }),
        ],
    });
}
