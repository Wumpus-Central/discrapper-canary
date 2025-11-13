n.d(t, { Z: () => b }), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(28664),
    o = n(481060),
    c = n(603211),
    d = n(734893),
    u = n(592125),
    g = n(768581),
    m = n(8426),
    p = n(969632),
    f = n(388032),
    h = n(197530);
let b = function (e) {
    let { guildId: t, resourceChannel: l, index: b, onDragComplete: x, onDragStart: j, onDragReset: _ } = e,
        { title: v, channelId: O, description: C } = l,
        y = u.Z.getChannel(O),
        N = null;
    (null != y && (0, d.k3)(y)) || (N = f.intl.string(f.t.kTdL8X));
    let E = null == C || 0 === C.length,
        I = g.ZP.getResourceChannelIconURL({
            channelId: l.channelId,
            icon: l.icon,
        }),
        {
            drag: S,
            dragSourcePosition: T,
            drop: P,
            setIsDraggable: w,
        } = (0, c.Z)({
            type: "RESOURCE_CHANNEL",
            optionId: l.channelId,
            index: b,
            onDragStart: j,
            onDragComplete: x,
            onDragReset: _,
        }),
        Z = i.useCallback(
            (e) => {
                (0, m.XG)(l.channelId, e);
            },
            [l.channelId],
        ),
        R = i.useCallback(
            (e, n) => {
                let r = p.Z.getSettings();
                null != r &&
                    ((0, m.XG)(l.channelId, e),
                    (0, m.oo)(t, r).then(() => {
                        (0, m.mM)(t, e.channelId, n);
                    }));
            },
            [t, l],
        ),
        D = i.useCallback(
            () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("84725").then(n.bind(n, 462499));
                    return (n) => {
                        var i, a;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (a = a =
                                {
                                    guildId: t,
                                    resourceChannel: l,
                                    onSave: Z,
                                    onDelete: () => (0, m.Hz)(l.channelId),
                                    onIconUpload: R,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            i),
                        );
                    };
                }),
            [t, l, Z, R],
        );
    return null == y
        ? null
        : (0, r.jsxs)("div", {
              className: h.resourceChannelContainer,
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(h.resourceChannel, {
                          [h.dropIndicatorBefore]: null != T && b < T,
                          [h.dropIndicatorAfter]: null != T && b > T,
                          [h.resourceChannelError]: null != N,
                      }),
                      ref: (e) => {
                          S(P(e));
                      },
                      children: [
                          (0, r.jsx)("div", {
                              className: h.dragContainer,
                              onMouseEnter: () => w(!0),
                              onMouseLeave: () => w(!1),
                              children: (0, r.jsx)(o.Vni, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: h.dragIcon,
                              }),
                          }),
                          null != I &&
                              (0, r.jsx)("div", {
                                  className: h.iconWrapper,
                                  children: (0, r.jsx)("img", {
                                      src: I,
                                      className: h.icon,
                                      width: 32,
                                      height: 32,
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                              }),
                          (0, r.jsxs)("div", {
                              className: h.resourceChannelContent,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      className: h.resourceChannelTitle,
                                      variant: "text-md/semibold",
                                      color: "header-primary",
                                      children: v,
                                  }),
                                  !E &&
                                      (0, r.jsx)(o.Text, {
                                          className: h.resourceChannelDescription,
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: C,
                                      }),
                              ],
                          }),
                          (0, r.jsx)(s.u, {
                              text: f.intl.string(f.t.bt75uw),
                              children: (0, r.jsx)(o.hU, {
                                  icon: o.vdY,
                                  size: "sm",
                                  variant: "primary",
                                  onClick: D,
                                  "aria-label": f.intl.string(f.t.bt75uw),
                              }),
                          }),
                      ],
                  }),
                  null != N &&
                      (0, r.jsx)(o.Text, {
                          variant: "text-xs/medium",
                          color: "text-danger",
                          children: N,
                      }),
              ],
          });
};
