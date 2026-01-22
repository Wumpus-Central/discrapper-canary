n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(827734),
    c = n(397927),
    d = n(435183),
    u = n(599119),
    h = n(219504),
    g = n(576705),
    m = n(376310);
n(253913);
var f = n(652215),
    p = n(985018),
    b = n(57046);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { channel: t } = e,
        r = (0, a.bG)([g.A], () => g.A.can(f.xBc.MANAGE_CHANNELS, t), [t]),
        u = t.availableTags.length >= 20,
        m = t.availableTags.length > 0,
        A = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            r &&
                !e &&
                (0, c.mMO)(async () => {
                    let { default: e } = await n.e("47326").then(n.bind(n, 950989));
                    return (n) =>
                        (0, l.jsx)(
                            e,
                            j(x({}, n), {
                                channelId: t.id,
                                guildId: t.guild_id,
                            }),
                        );
                });
        }, [t, r]),
        v = i.useCallback(
            (e) => {
                r &&
                    (0, c.mMO)(async () => {
                        let { default: i } = await n.e("47326").then(n.bind(n, 950989));
                        return (n) =>
                            (0, l.jsx)(
                                i,
                                j(x({}, n), {
                                    channelId: t.id,
                                    guildId: t.guild_id,
                                    tag: e,
                                }),
                            );
                    });
            },
            [r, t],
        ),
        {
            handleDragStart: O,
            handleDragReset: C,
            handleDragComplete: N,
        } = (0, h.A)(t.availableTags, (e) => {
            (0, d.fy)({ availableTags: e });
        });
    return (0, l.jsxs)("div", {
        className: b._A,
        children: [
            m
                ? t.availableTags.map((e) =>
                      (0, l.jsx)(
                          y,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: r,
                              onTagClick: v,
                              onDragComplete: N,
                              onDragReset: C,
                              onDragStart: O,
                          },
                          e.id,
                      ),
                  )
                : null,
            m
                ? (0, l.jsx)(c.DUT, {
                      onClick: A,
                      className: s()(b.JE, { [b.r9]: !r || u }),
                      children: (0, l.jsx)(c.j96, {
                          size: "custom",
                          "aria-label": p.intl.string(p.t["/jubeD"]),
                          color: o.A.unsafe_rawColors.WHITE.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, l.jsx)(c.Button, {
                      variant: "primary",
                      text: p.intl.string(p.t["/jubeD"]),
                      disabled: !r,
                      onClick: A,
                  }),
        ],
    });
}
function y(e) {
    let {
            tag: t,
            availableTags: n,
            canManageChannels: i,
            onTagClick: r,
            onDragComplete: a,
            onDragStart: o,
            onDragReset: c,
        } = e,
        d = n.findIndex((e) => e.id === t.id),
        {
            drag: h,
            dragSourcePosition: g,
            drop: f,
            setIsDraggable: x,
        } = (0, u.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: d,
            optionId: t.id,
            onDragStart: o,
            onDragComplete: a,
            onDragReset: c,
        });
    return (0, l.jsx)("div", {
        className: s()(b.kL, {
            [b.A]: null != g && d < g,
            [b.Ze]: null != g && d > g,
        }),
        ref: (e) => {
            h(f(e));
        },
        onMouseEnter: () => x(i),
        onMouseLeave: () => x(!1),
        children: (0, l.jsx)(m.A, {
            tag: t,
            disabled: !i,
            ariaLabel: p.intl.formatToPlainString(p.t.jhSvB9, { name: t.name }),
            onClick: i ? () => r(t) : void 0,
        }),
    });
}
