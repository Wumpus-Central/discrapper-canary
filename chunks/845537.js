n.d(t, {
    EK: () => G,
    Io: () => k,
    N1: () => B,
    NY: () => j,
    Ox: () => L,
    Vq: () => M,
    Wf: () => U,
    cB: () => x,
    dy: () => D,
    wP: () => w,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(28664),
    l = n(481060),
    c = n(596454),
    u = n(99690),
    d = n(607070),
    f = n(754688),
    _ = n(699450),
    p = n(303694),
    h = n(916752),
    m = n(124072),
    g = n(891984),
    E = n(884902);
n(763296);
var b = n(592125),
    y = n(77498),
    O = n(485386),
    v = n(246946),
    I = n(594174),
    T = n(768581),
    S = n(934415),
    A = n(5192),
    C = n(51144),
    N = n(388032),
    R = n(399289),
    P = n(430864);
function D(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(s.u, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(c.Z, {
            src: t.src,
            emojiName: t.name,
            animated: !1,
            surrogate: t.surrogate,
        }),
    });
}
function w(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(s.u, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(c.Z, {
            emojiId: t.emojiId,
            emojiName: t.name,
            animated: t.animated,
        }),
    });
}
function L(e) {
    let { text: t } = e;
    return (0, r.jsx)(m.Z, { children: t });
}
function x(e) {
    let { id: t, guildId: n, channelId: i } = e,
        a = (0, o.e7)([I.default], () => I.default.getUser(t)),
        c = (0, o.e7)([v.Z], () => v.Z.hidePersonalInformation),
        d = A.ZP.useName(n, i, a),
        f = (0, r.jsx)(m.Z, { children: null == d ? "<@".concat(t, ">") : "@".concat(d) });
    if (null != a) {
        let e = c || a.hasUniqueUsername() ? null : "#".concat(a.discriminator);
        return (0, r.jsx)(s.u, {
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                className: R.userTooltip,
                children: [
                    (0, r.jsx)(u.Z, {
                        user: a,
                        animate: !0,
                        size: l.EFr.SIZE_16,
                        className: R.avatar,
                    }),
                    C.ZP.getUserTag(a, {
                        mode: "username",
                        identifiable: c ? "never" : "always",
                    }),
                    (0, r.jsx)("span", {
                        className: R.discriminator,
                        children: e,
                    }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": C.ZP.getUserTag(a, { decoration: "never" }),
            asContainer: !0,
            children: (0, r.jsx)(l.P3F, {
                tag: "span",
                children: f,
            }),
        });
    }
    return f;
}
function M(e) {
    let { id: t, guildId: n } = e,
        i = (0, o.e7)([O.Z], () => (null != n ? O.Z.getRole(n, t) : void 0)),
        a = (0, o.e7)([d.Z], () => d.Z.roleStyle),
        s = (0, E._f)(n, i, null == i ? void 0 : i.colorStrings);
    if (null == i)
        return (0, r.jsxs)("span", {
            children: ["@", N.intl.string(N.t["YV4F/n"])],
        });
    let c = null != i.color && 0 !== i.color,
        u = "dot" === a,
        f = "username" === a && c;
    return (0, r.jsxs)(m.Z, {
        color: f ? i.color : null,
        roleColors: f ? s : null,
        children: [
            u &&
                (0, r.jsx)(l.FhE, {
                    color: i.colorString,
                    colors: s,
                    background: !1,
                    tooltip: !1,
                }),
            "@",
            i.name,
        ],
    });
}
function k(e) {
    let { id: t } = e,
        n = (0, o.e7)([b.Z], () => b.Z.getChannel(t)),
        i = N.intl.string(N.t.zLZPmk).toLowerCase(),
        a = "text",
        s = !0;
    if (null != n) {
        var l;
        (i = (0, f.YO)(n) ? n.name : N.intl.string(N.t["/YzI63"])),
            (a = (0, f.YO)(n) ? (null != (l = (0, S.wl)(n)) ? l : "text") : "locked"),
            (s = (0, _.B)(n.type));
    }
    return s
        ? (0, r.jsx)(m.Z, {
              iconType: a,
              children: i,
          })
        : (0, r.jsx)("span", { children: "#" + i });
}
function j(e) {
    let { id: t, itemId: n, guildId: i } = e,
        a = (0, p.l)(t),
        o = (0, p.W)(t, n, i);
    return (0, r.jsxs)(m.Z, {
        iconType: t,
        children: [a, null != o && (0, r.jsx)(g.Z, {}), o],
    });
}
function U(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(m.Z, {
        children: [t, "(", n, ")"],
    });
}
function G(e) {
    let { timestamp: t } = e,
        n = (0, h.Z)(t);
    return (0, r.jsx)("span", {
        className: a()(P.timestamp, R.tabular),
        children: n,
    });
}
function B(e) {
    var t;
    let { id: n } = e,
        i = (0, o.e7)([y.Z], () => y.Z.getDetectableGame(n)),
        a =
            null != i
                ? (0, r.jsx)("img", {
                      alt: "",
                      className: R.icon,
                      src: T.ZP.getApplicationIconURL({
                          id: i.id,
                          icon: i.icon,
                          size: 32,
                      }),
                  })
                : null;
    return (0, r.jsxs)(m.Z, {
        children: [a, null != (t = null == i ? void 0 : i.name) ? t : N.intl.string(N.t["11pdXZ"])],
    });
}
