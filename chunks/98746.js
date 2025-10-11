n.d(e, { default: () => S }), n(388685), n(781311), n(539854);
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
    b = n(70956),
    h = n(5192),
    p = n(981631),
    f = n(388032),
    j = n(764295),
    m = n(768716);
function x() {
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
let C = x()[1].value,
    O = x()[0].value;
function S(t) {
    let {
            guildId: e,
            user: n,
            location: i,
            userIds: b,
            onBanMultiple: S,
            transitionState: R,
            onClose: k,
            canBulkBan: y = !1,
            modReportId: E,
        } = t,
        [M, Z] = r.useState(null != E ? O : C),
        [T, _] = r.useState(""),
        [P, A] = r.useState(null),
        { isModReportClosed: K, isModReport: N } = (0, o.cj)([v.Z], () => {
            let t = v.Z.getChannel(E);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel(),
            };
        }),
        [w, D] = r.useState(!1),
        [F, U] = r.useState(!1),
        Y = (0, d.sE)(e, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: b,
        }),
        I = r.useCallback(() => {
            let t = null != P ? P : T;
            if (null != S) {
                if (!(null != b && (null == b ? void 0 : b.size) > 0 && y) || w) return;
                if ("" === T.trim() && !w) return void D(!0);
                S(e, [...b], M, t);
            } else {
                if (null == n) return;
                c.Z.banUser(e, null == n ? void 0 : n.id, M, t, E).then(() => {
                    F && null != E && g.Z.resolveFlag(E);
                });
            }
            Y(d.jQ.BAN), k();
        }, [P, T, S, Y, k, b, y, w, e, M, n, E, F]),
        X = r.useCallback((t) => {
            Z(t);
        }, []),
        q = r.useCallback((t) => {
            _(t), D(!1), A(null);
        }, []),
        L = r.useCallback(
            (t) => {
                A(t), w && D(!1);
            },
            [w],
        ),
        W = N && !K && null != E,
        B = [
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
        H = (() => {
            if (null != S && null != b)
                return f.intl.formatToPlainString(f.t.HVJexc, { count: null == b ? void 0 : b.size });
            if (null == n) return "";
            let t = h.ZP.getName(e, null, n);
            return f.intl.formatToPlainString(null != E ? f.t.WDR8XV : f.t.jeKpoq, { username: "@".concat(t) });
        })(),
        J = null == E ? null : f.intl.string(f.t.pQjhIC);
    return (0, l.jsx)(u.Modal, {
        onClose: k,
        transitionState: R,
        title: H,
        subtitle: null != J ? J : void 0,
        actions: (() => {
            let t = [];
            return (
                N ||
                    t.push({
                        variant: "secondary",
                        text: f.intl.string(f.t["ETE/oK"]),
                        onClick: k,
                    }),
                t.push({
                    variant: "critical-primary",
                    text: f.intl.string(f.t["5MBJ5O"]),
                    onClick: I,
                }),
                t
            );
        })(),
        actionBarInput: W
            ? (0, l.jsx)(s.Checkbox, {
                  checked: F,
                  onChange: (t) => U(t),
                  label: f.intl.string(j.default["8yIKen"]),
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
                            (0, l.jsx)(s.kzN, {
                                className: m.error,
                                children: f.intl.string(f.t.IrYX19),
                            }),
                        (0, l.jsx)(s.FXm, {
                            required: !0,
                            label: f.intl.string(null != E ? f.t["+KCLVl"] : f.t.w4Ivys),
                            value: T,
                            options: B.map((t) =>
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
                            onChange: q,
                        }),
                        (0, l.jsx)("div", {
                            className: a()(m.reasonFreeText, { [m.hidden]: "other" !== T }),
                            children: (0, l.jsx)(s.Kx8, {
                                maxLength: p.GNZ,
                                onChange: L,
                                value: null != P ? P : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(s.q4e, {
                    label: f.intl.string(null != E ? f.t.ERSM8P : f.t["8l3W09"]),
                    options: x(),
                    value: M,
                    onChange: X,
                }),
            ],
        }),
    });
}
