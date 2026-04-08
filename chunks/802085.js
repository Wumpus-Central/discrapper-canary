n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(877413),
    o = n.n(r),
    c = n(311907),
    d = n(397927),
    u = n(843472),
    h = n(986692),
    m = n(93474),
    A = n(975571),
    g = n(465364),
    p = n(986350),
    f = n(860227),
    _ = n(291812),
    E = n(449859),
    x = n(652215),
    C = n(985018),
    S = n(2971),
    T = n(812782),
    I = n(830684);
let N = l.memo(function (e) {
        let { message: t, notice: n, compact: l = !1, onDismiss: s } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: a()(S.K1, { [S.oE]: l }),
                    children: [
                        (0, i.jsx)("div", {
                            className: S.Oz,
                            children: (0, i.jsx)(d.lmn, { size: "xs", color: "currentColor", className: S.F_ }),
                        }),
                        (0, i.jsx)("div", {
                            className: S.jC,
                            children: (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-text-default",
                                children: (0, g.Tz)(n, void 0, t.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: a()(S.ah, { [S.oE]: l }),
                    children: (0, i.jsx)(p.A, {
                        message: t,
                        onDeleteMessage: s,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: S.C2,
                            children: C.intl.format(C.t["Nd3Gh+"], {
                                helpUrl: A.A.getArticleURL(x.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    v = l.memo(function (e) {
        let { className: t, compact: n, message: s, children: r, content: d, onUpdate: A } = e,
            g = s.editedTimestamp?.toString(),
            p = l.useRef(!1),
            x = (0, c.bG)([m.A], () => m.A.getMessage(s.id), [s.id]),
            v = l.useCallback(() => {
                x?.isBlockedEdit ? (0, h.j)(s.id) : u.A.deleteMessage(s.channel_id, s.id, !0);
            }, [s, x]);
        return (
            l.useLayoutEffect(() => {
                p.current ? null != A && A() : (p.current = !0);
            }, [A, s.content, d, g, r]),
            (0, i.jsxs)("div", {
                id: (0, f.CJ)(s),
                className: a()(t, I.PT, {
                    [T.BK]: !0,
                    [T.nB]: "rtl" === o()(s.content),
                    [S.Dy]: x?.isBlockedEdit,
                    [S.bv]: !x?.isBlockedEdit,
                }),
                children: [
                    r ?? (0, _._A)(s, d),
                    x?.isBlockedEdit &&
                        null != s.timestamp &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                " ",
                                (0, i.jsx)(E.A, {
                                    timestamp: s.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, i.jsxs)("span", {
                                        className: T.oh,
                                        children: ["(", C.intl.string(C.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, i.jsx)(N, {
                        notice: x?.errorMessage ?? C.intl.string(C.t.zQ69pv),
                        message: s,
                        compact: n,
                        onDismiss: v,
                    }),
                ],
            })
        );
    }, _.sP);
