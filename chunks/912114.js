n.d(t, {
    B: () => E,
    default: () => j,
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
    h = n(906732),
    f = n(43267),
    m = n(933557),
    g = n(592125),
    b = n(626135),
    C = n(140106),
    y = n(981631),
    v = n(388032),
    _ = n(358993);
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
function x(e, t) {
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
function E(e) {
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
        m = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, f.x)(t, 120) : null,
        { analyticsLocations: g } = (0, h.ZP)(o, p.Z.GROUP_DM_ICON_EDITOR),
        b = s ? 32 : 64;
    return (0, i.jsxs)("div", {
        className: a()(_.iconSection, u),
        children: [
            (0, i.jsxs)(c.P3F, {
                className: a()(_.iconContainer, { [_.petite]: s }),
                "aria-label": v.intl.string(v.t["0qPSMV"]),
                onClick: () => (0, C.ND)(r, g),
                children: [
                    null != m
                        ? (0, i.jsx)("img", {
                              src: m,
                              alt: "",
                              className: _.iconImage,
                          })
                        : (0, i.jsx)("div", {
                              className: _.iconPlaceholder,
                              children: (0, i.jsx)(c.BFJ, {
                                  size: "custom",
                                  width: b,
                                  height: b,
                                  color: "currentColor",
                              }),
                          }),
                    (0, i.jsx)("div", {
                        className: _.pencilIconWrapper,
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
let j = function (e) {
    let {
            channelId: t,
            onClose: n,
            transitionState: l,
            setHasPendingChanges: a,
            closeOrShowDiscardChangesAlert: f,
            location: j,
        } = e,
        S = (0, s.e7)([g.Z], () => g.Z.getChannel(t)),
        P = null == S ? void 0 : S.name,
        I = (0, m.cO)(S),
        [Z, T] = r.useState(null != P ? P : ""),
        [N, A] = r.useState(void 0),
        w = void 0 !== N,
        { analyticsLocations: M } = (0, h.ZP)(j, p.Z.GROUP_DM_EDIT_MODAL),
        R = {
            channel_id: t,
            channel_type: null == S ? void 0 : S.type,
            location: j,
            location_stack: M,
            old_name_set: "" !== P,
            old_icon_set: (null == S ? void 0 : S.icon) != null,
        };
    return (r.useEffect(() => {
        a(Z !== P || w);
    }, [Z, P, w, a]),
    (0, d.ZP)(
        () => (
            b.default.track(y.rMx.GDM_EDIT_INTERACTED, x(O({}, R), { action: "opened" })),
            () => {
                b.default.track(y.rMx.GDM_EDIT_INTERACTED, x(O({}, R), { action: "dismissed" }));
            }
        ),
    ),
    null == S)
        ? null
        : (0, i.jsx)(h.Gt, {
              value: M,
              children: (0, i.jsx)("form", {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let i = Z !== P,
                          r = void 0 !== N;
                      if (
                          (b.default.track(
                              y.rMx.GDM_EDIT_INTERACTED,
                              x(O({}, R), {
                                  action: "saved",
                                  new_name_set: "" !== Z,
                                  new_icon_set: (r ? N : null == S ? void 0 : S.icon) != null,
                                  name_changed: i,
                                  icon_changed: r,
                              }),
                          ),
                          i || r)
                      ) {
                          let e = {};
                          i && (e.name = Z), r && (e.icon = N), u.Z.updateChannel(t, e, j).catch(C.g6);
                      }
                      n();
                  },
                  children: (0, i.jsx)(o.Modal, {
                      title: v.intl.string(v.t["5Q9+/L"]),
                      actions: [
                          {
                              text: v.intl.string(v.t["ETE/oC"]),
                              variant: "secondary",
                              onClick: f,
                          },
                          {
                              text: v.intl.string(v.t["R3BPH+"]),
                              variant: "primary",
                              type: "submit",
                              disabled: Z === P && !w,
                          },
                      ],
                      onClose: () => Promise.resolve(f()),
                      transitionState: l,
                      children: (0, i.jsxs)("div", {
                          className: _.modalContent,
                          children: [
                              (0, i.jsx)(E, {
                                  channel: S,
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
