n.d(t, { Z: () => h }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(28664),
    o = n(481060),
    c = n(603211),
    d = n(734893),
    u = n(592125),
    g = n(768581),
    f = n(8426),
    m = n(969632),
    b = n(388032),
    p = n(551952);
let h = function (e) {
    let { guildId: t, resourceChannel: l, index: h, onDragComplete: x, onDragStart: j, onDragReset: v } = e,
        { title: O, channelId: C, description: y } = l,
        N = u.Z.getChannel(C),
        E = null;
    (null != N && (0, d.k3)(N)) || (E = b.intl.string(b.t.kTdL8X));
    let I = null == y || 0 === y.length,
        S = g.ZP.getResourceChannelIconURL({
            channelId: l.channelId,
            icon: l.icon,
        }),
        {
            drag: _,
            dragSourcePosition: T,
            drop: P,
            setIsDraggable: w,
        } = (0, c.Z)({
            type: "RESOURCE_CHANNEL",
            optionId: l.channelId,
            index: h,
            onDragStart: j,
            onDragComplete: x,
            onDragReset: v,
        }),
        Z = i.useCallback(
            (e) => {
                (0, f.XG)(l.channelId, e);
            },
            [l.channelId],
        ),
        R = i.useCallback(
            (e, n) => {
                let r = m.Z.getSettings();
                null != r &&
                    ((0, f.XG)(l.channelId, e),
                    (0, f.oo)(t, r).then(() => {
                        (0, f.mM)(t, e.channelId, n);
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
                                    onDelete: () => (0, f.Hz)(l.channelId),
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
    return null == N
        ? null
        : (0, r.jsxs)("div", {
              className: p.resourceChannelContainer,
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(p.resourceChannel, {
                          [p.dropIndicatorBefore]: null != T && h < T,
                          [p.dropIndicatorAfter]: null != T && h > T,
                          [p.resourceChannelError]: null != E,
                      }),
                      ref: (e) => {
                          _(P(e));
                      },
                      children: [
                          (0, r.jsx)("div", {
                              className: p.dragContainer,
                              onMouseEnter: () => w(!0),
                              onMouseLeave: () => w(!1),
                              children: (0, r.jsx)(o.Vni, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: p.dragIcon,
                              }),
                          }),
                          null != S &&
                              (0, r.jsx)("div", {
                                  className: p.iconWrapper,
                                  children: (0, r.jsx)("img", {
                                      src: S,
                                      className: p.icon,
                                      width: 32,
                                      height: 32,
                                      alt: "",
                                      "aria-hidden": !0,
                                  }),
                              }),
                          (0, r.jsxs)("div", {
                              className: p.resourceChannelContent,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      className: p.resourceChannelTitle,
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: O,
                                  }),
                                  !I &&
                                      (0, r.jsx)(o.Text, {
                                          className: p.resourceChannelDescription,
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: y,
                                      }),
                              ],
                          }),
                          (0, r.jsx)(s.u, {
                              text: b.intl.string(b.t.bt75uw),
                              children: (0, r.jsx)(o.hU, {
                                  icon: o.vdY,
                                  size: "sm",
                                  variant: "primary",
                                  onClick: D,
                                  "aria-label": b.intl.string(b.t.bt75uw),
                              }),
                          }),
                      ],
                  }),
                  null != E &&
                      (0, r.jsx)(o.Text, {
                          variant: "text-xs/medium",
                          color: "text-feedback-critical",
                          children: E,
                      }),
              ],
          });
};
