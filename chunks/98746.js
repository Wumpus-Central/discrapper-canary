n.d(e, { default: () => k }), n(388685), n(781311), n(539854);
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
    u = n(793030),
    s = n(442837),
    o = n(481060),
    c = n(749210),
    d = n(910693),
    g = n(501517),
    v = n(592125),
    b = n(70956),
    h = n(5192),
    p = n(981631),
    f = n(388032),
    m = n(764295),
    j = n(768716);
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
    S = x()[0].value;
function k(t) {
    let {
            guildId: e,
            user: n,
            location: i,
            userIds: b,
            onBanMultiple: k,
            transitionState: y,
            onClose: Z,
            canBulkBan: O = !1,
            modReportId: M,
        } = t,
        [K, R] = r.useState(null != M ? S : C),
        [T, w] = r.useState(""),
        [P, U] = r.useState(null),
        { isModReportClosed: Y, isModReport: _ } = (0, s.cj)([v.Z], () => {
            let t = v.Z.getChannel(M);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel(),
            };
        }),
        [E, F] = r.useState(!1),
        [I, A] = r.useState(!1),
        D = (0, d.sE)(e, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: b,
        }),
        N = r.useCallback(() => {
            let t = null != P ? P : T;
            if (null != k) {
                if (!(null != b && (null == b ? void 0 : b.size) > 0 && O) || E) return;
                if ("" === T.trim() && !E) return void F(!0);
                k(e, [...b], K, t);
            } else {
                if (null == n) return;
                c.Z.banUser(e, null == n ? void 0 : n.id, K, t, M).then(() => {
                    I && null != M && g.Z.resolveFlag(M);
                });
            }
            D(d.jQ.BAN), Z();
        }, [P, T, k, D, Z, b, O, E, e, K, n, M, I]),
        X = r.useCallback((t) => {
            R(t);
        }, []),
        q = r.useCallback((t) => {
            w(t), F(!1), U(null);
        }, []),
        B = r.useCallback(
            (t) => {
                U(t), E && F(!1);
            },
            [E],
        ),
        H = _ && !Y && null != M,
        J = [
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
        L = (() => {
            if (null != k && null != b)
                return f.intl.formatToPlainString(f.t.HVJexc, { count: null == b ? void 0 : b.size });
            if (null == n) return "";
            let t = h.ZP.getName(e, null, n);
            return f.intl.formatToPlainString(null != M ? f.t.WDR8XV : f.t.jeKpoq, { username: "@".concat(t) });
        })(),
        V = null == M ? null : f.intl.string(f.t.pQjhIC);
    return (0, l.jsx)(u.Modal, {
        onClose: Z,
        transitionState: y,
        title: L,
        subtitle: null != V ? V : void 0,
        actions: (() => {
            let t = [];
            return (
                _ ||
                    t.push({
                        variant: "secondary",
                        text: f.intl.string(f.t["ETE/oK"]),
                        onClick: Z,
                    }),
                t.push({
                    variant: "critical-primary",
                    text: f.intl.string(f.t["5MBJ5O"]),
                    onClick: N,
                }),
                t
            );
        })(),
        actionBarInput: H
            ? (0, l.jsx)(o.Checkbox, {
                  checked: I,
                  onChange: (t) => A(t),
                  label: f.intl.string(m.default["8yIKen"]),
              })
            : void 0,
        children: (0, l.jsxs)(o.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, l.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        E &&
                            (0, l.jsx)(o.kzN, {
                                className: j.error,
                                children: f.intl.string(f.t.IrYX19),
                            }),
                        (0, l.jsx)(o.FXm, {
                            required: !0,
                            label: f.intl.string(null != M ? f.t["+KCLVl"] : f.t.w4Ivys),
                            value: T,
                            options: J.map((t) =>
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
                            className: a()(j.reasonFreeText, { [j.hidden]: "other" !== T }),
                            children: (0, l.jsx)(o.Kx8, {
                                maxLength: p.GNZ,
                                onChange: B,
                                value: null != P ? P : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(o.q4e, {
                    label: f.intl.string(null != M ? f.t.ERSM8P : f.t["8l3W09"]),
                    options: x(),
                    value: K,
                    onChange: X,
                }),
            ],
        }),
    });
}
