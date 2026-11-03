n.d(t, { default: () => L });
var l = n(477900),
    s = n(582128),
    i = n(91871),
    a = n.n(i),
    r = n(702841),
    o = n(189213),
    u = n(97808),
    d = n(778712),
    c = n(123292),
    g = n(534514),
    m = n(834730),
    h = n(890497),
    x = n(103557),
    v = n(374084),
    b = n(696451),
    f = n(71393),
    C = n(287809),
    k = n(569944),
    j = n(721228),
    I = n(105292),
    p = n(559357);
function L(e) {
    let { transitionState: t, onClose: n, guildId: i, welcomeMessage: L, onSave: S } = e,
        [y, E] = s.useState({ ...L }),
        H = (0, r.bG)([f.A], () => f.A.getGuild(i)),
        w = s.useCallback(
            (e) => {
                let t = {};
                return Promise.resolve(
                    b.Ay.getMembers(i)
                        .filter((n) => {
                            let l = C.default.getUser(n.userId);
                            if ((null != l && (t[n.userId] = l), null == H || null == l || !(0, k.c)(H, l))) return !1;
                            let s = `${n.nick ?? ""} ${l?.username}`;
                            return a()(e.toLowerCase(), s.toLowerCase());
                        })
                        .map((e) => ({
                            id: e.userId,
                            value: e.userId,
                            label: e.nick ?? t[e.userId]?.username ?? "",
                            leading:
                                null != t[e.userId]
                                    ? (0, l.jsx)(u.Js, {
                                          size: d._3.SIZE_20,
                                          src: t[e.userId].getAvatarURL(i, 20),
                                          "aria-hidden": !0,
                                      })
                                    : void 0,
                        })),
                );
            },
            [i, H],
        ),
        A = s.useCallback(
            (e) => {
                E((t) => ({ ...t, authorIds: null != e ? [e] : [] }));
            },
            [E],
        ),
        N = s.useCallback(
            (e) => {
                E((t) => ({ ...t, message: e ?? "" }));
            },
            [E],
        ),
        P = s.useCallback(() => {
            (S(y), n());
        }, [n, S, y]),
        Q = s.useCallback(() => {
            (S(null), n());
        }, [S, n]),
        F = y.authorIds[0] ?? "",
        M = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
                if (e.message.length < v.Fi) return I.intl.formatToPlainString(I.t.Lj831L, { minLength: v.Fi });
                else return I.intl.string(I.t["4m7gtn"]);
            return e.message.length < v.Fi ? I.intl.formatToPlainString(I.t.TJGHXt, { minLength: v.Fi }) : null;
        })(y),
        T = s.useMemo(
            () => [
                { text: I.intl.string(I.t["ETE/oC"]), onClick: n, variant: "secondary" },
                {
                    text: I.intl.string(I.t["R3BPH+"]),
                    onClick: P,
                    variant: "primary",
                    disabled: 0 === y.message.length || null != M,
                },
            ],
            [M, P, n, y.message.length],
        );
    return (0, l.jsxs)(o.a, {
        title: I.intl.string(I.t.UnLrit),
        transitionState: t,
        onClose: n,
        actions: T,
        actionBarInput: (0, l.jsx)(c.Q, { text: I.intl.string(I.t.N86XcP), onClick: Q, variant: "critical" }),
        children: [
            (0, l.jsxs)("div", {
                className: p.eH,
                children: [
                    (0, l.jsxs)(g.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: [I.intl.string(I.t.zNQfQy), (0, l.jsx)(j.A, {})],
                    }),
                    (0, l.jsx)(m.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: I.intl.string(I.t.mQHK2S),
                    }),
                    (0, l.jsx)(h.Z, { selectionMode: "single", value: F ?? void 0, options: w, onSelectionChange: A }),
                ],
            }),
            (0, l.jsx)("div", { className: p.me }),
            (0, l.jsxs)("div", {
                className: p.eH,
                children: [
                    (0, l.jsx)(g.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: I.intl.string(I.t.SHQcv7),
                    }),
                    (0, l.jsx)(m.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: I.intl.format(I.t["6biC4R"], {}),
                    }),
                    (0, l.jsx)(x.f, {
                        placeholder: I.intl.string(I.t["kX/Sbx"]),
                        value: y.message,
                        onChange: N,
                        maxLength: v.dl,
                    }),
                    null != M
                        ? (0, l.jsx)(m.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: M })
                        : null,
                ],
            }),
        ],
    });
}
