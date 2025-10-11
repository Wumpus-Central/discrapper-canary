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
    h = n(70956),
    p = n(5192),
    b = n(981631),
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
            value: +h.Z.Seconds.HOUR,
            label: f.intl.string(f.t.RKpitb),
        },
        {
            value: 6 * h.Z.Seconds.HOUR,
            label: f.intl.string(f.t["8WfJZ2"]),
        },
        {
            value: 12 * h.Z.Seconds.HOUR,
            label: f.intl.string(f.t.p1up7u),
        },
        {
            value: +h.Z.Seconds.DAY,
            label: f.intl.string(f.t.XuVkkJ),
        },
        {
            value: 3 * h.Z.Seconds.DAY,
            label: f.intl.string(f.t.gMcDS0),
        },
        {
            value: 7 * h.Z.Seconds.DAY,
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
            userIds: h,
            onBanMultiple: S,
            transitionState: R,
            onClose: y,
            canBulkBan: M = !1,
            modReportId: k,
        } = t,
        [E, Z] = r.useState(null != k ? O : C),
        [T, P] = r.useState(""),
        [_, A] = r.useState(null),
        { isModReportClosed: K, isModReport: w } = (0, o.cj)([v.Z], () => {
            let t = v.Z.getChannel(k);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel(),
            };
        }),
        [D, F] = r.useState(!1),
        [U, Y] = r.useState(!1),
        I = (0, d.sE)(e, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: h,
        }),
        N = r.useCallback(() => {
            let t = null != _ ? _ : T;
            if (null != S) {
                if (!(null != h && (null == h ? void 0 : h.size) > 0 && M) || D) return;
                if ("" === T.trim() && !D) return void F(!0);
                S(e, [...h], E, t);
            } else {
                if (null == n) return;
                c.Z.banUser(e, null == n ? void 0 : n.id, E, t, k).then(() => {
                    U && null != k && g.Z.resolveFlag(k);
                });
            }
            I(d.jQ.BAN), y();
        }, [_, T, S, I, y, h, M, D, e, E, n, k, U]),
        X = r.useCallback((t) => {
            Z(t);
        }, []),
        q = r.useCallback((t) => {
            P(t), F(!1), A(null);
        }, []),
        L = r.useCallback(
            (t) => {
                A(t), D && F(!1);
            },
            [D],
        ),
        W = w && !K && null != k,
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
            if (null != S && null != h)
                return f.intl.formatToPlainString(f.t.HVJexc, { count: null == h ? void 0 : h.size });
            if (null == n) return "";
            let t = p.ZP.getName(e, null, n);
            return f.intl.formatToPlainString(null != k ? f.t.WDR8XV : f.t.jeKpoq, { username: "@".concat(t) });
        })(),
        J = null == k ? null : f.intl.string(f.t.pQjhIC);
    return (0, l.jsx)(u.Modal, {
        onClose: y,
        transitionState: R,
        title: H,
        subtitle: null != J ? J : void 0,
        actions: (() => {
            let t = [];
            return (
                w ||
                    t.push({
                        variant: "secondary",
                        text: f.intl.string(f.t["ETE/oK"]),
                        onClick: y,
                    }),
                t.push({
                    variant: "critical-primary",
                    text: f.intl.string(f.t["5MBJ5O"]),
                    onClick: N,
                }),
                t
            );
        })(),
        actionBarInput: W
            ? (0, l.jsx)(s.Checkbox, {
                  checked: U,
                  onChange: (t) => Y(t),
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
                        D &&
                            (0, l.jsx)(s.M14, {
                                type: "critical",
                                children: f.intl.string(f.t.IrYX19),
                            }),
                        (0, l.jsx)(s.FXm, {
                            required: !0,
                            label: f.intl.string(null != k ? f.t["+KCLVl"] : f.t.w4Ivys),
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
                                maxLength: b.GNZ,
                                onChange: L,
                                value: null != _ ? _ : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(s.q4e, {
                    label: f.intl.string(null != k ? f.t.ERSM8P : f.t["8l3W09"]),
                    options: x(),
                    value: E,
                    onChange: X,
                }),
            ],
        }),
    });
}
