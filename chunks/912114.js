n.d(t, {
    B: () => j,
    default: () => S,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(793030),
    s = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(493773),
    p = n(100527),
    f = n(906732),
    h = n(43267),
    m = n(933557),
    g = n(592125),
    b = n(626135),
    y = n(140106),
    C = n(981631),
    v = n(388032),
    x = n(718937);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    let {
            channel: t,
            previewIcon: n,
            onIconChange: r,
            onIconRemove: l,
            analyticsLocations: o,
            petite: s = !1,
            className: u,
            allowRemovingIcon: d = !0,
        } = e,
        m = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, h.x)(t, 120) : null,
        { analyticsLocations: g } = (0, f.ZP)(o, p.Z.GROUP_DM_ICON_EDITOR),
        b = s ? 32 : 64;
    return (0, i.jsxs)("div", {
        className: a()(x.iconSection, u),
        children: [
            (0, i.jsxs)(c.P3F, {
                className: a()(x.iconContainer, { [x.petite]: s }),
                "aria-label": v.intl.string(v.t["0qPSMV"]),
                onClick: () => (0, y.ND)(r, g),
                children: [
                    null != m
                        ? (0, i.jsx)("img", {
                              src: m,
                              alt: "",
                              className: x.iconImage,
                          })
                        : (0, i.jsx)("div", {
                              className: x.iconPlaceholder,
                              children: (0, i.jsx)(c.BFJ, {
                                  size: "custom",
                                  width: b,
                                  height: b,
                                  color: "currentColor",
                              }),
                          }),
                    (0, i.jsx)("div", {
                        className: x.pencilIconWrapper,
                        children: (0, i.jsx)(c.vdY, {
                            color: "currentColor",
                            size: s ? "xs" : "refresh_sm",
                        }),
                    }),
                ],
            }),
            null != m && d
                ? (0, i.jsx)(c.Avr, {
                      variant: "critical",
                      onClick: l,
                      "aria-label": v.intl.string(v.t["uY+Nk/"]),
                      text: v.intl.string(v.t["uY+Nk/"]),
                      textVariant: "text-sm/medium",
                      size: "sm",
                      role: "button",
                      type: "button",
                  })
                : null,
        ],
    });
}
let S = function (e) {
    let {
            channelId: t,
            onClose: n,
            transitionState: l,
            setHasPendingChanges: a,
            closeOrShowDiscardChangesAlert: h,
            location: S,
        } = e,
        _ = (0, s.e7)([g.Z], () => g.Z.getChannel(t)),
        P = null == _ ? void 0 : _.name,
        I = (0, m.cO)(_),
        [Z, T] = r.useState(null != P ? P : ""),
        [N, A] = r.useState(void 0),
        w = void 0 !== N,
        { analyticsLocations: M } = (0, f.ZP)(S, p.Z.GROUP_DM_EDIT_MODAL),
        R = {
            channel_id: t,
            channel_type: null == _ ? void 0 : _.type,
            location: S,
            location_stack: M,
            old_name_set: "" !== P,
            old_icon_set: (null == _ ? void 0 : _.icon) != null,
        };
    return (r.useEffect(() => {
        a(Z !== P || w);
    }, [Z, P, w, a]),
    (0, d.ZP)(
        () => (
            b.default.track(C.rMx.GDM_EDIT_INTERACTED, E(O({}, R), { action: "opened" })),
            () => {
                b.default.track(C.rMx.GDM_EDIT_INTERACTED, E(O({}, R), { action: "dismissed" }));
            }
        ),
    ),
    null == _)
        ? null
        : (0, i.jsx)(f.Gt, {
              value: M,
              children: (0, i.jsx)("form", {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let i = Z !== P,
                          r = void 0 !== N;
                      if (
                          (b.default.track(
                              C.rMx.GDM_EDIT_INTERACTED,
                              E(O({}, R), {
                                  action: "saved",
                                  new_name_set: "" !== Z,
                                  new_icon_set: (r ? N : null == _ ? void 0 : _.icon) != null,
                                  name_changed: i,
                                  icon_changed: r,
                              }),
                          ),
                          i || r)
                      ) {
                          let e = {};
                          i && (e.name = Z), r && (e.icon = N), u.Z.updateChannel(t, e, S).catch(y.g6);
                      }
                      n();
                  },
                  children: (0, i.jsx)(o.Modal, {
                      title: v.intl.string(v.t["5Q9+/L"]),
                      actions: [
                          {
                              text: v.intl.string(v.t["ETE/oC"]),
                              variant: "secondary",
                              onClick: h,
                          },
                          {
                              text: v.intl.string(v.t["R3BPH+"]),
                              variant: "primary",
                              type: "submit",
                              disabled: Z === P && !w,
                          },
                      ],
                      onClose: () => Promise.resolve(h()),
                      transitionState: l,
                      children: (0, i.jsxs)("div", {
                          className: x.modalContent,
                          children: [
                              (0, i.jsx)(j, {
                                  channel: _,
                                  previewIcon: N,
                                  onIconChange: (e) => A(e.imageUri),
                                  onIconRemove: () => A(null),
                                  analyticsLocations: M,
                              }),
                              (0, i.jsx)(c.oil, {
                                  "aria-label": v.intl.string(v.t.GEGW3P),
                                  placeholder: null != I ? I : "",
                                  value: Z,
                                  onChange: T,
                                  autoFocus: !0,
                              }),
                          ],
                      }),
                  }),
              }),
          });
};
