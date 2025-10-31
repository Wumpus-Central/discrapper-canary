n.d(e, { default: () => O }), n(388685), n(781311), n(539854);
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
    u = n(793030),
    o = n(442837),
    s = n(481060),
    c = n(749210),
    d = n(910693),
    g = n(501517),
    v = n(592125),
    p = n(70956),
    h = n(5192),
    b = n(981631),
    f = n(388032),
    m = n(43617),
    j = n(768716);
function x() {
    return [
        {
            value: 0,
            label: f.intl.string(f.t["4obaMS"]),
        },
        {
            value: +p.Z.Seconds.HOUR,
            label: f.intl.string(f.t.RKpitY),
        },
        {
            value: 6 * p.Z.Seconds.HOUR,
            label: f.intl.string(f.t["8WfJZ8"]),
        },
        {
            value: 12 * p.Z.Seconds.HOUR,
            label: f.intl.string(f.t.p1up7u),
        },
        {
            value: +p.Z.Seconds.DAY,
            label: f.intl.string(f.t.XuVkkD),
        },
        {
            value: 3 * p.Z.Seconds.DAY,
            label: f.intl.string(f.t["gMcDS+"]),
        },
        {
            value: 7 * p.Z.Seconds.DAY,
            label: f.intl.string(f.t.FA7IUk),
        },
    ];
}
let C = x()[1].value,
    S = x()[0].value;
function O(t) {
    let {
            guildId: e,
            user: n,
            location: i,
            userIds: p,
            onBanMultiple: O,
            transitionState: y,
            onClose: k,
            canBulkBan: M = !1,
            modReportId: R,
        } = t,
        [E, Z] = r.useState(null != R ? S : C),
        [T, _] = r.useState(""),
        [P, A] = r.useState(null),
        { isModReportClosed: D, isModReport: K } = (0, o.cj)([v.Z], () => {
            let t = v.Z.getChannel(R);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel(),
            };
        }),
        [w, F] = r.useState(!1),
        [U, I] = r.useState(!1),
        N = (0, d.sE)(e, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: p,
        }),
        Y = r.useCallback(() => {
            let t = null != P ? P : T;
            if (null != O) {
                if (!(null != p && (null == p ? void 0 : p.size) > 0 && M) || w) return;
                if ("" === T.trim() && !w) return void F(!0);
                O(e, [...p], E, t);
            } else {
                if (null == n) return;
                c.Z.banUser(e, null == n ? void 0 : n.id, E, t, R).then(() => {
                    U && null != R && g.Z.resolveFlag(R);
                });
            }
            N(d.jQ.BAN), k();
        }, [P, T, O, N, k, p, M, w, e, E, n, R, U]),
        X = r.useCallback((t) => {
            Z(t);
        }, []),
        H = r.useCallback((t) => {
            _(t), F(!1), A(null);
        }, []),
        L = r.useCallback(
            (t) => {
                A(t), w && F(!1);
            },
            [w],
        ),
        W = K && !D && null != R,
        q = [
            {
                name: f.intl.string(f.t.tamLhT),
                value: f.intl.string(f.t.tamLhT),
            },
            {
                name: f.intl.string(f.t.UmxjMg),
                value: f.intl.string(f.t.UmxjMg),
            },
            {
                name: f.intl.string(f.t.EXY1d8),
                value: f.intl.string(f.t.EXY1d8),
            },
            {
                name: f.intl.string(f.t.BcZTKu),
                value: "other",
            },
        ],
        B = (() => {
            if (null != O && null != p)
                return f.intl.formatToPlainString(f.t.HVJexf, { count: null == p ? void 0 : p.size });
            if (null == n) return "";
            let t = h.ZP.getName(e, null, n);
            return f.intl.formatToPlainString(null != R ? f.t.WDR8Xd : f.t.jeKpok, { username: "@".concat(t) });
        })(),
        J = null == R ? null : f.intl.string(f.t.pQjhIK);
    return (0, l.jsx)(u.Modal, {
        onClose: k,
        transitionState: y,
        title: B,
        subtitle: null != J ? J : void 0,
        actions: (() => {
            let t = [];
            return (
                K ||
                    t.push({
                        variant: "secondary",
                        text: f.intl.string(f.t["ETE/oC"]),
                        onClick: k,
                    }),
                t.push({
                    variant: "critical-primary",
                    text: f.intl.string(f.t["5MBJ5M"]),
                    onClick: Y,
                }),
                t
            );
        })(),
        actionBarInput: W
            ? (0, l.jsx)(s.Checkbox, {
                  checked: U,
                  onChange: (t) => I(t),
                  label: f.intl.string(m.default["8yIKem"]),
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
                        w &&
                            (0, l.jsx)(s.M14, {
                                type: "critical",
                                children: f.intl.string(f.t.IrYX1y),
                            }),
                        (0, l.jsx)(s.FXm, {
                            required: !0,
                            label: f.intl.string(null != R ? f.t["+KCLVp"] : f.t.w4Ivys),
                            value: T,
                            options: q.map((t) =>
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
                            onChange: H,
                        }),
                        (0, l.jsx)("div", {
                            className: a()(j.reasonFreeText, { [j.hidden]: "other" !== T }),
                            children: (0, l.jsx)(s.Kx8, {
                                maxLength: b.GNZ,
                                onChange: L,
                                value: null != P ? P : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(s.q4e, {
                    label: f.intl.string(null != R ? f.t.ERSM8H : f.t["8l3W0y"]),
                    options: x(),
                    value: E,
                    onChange: X,
                }),
            ],
        }),
    });
}
