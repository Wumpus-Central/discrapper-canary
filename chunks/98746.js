n.d(e, { default: () => S }), n(388685), n(781311), n(539854);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(82659),
    u = n(755721),
    c = n(481060),
    d = n(749210),
    p = n(910693),
    g = n(501517),
    b = n(592125),
    v = n(70956),
    h = n(5192),
    m = n(981631),
    j = n(388032),
    O = n(764295),
    f = n(768716);
function x() {
    return [
        {
            value: 0,
            label: j.intl.string(j.t["4obaMT"]),
        },
        {
            value: +v.Z.Seconds.HOUR,
            label: j.intl.string(j.t.RKpitb),
        },
        {
            value: 6 * v.Z.Seconds.HOUR,
            label: j.intl.string(j.t["8WfJZ2"]),
        },
        {
            value: 12 * v.Z.Seconds.HOUR,
            label: j.intl.string(j.t.p1up7u),
        },
        {
            value: +v.Z.Seconds.DAY,
            label: j.intl.string(j.t.XuVkkJ),
        },
        {
            value: 3 * v.Z.Seconds.DAY,
            label: j.intl.string(j.t.gMcDS0),
        },
        {
            value: 7 * v.Z.Seconds.DAY,
            label: j.intl.string(j.t.FA7IUl),
        },
    ];
}
let y = x()[1].value,
    C = x()[0].value;
function S(t) {
    let {
            guildId: e,
            user: n,
            location: i,
            userIds: v,
            onBanMultiple: S,
            transitionState: _,
            onClose: P,
            canBulkBan: k = !1,
            modReportId: R,
        } = t,
        [E, T] = l.useState(null != R ? C : y),
        [Z, M] = l.useState(""),
        [w, N] = l.useState(null),
        { isModReportClosed: D, isModReport: I } = (0, o.cj)([b.Z], () => {
            let t = b.Z.getChannel(R);
            return {
                isModReportClosed: null == t ? void 0 : t.isArchivedThread(),
                isModReport: null == t ? void 0 : t.isModeratorReportChannel(),
            };
        }),
        [A, K] = l.useState(!1),
        [U, Y] = l.useState(!1),
        F = (0, p.sE)(e, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: v,
        }),
        J = l.useCallback(() => {
            let t = null != w ? w : Z;
            if (null != S) {
                if (!(null != v && (null == v ? void 0 : v.size) > 0 && k) || A) return;
                if ("" === Z.trim() && !A) return void K(!0);
                S(e, [...v], E, t);
            } else {
                if (null == n) return;
                d.Z.banUser(e, null == n ? void 0 : n.id, E, t, R).then(() => {
                    U && null != R && g.Z.resolveFlag(R);
                });
            }
            F(p.jQ.BAN), P();
        }, [w, Z, S, F, P, v, k, A, e, E, n, R, U]),
        W = l.useCallback((t) => {
            T(t);
        }, []),
        B = l.useCallback((t) => {
            let { value: e } = t;
            M(e), K(!1), N(null);
        }, []),
        X = l.useCallback(
            (t) => {
                N(t), A && K(!1);
            },
            [A],
        ),
        G = I && !D && null != R,
        L = [
            {
                name: j.intl.string(j.t.tamLhY),
                value: j.intl.string(j.t.tamLhY),
            },
            {
                name: j.intl.string(j.t.UmxjMj),
                value: j.intl.string(j.t.UmxjMj),
            },
            {
                name: j.intl.string(j.t.EXY1d3),
                value: j.intl.string(j.t.EXY1d3),
            },
            {
                name: j.intl.string(j.t.BcZTKi),
                value: "other",
            },
        ],
        q = (() => {
            if (null != S && null != v)
                return j.intl.formatToPlainString(j.t.HVJexc, { count: null == v ? void 0 : v.size });
            if (null == n) return "";
            let t = h.ZP.getName(e, null, n);
            return j.intl.formatToPlainString(null != R ? j.t.WDR8XV : j.t.jeKpoq, { username: "@".concat(t) });
        })(),
        H = null == R ? null : j.intl.string(j.t.pQjhIC);
    return (0, r.jsx)(s.Modal, {
        onClose: P,
        transitionState: _,
        title: q,
        subtitle: null != H ? H : void 0,
        actions: (() => {
            let t = [];
            return (
                I ||
                    t.push({
                        variant: "secondary",
                        text: j.intl.string(j.t["ETE/oK"]),
                        onClick: P,
                    }),
                t.push({
                    variant: "critical-primary",
                    text: j.intl.string(j.t["5MBJ5O"]),
                    onClick: J,
                }),
                t
            );
        })(),
        actionBarInput: G
            ? (0, r.jsx)(c.XZJ, {
                  checked: U,
                  onChange: (t) => Y(t),
                  label: j.intl.string(O.default["8yIKen"]),
              })
            : void 0,
        children: (0, r.jsxs)(c.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsxs)(c.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        (0, r.jsxs)(c.xJW, {
                            titleClassName: f.title,
                            title: (0, r.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                children: j.intl.string(null != R ? j.t["+KCLVl"] : j.t.w4Ivys),
                            }),
                            children: [
                                A &&
                                    (0, r.jsx)(c.kzN, {
                                        className: f.error,
                                        children: j.intl.string(j.t.IrYX19),
                                    }),
                                (0, r.jsx)(u.Gu, {
                                    className: f.radioGroup,
                                    value: Z,
                                    options: L.map((t) => {
                                        var e, n;
                                        return (
                                            (e = (function (t) {
                                                for (var e = 1; e < arguments.length; e++) {
                                                    var n = null != arguments[e] ? arguments[e] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (r = r.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                            }),
                                                        )),
                                                        r.forEach(function (e) {
                                                            var r;
                                                            (r = n[e]),
                                                                e in t
                                                                    ? Object.defineProperty(t, e, {
                                                                          value: r,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0,
                                                                      })
                                                                    : (t[e] = r);
                                                        });
                                                }
                                                return t;
                                            })({}, t)),
                                            (n = n = { radioBarClassName: f.radioItem }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                : (function (t, e) {
                                                      var n = Object.keys(t);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(t);
                                                          n.push.apply(n, r);
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
                                    onChange: B,
                                    withTransparentBackground: !0,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: a()(f.reasonFreeText, { [f.hidden]: "other" !== Z }),
                            children: (0, r.jsx)(c.Kx8, {
                                maxLength: m.GNZ,
                                onChange: X,
                                value: null != w ? w : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(c.xJW, {
                    titleClassName: f.title,
                    title: (0, r.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "text-primary",
                        children: j.intl.string(null != R ? j.t.ERSM8P : j.t["8l3W09"]),
                    }),
                    children: (0, r.jsx)(c.q4e, {
                        options: x(),
                        value: E,
                        onChange: W,
                    }),
                }),
            ],
        }),
    });
}
