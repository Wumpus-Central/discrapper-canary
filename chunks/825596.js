n.d(t, { A: () => M, i: () => P });
var i = n(627968),
    l = n(64700),
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
    A = n(534514),
    x = n(696986),
    f = n(834730),
    E = n(442433),
    I = n(628677),
    C = n(580630),
    v = n(571654),
    _ = n(661531),
    j = n(175841),
    N = n(375708),
    T = n(871466);
function y(e) {
    let {
        label: t,
        backgroundColor: n = _.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
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
function S() {
    return (0, i.jsx)(y, { label: N.intl.string(N.t["I+02Gs"]), backgroundColor: "#207B8D", icon: j.B });
}
function b() {
    return (0, i.jsx)(y, {
        label: N.intl.string(N.t.TgsPaP),
        icon: d.R,
        iconColor: _.A.unsafe_rawColors.PRIMARY_330.css,
    });
}
var k = n(818348),
    L = n(559046);
function R(e) {
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
        closePopout: E,
        onSelect: I,
    } = e;
    return (0, i.jsx)("div", {
        className: L.li,
        children: (0, i.jsxs)(a.W, {
            "data-menu-migrated": !0,
            navId: "guild-product-context",
            onClose: E,
            "aria-label": N.intl.string(N.t.Z146dM),
            onSelect: I,
            children: [
                (0, i.jsxs)(o.rX, {
                    children: [
                        t &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-edit",
                                label: N.intl.string(N.t.EEfce4),
                                icon: d.R,
                                leadingAccessory: { type: "icon", icon: d.R },
                                action: h,
                            }),
                        l &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-copy-link",
                                label: N.intl.string(N.t.XR26uj),
                                icon: c.q,
                                leadingAccessory: { type: "icon", icon: c.q },
                                action: A,
                            }),
                        s &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-test-download",
                                label: N.intl.string(N.t.aXoI6U),
                                icon: u.s,
                                leadingAccessory: { type: "icon", icon: u.s },
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
function P(e) {
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
                (0, i.jsx)(R, {
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
                    onReportProduct: E,
                }),
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(h.D, {
                    ...e,
                    innerRef: I,
                    "aria-label": N.intl.formatToPlainString(N.t.RtqjeB, { productName: t.name }),
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
function M(e) {
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
        u = (0, I.R)(t, 600),
        m = null !== t.price_tier ? (0, C.$g)(t.price_tier, k.Yr.USD) : void 0,
        h = (0, v.z)(t);
    return (0, i.jsxs)(p.s, {
        tag: "article",
        className: r()(L.gc, L.Um, { [L.r9]: c }),
        onClick: c ? void 0 : l,
        onContextMenu: function (e) {
            (0, E.L3)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(R, {
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
                            t.published ? (0, i.jsx)(S, {}) : (0, i.jsx)(b, {}),
                        ],
                    }),
                    !c &&
                        (0, i.jsx)(P, {
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
