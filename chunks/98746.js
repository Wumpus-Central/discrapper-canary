n.d(e, { default: () => x }), n(388685), n(781311), n(539854);
var l = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    u = n(82659),
    s = n(481060),
    c = n(749210),
    d = n(910693),
    _ = n(501517),
    g = n(592125),
    b = n(70956),
    p = n(5192),
    v = n(981631),
    m = n(388032),
    f = n(130883),
    O = n(221166);
function E() {
    return [
        {
            value: 0,
            label: m.intl.string(m.t["4obaMT"]),
        },
        {
            value: +b.Z.Seconds.HOUR,
            label: m.intl.string(m.t.RKpitb),
        },
        {
            value: 6 * b.Z.Seconds.HOUR,
            label: m.intl.string(m.t["8WfJZ2"]),
        },
        {
            value: 12 * b.Z.Seconds.HOUR,
            label: m.intl.string(m.t.p1up7u),
        },
        {
            value: +b.Z.Seconds.DAY,
            label: m.intl.string(m.t.XuVkkJ),
        },
        {
            value: 3 * b.Z.Seconds.DAY,
            label: m.intl.string(m.t.gMcDS0),
        },
        {
            value: 7 * b.Z.Seconds.DAY,
            label: m.intl.string(m.t.FA7IUl),
        },
    ];
}
let h = E()[1].value,
    j = E()[0].value;
function x(t) {
    let {
            guildId: e,
            user: n,
            location: i,
            userIds: b,
            onBanMultiple: x,
            transitionState: y,
            onClose: S,
            canBulkBan: M = !1,
            modReportId: C,
        } = t,
        [A, T] = r.useState(null != C ? j : h),
        [I, D] = r.useState(""),
        [k, N] = r.useState(null),
        { isModReportClosed: R, isModReport: P } = (0, o.cj)([g.Z], () => {
            let t = g.Z.getChannel(C);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel(),
            };
        }),
        [U, w] = r.useState(!1),
        [Z, Y] = r.useState(!1),
        B = (0, d.sE)(e, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: b,
        }),
        F = r.useCallback(() => {
            let t = null != k ? k : I;
            if (null != x) {
                if (!(null != b && (null == b ? void 0 : b.size) > 0 && M) || U) return;
                if ("" === I.trim() && !U) return void w(!0);
                x(e, [...b], A, t);
            } else {
                if (null == n) return;
                c.Z.banUser(e, null == n ? void 0 : n.id, A, t, C).then(() => {
                    Z && null != C && _.Z.resolveFlag(C);
                });
            }
            B(d.jQ.BAN), S();
        }, [k, I, x, B, S, b, M, U, e, A, n, C, Z]),
        L = r.useCallback((t) => {
            T(t);
        }, []),
        K = r.useCallback((t) => {
            let { value: e } = t;
            D(e), w(!1), N(null);
        }, []),
        H = r.useCallback(
            (t) => {
                N(t), U && w(!1);
            },
            [U],
        ),
        G = P && !R && null != C,
        V = [
            {
                name: m.intl.string(m.t.tamLhY),
                value: m.intl.string(m.t.tamLhY),
            },
            {
                name: m.intl.string(m.t.UmxjMj),
                value: m.intl.string(m.t.UmxjMj),
            },
            {
                name: m.intl.string(m.t.EXY1d3),
                value: m.intl.string(m.t.EXY1d3),
            },
            {
                name: m.intl.string(m.t.BcZTKi),
                value: "other",
            },
        ],
        J = (() => {
            if (null != x && null != b)
                return m.intl.formatToPlainString(m.t.HVJexc, { count: null == b ? void 0 : b.size });
            if (null == n) return "";
            let t = p.ZP.getName(e, null, n);
            return m.intl.formatToPlainString(null != C ? m.t.WDR8XV : m.t.jeKpoq, { username: "@".concat(t) });
        })(),
        W = null == C ? null : m.intl.string(m.t.pQjhIC);
    return (0, l.jsx)(u.Modal, {
        onClose: S,
        transitionState: y,
        title: J,
        subtitle: null != W ? W : void 0,
        actions: (() => {
            let t = [];
            return (
                P ||
                    t.push({
                        variant: "secondary",
                        text: m.intl.string(m.t["ETE/oK"]),
                        onClick: S,
                    }),
                t.push({
                    variant: "critical-primary",
                    text: m.intl.string(m.t["5MBJ5O"]),
                    onClick: F,
                }),
                t
            );
        })(),
        actionBarInput: G
            ? (0, l.jsx)(s.XZJ, {
                  value: Z,
                  onChange: (t, e) => Y(e),
                  children: (0, l.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: m.intl.string(f.default["8yIKen"]),
                  }),
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
                        (0, l.jsxs)(s.xJW, {
                            titleClassName: O.title,
                            title: (0, l.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                children: m.intl.string(null != C ? m.t["+KCLVl"] : m.t.w4Ivys),
                            }),
                            children: [
                                U &&
                                    (0, l.jsx)(s.kzN, {
                                        className: O.error,
                                        children: m.intl.string(m.t.IrYX19),
                                    }),
                                (0, l.jsx)(s.FXm, {
                                    className: O.radioGroup,
                                    value: I,
                                    options: V.map((t) => {
                                        var e, n;
                                        return (
                                            (e = (function (t) {
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
                                            })({}, t)),
                                            (n = n = { radioBarClassName: O.radioItem }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                : (function (t, e) {
                                                      var n = Object.keys(t);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var l = Object.getOwnPropertySymbols(t);
                                                          n.push.apply(n, l);
                                                      }
                                                      return n;
                                                  })(Object(n)).forEach(function (t) {
                                                      Object.defineProperty(
                                                          e,
                                                          t,
                                                          Object.getOwnPropertyDescriptor(n, t),
                                                      );
                                                  }),
                                            e
                                        );
                                    }),
                                    onChange: K,
                                    withTransparentBackground: !0,
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: a()(O.reasonFreeText, { [O.hidden]: "other" !== I }),
                            children: (0, l.jsx)(s.Kx8, {
                                maxLength: v.GNZ,
                                onChange: H,
                                value: null != k ? k : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(s.xJW, {
                    titleClassName: O.title,
                    title: (0, l.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-primary",
                        children: m.intl.string(null != C ? m.t.ERSM8P : m.t["8l3W09"]),
                    }),
                    children: (0, l.jsx)(s.q4e, {
                        options: E(),
                        value: A,
                        onChange: L,
                    }),
                }),
            ],
        }),
    });
}
