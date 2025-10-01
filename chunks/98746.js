n.d(t, { default: () => j }), n(388685), n(781311), n(539854);
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
    u = n(793030),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    d = n(749210),
    _ = n(910693),
    b = n(501517),
    g = n(592125),
    p = n(70956),
    v = n(5192),
    f = n(981631),
    O = n(388032),
    E = n(764295),
    m = n(768716);
function h() {
    return [
        {
            value: 0,
            label: O.intl.string(O.t["4obaMT"]),
        },
        {
            value: +p.Z.Seconds.HOUR,
            label: O.intl.string(O.t.RKpitb),
        },
        {
            value: 6 * p.Z.Seconds.HOUR,
            label: O.intl.string(O.t["8WfJZ2"]),
        },
        {
            value: 12 * p.Z.Seconds.HOUR,
            label: O.intl.string(O.t.p1up7u),
        },
        {
            value: +p.Z.Seconds.DAY,
            label: O.intl.string(O.t.XuVkkJ),
        },
        {
            value: 3 * p.Z.Seconds.DAY,
            label: O.intl.string(O.t.gMcDS0),
        },
        {
            value: 7 * p.Z.Seconds.DAY,
            label: O.intl.string(O.t.FA7IUl),
        },
    ];
}
let S = h()[1].value,
    M = h()[0].value;
function j(e) {
    let {
            guildId: t,
            user: n,
            location: i,
            userIds: p,
            onBanMultiple: j,
            transitionState: y,
            onClose: A,
            canBulkBan: C = !1,
            modReportId: T,
        } = e,
        [I, D] = r.useState(null != T ? M : S),
        [k, x] = r.useState(""),
        [R, P] = r.useState(null),
        { isModReportClosed: N, isModReport: U } = (0, o.cj)([g.Z], () => {
            let e = g.Z.getChannel(T);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel(),
            };
        }),
        [w, Z] = r.useState(!1),
        [Y, B] = r.useState(!1),
        L = (0, _.sE)(t, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: p,
        }),
        F = r.useCallback(() => {
            let e = null != R ? R : k;
            if (null != j) {
                if (!(null != p && (null == p ? void 0 : p.size) > 0 && C) || w) return;
                if ("" === k.trim() && !w) return void Z(!0);
                j(t, [...p], I, e);
            } else {
                if (null == n) return;
                d.Z.banUser(t, null == n ? void 0 : n.id, I, e, T).then(() => {
                    Y && null != T && b.Z.resolveFlag(T);
                });
            }
            L(_.jQ.BAN), A();
        }, [R, k, j, L, A, p, C, w, t, I, n, T, Y]),
        K = r.useCallback((e) => {
            D(e);
        }, []),
        G = r.useCallback((e) => {
            let { value: t } = e;
            x(t), Z(!1), P(null);
        }, []),
        H = r.useCallback(
            (e) => {
                P(e), w && Z(!1);
            },
            [w],
        ),
        V = U && !N && null != T,
        q = [
            {
                name: O.intl.string(O.t.tamLhY),
                value: O.intl.string(O.t.tamLhY),
            },
            {
                name: O.intl.string(O.t.UmxjMj),
                value: O.intl.string(O.t.UmxjMj),
            },
            {
                name: O.intl.string(O.t.EXY1d3),
                value: O.intl.string(O.t.EXY1d3),
            },
            {
                name: O.intl.string(O.t.BcZTKi),
                value: "other",
            },
        ],
        X = (() => {
            if (null != j && null != p)
                return O.intl.formatToPlainString(O.t.HVJexc, { count: null == p ? void 0 : p.size });
            if (null == n) return "";
            let e = v.ZP.getName(t, null, n);
            return O.intl.formatToPlainString(null != T ? O.t.WDR8XV : O.t.jeKpoq, { username: "@".concat(e) });
        })(),
        J = null == T ? null : O.intl.string(O.t.pQjhIC);
    return (0, l.jsx)(u.Modal, {
        onClose: A,
        transitionState: y,
        title: X,
        subtitle: null != J ? J : void 0,
        actions: (() => {
            let e = [];
            return (
                U ||
                    e.push({
                        variant: "secondary",
                        text: O.intl.string(O.t["ETE/oK"]),
                        onClick: A,
                    }),
                e.push({
                    variant: "critical-primary",
                    text: O.intl.string(O.t["5MBJ5O"]),
                    onClick: F,
                }),
                e
            );
        })(),
        actionBarInput: V
            ? (0, l.jsx)(c.XZJ, {
                  checked: Y,
                  onChange: (e) => B(e),
                  label: O.intl.string(E.default["8yIKen"]),
              })
            : void 0,
        children: (0, l.jsxs)(c.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, l.jsxs)(c.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        w &&
                            (0, l.jsx)(c.kzN, {
                                className: m.error,
                                children: O.intl.string(O.t.IrYX19),
                            }),
                        (0, l.jsx)(s.Gu, {
                            required: !0,
                            label: O.intl.string(null != T ? O.t["+KCLVl"] : O.t.w4Ivys),
                            className: m.radioGroup,
                            value: k,
                            options: q.map((e) => {
                                var t, n;
                                return (
                                    (t = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                l = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (l = l.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                l.forEach(function (t) {
                                                    var l;
                                                    (l = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: l,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = l);
                                                });
                                        }
                                        return e;
                                    })({}, e)),
                                    (n = n = { radioBarClassName: m.radioItem }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var l = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, l);
                                              }
                                              return n;
                                          })(Object(n)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                          }),
                                    t
                                );
                            }),
                            onChange: G,
                            withTransparentBackground: !0,
                        }),
                        (0, l.jsx)("div", {
                            className: a()(m.reasonFreeText, { [m.hidden]: "other" !== k }),
                            children: (0, l.jsx)(c.Kx8, {
                                maxLength: f.GNZ,
                                onChange: H,
                                value: null != R ? R : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(c.q4e, {
                    label: O.intl.string(null != T ? O.t.ERSM8P : O.t["8l3W09"]),
                    options: h(),
                    value: I,
                    onChange: K,
                }),
            ],
        }),
    });
}
