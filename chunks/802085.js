n.d(t, { A: () => C });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(877413),
    o = n.n(s),
    c = n(311907),
    u = n(397927),
    d = n(843472),
    f = n(986692),
    p = n(93474),
    h = n(975571),
    b = n(465364),
    g = n(986350),
    m = n(860227),
    A = n(291812),
    y = n(449859),
    O = n(652215),
    j = n(985018),
    v = n(397405),
    x = n(679740),
    E = n(206314);
let _ = l.memo(function (e) {
        let { message: t, notice: n, compact: l = !1, onDismiss: i } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: a()(v.K1, { [v.oE]: l }),
                    children: [
                        (0, r.jsx)("div", {
                            className: v.Oz,
                            children: (0, r.jsx)(u.lmn, {
                                size: "xs",
                                color: "currentColor",
                                className: v.F_,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: v.jC,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-text-default",
                                children: (0, b.Tz)(n, void 0, t.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: a()(v.ah, { [v.oE]: l }),
                    children: (0, r.jsx)(g.A, {
                        message: t,
                        onDeleteMessage: i,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: v.C2,
                            children: j.intl.format(j.t["Nd3Gh+"], {
                                helpUrl: h.A.getArticleURL(O.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    C = l.memo(function (e) {
        var t, n;
        let { className: i, compact: s, message: u, children: h, content: b, onUpdate: g } = e,
            O = null == (n = u.editedTimestamp) ? void 0 : n.toString(),
            C = l.useRef(!1),
            S = (0, c.bG)([p.A], () => p.A.getMessage(u.id), [u.id]),
            I = l.useCallback(() => {
                (null == S ? void 0 : S.isBlockedEdit) ? (0, f.j)(u.id) : d.A.deleteMessage(u.channel_id, u.id, !0);
            }, [u, S]);
        return (
            l.useLayoutEffect(() => {
                C.current ? null != g && g() : (C.current = !0);
            }, [g, u.content, b, O, h]),
            (0, r.jsxs)("div", {
                id: (0, m.CJ)(u),
                className: a()(i, E.PT, {
                    [x.BK]: !0,
                    [x.nB]: "rtl" === o()(u.content),
                    [v.Dy]: null == S ? void 0 : S.isBlockedEdit,
                    [v.bv]: !(null == S ? void 0 : S.isBlockedEdit),
                }),
                children: [
                    null != h ? h : (0, A._A)(u, b),
                    (null == S ? void 0 : S.isBlockedEdit) &&
                        null != u.timestamp &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                " ",
                                (0, r.jsx)(y.A, {
                                    timestamp: u.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, r.jsxs)("span", {
                                        className: x.oh,
                                        children: ["(", j.intl.string(j.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(_, {
                        notice: null != (t = null == S ? void 0 : S.errorMessage) ? t : j.intl.string(j.t.zQ69pv),
                        message: u,
                        compact: s,
                        onDismiss: I,
                    }),
                ],
            })
        );
    }, A.sP);
