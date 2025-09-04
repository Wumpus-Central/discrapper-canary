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
    v = n(592125),
    b = n(70956),
    h = n(5192),
    m = n(981631),
    j = n(388032),
    x = n(764295),
    O = n(768716);
function f() {
    return [
        {
            value: 0,
            label: j.intl.string(j.t["4obaMT"]),
        },
        {
            value: +b.Z.Seconds.HOUR,
            label: j.intl.string(j.t.RKpitb),
        },
        {
            value: 6 * b.Z.Seconds.HOUR,
            label: j.intl.string(j.t["8WfJZ2"]),
        },
        {
            value: 12 * b.Z.Seconds.HOUR,
            label: j.intl.string(j.t.p1up7u),
        },
        {
            value: +b.Z.Seconds.DAY,
            label: j.intl.string(j.t.XuVkkJ),
        },
        {
            value: 3 * b.Z.Seconds.DAY,
            label: j.intl.string(j.t.gMcDS0),
        },
        {
            value: 7 * b.Z.Seconds.DAY,
            label: j.intl.string(j.t.FA7IUl),
        },
    ];
}
let y = f()[1].value,
    C = f()[0].value;
function S(t) {
    let {
            guildId: e,
            user: n,
            location: i,
            userIds: b,
            onBanMultiple: S,
            transitionState: _,
            onClose: P,
            canBulkBan: R = !1,
            modReportId: T,
        } = t,
        [k, E] = l.useState(null != T ? C : y),
        [M, Z] = l.useState(""),
        [w, N] = l.useState(null),
        { isModReportClosed: D, isModReport: I } = (0, o.cj)([v.Z], () => {
            let t = v.Z.getChannel(T);
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
            targets: b,
        }),
        W = l.useCallback(() => {
            let t = null != w ? w : M;
            if (null != S) {
                if (!(null != b && (null == b ? void 0 : b.size) > 0 && R) || A) return;
                if ("" === M.trim() && !A) return void K(!0);
                S(e, [...b], k, t);
            } else {
                if (null == n) return;
                d.Z.banUser(e, null == n ? void 0 : n.id, k, t, T).then(() => {
                    U && null != T && g.Z.resolveFlag(T);
                });
            }
            F(p.jQ.BAN), P();
        }, [w, M, S, F, P, b, R, A, e, k, n, T, U]),
        B = l.useCallback((t) => {
            E(t);
        }, []),
        J = l.useCallback((t) => {
            let { value: e } = t;
            Z(e), K(!1), N(null);
        }, []),
        q = l.useCallback(
            (t) => {
                N(t), A && K(!1);
            },
            [A],
        ),
        G = I && !D && null != T,
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
        X = (() => {
            if (null != S && null != b)
                return j.intl.formatToPlainString(j.t.HVJexc, { count: null == b ? void 0 : b.size });
            if (null == n) return "";
            let t = h.ZP.getName(e, null, n);
            return j.intl.formatToPlainString(null != T ? j.t.WDR8XV : j.t.jeKpoq, { username: "@".concat(t) });
        })(),
        H = null == T ? null : j.intl.string(j.t.pQjhIC);
    return (0, r.jsx)(s.Modal, {
        onClose: P,
        transitionState: _,
        title: X,
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
                    onClick: W,
                }),
                t
            );
        })(),
        actionBarInput: G
            ? (0, r.jsx)(u.$q, {
                  value: U,
                  onChange: (t, e) => Y(e),
                  children: (0, r.jsx)(c.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: j.intl.string(x.default["8yIKen"]),
                  }),
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
                            titleClassName: O.title,
                            title: (0, r.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                children: j.intl.string(null != T ? j.t["+KCLVl"] : j.t.w4Ivys),
                            }),
                            children: [
                                A &&
                                    (0, r.jsx)(c.kzN, {
                                        className: O.error,
                                        children: j.intl.string(j.t.IrYX19),
                                    }),
                                (0, r.jsx)(u.Gu, {
                                    className: O.radioGroup,
                                    value: M,
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
                                            (n = n = { radioBarClassName: O.radioItem }),
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
                                    onChange: J,
                                    withTransparentBackground: !0,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: a()(O.reasonFreeText, { [O.hidden]: "other" !== M }),
                            children: (0, r.jsx)(c.Kx8, {
                                maxLength: m.GNZ,
                                onChange: q,
                                value: null != w ? w : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(c.xJW, {
                    titleClassName: O.title,
                    title: (0, r.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "text-primary",
                        children: j.intl.string(null != T ? j.t.ERSM8P : j.t["8l3W09"]),
                    }),
                    children: (0, r.jsx)(c.q4e, {
                        options: f(),
                        value: k,
                        onChange: B,
                    }),
                }),
            ],
        }),
    });
}
