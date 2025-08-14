n.d(t, {
    B: () => A,
    default: () => N,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(82659),
    c = n(481060),
    u = n(493683),
    d = n(493773),
    f = n(100527),
    _ = n(906732),
    p = n(43267),
    h = n(933557),
    m = n(592125),
    g = n(626135),
    E = n(140106),
    b = n(981631),
    y = n(388032),
    O = n(358993);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let {
            channel: t,
            previewIcon: n,
            onIconChange: i,
            onIconRemove: o,
            analyticsLocations: s,
            petite: l = !1,
            className: u,
            allowRemovingIcon: d = !0,
        } = e,
        h = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, p.x)(t, 120) : null,
        { analyticsLocations: m } = (0, _.ZP)(s, f.Z.GROUP_DM_ICON_EDITOR),
        g = l ? 32 : 64,
        b = l ? "xs" : "refresh_sm";
    return (0, r.jsxs)("div", {
        className: a()(O.iconSection, u),
        children: [
            (0, r.jsxs)(c.P3F, {
                className: a()(O.iconContainer, { [O.petite]: l }),
                "aria-label": y.intl.string(y.t["0qPSMT"]),
                onClick: () => (0, E.ND)(i, m),
                children: [
                    null != h
                        ? (0, r.jsx)("img", {
                              src: h,
                              alt: "",
                              className: O.iconImage,
                          })
                        : (0, r.jsx)("div", {
                              className: O.iconPlaceholder,
                              children: (0, r.jsx)(c.BFJ, {
                                  size: "custom",
                                  width: g,
                                  height: g,
                                  color: "currentColor",
                              }),
                          }),
                    (0, r.jsx)("div", {
                        className: O.pencilIconWrapper,
                        children: (0, r.jsx)(c.vdY, {
                            color: "currentColor",
                            size: b,
                        }),
                    }),
                ],
            }),
            null != h && d
                ? (0, r.jsx)(c.Avr, {
                      variant: "critical",
                      onClick: o,
                      "aria-label": y.intl.string(y.t["uY+Nk5"]),
                      text: y.intl.string(y.t["uY+Nk5"]),
                      textVariant: "text-sm/medium",
                      size: "sm",
                      role: "button",
                      type: "button",
                  })
                : null,
        ],
    });
}
let N = function (e) {
    let {
            channelId: t,
            onClose: n,
            transitionState: o,
            setHasPendingChanges: a,
            closeOrShowDiscardChangesAlert: p,
            location: v,
        } = e,
        T = (0, s.e7)([m.Z], () => m.Z.getChannel(t)),
        N = null == T ? void 0 : T.name,
        C = (0, h.cO)(T),
        [R, P] = i.useState(null != N ? N : ""),
        [w, D] = i.useState(void 0),
        L = void 0 !== w,
        { analyticsLocations: x } = (0, _.ZP)(v, f.Z.GROUP_DM_EDIT_MODAL),
        M = {
            channel_id: t,
            channel_type: null == T ? void 0 : T.type,
            location: v,
            location_stack: x,
            old_name_set: "" !== N,
            old_icon_set: (null == T ? void 0 : T.icon) != null,
        };
    i.useEffect(() => {
        a(R !== N || L);
    }, [R, N, L, a]),
        (0, d.ZP)(
            () => (
                g.default.track(b.rMx.GDM_EDIT_INTERACTED, S(I({}, M), { action: "opened" })),
                () => {
                    g.default.track(b.rMx.GDM_EDIT_INTERACTED, S(I({}, M), { action: "dismissed" }));
                }
            ),
        );
    let k = (e) => {
        e.preventDefault();
        let r = R !== N,
            i = void 0 !== w;
        if (
            (g.default.track(
                b.rMx.GDM_EDIT_INTERACTED,
                S(I({}, M), {
                    action: "saved",
                    new_name_set: "" !== R,
                    new_icon_set: (i ? w : null == T ? void 0 : T.icon) != null,
                    name_changed: r,
                    icon_changed: i,
                }),
            ),
            r || i)
        ) {
            let e = {};
            r && (e.name = R), i && (e.icon = w), u.Z.updateChannel(t, e, v).catch(E.g6);
        }
        n();
    };
    return null == T
        ? null
        : (0, r.jsx)(_.Gt, {
              value: x,
              children: (0, r.jsx)("form", {
                  onSubmit: k,
                  children: (0, r.jsx)(l.Modal, {
                      title: y.intl.string(y.t["5Q9+/P"]),
                      actions: [
                          {
                              text: y.intl.string(y.t["ETE/oK"]),
                              variant: "secondary",
                              onClick: p,
                          },
                          {
                              text: y.intl.string(y.t.R3BPHx),
                              variant: "primary",
                              type: "submit",
                              disabled: R === N && !L,
                          },
                      ],
                      onClose: () => Promise.resolve(p()),
                      transitionState: o,
                      children: (0, r.jsxs)("div", {
                          className: O.modalContent,
                          children: [
                              (0, r.jsx)(A, {
                                  channel: T,
                                  previewIcon: w,
                                  onIconChange: (e) => D(e.imageUri),
                                  onIconRemove: () => D(null),
                                  analyticsLocations: x,
                              }),
                              (0, r.jsx)(c.oil, {
                                  "aria-label": y.intl.string(y.t.GEGW3N),
                                  placeholder: null != C ? C : "",
                                  value: R,
                                  onChange: P,
                                  autoFocus: !0,
                              }),
                          ],
                      }),
                  }),
              }),
          });
};
