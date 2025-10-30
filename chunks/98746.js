n.d(e, { default: () => k }), n(388685), n(781311), n(539854);
var l = n(951288),
    i = n(647438),
    r = n(120356),
    a = n.n(r),
    u = n(793030),
    s = n(442837),
    o = n(481060),
    c = n(749210),
    d = n(910693),
    g = n(501517),
    v = n(592125),
    h = n(70956),
    b = n(5192),
    p = n(981631),
    f = n(388032),
    m = n(68468),
    x = n(272567);
function j() {
    return [
        {
            value: 0,
            label: f.intl.string(f.t["4obaMS"]),
        },
        {
            value: +h.Z.Seconds.HOUR,
            label: f.intl.string(f.t.RKpitY),
        },
        {
            value: 6 * h.Z.Seconds.HOUR,
            label: f.intl.string(f.t["8WfJZ8"]),
        },
        {
            value: 12 * h.Z.Seconds.HOUR,
            label: f.intl.string(f.t.p1up7u),
        },
        {
            value: +h.Z.Seconds.DAY,
            label: f.intl.string(f.t.XuVkkD),
        },
        {
            value: 3 * h.Z.Seconds.DAY,
            label: f.intl.string(f.t["gMcDS+"]),
        },
        {
            value: 7 * h.Z.Seconds.DAY,
            label: f.intl.string(f.t.FA7IUk),
        },
    ];
}
let C = j()[1].value,
    S = j()[0].value;
function k(t) {
    let {
            guildId: e,
            user: n,
            location: r,
            userIds: h,
            onBanMultiple: k,
            transitionState: y,
            onClose: Z,
            canBulkBan: M = !1,
            modReportId: O,
        } = t,
        [T, K] = i.useState(null != O ? S : C),
        [R, w] = i.useState(""),
        [U, D] = i.useState(null),
        { isModReportClosed: E, isModReport: F } = (0, s.cj)([v.Z], () => {
            let t = v.Z.getChannel(O);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel(),
            };
        }),
        [I, P] = i.useState(!1),
        [Y, A] = i.useState(!1),
        X = (0, d.sE)(e, {
            location: r,
            targetUserId: null == n ? void 0 : n.id,
            targets: h,
        }),
        _ = i.useCallback(() => {
            let t = null != U ? U : R;
            if (null != k) {
                if (!(null != h && (null == h ? void 0 : h.size) > 0 && M) || I) return;
                if ("" === R.trim() && !I) return void P(!0);
                k(e, [...h], T, t);
            } else {
                if (null == n) return;
                c.Z.banUser(e, null == n ? void 0 : n.id, T, t, O).then(() => {
                    Y && null != O && g.Z.resolveFlag(O);
                });
            }
            X(d.jQ.BAN), Z();
        }, [U, R, k, X, Z, h, M, I, e, T, n, O, Y]),
        H = i.useCallback((t) => {
            K(t);
        }, []),
        q = i.useCallback((t) => {
            w(t), P(!1), D(null);
        }, []),
        B = i.useCallback(
            (t) => {
                D(t), I && P(!1);
            },
            [I],
        ),
        L = F && !E && null != O,
        N = [
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
        J = (() => {
            if (null != k && null != h)
                return f.intl.formatToPlainString(f.t.HVJexf, { count: null == h ? void 0 : h.size });
            if (null == n) return "";
            let t = b.ZP.getName(e, null, n);
            return f.intl.formatToPlainString(null != O ? f.t.WDR8Xd : f.t.jeKpok, { username: "@".concat(t) });
        })(),
        V = null == O ? null : f.intl.string(f.t.pQjhIK);
    return (0, l.jsx)(u.Modal, {
        onClose: Z,
        transitionState: y,
        title: J,
        subtitle: null != V ? V : void 0,
        actions: (() => {
            let t = [];
            return (
                F ||
                    t.push({
                        variant: "secondary",
                        text: f.intl.string(f.t["ETE/oC"]),
                        onClick: Z,
                    }),
                t.push({
                    variant: "critical-primary",
                    text: f.intl.string(f.t["5MBJ5M"]),
                    onClick: _,
                }),
                t
            );
        })(),
        actionBarInput: L
            ? (0, l.jsx)(o.Checkbox, {
                  checked: Y,
                  onChange: (t) => A(t),
                  label: f.intl.string(m.default["8yIKem"]),
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
                        I &&
                            (0, l.jsx)(o.M14, {
                                type: "critical",
                                children: f.intl.string(f.t.IrYX1y),
                            }),
                        (0, l.jsx)(o.FXm, {
                            required: !0,
                            label: f.intl.string(null != O ? f.t["+KCLVp"] : f.t.w4Ivys),
                            value: R,
                            options: N.map((t) =>
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
                            className: a()(x.reasonFreeText, { [x.hidden]: "other" !== R }),
                            children: (0, l.jsx)(o.Kx8, {
                                maxLength: p.GNZ,
                                onChange: B,
                                value: null != U ? U : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(o.q4e, {
                    label: f.intl.string(null != O ? f.t.ERSM8H : f.t["8l3W0y"]),
                    options: j(),
                    value: T,
                    onChange: H,
                }),
            ],
        }),
    });
}
