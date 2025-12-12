n.d(t, { default: () => h });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    o = n(442837),
    l = n(28664),
    d = n(481060),
    c = n(978088),
    s = n(840720),
    b = n(430824),
    u = n(594174),
    f = n(731722),
    g = n(446094),
    p = n(388032),
    m = n(551199),
    C = n(52140);
function h(e) {
    var t,
        n,
        r,
        h,
        { guildId: j } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    (n = i[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["guildId"]);
    let y = (0, o.e7)([b.Z], () => b.Z.getGuild(j)),
        O = (0, o.e7)([u.default], () => {
            var e;
            let t = null == (e = u.default.getCurrentUser()) ? void 0 : e.primaryGuild;
            return (null == t ? void 0 : t.identityGuildId) === j && (null == t ? void 0 : t.identityEnabled) === !0;
        }, [j]),
        { isAdopting: x, onAdoptTag: w, onEditProfile: P } = (0, g.Z)(j, v.onClose);
    if (null != y && (0, f.up)(y) && (0, f.jq)(y))
        return (0, a.jsxs)(
            d.Y0X,
            ((t = (function (e) {
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
            })(
                {
                    "data-migration-pending": !0,
                    className: C.modal,
                    size: d.CgR.DYNAMIC,
                },
                v,
            )),
            (n = n =
                {
                    parentComponent: "GuildTagAdoptModal",
                    children: [
                        (0, a.jsxs)(d.hzk, {
                            "data-migration-pending": !0,
                            className: C.modalContent,
                            scrollbarType: "none",
                            children: [
                                (0, a.jsx)("div", {
                                    className: C.modalContentChild,
                                    children: (0, a.jsxs)("div", {
                                        className: C.left,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: C.headerContainer,
                                                children: [
                                                    (0, a.jsx)(d.Heading, {
                                                        variant: "heading-lg/bold",
                                                        children: p.intl.string(m.default.OvKPi0),
                                                    }),
                                                    (0, a.jsx)(d.Text, {
                                                        variant: "text-md/normal",
                                                        children: p.intl.string(m.default.kHxfDw),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(s.Z, {
                                                className: C.guildRow,
                                                guildId: y.id,
                                                guildName: y.name,
                                                guildIcon: y.icon,
                                                guildIconSize: 32,
                                                guildTag: y.profile.tag,
                                                guildBadge: null != (r = y.profile.badge) ? r : "",
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: C.buttonContainer,
                                                children: [
                                                    (0, a.jsx)(l.u, {
                                                        text: p.intl.string(m.default.WlENZt),
                                                        shouldShow: O,
                                                        children: (0, a.jsx)(d.Button, {
                                                            variant: "primary",
                                                            text: p.intl.string(p.t.jwEaiX),
                                                            fullWidth: !0,
                                                            onClick: w,
                                                            loading: x,
                                                            disabled: O,
                                                        }),
                                                    }),
                                                    (0, a.jsx)(d.Button, {
                                                        variant: "secondary",
                                                        text: p.intl.string(p.t.s5vZlQ),
                                                        fullWidth: !0,
                                                        onClick: P,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className: i()(C.modalContentChild, C.right),
                                    children: (0, a.jsx)(c.Z, {
                                        className: C.rightContent,
                                        guildId: y.id,
                                        tag: y.profile.tag,
                                        badge: null != (h = y.profile.badge) ? h : "",
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(d.olH, {
                            "data-migration-pending": !0,
                            className: C.close,
                            onClick: v.onClose,
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, a);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        );
}
