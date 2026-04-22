n.d(t, { default: () => _ });
var l = n(627968),
    a = n(64700),
    r = n(91871),
    s = n.n(r),
    i = n(189213),
    o = n(417597),
    u = n(97808),
    d = n(778712),
    c = n(123292),
    g = n(534514),
    m = n(834730),
    x = n(783878),
    h = n(260598),
    p = n(374084),
    v = n(696451),
    k = n(71393),
    f = n(287809),
    b = n(569944),
    j = n(721228),
    C = n(985018),
    I = n(915858);
function _(e) {
    let { transitionState: t, onClose: n, guildId: r, welcomeMessage: _, onSave: L } = e,
        [E, S] = a.useState({ ..._ }),
        A = (0, o.bG)([k.A], () => k.A.getGuild(r)),
        H = a.useCallback(
            (e) => {
                let t = {};
                return Promise.resolve(
                    v.Ay.getMembers(r)
                        .filter((n) => {
                            let l = f.default.getUser(n.userId);
                            if ((null != l && (t[n.userId] = l), null == A || null == l || !(0, b.c)(A, l))) return !1;
                            let a = `${n.nick ?? ""} ${l?.username}`;
                            return s()(e.toLowerCase(), a.toLowerCase());
                        })
                        .map((e) => ({
                            id: e.userId,
                            value: e.userId,
                            label: e.nick ?? t[e.userId]?.username ?? "",
                            leading:
                                null != t[e.userId]
                                    ? (0, l.jsx)(u.Js, {
                                          size: d._3.SIZE_20,
                                          src: t[e.userId].getAvatarURL(r, 20),
                                          "aria-hidden": !0,
                                      })
                                    : void 0,
                        })),
                );
            },
            [r, A],
        ),
        w = a.useCallback(
            (e) => {
                S((t) => ({ ...t, authorIds: null != e ? [e] : [] }));
            },
            [S],
        ),
        y = a.useCallback(
            (e) => {
                S((t) => ({ ...t, message: e ?? "" }));
            },
            [S],
        ),
        M = a.useCallback(() => {
            L(E), n();
        }, [n, L, E]),
        N = a.useCallback(() => {
            L(null), n();
        }, [L, n]),
        F = E.authorIds[0] ?? "",
        G = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
                if (e.message.length < p.Fi) return C.intl.formatToPlainString(C.t.Lj831L, { minLength: p.Fi });
                else return C.intl.string(C.t["4m7gtn"]);
            return e.message.length < p.Fi ? C.intl.formatToPlainString(C.t.TJGHXt, { minLength: p.Fi }) : null;
        })(E),
        P = a.useMemo(
            () => [
                { text: C.intl.string(C.t["ETE/oC"]), onClick: n, variant: "secondary" },
                {
                    text: C.intl.string(C.t["R3BPH+"]),
                    onClick: M,
                    variant: "primary",
                    disabled: 0 === E.message.length || null != G,
                },
            ],
            [G, M, n, E.message.length],
        );
    return (0, l.jsxs)(i.Modal, {
        title: C.intl.string(C.t.UnLrit),
        transitionState: t,
        onClose: n,
        actions: P,
        actionBarInput: (0, l.jsx)(c.Q, { text: C.intl.string(C.t.N86XcP), onClick: N, variant: "critical" }),
        children: [
            (0, l.jsxs)("div", {
                className: I.eH,
                children: [
                    (0, l.jsxs)(g.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [C.intl.string(C.t.zNQfQy), (0, l.jsx)(j.A, {})],
                    }),
                    (0, l.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: C.intl.string(C.t.mQHK2S),
                    }),
                    (0, l.jsx)(x.Z, { selectionMode: "single", value: F ?? void 0, options: H, onSelectionChange: w }),
                ],
            }),
            (0, l.jsx)("div", { className: I.me }),
            (0, l.jsxs)("div", {
                className: I.eH,
                children: [
                    (0, l.jsx)(g.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: C.intl.string(C.t.SHQcv7),
                    }),
                    (0, l.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: C.intl.format(C.t["6biC4R"], {}),
                    }),
                    (0, l.jsx)(h.f, {
                        placeholder: C.intl.string(C.t["kX/Sbx"]),
                        value: E.message,
                        onChange: y,
                        maxLength: p.dl,
                    }),
                    null != G
                        ? (0, l.jsx)(m.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: G })
                        : null,
                ],
            }),
        ],
    });
}
