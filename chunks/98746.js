n.d(t, { default: () => C }), n(388685), n(781311), n(539854);
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
    b = n(501517),
    g = n(592125),
    v = n(70956),
    h = n(5192),
    O = n(981631),
    j = n(388032),
    f = n(764295),
    m = n(768716);
function y() {
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
let S = y()[1].value,
    x = y()[0].value;
function C(e) {
    let {
            guildId: t,
            user: n,
            location: i,
            userIds: v,
            onBanMultiple: C,
            transitionState: P,
            onClose: k,
            canBulkBan: R = !1,
            modReportId: _,
        } = e,
        [E, Z] = l.useState(null != _ ? x : S),
        [M, w] = l.useState(""),
        [T, D] = l.useState(null),
        { isModReportClosed: N, isModReport: I } = (0, o.cj)([g.Z], () => {
            let e = g.Z.getChannel(_);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel(),
            };
        }),
        [A, K] = l.useState(!1),
        [U, Y] = l.useState(!1),
        F = (0, p.sE)(t, {
            location: i,
            targetUserId: null == n ? void 0 : n.id,
            targets: v,
        }),
        B = l.useCallback(() => {
            let e = null != T ? T : M;
            if (null != C) {
                if (!(null != v && (null == v ? void 0 : v.size) > 0 && R) || A) return;
                if ("" === M.trim() && !A) return void K(!0);
                C(t, [...v], E, e);
            } else {
                if (null == n) return;
                d.Z.banUser(t, null == n ? void 0 : n.id, E, e, _).then(() => {
                    U && null != _ && b.Z.resolveFlag(_);
                });
            }
            F(p.jQ.BAN), k();
        }, [T, M, C, F, k, v, R, A, t, E, n, _, U]),
        X = l.useCallback((e) => {
            Z(e);
        }, []),
        q = l.useCallback((e) => {
            let { value: t } = e;
            w(t), K(!1), D(null);
        }, []),
        G = l.useCallback(
            (e) => {
                D(e), A && K(!1);
            },
            [A],
        ),
        J = I && !N && null != _,
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
        W = (() => {
            if (null != C && null != v)
                return j.intl.formatToPlainString(j.t.HVJexc, { count: null == v ? void 0 : v.size });
            if (null == n) return "";
            let e = h.ZP.getName(t, null, n);
            return j.intl.formatToPlainString(null != _ ? j.t.WDR8XV : j.t.jeKpoq, { username: "@".concat(e) });
        })(),
        H = null == _ ? null : j.intl.string(j.t.pQjhIC);
    return (0, r.jsx)(s.Modal, {
        onClose: k,
        transitionState: P,
        title: W,
        subtitle: null != H ? H : void 0,
        actions: (() => {
            let e = [];
            return (
                I ||
                    e.push({
                        variant: "secondary",
                        text: j.intl.string(j.t["ETE/oK"]),
                        onClick: k,
                    }),
                e.push({
                    variant: "critical-primary",
                    text: j.intl.string(j.t["5MBJ5O"]),
                    onClick: B,
                }),
                e
            );
        })(),
        actionBarInput: J
            ? (0, r.jsx)(c.XZJ, {
                  checked: U,
                  onChange: (e) => Y(e),
                  label: j.intl.string(f.default["8yIKen"]),
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
                        A &&
                            (0, r.jsx)(c.kzN, {
                                className: m.error,
                                children: j.intl.string(j.t.IrYX19),
                            }),
                        (0, r.jsx)(u.Gu, {
                            required: !0,
                            label: j.intl.string(null != _ ? j.t["+KCLVl"] : j.t.w4Ivys),
                            className: m.radioGroup,
                            value: M,
                            options: L.map((e) => {
                                var t, n;
                                return (
                                    (t = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = r);
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
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(n)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                          }),
                                    t
                                );
                            }),
                            onChange: q,
                            withTransparentBackground: !0,
                        }),
                        (0, r.jsx)("div", {
                            className: a()(m.reasonFreeText, { [m.hidden]: "other" !== M }),
                            children: (0, r.jsx)(c.Kx8, {
                                maxLength: O.GNZ,
                                onChange: G,
                                value: null != T ? T : "",
                                rows: 5,
                                autoFocus: !0,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(c.q4e, {
                    label: j.intl.string(null != _ ? j.t.ERSM8P : j.t["8l3W09"]),
                    options: y(),
                    value: E,
                    onChange: X,
                }),
            ],
        }),
    });
}
