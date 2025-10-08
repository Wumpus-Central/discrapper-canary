n.d(e, { default: () => A }), n(388685), n(781311), n(539854);
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
    u = n(793030),
    o = n(442837),
    s = n(481060),
    c = n(749210),
    d = n(910693),
    _ = n(501517),
    g = n(592125),
    b = n(70956),
    v = n(5192),
    E = n(981631),
    f = n(388032),
    p = n(764295),
    h = n(768716);
function M() {
    return [
        {
            value: 0,
            label: f.intl.string(f.t["4obaMT"]),
        },
        {
            value: +b.Z.Seconds.HOUR,
            label: f.intl.string(f.t.RKpitb),
        },
        {
            value: 6 * b.Z.Seconds.HOUR,
            label: f.intl.string(f.t["8WfJZ2"]),
        },
        {
            value: 12 * b.Z.Seconds.HOUR,
            label: f.intl.string(f.t.p1up7u),
        },
        {
            value: +b.Z.Seconds.DAY,
            label: f.intl.string(f.t.XuVkkJ),
        },
        {
            value: 3 * b.Z.Seconds.DAY,
            label: f.intl.string(f.t.gMcDS0),
        },
        {
            value: 7 * b.Z.Seconds.DAY,
            label: f.intl.string(f.t.FA7IUl),
        },
    ];
}
let m = M()[1].value,
    S = M()[0].value;
function A(t) {
    let {
            guildId: e,
            user: n,
            location: i,
            userIds: b,
            onBanMultiple: A,
            transitionState: O,
            onClose: C,
            canBulkBan: j = !1,
            modReportId: T,
        } = t,
        [y, x] = r.useState(null != T ? S : m),
        [I, k] = r.useState(""),
        [D, R] = r.useState(null),
        { isModReportClosed: N, isModReport: U } = (0, o.cj)([g.Z], () => {
            let t = g.Z.getChannel(T);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel(),
            };
        }),
        [Z, P] = r.useState(!1),
        [Y, F] = r.useState(!1),
        L = (0, d.sE)(e, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: b,
        }),
        B = r.useCallback(() => {
            let t = null != D ? D : I;
            if (null != A) {
                if (!(null != b && (null == b ? void 0 : b.size) > 0 && j) || Z) return;
                if ("" === I.trim() && !Z) return void P(!0);
                A(e, [...b], y, t);
            } else {
                if (null == n) return;
                c.Z.banUser(e, null == n ? void 0 : n.id, y, t, T).then(() => {
                    Y && null != T && _.Z.resolveFlag(T);
                });
            }
            L(d.jQ.BAN), C();
        }, [D, I, A, L, C, b, j, Z, e, y, n, T, Y]),
        w = r.useCallback((t) => {
            x(t);
        }, []),
        K = r.useCallback((t) => {
            k(t), P(!1), R(null);
        }, []),
        H = r.useCallback(
            (t) => {
                R(t), Z && P(!1);
            },
            [Z],
        ),
        V = U && !N && null != T,
        G = [
            {
                name: f.intl.string(f.t.tamLhY),
                value: f.intl.string(f.t.tamLhY),
            },
            {
                name: f.intl.string(f.t.UmxjMj),
                value: f.intl.string(f.t.UmxjMj),
            },
            {
                name: f.intl.string(f.t.EXY1d3),
                value: f.intl.string(f.t.EXY1d3),
            },
            {
                name: f.intl.string(f.t.BcZTKi),
                value: "other",
            },
        ],
        X = (() => {
            if (null != A && null != b)
                return f.intl.formatToPlainString(f.t.HVJexc, { count: null == b ? void 0 : b.size });
            if (null == n) return "";
            let t = v.ZP.getName(e, null, n);
            return f.intl.formatToPlainString(null != T ? f.t.WDR8XV : f.t.jeKpoq, { username: "@".concat(t) });
        })(),
        q = null == T ? null : f.intl.string(f.t.pQjhIC);
    return (0, l.jsx)(u.Modal, {
        onClose: C,
        transitionState: O,
        title: X,
        subtitle: null != q ? q : void 0,
        actions: (() => {
            let t = [];
            return (
                U ||
                    t.push({
                        variant: "secondary",
                        text: f.intl.string(f.t["ETE/oK"]),
                        onClick: C,
                    }),
                t.push({
                    variant: "critical-primary",
                    text: f.intl.string(f.t["5MBJ5O"]),
                    onClick: B,
                }),
                t
            );
        })(),
        actionBarInput: V
            ? (0, l.jsx)(s.XZJ, {
                  checked: Y,
                  onChange: (t) => F(t),
                  label: f.intl.string(p.default["8yIKen"]),
              })
            : void 0,
        children: (0, l.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, l.jsxs)(s.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        Z &&
                            (0, l.jsx)(s.kzN, {
                                className: h.error,
                                children: f.intl.string(f.t.IrYX19),
                            }),
                        (0, l.jsx)(s.FXm, {
                            required: !0,
                            label: f.intl.string(null != T ? f.t["+KCLVl"] : f.t.w4Ivys),
                            value: I,
                            options: G.map((t) =>
                                (function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (e) {
                                                var l;
                                                (l = n[e]),
                                                    e in t
                                                        ? Object.defineProperty(t, e, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (t[e] = l);
                                            });
                                    }
                                    return t;
                                })({}, t),
                            ),
                            onChange: K,
                        }),
                        (0, l.jsx)("div", {
                            className: a()(h.reasonFreeText, { [h.hidden]: "other" !== I }),
                            children: (0, l.jsx)(s.Kx8, {
                                maxLength: E.GNZ,
                                onChange: H,
                                value: null != D ? D : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(s.q4e, {
                    label: f.intl.string(null != T ? f.t.ERSM8P : f.t["8l3W09"]),
                    options: M(),
                    value: y,
                    onChange: w,
                }),
            ],
        }),
    });
}
