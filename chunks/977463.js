n.d(t, {
    A: () => N,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(442433),
    l = n(640708),
    c = n(941971),
    u = n(707539),
    d = n(576705),
    f = n(222823),
    p = n(340833),
    _ = n(913642),
    h = n(661191),
    m = n(513272),
    g = n(798505),
    E = n(781605),
    b = n(870721),
    y = n(652215),
    O = n(670455),
    A = n(995255);

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

function S(e) {
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

function I(e, t) {
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

function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function C(e) {
    let { summary: t, channel: f, members: b, guildId: v, unread: I, onClick: C } = e,
        [N, R] = i.useState(!1),
        w = (0, u.aK)(h.default.extractTimestamp(t.startId)),
        P = (0, a.bG)([m.A], () => m.A.summaryFeedback(t)),
        D = (e, n) => {
            e.stopPropagation(),
                (0, g.A)({
                    summary: t,
                    channel: f,
                    rating: n,
                });
        },
        x = d.A.can(y.xBc.MANAGE_MESSAGES, f),
        L = (e) => {
            x &&
                (0, o.L3)(e, async () => {
                    let { default: e } = await n.e("43921").then(n.bind(n, 304232));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            T(S({}, n), {
                                summary: t,
                            }),
                        );
                });
        };
    return (0, r.jsxs)(s.DUT, {
        className: A.kL,
        onClick: C,
        onContextMenu: L,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        children: [
            (0, r.jsx)(c.A, {
                hovered: N,
                unread: I,
                className: A.dM,
            }),
            (0, r.jsx)("div", {
                className: A.uV,
                children: (0, r.jsxs)("div", {
                    className: A.Hw,
                    children: [
                        (0, r.jsx)(s.Text, {
                            className: A.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: w,
                        }),
                        (0, r.jsx)(l.A, {
                            height: 4,
                            width: 4,
                            "aria-hidden": "true",
                            className: A.Om,
                        }),
                        (0, r.jsx)(s.oyn, {
                            size: "xxs",
                            color: "currentColor",
                            className: A.Kk,
                        }),
                        (0, r.jsx)(s.Text, {
                            className: A.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        b.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.A, {
                                        height: 4,
                                        width: 4,
                                        "aria-hidden": "true",
                                        className: A.Om,
                                    }),
                                    (0, r.jsx)(E.A, {
                                        partySize: {
                                            knownSize: b.length,
                                            totalSize: b.length,
                                        },
                                        maxAvatarsShown: 3,
                                        members: b,
                                        guildId: v,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            N &&
                !P &&
                (0, r.jsxs)("div", {
                    className: A.p_,
                    children: [
                        (0, r.jsx)(s.DUT, {
                            onClick: (e) => D(e, O.P0.GOOD),
                            children: (0, r.jsx)(_.A, {
                                className: A.O1,
                                width: 12,
                                height: 12,
                            }),
                        }),
                        (0, r.jsx)(s.DUT, {
                            onClick: (e) => D(e, O.P0.BAD),
                            children: (0, r.jsx)(p.A, {
                                className: A.O1,
                                width: 12,
                                height: 12,
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(s.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                className: A.DD,
                children: t.topic,
            }),
            (0, r.jsx)(s.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: A.VA,
                children: t.summShort,
            }),
        ],
    });
}

function N(e) {
    let { summaries: t, summariesMembers: n, channel: s, selectTopic: o, setOpen: l } = e,
        c = (0, a.bG)([f.Ay], () => f.Ay.getOldestUnreadMessageId(s.id)),
        u = i.useCallback(
            (e) => {
                o(e), l(!1);
            },
            [o, l],
        );
    return t.length < 1
        ? (0, r.jsx)(b.A, {})
        : (0, r.jsx)(r.Fragment, {
              children: t.map((e, t) => {
                  var i;
                  let a = null != (i = n[t]) ? i : [];
                  return (0, r.jsx)(
                      C,
                      {
                          summary: e,
                          channel: s,
                          members: a,
                          guildId: s.guild_id,
                          unread: null != c && h.default.compare(e.endId, c) > 0,
                          onClick: () => u(t),
                      },
                      t,
                  );
              }),
          });
}
