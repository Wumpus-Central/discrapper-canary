n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(877413),
    o = n.n(r),
    c = n(311907),
    d = n(231483),
    u = n(834730),
    h = n(843472),
    m = n(986692),
    A = n(93474),
    g = n(975571),
    p = n(465364),
    _ = n(986350),
    f = n(860227),
    E = n(291812),
    C = n(449859),
    x = n(652215),
    S = n(985018),
    I = n(89620),
    N = n(484163),
    v = n(168147);
let T = l.memo(function (e) {
        let { message: t, notice: n, compact: l = !1, onDismiss: a } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: s()(I.K1, { [I.oE]: l }),
                    children: [
                        (0, i.jsx)("div", {
                            className: I.Oz,
                            children: (0, i.jsx)(d.l, { size: "xs", color: "currentColor", className: I.F_ }),
                        }),
                        (0, i.jsx)("div", {
                            className: I.jC,
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "interactive-text-default",
                                children: (0, p.Tz)(n, void 0, t.channel_id),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: s()(I.ah, { [I.oE]: l }),
                    children: (0, i.jsx)(_.A, {
                        message: t,
                        onDeleteMessage: a,
                        children: (0, i.jsx)(u.E, {
                            variant: "text-xs/normal",
                            color: "interactive-text-default",
                            tag: "span",
                            className: I.C2,
                            children: S.intl.format(S.t["Nd3Gh+"], {
                                helpUrl: g.A.getArticleURL(x.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    y = l.memo(function (e) {
        let { className: t, compact: n, message: a, children: r, content: d, onUpdate: u } = e,
            g = a.editedTimestamp?.toString(),
            p = l.useRef(!1),
            _ = (0, c.bG)([A.A], () => A.A.getMessage(a.id), [a.id]),
            x = l.useCallback(() => {
                _?.isBlockedEdit ? (0, m.j)(a.id) : h.A.deleteMessage(a.channel_id, a.id, !0);
            }, [a, _]);
        return (
            l.useLayoutEffect(() => {
                p.current ? null != u && u() : (p.current = !0);
            }, [u, a.content, d, g, r]),
            (0, i.jsxs)("div", {
                id: (0, f.CJ)(a),
                className: s()(t, v.PT, {
                    [N.BK]: !0,
                    [N.nB]: "rtl" === o()(a.content),
                    [I.Dy]: _?.isBlockedEdit,
                    [I.bv]: !_?.isBlockedEdit,
                }),
                children: [
                    r ?? (0, E._A)(a, d),
                    _?.isBlockedEdit &&
                        null != a.timestamp &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                " ",
                                (0, i.jsx)(C.A, {
                                    timestamp: a.timestamp,
                                    isEdited: !0,
                                    isInline: !1,
                                    children: (0, i.jsxs)("span", {
                                        className: N.oh,
                                        children: ["(", S.intl.string(S.t.Z7eEx9), ")"],
                                    }),
                                }),
                            ],
                        }),
                    (0, i.jsx)(T, {
                        notice: _?.errorMessage ?? S.intl.string(S.t.zQ69pv),
                        message: a,
                        compact: n,
                        onDismiss: x,
                    }),
                ],
            })
        );
    }, E.sP);
