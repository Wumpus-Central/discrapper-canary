"use strict";
n.d(t, { Ay: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    u = n(990078),
    c = n(397927),
    d = n(610411),
    _ = n(894010),
    f = n(495756),
    p = n(486020),
    h = n(541830),
    m = n(409626),
    g = n(692969),
    E = n(503364),
    A = n(985018),
    I = n(643850);
function T(e) {
    let { detectedGame: t } = e,
        n = i.useMemo(() => {
            if (null == t) return "";
            let { artwork: e, screenshots: n } = t;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * e.length);
                return e[t];
            }
            if (n.length > 0) {
                let e = Math.floor(Math.random() * n.length);
                return n[e];
            }
            return "";
        }, [t]);
    return (0, r.jsx)("div", {
        className: I.is,
        style:
            null != n && n.length > 0
                ? { backgroundImage: `url("${n}")` }
                : { backgroundColor: c.LU0.colors.BACKGROUND_BRAND.css },
    });
}
function y(e) {
    let { application: t } = e,
        n = t?.getIconURL(160, p.QB ? "webp" : "png");
    return (0, r.jsx)("div", {
        className: I.zc,
        children:
            null != n && n.length > 0
                ? (0, r.jsx)("img", {
                      className: I.Gt,
                      src: n,
                      height: 80,
                      alt: A.intl.formatToPlainString(A.t["nh+jWk"], { game: t.name }),
                  })
                : (0, r.jsx)(c._7Z, {
                      size: "lg",
                      className: I.ct,
                      color: c.LU0.colors.BACKGROUND_SURFACE_HIGH,
                      style: { backgroundColor: c.LU0.colors.BACKGROUND_BRAND.css },
                  }),
    });
}
function S(e) {
    let { application: t, detectedGame: n } = e,
        a = i.useMemo(() => n?.genres.map(h.du).join(", "), [n]),
        s = n.name ?? t?.name;
    return (0, r.jsxs)("div", {
        className: I.wR,
        children: [
            (0, r.jsx)(o.DZT, { variant: "heading-lg/bold", color: "text-strong", children: s }),
            (0, r.jsx)(o.EYj, { variant: "text-xs/medium", color: "text-subtle", children: a }),
        ],
    });
}
function v(e) {
    let { detectedGame: t, openFullGameProfile: n } = e;
    return (0, r.jsxs)("div", {
        className: I.IP,
        children: [
            (0, r.jsxs)("div", {
                className: I.I8,
                children: [
                    (0, r.jsx)(o.EYj, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        lineClamp: 3,
                        children: t.summaryLocalized ?? t.summary,
                    }),
                    (0, r.jsx)(c.DUT, {
                        className: I.vk,
                        onClick: n,
                        children: (0, r.jsx)(o.EYj, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: A.intl.string(A.t.lBeKY2),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(c.Button, {
                variant: "secondary",
                size: "sm",
                onClick: n,
                text: "View Game Profile",
                fullWidth: !0,
            }),
        ],
    });
}
function C(e) {
    let { application: t } = e,
        n = (0, l.bG)([f.A], () => f.A.getMute(t.id)),
        a = i.useMemo(() => (n ? A.intl.string(A.t.tpvw4T) : A.intl.string(A.t["6EwEwp"])), [n]);
    return (0, r.jsxs)("div", {
        className: I.fc,
        children: [
            (0, r.jsx)(u.m, {
                asContainer: !0,
                tag: "span",
                text: a,
                "aria-label": a,
                delay: 750,
                children: (0, r.jsx)(c.DUT, {
                    className: I.hP,
                    "aria-label": a,
                    onClick: () => {
                        (0, d.i1)({
                            gameName: t.name,
                            applicationId: t.id,
                            label: n ? d.VD.UNMUTED : d.VD.MUTED,
                            source: d.eh.MINI_GAME_PROFILE_BELL_ICON,
                        }),
                            (0, _.b)(t.id, !n);
                    },
                    children: n
                        ? (0, r.jsx)(c.a_I, { size: "xs", color: c.LU0.colors.WHITE })
                        : (0, r.jsx)(c.XFE, { size: "xs", color: c.LU0.colors.WHITE }),
                }),
            }),
            (0, r.jsx)(E.A, { applicationId: t.id, className: I.hP }),
        ],
    });
}
function b(e) {
    let { application: t, detectedGame: n, className: a, onClose: o } = e,
        l = (0, g.A)(
            {
                location: "MiniGameProfile",
                applicationId: t.id,
                source: m.Ob.MiniGameProfile,
                trackEntryPointImpression: !0,
                sourceUserId: void 0,
            },
            {},
        ),
        u = i.useCallback(
            (e) => {
                o?.(), l?.(e);
            },
            [o, l],
        );
    return (0, r.jsxs)("div", {
        className: s()(I.kL, a),
        children: [
            (0, r.jsx)(T, { detectedGame: n }),
            (0, r.jsx)(C, { application: t }),
            (0, r.jsx)(y, { application: t }),
            (0, r.jsx)(S, { application: t, detectedGame: n }),
            (0, r.jsx)(v, { application: t, detectedGame: n, openFullGameProfile: u }),
        ],
    });
}
