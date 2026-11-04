var l = n(477900),
    s = n(582128),
    a = n(91871),
    i = n.n(a),
    r = n(164636),
    o = n(189213),
    u = n(97808),
    d = n(778712),
    c = n(123292),
    g = n(534514),
    m = n(834730),
    h = n(890497),
    x = n(103557);
n(374084);
var v = n(696451),
    b = n(71393),
    f = n(287809),
    C = n(569944),
    k = n(721228),
    j = n(792996),
    I = n(559357);
n.d(
    t,
    {},
    {
        default: function (e) {
            let { transitionState: t, onClose: n, guildId: a, welcomeMessage: p, onSave: L } = e,
                [S, y] = s.useState({ ...p }),
                E = (0, r.bG)([b.A], () => b.A.getGuild(a)),
                H = s.useCallback(
                    (e) => {
                        let t = {};
                        return Promise.resolve(
                            v.Ay.getMembers(a)
                                .filter((n) => {
                                    let l = f.default.getUser(n.userId);
                                    if ((null != l && (t[n.userId] = l), null == E || null == l || !(0, C.c)(E, l)))
                                        return !1;
                                    let s = `${n.nick ?? ""} ${l?.username}`;
                                    return i()(e.toLowerCase(), s.toLowerCase());
                                })
                                .map((e) => ({
                                    id: e.userId,
                                    value: e.userId,
                                    label: e.nick ?? t[e.userId]?.username ?? "",
                                    leading:
                                        null != t[e.userId]
                                            ? (0, l.jsx)(u.Js, {
                                                  size: d._3.SIZE_20,
                                                  src: t[e.userId].getAvatarURL(a, 20),
                                                  "aria-hidden": !0,
                                              })
                                            : void 0,
                                })),
                        );
                    },
                    [a, E],
                ),
                w = s.useCallback(
                    (e) => {
                        y((t) => ({ ...t, authorIds: null != e ? [e] : [] }));
                    },
                    [y],
                ),
                A = s.useCallback(
                    (e) => {
                        y((t) => ({ ...t, message: e ?? "" }));
                    },
                    [y],
                ),
                N = s.useCallback(() => {
                    (L(S), n());
                }, [n, L, S]),
                P = s.useCallback(() => {
                    (L(null), n());
                }, [L, n]),
                Q = S.authorIds[0] ?? "",
                M = (function (e) {
                    if (null == e.message || 0 === e.message.length) return null;
                    if (null == e.authorIds || 0 === e.authorIds.length)
                        if (e.message.length < 7) return j.intl.formatToPlainString(j.t.Lj831L, { minLength: 7 });
                        else return j.intl.string(j.t["4m7gtn"]);
                    return e.message.length < 7 ? j.intl.formatToPlainString(j.t.TJGHXt, { minLength: 7 }) : null;
                })(S),
                T = s.useMemo(
                    () => [
                        { text: j.intl.string(j.t["ETE/oC"]), onClick: n, variant: "secondary" },
                        {
                            text: j.intl.string(j.t["R3BPH+"]),
                            onClick: N,
                            variant: "primary",
                            disabled: 0 === S.message.length || null != M,
                        },
                    ],
                    [M, N, n, S.message.length],
                );
            return (0, l.jsxs)(o.a, {
                title: j.intl.string(j.t.UnLrit),
                transitionState: t,
                onClose: n,
                actions: T,
                actionBarInput: (0, l.jsx)(c.Q, { text: j.intl.string(j.t.N86XcP), onClick: P, variant: "critical" }),
                children: [
                    (0, l.jsxs)("div", {
                        className: I.eH,
                        children: [
                            (0, l.jsxs)(g.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: [j.intl.string(j.t.zNQfQy), (0, l.jsx)(k.A, {})],
                            }),
                            (0, l.jsx)(m.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: j.intl.string(j.t.mQHK2S),
                            }),
                            (0, l.jsx)(h.Z, {
                                selectionMode: "single",
                                value: Q ?? void 0,
                                options: H,
                                onSelectionChange: w,
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: I.me }),
                    (0, l.jsxs)("div", {
                        className: I.eH,
                        children: [
                            (0, l.jsx)(g.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: j.intl.string(j.t.SHQcv7),
                            }),
                            (0, l.jsx)(m.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: j.intl.format(j.t["6biC4R"], {}),
                            }),
                            (0, l.jsx)(x.f, {
                                placeholder: j.intl.string(j.t["kX/Sbx"]),
                                value: S.message,
                                onChange: A,
                                maxLength: 300,
                            }),
                            null != M
                                ? (0, l.jsx)(m.E, {
                                      variant: "body-xs/normal",
                                      color: "text-feedback-critical",
                                      children: M,
                                  })
                                : null,
                        ],
                    }),
                ],
            });
        },
    },
);
