n.d(t, { default: () => m });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    o = n(442837),
    l = n(28664),
    d = n(481060),
    s = n(978088),
    c = n(840720),
    u = n(430824),
    g = n(594174),
    f = n(731722),
    b = n(446094),
    p = n(388032),
    C = n(624463),
    h = n(671749);
function m(e) {
    var t,
        n,
        r,
        m,
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
    let _ = (0, o.e7)([u.Z], () => u.Z.getGuild(j)),
        y = (0, o.e7)([g.default], () => {
            var e;
            let t = null == (e = g.default.getCurrentUser()) ? void 0 : e.primaryGuild;
            return (null == t ? void 0 : t.identityGuildId) === j && (null == t ? void 0 : t.identityEnabled) === !0;
        }, [j]),
        { isAdopting: O, onAdoptTag: x, onEditProfile: w } = (0, b.Z)(j, v.onClose);
    if (null != _ && (0, f.up)(_) && (0, f.jq)(_))
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
                    className: h.modal,
                    size: d.CgR.DYNAMIC,
                },
                v,
            )),
            (n = n =
                {
                    parentComponent: "GuildTagAdoptModal",
                    children: [
                        (0, a.jsxs)(d.hzk, {
                            className: h.modalContent,
                            scrollbarType: "none",
                            children: [
                                (0, a.jsx)("div", {
                                    className: h.modalContentChild,
                                    children: (0, a.jsxs)("div", {
                                        className: h.left,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: h.headerContainer,
                                                children: [
                                                    (0, a.jsx)(d.Heading, {
                                                        variant: "heading-lg/bold",
                                                        children: p.intl.string(C.default.OvKPi0),
                                                    }),
                                                    (0, a.jsx)(d.Text, {
                                                        variant: "text-md/normal",
                                                        children: p.intl.string(C.default.kHxfDw),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(c.Z, {
                                                className: h.guildRow,
                                                guildId: _.id,
                                                guildName: _.name,
                                                guildIcon: _.icon,
                                                guildIconSize: 32,
                                                guildTag: _.profile.tag,
                                                guildBadge: null != (r = _.profile.badge) ? r : "",
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: h.buttonContainer,
                                                children: [
                                                    (0, a.jsx)(l.u, {
                                                        text: p.intl.string(C.default.WlENZt),
                                                        shouldShow: y,
                                                        children: (0, a.jsx)(d.Button, {
                                                            variant: "primary",
                                                            text: p.intl.string(p.t.jwEaiX),
                                                            fullWidth: !0,
                                                            onClick: x,
                                                            loading: O,
                                                            disabled: y,
                                                        }),
                                                    }),
                                                    (0, a.jsx)(d.Button, {
                                                        variant: "secondary",
                                                        text: p.intl.string(p.t.s5vZlQ),
                                                        fullWidth: !0,
                                                        onClick: w,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className: i()(h.modalContentChild, h.right),
                                    children: (0, a.jsx)(s.Z, {
                                        className: h.rightContent,
                                        guildId: _.id,
                                        tag: _.profile.tag,
                                        badge: null != (m = _.profile.badge) ? m : "",
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(d.olH, {
                            className: h.close,
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
