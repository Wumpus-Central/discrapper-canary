n.d(t, { default: () => k });
var l = n(627968),
    a = n(64700),
    s = n(91871),
    r = n.n(s),
    i = n(158954),
    o = n(417597),
    d = n(397927),
    u = n(374084),
    c = n(696451),
    g = n(71393),
    m = n(287809),
    x = n(569944),
    h = n(721228),
    p = n(985018),
    v = n(33009);
function k(e) {
    let { transitionState: t, onClose: n, guildId: s, welcomeMessage: k, onSave: f } = e,
        [C, b] = a.useState({ ...k }),
        j = (0, o.bG)([g.A], () => g.A.getGuild(s)),
        I = a.useCallback(
            (e) => {
                let t = {};
                return Promise.resolve(
                    c.Ay.getMembers(s)
                        .filter((n) => {
                            let l = m.default.getUser(n.userId);
                            if ((null != l && (t[n.userId] = l), null == j || null == l || !(0, x.c)(j, l))) return !1;
                            let a = `${n.nick ?? ""} ${l?.username}`;
                            return r()(e.toLowerCase(), a.toLowerCase());
                        })
                        .map((e) => ({
                            id: e.userId,
                            value: e.userId,
                            label: e.nick ?? t[e.userId]?.username ?? "",
                            leading:
                                null != t[e.userId]
                                    ? (0, l.jsx)(d.JsQ, {
                                          size: d._3J.SIZE_20,
                                          src: t[e.userId].getAvatarURL(s, 20),
                                          "aria-hidden": !0,
                                      })
                                    : void 0,
                        })),
                );
            },
            [s, j],
        ),
        _ = a.useCallback(
            (e) => {
                b((t) => ({ ...t, authorIds: null != e ? [e] : [] }));
            },
            [b],
        ),
        L = a.useCallback(
            (e) => {
                b((t) => ({ ...t, message: e ?? "" }));
            },
            [b],
        ),
        H = a.useCallback(() => {
            f(C), n();
        }, [n, f, C]),
        S = a.useCallback(() => {
            f(null), n();
        }, [f, n]),
        T = C.authorIds[0] ?? "",
        A = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
                if (e.message.length < u.Fi) return p.intl.formatToPlainString(p.t.Lj831L, { minLength: u.Fi });
                else return p.intl.string(p.t["4m7gtn"]);
            return e.message.length < u.Fi ? p.intl.formatToPlainString(p.t.TJGHXt, { minLength: u.Fi }) : null;
        })(C),
        w = a.useMemo(
            () => [
                { text: p.intl.string(p.t["ETE/oC"]), onClick: n, variant: "secondary" },
                {
                    text: p.intl.string(p.t["R3BPH+"]),
                    onClick: H,
                    variant: "primary",
                    disabled: 0 === C.message.length || null != A,
                },
            ],
            [A, H, n, C.message.length],
        );
    return (0, l.jsxs)(i.Modal, {
        title: p.intl.string(p.t.UnLrit),
        transitionState: t,
        onClose: n,
        actions: w,
        actionBarInput: (0, l.jsx)(d.QWc, { text: p.intl.string(p.t.N86XcP), onClick: S, variant: "critical" }),
        children: [
            (0, l.jsxs)("div", {
                className: v.eH,
                children: [
                    (0, l.jsxs)(d.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [p.intl.string(p.t.zNQfQy), (0, l.jsx)(h.A, {})],
                    }),
                    (0, l.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: p.intl.string(p.t.mQHK2S),
                    }),
                    (0, l.jsx)(d.ZiE, {
                        selectionMode: "single",
                        value: T ?? void 0,
                        options: I,
                        onSelectionChange: _,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: v.me }),
            (0, l.jsxs)("div", {
                className: v.eH,
                children: [
                    (0, l.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: p.intl.string(p.t.SHQcv7),
                    }),
                    (0, l.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: p.intl.format(p.t["6biC4R"], {}),
                    }),
                    (0, l.jsx)(d.fs1, {
                        placeholder: p.intl.string(p.t["kX/Sbx"]),
                        value: C.message,
                        onChange: L,
                        maxLength: u.dl,
                    }),
                    null != A
                        ? (0, l.jsx)(d.Text, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: A,
                          })
                        : null,
                ],
            }),
        ],
    });
}
