n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(877413),
    o = n.n(r),
    c = n(311907),
    d = n(397927),
    u = n(843472),
    h = n(986692),
    m = n(93474),
    A = n(975571),
    p = n(465364),
    g = n(986350),
    f = n(860227),
    _ = n(291812),
    E = n(449859),
    C = n(652215),
    x = n(985018),
    S = n(397405),
    T = n(679740),
    I = n(206314);
let N = l.memo(function (e) {
        let { message: t, notice: n, compact: l = !1, onDismiss: a } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: s()(S.K1, { [S.oE]: l }),
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
                                children: (0, p.Tz)(n, void 0, t.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: s()(S.ah, { [S.oE]: l }),
                    children: (0, i.jsx)(g.A, {
                        message: t,
                        onDeleteMessage: a,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: S.C2,
                            children: x.intl.format(x.t["Nd3Gh+"], {
                                helpUrl: A.A.getArticleURL(C.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    v = l.memo(function (e) {
        let { className: t, compact: n, message: a, children: r, content: d, onUpdate: A } = e,
            p = a.editedTimestamp?.toString(),
            g = l.useRef(!1),
            C = (0, c.bG)([m.A], () => m.A.getMessage(a.id), [a.id]),
            v = l.useCallback(() => {
                C?.isBlockedEdit ? (0, h.j)(a.id) : u.A.deleteMessage(a.channel_id, a.id, !0);
            }, [a, C]);
        return (
            l.useLayoutEffect(() => {
                g.current ? null != A && A() : (g.current = !0);
            }, [A, a.content, d, p, r]),
            (0, i.jsxs)("div", {
                id: (0, f.CJ)(a),
                className: s()(t, I.PT, {
                    [T.BK]: !0,
                    [T.nB]: "rtl" === o()(a.content),
                    [S.Dy]: C?.isBlockedEdit,
                    [S.bv]: !C?.isBlockedEdit,
                }),
                children: [
                    r ?? (0, _._A)(a, d),
                    C?.isBlockedEdit &&
                        null != a.timestamp &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                " ",
                                (0, i.jsx)(E.A, {
                                    timestamp: a.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, i.jsxs)("span", {
                                        className: T.oh,
                                        children: ["(", x.intl.string(x.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, i.jsx)(N, {
                        notice: C?.errorMessage ?? x.intl.string(x.t.zQ69pv),
                        message: a,
                        compact: n,
                        onDismiss: v,
                    }),
                ],
            })
        );
    }, _.sP);
