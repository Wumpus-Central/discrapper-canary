n.d(t, {
    EK: () => M,
    Io: () => x,
    N1: () => k,
    NY: () => L,
    Ox: () => R,
    Vq: () => D,
    Wf: () => j,
    cB: () => w,
    dy: () => N,
    wP: () => P,
});
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(28664),
    o = n(481060),
    s = n(596454),
    l = n(99690),
    c = n(607070),
    u = n(754688),
    d = n(699450),
    f = n(303694),
    p = n(285063),
    _ = n(124072),
    m = n(891984),
    h = n(884902);
n(763296);
var g = n(592125),
    E = n(77498),
    b = n(485386),
    y = n(246946),
    O = n(594174),
    v = n(768581),
    S = n(934415),
    I = n(5192),
    T = n(51144),
    A = n(388032),
    C = n(399289);
function N(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.u, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(s.Z, {
            src: t.src,
            emojiName: t.name,
            animated: !1,
            surrogate: t.surrogate,
        }),
    });
}
function P(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.u, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(s.Z, {
            emojiId: t.emojiId,
            emojiName: t.name,
            animated: t.animated,
        }),
    });
}
function R(e) {
    let { text: t } = e;
    return (0, r.jsx)(_.Z, { children: t });
}
function w(e) {
    let { id: t, guildId: n, channelId: s } = e,
        c = (0, i.e7)([O.default], () => O.default.getUser(t)),
        u = (0, i.e7)([y.Z], () => y.Z.hidePersonalInformation),
        d = I.ZP.useName(n, s, c),
        f = (0, r.jsx)(_.Z, { children: null == d ? "<@".concat(t, ">") : "@".concat(d) });
    if (null != c) {
        let e = u || c.hasUniqueUsername() ? null : "#".concat(c.discriminator);
        return (0, r.jsx)(a.u, {
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                className: C.userTooltip,
                children: [
                    (0, r.jsx)(l.Z, {
                        user: c,
                        animate: !0,
                        size: o.EFr.SIZE_16,
                        className: C.avatar,
                    }),
                    T.ZP.getUserTag(c, {
                        mode: "username",
                        identifiable: u ? "never" : "always",
                    }),
                    (0, r.jsx)("span", {
                        className: C.discriminator,
                        children: e,
                    }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": T.ZP.getUserTag(c, { decoration: "never" }),
            asContainer: !0,
            children: (0, r.jsx)(o.P3F, {
                tag: "span",
                children: f,
            }),
        });
    }
    return f;
}
function D(e) {
    let { id: t, guildId: n } = e,
        a = (0, i.e7)([b.Z], () => (null != n ? b.Z.getRole(n, t) : void 0)),
        s = (0, i.e7)([c.Z], () => c.Z.roleStyle),
        l = (0, h._f)(n, a, null == a ? void 0 : a.colorStrings);
    if (null == a)
        return (0, r.jsxs)("span", {
            children: ["@", A.intl.string(A.t["YV4F/n"])],
        });
    let u = null != a.color && 0 !== a.color,
        d = "dot" === s,
        f = "username" === s && u;
    return (0, r.jsxs)(_.Z, {
        color: f ? a.color : null,
        roleColors: f ? l : null,
        children: [
            d &&
                (0, r.jsx)(o.FhE, {
                    color: a.colorString,
                    colors: l,
                    background: !1,
                    tooltip: !1,
                }),
            "@",
            a.name,
        ],
    });
}
function x(e) {
    let { id: t } = e,
        n = (0, i.e7)([g.Z], () => g.Z.getChannel(t)),
        a = A.intl.string(A.t.zLZPmk).toLowerCase(),
        o = "text",
        s = !0;
    if (null != n) {
        var l;
        (a = (0, u.YO)(n) ? n.name : A.intl.string(A.t["/YzI63"])),
            (o = (0, u.YO)(n) ? (null != (l = (0, S.wl)(n)) ? l : "text") : "locked"),
            (s = (0, d.B)(n.type));
    }
    return s
        ? (0, r.jsx)(_.Z, {
              iconType: o,
              children: a,
          })
        : (0, r.jsx)("span", { children: "#" + a });
}
function L(e) {
    let { id: t, itemId: n, guildId: i } = e,
        a = (0, f.l)(t),
        o = (0, f.W)(t, n, i);
    return (0, r.jsxs)(_.Z, {
        iconType: t,
        children: [a, null != o && (0, r.jsx)(m.Z, {}), o],
    });
}
function j(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(_.Z, {
        children: [t, "(", n, ")"],
    });
}
function M(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)(p.Z, {
        node: t,
        className: "R" === t.format ? C.tabular : null,
    });
}
function k(e) {
    var t;
    let { id: n } = e,
        a = (0, i.e7)([E.Z], () => E.Z.getDetectableGame(n)),
        o =
            null != a
                ? (0, r.jsx)("img", {
                      alt: "",
                      className: C.icon,
                      src: v.ZP.getApplicationIconURL({
                          id: a.id,
                          icon: a.icon,
                          size: 32,
                      }),
                  })
                : null;
    return (0, r.jsxs)(_.Z, {
        children: [o, null != (t = null == a ? void 0 : a.name) ? t : A.intl.string(A.t["11pdXZ"])],
    });
}
